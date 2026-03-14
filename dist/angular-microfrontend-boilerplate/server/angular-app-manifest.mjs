
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-microfrontend-boilerplate/browser/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-microfrontend-boilerplate/browser"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25262, hash: '4b77e2a1719a131f73ee7950e7251865f7607198fc8937b5b958b46575e45285', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17372, hash: '3dc768bc864a2f0d7cafe5b42a21548a23723d50d1184b092d6edad86fb18fcb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 56282, hash: '4b5727e7aebd741e8b4c67ad0eb71a1df58ca4b7274b73b280b3ab94c5e1988d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WSF46L4B.css': {size: 29116, hash: 'zdLJnUN9GBY', text: () => import('./assets-chunks/styles-WSF46L4B_css.mjs').then(m => m.default)}
  },
};
