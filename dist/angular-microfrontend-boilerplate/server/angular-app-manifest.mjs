
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-microfrontend-boilerplate/dist/angular-microfrontend-boilerplate/browser/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-microfrontend-boilerplate/dist/angular-microfrontend-boilerplate/browser"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25224, hash: '27cd23aff31c6c05d59fec069032833e921865510e22d3e8bc2f09ee73db1e9e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17334, hash: '01fce28eb6bde8db3d254aaa49cf9a2402a7274a94182a6fa18e14fc2522f401', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 56244, hash: '714b376afbbe1f1dc6e714c1ca2d1a4eec510cb1079decb6deaafdc7cf4f98e9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WSF46L4B.css': {size: 29116, hash: 'zdLJnUN9GBY', text: () => import('./assets-chunks/styles-WSF46L4B_css.mjs').then(m => m.default)}
  },
};
