
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
    'index.csr.html': {size: 9034, hash: '7d9ef69ee083ad105b42f109a83c5af8038b2a4fb016af2083ec0567b7a8b1b7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1144, hash: 'c6843592638b5f21730a0db0288866cd591b92a0a52d1f91ae231087e4afac8c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30679, hash: '99b5358c4e4efffe93cb367e48ace3e1aee42a818da01c244af02f52a7d46848', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-U5XGPQKN.css': {size: 28087, hash: 'FDQdq5M1jlo', text: () => import('./assets-chunks/styles-U5XGPQKN_css.mjs').then(m => m.default)}
  },
};
