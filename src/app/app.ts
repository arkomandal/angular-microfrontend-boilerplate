import { Component, signal, Type } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf, NgComponentOutlet } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

type RemoteName = 'remote1' | 'remote2';
type TabId = 'home' | RemoteName;

interface DashboardTab {
  id: TabId;
  label: string;
}

interface ChildAppCard {
  id: RemoteName;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgIf, NgComponentOutlet, MatTabsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly appName = signal('App Name');
  protected readonly ownerName = signal('Arko Mandal');
  protected readonly tabs = signal<DashboardTab[]>([{ id: 'home', label: 'Home' }]);
  protected readonly activeTabIndex = signal(0);

  readonly childApps: ChildAppCard[] = [
    {
      id: 'remote1',
      title: 'Child App 1',
      description: 'First microfrontend module loaded from Remote 1.'
    },
    {
      id: 'remote2',
      title: 'Child App 2',
      description: 'Second microfrontend module loaded from Remote 2.'
    }
  ];

  private readonly labels: Record<RemoteName, string> = {
    remote1: 'Child App 1',
    remote2: 'Child App 2'
  };

  loadingByRemote = signal<Partial<Record<RemoteName, boolean>>>({});
  errorByRemote = signal<Partial<Record<RemoteName, string>>>({});
  remoteComps = signal<Partial<Record<RemoteName, Type<any>>>>({});

  openChildApp(card: ChildAppCard) {
    void this.openRemote(card.id);
  }

  async openRemote(name: RemoteName) {
    const targetIndex = this.ensureTab(name);
    this.activeTabIndex.set(targetIndex);

    await this.loadRemote(name, false);
  }

  private async loadRemote(name: RemoteName, forceReload: boolean) {
    const loadedComp = this.remoteComps()[name];
    if (loadedComp && !forceReload) {
      return;
    }

    this.loadingByRemote.update((state) => ({ ...state, [name]: true }));
    this.errorByRemote.update((state) => ({ ...state, [name]: '' }));

    try {
      // The remote name is constrained to a known union, so dynamic import is safe.
      const m = await import(/* @vite-ignore */ `${name}/Component`);
      this.remoteComps.update((current) => ({
        ...current,
        [name]: m.App
      }));
    } catch (e) {
      this.errorByRemote.update((state) => ({
        ...state,
        [name]: `Failed to load ${this.labels[name]}.`
      }));
      console.error('failed to load remote', e);
    } finally {
      this.loadingByRemote.update((state) => ({ ...state, [name]: false }));
    }
  }

  onTabChange(index: number) {
    this.activeTabIndex.set(index);
  }

  goHome() {
    const homeIndex = this.tabs().findIndex((tab) => tab.id === 'home');
    this.activeTabIndex.set(homeIndex >= 0 ? homeIndex : 0);
  }

  isRemoteTab(tab: DashboardTab): tab is DashboardTab & { id: RemoteName } {
    return tab.id !== 'home';
  }

  closeTab(index: number, event: MouseEvent) {
    event.stopPropagation();
    const currentTabs = this.tabs();
    const tabToClose = currentTabs[index];
    if (!tabToClose || tabToClose.id === 'home') {
      return;
    }

    this.tabs.set(currentTabs.filter((_, idx) => idx !== index));

    const currentIndex = this.activeTabIndex();
    if (currentIndex === index) {
      this.activeTabIndex.set(0);
      return;
    }

    if (currentIndex > index) {
      this.activeTabIndex.set(currentIndex - 1);
    }
  }

  reloadTab(tab: DashboardTab, event: MouseEvent) {
    event.stopPropagation();
    if (tab.id === 'home') {
      this.goHome();
      return;
    }

    void this.loadRemote(tab.id, true);
  }

  remoteCompFor(name: RemoteName): Type<any> | null {
    return this.remoteComps()[name] ?? null;
  }

  loadingFor(name: RemoteName): boolean {
    return !!this.loadingByRemote()[name];
  }

  errorFor(name: RemoteName): string {
    return this.errorByRemote()[name] ?? '';
  }

  private ensureTab(name: RemoteName): number {
    const tabs = this.tabs();
    const existingIndex = tabs.findIndex((tab) => tab.id === name);
    if (existingIndex >= 0) {
      return existingIndex;
    }

    this.tabs.update((nextTabs) => {
      if (tabs.some((tab) => tab.id === name)) {
        return nextTabs;
      }

      return [...nextTabs, { id: name, label: this.labels[name] }];
    });

    return this.tabs().length - 1;
  }
}
