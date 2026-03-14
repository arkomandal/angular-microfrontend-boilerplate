import { _isTestEnvironment } from "@nf-internal/chunk-SWBBLCJO";
import { RtlScrollAxisType, getRtlScrollAxisType, supportsScrollBehavior } from "@nf-internal/chunk-PSY7FISX";
import { normalizePassiveListenerOptions, supportsPassiveEventListeners } from "@nf-internal/chunk-PXBFTVYB";
import { _getEventTarget, _getFocusedElementPierceShadowDom, _getShadowRoot, _supportsShadowDom } from "@nf-internal/chunk-CW4NLAXQ";
import { Platform } from "@nf-internal/chunk-WYINW7RH";
import "@nf-internal/chunk-WXPTAMPH";
// node_modules/@angular/cdk/fesm2022/platform.mjs
import * as i0 from "@angular/core";
import { NgModule } from "@angular/core";
import "@angular/common";
var PlatformModule = class _PlatformModule {
    static \u0275fac = function PlatformModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _PlatformModule)();
    };
    static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
        type: _PlatformModule
    });
    static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({});
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(PlatformModule, [{
            type: NgModule,
            args: [{}]
        }], null, null);
})();
var supportedInputTypes;
var candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    "color",
    "button",
    "checkbox",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week"
];
function getSupportedInputTypes() {
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    if (typeof document !== "object" || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    let featureTestInput = document.createElement("input");
    supportedInputTypes = new Set(candidateInputTypes.filter((value) => {
        featureTestInput.setAttribute("type", value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}
export { Platform, PlatformModule, RtlScrollAxisType, _getEventTarget, _getFocusedElementPierceShadowDom, _getShadowRoot, _isTestEnvironment, _supportsShadowDom, getRtlScrollAxisType, getSupportedInputTypes, normalizePassiveListenerOptions, supportsPassiveEventListeners, supportsScrollBehavior };
//# sourceMappingURL=_angular_cdk_platform.yuagsYmCNW-dev.js.map
