var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/app/app.ts
import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NgFor, NgIf, NgComponentOutlet } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
function App_mat_tab_19_ng_template_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "button", 22);
    i0.\u0275\u0275listener("click", function App_mat_tab_19_ng_template_1_button_5_Template_button_click_0_listener($event) {
      i0.\u0275\u0275restoreView(_r4);
      const i_r5 = i0.\u0275\u0275nextContext(2).index;
      const ctx_r2 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r2.closeTab(i_r5, $event));
    });
    i0.\u0275\u0275text(1, " \u2715 ");
    i0.\u0275\u0275elementEnd();
  }
}
function App_mat_tab_19_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "div", 19)(1, "span", 11);
    i0.\u0275\u0275text(2);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(3, "button", 20);
    i0.\u0275\u0275listener("click", function App_mat_tab_19_ng_template_1_Template_button_click_3_listener($event) {
      i0.\u0275\u0275restoreView(_r1);
      const tab_r2 = i0.\u0275\u0275nextContext().$implicit;
      const ctx_r2 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r2.reloadTab(tab_r2, $event));
    });
    i0.\u0275\u0275text(4, " \u21BB ");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275template(5, App_mat_tab_19_ng_template_1_button_5_Template, 2, 0, "button", 21);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(tab_r2.label);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275property("ngIf", tab_r2.id !== "home");
  }
}
function App_mat_tab_19_ng_container_3_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "button", 26);
    i0.\u0275\u0275listener("click", function App_mat_tab_19_ng_container_3_button_3_Template_button_click_0_listener() {
      const card_r7 = i0.\u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = i0.\u0275\u0275nextContext(3);
      return i0.\u0275\u0275resetView(ctx_r2.openChildApp(card_r7));
    });
    i0.\u0275\u0275elementStart(1, "p", 27);
    i0.\u0275\u0275text(2);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(3, "p", 28);
    i0.\u0275\u0275text(4);
    i0.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r7 = ctx.$implicit;
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(card_r7.title);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(card_r7.description);
  }
}
function App_mat_tab_19_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementContainerStart(0);
    i0.\u0275\u0275elementStart(1, "div", 23)(2, "div", 24);
    i0.\u0275\u0275template(3, App_mat_tab_19_ng_container_3_button_3_Template, 5, 2, "button", 25);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = i0.\u0275\u0275nextContext(2);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275property("ngForOf", ctx_r2.childApps);
  }
}
function App_mat_tab_19_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 32);
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = i0.\u0275\u0275nextContext(2).$implicit;
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate1(" Loading ", tab_r2.label, "... ");
  }
}
function App_mat_tab_19_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "div", 33)(1, "p", 34);
    i0.\u0275\u0275text(2);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(3, "button", 35);
    i0.\u0275\u0275listener("click", function App_mat_tab_19_ng_container_4_div_2_Template_button_click_3_listener($event) {
      i0.\u0275\u0275restoreView(_r8);
      const tab_r2 = i0.\u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r2.reloadTab(tab_r2, $event));
    });
    i0.\u0275\u0275text(4, " Retry ");
    i0.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = i0.\u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(ctx_r2.errorFor(tab_r2.id));
  }
}
function App_mat_tab_19_ng_container_4_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementContainer(0);
  }
}
function App_mat_tab_19_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    i0.\u0275\u0275template(2, App_mat_tab_19_ng_container_4_div_3_ng_container_2_Template, 1, 0, "ng-container", 38);
    i0.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = i0.\u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275property("ngComponentOutlet", ctx_r2.remoteCompFor(tab_r2.id));
  }
}
function App_mat_tab_19_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementContainerStart(0);
    i0.\u0275\u0275template(1, App_mat_tab_19_ng_container_4_div_1_Template, 2, 1, "div", 29)(2, App_mat_tab_19_ng_container_4_div_2_Template, 5, 1, "div", 30)(3, App_mat_tab_19_ng_container_4_div_3_Template, 3, 1, "div", 31);
    i0.\u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tab_r2 = i0.\u0275\u0275nextContext().$implicit;
    const ctx_r2 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", ctx_r2.loadingFor(tab_r2.id));
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", !ctx_r2.loadingFor(tab_r2.id) && ctx_r2.errorFor(tab_r2.id));
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", !ctx_r2.loadingFor(tab_r2.id) && !ctx_r2.errorFor(tab_r2.id) && ctx_r2.remoteCompFor(tab_r2.id));
  }
}
function App_mat_tab_19_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "mat-tab");
    i0.\u0275\u0275template(1, App_mat_tab_19_ng_template_1_Template, 6, 2, "ng-template", 16);
    i0.\u0275\u0275elementStart(2, "section", 17);
    i0.\u0275\u0275template(3, App_mat_tab_19_ng_container_3_Template, 4, 1, "ng-container", 18)(4, App_mat_tab_19_ng_container_4_Template, 4, 3, "ng-container", 18);
    i0.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275property("ngIf", tab_r2.id === "home");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", ctx_r2.isRemoteTab(tab_r2));
  }
}
var App = class _App {
  appName = signal("App Name", ...ngDevMode ? [{ debugName: "appName" }] : []);
  ownerName = signal("Arko Mandal", ...ngDevMode ? [{ debugName: "ownerName" }] : []);
  tabs = signal([{ id: "home", label: "Home" }], ...ngDevMode ? [{ debugName: "tabs" }] : []);
  activeTabIndex = signal(0, ...ngDevMode ? [{ debugName: "activeTabIndex" }] : []);
  childApps = [
    {
      id: "remote1",
      title: "Child App 1",
      description: "First microfrontend module loaded from Remote 1."
    },
    {
      id: "remote2",
      title: "Child App 2",
      description: "Second microfrontend module loaded from Remote 2."
    }
  ];
  labels = {
    remote1: "Child App 1",
    remote2: "Child App 2"
  };
  loadingByRemote = signal({}, ...ngDevMode ? [{ debugName: "loadingByRemote" }] : []);
  errorByRemote = signal({}, ...ngDevMode ? [{ debugName: "errorByRemote" }] : []);
  remoteComps = signal({}, ...ngDevMode ? [{ debugName: "remoteComps" }] : []);
  openChildApp(card) {
    void this.openRemote(card.id);
  }
  openRemote(name) {
    return __async(this, null, function* () {
      const targetIndex = this.ensureTab(name);
      this.activeTabIndex.set(targetIndex);
      yield this.loadRemote(name, false);
    });
  }
  loadRemote(name, forceReload) {
    return __async(this, null, function* () {
      const loadedComp = this.remoteComps()[name];
      if (loadedComp && !forceReload) {
        return;
      }
      this.loadingByRemote.update((state) => __spreadProps(__spreadValues({}, state), { [name]: true }));
      this.errorByRemote.update((state) => __spreadProps(__spreadValues({}, state), { [name]: "" }));
      try {
        const m = yield import(
          /* @vite-ignore */
          `${name}/Component`
        );
        const resolvedComponent = m.App ?? m.default ?? Object.values(m).find((value) => {
          return !!value && typeof value === "function" && !!value.\u0275cmp;
        });
        if (!resolvedComponent) {
          throw new Error(`No Angular component export found in ${name}/Component`);
        }
        this.remoteComps.update((current) => __spreadProps(__spreadValues({}, current), {
          [name]: resolvedComponent
        }));
      } catch (e) {
        const message = e instanceof Error ? e.message : String(e);
        this.errorByRemote.update((state) => __spreadProps(__spreadValues({}, state), {
          [name]: `Failed to load ${this.labels[name]}: ${message}`
        }));
        console.error("failed to load remote", e);
      } finally {
        this.loadingByRemote.update((state) => __spreadProps(__spreadValues({}, state), { [name]: false }));
      }
    });
  }
  onTabChange(index) {
    this.activeTabIndex.set(index);
  }
  goHome() {
    const homeIndex = this.tabs().findIndex((tab) => tab.id === "home");
    this.activeTabIndex.set(homeIndex >= 0 ? homeIndex : 0);
  }
  isRemoteTab(tab) {
    return tab.id !== "home";
  }
  closeTab(index, event) {
    event.stopPropagation();
    const currentTabs = this.tabs();
    const tabToClose = currentTabs[index];
    if (!tabToClose || tabToClose.id === "home") {
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
  reloadTab(tab, event) {
    event.stopPropagation();
    if (tab.id === "home") {
      this.goHome();
      return;
    }
    void this.loadRemote(tab.id, true);
  }
  remoteCompFor(name) {
    return this.remoteComps()[name] ?? null;
  }
  loadingFor(name) {
    return !!this.loadingByRemote()[name];
  }
  errorFor(name) {
    return this.errorByRemote()[name] ?? "";
  }
  ensureTab(name) {
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
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 24, vars: 4, consts: [[1, "dark", "h-screen", "overflow-hidden", "bg-slate-950", "text-slate-100"], [1, "pointer-events-none", "fixed", "inset-0", "-z-10", "overflow-hidden"], [1, "absolute", "-left-24", "top-[-5rem]", "h-64", "w-64", "rounded-full", "bg-cyan-500/20", "blur-3xl"], [1, "absolute", "right-[-6rem]", "top-[8rem]", "h-72", "w-72", "rounded-full", "bg-indigo-500/20", "blur-3xl"], [1, "absolute", "bottom-[-8rem]", "left-1/3", "h-80", "w-80", "rounded-full", "bg-emerald-500/10", "blur-3xl"], [1, "mx-auto", "flex", "h-screen", "max-w-7xl", "flex-col", "px-6", "py-6", "lg:px-10"], [1, "mb-4", "shrink-0", "flex", "items-start", "justify-between", "rounded-2xl", "border", "border-white/10", "bg-white/5", "p-5", "backdrop-blur-xl"], [1, "text-3xl", "font-bold", "tracking-tight", "text-slate-50"], [1, "mt-1", "text-sm", "text-slate-300/90"], [1, "text-right"], [1, "text-xs", "uppercase", "tracking-widest", "text-slate-300/80"], [1, "text-sm", "font-semibold", "text-slate-100"], [1, "flex-1", "min-h-0", "overflow-hidden"], ["animationDuration", "150ms", 1, "glass-tabs", "viewport-tabs", "h-full", "rounded-2xl", "border", "border-white/10", "bg-white/5", "p-3", "backdrop-blur-xl", 3, "selectedIndexChange", "selectedIndex"], [4, "ngFor", "ngForOf"], [1, "mt-4", "shrink-0", "rounded-2xl", "border", "border-white/10", "bg-white/5", "p-4", "text-sm", "text-slate-200/90", "backdrop-blur-xl"], ["mat-tab-label", ""], [1, "h-full", "min-h-0", "p-4"], [4, "ngIf"], [1, "flex", "items-center", "gap-2"], ["type", "button", "aria-label", "Reload tab", "title", "Reload", 1, "rounded", "border", "border-cyan-300/30", "bg-cyan-400/10", "px-1.5", "py-0.5", "text-xs", "text-cyan-100", "transition", "hover:bg-cyan-300/20", 3, "click"], ["type", "button", "class", "rounded border border-rose-300/40 bg-rose-500/10 px-1.5 py-0.5 text-xs text-rose-100 transition", "aria-label", "Close tab", "title", "Close", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Close tab", "title", "Close", 1, "rounded", "border", "border-rose-300/40", "bg-rose-500/10", "px-1.5", "py-0.5", "text-xs", "text-rose-100", "transition", 3, "click"], [1, "mx-auto", "h-full", "max-w-5xl", "overflow-y-auto", "pr-1"], [1, "mt-2", "flex", "flex-wrap", "justify-center", "gap-5", "pb-2"], ["type", "button", "class", "tw-focus-ring w-full max-w-sm rounded-2xl border border-white/15 bg-gradient-to-b from-white/15 to-white/5 p-5 text-left shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/50 hover:from-cyan-300/15 hover:to-indigo-300/10", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "tw-focus-ring", "w-full", "max-w-sm", "rounded-2xl", "border", "border-white/15", "bg-gradient-to-b", "from-white/15", "to-white/5", "p-5", "text-left", "shadow-[0_8px_30px_rgba(0,0,0,0.35)]", "backdrop-blur-xl", "transition", "hover:-translate-y-1", "hover:border-cyan-300/50", "hover:from-cyan-300/15", "hover:to-indigo-300/10", 3, "click"], [1, "text-lg", "font-bold", "tracking-wide", "text-slate-50"], [1, "mt-2", "text-sm", "font-normal", "leading-relaxed", "text-slate-200/90"], ["class", "rounded-xl border border-white/15 bg-white/5 p-4 text-sm text-slate-100 backdrop-blur-lg", 4, "ngIf"], ["class", "rounded-xl border border-rose-300/40 bg-rose-900/30 p-4 backdrop-blur-lg", 4, "ngIf"], ["class", "rounded-xl border border-white/15 bg-slate-950/60 p-3 backdrop-blur-lg", 4, "ngIf"], [1, "rounded-xl", "border", "border-white/15", "bg-white/5", "p-4", "text-sm", "text-slate-100", "backdrop-blur-lg"], [1, "rounded-xl", "border", "border-rose-300/40", "bg-rose-900/30", "p-4", "backdrop-blur-lg"], [1, "text-sm", "text-rose-100"], ["type", "button", 1, "mt-3", "rounded-lg", "border", "border-rose-200/50", "bg-rose-400/10", "px-3", "py-1", "text-xs", "text-rose-100", "transition", "hover:bg-rose-300/20", 3, "click"], [1, "rounded-xl", "border", "border-white/15", "bg-slate-950/60", "p-3", "backdrop-blur-lg"], [1, "overflow-y-auto"], [4, "ngComponentOutlet"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      i0.\u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(5, "div", 5)(6, "header", 6)(7, "div")(8, "h1", 7);
      i0.\u0275\u0275text(9);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(10, "p", 8);
      i0.\u0275\u0275text(11, "Microfrontend Dashboard");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(12, "div", 9)(13, "p", 10);
      i0.\u0275\u0275text(14, "Owner");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(15, "p", 11);
      i0.\u0275\u0275text(16);
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(17, "main", 12)(18, "mat-tab-group", 13);
      i0.\u0275\u0275listener("selectedIndexChange", function App_Template_mat_tab_group_selectedIndexChange_18_listener($event) {
        return ctx.onTabChange($event);
      });
      i0.\u0275\u0275template(19, App_mat_tab_19_Template, 5, 2, "mat-tab", 14);
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(20, "footer", 15)(21, "p");
      i0.\u0275\u0275text(22, "This application demonstrates a tab-based Angular microfrontend dashboard with shared theming.");
      i0.\u0275\u0275elementEnd()()()();
      i0.\u0275\u0275element(23, "router-outlet");
    }
    if (rf & 2) {
      i0.\u0275\u0275advance(9);
      i0.\u0275\u0275textInterpolate(ctx.appName());
      i0.\u0275\u0275advance(7);
      i0.\u0275\u0275textInterpolate(ctx.ownerName());
      i0.\u0275\u0275advance(2);
      i0.\u0275\u0275property("selectedIndex", ctx.activeTabIndex());
      i0.\u0275\u0275advance();
      i0.\u0275\u0275property("ngForOf", ctx.tabs());
    }
  }, dependencies: [RouterOutlet, NgFor, NgIf, NgComponentOutlet, MatTabsModule, i1.MatTabLabel, i1.MatTab, i1.MatTabGroup], styles: ["\n\n[_nghost-%COMP%]     .glass-tabs .mat-mdc-tab-header {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n[_nghost-%COMP%]     .glass-tabs .mat-mdc-tab .mdc-tab__text-label {\n  color: rgba(226, 232, 240, 0.9);\n}\n[_nghost-%COMP%]     .glass-tabs .mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {\n  color: #e2e8f0;\n}\n[_nghost-%COMP%]     .glass-tabs .mdc-tab-indicator__content--underline {\n  border-color: #67e8f9;\n}\n[_nghost-%COMP%]     .glass-tabs .mat-mdc-tab-body-content {\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .viewport-tabs {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]     .viewport-tabs .mat-mdc-tab-body-wrapper {\n  flex: 1;\n  min-height: 0;\n}\n[_nghost-%COMP%]     .viewport-tabs .mat-mdc-tab-body, \n[_nghost-%COMP%]     .viewport-tabs .mat-mdc-tab-body-content {\n  height: 100%;\n  min-height: 0;\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 26 });
})();
export {
  App
};
//# sourceMappingURL=Component.js.map
