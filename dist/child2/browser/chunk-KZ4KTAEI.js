import { isFunction } from "@nf-internal/chunk-PA6ZQ4YT";
// node_modules/rxjs/dist/esm/internal/util/lift.js
function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return (source) => {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError("Unable to lift unknown Observable type");
    };
}
export { hasLift, operate };
//# sourceMappingURL=chunk-KZ4KTAEI.js.map
