function v(t) { let e = t(i => { Error.call(i), i.stack = new Error().stack; }); return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e; }
var m = v(t => function (e) {
    t(this), this.message = e ? `${e.length} errors occurred during unsubscription:
${e.map((i, n) => `${n + 1}) ${i.toString()}`).join(`
  `)}` : "", this.name = "UnsubscriptionError", this.errors = e;
});
function c(t) { return typeof t == "function"; }
function _(t, r) { if (t) {
    let e = t.indexOf(r);
    0 <= e && t.splice(e, 1);
} }
var l = class t {
    constructor(r) { this.initialTeardown = r, this.closed = !1, this._parentage = null, this._finalizers = null; }
    unsubscribe() { let r; if (!this.closed) {
        this.closed = !0;
        let { _parentage: e } = this;
        if (e)
            if (this._parentage = null, Array.isArray(e))
                for (let o of e)
                    o.remove(this);
            else
                e.remove(this);
        let { initialTeardown: i } = this;
        if (c(i))
            try {
                i();
            }
            catch (o) {
                r = o instanceof m ? o.errors : [o];
            }
        let { _finalizers: n } = this;
        if (n) {
            this._finalizers = null;
            for (let o of n)
                try {
                    A(o);
                }
                catch (s) {
                    r = r ?? [], s instanceof m ? r = [...r, ...s.errors] : r.push(s);
                }
        }
        if (r)
            throw new m(r);
    } }
    add(r) { var e; if (r && r !== this)
        if (this.closed)
            A(r);
        else {
            if (r instanceof t) {
                if (r.closed || r._hasParent(this))
                    return;
                r._addParent(this);
            }
            (this._finalizers = (e = this._finalizers) !== null && e !== void 0 ? e : []).push(r);
        } }
    _hasParent(r) { let { _parentage: e } = this; return e === r || Array.isArray(e) && e.includes(r); }
    _addParent(r) { let { _parentage: e } = this; this._parentage = Array.isArray(e) ? (e.push(r), e) : e ? [e, r] : r; }
    _removeParent(r) { let { _parentage: e } = this; e === r ? this._parentage = null : Array.isArray(e) && _(e, r); }
    remove(r) { let { _finalizers: e } = this; e && _(e, r), r instanceof t && r._removeParent(this); }
};
l.EMPTY = (() => { let t = new l; return t.closed = !0, t; })();
var Q = l.EMPTY;
function b(t) { return t instanceof l || t && "closed" in t && c(t.remove) && c(t.add) && c(t.unsubscribe); }
function A(t) { c(t) ? t() : t.unsubscribe(); }
var u = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: !1, useDeprecatedNextContext: !1 };
function y() { }
var a = { setTimeout(t, r, ...e) { let { delegate: i } = a; return i?.setTimeout ? i.setTimeout(t, r, ...e) : setTimeout(t, r, ...e); }, clearTimeout(t) { let { delegate: r } = a; return (r?.clearTimeout || clearTimeout)(t); }, delegate: void 0 };
function F(t) { a.setTimeout(() => { let { onUnhandledError: r } = u; if (r)
    r(t);
else
    throw t; }); }
var w = E("C", void 0, void 0);
function U(t) { return E("E", void 0, t); }
function I(t) { return E("N", t, void 0); }
function E(t, r, e) { return { kind: t, value: r, error: e }; }
var p = null;
function z(t) { if (u.useDeprecatedSynchronousErrorHandling) {
    let r = !p;
    if (r && (p = { errorThrown: !1, error: null }), t(), r) {
        let { errorThrown: e, error: i } = p;
        if (p = null, e)
            throw i;
    }
}
else
    t(); }
