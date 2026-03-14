
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
    'index.csr.html': {size: 25254, hash: '6385e2e0c363799e9dde2bf09cda93622f02ec927629b5ee31eda600791cc60f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17364, hash: '48414d95cc05d7cde346f9779c27d74accdb92801cc836db979577eefafaf575', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 56274, hash: '52e9ecac82a8780bdad386e4dfed31630c7ac94163dc9d982924dec8dfacb6e6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-U5XGPQKN.css': {size: 28087, hash: 'FDQdq5M1jlo', text: () => import('./assets-chunks/styles-U5XGPQKN_css.mjs').then(m => m.default)}
  },
};
