import { o as h } from "@nf-internal/chunk-4TJQB64Q";
function a(n, r, s, i, c) { return new u(n, r, s, i, c); }
var u = class extends h {
    constructor(r, s, i, c, o, b) { super(r), this.onFinalize = o, this.shouldUnsubscribe = b, this._next = s ? function (e) { try {
        s(e);
    }
    catch (t) {
        r.error(t);
    } } : super._next, this._error = c ? function (e) { try {
        c(e);
    }
    catch (t) {
        r.error(t);
    }
    finally {
        this.unsubscribe();
    } } : super._error, this._complete = i ? function () { try {
        i();
    }
    catch (e) {
        r.error(e);
    }
    finally {
        this.unsubscribe();
    } } : super._complete; }
    unsubscribe() { var r; if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        let { closed: s } = this;
        super.unsubscribe(), !s && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
    } }
};
export { a, u as b };
