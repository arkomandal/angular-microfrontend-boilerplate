
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
    'index.csr.html': {size: 9034, hash: '9d11e0189cd6e5650bc788085bd59a721c0b23e177b3cc1ed97c53642040ef6d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1144, hash: '468a8ccd69b675d1dc5678c3aec1a85a12c8b94121e257637fb0bab8b849e380', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30526, hash: 'c1bb0a039802d9a0b51b821efabfbb9ec9c4b483829ee2e53adcdca6798d15a0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4UWHY5QD.css': {size: 28760, hash: 'Zp0IbzHEZ/8', text: () => import('./assets-chunks/styles-4UWHY5QD_css.mjs').then(m => m.default)}
  },
};
