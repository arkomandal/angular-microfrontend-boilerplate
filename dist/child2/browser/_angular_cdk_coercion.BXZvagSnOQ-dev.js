import { coerceCssPixelValue } from "@nf-internal/chunk-RLOP7IVB";
import { _isNumberValue, coerceElement, coerceNumberProperty } from "@nf-internal/chunk-ADVBEMXY";
import { coerceArray } from "@nf-internal/chunk-4ECZME2J";
import "@nf-internal/chunk-WXPTAMPH";
// node_modules/@angular/cdk/fesm2022/coercion.mjs
import "@angular/core";
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== "false";
}
function coerceStringArray(value, separator = /\s+/) {
    const result = [];
    if (value != null) {
        const sourceValues = Array.isArray(value) ? value : `${value}`.split(separator);
        for (const sourceValue of sourceValues) {
            const trimmedString = `${sourceValue}`.trim();
            if (trimmedString) {
                result.push(trimmedString);
            }
        }
    }
    return result;
}
export { _isNumberValue, coerceArray, coerceBooleanProperty, coerceCssPixelValue, coerceElement, coerceNumberProperty, coerceStringArray };
//# sourceMappingURL=_angular_cdk_coercion.BXZvagSnOQ-dev.js.map
