import { $ as ce, $a as uo, A as Ur, Aa as Pe, B as zr, C as Dr, Ca as Ne, D as Yr, Da as Ue, E as Br, Ea as ze, F as Jr, Fa as De, G as Kr, H as Gr, Ha as Ye, I as Qr, Ia as Be, J as Xr, Ja as Je, K as Zr, Ka as Ke, L as $r, La as Ge, M as Hr, Ma as Qe, N as re, Na as Xe, Oa as Ze, P as ee, Pa as $e, Q as oe, Qa as He, R as te, Ra as ro, Sa as eo, T as ne, Ta as oo, U as me, Ua as to, V as ie, Va as no, W as fe, Wa as mo, X as pe, Xa as io, Y as se, Ya as fo, Z as ue, Za as po, _ as xe, _a as so, a as ar, aa as ae, ab as xo, b as lr, ba as le, bb as co, c as hr, ca as de, cb as ao, d as V, da as he, db as lo, e as vr, ea as be, eb as ho, f as wr, fa as ye, fb as bo, g, ga as ve, gb as yo, h as Mr, ha as we, hb as vo, i as Sr, ia as Ae, ib as wo, j as kr, ja as Ee, jb as Ao, k as Cr, ka as ge, kb as Eo, l as Lr, la as Oe, lb as go, m as a, ma as Fe, mb as Oo, n as Z, na as Ie, nb as Fo, o as $, oa as Te, ob as Io, p as Wr, pa as _e, pb as To, q as N, qa as Me, qb as _o, r as U, ra as Se, rb as Mo, s as Vr, sa as ke, sb as So, t as Rr, ta as Ce, tb as ko, u as jr, ua as Le, ub as Co, v as Pr, va as qe, wa as We, wb as Lo, x as Nr, xa as Ve, y as H, ya as Re, z as T, za as je } from "@nf-internal/chunk-45LVEDNQ";
import { a as qr } from "@nf-internal/chunk-SOEXL22L";
import { a as B, b, c as R, d as Ar, e as Er } from "@nf-internal/chunk-2CYE7VDY";
import { b as y, c as yr, d as v, e as d, f as gr, g as I, h as J, i as K, j as G, l as j, m as P, n as X, o as Or, p as E, q as Fr, r as Ir, s as Tr, t as _r } from "@nf-internal/chunk-XWZ5U5LX";
import "@nf-internal/chunk-ICXNGLPY";
import { a as Q, j as x } from "@nf-internal/chunk-5VUD2K26";
import { a as Y } from "@nf-internal/chunk-BUL5WOS2";
import { a as br } from "@nf-internal/chunk-AMOZ2BZU";
import { a as dr, b as W } from "@nf-internal/chunk-3SAWXQOS";
import { a as u, c as fr, e as pr, g as sr, j as q, o as ur, p as D, q as xr, r as F, s as cr, t as f } from "@nf-internal/chunk-4TJQB64Q";
import "@nf-internal/chunk-VDCRBLM6";
function qo(o) { return o ? rr(o) : Wo; }
function rr(o) { return new f(r => { let e = o || B, t = e.now(), n = 0, m = () => { r.closed || (n = b.requestAnimationFrame(i => { n = 0; let p = e.now(); r.next({ timestamp: o ? p : i, elapsed: p - t }), m(); })); }; return m(), () => { n && b.cancelAnimationFrame(n); }; }); }
var Wo = rr();
var _ = class extends y {
    constructor(r, e) { super(r, e), this.scheduler = r, this.work = e; }
    requestAsyncId(r, e, t = 0) { return t !== null && t > 0 ? super.requestAsyncId(r, e, t) : (r.actions.push(this), r._scheduled || (r._scheduled = R.setImmediate(r.flush.bind(r, void 0)))); }
    recycleAsyncId(r, e, t = 0) { var n; if (t != null ? t > 0 : this.delay > 0)
        return super.recycleAsyncId(r, e, t); let { actions: m } = r; e != null && ((n = m[m.length - 1]) === null || n === void 0 ? void 0 : n.id) !== e && (R.clearImmediate(e), r._scheduled === e && (r._scheduled = void 0)); }
};
var M = class extends v {
    flush(r) { this._active = !0; let e = this._scheduled; this._scheduled = void 0; let { actions: t } = this, n; r = r || t.shift(); do
        if (n = r.execute(r.state, r.delay))
            break;
    while ((r = t[0]) && r.id === e && t.shift()); if (this._active = !1, n) {
        for (; (r = t[0]) && r.id === e && t.shift();)
            r.unsubscribe();
        throw n;
    } }
};
var er = new M(_), Vo = er;
var S = class extends y {
    constructor(r, e) { super(r, e), this.scheduler = r, this.work = e; }
    schedule(r, e = 0) { return e > 0 ? super.schedule(r, e) : (this.delay = e, this.state = r, this.scheduler.flush(this), this); }
    execute(r, e) { return e > 0 || this.closed ? super.execute(r, e) : this._execute(r, e); }
    requestAsyncId(r, e, t = 0) { return t != null && t > 0 || t == null && this.delay > 0 ? super.requestAsyncId(r, e, t) : (r.flush(this), 0); }
};
var k = class extends v {
};
var or = new k(S), Ro = or;
var C = class extends y {
    constructor(r, e) { super(r, e), this.scheduler = r, this.work = e; }
    requestAsyncId(r, e, t = 0) { return t !== null && t > 0 ? super.requestAsyncId(r, e, t) : (r.actions.push(this), r._scheduled || (r._scheduled = b.requestAnimationFrame(() => r.flush(void 0)))); }
    recycleAsyncId(r, e, t = 0) { var n; if (t != null ? t > 0 : this.delay > 0)
        return super.recycleAsyncId(r, e, t); let { actions: m } = r; e != null && e === r._scheduled && ((n = m[m.length - 1]) === null || n === void 0 ? void 0 : n.id) !== e && (b.cancelAnimationFrame(e), r._scheduled = void 0); }
};
var L = class extends v {
    flush(r) { this._active = !0; let e; r ? e = r.id : (e = this._scheduled, this._scheduled = void 0); let { actions: t } = this, n; r = r || t.shift(); do
        if (n = r.execute(r.state, r.delay))
            break;
    while ((r = t[0]) && r.id === e && t.shift()); if (this._active = !1, n) {
        for (; (r = t[0]) && r.id === e && t.shift();)
            r.unsubscribe();
        throw n;
    } }
};
var tr = new L(C), jo = tr;
function Po(o) { return !!o && (o instanceof f || u(o.lift) && u(o.subscribe)); }
function No(o, r) { let e = typeof r == "object"; return new Promise((t, n) => { let m = !1, i; o.subscribe({ next: p => { i = p, m = !0; }, error: n, complete: () => { m ? t(i) : e ? t(r.defaultValue) : n(new g); } }); }); }
function Uo(o, r) { let e = typeof r == "object"; return new Promise((t, n) => { let m = new D({ next: i => { t(i), m.unsubscribe(); }, error: n, complete: () => { e ? t(r.defaultValue) : n(new g); } }); o.subscribe(m); }); }
function w(o, r, e, t) { if (e)
    if (I(e))
        t = e;
    else
        return function (...n) { return w(o, r, t).apply(this, n).pipe(a(e)); }; return t ? function (...n) { return w(o, r).apply(this, n).pipe(P(t), j(t)); } : function (...n) { let m = new V, i = !0; return new f(p => { let s = m.subscribe(p); if (i) {
    i = !1;
    let A = !1, l = !1;
    r.apply(this, [...n, (...c) => { if (o) {
            let O = c.shift();
            if (O != null) {
                m.error(O);
                return;
            }
        } m.next(1 < c.length ? c : c[0]), l = !0, A && m.complete(); }]), l && m.complete(), A = !0;
} return s; }); }; }
function zo(o, r, e) { return w(!1, o, r, e); }
function Do(o, r, e) { return w(!0, o, r, e); }
function h(o) { return new f(r => { x(o()).subscribe(r); }); }
var Yo = { connector: () => new W, resetOnDisconnect: !0 };
function Bo(o, r = Yo) { let e = null, { connector: t, resetOnDisconnect: n = !0 } = r, m = t(), i = new f(p => m.subscribe(p)); return i.connect = () => ((!e || e.closed) && (e = h(() => o).subscribe(m), n && e.add(() => m = t())), e), i; }
function Jo(...o) { let r = J(o), { args: e, keys: t } = Z(o), n = new f(m => { let { length: i } = e; if (!i) {
    m.complete();
    return;
} let p = new Array(i), s = i, A = i; for (let l = 0; l < i; l++) {
    let c = !1;
    x(e[l]).subscribe(Y(m, O => { c || (c = !0, A--), p[l] = O; }, () => s--, void 0, () => { (!s || !c) && (A || m.next(t ? $(t, p) : p), m.complete()); }));
} }); return r ? n.pipe(a(r)) : n; }
var Ko = ["addListener", "removeListener"], Go = ["addEventListener", "removeEventListener"], Qo = ["on", "off"];
function z(o, r, e, t) { if (u(e) && (t = e, e = void 0), t)
    return z(o, r, e).pipe(a(t)); let [n, m] = $o(o) ? Go.map(i => p => o[i](r, p, e)) : Xo(o) ? Ko.map(nr(o, r)) : Zo(o) ? Qo.map(nr(o, r)) : []; if (!n && Q(o))
    return N(i => z(i, r, e))(x(o)); if (!n)
    throw new TypeError("Invalid event target"); return new f(i => { let p = (...s) => i.next(1 < s.length ? s : s[0]); return n(p), () => m(p); }); }
