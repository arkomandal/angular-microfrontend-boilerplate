
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25221, hash: '474d7720d5cb0bfef5500b277d7e3faec3f5f6767dbaf778e6c52f95709ac5a9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17331, hash: 'bbc60b7609b68a76d75879df59034948827266db49367860d4741f148d6cd035', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 54699, hash: 'cf22b5a48e6ca9a13642d0064762bb1b11af222fd6c3e56d4da46567ff9c7988', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4UWHY5QD.css': {size: 28760, hash: 'Zp0IbzHEZ/8', text: () => import('./assets-chunks/styles-4UWHY5QD_css.mjs').then(m => m.default)}
  },
};
