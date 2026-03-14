
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
    'index.csr.html': {size: 9034, hash: '89ad6b20eb7dcb63bfa29c6a006a08dbd12c6ca631c63109b7ba0ba2abd6b3e8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1144, hash: '8d5593a32cfd2e0a434056431e68984ee45b3e801ad2b18dc1d1383c7afd326c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30679, hash: '620c8022748497e35be8cf2d54e7b702bf0a0a0a71ac85f305fc488f6d3b9be5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-U5XGPQKN.css': {size: 28087, hash: 'FDQdq5M1jlo', text: () => import('./assets-chunks/styles-U5XGPQKN_css.mjs').then(m => m.default)}
  },
};
