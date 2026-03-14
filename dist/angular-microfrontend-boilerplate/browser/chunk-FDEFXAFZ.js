import { MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MatTooltip, TooltipComponent } from "@nf-internal/chunk-AZJ7ARY2";
import { MatCommonModule } from "@nf-internal/chunk-WEGFPNI6";
// node_modules/@angular/material/fesm2022/tooltip-module.mjs
import * as i0 from "@angular/core";
import { NgModule } from "@angular/core";
import { A11yModule } from "@angular/cdk/a11y";
import { OverlayModule } from "@angular/cdk/overlay";
import { CdkScrollableModule } from "@angular/cdk/scrolling";
var MatTooltipModule = class _MatTooltipModule {
    static \u0275fac = function MatTooltipModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatTooltipModule)();
    };
    static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
        type: _MatTooltipModule
    });
    static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
        providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [A11yModule, OverlayModule, MatCommonModule, MatCommonModule, CdkScrollableModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(MatTooltipModule, [{
            type: NgModule,
            args: [{
                    imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent],
                    exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule],
                    providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
                }]
        }], null, null);
})();
export { MatTooltipModule };
//# sourceMappingURL=chunk-FDEFXAFZ.js.map
