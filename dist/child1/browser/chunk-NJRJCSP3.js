import { operate } from "@nf-internal/chunk-KZ4KTAEI";
import { createOperatorSubscriber } from "@nf-internal/chunk-M5X7A4V7";
// node_modules/rxjs/dist/esm/internal/operators/map.js
function map(project, thisArg) {
    return operate((source, subscriber) => {
        let index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
export { map };
//# sourceMappingURL=chunk-NJRJCSP3.js.map
