import { a as j } from "@nf-internal/chunk-SOEXL22L";
import { b as Ft, d as _t, e as L, g as It, h as U, i as A, j as At, k as C, p as N, q as Ct, t as et, u as jt } from "@nf-internal/chunk-XWZ5U5LX";
import { a as Ot, b as f } from "@nf-internal/chunk-ICXNGLPY";
import { j as s } from "@nf-internal/chunk-5VUD2K26";
import { a as u, b as B } from "@nf-internal/chunk-BUL5WOS2";
import { a as tt } from "@nf-internal/chunk-AMOZ2BZU";
import { b as S, d as Et } from "@nf-internal/chunk-3SAWXQOS";
import { a as E, b as V, d as W, e as M, j as y, p as st, r as v, s as X, t as _ } from "@nf-internal/chunk-4TJQB64Q";
function Rt() { return f((t, e) => { let r = null; t._refCount++; let o = u(e, void 0, void 0, void 0, () => { if (!t || t._refCount <= 0 || 0 < --t._refCount) {
    r = null;
    return;
} let n = t._connection, i = r; r = null, n && (!i || n === i) && n.unsubscribe(), e.unsubscribe(); }); t.subscribe(o), o.closed || (r = t.connect()); }); }
var D = class extends _ {
    constructor(e, r) { super(), this.source = e, this.subjectFactory = r, this._subject = null, this._refCount = 0, this._connection = null, Ot(e) && (this.lift = e.lift); }
    _subscribe(e) { return this.getSubject().subscribe(e); }
    getSubject() { let e = this._subject; return (!e || e.isStopped) && (this._subject = this.subjectFactory()), this._subject; }
    _teardown() { this._refCount = 0; let { _connection: e } = this; this._subject = this._connection = null, e?.unsubscribe(); }
    connect() { let e = this._connection; if (!e) {
        e = this._connection = new M;
        let r = this.getSubject();
        e.add(this.source.subscribe(u(r, void 0, () => { this._teardown(), r.complete(); }, o => { this._teardown(), r.error(o); }, () => this._teardown()))), e.closed && (this._connection = null, e = M.EMPTY);
    } return e; }
    refCount() { return Rt()(this); }
};
var rt = class extends S {
    constructor(e) { super(), this._value = e; }
    get value() { return this.getValue(); }
    _subscribe(e) { let r = super._subscribe(e); return !r.closed && e.next(this._value), r; }
    getValue() { let { hasError: e, thrownError: r, _value: o } = this; if (e)
        throw r; return this._throwIfClosed(), o; }
    next(e) { super.next(this._value = e); }
};
var ot = class extends S {
    constructor() { super(...arguments), this._value = null, this._hasValue = !1, this._isComplete = !1; }
    _checkFinalizedStatuses(e) { let { hasError: r, _hasValue: o, _value: n, thrownError: i, isStopped: m, _isComplete: l } = this; r ? e.error(i) : (m || l) && (o && e.next(n), e.complete()); }
    next(e) { this.isStopped || (this._value = e, this._hasValue = !0); }
    complete() { let { _hasValue: e, _value: r, _isComplete: o } = this; o || (this._isComplete = !0, e && super.next(r), super.complete()); }
};
var F = new _t(Ft), nt = F;
var P = V(t => function () { t(this), this.name = "EmptyError", this.message = "no elements in sequence"; });
var at = V(t => function () { t(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range"; });
var Tt = V(t => function (r) { t(this), this.name = "NotFoundError", this.message = r; });
var Mt = V(t => function (r) { t(this), this.name = "SequenceError", this.message = r; });
function $(t) { return t instanceof Date && !isNaN(t); }
var oe = V(t => function (r = null) { t(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = r; });
function Vt(t, e) { let { first: r, each: o, with: n = ne, scheduler: i = e ?? F, meta: m = null } = $(t) ? { first: t } : typeof t == "number" ? { each: t } : t; if (r == null && o == null)
    throw new TypeError("No timeout provided."); return f((l, p) => { let c, a, h = null, w = 0, g = b => { a = C(p, i, () => { try {
    c.unsubscribe(), s(n({ meta: m, lastValue: h, seen: w })).subscribe(p);
}
catch (d) {
    p.error(d);
} }, b); }; c = l.subscribe(u(p, b => { a?.unsubscribe(), w++, p.next(h = b), o > 0 && g(o); }, void 0, void 0, () => { a?.closed || a?.unsubscribe(), h = null; })), !w && g(r != null ? typeof r == "number" ? r : +r - i.now() : o); }); }
function ne(t) { throw new oe(t); }
var { isArray: ie } = Array, { getPrototypeOf: me, prototype: pe, keys: fe } = Object;
function Wt(t) { if (t.length === 1) {
    let e = t[0];
    if (ie(e))
        return { args: e, keys: null };
    if (ue(e)) {
        let r = fe(e);
        return { args: r.map(o => e[o]), keys: r };
    }
} return { args: t, keys: null }; }
function ue(t) { return t && typeof t == "object" && me(t) === pe; }
var { isArray: le } = Array;
function ce(t, e) { return le(e) ? t(...e) : t(e); }
function Z(t) { return j(e => ce(t, e)); }
function kt(t, e) { return t.reduce((r, o, n) => (r[o] = e[n], r), {}); }
function Lt(...t) { let e = A(t), r = U(t), { args: o, keys: n } = Wt(t); if (o.length === 0)
    return N([], e); let i = new _(dt(o, e, n ? m => kt(n, m) : v)); return r ? i.pipe(Z(r)) : i; }
function dt(t, e, r = v) { return o => { Nt(e, () => { let { length: n } = t, i = new Array(n), m = n, l = n; for (let p = 0; p < n; p++)
    Nt(e, () => { let c = N(t[p], e), a = !1; c.subscribe(u(o, h => { i[p] = h, a || (a = !0, l--), l || o.next(r(i.slice())); }, () => { --m || o.complete(); })); }, o); }, o); }; }
function Nt(t, e, r) { t ? C(r, t, e) : e(); }
function H(t, e, r, o, n, i, m, l) { let p = [], c = 0, a = 0, h = !1, w = () => { h && !p.length && !c && e.complete(); }, g = d => c < o ? b(d) : p.push(d), b = d => { i && e.next(d), c++; let x = !1; s(r(d, a++)).subscribe(u(e, O => { n?.(O), i ? g(O) : e.next(O); }, () => { x = !0; }, void 0, () => { if (x)
    try {
        for (c--; p.length && c < o;) {
            let O = p.shift();
            m ? C(e, m, () => b(O)) : b(O);
        }
        w();
    }
    catch (O) {
        e.error(O);
    } })); }; return t.subscribe(u(e, g, () => { h = !0, w(); })), () => { l?.(); }; }
function I(t, e, r = 1 / 0) { return E(e) ? I((o, n) => j((i, m) => e(o, i, n, m))(s(t(o, n))), r) : (typeof e == "number" && (r = e), f((o, n) => H(o, n, t, r))); }
function it(t = 1 / 0) { return I(v, t); }
function mt() { return it(1); }
function K(...t) { return mt()(N(t, A(t))); }
function R(t = 0, e, r = nt) { let o = -1; return e != null && (It(e) ? r = e : o = e), new _(n => { let i = $(t) ? +t - r.now() : t; i < 0 && (i = 0); let m = 0; return r.schedule(function () { n.closed || (n.next(m++), 0 <= o ? this.schedule(void 0, o) : n.complete()); }, i); }); }
function Ut(t = 0, e = F) { return t < 0 && (t = 0), R(t, t, e); }
var { isArray: se } = Array;
function k(t) { return t.length === 1 && se(t[0]) ? t[0] : t; }
function Dt(...t) { let e = k(t); return new _(r => { let o = 0, n = () => { if (o < e.length) {
    let i;
    try {
        i = s(e[o++]);
    }
    catch {
        n();
        return;
    }
    let m = new B(r, void 0, y, y);
    i.subscribe(m), m.add(n);
}
else
    r.complete(); }; n(); }); }
function q(t, e) { return f((r, o) => { let n = 0; r.subscribe(u(o, i => t.call(e, i, n++) && o.next(i))); }); }
function Br(...t) { return t = k(t), t.length === 1 ? s(t[0]) : new _(bt(t)); }
function bt(t) { return e => { let r = []; for (let o = 0; r && !e.closed && o < t.length; o++)
    r.push(s(t[o]).subscribe(u(e, n => { if (r) {
        for (let i = 0; i < r.length; i++)
            i !== o && r[i].unsubscribe();
        r = null;
    } e.next(n); }))); }; }
function pt(...t) { let e = U(t), r = k(t); return r.length ? new _(o => { let n = r.map(() => []), i = r.map(() => !1); o.add(() => { n = i = null; }); for (let m = 0; !o.closed && m < r.length; m++)
    s(r[m]).subscribe(u(o, l => { if (n[m].push(l), n.every(p => p.length)) {
        let p = n.map(c => c.shift());
        o.next(e ? e(...p) : p), n.some((c, a) => !c.length && i[a]) && o.complete();
    } }, () => { i[m] = !0, !n[m].length && o.complete(); })); return () => { n = i = null; }; }) : L; }
function Pt(t) { return f((e, r) => { let o = !1, n = null, i = null, m = !1, l = () => { if (i?.unsubscribe(), i = null, o) {
    o = !1;
    let c = n;
    n = null, r.next(c);
} m && r.complete(); }, p = () => { i = null, m && r.complete(); }; e.subscribe(u(r, c => { o = !0, n = c, i || s(t(c)).subscribe(i = u(r, l, p)); }, () => { m = !0, (!o || !i || i.closed) && r.complete(); })); }); }
function ho(t, e = F) { return Pt(() => R(t, e)); }
function go(t) { return f((e, r) => { let o = []; return e.subscribe(u(r, n => o.push(n), () => { r.next(o), r.complete(); })), s(t).subscribe(u(r, () => { let n = o; o = [], r.next(n); }, y)), () => { o = null; }; }); }
function Io(t, e = null) { return e = e ?? t, f((r, o) => { let n = [], i = 0; r.subscribe(u(o, m => { let l = null; i++ % e === 0 && n.push([]); for (let p of n)
    p.push(m), t <= p.length && (l = l ?? [], l.push(p)); if (l)
    for (let p of l)
        W(n, p), o.next(p); }, () => { for (let m of n)
    o.next(m); o.complete(); }, void 0, () => { n = null; })); }); }
function ko(t, ...e) { var r, o; let n = (r = A(e)) !== null && r !== void 0 ? r : F, i = (o = e[0]) !== null && o !== void 0 ? o : null, m = e[1] || 1 / 0; return f((l, p) => { let c = [], a = !1, h = b => { let { buffer: d, subs: x } = b; x.unsubscribe(), W(c, b), p.next(d), a && w(); }, w = () => { if (c) {
    let b = new M;
    p.add(b);
    let x = { buffer: [], subs: b };
    c.push(x), C(b, n, () => h(x), t);
} }; i !== null && i >= 0 ? C(p, n, w, i, !0) : a = !0, w(); let g = u(p, b => { let d = c.slice(); for (let x of d) {
    let { buffer: O } = x;
    O.push(b), m <= O.length && h(x);
} }, () => { for (; c?.length;)
    p.next(c.shift().buffer); g?.unsubscribe(), p.complete(), p.unsubscribe(); }, void 0, () => c = null); l.subscribe(g); }); }
function Ko(t, e) { return f((r, o) => { let n = []; s(t).subscribe(u(o, i => { let m = []; n.push(m); let l = new M, p = () => { W(n, m), o.next(m), l.unsubscribe(); }; l.add(s(e(i)).subscribe(u(o, p, y))); }, y)), r.subscribe(u(o, i => { for (let m of n)
    m.push(i); }, () => { for (; n.length > 0;)
    o.next(n.shift()); o.complete(); })); }); }
function Jo(t) { return f((e, r) => { let o = null, n = null, i = () => { n?.unsubscribe(); let m = o; o = [], m && r.next(m), s(t()).subscribe(n = u(r, i, y)); }; i(), e.subscribe(u(r, m => o?.push(m), () => { o && r.next(o), r.complete(); }, void 0, () => o = n = null)); }); }
function ae(t) { return f((e, r) => { let o = null, n = !1, i; o = e.subscribe(u(r, void 0, void 0, m => { i = s(t(m, ae(t)(e))), o ? (o.unsubscribe(), o = null, i.subscribe(r)) : n = !0; })), n && (o.unsubscribe(), o = null, i.subscribe(r)); }); }
function ft(t, e, r, o, n) { return (i, m) => { let l = r, p = e, c = 0; i.subscribe(u(m, a => { let h = c++; p = l ? t(p, a, h) : (l = !0, a), o && m.next(p); }, n && (() => { l && m.next(p), m.complete(); }))); }; }
function z(t, e) { return f(ft(t, e, arguments.length >= 2, !1, !0)); }
var de = (t, e) => (t.push(e), t);
function qt() { return f((t, e) => { z(de, [])(t).subscribe(e); }); }
function ut(t, e) { return X(qt(), I(r => t(r)), e ? Z(e) : v); }
function zt(t) { return ut(Lt, t); }
var vn = zt;
function ht(...t) { let e = U(t); return e ? X(ht(...t), Z(e)) : f((r, o) => { dt([r, ...k(t)])(o); }); }
function Rn(...t) { return ht(...t); }
function xt(t, e) { return E(e) ? I(t, e, 1) : I(t, 1); }
function Ln(t, e) { return E(e) ? xt(() => t, e) : xt(() => t); }
function Kt(...t) { let e = A(t); return f((r, o) => { mt()(N([r, ...t], e)).subscribe(o); }); }
function Gn(...t) { return Kt(...t); }
function Yt(t) { return new _(e => t.subscribe(e)); }
var be = { connector: () => new S };
function lt(t, e = be) { let { connector: r } = e; return f((o, n) => { let i = r(); s(t(Yt(i))).subscribe(n), n.add(o.subscribe(i)); }); }
function ri(t) { return z((e, r, o) => !t || t(r, o) ? e + 1 : e, 0); }
function fi(t) { return f((e, r) => { let o = !1, n = null, i = null, m = () => { if (i?.unsubscribe(), i = null, o) {
    o = !1;
    let l = n;
    n = null, r.next(l);
} }; e.subscribe(u(r, l => { i?.unsubscribe(), o = !0, n = l, i = u(r, m, y), s(t(l)).subscribe(i); }, () => { m(), r.complete(); }, void 0, () => { n = i = null; })); }); }
function ai(t, e = F) { return f((r, o) => { let n = null, i = null, m = null, l = () => { if (n) {
    n.unsubscribe(), n = null;
    let c = i;
    i = null, o.next(c);
} }; function p() { let c = m + t, a = e.now(); if (a < c) {
    n = this.schedule(void 0, c - a), o.add(n);
    return;
} l(); } r.subscribe(u(o, c => { i = c, m = e.now(), n || (n = e.schedule(p, t), o.add(n)); }, () => { l(), o.complete(); }, void 0, () => { i = n = null; })); }); }
function J(t) { return f((e, r) => { let o = !1; e.subscribe(u(r, n => { o = !0, r.next(n); }, () => { o || r.next(t), r.complete(); })); }); }
function Y(t) { return t <= 0 ? () => L : f((e, r) => { let o = 0; e.subscribe(u(r, n => { ++o <= t && (r.next(n), t <= o && r.complete()); })); }); }
function Gt() { return f((t, e) => { t.subscribe(u(e, y)); }); }
function $t(t) { return j(() => t); }
function wt(t, e) { return e ? r => K(e.pipe(Y(1), Gt()), r.pipe(wt(t))) : I((r, o) => s(t(r, o)).pipe(Y(1), $t(r))); }
function Li(t, e = F) { let r = R(t, e); return wt(() => r); }
function zi() { return f((t, e) => { t.subscribe(u(e, r => jt(r, e))); }); }
function Hi(t, e) { return f((r, o) => { let n = new Set; r.subscribe(u(o, i => { let m = t ? t(i) : i; n.has(m) || (n.add(m), o.next(i)); })), e && s(e).subscribe(u(o, () => n.clear(), y)); }); }
function Zt(t, e = v) { return t = t ?? he, f((r, o) => { let n, i = !0; r.subscribe(u(o, m => { let l = e(m); (i || !t(n, l)) && (i = !1, n = l, o.next(m)); })); }); }
function he(t, e) { return t === e; }
function rm(t, e) { return Zt((r, o) => e ? e(r[t], o[t]) : r[t] === o[t]); }
function Q(t = xe) { return f((e, r) => { let o = !1; e.subscribe(u(r, n => { o = !0, r.next(n); }, () => o ? r.complete() : r.error(t()))); }); }
function xe() { return new P; }
function am(t, e) { if (t < 0)
    throw new at; let r = arguments.length >= 2; return o => o.pipe(q((n, i) => i === t), Y(1), r ? J(e) : Q(() => new at)); }
function xm(...t) { return e => K(e, Ct(...t)); }
function vm(t, e) { return f((r, o) => { let n = 0; r.subscribe(u(o, i => { t.call(e, i, n++, r) || (o.next(!1), o.complete()); }, () => { o.next(!0), o.complete(); })); }); }
function yt(t, e) { return e ? r => r.pipe(yt((o, n) => s(t(o, n)).pipe(j((i, m) => e(o, i, n, m))))) : f((r, o) => { let n = 0, i = null, m = !1; r.subscribe(u(o, l => { i || (i = u(o, void 0, () => { i = null, m && o.complete(); }), s(t(l, n++)).subscribe(i)); }, () => { m = !0, !i && o.complete(); })); }); }
function Ht() { return yt(v); }
var Tm = Ht;
function km(t, e = 1 / 0, r) { return e = (e || 0) < 1 ? 1 / 0 : e, f((o, n) => H(o, n, t, e, void 0, !0, r)); }
function Um(t) { return f((e, r) => { try {
    e.subscribe(r);
}
finally {
    r.add(t);
} }); }
function zm(t, e) { return f(St(t, e, "value")); }
function St(t, e, r) { let o = r === "index"; return (n, i) => { let m = 0; n.subscribe(u(i, l => { let p = m++; t.call(e, l, p, n) && (i.next(o ? p : l), i.complete()); }, () => { i.next(o ? -1 : void 0), i.complete(); })); }; }
function $m(t, e) { return f(St(t, e, "index")); }
function ep(t, e) { let r = arguments.length >= 2; return o => o.pipe(t ? q((n, i) => t(n, i, o)) : v, Y(1), r ? J(e) : Q(() => new P)); }
function fp(t, e, r, o) { return f((n, i) => { let m; !e || typeof e == "function" ? m = e : { duration: r, element: m, connector: o } = e; let l = new Map, p = b => { l.forEach(b), b(i); }, c = b => p(d => d.error(b)), a = 0, h = !1, w = new B(i, b => { try {
    let d = t(b), x = l.get(d);
    if (!x) {
        l.set(d, x = o ? o() : new S);
        let O = g(d, x);
        if (i.next(O), r) {
            let T = u(x, () => { x.complete(), T?.unsubscribe(); }, void 0, void 0, () => l.delete(d));
            w.add(s(r(O)).subscribe(T));
        }
    }
    x.next(m ? m(b) : b);
}
catch (d) {
    c(d);
} }, () => p(b => b.complete()), c, () => l.clear(), () => (h = !0, a === 0)); n.subscribe(w); function g(b, d) { let x = new _(O => { a++; let T = d.subscribe(O); return () => { T.unsubscribe(), --a === 0 && h && w.unsubscribe(); }; }); return x.key = b, x; } }); }
function sp() { return f((t, e) => { t.subscribe(u(e, () => { e.next(!1), e.complete(); }, () => { e.next(!0), e.complete(); })); }); }
function Jt(t) { return t <= 0 ? () => L : f((e, r) => { let o = []; e.subscribe(u(r, n => { o.push(n), t < o.length && o.shift(); }, () => { for (let n of o)
    r.next(n); r.complete(); }, void 0, () => { o = null; })); }); }
function Ep(t, e) { let r = arguments.length >= 2; return o => o.pipe(t ? q((n, i) => t(n, i, o)) : v, Jt(1), r ? J(e) : Q(() => new P)); }
function Cp() { return f((t, e) => { t.subscribe(u(e, r => { e.next(et.createNext(r)); }, () => { e.next(et.createComplete()), e.complete(); }, r => { e.next(et.createError(r)), e.complete(); })); }); }
function Mp(t) { return z(E(t) ? (e, r) => t(e, r) > 0 ? e : r : (e, r) => e > r ? e : r); }
var kp = I;
function Dp(t, e, r = 1 / 0) { return E(e) ? I(() => t, e, r) : (typeof e == "number" && (r = e), I(() => t, r)); }
function Kp(t, e, r = 1 / 0) { return f((o, n) => { let i = e; return H(o, n, (m, l) => t(i, m, l), r, m => { i = m; }, !1, void 0, () => i = null); }); }
function Qt(...t) { let e = A(t), r = At(t, 1 / 0); return f((o, n) => { it(r)(N([o, ...t], e)).subscribe(n); }); }
function Xp(...t) { return Qt(...t); }
function rf(t) { return z(E(t) ? (e, r) => t(e, r) < 0 ? e : r : (e, r) => e < r ? e : r); }
function ct(t, e) { let r = E(t) ? t : () => t; return E(e) ? lt(e, { connector: r }) : o => new D(o, r); }
function we(...t) { let e = k(t); return r => Dt(r, ...e); }
var cf = we;
function bf() { return f((t, e) => { let r, o = !1; t.subscribe(u(e, n => { let i = r; r = n, o && e.next([i, n]), o = !0; })); }); }
function wf(...t) { let e = t.length; if (e === 0)
    throw new Error("list of properties cannot be empty."); return j(r => { let o = r; for (let n = 0; n < e; n++) {
    let i = o?.[t[n]];
    if (typeof i < "u")
        o = i;
    else
        return;
} return o; }); }
function Of(t) { return t ? e => lt(t)(e) : e => ct(new S)(e); }
function If(t) { return e => { let r = new rt(t); return new D(e, () => r); }; }
function Rf() { return t => { let e = new ot; return new D(t, () => e); }; }
function kf(t, e, r, o) { r && !E(r) && (o = r); let n = E(r) ? r : void 0; return i => ct(new tt(t, e, o), n)(i); }
function Pf(...t) { return t.length ? f((e, r) => { bt([e, ...t])(r); }) : v; }
function Zf(t) { let e = 1 / 0, r; return t != null && (typeof t == "object" ? { count: e = 1 / 0, delay: r } = t : e = t), e <= 0 ? () => L : f((o, n) => { let i = 0, m, l = () => { if (m?.unsubscribe(), m = null, r != null) {
    let c = typeof r == "number" ? R(r) : s(r(i)), a = u(n, () => { a.unsubscribe(), p(); });
    c.subscribe(a);
}
else
    p(); }, p = () => { let c = !1; m = o.subscribe(u(n, void 0, () => { ++i < e ? m ? l() : c = !0 : n.complete(); })), c && l(); }; p(); }); }
function tu(t) { return f((e, r) => { let o, n = !1, i, m = !1, l = !1, p = () => l && m && (r.complete(), !0), c = () => (i || (i = new S, s(t(i)).subscribe(u(r, () => { o ? a() : n = !0; }, () => { m = !0, p(); }))), i), a = () => { l = !1, o = e.subscribe(u(r, void 0, () => { l = !0, !p() && c().next(); })), n && (o.unsubscribe(), o = null, n = !1, a()); }; a(); }); }
function pu(t = 1 / 0) { let e; t && typeof t == "object" ? e = t : e = { count: t }; let { count: r = 1 / 0, delay: o, resetOnSuccess: n = !1 } = e; return r <= 0 ? v : f((i, m) => { let l = 0, p, c = () => { let a = !1; p = i.subscribe(u(m, h => { n && (l = 0), m.next(h); }, void 0, h => { if (l++ < r) {
    let w = () => { p ? (p.unsubscribe(), p = null, c()) : a = !0; };
    if (o != null) {
        let g = typeof o == "number" ? R(o) : s(o(h, l)), b = u(m, () => { b.unsubscribe(), w(); }, () => { m.complete(); });
        g.subscribe(b);
    }
    else
        w();
}
else
    m.error(h); })), a && (p.unsubscribe(), p = null, c()); }; c(); }); }
function au(t) { return f((e, r) => { let o, n = !1, i, m = () => { o = e.subscribe(u(r, void 0, void 0, l => { i || (i = new S, s(t(i)).subscribe(u(r, () => o ? m() : n = !0))), i && i.next(l); })), n && (o.unsubscribe(), o = null, n = !1, m()); }; m(); }); }
function Xt(t) { return f((e, r) => { let o = !1, n = null; e.subscribe(u(r, i => { o = !0, n = i; })), s(t).subscribe(u(r, () => { if (o) {
    o = !1;
    let i = n;
    n = null, r.next(i);
} }, y)); }); }
function Ou(t, e = F) { return Xt(Ut(t, e)); }
function Iu(t, e) { return f(ft(t, e, arguments.length >= 2, !0)); }
function Tu(t, e = (r, o) => r === o) { return f((r, o) => { let n = Bt(), i = Bt(), m = p => { o.next(p), o.complete(); }, l = (p, c) => { let a = u(o, h => { let { buffer: w, complete: g } = c; w.length === 0 ? g ? m(!1) : p.buffer.push(h) : !e(h, w.shift()) && m(!1); }, () => { p.complete = !0; let { complete: h, buffer: w } = c; h && m(w.length === 0), a?.unsubscribe(); }); return a; }; r.subscribe(l(n, i)), s(t).subscribe(l(i, n)); }); }
function Bt() { return { buffer: [], complete: !1 }; }
function te(t = {}) { let { connector: e = () => new S, resetOnError: r = !0, resetOnComplete: o = !0, resetOnRefCountZero: n = !0 } = t; return i => { let m, l, p, c = 0, a = !1, h = !1, w = () => { l?.unsubscribe(), l = void 0; }, g = () => { w(), m = p = void 0, a = h = !1; }, b = () => { let d = m; g(), d?.unsubscribe(); }; return f((d, x) => { c++, !h && !a && w(); let O = p = p ?? e(); x.add(() => { c--, c === 0 && !h && !a && (l = vt(b, n)); }), O.subscribe(x), !m && c > 0 && (m = new st({ next: T => O.next(T), error: T => { h = !0, w(), l = vt(g, r, T), O.error(T); }, complete: () => { a = !0, w(), l = vt(g, o), O.complete(); } }), s(d).subscribe(m)); })(i); }; }
function vt(t, e, ...r) { if (e === !0) {
    t();
    return;
} if (e === !1)
    return; let o = new st({ next: () => { o.unsubscribe(), t(); } }); return s(e(...r)).subscribe(o); }
function Pu(t, e, r) { let o, n = !1; return t && typeof t == "object" ? { bufferSize: o = 1 / 0, windowTime: e = 1 / 0, refCount: n = !1, scheduler: r } = t : o = t ?? 1 / 0, te({ connector: () => new tt(o, e, r), resetOnError: !0, resetOnComplete: !1, resetOnRefCountZero: n }); }
function Zu(t) { return f((e, r) => { let o = !1, n, i = !1, m = 0; e.subscribe(u(r, l => { i = !0, (!t || t(l, m++, e)) && (o && r.error(new Mt("Too many matching values")), o = !0, n = l); }, () => { o ? (r.next(n), r.complete()) : r.error(i ? new Tt("No matching values") : new P); })); }); }
function Qu(t) { return q((e, r) => t <= r); }
function rl(t) { return t <= 0 ? v : f((e, r) => { let o = new Array(t), n = 0; return e.subscribe(u(r, i => { let m = n++; if (m < t)
    o[m] = i;
else {
    let l = m % t, p = o[l];
    o[l] = i, r.next(p);
} })), () => { o = null; }; }); }
function fl(t) { return f((e, r) => { let o = !1, n = u(r, () => { n?.unsubscribe(), o = !0; }, y); s(t).subscribe(n), e.subscribe(u(r, i => o && r.next(i))); }); }
function sl(t) { return f((e, r) => { let o = !1, n = 0; e.subscribe(u(r, i => (o || (o = !t(i, n++))) && r.next(i))); }); }
function xl(...t) { let e = A(t); return f((r, o) => { (e ? K(t, r, e) : K(t, r)).subscribe(o); }); }
function G(t, e) { return f((r, o) => { let n = null, i = 0, m = !1, l = () => m && !n && o.complete(); r.subscribe(u(o, p => { n?.unsubscribe(); let c = 0, a = i++; s(t(p, a)).subscribe(n = u(o, h => o.next(e ? e(p, h, a, c++) : h), () => { n = null, l(); })); }, () => { m = !0, l(); })); }); }
function Fl() { return G(v); }
function Cl(t, e) { return E(e) ? G(() => t, e) : G(() => t); }
function Ml(t, e) { return f((r, o) => { let n = e; return G((i, m) => t(n, i, m), (i, m) => (n = m, m))(r).subscribe(o), () => { n = null; }; }); }
function Ul(t) { return f((e, r) => { s(t).subscribe(u(r, () => r.complete(), y)), !r.closed && e.subscribe(r); }); }
function zl(t, e = !1) { return f((r, o) => { let n = 0; r.subscribe(u(o, i => { let m = t(i, n++); (m || e) && o.next(i), !m && o.complete(); })); }); }
function Hl(t, e, r) { let o = E(t) || e || r ? { next: t, error: e, complete: r } : t; return o ? f((n, i) => { var m; (m = o.subscribe) === null || m === void 0 || m.call(o); let l = !0; n.subscribe(u(i, p => { var c; (c = o.next) === null || c === void 0 || c.call(o, p), i.next(p); }, () => { var p; l = !1, (p = o.complete) === null || p === void 0 || p.call(o), i.complete(); }, p => { var c; l = !1, (c = o.error) === null || c === void 0 || c.call(o, p), i.error(p); }, () => { var p, c; l && ((p = o.unsubscribe) === null || p === void 0 || p.call(o)), (c = o.finalize) === null || c === void 0 || c.call(o); })); }) : v; }
function ee(t, e) { return f((r, o) => { let { leading: n = !0, trailing: i = !1 } = e ?? {}, m = !1, l = null, p = null, c = !1, a = () => { p?.unsubscribe(), p = null, i && (g(), c && o.complete()); }, h = () => { p = null, c && o.complete(); }, w = b => p = s(t(b)).subscribe(u(o, a, h)), g = () => { if (m) {
    m = !1;
    let b = l;
    l = null, o.next(b), !c && w(b);
} }; r.subscribe(u(o, b => { m = !0, l = b, !(p && !p.closed) && (n ? g() : w(b)); }, () => { c = !0, !(i && m && p && !p.closed) && o.complete(); })); }); }
function nc(t, e = F, r) { let o = R(t, e); return ee(() => o, r); }
function uc(t = F) { return f((e, r) => { let o = t.now(); e.subscribe(u(r, n => { let i = t.now(), m = i - o; o = i, r.next(new gt(n, m)); })); }); }
var gt = class {
    constructor(e, r) { this.value = e, this.interval = r; }
};
function dc(t, e, r) { let o, n, i; if (r = r ?? nt, $(t) ? o = t : typeof t == "number" && (n = t), e)
    i = () => e;
else
    throw new TypeError("No observable provided to switch to"); if (o == null && n == null)
    throw new TypeError("No timeout provided."); return Vt({ first: o, each: n, scheduler: r, with: i }); }
function wc(t = Et) { return j(e => ({ value: e, timestamp: t.now() })); }
function Fc(t) { return f((e, r) => { let o = new S; r.next(o.asObservable()); let n = i => { o.error(i), r.error(i); }; return e.subscribe(u(r, i => o?.next(i), () => { o.complete(), r.complete(); }, n)), s(t).subscribe(u(r, () => { o.complete(), r.next(o = new S); }, y, n)), () => { o?.unsubscribe(), o = null; }; }); }
function jc(t, e = 0) { let r = e > 0 ? e : t; return f((o, n) => { let i = [new S], m = [], l = 0; n.next(i[0].asObservable()), o.subscribe(u(n, p => { for (let a of i)
    a.next(p); let c = l - t + 1; if (c >= 0 && c % r === 0 && i.shift().complete(), ++l % r === 0) {
    let a = new S;
    i.push(a), n.next(a.asObservable());
} }, () => { for (; i.length > 0;)
    i.shift().complete(); n.complete(); }, p => { for (; i.length > 0;)
    i.shift().error(p); n.error(p); }, () => { m = null, i = null; })); }); }
function Dc(t, ...e) { var r, o; let n = (r = A(e)) !== null && r !== void 0 ? r : F, i = (o = e[0]) !== null && o !== void 0 ? o : null, m = e[1] || 1 / 0; return f((l, p) => { let c = [], a = !1, h = d => { let { window: x, subs: O } = d; x.complete(), O.unsubscribe(), W(c, d), a && w(); }, w = () => { if (c) {
    let d = new M;
    p.add(d);
    let x = new S, O = { window: x, subs: d, seen: 0 };
    c.push(O), p.next(x.asObservable()), C(d, n, () => h(O), t);
} }; i !== null && i >= 0 ? C(p, n, w, i, !0) : a = !0, w(); let g = d => c.slice().forEach(d), b = d => { g(({ window: x }) => d(x)), d(p), p.unsubscribe(); }; return l.subscribe(u(p, d => { g(x => { x.window.next(d), m <= ++x.seen && h(x); }); }, () => b(d => d.complete()), d => b(x => x.error(d)))), () => { c = null; }; }); }
function Hc(t, e) { return f((r, o) => { let n = [], i = m => { for (; 0 < n.length;)
    n.shift().error(m); o.error(m); }; s(t).subscribe(u(o, m => { let l = new S; n.push(l); let p = new M, c = () => { W(n, l), l.complete(), p.unsubscribe(); }, a; try {
    a = s(e(m));
}
catch (h) {
    i(h);
    return;
} o.next(l.asObservable()), p.add(a.subscribe(u(o, c, y, i))); }, y)), r.subscribe(u(o, m => { let l = n.slice(); for (let p of l)
    p.next(m); }, () => { for (; 0 < n.length;)
    n.shift().complete(); o.complete(); }, i, () => { for (; 0 < n.length;)
    n.shift().unsubscribe(); })); }); }
function es(t) { return f((e, r) => { let o, n, i = l => { o.error(l), r.error(l); }, m = () => { n?.unsubscribe(), o?.complete(), o = new S, r.next(o.asObservable()); let l; try {
    l = s(t());
}
catch (p) {
    i(p);
    return;
} l.subscribe(n = u(r, m, m, i)); }; m(), e.subscribe(u(r, l => o.next(l), () => { o.complete(), r.complete(); }, i, () => { n?.unsubscribe(), o = null; })); }); }
function us(...t) { let e = U(t); return f((r, o) => { let n = t.length, i = new Array(n), m = t.map(() => !1), l = !1; for (let p = 0; p < n; p++)
    s(t[p]).subscribe(u(o, c => { i[p] = c, !l && !m[p] && (m[p] = !0, (l = m.every(v)) && (m = null)); }, y)); r.subscribe(u(o, p => { if (l) {
    let c = [p, ...i];
    o.next(e ? e(...c) : c);
} })); }); }
function as(t) { return ut(pt, t); }
function re(...t) { return f((e, r) => { pt(e, ...t).subscribe(r); }); }
function ys(...t) { return re(...t); }
function vs(t, e) { return (r, o) => !t.call(e, r, o); }
export { Rt as a, D as b, rt as c, ot as d, F as e, nt as f, P as g, at as h, Tt as i, Mt as j, oe as k, Vt as l, Z as m, Wt as n, kt as o, Lt as p, I as q, it as r, mt as s, K as t, R as u, Ut as v, k as w, Dt as x, vs as y, q as z, Br as A, pt as B, Pt as C, ho as D, go as E, Io as F, ko as G, Ko as H, Jo as I, ae as J, z as K, qt as L, zt as M, vn as N, ht as O, Rn as P, xt as Q, Ln as R, Kt as S, Gn as T, lt as U, ri as V, fi as W, ai as X, J as Y, Y as Z, Gt as _, $t as $, wt as aa, Li as ba, zi as ca, Hi as da, Zt as ea, rm as fa, Q as ga, am as ha, xm as ia, vm as ja, yt as ka, Ht as la, Tm as ma, km as na, Um as oa, zm as pa, $m as qa, ep as ra, fp as sa, sp as ta, Jt as ua, Ep as va, Cp as wa, Mp as xa, kp as ya, Dp as za, Kp as Aa, Qt as Ba, Xp as Ca, rf as Da, ct as Ea, we as Fa, cf as Ga, bf as Ha, wf as Ia, Of as Ja, If as Ka, Rf as La, kf as Ma, Pf as Na, Zf as Oa, tu as Pa, pu as Qa, au as Ra, Xt as Sa, Ou as Ta, Iu as Ua, Tu as Va, te as Wa, Pu as Xa, Zu as Ya, Qu as Za, rl as _a, fl as $a, sl as ab, xl as bb, G as cb, Fl as db, Cl as eb, Ml as fb, Ul as gb, zl as hb, Hl as ib, ee as jb, nc as kb, uc as lb, dc as mb, wc as nb, Fc as ob, jc as pb, Dc as qb, Hc as rb, es as sb, us as tb, as as ub, re as vb, ys as wb };
