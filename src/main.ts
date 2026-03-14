import { initFederation } from '@angular-architects/native-federation';

function getRuntimeManifest() {
  const isLocalhost =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname === '[::1]';

  // Local development uses the checked-in manifest with localhost remotes.
  if (isLocalhost) {
    return './federation.manifest.json';
  }

  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const distIndex = pathParts.indexOf('dist');

  // For deployments like /<project>/dist/<host>/browser/, build same-origin remote URLs.
  if (distIndex >= 0) {
    const distBasePath = `/${pathParts.slice(0, distIndex + 1).join('/')}`;
    return {
      remote1: `${window.location.origin}${distBasePath}/child1/browser/remoteEntry.json`,
      remote2: `${window.location.origin}${distBasePath}/child2/browser/remoteEntry.json`
    };
  }

  // Fallback to relative manifest if the app is hosted under a different structure.
  return './federation.manifest.json';
}

initFederation(getRuntimeManifest())
  .catch((err) => console.error(err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
