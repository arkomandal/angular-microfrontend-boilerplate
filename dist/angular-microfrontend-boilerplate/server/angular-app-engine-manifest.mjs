
export default {
  basePath: '/angular-microfrontend-boilerplate/dist/angular-microfrontend-boilerplate/browser',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
