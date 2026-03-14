import { map } from "@nf-internal/chunk-NJRJCSP3";
import { AsyncAction, AsyncScheduler, EMPTY, Notification, executeSchedule, from, isScheduler, observeNotification, of, popNumber, popResultSelector, popScheduler } from "@nf-internal/chunk-SFNMW4FL";
import { hasLift, operate } from "@nf-internal/chunk-KZ4KTAEI";
import { innerFrom } from "@nf-internal/chunk-HOTUKA44";
import { OperatorSubscriber, createOperatorSubscriber } from "@nf-internal/chunk-M5X7A4V7";
import { ReplaySubject } from "@nf-internal/chunk-W55656MI";
import { Subject, dateTimestampProvider } from "@nf-internal/chunk-ECC66M4B";
import { Observable, SafeSubscriber, Subscription, arrRemove, createErrorClass, identity, isFunction, noop, pipe } from "@nf-internal/chunk-PA6ZQ4YT";
// node_modules/rxjs/dist/esm/internal/operators/refCount.js
function refCount() {
    return operate((source, subscriber) => {
        let connection = null;
        source._refCount++;
        const refCounter = createOperatorSubscriber(subscriber, void 0, void 0, void 0, () => {
            if (!source || source._refCount <= 0 || 0 < --source._refCount) {
                connection = null;
                return;
            }
            const sharedConnection = source._connection;
            const conn = connection;
            connection = null;
            if (sharedConnection && (!conn || sharedConnection === conn)) {
                sharedConnection.unsubscribe();
            }
            subscriber.unsubscribe();
        });
        source.subscribe(refCounter);
        if (!refCounter.closed) {
            connection = source.connect();
        }
    });
}
// node_modules/rxjs/dist/esm/internal/observable/ConnectableObservable.js
var ConnectableObservable = class extends Observable {
    constructor(source, subjectFactory) {
        super();
        this.source = source;
        this.subjectFactory = subjectFactory;
        this._subject = null;
        this._refCount = 0;
        this._connection = null;
        if (hasLift(source)) {
            this.lift = source.lift;
        }
    }
    _subscribe(subscriber) {
        return this.getSubject().subscribe(subscriber);
    }
    getSubject() {
        const subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    }
    _teardown() {
        this._refCount = 0;
        const { _connection } = this;
        this._subject = this._connection = null;
        _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
    }
    connect() {
        let connection = this._connection;
        if (!connection) {
            connection = this._connection = new Subscription();
            const subject = this.getSubject();
            connection.add(this.source.subscribe(createOperatorSubscriber(subject, void 0, () => {
                this._teardown();
                subject.complete();
            }, (err) => {
                this._teardown();
                subject.error(err);
            }, () => this._teardown())));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription.EMPTY;
            }
        }
        return connection;
    }
    refCount() {
        return refCount()(this);
    }
};
// node_modules/rxjs/dist/esm/internal/BehaviorSubject.js
var BehaviorSubject = class extends Subject {
    constructor(_value) {
        super();
        this._value = _value;
    }
    get value() {
        return this.getValue();
    }
    _subscribe(subscriber) {
        const subscription = super._subscribe(subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    }
    getValue() {
        const { hasError, thrownError, _value } = this;
        if (hasError) {
            throw thrownError;
        }
        this._throwIfClosed();
        return _value;
    }
    next(value) {
        super.next(this._value = value);
    }
};
// node_modules/rxjs/dist/esm/internal/AsyncSubject.js
var AsyncSubject = class extends Subject {
    constructor() {
        super(...arguments);
        this._value = null;
        this._hasValue = false;
        this._isComplete = false;
    }
    _checkFinalizedStatuses(subscriber) {
        const { hasError, _hasValue, _value, thrownError, isStopped, _isComplete } = this;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped || _isComplete) {
            _hasValue && subscriber.next(_value);
            subscriber.complete();
        }
    }
    next(value) {
        if (!this.isStopped) {
            this._value = value;
            this._hasValue = true;
        }
    }
    complete() {
        const { _hasValue, _value, _isComplete } = this;
        if (!_isComplete) {
            this._isComplete = true;
            _hasValue && super.next(_value);
            super.complete();
        }
    }
};
// node_modules/rxjs/dist/esm/internal/scheduler/async.js
var asyncScheduler = new AsyncScheduler(AsyncAction);
var async = asyncScheduler;
// node_modules/rxjs/dist/esm/internal/util/EmptyError.js
var EmptyError = createErrorClass((_super) => function EmptyErrorImpl() {
    _super(this);
    this.name = "EmptyError";
    this.message = "no elements in sequence";
});
// node_modules/rxjs/dist/esm/internal/util/ArgumentOutOfRangeError.js
var ArgumentOutOfRangeError = createErrorClass((_super) => function ArgumentOutOfRangeErrorImpl() {
    _super(this);
    this.name = "ArgumentOutOfRangeError";
    this.message = "argument out of range";
});
// node_modules/rxjs/dist/esm/internal/util/NotFoundError.js
var NotFoundError = createErrorClass((_super) => function NotFoundErrorImpl(message) {
    _super(this);
    this.name = "NotFoundError";
    this.message = message;
});
// node_modules/rxjs/dist/esm/internal/util/SequenceError.js
var SequenceError = createErrorClass((_super) => function SequenceErrorImpl(message) {
    _super(this);
    this.name = "SequenceError";
    this.message = message;
});
// node_modules/rxjs/dist/esm/internal/util/isDate.js
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}
// node_modules/rxjs/dist/esm/internal/operators/timeout.js
var TimeoutError = createErrorClass((_super) => function TimeoutErrorImpl(info = null) {
    _super(this);
    this.message = "Timeout has occurred";
    this.name = "TimeoutError";
    this.info = info;
});
function timeout(config, schedulerArg) {
    const { first: first2, each, with: _with = timeoutErrorFactory, scheduler = schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : asyncScheduler, meta = null } = isValidDate(config) ? { first: config } : typeof config === "number" ? { each: config } : config;
    if (first2 == null && each == null) {
        throw new TypeError("No timeout provided.");
    }
    return operate((source, subscriber) => {
        let originalSourceSubscription;
        let timerSubscription;
        let lastValue = null;
        let seen = 0;
        const startTimer = (delay2) => {
            timerSubscription = executeSchedule(subscriber, scheduler, () => {
                try {
                    originalSourceSubscription.unsubscribe();
                    innerFrom(_with({
                        meta,
                        lastValue,
                        seen
                    })).subscribe(subscriber);
                }
                catch (err) {
                    subscriber.error(err);
                }
            }, delay2);
        };
        originalSourceSubscription = source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
            seen++;
            subscriber.next(lastValue = value);
            each > 0 && startTimer(each);
        }, void 0, void 0, () => {
            if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
                timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
            }
            lastValue = null;
        }));
        !seen && startTimer(first2 != null ? typeof first2 === "number" ? first2 : +first2 - scheduler.now() : each);
    });
}
function timeoutErrorFactory(info) {
    throw new TimeoutError(info);
}
// node_modules/rxjs/dist/esm/internal/util/argsArgArrayOrObject.js
var { isArray } = Array;
var { getPrototypeOf, prototype: objectProto, keys: getKeys } = Object;
function argsArgArrayOrObject(args) {
    if (args.length === 1) {
        const first2 = args[0];
        if (isArray(first2)) {
            return { args: first2, keys: null };
        }
        if (isPOJO(first2)) {
            const keys = getKeys(first2);
            return {
                args: keys.map((key) => first2[key]),
                keys
            };
        }
    }
    return { args, keys: null };
}
function isPOJO(obj) {
    return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
}
// node_modules/rxjs/dist/esm/internal/util/mapOneOrManyArgs.js
var { isArray: isArray2 } = Array;
function callOrApply(fn, args) {
    return isArray2(args) ? fn(...args) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return map((args) => callOrApply(fn, args));
}
// node_modules/rxjs/dist/esm/internal/util/createObject.js
function createObject(keys, values) {
    return keys.reduce((result, key, i) => (result[key] = values[i], result), {});
}
// node_modules/rxjs/dist/esm/internal/observable/combineLatest.js
function combineLatest(...args) {
    const scheduler = popScheduler(args);
    const resultSelector = popResultSelector(args);
    const { args: observables, keys } = argsArgArrayOrObject(args);
    if (observables.length === 0) {
        return from([], scheduler);
    }
    const result = new Observable(combineLatestInit(observables, scheduler, keys ? (values) => createObject(keys, values) : identity));
    return resultSelector ? result.pipe(mapOneOrManyArgs(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform = identity) {
    return (subscriber) => {
        maybeSchedule(scheduler, () => {
            const { length } = observables;
            const values = new Array(length);
            let active = length;
            let remainingFirstValues = length;
            for (let i = 0; i < length; i++) {
                maybeSchedule(scheduler, () => {
                    const source = from(observables[i], scheduler);
                    let hasFirstValue = false;
                    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
                        values[i] = value;
                        if (!hasFirstValue) {
                            hasFirstValue = true;
                            remainingFirstValues--;
                        }
                        if (!remainingFirstValues) {
                            subscriber.next(valueTransform(values.slice()));
                        }
                    }, () => {
                        if (!--active) {
                            subscriber.complete();
                        }
                    }));
                }, subscriber);
            }
        }, subscriber);
    };
}
function maybeSchedule(scheduler, execute, subscription) {
    if (scheduler) {
        executeSchedule(subscription, scheduler, execute);
    }
    else {
        execute();
    }
}
// node_modules/rxjs/dist/esm/internal/operators/mergeInternals.js
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand2, innerSubScheduler, additionalFinalizer) {
    const buffer2 = [];
    let active = 0;
    let index = 0;
    let isComplete = false;
    const checkComplete = () => {
        if (isComplete && !buffer2.length && !active) {
            subscriber.complete();
        }
    };
    const outerNext = (value) => active < concurrent ? doInnerSub(value) : buffer2.push(value);
    const doInnerSub = (value) => {
        expand2 && subscriber.next(value);
        active++;
        let innerComplete = false;
        innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, (innerValue) => {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand2) {
                outerNext(innerValue);
            }
            else {
                subscriber.next(innerValue);
            }
        }, () => {
            innerComplete = true;
        }, void 0, () => {
            if (innerComplete) {
                try {
                    active--;
                    while (buffer2.length && active < concurrent) {
                        const bufferedValue = buffer2.shift();
                        if (innerSubScheduler) {
                            executeSchedule(subscriber, innerSubScheduler, () => doInnerSub(bufferedValue));
                        }
                        else {
                            doInnerSub(bufferedValue);
                        }
                    }
                    checkComplete();
                }
                catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe(createOperatorSubscriber(subscriber, outerNext, () => {
        isComplete = true;
        checkComplete();
    }));
    return () => {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
}
// node_modules/rxjs/dist/esm/internal/operators/mergeMap.js
function mergeMap(project, resultSelector, concurrent = Infinity) {
    if (isFunction(resultSelector)) {
        return mergeMap((a, i) => map((b, ii) => resultSelector(a, b, i, ii))(innerFrom(project(a, i))), concurrent);
    }
    else if (typeof resultSelector === "number") {
        concurrent = resultSelector;
    }
    return operate((source, subscriber) => mergeInternals(source, subscriber, project, concurrent));
}
// node_modules/rxjs/dist/esm/internal/operators/mergeAll.js
function mergeAll(concurrent = Infinity) {
    return mergeMap(identity, concurrent);
}
// node_modules/rxjs/dist/esm/internal/operators/concatAll.js
function concatAll() {
    return mergeAll(1);
}
// node_modules/rxjs/dist/esm/internal/observable/concat.js
function concat(...args) {
    return concatAll()(from(args, popScheduler(args)));
}
// node_modules/rxjs/dist/esm/internal/observable/timer.js
function timer(dueTime = 0, intervalOrScheduler, scheduler = async) {
    let intervalDuration = -1;
    if (intervalOrScheduler != null) {
        if (isScheduler(intervalOrScheduler)) {
            scheduler = intervalOrScheduler;
        }
        else {
            intervalDuration = intervalOrScheduler;
        }
    }
    return new Observable((subscriber) => {
        let due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
            due = 0;
        }
        let n = 0;
        return scheduler.schedule(function () {
            if (!subscriber.closed) {
                subscriber.next(n++);
                if (0 <= intervalDuration) {
                    this.schedule(void 0, intervalDuration);
                }
                else {
                    subscriber.complete();
                }
            }
        }, due);
    });
}
// node_modules/rxjs/dist/esm/internal/observable/interval.js
function interval(period = 0, scheduler = asyncScheduler) {
    if (period < 0) {
        period = 0;
    }
    return timer(period, period, scheduler);
}
// node_modules/rxjs/dist/esm/internal/util/argsOrArgArray.js
var { isArray: isArray3 } = Array;
function argsOrArgArray(args) {
    return args.length === 1 && isArray3(args[0]) ? args[0] : args;
}
// node_modules/rxjs/dist/esm/internal/observable/onErrorResumeNext.js
function onErrorResumeNext(...sources) {
    const nextSources = argsOrArgArray(sources);
    return new Observable((subscriber) => {
        let sourceIndex = 0;
        const subscribeNext = () => {
            if (sourceIndex < nextSources.length) {
                let nextSource;
                try {
                    nextSource = innerFrom(nextSources[sourceIndex++]);
                }
                catch (err) {
                    subscribeNext();
                    return;
                }
                const innerSubscriber = new OperatorSubscriber(subscriber, void 0, noop, noop);
                nextSource.subscribe(innerSubscriber);
                innerSubscriber.add(subscribeNext);
            }
            else {
                subscriber.complete();
            }
        };
        subscribeNext();
    });
}
// node_modules/rxjs/dist/esm/internal/operators/filter.js
function filter(predicate, thisArg) {
    return operate((source, subscriber) => {
        let index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => predicate.call(thisArg, value, index++) && subscriber.next(value)));
    });
}
// node_modules/rxjs/dist/esm/internal/observable/race.js
function race(...sources) {
    sources = argsOrArgArray(sources);
    return sources.length === 1 ? innerFrom(sources[0]) : new Observable(raceInit(sources));
}
function raceInit(sources) {
    return (subscriber) => {
        let subscriptions = [];
        for (let i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) {
            subscriptions.push(innerFrom(sources[i]).subscribe(createOperatorSubscriber(subscriber, (value) => {
                if (subscriptions) {
                    for (let s = 0; s < subscriptions.length; s++) {
                        s !== i && subscriptions[s].unsubscribe();
                    }
                    subscriptions = null;
                }
                subscriber.next(value);
            })));
        }
    };
}
// node_modules/rxjs/dist/esm/internal/observable/zip.js
function zip(...args) {
    const resultSelector = popResultSelector(args);
    const sources = argsOrArgArray(args);
    return sources.length ? new Observable((subscriber) => {
        let buffers = sources.map(() => []);
        let completed = sources.map(() => false);
        subscriber.add(() => {
            buffers = completed = null;
        });
        for (let sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++) {
            innerFrom(sources[sourceIndex]).subscribe(createOperatorSubscriber(subscriber, (value) => {
                buffers[sourceIndex].push(value);
                if (buffers.every((buffer2) => buffer2.length)) {
                    const result = buffers.map((buffer2) => buffer2.shift());
                    subscriber.next(resultSelector ? resultSelector(...result) : result);
                    if (buffers.some((buffer2, i) => !buffer2.length && completed[i])) {
                        subscriber.complete();
                    }
                }
            }, () => {
                completed[sourceIndex] = true;
                !buffers[sourceIndex].length && subscriber.complete();
            }));
        }
        return () => {
            buffers = completed = null;
        };
    }) : EMPTY;
}
// node_modules/rxjs/dist/esm/internal/operators/audit.js
function audit(durationSelector) {
    return operate((source, subscriber) => {
        let hasValue = false;
        let lastValue = null;
        let durationSubscriber = null;
        let isComplete = false;
        const endDuration = () => {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                const value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
            isComplete && subscriber.complete();
        };
        const cleanupDuration = () => {
            durationSubscriber = null;
            isComplete && subscriber.complete();
        };
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            hasValue = true;
            lastValue = value;
            if (!durationSubscriber) {
                innerFrom(durationSelector(value)).subscribe(durationSubscriber = createOperatorSubscriber(subscriber, endDuration, cleanupDuration));
            }
        }, () => {
            isComplete = true;
            (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/auditTime.js
function auditTime(duration, scheduler = asyncScheduler) {
    return audit(() => timer(duration, scheduler));
}
// node_modules/rxjs/dist/esm/internal/operators/buffer.js
function buffer(closingNotifier) {
    return operate((source, subscriber) => {
        let currentBuffer = [];
        source.subscribe(createOperatorSubscriber(subscriber, (value) => currentBuffer.push(value), () => {
            subscriber.next(currentBuffer);
            subscriber.complete();
        }));
        innerFrom(closingNotifier).subscribe(createOperatorSubscriber(subscriber, () => {
            const b = currentBuffer;
            currentBuffer = [];
            subscriber.next(b);
        }, noop));
        return () => {
            currentBuffer = null;
        };
    });
}
// node_modules/rxjs/dist/esm/internal/operators/bufferCount.js
function bufferCount(bufferSize, startBufferEvery = null) {
    startBufferEvery = startBufferEvery !== null && startBufferEvery !== void 0 ? startBufferEvery : bufferSize;
    return operate((source, subscriber) => {
        let buffers = [];
        let count2 = 0;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            let toEmit = null;
            if (count2++ % startBufferEvery === 0) {
                buffers.push([]);
            }
            for (const buffer2 of buffers) {
                buffer2.push(value);
                if (bufferSize <= buffer2.length) {
                    toEmit = toEmit !== null && toEmit !== void 0 ? toEmit : [];
                    toEmit.push(buffer2);
                }
            }
            if (toEmit) {
                for (const buffer2 of toEmit) {
                    arrRemove(buffers, buffer2);
                    subscriber.next(buffer2);
                }
            }
        }, () => {
            for (const buffer2 of buffers) {
                subscriber.next(buffer2);
            }
            subscriber.complete();
        }, void 0, () => {
            buffers = null;
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/bufferTime.js
function bufferTime(bufferTimeSpan, ...otherArgs) {
    var _a, _b;
    const scheduler = (_a = popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : asyncScheduler;
    const bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    const maxBufferSize = otherArgs[1] || Infinity;
    return operate((source, subscriber) => {
        let bufferRecords = [];
        let restartOnEmit = false;
        const emit = (record) => {
            const { buffer: buffer2, subs } = record;
            subs.unsubscribe();
            arrRemove(bufferRecords, record);
            subscriber.next(buffer2);
            restartOnEmit && startBuffer();
        };
        const startBuffer = () => {
            if (bufferRecords) {
                const subs = new Subscription();
                subscriber.add(subs);
                const buffer2 = [];
                const record = {
                    buffer: buffer2,
                    subs
                };
                bufferRecords.push(record);
                executeSchedule(subs, scheduler, () => emit(record), bufferTimeSpan);
            }
        };
        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
            executeSchedule(subscriber, scheduler, startBuffer, bufferCreationInterval, true);
        }
        else {
            restartOnEmit = true;
        }
        startBuffer();
        const bufferTimeSubscriber = createOperatorSubscriber(subscriber, (value) => {
            const recordsCopy = bufferRecords.slice();
            for (const record of recordsCopy) {
                const { buffer: buffer2 } = record;
                buffer2.push(value);
                maxBufferSize <= buffer2.length && emit(record);
            }
        }, () => {
            while (bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length) {
                subscriber.next(bufferRecords.shift().buffer);
            }
            bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 ? void 0 : bufferTimeSubscriber.unsubscribe();
            subscriber.complete();
            subscriber.unsubscribe();
        }, void 0, () => bufferRecords = null);
        source.subscribe(bufferTimeSubscriber);
    });
}
// node_modules/rxjs/dist/esm/internal/operators/bufferToggle.js
function bufferToggle(openings, closingSelector) {
    return operate((source, subscriber) => {
        const buffers = [];
        innerFrom(openings).subscribe(createOperatorSubscriber(subscriber, (openValue) => {
            const buffer2 = [];
            buffers.push(buffer2);
            const closingSubscription = new Subscription();
            const emitBuffer = () => {
                arrRemove(buffers, buffer2);
                subscriber.next(buffer2);
                closingSubscription.unsubscribe();
            };
            closingSubscription.add(innerFrom(closingSelector(openValue)).subscribe(createOperatorSubscriber(subscriber, emitBuffer, noop)));
        }, noop));
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            for (const buffer2 of buffers) {
                buffer2.push(value);
            }
        }, () => {
            while (buffers.length > 0) {
                subscriber.next(buffers.shift());
            }
            subscriber.complete();
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/bufferWhen.js
function bufferWhen(closingSelector) {
    return operate((source, subscriber) => {
        let buffer2 = null;
        let closingSubscriber = null;
        const openBuffer = () => {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            const b = buffer2;
            buffer2 = [];
            b && subscriber.next(b);
            innerFrom(closingSelector()).subscribe(closingSubscriber = createOperatorSubscriber(subscriber, openBuffer, noop));
        };
        openBuffer();
        source.subscribe(createOperatorSubscriber(subscriber, (value) => buffer2 === null || buffer2 === void 0 ? void 0 : buffer2.push(value), () => {
            buffer2 && subscriber.next(buffer2);
            subscriber.complete();
        }, void 0, () => buffer2 = closingSubscriber = null));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/catchError.js
function catchError(selector) {
    return operate((source, subscriber) => {
        let innerSub = null;
        let syncUnsub = false;
        let handledResult;
        innerSub = source.subscribe(createOperatorSubscriber(subscriber, void 0, void 0, (err) => {
            handledResult = innerFrom(selector(err, catchError(selector)(source)));
            if (innerSub) {
                innerSub.unsubscribe();
                innerSub = null;
                handledResult.subscribe(subscriber);
            }
            else {
                syncUnsub = true;
            }
        }));
        if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
        }
    });
}
// node_modules/rxjs/dist/esm/internal/operators/scanInternals.js
function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
    return (source, subscriber) => {
        let hasState = hasSeed;
        let state = seed;
        let index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            const i = index++;
            state = hasState ? accumulator(state, value, i) : (hasState = true, value);
            emitOnNext && subscriber.next(state);
        }, emitBeforeComplete && (() => {
            hasState && subscriber.next(state);
            subscriber.complete();
        })));
    };
}
// node_modules/rxjs/dist/esm/internal/operators/reduce.js
function reduce(accumulator, seed) {
    return operate(scanInternals(accumulator, seed, arguments.length >= 2, false, true));
}
// node_modules/rxjs/dist/esm/internal/operators/toArray.js
var arrReducer = (arr, value) => (arr.push(value), arr);
function toArray() {
    return operate((source, subscriber) => {
        reduce(arrReducer, [])(source).subscribe(subscriber);
    });
}
// node_modules/rxjs/dist/esm/internal/operators/joinAllInternals.js
function joinAllInternals(joinFn, project) {
    return pipe(toArray(), mergeMap((sources) => joinFn(sources)), project ? mapOneOrManyArgs(project) : identity);
}
// node_modules/rxjs/dist/esm/internal/operators/combineLatestAll.js
function combineLatestAll(project) {
    return joinAllInternals(combineLatest, project);
}
// node_modules/rxjs/dist/esm/internal/operators/combineAll.js
var combineAll = combineLatestAll;
// node_modules/rxjs/dist/esm/internal/operators/combineLatest.js
function combineLatest2(...args) {
    const resultSelector = popResultSelector(args);
    return resultSelector ? pipe(combineLatest2(...args), mapOneOrManyArgs(resultSelector)) : operate((source, subscriber) => {
        combineLatestInit([source, ...argsOrArgArray(args)])(subscriber);
    });
}
// node_modules/rxjs/dist/esm/internal/operators/combineLatestWith.js
function combineLatestWith(...otherSources) {
    return combineLatest2(...otherSources);
}
// node_modules/rxjs/dist/esm/internal/operators/concatMap.js
function concatMap(project, resultSelector) {
    return isFunction(resultSelector) ? mergeMap(project, resultSelector, 1) : mergeMap(project, 1);
}
// node_modules/rxjs/dist/esm/internal/operators/concatMapTo.js
function concatMapTo(innerObservable, resultSelector) {
    return isFunction(resultSelector) ? concatMap(() => innerObservable, resultSelector) : concatMap(() => innerObservable);
}
// node_modules/rxjs/dist/esm/internal/operators/concat.js
function concat2(...args) {
    const scheduler = popScheduler(args);
    return operate((source, subscriber) => {
        concatAll()(from([source, ...args], scheduler)).subscribe(subscriber);
    });
}
// node_modules/rxjs/dist/esm/internal/operators/concatWith.js
function concatWith(...otherSources) {
    return concat2(...otherSources);
}
// node_modules/rxjs/dist/esm/internal/observable/fromSubscribable.js
function fromSubscribable(subscribable) {
    return new Observable((subscriber) => subscribable.subscribe(subscriber));
}
// node_modules/rxjs/dist/esm/internal/operators/connect.js
var DEFAULT_CONFIG = {
    connector: () => new Subject()
};
function connect(selector, config = DEFAULT_CONFIG) {
    const { connector } = config;
    return operate((source, subscriber) => {
        const subject = connector();
        innerFrom(selector(fromSubscribable(subject))).subscribe(subscriber);
        subscriber.add(source.subscribe(subject));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/count.js
function count(predicate) {
    return reduce((total, value, i) => !predicate || predicate(value, i) ? total + 1 : total, 0);
}
// node_modules/rxjs/dist/esm/internal/operators/debounce.js
function debounce(durationSelector) {
    return operate((source, subscriber) => {
        let hasValue = false;
        let lastValue = null;
        let durationSubscriber = null;
        const emit = () => {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                const value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            hasValue = true;
            lastValue = value;
            durationSubscriber = createOperatorSubscriber(subscriber, emit, noop);
            innerFrom(durationSelector(value)).subscribe(durationSubscriber);
        }, () => {
            emit();
            subscriber.complete();
        }, void 0, () => {
            lastValue = durationSubscriber = null;
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/debounceTime.js
function debounceTime(dueTime, scheduler = asyncScheduler) {
    return operate((source, subscriber) => {
        let activeTask = null;
        let lastValue = null;
        let lastTime = null;
        const emit = () => {
            if (activeTask) {
                activeTask.unsubscribe();
                activeTask = null;
                const value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        function emitWhenIdle() {
            const targetTime = lastTime + dueTime;
            const now = scheduler.now();
            if (now < targetTime) {
                activeTask = this.schedule(void 0, targetTime - now);
                subscriber.add(activeTask);
                return;
            }
            emit();
        }
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            lastValue = value;
            lastTime = scheduler.now();
            if (!activeTask) {
                activeTask = scheduler.schedule(emitWhenIdle, dueTime);
                subscriber.add(activeTask);
            }
        }, () => {
            emit();
            subscriber.complete();
        }, void 0, () => {
            lastValue = activeTask = null;
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/defaultIfEmpty.js
function defaultIfEmpty(defaultValue) {
    return operate((source, subscriber) => {
        let hasValue = false;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            hasValue = true;
            subscriber.next(value);
        }, () => {
            if (!hasValue) {
                subscriber.next(defaultValue);
            }
            subscriber.complete();
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/take.js
function take(count2) {
    return count2 <= 0 ? () => EMPTY : operate((source, subscriber) => {
        let seen = 0;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            if (++seen <= count2) {
                subscriber.next(value);
                if (count2 <= seen) {
                    subscriber.complete();
                }
            }
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/ignoreElements.js
function ignoreElements() {
    return operate((source, subscriber) => {
        source.subscribe(createOperatorSubscriber(subscriber, noop));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/mapTo.js
function mapTo(value) {
    return map(() => value);
}
// node_modules/rxjs/dist/esm/internal/operators/delayWhen.js
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return (source) => concat(subscriptionDelay.pipe(take(1), ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
    }
    return mergeMap((value, index) => innerFrom(delayDurationSelector(value, index)).pipe(take(1), mapTo(value)));
}
// node_modules/rxjs/dist/esm/internal/operators/delay.js
function delay(due, scheduler = asyncScheduler) {
    const duration = timer(due, scheduler);
    return delayWhen(() => duration);
}
// node_modules/rxjs/dist/esm/internal/operators/dematerialize.js
function dematerialize() {
    return operate((source, subscriber) => {
        source.subscribe(createOperatorSubscriber(subscriber, (notification) => observeNotification(notification, subscriber)));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/distinct.js
function distinct(keySelector, flushes) {
    return operate((source, subscriber) => {
        const distinctKeys = /* @__PURE__ */ new Set();
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            const key = keySelector ? keySelector(value) : value;
            if (!distinctKeys.has(key)) {
                distinctKeys.add(key);
                subscriber.next(value);
            }
        }));
        flushes && innerFrom(flushes).subscribe(createOperatorSubscriber(subscriber, () => distinctKeys.clear(), noop));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/distinctUntilChanged.js
function distinctUntilChanged(comparator, keySelector = identity) {
    comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
    return operate((source, subscriber) => {
        let previousKey;
        let first2 = true;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            const currentKey = keySelector(value);
            if (first2 || !comparator(previousKey, currentKey)) {
                first2 = false;
                previousKey = currentKey;
                subscriber.next(value);
            }
        }));
    });
}
function defaultCompare(a, b) {
    return a === b;
}
// node_modules/rxjs/dist/esm/internal/operators/distinctUntilKeyChanged.js
function distinctUntilKeyChanged(key, compare) {
    return distinctUntilChanged((x, y) => compare ? compare(x[key], y[key]) : x[key] === y[key]);
}
// node_modules/rxjs/dist/esm/internal/operators/throwIfEmpty.js
function throwIfEmpty(errorFactory = defaultErrorFactory) {
    return operate((source, subscriber) => {
        let hasValue = false;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            hasValue = true;
            subscriber.next(value);
        }, () => hasValue ? subscriber.complete() : subscriber.error(errorFactory())));
    });
}
function defaultErrorFactory() {
    return new EmptyError();
}
// node_modules/rxjs/dist/esm/internal/operators/elementAt.js
function elementAt(index, defaultValue) {
    if (index < 0) {
        throw new ArgumentOutOfRangeError();
    }
    const hasDefaultValue = arguments.length >= 2;
    return (source) => source.pipe(filter((v, i) => i === index), take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(() => new ArgumentOutOfRangeError()));
}
// node_modules/rxjs/dist/esm/internal/operators/endWith.js
function endWith(...values) {
    return (source) => concat(source, of(...values));
}
// node_modules/rxjs/dist/esm/internal/operators/every.js
function every(predicate, thisArg) {
    return operate((source, subscriber) => {
        let index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            if (!predicate.call(thisArg, value, index++, source)) {
                subscriber.next(false);
                subscriber.complete();
            }
        }, () => {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/exhaustMap.js
function exhaustMap(project, resultSelector) {
    if (resultSelector) {
        return (source) => source.pipe(exhaustMap((a, i) => innerFrom(project(a, i)).pipe(map((b, ii) => resultSelector(a, b, i, ii)))));
    }
    return operate((source, subscriber) => {
        let index = 0;
        let innerSub = null;
        let isComplete = false;
        source.subscribe(createOperatorSubscriber(subscriber, (outerValue) => {
            if (!innerSub) {
                innerSub = createOperatorSubscriber(subscriber, void 0, () => {
                    innerSub = null;
                    isComplete && subscriber.complete();
                });
                innerFrom(project(outerValue, index++)).subscribe(innerSub);
            }
        }, () => {
            isComplete = true;
            !innerSub && subscriber.complete();
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/exhaustAll.js
function exhaustAll() {
    return exhaustMap(identity);
}
// node_modules/rxjs/dist/esm/internal/operators/exhaust.js
var exhaust = exhaustAll;
// node_modules/rxjs/dist/esm/internal/operators/expand.js
function expand(project, concurrent = Infinity, scheduler) {
    concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
    return operate((source, subscriber) => mergeInternals(source, subscriber, project, concurrent, void 0, true, scheduler));
}
// node_modules/rxjs/dist/esm/internal/operators/finalize.js
function finalize(callback) {
    return operate((source, subscriber) => {
        try {
            source.subscribe(subscriber);
        }
        finally {
            subscriber.add(callback);
        }
    });
}
// node_modules/rxjs/dist/esm/internal/operators/find.js
function find(predicate, thisArg) {
    return operate(createFind(predicate, thisArg, "value"));
}
function createFind(predicate, thisArg, emit) {
    const findIndex2 = emit === "index";
    return (source, subscriber) => {
        let index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            const i = index++;
            if (predicate.call(thisArg, value, i, source)) {
                subscriber.next(findIndex2 ? i : value);
                subscriber.complete();
            }
        }, () => {
            subscriber.next(findIndex2 ? -1 : void 0);
            subscriber.complete();
        }));
    };
}
// node_modules/rxjs/dist/esm/internal/operators/findIndex.js
function findIndex(predicate, thisArg) {
    return operate(createFind(predicate, thisArg, "index"));
}
// node_modules/rxjs/dist/esm/internal/operators/first.js
function first(predicate, defaultValue) {
    const hasDefaultValue = arguments.length >= 2;
    return (source) => source.pipe(predicate ? filter((v, i) => predicate(v, i, source)) : identity, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(() => new EmptyError()));
}
// node_modules/rxjs/dist/esm/internal/operators/groupBy.js
function groupBy(keySelector, elementOrOptions, duration, connector) {
    return operate((source, subscriber) => {
        let element;
        if (!elementOrOptions || typeof elementOrOptions === "function") {
            element = elementOrOptions;
        }
        else {
            ({ duration, element, connector } = elementOrOptions);
        }
        const groups = /* @__PURE__ */ new Map();
        const notify = (cb) => {
            groups.forEach(cb);
            cb(subscriber);
        };
        const handleError = (err) => notify((consumer) => consumer.error(err));
        let activeGroups = 0;
        let teardownAttempted = false;
        const groupBySourceSubscriber = new OperatorSubscriber(subscriber, (value) => {
            try {
                const key = keySelector(value);
                let group = groups.get(key);
                if (!group) {
                    groups.set(key, group = connector ? connector() : new Subject());
                    const grouped = createGroupedObservable(key, group);
                    subscriber.next(grouped);
                    if (duration) {
                        const durationSubscriber = createOperatorSubscriber(group, () => {
                            group.complete();
                            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
                        }, void 0, void 0, () => groups.delete(key));
                        groupBySourceSubscriber.add(innerFrom(duration(grouped)).subscribe(durationSubscriber));
                    }
                }
                group.next(element ? element(value) : value);
            }
            catch (err) {
                handleError(err);
            }
        }, () => notify((consumer) => consumer.complete()), handleError, () => groups.clear(), () => {
            teardownAttempted = true;
            return activeGroups === 0;
        });
        source.subscribe(groupBySourceSubscriber);
        function createGroupedObservable(key, groupSubject) {
            const result = new Observable((groupSubscriber) => {
                activeGroups++;
                const innerSub = groupSubject.subscribe(groupSubscriber);
                return () => {
                    innerSub.unsubscribe();
                    --activeGroups === 0 && teardownAttempted && groupBySourceSubscriber.unsubscribe();
                };
            });
            result.key = key;
            return result;
        }
    });
}
// node_modules/rxjs/dist/esm/internal/operators/isEmpty.js
function isEmpty() {
    return operate((source, subscriber) => {
        source.subscribe(createOperatorSubscriber(subscriber, () => {
            subscriber.next(false);
            subscriber.complete();
        }, () => {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/takeLast.js
function takeLast(count2) {
    return count2 <= 0 ? () => EMPTY : operate((source, subscriber) => {
        let buffer2 = [];
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            buffer2.push(value);
            count2 < buffer2.length && buffer2.shift();
        }, () => {
            for (const value of buffer2) {
                subscriber.next(value);
            }
            subscriber.complete();
        }, void 0, () => {
            buffer2 = null;
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/last.js
function last(predicate, defaultValue) {
    const hasDefaultValue = arguments.length >= 2;
    return (source) => source.pipe(predicate ? filter((v, i) => predicate(v, i, source)) : identity, takeLast(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(() => new EmptyError()));
}
// node_modules/rxjs/dist/esm/internal/operators/materialize.js
function materialize() {
    return operate((source, subscriber) => {
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            subscriber.next(Notification.createNext(value));
        }, () => {
            subscriber.next(Notification.createComplete());
            subscriber.complete();
        }, (err) => {
            subscriber.next(Notification.createError(err));
            subscriber.complete();
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/max.js
function max(comparer) {
    return reduce(isFunction(comparer) ? (x, y) => comparer(x, y) > 0 ? x : y : (x, y) => x > y ? x : y);
}
// node_modules/rxjs/dist/esm/internal/operators/flatMap.js
var flatMap = mergeMap;
// node_modules/rxjs/dist/esm/internal/operators/mergeMapTo.js
function mergeMapTo(innerObservable, resultSelector, concurrent = Infinity) {
    if (isFunction(resultSelector)) {
        return mergeMap(() => innerObservable, resultSelector, concurrent);
    }
    if (typeof resultSelector === "number") {
        concurrent = resultSelector;
    }
    return mergeMap(() => innerObservable, concurrent);
}
// node_modules/rxjs/dist/esm/internal/operators/mergeScan.js
function mergeScan(accumulator, seed, concurrent = Infinity) {
    return operate((source, subscriber) => {
        let state = seed;
        return mergeInternals(source, subscriber, (value, index) => accumulator(state, value, index), concurrent, (value) => {
            state = value;
        }, false, void 0, () => state = null);
    });
}
// node_modules/rxjs/dist/esm/internal/operators/merge.js
function merge(...args) {
    const scheduler = popScheduler(args);
    const concurrent = popNumber(args, Infinity);
    return operate((source, subscriber) => {
        mergeAll(concurrent)(from([source, ...args], scheduler)).subscribe(subscriber);
    });
}
// node_modules/rxjs/dist/esm/internal/operators/mergeWith.js
function mergeWith(...otherSources) {
    return merge(...otherSources);
}
// node_modules/rxjs/dist/esm/internal/operators/min.js
function min(comparer) {
    return reduce(isFunction(comparer) ? (x, y) => comparer(x, y) < 0 ? x : y : (x, y) => x < y ? x : y);
}
// node_modules/rxjs/dist/esm/internal/operators/multicast.js
function multicast(subjectOrSubjectFactory, selector) {
    const subjectFactory = isFunction(subjectOrSubjectFactory) ? subjectOrSubjectFactory : () => subjectOrSubjectFactory;
    if (isFunction(selector)) {
        return connect(selector, {
            connector: subjectFactory
        });
    }
    return (source) => new ConnectableObservable(source, subjectFactory);
}
// node_modules/rxjs/dist/esm/internal/operators/onErrorResumeNextWith.js
function onErrorResumeNextWith(...sources) {
    const nextSources = argsOrArgArray(sources);
    return (source) => onErrorResumeNext(source, ...nextSources);
}
var onErrorResumeNext2 = onErrorResumeNextWith;
// node_modules/rxjs/dist/esm/internal/operators/pairwise.js
function pairwise() {
    return operate((source, subscriber) => {
        let prev;
        let hasPrev = false;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            const p = prev;
            prev = value;
            hasPrev && subscriber.next([p, value]);
            hasPrev = true;
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/pluck.js
function pluck(...properties) {
    const length = properties.length;
    if (length === 0) {
        throw new Error("list of properties cannot be empty.");
    }
    return map((x) => {
        let currentProp = x;
        for (let i = 0; i < length; i++) {
            const p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
            if (typeof p !== "undefined") {
                currentProp = p;
            }
            else {
                return void 0;
            }
        }
        return currentProp;
    });
}
// node_modules/rxjs/dist/esm/internal/operators/publish.js
function publish(selector) {
    return selector ? (source) => connect(selector)(source) : (source) => multicast(new Subject())(source);
}
// node_modules/rxjs/dist/esm/internal/operators/publishBehavior.js
function publishBehavior(initialValue) {
    return (source) => {
        const subject = new BehaviorSubject(initialValue);
        return new ConnectableObservable(source, () => subject);
    };
}
// node_modules/rxjs/dist/esm/internal/operators/publishLast.js
function publishLast() {
    return (source) => {
        const subject = new AsyncSubject();
        return new ConnectableObservable(source, () => subject);
    };
}
// node_modules/rxjs/dist/esm/internal/operators/publishReplay.js
function publishReplay(bufferSize, windowTime2, selectorOrScheduler, timestampProvider) {
    if (selectorOrScheduler && !isFunction(selectorOrScheduler)) {
        timestampProvider = selectorOrScheduler;
    }
    const selector = isFunction(selectorOrScheduler) ? selectorOrScheduler : void 0;
    return (source) => multicast(new ReplaySubject(bufferSize, windowTime2, timestampProvider), selector)(source);
}
// node_modules/rxjs/dist/esm/internal/operators/raceWith.js
function raceWith(...otherSources) {
    return !otherSources.length ? identity : operate((source, subscriber) => {
        raceInit([source, ...otherSources])(subscriber);
    });
}
// node_modules/rxjs/dist/esm/internal/operators/repeat.js
function repeat(countOrConfig) {
    let count2 = Infinity;
    let delay2;
    if (countOrConfig != null) {
        if (typeof countOrConfig === "object") {
            ({ count: count2 = Infinity, delay: delay2 } = countOrConfig);
        }
        else {
            count2 = countOrConfig;
        }
    }
    return count2 <= 0 ? () => EMPTY : operate((source, subscriber) => {
        let soFar = 0;
        let sourceSub;
        const resubscribe = () => {
            sourceSub === null || sourceSub === void 0 ? void 0 : sourceSub.unsubscribe();
            sourceSub = null;
            if (delay2 != null) {
                const notifier = typeof delay2 === "number" ? timer(delay2) : innerFrom(delay2(soFar));
                const notifierSubscriber = createOperatorSubscriber(subscriber, () => {
                    notifierSubscriber.unsubscribe();
                    subscribeToSource();
                });
                notifier.subscribe(notifierSubscriber);
            }
            else {
                subscribeToSource();
            }
        };
        const subscribeToSource = () => {
            let syncUnsub = false;
            sourceSub = source.subscribe(createOperatorSubscriber(subscriber, void 0, () => {
                if (++soFar < count2) {
                    if (sourceSub) {
                        resubscribe();
                    }
                    else {
                        syncUnsub = true;
                    }
                }
                else {
                    subscriber.complete();
                }
            }));
            if (syncUnsub) {
                resubscribe();
            }
        };
        subscribeToSource();
    });
}
// node_modules/rxjs/dist/esm/internal/operators/repeatWhen.js
function repeatWhen(notifier) {
    return operate((source, subscriber) => {
        let innerSub;
        let syncResub = false;
        let completions$;
        let isNotifierComplete = false;
        let isMainComplete = false;
        const checkComplete = () => isMainComplete && isNotifierComplete && (subscriber.complete(), true);
        const getCompletionSubject = () => {
            if (!completions$) {
                completions$ = new Subject();
                innerFrom(notifier(completions$)).subscribe(createOperatorSubscriber(subscriber, () => {
                    if (innerSub) {
                        subscribeForRepeatWhen();
                    }
                    else {
                        syncResub = true;
                    }
                }, () => {
                    isNotifierComplete = true;
                    checkComplete();
                }));
            }
            return completions$;
        };
        const subscribeForRepeatWhen = () => {
            isMainComplete = false;
            innerSub = source.subscribe(createOperatorSubscriber(subscriber, void 0, () => {
                isMainComplete = true;
                !checkComplete() && getCompletionSubject().next();
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRepeatWhen();
            }
        };
        subscribeForRepeatWhen();
    });
}
// node_modules/rxjs/dist/esm/internal/operators/retry.js
function retry(configOrCount = Infinity) {
    let config;
    if (configOrCount && typeof configOrCount === "object") {
        config = configOrCount;
    }
    else {
        config = {
            count: configOrCount
        };
    }
    const { count: count2 = Infinity, delay: delay2, resetOnSuccess = false } = config;
    return count2 <= 0 ? identity : operate((source, subscriber) => {
        let soFar = 0;
        let innerSub;
        const subscribeForRetry = () => {
            let syncUnsub = false;
            innerSub = source.subscribe(createOperatorSubscriber(subscriber, (value) => {
                if (resetOnSuccess) {
                    soFar = 0;
                }
                subscriber.next(value);
            }, void 0, (err) => {
                if (soFar++ < count2) {
                    const resub = () => {
                        if (innerSub) {
                            innerSub.unsubscribe();
                            innerSub = null;
                            subscribeForRetry();
                        }
                        else {
                            syncUnsub = true;
                        }
                    };
                    if (delay2 != null) {
                        const notifier = typeof delay2 === "number" ? timer(delay2) : innerFrom(delay2(err, soFar));
                        const notifierSubscriber = createOperatorSubscriber(subscriber, () => {
                            notifierSubscriber.unsubscribe();
                            resub();
                        }, () => {
                            subscriber.complete();
                        });
                        notifier.subscribe(notifierSubscriber);
                    }
                    else {
                        resub();
                    }
                }
                else {
                    subscriber.error(err);
                }
            }));
            if (syncUnsub) {
                innerSub.unsubscribe();
                innerSub = null;
                subscribeForRetry();
            }
        };
        subscribeForRetry();
    });
}
// node_modules/rxjs/dist/esm/internal/operators/retryWhen.js
function retryWhen(notifier) {
    return operate((source, subscriber) => {
        let innerSub;
        let syncResub = false;
        let errors$;
        const subscribeForRetryWhen = () => {
            innerSub = source.subscribe(createOperatorSubscriber(subscriber, void 0, void 0, (err) => {
                if (!errors$) {
                    errors$ = new Subject();
                    innerFrom(notifier(errors$)).subscribe(createOperatorSubscriber(subscriber, () => innerSub ? subscribeForRetryWhen() : syncResub = true));
                }
                if (errors$) {
                    errors$.next(err);
                }
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRetryWhen();
            }
        };
        subscribeForRetryWhen();
    });
}
// node_modules/rxjs/dist/esm/internal/operators/sample.js
function sample(notifier) {
    return operate((source, subscriber) => {
        let hasValue = false;
        let lastValue = null;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            hasValue = true;
            lastValue = value;
        }));
        innerFrom(notifier).subscribe(createOperatorSubscriber(subscriber, () => {
            if (hasValue) {
                hasValue = false;
                const value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        }, noop));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/sampleTime.js
function sampleTime(period, scheduler = asyncScheduler) {
    return sample(interval(period, scheduler));
}
// node_modules/rxjs/dist/esm/internal/operators/scan.js
function scan(accumulator, seed) {
    return operate(scanInternals(accumulator, seed, arguments.length >= 2, true));
}
// node_modules/rxjs/dist/esm/internal/operators/sequenceEqual.js
function sequenceEqual(compareTo, comparator = (a, b) => a === b) {
    return operate((source, subscriber) => {
        const aState = createState();
        const bState = createState();
        const emit = (isEqual) => {
            subscriber.next(isEqual);
            subscriber.complete();
        };
        const createSubscriber = (selfState, otherState) => {
            const sequenceEqualSubscriber = createOperatorSubscriber(subscriber, (a) => {
                const { buffer: buffer2, complete } = otherState;
                if (buffer2.length === 0) {
                    complete ? emit(false) : selfState.buffer.push(a);
                }
                else {
                    !comparator(a, buffer2.shift()) && emit(false);
                }
            }, () => {
                selfState.complete = true;
                const { complete, buffer: buffer2 } = otherState;
                complete && emit(buffer2.length === 0);
                sequenceEqualSubscriber === null || sequenceEqualSubscriber === void 0 ? void 0 : sequenceEqualSubscriber.unsubscribe();
            });
            return sequenceEqualSubscriber;
        };
        source.subscribe(createSubscriber(aState, bState));
        innerFrom(compareTo).subscribe(createSubscriber(bState, aState));
    });
}
function createState() {
    return {
        buffer: [],
        complete: false
    };
}
// node_modules/rxjs/dist/esm/internal/operators/share.js
function share(options = {}) {
    const { connector = () => new Subject(), resetOnError = true, resetOnComplete = true, resetOnRefCountZero = true } = options;
    return (wrapperSource) => {
        let connection;
        let resetConnection;
        let subject;
        let refCount2 = 0;
        let hasCompleted = false;
        let hasErrored = false;
        const cancelReset = () => {
            resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
            resetConnection = void 0;
        };
        const reset = () => {
            cancelReset();
            connection = subject = void 0;
            hasCompleted = hasErrored = false;
        };
        const resetAndUnsubscribe = () => {
            const conn = connection;
            reset();
            conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
        };
        return operate((source, subscriber) => {
            refCount2++;
            if (!hasErrored && !hasCompleted) {
                cancelReset();
            }
            const dest = subject = subject !== null && subject !== void 0 ? subject : connector();
            subscriber.add(() => {
                refCount2--;
                if (refCount2 === 0 && !hasErrored && !hasCompleted) {
                    resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
                }
            });
            dest.subscribe(subscriber);
            if (!connection && refCount2 > 0) {
                connection = new SafeSubscriber({
                    next: (value) => dest.next(value),
                    error: (err) => {
                        hasErrored = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnError, err);
                        dest.error(err);
                    },
                    complete: () => {
                        hasCompleted = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnComplete);
                        dest.complete();
                    }
                });
                innerFrom(source).subscribe(connection);
            }
        })(wrapperSource);
    };
}
function handleReset(reset, on, ...args) {
    if (on === true) {
        reset();
        return;
    }
    if (on === false) {
        return;
    }
    const onSubscriber = new SafeSubscriber({
        next: () => {
            onSubscriber.unsubscribe();
            reset();
        }
    });
    return innerFrom(on(...args)).subscribe(onSubscriber);
}
// node_modules/rxjs/dist/esm/internal/operators/shareReplay.js
function shareReplay(configOrBufferSize, windowTime2, scheduler) {
    let bufferSize;
    let refCount2 = false;
    if (configOrBufferSize && typeof configOrBufferSize === "object") {
        ({ bufferSize = Infinity, windowTime: windowTime2 = Infinity, refCount: refCount2 = false, scheduler } = configOrBufferSize);
    }
    else {
        bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
    }
    return share({
        connector: () => new ReplaySubject(bufferSize, windowTime2, scheduler),
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: refCount2
    });
}
// node_modules/rxjs/dist/esm/internal/operators/single.js
function single(predicate) {
    return operate((source, subscriber) => {
        let hasValue = false;
        let singleValue;
        let seenValue = false;
        let index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            seenValue = true;
            if (!predicate || predicate(value, index++, source)) {
                hasValue && subscriber.error(new SequenceError("Too many matching values"));
                hasValue = true;
                singleValue = value;
            }
        }, () => {
            if (hasValue) {
                subscriber.next(singleValue);
                subscriber.complete();
            }
            else {
                subscriber.error(seenValue ? new NotFoundError("No matching values") : new EmptyError());
            }
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/skip.js
function skip(count2) {
    return filter((_, index) => count2 <= index);
}
// node_modules/rxjs/dist/esm/internal/operators/skipLast.js
function skipLast(skipCount) {
    return skipCount <= 0 ? identity : operate((source, subscriber) => {
        let ring = new Array(skipCount);
        let seen = 0;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            const valueIndex = seen++;
            if (valueIndex < skipCount) {
                ring[valueIndex] = value;
            }
            else {
                const index = valueIndex % skipCount;
                const oldValue = ring[index];
                ring[index] = value;
                subscriber.next(oldValue);
            }
        }));
        return () => {
            ring = null;
        };
    });
}
// node_modules/rxjs/dist/esm/internal/operators/skipUntil.js
function skipUntil(notifier) {
    return operate((source, subscriber) => {
        let taking = false;
        const skipSubscriber = createOperatorSubscriber(subscriber, () => {
            skipSubscriber === null || skipSubscriber === void 0 ? void 0 : skipSubscriber.unsubscribe();
            taking = true;
        }, noop);
        innerFrom(notifier).subscribe(skipSubscriber);
        source.subscribe(createOperatorSubscriber(subscriber, (value) => taking && subscriber.next(value)));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/skipWhile.js
function skipWhile(predicate) {
    return operate((source, subscriber) => {
        let taking = false;
        let index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => (taking || (taking = !predicate(value, index++))) && subscriber.next(value)));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/startWith.js
function startWith(...values) {
    const scheduler = popScheduler(values);
    return operate((source, subscriber) => {
        (scheduler ? concat(values, source, scheduler) : concat(values, source)).subscribe(subscriber);
    });
}
// node_modules/rxjs/dist/esm/internal/operators/switchMap.js
function switchMap(project, resultSelector) {
    return operate((source, subscriber) => {
        let innerSubscriber = null;
        let index = 0;
        let isComplete = false;
        const checkComplete = () => isComplete && !innerSubscriber && subscriber.complete();
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
            let innerIndex = 0;
            const outerIndex = index++;
            innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = createOperatorSubscriber(subscriber, (innerValue) => subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue), () => {
                innerSubscriber = null;
                checkComplete();
            }));
        }, () => {
            isComplete = true;
            checkComplete();
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/switchAll.js
function switchAll() {
    return switchMap(identity);
}
// node_modules/rxjs/dist/esm/internal/operators/switchMapTo.js
function switchMapTo(innerObservable, resultSelector) {
    return isFunction(resultSelector) ? switchMap(() => innerObservable, resultSelector) : switchMap(() => innerObservable);
}
// node_modules/rxjs/dist/esm/internal/operators/switchScan.js
function switchScan(accumulator, seed) {
    return operate((source, subscriber) => {
        let state = seed;
        switchMap((value, index) => accumulator(state, value, index), (_, innerValue) => (state = innerValue, innerValue))(source).subscribe(subscriber);
        return () => {
            state = null;
        };
    });
}
// node_modules/rxjs/dist/esm/internal/operators/takeUntil.js
function takeUntil(notifier) {
    return operate((source, subscriber) => {
        innerFrom(notifier).subscribe(createOperatorSubscriber(subscriber, () => subscriber.complete(), noop));
        !subscriber.closed && source.subscribe(subscriber);
    });
}
// node_modules/rxjs/dist/esm/internal/operators/takeWhile.js
function takeWhile(predicate, inclusive = false) {
    return operate((source, subscriber) => {
        let index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            const result = predicate(value, index++);
            (result || inclusive) && subscriber.next(value);
            !result && subscriber.complete();
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/tap.js
function tap(observerOrNext, error, complete) {
    const tapObserver = isFunction(observerOrNext) || error || complete ? { next: observerOrNext, error, complete } : observerOrNext;
    return tapObserver ? operate((source, subscriber) => {
        var _a;
        (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
        let isUnsub = true;
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            var _a2;
            (_a2 = tapObserver.next) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, value);
            subscriber.next(value);
        }, () => {
            var _a2;
            isUnsub = false;
            (_a2 = tapObserver.complete) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
            subscriber.complete();
        }, (err) => {
            var _a2;
            isUnsub = false;
            (_a2 = tapObserver.error) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, err);
            subscriber.error(err);
        }, () => {
            var _a2, _b;
            if (isUnsub) {
                (_a2 = tapObserver.unsubscribe) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
            }
            (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
        }));
    }) : identity;
}
// node_modules/rxjs/dist/esm/internal/operators/throttle.js
function throttle(durationSelector, config) {
    return operate((source, subscriber) => {
        const { leading = true, trailing = false } = config !== null && config !== void 0 ? config : {};
        let hasValue = false;
        let sendValue = null;
        let throttled = null;
        let isComplete = false;
        const endThrottling = () => {
            throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
            throttled = null;
            if (trailing) {
                send();
                isComplete && subscriber.complete();
            }
        };
        const cleanupThrottling = () => {
            throttled = null;
            isComplete && subscriber.complete();
        };
        const startThrottle = (value) => throttled = innerFrom(durationSelector(value)).subscribe(createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
        const send = () => {
            if (hasValue) {
                hasValue = false;
                const value = sendValue;
                sendValue = null;
                subscriber.next(value);
                !isComplete && startThrottle(value);
            }
        };
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            hasValue = true;
            sendValue = value;
            !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
        }, () => {
            isComplete = true;
            !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/throttleTime.js
function throttleTime(duration, scheduler = asyncScheduler, config) {
    const duration$ = timer(duration, scheduler);
    return throttle(() => duration$, config);
}
// node_modules/rxjs/dist/esm/internal/operators/timeInterval.js
function timeInterval(scheduler = asyncScheduler) {
    return operate((source, subscriber) => {
        let last2 = scheduler.now();
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            const now = scheduler.now();
            const interval2 = now - last2;
            last2 = now;
            subscriber.next(new TimeInterval(value, interval2));
        }));
    });
}
var TimeInterval = class {
    constructor(value, interval2) {
        this.value = value;
        this.interval = interval2;
    }
};
// node_modules/rxjs/dist/esm/internal/operators/timeoutWith.js
function timeoutWith(due, withObservable, scheduler) {
    let first2;
    let each;
    let _with;
    scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : async;
    if (isValidDate(due)) {
        first2 = due;
    }
    else if (typeof due === "number") {
        each = due;
    }
    if (withObservable) {
        _with = () => withObservable;
    }
    else {
        throw new TypeError("No observable provided to switch to");
    }
    if (first2 == null && each == null) {
        throw new TypeError("No timeout provided.");
    }
    return timeout({
        first: first2,
        each,
        scheduler,
        with: _with
    });
}
// node_modules/rxjs/dist/esm/internal/operators/timestamp.js
function timestamp(timestampProvider = dateTimestampProvider) {
    return map((value) => ({ value, timestamp: timestampProvider.now() }));
}
// node_modules/rxjs/dist/esm/internal/operators/window.js
function window(windowBoundaries) {
    return operate((source, subscriber) => {
        let windowSubject = new Subject();
        subscriber.next(windowSubject.asObservable());
        const errorHandler = (err) => {
            windowSubject.error(err);
            subscriber.error(err);
        };
        source.subscribe(createOperatorSubscriber(subscriber, (value) => windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.next(value), () => {
            windowSubject.complete();
            subscriber.complete();
        }, errorHandler));
        innerFrom(windowBoundaries).subscribe(createOperatorSubscriber(subscriber, () => {
            windowSubject.complete();
            subscriber.next(windowSubject = new Subject());
        }, noop, errorHandler));
        return () => {
            windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.unsubscribe();
            windowSubject = null;
        };
    });
}
// node_modules/rxjs/dist/esm/internal/operators/windowCount.js
function windowCount(windowSize, startWindowEvery = 0) {
    const startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
    return operate((source, subscriber) => {
        let windows = [new Subject()];
        let starts = [];
        let count2 = 0;
        subscriber.next(windows[0].asObservable());
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            for (const window2 of windows) {
                window2.next(value);
            }
            const c = count2 - windowSize + 1;
            if (c >= 0 && c % startEvery === 0) {
                windows.shift().complete();
            }
            if (++count2 % startEvery === 0) {
                const window2 = new Subject();
                windows.push(window2);
                subscriber.next(window2.asObservable());
            }
        }, () => {
            while (windows.length > 0) {
                windows.shift().complete();
            }
            subscriber.complete();
        }, (err) => {
            while (windows.length > 0) {
                windows.shift().error(err);
            }
            subscriber.error(err);
        }, () => {
            starts = null;
            windows = null;
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/windowTime.js
function windowTime(windowTimeSpan, ...otherArgs) {
    var _a, _b;
    const scheduler = (_a = popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : asyncScheduler;
    const windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    const maxWindowSize = otherArgs[1] || Infinity;
    return operate((source, subscriber) => {
        let windowRecords = [];
        let restartOnClose = false;
        const closeWindow = (record) => {
            const { window: window2, subs } = record;
            window2.complete();
            subs.unsubscribe();
            arrRemove(windowRecords, record);
            restartOnClose && startWindow();
        };
        const startWindow = () => {
            if (windowRecords) {
                const subs = new Subscription();
                subscriber.add(subs);
                const window2 = new Subject();
                const record = {
                    window: window2,
                    subs,
                    seen: 0
                };
                windowRecords.push(record);
                subscriber.next(window2.asObservable());
                executeSchedule(subs, scheduler, () => closeWindow(record), windowTimeSpan);
            }
        };
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            executeSchedule(subscriber, scheduler, startWindow, windowCreationInterval, true);
        }
        else {
            restartOnClose = true;
        }
        startWindow();
        const loop = (cb) => windowRecords.slice().forEach(cb);
        const terminate = (cb) => {
            loop(({ window: window2 }) => cb(window2));
            cb(subscriber);
            subscriber.unsubscribe();
        };
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            loop((record) => {
                record.window.next(value);
                maxWindowSize <= ++record.seen && closeWindow(record);
            });
        }, () => terminate((consumer) => consumer.complete()), (err) => terminate((consumer) => consumer.error(err))));
        return () => {
            windowRecords = null;
        };
    });
}
// node_modules/rxjs/dist/esm/internal/operators/windowToggle.js
function windowToggle(openings, closingSelector) {
    return operate((source, subscriber) => {
        const windows = [];
        const handleError = (err) => {
            while (0 < windows.length) {
                windows.shift().error(err);
            }
            subscriber.error(err);
        };
        innerFrom(openings).subscribe(createOperatorSubscriber(subscriber, (openValue) => {
            const window2 = new Subject();
            windows.push(window2);
            const closingSubscription = new Subscription();
            const closeWindow = () => {
                arrRemove(windows, window2);
                window2.complete();
                closingSubscription.unsubscribe();
            };
            let closingNotifier;
            try {
                closingNotifier = innerFrom(closingSelector(openValue));
            }
            catch (err) {
                handleError(err);
                return;
            }
            subscriber.next(window2.asObservable());
            closingSubscription.add(closingNotifier.subscribe(createOperatorSubscriber(subscriber, closeWindow, noop, handleError)));
        }, noop));
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            const windowsCopy = windows.slice();
            for (const window2 of windowsCopy) {
                window2.next(value);
            }
        }, () => {
            while (0 < windows.length) {
                windows.shift().complete();
            }
            subscriber.complete();
        }, handleError, () => {
            while (0 < windows.length) {
                windows.shift().unsubscribe();
            }
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/windowWhen.js
function windowWhen(closingSelector) {
    return operate((source, subscriber) => {
        let window2;
        let closingSubscriber;
        const handleError = (err) => {
            window2.error(err);
            subscriber.error(err);
        };
        const openWindow = () => {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            window2 === null || window2 === void 0 ? void 0 : window2.complete();
            window2 = new Subject();
            subscriber.next(window2.asObservable());
            let closingNotifier;
            try {
                closingNotifier = innerFrom(closingSelector());
            }
            catch (err) {
                handleError(err);
                return;
            }
            closingNotifier.subscribe(closingSubscriber = createOperatorSubscriber(subscriber, openWindow, openWindow, handleError));
        };
        openWindow();
        source.subscribe(createOperatorSubscriber(subscriber, (value) => window2.next(value), () => {
            window2.complete();
            subscriber.complete();
        }, handleError, () => {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            window2 = null;
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/withLatestFrom.js
function withLatestFrom(...inputs) {
    const project = popResultSelector(inputs);
    return operate((source, subscriber) => {
        const len = inputs.length;
        const otherValues = new Array(len);
        let hasValue = inputs.map(() => false);
        let ready = false;
        for (let i = 0; i < len; i++) {
            innerFrom(inputs[i]).subscribe(createOperatorSubscriber(subscriber, (value) => {
                otherValues[i] = value;
                if (!ready && !hasValue[i]) {
                    hasValue[i] = true;
                    (ready = hasValue.every(identity)) && (hasValue = null);
                }
            }, noop));
        }
        source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            if (ready) {
                const values = [value, ...otherValues];
                subscriber.next(project ? project(...values) : values);
            }
        }));
    });
}
// node_modules/rxjs/dist/esm/internal/operators/zipAll.js
function zipAll(project) {
    return joinAllInternals(zip, project);
}
// node_modules/rxjs/dist/esm/internal/operators/zip.js
function zip2(...sources) {
    return operate((source, subscriber) => {
        zip(source, ...sources).subscribe(subscriber);
    });
}
// node_modules/rxjs/dist/esm/internal/operators/zipWith.js
function zipWith(...otherInputs) {
    return zip2(...otherInputs);
}
// node_modules/rxjs/dist/esm/internal/util/not.js
function not(pred, thisArg) {
    return (value, index) => !pred.call(thisArg, value, index);
}
export { refCount, ConnectableObservable, BehaviorSubject, AsyncSubject, asyncScheduler, async, EmptyError, ArgumentOutOfRangeError, NotFoundError, SequenceError, TimeoutError, timeout, mapOneOrManyArgs, argsArgArrayOrObject, createObject, combineLatest, mergeMap, mergeAll, concatAll, concat, timer, interval, argsOrArgArray, onErrorResumeNext, not, filter, race, zip, audit, auditTime, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, catchError, reduce, toArray, combineLatestAll, combineAll, combineLatest2, combineLatestWith, concatMap, concatMapTo, concat2, concatWith, connect, count, debounce, debounceTime, defaultIfEmpty, take, ignoreElements, mapTo, delayWhen, delay, dematerialize, distinct, distinctUntilChanged, distinctUntilKeyChanged, throwIfEmpty, elementAt, endWith, every, exhaustMap, exhaustAll, exhaust, expand, finalize, find, findIndex, first, groupBy, isEmpty, takeLast, last, materialize, max, flatMap, mergeMapTo, mergeScan, merge, mergeWith, min, multicast, onErrorResumeNextWith, onErrorResumeNext2, pairwise, pluck, publish, publishBehavior, publishLast, publishReplay, raceWith, repeat, repeatWhen, retry, retryWhen, sample, sampleTime, scan, sequenceEqual, share, shareReplay, single, skip, skipLast, skipUntil, skipWhile, startWith, switchMap, switchAll, switchMapTo, switchScan, takeUntil, takeWhile, tap, throttle, throttleTime, timeInterval, timeoutWith, timestamp, window, windowCount, windowTime, windowToggle, windowWhen, withLatestFrom, zipAll, zip2, zipWith };
//# sourceMappingURL=chunk-5L7HXVNT.js.map
