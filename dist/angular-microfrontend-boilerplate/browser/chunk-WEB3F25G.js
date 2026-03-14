import { MatOptgroup, MatOption } from "@nf-internal/chunk-C7GPBAE3";
import { MatPseudoCheckboxModule } from "@nf-internal/chunk-6H6NL4EL";
import { MatRippleModule } from "@nf-internal/chunk-KBAQXJRU";
import { MatCommonModule } from "@nf-internal/chunk-WEGFPNI6";
// node_modules/@angular/material/fesm2022/option-module.mjs
import * as i0 from "@angular/core";
import { NgModule } from "@angular/core";
var MatOptionModule = class _MatOptionModule {
    static \u0275fac = function MatOptionModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatOptionModule)();
    };
    static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
        type: _MatOptionModule
    });
    static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
        imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(MatOptionModule, [{
            type: NgModule,
            args: [{
                    imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
                    exports: [MatOption, MatOptgroup]
                }]
        }], null, null);
})();
export { MatOptionModule };
//# sourceMappingURL=chunk-WEB3F25G.js.map
