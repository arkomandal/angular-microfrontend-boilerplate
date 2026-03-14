import { MatError, MatFormField, MatHint, MatLabel, MatPrefix, MatSuffix } from "@nf-internal/chunk-WI4TWG3P";
import { MatCommonModule } from "@nf-internal/chunk-WEGFPNI6";
// node_modules/@angular/material/fesm2022/form-field-module.mjs
import { ObserversModule } from "@angular/cdk/observers";
import * as i0 from "@angular/core";
import { NgModule } from "@angular/core";
var MatFormFieldModule = class _MatFormFieldModule {
    static \u0275fac = function MatFormFieldModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatFormFieldModule)();
    };
    static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
        type: _MatFormFieldModule
    });
    static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
        imports: [MatCommonModule, ObserversModule, MatFormField, MatCommonModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(MatFormFieldModule, [{
            type: NgModule,
            args: [{
                    imports: [MatCommonModule, ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
                    exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatCommonModule]
                }]
        }], null, null);
})();
export { MatFormFieldModule };
//# sourceMappingURL=chunk-LUJNHF63.js.map
