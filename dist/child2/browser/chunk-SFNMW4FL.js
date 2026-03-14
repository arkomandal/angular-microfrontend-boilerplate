import { operate } from "@nf-internal/chunk-KZ4KTAEI";
import { createInvalidObservableTypeError, innerFrom, isArrayLike, isAsyncIterable, isInteropObservable, isIterable, isPromise, isReadableStreamLike, iterator, readableStreamLikeToAsyncGenerator } from "@nf-internal/chunk-HOTUKA44";
import { createOperatorSubscriber } from "@nf-internal/chunk-M5X7A4V7";
import { dateTimestampProvider } from "@nf-internal/chunk-ECC66M4B";
import { Observable, Subscription, arrRemove, isFunction } from "@nf-internal/chunk-PA6ZQ4YT";
// node_modules/rxjs/dist/esm/internal/Scheduler.js
var Scheduler = class _Scheduler {
    constructor(schedulerActionCtor, now = _Scheduler.now) {
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    }
};
Scheduler.now = dateTimestampProvider.now;
// node_modules/rxjs/dist/esm/internal/observable/empty.js
var EMPTY = new Observable((subscriber) => subscriber.complete());
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new Observable((subscriber) => scheduler.schedule(() => subscriber.complete()));
}
// node_modules/rxjs/dist/esm/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay = 0, repeat = false) {
    const scheduleSubscription = scheduler.schedule(function () {
        work();
        if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
        }
        else {
            this.unsubscribe();
        }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
        return scheduleSubscription;
    }
}
// node_modules/rxjs/dist/esm/internal/operators/observeOn.js
function observeOn(scheduler, delay = 0) {
    return operate((source, subscriber) => {
        source.subscribe(createOperatorSubscriber(subscriber, (value) => executeSchedule(subscriber, scheduler, () => subscriber.next(value), delay), () => executeSchedule(subscriber, scheduler, () => subscriber.complete(), delay), (err) => executeSchedule(subscriber, scheduler, () => subscriber.error(err), delay)));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay = 0) {
    return operate((source, subscriber) => {
        subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
    });
}
// node_modules/rxjs/dist/esm/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
// node_modules/rxjs/dist/esm/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
// node_modules/rxjs/dist/esm/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
    return new Observable((subscriber) => {
        let i = 0;
        return scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
            }
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}
// node_modules/rxjs/dist/esm/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
    return new Observable((subscriber) => {
        let iterator2;
        executeSchedule(subscriber, scheduler, () => {
            iterator2 = input[iterator]();
            executeSchedule(subscriber, scheduler, () => {
                let value;
                let done;
                try {
                    ({ value, done } = iterator2.next());
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                }
            }, 0, true);
        });
        return () => isFunction(iterator2 === null || iterator2 === void 0 ? void 0 : iterator2.return) && iterator2.return();
    });
}
// node_modules/rxjs/dist/esm/internal/scheduled/scheduleAsyncIterable.js
function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
        throw new Error("Iterable cannot be null");
    }
    return new Observable((subscriber) => {
        executeSchedule(subscriber, scheduler, () => {
            const iterator2 = input[Symbol.asyncIterator]();
            executeSchedule(subscriber, scheduler, () => {
                iterator2.next().then((result) => {
                    if (result.done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(result.value);
                    }
                });
            }, 0, true);
        });
    });
}
// node_modules/rxjs/dist/esm/internal/scheduled/scheduleReadableStreamLike.js
function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}
// node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable(input)) {
            return scheduleObservable(input, scheduler);
        }
        if (isArrayLike(input)) {
            return scheduleArray(input, scheduler);
        }
        if (isPromise(input)) {
            return schedulePromise(input, scheduler);
        }
        if (isAsyncIterable(input)) {
            return scheduleAsyncIterable(input, scheduler);
        }
        if (isIterable(input)) {
            return scheduleIterable(input, scheduler);
        }
        if (isReadableStreamLike(input)) {
            return scheduleReadableStreamLike(input, scheduler);
        }
    }
    throw createInvalidObservableTypeError(input);
}
// node_modules/rxjs/dist/esm/internal/observable/from.js
function from(input, scheduler) {
    return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
// node_modules/rxjs/dist/esm/internal/util/isScheduler.js
function isScheduler(value) {
    return value && isFunction(value.schedule);
}
// node_modules/rxjs/dist/esm/internal/util/args.js
function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return isFunction(last(args)) ? args.pop() : void 0;
}
function popScheduler(args) {
    return isScheduler(last(args)) ? args.pop() : void 0;
}
function popNumber(args, defaultValue) {
    return typeof last(args) === "number" ? args.pop() : defaultValue;
}
// node_modules/rxjs/dist/esm/internal/observable/of.js
function of(...args) {
    const scheduler = popScheduler(args);
    return from(args, scheduler);
}
// node_modules/rxjs/dist/esm/internal/observable/throwError.js
function throwError(errorOrErrorFactory, scheduler) {
    const errorFactory = isFunction(errorOrErrorFactory) ? errorOrErrorFactory : () => errorOrErrorFactory;
    const init = (subscriber) => subscriber.error(errorFactory());
    return new Observable(scheduler ? (subscriber) => scheduler.schedule(init, 0, subscriber) : init);
}
// node_modules/rxjs/dist/esm/internal/Notification.js
var NotificationKind;
(function (NotificationKind2) {
    NotificationKind2["NEXT"] = "N";
    NotificationKind2["ERROR"] = "E";
    NotificationKind2["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
var Notification = class _Notification {
    constructor(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === "N";
    }
    observe(observer) {
        return observeNotification(this, observer);
    }
    do(nextHandler, errorHandler, completeHandler) {
        const { kind, value, error } = this;
        return kind === "N" ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === "E" ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
    }
    accept(nextOrObserver, error, complete) {
        var _a;
        return isFunction((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
    }
    toObservable() {
        const { kind, value, error } = this;
        const result = kind === "N" ? of(value) : kind === "E" ? throwError(() => error) : kind === "C" ? EMPTY : 0;
        if (!result) {
            throw new TypeError(`Unexpected notification kind ${kind}`);
        }
        return result;
    }
    static createNext(value) {
        return new _Notification("N", value);
    }
    static createError(err) {
        return new _Notification("E", void 0, err);
    }
    static createComplete() {
        return _Notification.completeNotification;
    }
};
Notification.completeNotification = new Notification("C");
function observeNotification(notification, observer) {
    var _a, _b, _c;
    const { kind, value, error } = notification;
    if (typeof kind !== "string") {
        throw new TypeError('Invalid notification, missing "kind"');
    }
    kind === "N" ? (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, value) : kind === "E" ? (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
}
// node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js
var intervalProvider = {
    setInterval(handler, timeout, ...args) {
        const { delegate } = intervalProvider;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
            return delegate.setInterval(handler, timeout, ...args);
        }
        return setInterval(handler, timeout, ...args);
    },
    clearInterval(handle) {
        const { delegate } = intervalProvider;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: void 0
};
// node_modules/rxjs/dist/esm/internal/scheduler/Action.js
var Action = class extends Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
};
// node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js
var AsyncAction = class extends Action {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        var _a;
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, _id, delay = 0) {
        return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(_scheduler, id, delay = 0) {
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        if (id != null) {
            intervalProvider.clearInterval(id);
        }
        return void 0;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error("executing a cancelled action");
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, _delay) {
        let errored = false;
        let errorValue;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = e ? e : new Error("Scheduled action threw falsy error");
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    unsubscribe() {
        if (!this.closed) {
            const { id, scheduler } = this;
            const { actions } = scheduler;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            arrRemove(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            super.unsubscribe();
        }
    }
};
// node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js
var AsyncScheduler = class extends Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        super(SchedulerAction, now);
        this.actions = [];
        this._active = false;
    }
    flush(action) {
        const { actions } = this;
        if (this._active) {
            actions.push(action);
            return;
        }
        let error;
        this._active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this._active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
};
export { intervalProvider, AsyncAction, Scheduler, AsyncScheduler, EMPTY, empty, isScheduler, popResultSelector, popScheduler, popNumber, executeSchedule, observeOn, subscribeOn, scheduleIterable, scheduled, from, of, throwError, NotificationKind, Notification, observeNotification };
//# sourceMappingURL=chunk-SFNMW4FL.js.map
