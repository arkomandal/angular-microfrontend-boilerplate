import { innerFrom } from "@nf-internal/chunk-HOTUKA44";
import { createOperatorSubscriber } from "@nf-internal/chunk-M5X7A4V7";
import { Observable } from "@nf-internal/chunk-PA6ZQ4YT";
import "@nf-internal/chunk-WXPTAMPH";
// node_modules/rxjs/dist/esm/internal/observable/dom/fetch.js
import { __rest } from "tslib";
function fromFetch(input, initWithSelector = {}) {
    const { selector } = initWithSelector, init = __rest(initWithSelector, ["selector"]);
    return new Observable((subscriber) => {
        const controller = new AbortController();
        const { signal } = controller;
        let abortable = true;
        const { signal: outerSignal } = init;
        if (outerSignal) {
            if (outerSignal.aborted) {
                controller.abort();
            }
            else {
                const outerSignalHandler = () => {
                    if (!signal.aborted) {
                        controller.abort();
                    }
                };
                outerSignal.addEventListener("abort", outerSignalHandler);
                subscriber.add(() => outerSignal.removeEventListener("abort", outerSignalHandler));
            }
        }
        const perSubscriberInit = Object.assign(Object.assign({}, init), { signal });
        const handleError = (err) => {
            abortable = false;
            subscriber.error(err);
        };
        fetch(input, perSubscriberInit).then((response) => {
            if (selector) {
                innerFrom(selector(response)).subscribe(createOperatorSubscriber(subscriber, void 0, () => {
                    abortable = false;
                    subscriber.complete();
                }, handleError));
            }
            else {
                abortable = false;
                subscriber.next(response);
                subscriber.complete();
            }
        }).catch(handleError);
        return () => {
            if (abortable) {
                controller.abort();
            }
        };
    });
}
export { fromFetch };
//# sourceMappingURL=rxjs_fetch.DvBaQFpn9X-dev.js.map
