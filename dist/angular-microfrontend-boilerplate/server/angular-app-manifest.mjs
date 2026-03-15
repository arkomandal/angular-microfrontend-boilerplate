
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
    'index.csr.html': {size: 25221, hash: '7fdadf2fbbbe3e4d2221e208dc31d2e74068b0f0e834c4d00b91a77b781d591c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17331, hash: '4810162bc50421c6793fe02a0c2c6e18cf597fd0b62dd7e3bff8d2cb07da37fa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 54699, hash: 'ab5470b7280e6127a116509662d4419d1c2c26ae71051f753015e033fdc11bab', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4UWHY5QD.css': {size: 28760, hash: 'Zp0IbzHEZ/8', text: () => import('./assets-chunks/styles-4UWHY5QD_css.mjs').then(m => m.default)}
  },
};