function nr(o, r) { return e => t => o[e](r, t); }
function Xo(o) { return u(o.addListener) && u(o.removeListener); }
function Zo(o) { return u(o.on) && u(o.off); }
function $o(o) { return u(o.addEventListener) && u(o.removeEventListener); }
function mr(o, r, e) { return e ? mr(o, r).pipe(a(e)) : new f(t => { let n = (...i) => t.next(i.length === 1 ? i[0] : i), m = o(n); return u(r) ? () => r(n, m) : void 0; }); }
function Ho(o, r, e, t, n) { let m, i; arguments.length === 1 ? { initialState: i, condition: r, iterate: e, resultSelector: m = F, scheduler: n } = o : (i = o, !t || I(t) ? (m = F, n = t) : m = t); function* p() { for (let s = i; !r || r(s); s = e(s))
    yield m(s); } return h(n ? () => X(p(), n) : p); }
function rt(o, r, e) { return h(() => o() ? r : e); }
function et(...o) { let r = K(o), e = G(o, 1 / 0), t = o; return t.length ? t.length === 1 ? x(t[0]) : U(e)(E(t, r)) : d; }
var ir = new f(q);
function ot() { return ir; }
function tt(o, r) { return E(Object.entries(o), r); }
function nt(o, r, e) { return [T(r, e)(x(o)), T(H(r, e))(x(o))]; }
function mt(o, r, e) { if (r == null && (r = o, o = 0), r <= 0)
    return d; let t = r + o; return new f(e ? n => { let m = o; return e.schedule(function () { m < t ? (n.next(m++), this.schedule()) : n.complete(); }); } : n => { let m = o; for (; m < t && !n.closed;)
    n.next(m++); n.complete(); }); }
