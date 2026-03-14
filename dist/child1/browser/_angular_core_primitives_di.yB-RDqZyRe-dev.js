import { NOT_FOUND, NotFoundError, getCurrentInjector, inject, isNotFound, setCurrentInjector } from "@nf-internal/chunk-3DFIABJL";
import "@nf-internal/chunk-WXPTAMPH";
// node_modules/@angular/core/fesm2022/primitives/di.mjs
function defineInjectable(opts) {
    return {
        token: opts.token,
        providedIn: opts.providedIn || null,
        factory: opts.factory,
        value: void 0
    };
}
function registerInjectable(ctor, declaration) {
    ctor.\u0275prov = declaration;
    return ctor;
}
export { NOT_FOUND, NotFoundError, defineInjectable, getCurrentInjector, inject, isNotFound, registerInjectable, setCurrentInjector };
/*! Bundled license information:

@angular/core/fesm2022/primitives/di.mjs:
  (**
   * @license Angular v20.3.18
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=_angular_core_primitives_di.yB-RDqZyRe-dev.js.map