function C(t) { u.useDeprecatedSynchronousErrorHandling && p && (p.errorThrown = !0, p.error = t); }
var h = class extends l {
    constructor(r) { super(), this.isStopped = !1, r ? (this.destination = r, b(r) && r.add(this)) : this.destination = O; }
    static create(r, e, i) { return new f(r, e, i); }
    next(r) { this.isStopped ? g(I(r), this) : this._next(r); }
    error(r) { this.isStopped ? g(U(r), this) : (this.isStopped = !0, this._error(r)); }
    complete() { this.isStopped ? g(w, this) : (this.isStopped = !0, this._complete()); }
    unsubscribe() { this.closed || (this.isStopped = !0, super.unsubscribe(), this.destination = null); }
    _next(r) { this.destination.next(r); }
    _error(r) { try {
        this.destination.error(r);
    }
    finally {
        this.unsubscribe();
    } }
    _complete() { try {
        this.destination.complete();
    }
    finally {
        this.unsubscribe();
    } }
}, Y = Function.prototype.bind;
function S(t, r) { return Y.call(t, r); }
var T = class {
    constructor(r) { this.partialObserver = r; }
    next(r) { let { partialObserver: e } = this; if (e.next)
        try {
            e.next(r);
        }
        catch (i) {
            x(i);
        } }
    error(r) { let { partialObserver: e } = this; if (e.error)
        try {
            e.error(r);
        }
        catch (i) {
            x(i);
        }
    else
        x(r); }
    complete() { let { partialObserver: r } = this; if (r.complete)
        try {
            r.complete();
        }
        catch (e) {
            x(e);
        } }
}, f = class extends h {
    constructor(r, e, i) { super(); let n; if (c(r) || !r)
        n = { next: r ?? void 0, error: e ?? void 0, complete: i ?? void 0 };
    else {
        let o;
        this && u.useDeprecatedNextContext ? (o = Object.create(r), o.unsubscribe = () => this.unsubscribe(), n = { next: r.next && S(r.next, o), error: r.error && S(r.error, o), complete: r.complete && S(r.complete, o) }) : n = r;
    } this.destination = new T(n); }
};
function x(t) { u.useDeprecatedSynchronousErrorHandling ? C(t) : F(t); }
function $(t) { throw t; }
function g(t, r) { let { onStoppedNotification: e } = u; e && a.setTimeout(() => e(t, r)); }
var O = { closed: !0, next: y, error: $, complete: y };
var D = typeof Symbol == "function" && Symbol.observable || "@@observable";
function M(t) { return t; }
function yr(...t) { return P(t); }
function P(t) { return t.length === 0 ? M : t.length === 1 ? t[0] : function (e) { return t.reduce((i, n) => n(i), e); }; }
var wr = (() => { class t {
    constructor(e) { e && (this._subscribe = e); }
    lift(e) { let i = new t; return i.source = this, i.operator = e, i; }
    subscribe(e, i, n) { let o = B(e) ? e : new f(e, i, n); return z(() => { let { operator: s, source: d } = this; o.add(s ? s.call(o, d) : d ? this._subscribe(o) : this._trySubscribe(o)); }), o; }
    _trySubscribe(e) { try {
        return this._subscribe(e);
    }
    catch (i) {
        e.error(i);
    } }
    forEach(e, i) { return i = R(i), new i((n, o) => { let s = new f({ next: d => { try {
            e(d);
        }
        catch (H) {
            o(H), s.unsubscribe();
        } }, error: o, complete: n }); this.subscribe(s); }); }
    _subscribe(e) { var i; return (i = this.source) === null || i === void 0 ? void 0 : i.subscribe(e); }
    [D]() { return this; }
    pipe(...e) { return P(e)(this); }
    toPromise(e) { return e = R(e), new e((i, n) => { let o; this.subscribe(s => o = s, s => n(s), () => i(o)); }); }
} return t.create = r => new t(r), t; })();
function R(t) { var r; return (r = t ?? u.Promise) !== null && r !== void 0 ? r : Promise; }
function j(t) { return t && c(t.next) && c(t.error) && c(t.complete); }
function B(t) { return t && t instanceof h || j(t) && b(t); }
export { c as a, v as b, m as c, _ as d, l as e, Q as f, u as g, a as h, F as i, y as j, w as k, U as l, I as m, z as n, h as o, f as p, D as q, M as r, yr as s, wr as t };
