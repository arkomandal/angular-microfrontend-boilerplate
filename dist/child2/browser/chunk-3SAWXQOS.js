import { b as c, d, e as b, f as l, n as i, t as u } from "@nf-internal/chunk-4TJQB64Q";
var a = c(t => function () { t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"; });
var v = (() => { class t extends u {
    constructor() { super(), this.closed = !1, this.currentObservers = null, this.observers = [], this.isStopped = !1, this.hasError = !1, this.thrownError = null; }
    lift(r) { let e = new n(this, this); return e.operator = r, e; }
    _throwIfClosed() { if (this.closed)
        throw new a; }
    next(r) { i(() => { if (this._throwIfClosed(), !this.isStopped) {
        this.currentObservers || (this.currentObservers = Array.from(this.observers));
        for (let e of this.currentObservers)
            e.next(r);
    } }); }
    error(r) { i(() => { if (this._throwIfClosed(), !this.isStopped) {
        this.hasError = this.isStopped = !0, this.thrownError = r;
        let { observers: e } = this;
        for (; e.length;)
            e.shift().error(r);
    } }); }
    complete() { i(() => { if (this._throwIfClosed(), !this.isStopped) {
        this.isStopped = !0;
        let { observers: r } = this;
        for (; r.length;)
            r.shift().complete();
    } }); }
    unsubscribe() { this.isStopped = this.closed = !0, this.observers = this.currentObservers = null; }
    get observed() { var r; return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0; }
    _trySubscribe(r) { return this._throwIfClosed(), super._trySubscribe(r); }
    _subscribe(r) { return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r); }
    _innerSubscribe(r) { let { hasError: e, isStopped: h, observers: o } = this; return e || h ? l : (this.currentObservers = null, o.push(r), new b(() => { this.currentObservers = null, d(o, r); })); }
    _checkFinalizedStatuses(r) { let { hasError: e, thrownError: h, isStopped: o } = this; e ? r.error(h) : o && r.complete(); }
    asObservable() { let r = new u; return r.source = this, r; }
} return t.create = (s, r) => new n(s, r), t; })(), n = class extends v {
    constructor(s, r) { super(), this.destination = s, this.source = r; }
    next(s) { var r, e; (e = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || e === void 0 || e.call(r, s); }
    error(s) { var r, e; (e = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || e === void 0 || e.call(r, s); }
    complete() { var s, r; (r = (s = this.destination) === null || s === void 0 ? void 0 : s.complete) === null || r === void 0 || r.call(s); }
    _subscribe(s) { var r, e; return (e = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(s)) !== null && e !== void 0 ? e : l; }
};
var p = { now() { return (p.delegate || Date).now(); }, delegate: void 0 };
export { a, v as b, n as c, p as d };