function it(o, r) { return new f(e => { let t = o(), n = r(t); return (n ? x(n) : d).subscribe(e), () => { t && t.unsubscribe(); }; }); }
export { Mr as ArgumentOutOfRangeError, V as AsyncSubject, hr as BehaviorSubject, lr as ConnectableObservable, d as EMPTY, g as EmptyError, ir as NEVER, Sr as NotFoundError, _r as Notification, Tr as NotificationKind, dr as ObjectUnsubscribedError, f as Observable, br as ReplaySubject, yr as Scheduler, kr as SequenceError, W as Subject, ur as Subscriber, pr as Subscription, Cr as TimeoutError, fr as UnsubscriptionError, Er as VirtualAction, Ar as VirtualTimeScheduler, jo as animationFrame, tr as animationFrameScheduler, qo as animationFrames, Vo as asap, er as asapScheduler, wr as async, vr as asyncScheduler, Dr as audit, Yr as auditTime, zo as bindCallback, Do as bindNodeCallback, Br as buffer, Jr as bufferCount, Kr as bufferTime, Gr as bufferToggle, Qr as bufferWhen, Xr as catchError, re as combineAll, Wr as combineLatest, Hr as combineLatestAll, ee as combineLatestWith, Rr as concat, Vr as concatAll, oe as concatMap, te as concatMapTo, ne as concatWith, sr as config, me as connect, Bo as connectable, ie as count, fe as debounce, pe as debounceTime, se as defaultIfEmpty, h as defer, le as delay, ae as delayWhen, de as dematerialize, he as distinct, be as distinctUntilChanged, ye as distinctUntilKeyChanged, we as elementAt, gr as empty, Ae as endWith, Ee as every, Fe as exhaust, Oe as exhaustAll, ge as exhaustMap, Ie as expand, T as filter, Te as finalize, _e as find, Me as findIndex, Se as first, Uo as firstValueFrom, Re as flatMap, Jo as forkJoin, E as from, z as fromEvent, mr as fromEventPattern, Ho as generate, ke as groupBy, F as identity, xe as ignoreElements, rt as iif, Pr as interval, Ce as isEmpty, Po as isObservable, qe as last, No as lastValueFrom, qr as map, ce as mapTo, We as materialize, Ve as max, et as merge, U as mergeAll, N as mergeMap, je as mergeMapTo, Pe as mergeScan, Ne as mergeWith, Ue as min, ze as multicast, ot as never, q as noop, xr as observable, j as observeOn, Fr as of, Nr as onErrorResumeNext, De as onErrorResumeNextWith, tt as pairs, Ye as pairwise, nt as partition, cr as pipe, Be as pluck, Je as publish, Ke as publishBehavior, Ge as publishLast, Qe as publishReplay, Ro as queue, or as queueScheduler, Ur as race, Xe as raceWith, mt as range, Zr as reduce, ar as refCount, Ze as repeat, $e as repeatWhen, He as retry, ro as retryWhen, eo as sample, oo as sampleTime, to as scan, Or as scheduled, no as sequenceEqual, mo as share, io as shareReplay, fo as single, po as skip, so as skipLast, uo as skipUntil, xo as skipWhile, co as startWith, P as subscribeOn, lo as switchAll, ao as switchMap, ho as switchMapTo, bo as switchScan, ue as take, Le as takeLast, yo as takeUntil, vo as takeWhile, wo as tap, Ao as throttle, Eo as throttleTime, Ir as throwError, ve as throwIfEmpty, go as timeInterval, Lr as timeout, Oo as timeoutWith, jr as timer, Fo as timestamp, $r as toArray, it as using, Io as window, To as windowCount, _o as windowTime, Mo as windowToggle, So as windowWhen, ko as withLatestFrom, zr as zip, Co as zipAll, Lo as zipWith };
