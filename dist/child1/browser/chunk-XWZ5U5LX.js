import { b as h } from "@nf-internal/chunk-ICXNGLPY";
import { a as A, b as O, c as _, d as g, e as N, f as P, g as T, h as R, i as C, j as c } from "@nf-internal/chunk-5VUD2K26";
import { a as S } from "@nf-internal/chunk-BUL5WOS2";
import { d as k } from "@nf-internal/chunk-3SAWXQOS";
import { a as l, d as I, e as E, t as s } from "@nf-internal/chunk-4TJQB64Q";
var f = class t {
    constructor(e, o = t.now) { this.schedulerActionCtor = e, this.now = o; }
    schedule(e, o = 0, r) { return new this.schedulerActionCtor(this, e).schedule(r, o); }
};
f.now = k.now;
var b = new s(t => t.complete());
function ee(t) { return t ? J(t) : b; }
function J(t) { return new s(e => t.schedule(() => e.complete())); }
function u(t, e, o, r = 0, i = !1) { let n = e.schedule(function () { o(), i ? t.add(this.schedule(null, r)) : this.unsubscribe(); }, r); if (t.add(n), !i)
    return n; }
function p(t, e = 0) { return h((o, r) => { o.subscribe(S(r, i => u(r, t, () => r.next(i), e), () => u(r, t, () => r.complete(), e), i => u(r, t, () => r.error(i), e))); }); }
function a(t, e = 0) { return h((o, r) => { r.add(t.schedule(() => o.subscribe(r), e)); }); }
function F(t, e) { return c(t).pipe(a(e), p(e)); }
function L(t, e) { return c(t).pipe(a(e), p(e)); }
function M(t, e) { return new s(o => { let r = 0; return e.schedule(function () { r === t.length ? o.complete() : (o.next(t[r++]), o.closed || this.schedule()); }); }); }
function q(t, e) { return new s(o => { let r; return u(o, e, () => { r = t[P](), u(o, e, () => { let i, n; try {
    ({ value: i, done: n } = r.next());
}
catch (m) {
    o.error(m);
    return;
} n ? o.complete() : o.next(i); }, 0, !0); }), () => l(r?.return) && r.return(); }); }
function v(t, e) { if (!t)
    throw new Error("Iterable cannot be null"); return new s(o => { u(o, e, () => { let r = t[Symbol.asyncIterator](); u(o, e, () => { r.next().then(i => { i.done ? o.complete() : o.next(i.value); }); }, 0, !0); }); }); }
function V(t, e) { return v(R(t), e); }
function Y(t, e) { if (t != null) {
    if (_(t))
        return F(t, e);
    if (A(t))
        return M(t, e);
    if (O(t))
        return L(t, e);
    if (g(t))
        return v(t, e);
    if (T(t))
        return q(t, e);
    if (C(t))
        return V(t, e);
} throw N(t); }
function G(t, e) { return e ? Y(t, e) : c(t); }
function U(t) { return t && l(t.schedule); }
function y(t) { return t[t.length - 1]; }
function Ze(t) { return l(y(t)) ? t.pop() : void 0; }
function X(t) { return U(y(t)) ? t.pop() : void 0; }
function Ke(t, e) { return typeof y(t) == "number" ? t.pop() : e; }
function $(...t) { let e = X(t); return G(t, e); }
function j(t, e) { let o = l(t) ? t : () => t, r = i => i.error(o()); return new s(e ? i => e.schedule(r, 0, i) : r); }
var Q = (function (t) { return t.NEXT = "N", t.ERROR = "E", t.COMPLETE = "C", t; })(Q || {}), x = class t {
    constructor(e, o, r) { this.kind = e, this.value = o, this.error = r, this.hasValue = e === "N"; }
    observe(e) { return W(this, e); }
    do(e, o, r) { let { kind: i, value: n, error: m } = this; return i === "N" ? e?.(n) : i === "E" ? o?.(m) : r?.(); }
    accept(e, o, r) { var i; return l((i = e) === null || i === void 0 ? void 0 : i.next) ? this.observe(e) : this.do(e, o, r); }
    toObservable() { let { kind: e, value: o, error: r } = this, i = e === "N" ? $(o) : e === "E" ? j(() => r) : e === "C" ? b : 0; if (!i)
        throw new TypeError(`Unexpected notification kind ${e}`); return i; }
    static createNext(e) { return new t("N", e); }
    static createError(e) { return new t("E", void 0, e); }
    static createComplete() { return t.completeNotification; }
};
x.completeNotification = new x("C");
function W(t, e) { var o, r, i; let { kind: n, value: m, error: D } = t; if (typeof n != "string")
    throw new TypeError('Invalid notification, missing "kind"'); n === "N" ? (o = e.next) === null || o === void 0 || o.call(e, m) : n === "E" ? (r = e.error) === null || r === void 0 || r.call(e, D) : (i = e.complete) === null || i === void 0 || i.call(e); }
var d = { setInterval(t, e, ...o) { let { delegate: r } = d; return r?.setInterval ? r.setInterval(t, e, ...o) : setInterval(t, e, ...o); }, clearInterval(t) { let { delegate: e } = d; return (e?.clearInterval || clearInterval)(t); }, delegate: void 0 };
var w = class extends E {
    constructor(e, o) { super(); }
    schedule(e, o = 0) { return this; }
};
var z = class extends w {
    constructor(e, o) { super(e, o), this.scheduler = e, this.work = o, this.pending = !1; }
    schedule(e, o = 0) { var r; if (this.closed)
        return this; this.state = e; let i = this.id, n = this.scheduler; return i != null && (this.id = this.recycleAsyncId(n, i, o)), this.pending = !0, this.delay = o, this.id = (r = this.id) !== null && r !== void 0 ? r : this.requestAsyncId(n, this.id, o), this; }
    requestAsyncId(e, o, r = 0) { return d.setInterval(e.flush.bind(e, this), r); }
    recycleAsyncId(e, o, r = 0) { if (r != null && this.delay === r && this.pending === !1)
        return o; o != null && d.clearInterval(o); }
    execute(e, o) { if (this.closed)
        return new Error("executing a cancelled action"); this.pending = !1; let r = this._execute(e, o); if (r)
        return r; this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null)); }
    _execute(e, o) { let r = !1, i; try {
        this.work(e);
    }
    catch (n) {
        r = !0, i = n || new Error("Scheduled action threw falsy error");
    } if (r)
        return this.unsubscribe(), i; }
    unsubscribe() { if (!this.closed) {
        let { id: e, scheduler: o } = this, { actions: r } = o;
        this.work = this.state = this.scheduler = null, this.pending = !1, I(r, this), e != null && (this.id = this.recycleAsyncId(o, e, null)), this.delay = null, super.unsubscribe();
    } }
};
var B = class extends f {
    constructor(e, o = f.now) { super(e, o), this.actions = [], this._active = !1; }
    flush(e) { let { actions: o } = this; if (this._active) {
        o.push(e);
        return;
    } let r; this._active = !0; do
        if (r = e.execute(e.state, e.delay))
            break;
    while (e = o.shift()); if (this._active = !1, r) {
        for (; e = o.shift();)
            e.unsubscribe();
        throw r;
    } }
};
export { d as a, z as b, f as c, B as d, b as e, ee as f, U as g, Ze as h, X as i, Ke as j, u as k, p as l, a as m, q as n, Y as o, G as p, $ as q, j as r, Q as s, x as t, W as u };
