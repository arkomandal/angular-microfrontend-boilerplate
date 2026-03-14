import { ArgumentOutOfRangeError, AsyncSubject, BehaviorSubject, ConnectableObservable, EmptyError, NotFoundError, SequenceError, TimeoutError, argsArgArrayOrObject, async, asyncScheduler, audit, auditTime, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, catchError, combineAll, combineLatest, combineLatestAll, combineLatestWith, concat, concatAll, concatMap, concatMapTo, concatWith, connect, count, createObject, debounce, debounceTime, defaultIfEmpty, delay, delayWhen, dematerialize, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, endWith, every, exhaust, exhaustAll, exhaustMap, expand, filter, finalize, find, findIndex, first, flatMap, groupBy, ignoreElements, interval, isEmpty, last, mapOneOrManyArgs, mapTo, materialize, max, mergeAll, mergeMap, mergeMapTo, mergeScan, mergeWith, min, multicast, not, onErrorResumeNext, onErrorResumeNextWith, pairwise, pluck, publish, publishBehavior, publishLast, publishReplay, race, raceWith, reduce, refCount, repeat, repeatWhen, retry, retryWhen, sample, sampleTime, scan, sequenceEqual, share, shareReplay, single, skip, skipLast, skipUntil, skipWhile, startWith, switchAll, switchMap, switchMapTo, switchScan, take, takeLast, takeUntil, takeWhile, tap, throttle, throttleTime, throwIfEmpty, timeInterval, timeout, timeoutWith, timer, timestamp, toArray, window, windowCount, windowTime, windowToggle, windowWhen, withLatestFrom, zip, zipAll, zipWith } from "@nf-internal/chunk-5L7HXVNT";
import { map } from "@nf-internal/chunk-NJRJCSP3";
import { VirtualAction, VirtualTimeScheduler, animationFrameProvider, immediateProvider, performanceTimestampProvider } from "@nf-internal/chunk-GPQXJQIA";
import { AsyncAction, AsyncScheduler, EMPTY, Notification, NotificationKind, Scheduler, empty, from, isScheduler, observeOn, of, popNumber, popResultSelector, popScheduler, scheduleIterable, scheduled, subscribeOn, throwError } from "@nf-internal/chunk-SFNMW4FL";
import "@nf-internal/chunk-KZ4KTAEI";
import { innerFrom, isArrayLike } from "@nf-internal/chunk-HOTUKA44";
import { createOperatorSubscriber } from "@nf-internal/chunk-M5X7A4V7";
import { ReplaySubject } from "@nf-internal/chunk-W55656MI";
import { ObjectUnsubscribedError, Subject } from "@nf-internal/chunk-ECC66M4B";
import { Observable, SafeSubscriber, Subscriber, Subscription, UnsubscriptionError, config, identity, isFunction, noop, observable, pipe } from "@nf-internal/chunk-PA6ZQ4YT";
import "@nf-internal/chunk-WXPTAMPH";
// node_modules/rxjs/dist/esm/internal/observable/dom/animationFrames.js
function animationFrames(timestampProvider) {
    return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
}
function animationFramesFactory(timestampProvider) {
    return new Observable((subscriber) => {
        const provider = timestampProvider || performanceTimestampProvider;
        const start = provider.now();
        let id = 0;
        const run = () => {
            if (!subscriber.closed) {
                id = animationFrameProvider.requestAnimationFrame((timestamp2) => {
                    id = 0;
                    const now = provider.now();
                    subscriber.next({
                        timestamp: timestampProvider ? now : timestamp2,
                        elapsed: now - start
                    });
                    run();
                });
            }
        };
        run();
        return () => {
            if (id) {
                animationFrameProvider.cancelAnimationFrame(id);
            }
        };
    });
}
var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();
// node_modules/rxjs/dist/esm/internal/scheduler/AsapAction.js
var AsapAction = class extends AsyncAction {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    requestAsyncId(scheduler, id, delay2 = 0) {
        if (delay2 !== null && delay2 > 0) {
            return super.requestAsyncId(scheduler, id, delay2);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = immediateProvider.setImmediate(scheduler.flush.bind(scheduler, void 0)));
    }
    recycleAsyncId(scheduler, id, delay2 = 0) {
        var _a;
        if (delay2 != null ? delay2 > 0 : this.delay > 0) {
            return super.recycleAsyncId(scheduler, id, delay2);
        }
        const { actions } = scheduler;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
            immediateProvider.clearImmediate(id);
            if (scheduler._scheduled === id) {
                scheduler._scheduled = void 0;
            }
        }
        return void 0;
    }
};
// node_modules/rxjs/dist/esm/internal/scheduler/AsapScheduler.js
var AsapScheduler = class extends AsyncScheduler {
    flush(action) {
        this._active = true;
        const flushId = this._scheduled;
        this._scheduled = void 0;
        const { actions } = this;
        let error;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
            while ((action = actions[0]) && action.id === flushId && actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
};
// node_modules/rxjs/dist/esm/internal/scheduler/asap.js
var asapScheduler = new AsapScheduler(AsapAction);
var asap = asapScheduler;
// node_modules/rxjs/dist/esm/internal/scheduler/QueueAction.js
var QueueAction = class extends AsyncAction {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    schedule(state, delay2 = 0) {
        if (delay2 > 0) {
            return super.schedule(state, delay2);
        }
        this.delay = delay2;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    }
    execute(state, delay2) {
        return delay2 > 0 || this.closed ? super.execute(state, delay2) : this._execute(state, delay2);
    }
    requestAsyncId(scheduler, id, delay2 = 0) {
        if (delay2 != null && delay2 > 0 || delay2 == null && this.delay > 0) {
            return super.requestAsyncId(scheduler, id, delay2);
        }
        scheduler.flush(this);
        return 0;
    }
};
// node_modules/rxjs/dist/esm/internal/scheduler/QueueScheduler.js
var QueueScheduler = class extends AsyncScheduler {
};
// node_modules/rxjs/dist/esm/internal/scheduler/queue.js
var queueScheduler = new QueueScheduler(QueueAction);
var queue = queueScheduler;
// node_modules/rxjs/dist/esm/internal/scheduler/AnimationFrameAction.js
var AnimationFrameAction = class extends AsyncAction {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    requestAsyncId(scheduler, id, delay2 = 0) {
        if (delay2 !== null && delay2 > 0) {
            return super.requestAsyncId(scheduler, id, delay2);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider.requestAnimationFrame(() => scheduler.flush(void 0)));
    }
    recycleAsyncId(scheduler, id, delay2 = 0) {
        var _a;
        if (delay2 != null ? delay2 > 0 : this.delay > 0) {
            return super.recycleAsyncId(scheduler, id, delay2);
        }
        const { actions } = scheduler;
        if (id != null && id === scheduler._scheduled && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
            animationFrameProvider.cancelAnimationFrame(id);
            scheduler._scheduled = void 0;
        }
        return void 0;
    }
};
// node_modules/rxjs/dist/esm/internal/scheduler/AnimationFrameScheduler.js
var AnimationFrameScheduler = class extends AsyncScheduler {
    flush(action) {
        this._active = true;
        let flushId;
        if (action) {
            flushId = action.id;
        }
        else {
            flushId = this._scheduled;
            this._scheduled = void 0;
        }
        const { actions } = this;
        let error;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
            while ((action = actions[0]) && action.id === flushId && actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
};
// node_modules/rxjs/dist/esm/internal/scheduler/animationFrame.js
var animationFrameScheduler = new AnimationFrameScheduler(AnimationFrameAction);
var animationFrame = animationFrameScheduler;
// node_modules/rxjs/dist/esm/internal/util/isObservable.js
function isObservable(obj) {
    return !!obj && (obj instanceof Observable || isFunction(obj.lift) && isFunction(obj.subscribe));
}
// node_modules/rxjs/dist/esm/internal/lastValueFrom.js
function lastValueFrom(source, config2) {
    const hasConfig = typeof config2 === "object";
    return new Promise((resolve, reject) => {
        let _hasValue = false;
        let _value;
        source.subscribe({
            next: (value) => {
                _value = value;
                _hasValue = true;
            },
            error: reject,
            complete: () => {
                if (_hasValue) {
                    resolve(_value);
                }
                else if (hasConfig) {
                    resolve(config2.defaultValue);
                }
                else {
                    reject(new EmptyError());
                }
            }
        });
    });
}
// node_modules/rxjs/dist/esm/internal/firstValueFrom.js
function firstValueFrom(source, config2) {
    const hasConfig = typeof config2 === "object";
    return new Promise((resolve, reject) => {
        const subscriber = new SafeSubscriber({
            next: (value) => {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: () => {
                if (hasConfig) {
                    resolve(config2.defaultValue);
                }
                else {
                    reject(new EmptyError());
                }
            }
        });
        source.subscribe(subscriber);
    });
}
// node_modules/rxjs/dist/esm/internal/observable/bindCallbackInternals.js
function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function (...args) {
                return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe(mapOneOrManyArgs(resultSelector));
            };
        }
    }
    if (scheduler) {
        return function (...args) {
            return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe(subscribeOn(scheduler), observeOn(scheduler));
        };
    }
    return function (...args) {
        const subject = new AsyncSubject();
        let uninitialized = true;
        return new Observable((subscriber) => {
            const subs = subject.subscribe(subscriber);
            if (uninitialized) {
                uninitialized = false;
                let isAsync = false;
                let isComplete = false;
                callbackFunc.apply(this, [
                    ...args,
                    (...results) => {
                        if (isNodeStyle) {
                            const err = results.shift();
                            if (err != null) {
                                subject.error(err);
                                return;
                            }
                        }
                        subject.next(1 < results.length ? results : results[0]);
                        isComplete = true;
                        if (isAsync) {
                            subject.complete();
                        }
                    }
                ]);
                if (isComplete) {
                    subject.complete();
                }
                isAsync = true;
            }
            return subs;
        });
    };
}
// node_modules/rxjs/dist/esm/internal/observable/bindCallback.js
function bindCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
}
// node_modules/rxjs/dist/esm/internal/observable/bindNodeCallback.js
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
}
// node_modules/rxjs/dist/esm/internal/observable/defer.js
function defer(observableFactory) {
    return new Observable((subscriber) => {
        innerFrom(observableFactory()).subscribe(subscriber);
    });
}
// node_modules/rxjs/dist/esm/internal/observable/connectable.js
var DEFAULT_CONFIG = {
    connector: () => new Subject(),
    resetOnDisconnect: true
};
function connectable(source, config2 = DEFAULT_CONFIG) {
    let connection = null;
    const { connector, resetOnDisconnect = true } = config2;
    let subject = connector();
    const result = new Observable((subscriber) => {
        return subject.subscribe(subscriber);
    });
    result.connect = () => {
        if (!connection || connection.closed) {
            connection = defer(() => source).subscribe(subject);
            if (resetOnDisconnect) {
                connection.add(() => subject = connector());
            }
        }
        return connection;
    };
    return result;
}
// node_modules/rxjs/dist/esm/internal/observable/forkJoin.js
function forkJoin(...args) {
    const resultSelector = popResultSelector(args);
    const { args: sources, keys } = argsArgArrayOrObject(args);
    const result = new Observable((subscriber) => {
        const { length } = sources;
        if (!length) {
            subscriber.complete();
            return;
        }
        const values = new Array(length);
        let remainingCompletions = length;
        let remainingEmissions = length;
        for (let sourceIndex = 0; sourceIndex < length; sourceIndex++) {
            let hasValue = false;
            innerFrom(sources[sourceIndex]).subscribe(createOperatorSubscriber(subscriber, (value) => {
                if (!hasValue) {
                    hasValue = true;
                    remainingEmissions--;
                }
                values[sourceIndex] = value;
            }, () => remainingCompletions--, void 0, () => {
                if (!remainingCompletions || !hasValue) {
                    if (!remainingEmissions) {
                        subscriber.next(keys ? createObject(keys, values) : values);
                    }
                    subscriber.complete();
                }
            }));
        }
    });
    return resultSelector ? result.pipe(mapOneOrManyArgs(resultSelector)) : result;
}
// node_modules/rxjs/dist/esm/internal/observable/fromEvent.js
var nodeEventEmitterMethods = ["addListener", "removeListener"];
var eventTargetMethods = ["addEventListener", "removeEventListener"];
var jqueryMethods = ["on", "off"];
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction(options)) {
        resultSelector = options;
        options = void 0;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
    }
    const [add, remove] = isEventTarget(target) ? eventTargetMethods.map((methodName) => (handler) => target[methodName](eventName, handler, options)) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [];
    if (!add) {
        if (isArrayLike(target)) {
            return mergeMap((subTarget) => fromEvent(subTarget, eventName, options))(innerFrom(target));
        }
    }
    if (!add) {
        throw new TypeError("Invalid event target");
    }
    return new Observable((subscriber) => {
        const handler = (...args) => subscriber.next(1 < args.length ? args : args[0]);
        add(handler);
        return () => remove(handler);
    });
}
function toCommonHandlerRegistry(target, eventName) {
    return (methodName) => (handler) => target[methodName](eventName, handler);
}
function isNodeStyleEventEmitter(target) {
    return isFunction(target.addListener) && isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return isFunction(target.on) && isFunction(target.off);
}
function isEventTarget(target) {
    return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
}
// node_modules/rxjs/dist/esm/internal/observable/fromEventPattern.js
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(mapOneOrManyArgs(resultSelector));
    }
    return new Observable((subscriber) => {
        const handler = (...e) => subscriber.next(e.length === 1 ? e[0] : e);
        const retValue = addHandler(handler);
        return isFunction(removeHandler) ? () => removeHandler(handler, retValue) : void 0;
    });
}
// node_modules/rxjs/dist/esm/internal/observable/generate.js
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
    let resultSelector;
    let initialState;
    if (arguments.length === 1) {
        ({
            initialState,
            condition,
            iterate,
            resultSelector = identity,
            scheduler
        } = initialStateOrOptions);
    }
    else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || isScheduler(resultSelectorOrScheduler)) {
            resultSelector = identity;
            scheduler = resultSelectorOrScheduler;
        }
        else {
            resultSelector = resultSelectorOrScheduler;
        }
    }
    function* gen() {
        for (let state = initialState; !condition || condition(state); state = iterate(state)) {
            yield resultSelector(state);
        }
    }
    return defer(scheduler ? () => scheduleIterable(gen(), scheduler) : gen);
}
// node_modules/rxjs/dist/esm/internal/observable/iif.js
function iif(condition, trueResult, falseResult) {
    return defer(() => condition() ? trueResult : falseResult);
}
// node_modules/rxjs/dist/esm/internal/observable/merge.js
function merge(...args) {
    const scheduler = popScheduler(args);
    const concurrent = popNumber(args, Infinity);
    const sources = args;
    return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from(sources, scheduler));
}
// node_modules/rxjs/dist/esm/internal/observable/never.js
var NEVER = new Observable(noop);
function never() {
    return NEVER;
}
// node_modules/rxjs/dist/esm/internal/observable/pairs.js
function pairs(obj, scheduler) {
    return from(Object.entries(obj), scheduler);
}
// node_modules/rxjs/dist/esm/internal/observable/partition.js
function partition(source, predicate, thisArg) {
    return [filter(predicate, thisArg)(innerFrom(source)), filter(not(predicate, thisArg))(innerFrom(source))];
}
// node_modules/rxjs/dist/esm/internal/observable/range.js
function range(start, count2, scheduler) {
    if (count2 == null) {
        count2 = start;
        start = 0;
    }
    if (count2 <= 0) {
        return EMPTY;
    }
    const end = count2 + start;
    return new Observable(scheduler ? (subscriber) => {
        let n = start;
        return scheduler.schedule(function () {
            if (n < end) {
                subscriber.next(n++);
                this.schedule();
            }
            else {
                subscriber.complete();
            }
        });
    } : (subscriber) => {
        let n = start;
        while (n < end && !subscriber.closed) {
            subscriber.next(n++);
        }
        subscriber.complete();
    });
}
// node_modules/rxjs/dist/esm/internal/observable/using.js
function using(resourceFactory, observableFactory) {
    return new Observable((subscriber) => {
        const resource = resourceFactory();
        const result = observableFactory(resource);
        const source = result ? innerFrom(result) : EMPTY;
        source.subscribe(subscriber);
        return () => {
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
export { ArgumentOutOfRangeError, AsyncSubject, BehaviorSubject, ConnectableObservable, EMPTY, EmptyError, NEVER, NotFoundError, Notification, NotificationKind, ObjectUnsubscribedError, Observable, ReplaySubject, Scheduler, SequenceError, Subject, Subscriber, Subscription, TimeoutError, UnsubscriptionError, VirtualAction, VirtualTimeScheduler, animationFrame, animationFrameScheduler, animationFrames, asap, asapScheduler, async, asyncScheduler, audit, auditTime, bindCallback, bindNodeCallback, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, catchError, combineAll, combineLatest, combineLatestAll, combineLatestWith, concat, concatAll, concatMap, concatMapTo, concatWith, config, connect, connectable, count, debounce, debounceTime, defaultIfEmpty, defer, delay, delayWhen, dematerialize, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, empty, endWith, every, exhaust, exhaustAll, exhaustMap, expand, filter, finalize, find, findIndex, first, firstValueFrom, flatMap, forkJoin, from, fromEvent, fromEventPattern, generate, groupBy, identity, ignoreElements, iif, interval, isEmpty, isObservable, last, lastValueFrom, map, mapTo, materialize, max, merge, mergeAll, mergeMap, mergeMapTo, mergeScan, mergeWith, min, multicast, never, noop, observable, observeOn, of, onErrorResumeNext, onErrorResumeNextWith, pairs, pairwise, partition, pipe, pluck, publish, publishBehavior, publishLast, publishReplay, queue, queueScheduler, race, raceWith, range, reduce, refCount, repeat, repeatWhen, retry, retryWhen, sample, sampleTime, scan, scheduled, sequenceEqual, share, shareReplay, single, skip, skipLast, skipUntil, skipWhile, startWith, subscribeOn, switchAll, switchMap, switchMapTo, switchScan, take, takeLast, takeUntil, takeWhile, tap, throttle, throttleTime, throwError, throwIfEmpty, timeInterval, timeout, timeoutWith, timer, timestamp, toArray, using, window, windowCount, windowTime, windowToggle, windowWhen, withLatestFrom, zip, zipAll, zipWith };
//# sourceMappingURL=rxjs.5gsgwKBvaJ-dev.js.map
