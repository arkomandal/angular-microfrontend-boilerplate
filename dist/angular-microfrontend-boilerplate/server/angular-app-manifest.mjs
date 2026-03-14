
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-microfrontend-boilerplate/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-microfrontend-boilerplate"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25254, hash: '856dfefd46d65d6fc896daa406a24342117092feaf296ee38ee1a19161947057', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17364, hash: '4bd433b8f99c52812ff6f94a6db64870734b27467bd25a28512e49b2439c3a12', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 56274, hash: '2077c2a42b6230768b2a7c7a776f6435660e1644cea5fcbc50826fe8d5dbe8e8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-U5XGPQKN.css': {size: 28087, hash: 'FDQdq5M1jlo', text: () => import('./assets-chunks/styles-U5XGPQKN_css.mjs').then(m => m.default)}
  },
};
