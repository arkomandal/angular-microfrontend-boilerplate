// node_modules/@angular/cdk/fesm2022/id-generator.mjs
import * as i0 from "@angular/core";
import { inject, APP_ID, Injectable } from "@angular/core";
var counters = {};
var _IdGenerator = class __IdGenerator {
    _appId = inject(APP_ID);
    /**
     * Generates a unique ID with a specific prefix.
     * @param prefix Prefix to add to the ID.
     */
    getId(prefix) {
        if (this._appId !== "ng") {
            prefix += this._appId;
        }
        if (!counters.hasOwnProperty(prefix)) {
            counters[prefix] = 0;
        }
        return `${prefix}${counters[prefix]++}`;
    }
    static \u0275fac = function _IdGenerator_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || __IdGenerator)();
    };
    static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
        token: __IdGenerator,
        factory: __IdGenerator.\u0275fac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(_IdGenerator, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
export { _IdGenerator };
//# sourceMappingURL=chunk-URG5APGO.js.map
