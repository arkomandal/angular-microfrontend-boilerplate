import { Subscriber } from "@nf-internal/chunk-PA6ZQ4YT";
// node_modules/rxjs/dist/esm/internal/operators/OperatorSubscriber.js
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = class extends Subscriber {
    constructor(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        super(destination);
        this.onFinalize = onFinalize;
        this.shouldUnsubscribe = shouldUnsubscribe;
        this._next = onNext ? function (value) {
            try {
                onNext(value);
            }
            catch (err) {
                destination.error(err);
            }
        } : super._next;
        this._error = onError ? function (err) {
            try {
                onError(err);
            }
            catch (err2) {
                destination.error(err2);
            }
            finally {
                this.unsubscribe();
            }
        } : super._error;
        this._complete = onComplete ? function () {
            try {
                onComplete();
            }
            catch (err) {
                destination.error(err);
            }
            finally {
                this.unsubscribe();
            }
        } : super._complete;
    }
    unsubscribe() {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed } = this;
            super.unsubscribe();
            !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    }
};
export { createOperatorSubscriber, OperatorSubscriber };
//# sourceMappingURL=chunk-M5X7A4V7.js.map
