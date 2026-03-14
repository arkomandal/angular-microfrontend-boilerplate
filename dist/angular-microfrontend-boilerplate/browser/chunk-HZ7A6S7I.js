// node_modules/@angular/material/fesm2022/error-options.mjs
import * as i0 from "@angular/core";
import { Injectable } from "@angular/core";
var ShowOnDirtyErrorStateMatcher = class _ShowOnDirtyErrorStateMatcher {
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.dirty || form && form.submitted));
    }
    static \u0275fac = function ShowOnDirtyErrorStateMatcher_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ShowOnDirtyErrorStateMatcher)();
    };
    static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
        token: _ShowOnDirtyErrorStateMatcher,
        factory: _ShowOnDirtyErrorStateMatcher.\u0275fac
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(ShowOnDirtyErrorStateMatcher, [{
            type: Injectable
        }], null, null);
})();
var ErrorStateMatcher = class _ErrorStateMatcher {
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.touched || form && form.submitted));
    }
    static \u0275fac = function ErrorStateMatcher_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ErrorStateMatcher)();
    };
    static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
        token: _ErrorStateMatcher,
        factory: _ErrorStateMatcher.\u0275fac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(ErrorStateMatcher, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
export { ShowOnDirtyErrorStateMatcher, ErrorStateMatcher };
//# sourceMappingURL=chunk-HZ7A6S7I.js.map
