
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9034, hash: '2e236c68f6b7feb1ca5676c354d51b2bf3909935165e2cc999c9825233714dc3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1144, hash: '505223efda2acaab6fb0fab1c795d976a9b6fc17589ecc5ef2e3afc327e8d873', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30679, hash: '64a825531d5e9ff6073a8b003b5e31e7227e6c400aa8f68f00a2e313c642842f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-U5XGPQKN.css': {size: 28087, hash: 'FDQdq5M1jlo', text: () => import('./assets-chunks/styles-U5XGPQKN_css.mjs').then(m => m.default)}
  },
};
