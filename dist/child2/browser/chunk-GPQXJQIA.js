import { AsyncAction, AsyncScheduler } from "@nf-internal/chunk-SFNMW4FL";
import { Subscription } from "@nf-internal/chunk-PA6ZQ4YT";
// node_modules/rxjs/dist/esm/internal/scheduler/VirtualTimeScheduler.js
var VirtualTimeScheduler = class extends AsyncScheduler {
    constructor(schedulerActionCtor = VirtualAction, maxFrames = Infinity) {
        super(schedulerActionCtor, () => this.frame);
        this.maxFrames = maxFrames;
        this.frame = 0;
        this.index = -1;
    }
    flush() {
        const { actions, maxFrames } = this;
        let error;
        let action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
};
VirtualTimeScheduler.frameTimeFactor = 10;
var VirtualAction = class _VirtualAction extends AsyncAction {
    constructor(scheduler, work, index = scheduler.index += 1) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.index = index;
        this.active = true;
        this.index = scheduler.index = index;
    }
    schedule(state, delay = 0) {
        if (Number.isFinite(delay)) {
            if (!this.id) {
                return super.schedule(state, delay);
            }
            this.active = false;
            const action = new _VirtualAction(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay);
        }
        else {
            return Subscription.EMPTY;
        }
    }
    requestAsyncId(scheduler, id, delay = 0) {
        this.delay = scheduler.frame + delay;
        const { actions } = scheduler;
        actions.push(this);
        actions.sort(_VirtualAction.sortActions);
        return 1;
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        return void 0;
    }
    _execute(state, delay) {
        if (this.active === true) {
            return super._execute(state, delay);
        }
    }
    static sortActions(a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    }
};
// node_modules/rxjs/dist/esm/internal/scheduler/performanceTimestampProvider.js
var performanceTimestampProvider = {
    now() {
        return (performanceTimestampProvider.delegate || performance).now();
    },
    delegate: void 0
};
// node_modules/rxjs/dist/esm/internal/scheduler/animationFrameProvider.js
var animationFrameProvider = {
    schedule(callback) {
        let request = requestAnimationFrame;
        let cancel = cancelAnimationFrame;
        const { delegate } = animationFrameProvider;
        if (delegate) {
            request = delegate.requestAnimationFrame;
            cancel = delegate.cancelAnimationFrame;
        }
        const handle = request((timestamp) => {
            cancel = void 0;
            callback(timestamp);
        });
        return new Subscription(() => cancel === null || cancel === void 0 ? void 0 : cancel(handle));
    },
    requestAnimationFrame(...args) {
        const { delegate } = animationFrameProvider;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame)(...args);
    },
    cancelAnimationFrame(...args) {
        const { delegate } = animationFrameProvider;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame)(...args);
    },
    delegate: void 0
};
// node_modules/rxjs/dist/esm/internal/util/Immediate.js
var nextHandle = 1;
var resolved;
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
var Immediate = {
    setImmediate(cb) {
        const handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) {
            resolved = Promise.resolve();
        }
        resolved.then(() => findAndClearHandle(handle) && cb());
        return handle;
    },
    clearImmediate(handle) {
        findAndClearHandle(handle);
    }
};
// node_modules/rxjs/dist/esm/internal/scheduler/immediateProvider.js
var { setImmediate, clearImmediate } = Immediate;
var immediateProvider = {
    setImmediate(...args) {
        const { delegate } = immediateProvider;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate)(...args);
    },
    clearImmediate(handle) {
        const { delegate } = immediateProvider;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
    },
    delegate: void 0
};
export { performanceTimestampProvider, animationFrameProvider, immediateProvider, VirtualTimeScheduler, VirtualAction };
//# sourceMappingURL=chunk-GPQXJQIA.js.map
