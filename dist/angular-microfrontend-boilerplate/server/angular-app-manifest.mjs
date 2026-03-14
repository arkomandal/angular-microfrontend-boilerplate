
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
    'index.csr.html': {size: 25177, hash: '1f321a1df2e23684361ac664ccc6dcb218beaad7df61b3f5327df23341517f55', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17287, hash: '795e6b445ab1729aeadaac2bd564a1e893c6d5d424b0fcb2d1f33b318e419524', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 56197, hash: '16b8c4132e8575a3e4b83bfeca939c0d720be4174b7b100792bc42af62c36bd4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-W3UT2TKE.css': {size: 27746, hash: 'BfxVljSik+4', text: () => import('./assets-chunks/styles-W3UT2TKE_css.mjs').then(m => m.default)}
  },
};
