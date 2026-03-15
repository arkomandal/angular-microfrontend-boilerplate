import { initFederation } from '@angular-architects/native-federation';

// Some remote bundles can reference these globals directly in static-hosting builds.
// Ensure they exist before loading any remote components.
const angularGlobals = globalThis as {
  ngDevMode?: boolean;
  ngJitMode?: boolean;
};

angularGlobals.ngDevMode ??= false;
angularGlobals.ngJitMode ??= false;

async function getRuntimeManifest() {
  const repoName = 'angular-microfrontend-boilerplate';
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const origin = window.location.origin;

  const buildRemotes = (prefix: string) => ({
    remote1: `${origin}${prefix}/child1/browser/remoteEntry.json`,
    remote2: `${origin}${prefix}/child2/browser/remoteEntry.json`
  });

  const probeRemotes = async (prefix: string) => {
    const remotes = buildRemotes(prefix);

    try {
      const [remote1Res, remote2Res] = await Promise.all([
        fetch(remotes.remote1, { method: 'HEAD', cache: 'no-store' }),
        fetch(remotes.remote2, { method: 'HEAD', cache: 'no-store' })
      ]);

      return remote1Res.ok && remote2Res.ok;
    } catch {
      return false;
    }
  };

  // Static hosting pattern: /<prefix>/<host-app>/browser/
  // Example: /angular-microfrontend-boilerplate/browser/ (local dist root)
  // Example: /project/dist/angular-microfrontend-boilerplate/browser/ (deployed)
  const candidatePrefixes: string[] = [];
  const addPrefix = (prefix: string) => {
    if (!candidatePrefixes.includes(prefix)) {
      candidatePrefixes.push(prefix);
    }
  };

  const browserIndex = pathParts.lastIndexOf('browser');
  if (browserIndex > 0 && pathParts[browserIndex - 1] === repoName) {
    const sharedPrefixParts = pathParts.slice(0, browserIndex - 1);
    addPrefix(sharedPrefixParts.length > 0 ? `/${sharedPrefixParts.join('/')}` : '');
  }

  // GitHub Pages repo path and custom-domain root fallback.
  if (browserIndex === -1 && pathParts[0] === repoName) {
    addPrefix(`/${repoName}`);
  }

  const isLocalhost =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname === '[::1]';

  // Local `ng serve` host stays on 4200 and uses the checked-in localhost remotes.
  // Static local servers (e.g. http-server on dist/gh-pages) should use same-origin remotes.
  if (isLocalhost) {
    if (window.location.port === '4200') {
      return './federation.manifest.json';
    }

    return buildRemotes('');
  }

  const distIndex = pathParts.indexOf('dist');

  // For deployments like /<project>/dist/<host>/browser/, build same-origin remote URLs.
  if (distIndex >= 0) {
    addPrefix(`/${pathParts.slice(0, distIndex + 1).join('/')}`);
  }

  addPrefix(`/${repoName}`);
  addPrefix('');

  for (const prefix of candidatePrefixes) {
    if (await probeRemotes(prefix)) {
      return buildRemotes(prefix);
    }
  }

  // Default to same-origin remotes for static hosting from arbitrary origins/paths.
  return buildRemotes('');
}

getRuntimeManifest()
  .then((manifest) => initFederation(manifest))
  .catch((err) => console.error(err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
