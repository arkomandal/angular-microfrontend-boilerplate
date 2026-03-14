
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
    'index.csr.html': {size: 9034, hash: '1878f1d28435038d93d316b4a69ef7c56e76eb1322ebd1910c2251a2dcebfbad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1144, hash: '39e11d6cbc00d3c68237887ffcac62c6abc4bee6c0424cf5151408833f833054', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30679, hash: 'a0f644278dc6e59b5f6c67e9fc3d07cff5b654b87c10d2cbd07408975524227d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-U5XGPQKN.css': {size: 28087, hash: 'FDQdq5M1jlo', text: () => import('./assets-chunks/styles-U5XGPQKN_css.mjs').then(m => m.default)}
  },
};
