
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
    'index.csr.html': {size: 9034, hash: '127d7763f51f5d266cd42ca04fc1fe7cc4c415902fbfff9fd8fa5aa758c237e8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1144, hash: '91adb9505040e449468cfd946ad499e6441d1ee9cf7aabdcbe12100cbf3d00c8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30526, hash: '713834e1c2bbaea390e596d4233f275b6b0a763cf2caa141cece8c8c561100c1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4UWHY5QD.css': {size: 28760, hash: 'Zp0IbzHEZ/8', text: () => import('./assets-chunks/styles-4UWHY5QD_css.mjs').then(m => m.default)}
  },
};
