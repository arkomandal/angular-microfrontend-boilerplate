// node_modules/@angular/material/fesm2022/common-module.mjs
import { HighContrastModeDetector } from "@angular/cdk/a11y";
import { BidiModule } from "@angular/cdk/bidi";
import * as i0 from "@angular/core";
import { InjectionToken, inject, NgModule } from "@angular/core";
var MATERIAL_SANITY_CHECKS = new InjectionToken("mat-sanity-checks", {
    providedIn: "root",
    factory: () => true
});
var MatCommonModule = class _MatCommonModule {
    constructor() {
        inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
    }
    static \u0275fac = function MatCommonModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCommonModule)();
    };
    static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
        type: _MatCommonModule
    });
    static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
        imports: [BidiModule, BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(MatCommonModule, [{
            type: NgModule,
            args: [{
                    imports: [BidiModule],
                    exports: [BidiModule]
                }]
        }], () => [], null);
})();
export { MATERIAL_SANITY_CHECKS, MatCommonModule };
//# sourceMappingURL=chunk-WEGFPNI6.js.map
