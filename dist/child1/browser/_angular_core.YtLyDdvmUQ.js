import { a as fi, c as rp, d as ip, e as sp, g as ap, h as cp, i as lp, j as up, l as dp, o as Cc } from "@nf-internal/chunk-VO7WCBBT";
import { a as UC } from "@nf-internal/chunk-RRRKZLAE";
import { $ as Te, $a as Mo, $b as T, $c as vc, A as Ur, Aa as q, Ab as ae, Ac as oe, B as Gr, Ba as ie, Bb as qa, Bc as Dt, C as Oa, Ca as se, Cb as ei, Cc as _e, D as ht, Da as te, Db as Uf, Dc as dc, E as Rt, Ea as xt, Eb as wo, Ec as fc, F as M, Fa as L, Fb as ti, Fc as pc, G as Ie, Ga as A, Gb as ni, Gc as hc, H as Sf, Ha as Ze, Hb as oi, Hc as Ao, I as Pa, Ia as C, Ib as za, Ic as xe, J as kt, Ja as yt, Jb as Ft, Jc as AC, K as Af, Ka as Do, Kb as Gf, Kc as tp, L as Ae, La as Co, Lb as Wf, Lc as De, M as Wr, Ma as Q, Mb as qf, Mc as RC, N as D, Na as Ye, Nb as zf, Nc as fn, O as La, Oa as cn, Ob as Qf, Oc as li, P as sn, Pa as je, Pb as Qa, Pc as Ct, Q as qr, Qa as ln, Qb as ri, Qc as gc, R as Rf, Ra as $a, Rb as bo, Rc as kC, S as Re, Sa as Ua, Sb as Za, Sc as np, T as Fa, Ta as Xr, Tb as Ya, Tc as xC, U as yo, Ua as To, Ub as Zf, Uc as mc, V as vo, Va as Ne, Vb as Ka, Vc as op, W as ja, Wa as Ot, Wb as Ja, Wc as yc, X as kf, Xa as Ke, Xb as g, Xc as OC, Y as Io, Ya as I, Yb as N, Yc as ui, Z as zr, Za as Ee, Zb as Xa, Zc as Je, _ as Qr, _a as ke, _b as ec, _c as pn, a as vC, aa as P, ab as Pt, ac as Yf, ad as di, b as IC, ba as gt, bb as F, bc as dn, bd as Tt, c as Hr, ca as _C, cb as Y, cc as Ve, cd as Ic, d as _, da as an, db as K, dc as tc, dd as Ro, e as _f, ea as Zr, eb as Ga, ec as nc, ed as Ec, f as ve, fa as G, fb as ge, fc as oc, fd as Dc, g as Ra, ga as Me, gb as un, gc as rc, gd as PC, h as wf, ha as Fe, hb as me, hc as ic, hd as LC, i as on, ia as Eo, ib as He, ic as ue, id as FC, j as Vr, ja as Qe, jb as Wa, jc as Be, jd as jC, k as EC, ka as wC, kb as Lf, kc as sc, kd as HC, l as ka, la as bC, lb as vt, lc as de, ld as VC, m as U, ma as Ha, mb as Ff, mc as $e, md as BC, n as Br, na as Yr, nb as jf, nc as Kf, nd as $C, o as bf, oa as xf, ob as k, oc as ac, p as V, pa as Of, pb as No, pc as Jf, q as DC, qa as Kr, qb as Lt, qc as Xf, r as mo, ra as mt, rb as ne, rc as cc, s as CC, sa as Va, sb as Hf, sc as ii, t as TC, ta as Pf, tb as It, tc as si, u as $r, ua as Jr, ub as Et, uc as So, v as xa, va as Ba, vb as _o, vc as lc, w, wa as SC, wb as le, wc as ai, x as MC, xa as H, xb as Vf, xc as uc, y as NC, ya as y, yb as Bf, yc as ci, z as rn, za as b, zb as $f, zc as ep } from "@nf-internal/chunk-T3TI3EGG";
import { b as yC } from "@nf-internal/chunk-CQMEXOOL";
import { B as Sa, E as Aa, a as pt, b as R, c as Tf, f as ba, g as Lr, n as ho, p as Fr, r as jr, s as go, w as Mf, x as Nf } from "@nf-internal/chunk-JHE4MH2J";
import { a as W, b as Le, i as po } from "@nf-internal/chunk-VDCRBLM6";
import { Subject as Xl, Subscription as eu } from "rxjs";
import { setActiveConsumer as fp } from "@angular/core/primitives/signals";
import { map as GC } from "rxjs/operators";
function Ge(e) { return { toString: e }.toString(); }
var mn = "__annotations__", yn = "__parameters__", vn = "__prop__metadata__";
function cr(e, t, n, o, r) { return Ge(() => { let i = tu(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(mn) ? u[mn] : Object.defineProperty(u, mn, { value: [] })[mn]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function tu(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function Gn(e, t, n) { return Ge(() => { let o = tu(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(yn) ? c[yn] : Object.defineProperty(c, yn, { value: [] })[yn]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function it(e, t, n, o) { return Ge(() => { let r = tu(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(vn) ? d[vn] : Object.defineProperty(d, vn, { value: {} })[vn]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var Nh = sn(Gn("Inject", e => ({ token: e })), -1), _h = sn(Gn("Optional"), 8), wh = sn(Gn("Self"), 2), bh = sn(Gn("SkipSelf"), 4), Sh = sn(Gn("Host"), 1);
function X(e) { let t = ve.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var pp = { \u0275\u0275defineInjectable: V, \u0275\u0275defineInjector: mo, \u0275\u0275inject: Ae, \u0275\u0275invalidFactoryDep: Wr, resolveForwardRef: U }, Ah = Function;
function xo(e) { return typeof e == "function"; }
var WC = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, qC = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, zC = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, QC = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function ZC(e) { return WC.test(e) || QC.test(e) || qC.test(e) && !zC.test(e); }
var Oi = class {
    _reflect;
    constructor(t) { this._reflect = t || ve.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = vo(n.length) : o = vo(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (ZC(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && Tc(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(yn) && t[yn], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : vo(t.length); }
    parameters(t) { if (!xo(t))
        return []; let n = pi(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? Tc(t.decorators) : t.hasOwnProperty(mn) ? t[mn] : null; }
    annotations(t) { if (!xo(t))
        return []; let n = pi(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = Tc(o[i]); }), r;
    } return t.hasOwnProperty(vn) ? t[vn] : null; }
    propMetadata(t) { if (!xo(t))
        return {}; let n = pi(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return xo(t) ? this._ownPropMetadata(t, pi(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof Ah && n in t.prototype; }
};
function Tc(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function pi(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
var Pi = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
};
function Rh(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var kh = (() => { let e = () => xh; return e.ngInherit = !0, e; })();
function xh(e) { return e.type.prototype.ngOnChanges && (e.setInput = KC), YC; }
function YC() { let e = Ph(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === Te)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function KC(e, t, n, o, r) { let i = this.declaredInputs[o], s = Ph(e) || JC(e, { previous: Te, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new Pi(l && l.currentValue, n, c === Te), Rh(e, t, r, n); }
var Oh = "__ngSimpleChanges__";
function Ph(e) { return e[Oh] || null; }
function JC(e, t) { return e[Oh] = t; }
var hp = [];
var x = function (e, t = null, n) { for (let o = 0; o < hp.length; o++) {
    let r = hp[o];
    r(e, t, n);
} };
function XC(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = xh(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function Lh(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function Mi(e, t, n) { Fh(e, t, 3, n); }
function Ni(e, t, n, o) { (e[b] & 3) === n && Fh(e, t, n, o); }
function Mc(e, t) { let n = e[b]; (n & 3) === t && (n &= 16383, n += 1, e[b] = n); }
function Fh(e, t, n, o) { let r = o !== void 0 ? e[cn] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[cn] += 65536), (a < i || i == -1) && (eT(e, n, t, c), e[cn] = (e[cn] & 4294901760) + c + 2), c++; }
function gp(e, t) { x(4, e, t); let n = R(null); try {
    t.call(e);
}
finally {
    R(n), x(5, e, t);
} }
function eT(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[b] >> 14 < e[cn] >> 16 && (e[b] & 3) === t && (e[b] += 16384, gp(a, i)) : gp(a, i); }
var Tn = -1, Ut = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, o, r) { this.factory = t, this.name = r, this.canSeeViewProviders = n, this.injectImpl = o; }
};
function fs(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function jh(e) { return !!(e.type & 128); }
function tT(e) { return (e.flags & 8) !== 0; }
function nT(e) { return (e.flags & 16) !== 0; }
function oT(e, t, n) { let o = 0; for (; o < n.length;) {
    let r = n[o];
    if (typeof r == "number") {
        if (r !== 0)
            break;
        o++;
        let i = n[o++], s = n[o++], a = n[o++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = r, s = n[++o];
        rT(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function Hh(e) { return e === 3 || e === 4 || e === 6; }
function rT(e) { return e.charCodeAt(0) === 64; }
function Rn(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? mp(e, n, r, null, t[++o]) : mp(e, n, r, null, null));
        }
    } return e; }
function mp(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        r !== null && (e[i + 1] = r);
        return;
    }
    i++, r !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r); }
function Vh(e) { return e !== Tn; }
function Li(e) { return e & 32767; }
function iT(e) { return e >> 16; }
function Fi(e, t) { let n = iT(e), o = t; for (; n > 0;)
    o = o[Co], n--; return o; }
var Zc = !0;
function ji(e) { let t = Zc; return Zc = e, t; }
var sT = 256, Bh = sT - 1, $h = 5, aT = 0, Ue = {};
function cT(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(Rt) && (o = n[Rt]), o == null && (o = n[Rt] = aT++); let r = o & Bh, i = 1 << r; t.data[e + (r >> $h)] |= i; }
function Hi(e, t) { let n = Uh(e, t); if (n !== -1)
    return n; let o = t[y]; o.firstCreatePass && (e.injectorIndex = t.length, Nc(o.data, e), Nc(t, null), Nc(o.blueprint, null)); let r = nu(e, t), i = e.injectorIndex; if (Vh(r)) {
    let s = Li(r), a = Fi(r, t), c = a[y].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function Nc(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function Uh(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function nu(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = Zh(r), o === null)
        return Tn;
    if (n++, r = r[Co], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return Tn; }
function Yc(e, t, n) { cT(e, t, n); }
function lT(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (Hh(i))
            break;
        if (i === 0)
            r = r + 2;
        else if (typeof i == "number")
            for (r++; r < o && typeof n[r] == "string";)
                r++;
        else {
            if (i === t)
                return n[r + 1];
            r = r + 2;
        }
    }
} return null; }
function Gh(e, t, n) { if (n & 8 || e !== void 0)
    return e; Pa(t, "NodeInjector"); }
function Wh(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[A], i = kt(void 0);
    try {
        return r ? r.get(t, o, n & 8) : Af(t, o, n & 8);
    }
    finally {
        kt(i);
    }
} return Gh(o, t, n); }
function qh(e, t, n, o = 0, r) { if (e !== null) {
    if (t[b] & 2048 && !(o & 2)) {
        let s = pT(e, t, n, o, Ue);
        if (s !== Ue)
            return s;
    }
    let i = zh(e, t, n, o, Ue);
    if (i !== Ue)
        return i;
} return Wh(t, n, o, r); }
function zh(e, t, n, o, r) { let i = dT(n); if (typeof i == "function") {
    if (!lc(t, e, o))
        return o & 1 ? Gh(r, n, o) : Wh(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            Pa(n);
        else
            return s;
    }
    finally {
        uc();
    }
}
else if (typeof i == "number") {
    let s = null, a = Uh(e, t), c = Tn, l = o & 1 ? t[Q][se] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? nu(e, t) : t[a + 8], c === Tn || !vp(o, !1) ? a = -1 : (s = t[y], a = Li(c), t = Fi(c, t))); a !== -1;) {
        let u = t[y];
        if (yp(i, a, u.data)) {
            let d = uT(a, t, n, s, o, l);
            if (d !== Ue)
                return d;
        }
        c = t[a + 8], c !== Tn && vp(o, t[y].data[a + 8] === l) && yp(i, a, t) ? (s = u, a = Li(c), t = Fi(c, t)) : a = -1;
    }
} return r; }
function uT(e, t, n, o, r, i) { let s = t[y], a = s.data[e + 8], c = o == null ? ge(a) && Zc : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = _i(a, s, n, c, l); return u !== null ? qo(t, s, u, a, r) : Ue; }
function _i(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && me(p) && p.type === n)
        return c;
} return null; }
function qo(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof Ut) {
    let a = i;
    if (a.resolving) {
        let p = Ie(s[n]);
        throw Sf(p);
    }
    let c = ji(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? kt(a.injectImpl) : null, f = lc(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && XC(n, s[n], t);
    }
    finally {
        d !== null && kt(d), ji(c), a.resolving = !1, uc();
    }
} return i; }
function dT(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(Rt) ? e[Rt] : void 0; return typeof t == "number" ? t >= 0 ? t & Bh : fT : t; }
function yp(e, t, n) { let o = 1 << e; return !!(n[t + (e >> $h)] & o); }
function vp(e, t) { return !(e & 2) && !(e & 1 && t); }
var Nt = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return qh(this._tNode, this._lView, t, La(o), n); }
};
function fT() { return new Nt(T(), g()); }
function Qh(e) { return Ge(() => { let t = e.prototype.constructor, n = t[ht] || Kc(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[ht] || Kc(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function Kc(e) { return Br(e) ? () => { let t = Kc(U(e)); return t && t(); } : qr(e); }
function pT(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[b] & 2048 && !He(s);) {
    let a = zh(i, s, n, o | 2, Ue);
    if (a !== Ue)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[$a];
        if (l) {
            let u = l.get(n, Ue, o);
            if (u !== Ue)
                return u;
        }
        c = Zh(s), s = s[Co];
    }
    i = c;
} return r; }
function Zh(e) { let t = e[y], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[se] : null; }
function ps(e) { return lT(T(), e); }
var Yh = Gn("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => ps(e) })), Ip = null;
function ou() { return Ip = Ip || new Oi; }
function hs(e) { return Kh(ou().parameters(e)); }
function Kh(e) { return e.map(t => hT(t)); }
function hT(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof _h || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof bh || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof wh || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof Sh || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof Nh)
            t.token = o.token;
        else if (o instanceof Yh) {
            if (o.attributeName === void 0)
                throw new _(204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function gT(e, t) { let n = null, o = null; e.hasOwnProperty($r) || Object.defineProperty(e, $r, { get: () => (n === null && (n = X({ usage: 0, kind: "injectable", type: e }).compileInjectable(pp, `ng:///${e.name}/\u0275prov.js`, IT(e, t))), n) }), e.hasOwnProperty(ht) || Object.defineProperty(e, ht, { get: () => { if (o === null) {
        let r = X({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(pp, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: hs(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var mT = Ra({ provide: String, useValue: Ra });
function Ep(e) { return e.useClass !== void 0; }
function yT(e) { return mT in e; }
function Dp(e) { return e.useFactory !== void 0; }
function vT(e) { return e.useExisting !== void 0; }
function IT(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (Ep(n) || Dp(n)) && n.deps !== void 0 && (o.deps = Kh(n.deps)), Ep(n) ? o.useClass = n.useClass : yT(n) ? o.useValue = n.useValue : Dp(n) ? o.useFactory = n.useFactory : vT(n) && (o.useExisting = n.useExisting), o; }
var ET = cr("Injectable", void 0, void 0, void 0, (e, t) => gT(e, t));
function DT() { return Wn(T(), g()); }
function Wn(e, t) { return new lr(ne(e, t)); }
var lr = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = DT;
} return e; })();
function Jh(e) { return e instanceof lr ? e.nativeElement : e; }
function CT() { return this._results[Symbol.iterator](); }
var Vi = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new Xl; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let o = Re(t); (this._changesDetected = !Rf(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = CT;
}, qn = "ngSkipHydration", TT = "ngskiphydration";
function ru(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === TT)
        return !0;
} return !1; }
function Xh(e) { return e.hasAttribute(qn); }
function zo(e) { return (e.flags & 128) === 128; }
function zn(e) { if (zo(e))
    return !0; let t = e.parent; for (; t;) {
    if (zo(e) || ru(t))
        return !0;
    t = t.parent;
} return !1; }
function eg(e) { return zo(e) || ru(e) || zn(e); }
var gs = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e; })(gs || {}), ms = new Map, MT = 0;
function NT() { return MT++; }
function _T(e) { ms.set(e[ln], e); }
function tg(e) { return ms.get(e) || null; }
function Jc(e) { ms.delete(e[ln]); }
function wT() { return ms; }
var Bi = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return tg(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function ye(e) { let t = wi(e); if (t) {
    if (Y(t)) {
        let n = t, o, r, i;
        if (og(e)) {
            if (o = AT(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (bT(e)) {
            if (o = RT(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = rg(o, n);
        }
        else if (o = Tp(n, e), o == -1)
            return null;
        let s = k(n[o]), a = wi(s), c = a && !Array.isArray(a) ? a : Cp(n, o, s);
        if (r && c.component === void 0 && (c.component = r, we(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                we(i[l], c);
        }
        we(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = wi(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = Tp(i, n);
            if (s >= 0) {
                let a = k(i[s]), c = Cp(i, s, a);
                we(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function Cp(e, t, n) { return new Bi(e[ln], t, n); }
var Xc = "__ngContext__";
function we(e, t) { Y(t) ? (e[Xc] = t[ln], _T(t)) : e[Xc] = t; }
function wi(e) { let t = e[Xc]; return typeof t == "number" ? tg(t) : t || null; }
function ng(e) { let t = wi(e); return t ? Y(t) ? t : t.lView : null; }
function og(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function bT(e) { return e && e.constructor && e.constructor.\u0275dir; }
function Tp(e, t) { let n = e[y]; for (let o = I; o < n.bindingStartIndex; o++)
    if (k(e[o]) === t)
        return o; return -1; }
function ST(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function AT(e, t) { let n = e[y].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (le(r, e)[L] === t)
            return r;
    }
else if (le(I, e)[L] === t)
    return I; return -1; }
function RT(e, t) { let n = e[y].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = ST(n);
} return -1; }
function rg(e, t) { let n = t[y].data[e]; if (n.directiveStart === 0)
    return P; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    og(i) || o.push(i);
} return o; }
function kT(e, t) { let n = t[y].data[e]; return ge(n) ? t[n.directiveStart + n.componentOffset] : null; }
function xT(e, t) { let n = e[y].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function ig(e) { return ag(e[yt]); }
function sg(e) { return ag(e[ie]); }
function ag(e) { for (; e !== null && !K(e);)
    e = e[ie]; return e; }
function Mp(e) { let t = ye(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = kT(t.nodeIndex, n);
} return t.component; }
function OT(e) { GT(e); let t = ye(e), n = t ? t.lView : null; return n === null ? null : n[L]; }
function PT(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[y].type === 2 && (o = Ft(n));)
    n = o; return He(n) ? null : n[L]; }
function LT(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return De.NULL; let o = n[y].data[t.nodeIndex]; return new Nt(o, n); }
function FT(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[y], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    UT(l) && (l = l.type), i.push(l);
} return i; }
function jT(e) { if (e instanceof Text)
    return []; let t = ye(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[y], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = rg(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var cg = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(cg || {}), lg = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(lg || {}), ug = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(ug || {});
function HT(e) { let t = ye(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = xT(n, t.nodeIndex);
} return t.localRefs || {}; }
function VT(e) { return ye(e).native; }
function BT(e) { let t = ye(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[y], r = n[xt], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = k(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", m = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: m, type: h });
        }
    } return s.sort($T), s; }
function $T(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function UT(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function GT(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var el;
function WT(e) { el = e; }
function st() { if (el !== void 0)
    return el; if (typeof document < "u")
    return document; throw new _(210, !1); }
var at = new w("", { providedIn: "root", factory: () => qT }), qT = "ng", iu = new w(""), zT = new w("", { providedIn: "platform", factory: () => "unknown" }), QT = new w(""), ZT = new w(""), YT = new w("", { providedIn: "root", factory: () => st().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), dg = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, KT = new w("", { providedIn: "root", factory: () => dg });
function JT(e) { return e; }
function XT() { let e = new Jt; return (typeof ngServerMode > "u" || !ngServerMode) && (e.store = fg(st(), D(at))), e; }
var Jt = (() => { class e {
    static \u0275prov = V({ token: e, providedIn: "root", factory: XT });
    store = {};
    onSerializeCallbacks = {};
    get(n, o) { return this.store[n] !== void 0 ? this.store[n] : o; }
    set(n, o) { this.store[n] = o; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, o) { this.onSerializeCallbacks[n] = o; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (o) {
                console.warn("Exception in onSerialize callback: ", o);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C"); }
} return e; })();
function fg(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var su = "h", au = "b", pg = "f", hg = "n", ur = "e", ys = "t", Qn = "c", dr = "x", nt = "r", vs = "i", fr = "n", Zn = "d", Is = "l", Es = "di", pr = "s", cu = "p", Ds = "t", Xt = new w(""), gg = !1, lu = new w("", { providedIn: "root", factory: () => gg }), uu = new w(""), Cs = new w(""), du = !1, fu = new w(""), hr = new w("", { providedIn: "root", factory: () => new Map }), eM = new w("");
var $i = { passive: !0, capture: !0 }, _c = new WeakMap, wc = new WeakMap, In = new WeakMap, Ui = ["click", "keydown"], Gi = ["mouseenter", "mouseover", "focusin"], hn = null, bc = 0, Qo = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function mg(e, t) { let n = wc.get(e); if (!n) {
    n = new Qo, wc.set(e, n);
    for (let o of Ui)
        e.addEventListener(o, n.listener, $i);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    wc.delete(e);
    for (let i of Ui)
        e.removeEventListener(i, r, $i);
} }; }
function yg(e, t) { let n = _c.get(e); if (!n) {
    n = new Qo, _c.set(e, n);
    for (let o of Gi)
        e.addEventListener(o, n.listener, $i);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of Gi)
        e.removeEventListener(i, r, $i);
    _c.delete(e);
} }; }
function tM() { return new IntersectionObserver(e => { for (let t of e)
    t.isIntersecting && In.has(t.target) && In.get(t.target).listener(); }); }
function nM(e, t, n) { let o = In.get(e); return hn = hn || n(), o || (o = new Qo, hn.observe(e), In.set(e, o), bc++), o.callbacks.add(t), () => { In.has(e) && (o.callbacks.delete(t), o.callbacks.size === 0 && (hn?.unobserve(e), In.delete(e), bc--), bc === 0 && (hn?.disconnect(), hn = null)); }; }
var Yn = "ngb";
function pu(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(fi.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(fi.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(Yn, i); }
var vg = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, hu = (e, t) => { let n = e, o = n.getAttribute(Yn) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function oM(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(gu);
} }
var gu = e => { e.removeAttribute(fi.JSACTION), e.removeAttribute(Yn), e.__jsaction_fns = void 0; }, mu = new w("", { providedIn: "root", factory: () => ({}) });
function yu(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let o of n)
        o(e); }
var tl = new Map;
function Ig(e, t) { return tl.set(e, t), () => tl.delete(e); }
var Np = !1, Eg = (e, t, n, o) => { };
function rM(e, t, n, o) { Eg(e, t, n, o); }
function Dg() { Np || (Eg = (e, t, n, o) => { let r = e[A].get(at); tl.get(r)?.(t, n, o); }, Np = !0); }
var ct = new w(""), Cg = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = D(hr);
    contract = D(mu);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { oM(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = V({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function Kn(e) { return (e.flags & 32) === 32; }
var Tg = "__nghData__", Ts = Tg, Mg = "__nghDeferData__", Ms = Mg;
function iM(e) { return e === Tg || e === Mg; }
var Mn = "ngh", Ng = "nghm", _g = () => null;
function sM(e, t, n = !1) { let o = e.getAttribute(Mn); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(Jt, null, { optional: !0 });
    u !== null && (c = u.get(Ts, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, Ns(l, 0, e.nextSibling)), a ? e.setAttribute(Mn, a) : e.removeAttribute(Mn), l; }
function wg() { _g = sM; }
function bg(e, t, n = !1) { return _g(e, t, n); }
function vu(e) { let t = e._lView; return t[y].type === 2 ? null : (He(t) && (t = t[I]), t); }
function aM(e) { return e.textContent?.replace(/\s/gm, ""); }
function cM(e) { let t = st(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = aM(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var Sg = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(Sg || {}), lM = "__ngDebugHydrationInfo__";
function uM(e) { return e[lM] ?? null; }
function Ns(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function nl(e, t) { return e.segmentHeads?.[t] ?? null; }
function gr(e) { return e.get(fu, !1, { optional: !0 }); }
var dM = !1;
function fM() { dM = !1; }
function Ag(e, t) { let n = e.data, o = n[ur]?.[t] ?? null; return o === null && n[Qn]?.[t] && (o = Iu(e, t)), o; }
function pM(e, t) { return e.data[ur]?.[t] !== void 0; }
function Rg(e, t) { return e.data[Qn]?.[t] ?? null; }
function Iu(e, t) { let n = Rg(e, t) ?? [], o = 0; for (let r of n)
    o += r[nt] * (r[dr] ?? 1); return o; }
function kg(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[Zn];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function _s(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[Zn];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!kg(e)?.has(t); }
function ws(e, t) { let n = e[te]; return n !== null && !bo() && !Kn(t) && !_s(n, t.index - I); }
function Eu(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function xg(e) { let t = []; return e !== null && (e.has(4) && t.push(...Gi), e.has(3) && t.push(...Ui)), t; }
function hM(e, t) { let n = t.get(ct), r = t.get(Jt).get(Ms, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][cu];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function gM(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [Gi.join(":;"), Ui.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function Og(e, t) { let n = gM(e), o = t.get(hr); for (let r of n)
    hu(r, o); }
var Pg = () => ({});
function mM(e) { let t = e.get(Jt, null, { optional: !0 }); return t !== null ? t.get(Ms, {}) : {}; }
function Lg() { Pg = mM; }
function yM(e) { return Pg(e); }
function vM(e) { return typeof e == "object" && e.trigger === 5; }
function IM(e) { return e[Ds]?.find(n => vM(n))?.delay ?? null; }
function Sc(e, t) { return e[Ds]?.includes(t) ?? !1; }
function EM(e) { return { data: e, hydrate: { idle: Sc(e, 0), immediate: Sc(e, 1), timer: IM(e), viewport: Sc(e, 2) } }; }
function Fg(e) { let t = yM(e), n = new Map; for (let o in t)
    n.set(o, EM(t[o])); return n; }
function Ac(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === Ng; }
function _p(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function jg(e) { for (let o of e.body.childNodes)
    if (Ac(o))
        return; let t = _p(e.body.previousSibling); if (Ac(t))
    return; let n = _p(e.head.lastChild); if (!Ac(n))
    throw new _(-507, !1); }
function Hg(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = R(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                So(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        R(o);
    }
} }
function ol(e, t, n) { So(0); let o = R(null); try {
    t(e, n);
}
finally {
    R(o);
} }
function Du(e, t, n) { if (Ga(t)) {
    let o = R(null);
    try {
        let r = t.directiveStart, i = t.directiveEnd;
        for (let s = r; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        R(o);
    }
} }
var ot = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e; })(ot || {}), DM = { name: "custom-elements" }, CM = { name: "no-errors-schema" }, Vg = !1;
function TM(e) { Vg = e; }
function MM() { return Vg; }
var Bg = !1;
function NM(e) { Bg = e; }
function _M() { return Bg; }
var hi;
function $g() { if (hi === void 0 && (hi = null, ve.trustedTypes))
    try {
        hi = ve.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return hi; }
function Jn(e) { return $g()?.createHTML(e) || e; }
function wM(e) { return $g()?.createScriptURL(e) || e; }
var gi;
function Cu() { if (gi === void 0 && (gi = null, ve.trustedTypes))
    try {
        gi = ve.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return gi; }
function wp(e) { return Cu()?.createHTML(e) || e; }
function bp(e) { return Cu()?.createScript(e) || e; }
function Sp(e) { return Cu()?.createScriptURL(e) || e; }
var rt = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Hr})`; }
}, rl = class extends rt {
    getTypeName() { return "HTML"; }
}, il = class extends rt {
    getTypeName() { return "Style"; }
}, sl = class extends rt {
    getTypeName() { return "Script"; }
}, al = class extends rt {
    getTypeName() { return "URL"; }
}, cl = class extends rt {
    getTypeName() { return "ResourceURL"; }
};
function lt(e) { return e instanceof rt ? e.changingThisBreaksApplicationSecurity : e; }
function Xn(e, t) { let n = Ug(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Hr})`);
} return n === t; }
function Ug(e) { return e instanceof rt && e.getTypeName() || null; }
function bM(e) { return new rl(e); }
function SM(e) { return new il(e); }
function AM(e) { return new sl(e); }
function RM(e) { return new al(e); }
function kM(e) { return new cl(e); }
function Gg(e) { let t = new ul(e); return xM() ? new ll(t) : t; }
var ll = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(Jn(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, ul = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = Jn(t), n; }
};
function xM() { try {
    return !!new window.DOMParser().parseFromString(Jn(""), "text/html");
}
catch {
    return !1;
} }
var OM = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function mr(e) { return e = String(e), e.match(OM) ? e : "unsafe:" + e; }
function We(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function eo(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var Wg = We("area,br,col,hr,img,wbr"), qg = We("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), zg = We("rp,rt"), PM = eo(zg, qg), LM = eo(qg, We("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), FM = eo(zg, We("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), dl = eo(Wg, LM, FM, PM), Tu = We("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), jM = We("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), HM = We("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), fl = eo(Tu, jM, HM), VM = We("script,style,template"), pl = eo(Tu, We("action,formaction,data,codebase")), hl = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = UM(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = $M(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = Ap(t).toLowerCase(); if (!dl.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !VM.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!fl.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        Tu[a] && (c = mr(c)), this.buf.push(" ", s, '="', Rp(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = Ap(t).toLowerCase(); dl.hasOwnProperty(n) && !Wg.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(Rp(t)); }
};
function BM(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function $M(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw Qg(t); return t; }
function UM(e) { let t = e.firstChild; if (t && BM(e, t))
    throw Qg(t); return t; }
function Ap(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function Qg(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var GM = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, WM = /([^\#-~ |!])/g;
function Rp(e) { return e.replace(/&/g, "&amp;").replace(GM, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(WM, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var mi;
function Zg(e, t) { let n = null; try {
    mi = mi || Gg(e);
    let o = t ? String(t) : "";
    n = mi.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = mi.getInertBodyElement(o);
    } while (o !== i);
    let a = new hl().sanitizeChildren(gl(n) || n);
    return Jn(a);
}
finally {
    if (n) {
        let o = gl(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function gl(e) { return "content" in e && qM(e) ? e.content : null; }
function qM(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var zM = /^>|^->|<!--|-->|--!>|<!-$/g, QM = /(<|>)/g, ZM = "\u200B$1\u200B";
function YM(e) { return e.replace(zM, t => t.replace(QM, ZM)); }
function Mu(e, t) { return e.createText(t); }
function Yg(e, t, n) { e.setValue(t, n); }
function Nu(e, t) { return e.createComment(YM(t)); }
function bs(e, t, n) { return e.createElement(t, n); }
function Gt(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function Kg(e, t, n) { e.appendChild(t, n); }
function kp(e, t, n, o, r) { o !== null ? Gt(e, t, n, o, r) : Kg(e, t, n); }
function yr(e, t, n, o) { e.removeChild(null, t, n, o); }
function Jg(e) { e.textContent = ""; }
function KM(e, t, n) { e.setAttribute(t, "style", n); }
function JM(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function Xg(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && oT(e, t, o), r !== null && JM(e, t, r), i !== null && KM(e, t, i); }
function XM(e) { let t = g(); e.src = "", e.srcdoc = Jn(""), yr(t[C], e); }
var en = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(en || {});
function em(e) { let t = vr(); return t ? wp(t.sanitize(en.HTML, e) || "") : Xn(e, "HTML") ? wp(lt(e)) : Zg(st(), M(e)); }
function tm(e) { let t = vr(); return t ? t.sanitize(en.STYLE, e) || "" : Xn(e, "Style") ? lt(e) : M(e); }
function _u(e) { let t = vr(); return t ? t.sanitize(en.URL, e) || "" : Xn(e, "URL") ? lt(e) : mr(M(e)); }
function wu(e) { let t = vr(); if (t)
    return Sp(t.sanitize(en.RESOURCE_URL, e) || ""); if (Xn(e, "ResourceURL"))
    return Sp(lt(e)); throw new _(904, !1); }
function nm(e) { let t = vr(); if (t)
    return bp(t.sanitize(en.SCRIPT, e) || ""); if (Xn(e, "Script"))
    return bp(lt(e)); throw new _(905, !1); }
function om(e) { return Jn(e[0]); }
function rm(e) { return wM(e[0]); }
var eN = new Set(["embed", "frame", "iframe", "media", "script"]), tN = new Set(["base", "link", "script"]);
function nN(e, t) { return t === "src" && eN.has(e) || t === "href" && tN.has(e) || t === "xlink:href" && e === "script" ? wu : _u; }
function im(e, t, n) { return nN(t, n)(e); }
function vr() { let e = g(); return e && e[Ze].sanitizer; }
var yi = new Set(["attributename"]), oN = { iframe: new Set(["sandbox", "allow", "allowfullscreen", "referrerpolicy", "csp", "fetchpriority"]), animate: yi, set: yi, animatemotion: yi, animatetransform: yi };
function sm(e, t, n) { let o = t.toLowerCase(), r = n.toLowerCase(); if (!oN[o]?.has(r))
    return e; let i = _e(); if (i.type !== 2)
    return e; let s = g(); if (o === "iframe") {
    let c = ne(i, s);
    XM(c);
} let a = !1; throw new _(-910, a); }
function rN() { return Qe([]); }
function am(e) { return e.ownerDocument.defaultView; }
function cm(e) { return e.ownerDocument; }
function bu(e) { return e.ownerDocument.body; }
var iN = "\uFFFD";
function En(e) { return e instanceof Function ? e() : e; }
function sN(e, t, n) { let o = e.length; for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1)
        return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
        let i = t.length;
        if (r + i === o || e.charCodeAt(r + i) <= 32)
            return r;
    }
    n = r + 1;
} }
var lm = "ng-template";
function aN(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && sN(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (Su(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function Su(e) { return e.type === 4 && e.value !== lm; }
function cN(e, t, n) { let o = e.type === 4 && !n ? lm : e.value; return t === o; }
function lN(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? fN(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !Oe(o) && !Oe(c))
            return !1;
        if (s && Oe(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !cN(e, c, n) || c === "" && t.length === 1) {
                if (Oe(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !aN(e, r, c, n)) {
                if (Oe(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = uN(c, r, Su(e), n);
            if (u === -1) {
                if (Oe(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (Oe(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return Oe(o) || s; }
function Oe(e) { return (e & 1) === 0; }
function uN(e, t, n, o) { if (t === null)
    return -1; let r = 0; if (o || !n) {
    let i = !1;
    for (; r < t.length;) {
        let s = t[r];
        if (s === e)
            return r;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++r];
            for (; typeof a == "string";)
                a = t[++r];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                r += 4;
                continue;
            }
        }
        r += i ? 1 : 2;
    }
    return -1;
}
else
    return pN(t, e); }
function um(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (lN(e, t[o], n))
        return !0; return !1; }
function dN(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function fN(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (Hh(n))
        return t;
} return e.length; }
function pN(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function hN(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function xp(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function gN(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !Oe(s) && (t += xp(i, r), r = ""), o = s, i = i || !Oe(o);
    n++;
} return r !== "" && (t += xp(i, r)), t; }
function mN(e) { return e.map(gN).join(","); }
function yN(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!Oe(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var O = {};
function Au(e, t, n, o, r, i, s, a, c, l, u) { let d = I + o, f = d + r, p = vN(d, f), h = typeof l == "function" ? l() : l; return p[y] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function vN(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : O); return n; }
function dm(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = Au(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function Ss(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[H] = r, d[b] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[b] & 2048) && (d[b] |= 2048), qa(d), d[q] = d[Co] = e, d[L] = n, d[Ze] = s || e && e[Ze], d[C] = a || e && e[C], d[A] = c || e && e[A] || null, d[se] = i, d[ln] = NT(), d[te] = u, d[$a] = l, d[Q] = t.type == 2 ? e[Q] : d, d; }
function IN(e, t, n) { let o = ne(t, e), r = dm(n), i = e[Ze].rendererFactory, s = ku(e, Ss(e, r, null, Ru(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function Ru(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function Ir(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function ku(e, t) { return e[yt] ? e[Do][ie] = t : e[yt] = t, e[Do] = t, t; }
function fm(e = 1) { pm(N(), g(), oe() + e, !1); }
function pm(e, t, n, o) { if (!o)
    if ((t[b] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && Mi(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && Ni(t, i, 0, n);
    } Dt(n); }
var As = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(As || {});
function Zo(e, t, n, o) { let r = R(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & As.SignalBased) !== 0 && (c = t[i][pt]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : Rh(t, c, i, o);
}
finally {
    R(r);
} }
var Wi = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(Wi || {}), ml;
function xu(e, t) { return ml(e, t); }
function EN(e) { ml === void 0 && (ml = e()); }
function qi(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function Nn(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function DN(e) { let t = Nn(e, "transition-property"), n = Nn(e, "transition-duration"), o = Nn(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = qi(o[i]) + qi(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function CN(e) { let t = Nn(e, "animation-name"), n = Nn(e, "animation-delay"), o = Nn(e, "animation-duration"), r = { animationName: "", propertyName: void 0, duration: 0 }; for (let i = 0; i < t.length; i++) {
    let s = qi(n[i]) + qi(o[i]);
    s > r.duration && (r.animationName = t[i], r.duration = s);
} return r; }
function hm(e, t) { return e !== void 0 && e.duration > t.duration; }
function gm(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function TN(e, t) { let n = getComputedStyle(e), o = CN(n), r = DN(n), i = o.duration > r.duration ? o : r; hm(t.get(e), i) || gm(i) && t.set(e, i); }
function mm(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? TN(e, t) : MN(e, t, o); }
function MN(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming(), s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c, l;
    r.animationName ? l = r.animationName : c = r.transitionProperty, a >= o.duration && (o = { animationName: l, propertyName: c, duration: a });
} hm(t.get(e), o) || gm(o) && t.set(e, o); }
var Wt = new Set, Rs = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(Rs || {}), to = new w(""), Op = new Set;
function Z(e) { Op.has(e) || (Op.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var ym = !1, yl = class extends Xl {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) { super(), this.__isAsync = t, Ba() && (this.destroyRef = D(fn, { optional: !0 }) ?? void 0, this.pendingTasks = D(Tt, { optional: !0 }) ?? void 0); }
    emit(t) { let n = R(null); try {
        super.next(t);
    }
    finally {
        R(n);
    } }
    subscribe(t, n, o) { let r = t, i = n || (() => null), s = o; if (t && typeof t == "object") {
        let c = t;
        r = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c);
    } this.__isAsync && (i = this.wrapInTimeout(i), r && (r = this.wrapInTimeout(r)), s && (s = this.wrapInTimeout(s))); let a = super.subscribe({ next: r, error: i, complete: s }); return t instanceof eu && t.add(a), a; }
    wrapInTimeout(t) { return n => { let o = this.pendingTasks?.add(); setTimeout(() => { try {
        t(n);
    }
    finally {
        o !== void 0 && this.pendingTasks?.remove(o);
    } }); }; }
}, et = yl;
function vm(e) { let t, n; function o() { e = Ro; try {
    n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
}
catch { } } return t = setTimeout(() => { e(), o(); }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => { e(), o(); })), () => o(); }
function Pp(e) { return queueMicrotask(() => e()), () => { e = Ro; }; }
var Ou = "isAngularZone", zi = Ou + "_ID", NN = 0, j = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new et(!1);
    onMicrotaskEmpty = new et(!1);
    onStable = new et(!1);
    onError = new et(!1);
    constructor(t) { let { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: o = !1, shouldCoalesceRunChangeDetection: r = !1, scheduleInRootZone: i = ym } = t; if (typeof Zone > "u")
        throw new _(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !r && o, s.shouldCoalesceRunChangeDetection = r, s.callbackScheduled = !1, s.scheduleInRootZone = i, bN(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(Ou) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new _(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new _(909, !1); }
    run(t, n, o) { return this._inner.run(t, n, o); }
    runTask(t, n, o, r) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + r, t, _N, Ro, Ro); try {
        return i.runTask(s, n, o);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(t, n, o) { return this._inner.runGuarded(t, n, o); }
    runOutsideAngular(t) { return this._outer.run(t); }
}, _N = {};
function Pu(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function wN(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function t() { vm(() => { e.callbackScheduled = !1, vl(e), e.isCheckStableRunning = !0, Pu(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { t(); }) : e._outer.run(() => { t(); }), vl(e); }
function bN(e) { let t = () => { wN(e); }, n = NN++; e._inner = e._inner.fork({ name: "angular", properties: { [Ou]: !0, [zi]: n, [zi + n]: !0 }, onInvokeTask: (o, r, i, s, a, c) => { if (SN(c))
        return o.invokeTask(i, s, a, c); try {
        return Lp(e), o.invokeTask(i, s, a, c);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), Fp(e);
    } }, onInvoke: (o, r, i, s, a, c, l) => { try {
        return Lp(e), o.invoke(i, s, a, c, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !AN(c) && t(), Fp(e);
    } }, onHasTask: (o, r, i, s) => { o.hasTask(i, s), r === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, vl(e), Pu(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (o, r, i, s) => (o.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function vl(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function Lp(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function Fp(e) { e._nesting--, Pu(e); }
var kn = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new et;
    onMicrotaskEmpty = new et;
    onStable = new et;
    onError = new et;
    run(t, n, o) { return t.apply(n, o); }
    runGuarded(t, n, o) { return t.apply(n, o); }
    runOutsideAngular(t) { return t(); }
    runTask(t, n, o, r) { return t.apply(n, o); }
};
function SN(e) { return Im(e, "__ignore_ng_zone__"); }
function AN(e) { return Im(e, "__scheduler_tick__"); }
function Im(e, t) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0; }
function Em(e = "zone.js", t) { return e === "noop" ? new kn : e === "zone.js" ? new j(t) : e; }
var ks = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Lu = [0, 1, 2, 3], Fu = (() => { class e {
    ngZone = D(j);
    scheduler = D(Je);
    errorHandler = D(li, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { D(to, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && x(16), this.executing = !0; for (let o of Lu)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && x(17); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[Ot] ??= []).push(n), ni(o), o[b] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(Rs.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Yo = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, o, r, i, s = null) { this.impl = t, this.hooks = n, this.view = o, this.once = r, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[Ot]; t && (this.view[Ot] = t.filter(n => n !== this)); }
};
function Dm(e, t) { let n = t?.injector ?? D(De); return typeof ngServerMode < "u" && ngServerMode ? xs : (Z("NgAfterRender"), Cm(e, n, t, !1)); }
function ju(e, t) { let n = t?.injector ?? D(De); return typeof ngServerMode < "u" && ngServerMode ? xs : (Z("NgAfterNextRender"), Cm(e, n, t, !0)); }
function RN(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function Cm(e, t, n, o) { let r = t.get(ks); r.impl ??= t.get(Fu); let i = t.get(to, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(fn) : null, a = t.get(ui, null, { optional: !0 }), c = new Yo(r.impl, RN(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var xs = { destroy() { } }, Os = new w("", { providedIn: "root", factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null }) });
function Tm(e, t, n) { let o = e.get(Os); if (Array.isArray(t))
    for (let r of t)
        o.queue.add(r), n?.detachedLeaveAnimationFns?.push(r);
else
    o.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); o.scheduler && o.scheduler(e); }
function kN(e, t) { let n = e.get(Os); if (t.detachedLeaveAnimationFns) {
    for (let o of t.detachedLeaveAnimationFns)
        n.queue.delete(o);
    t.detachedLeaveAnimationFns = void 0;
} }
function xN(e) { let t = e.get(Os); t.isScheduled || (ju(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: e }), t.isScheduled = !0); }
function Ps(e) { let t = e.get(Os); t.scheduler = xN, t.scheduler(e); }
function Hu(e, t) { for (let [n, o] of t)
    Tm(e, o.animateFns); }
function jp(e, t, n, o) { let r = e?.[Ke]?.enter; t !== null && r && r.has(n.index) && Hu(o, r); }
function Dn(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    K(r) ? c = r : Y(r) && (l = !0, r = r[H]);
    let u = k(r);
    e === 0 && o !== null ? (jp(a, o, i, n), s == null ? Kg(t, o, u) : Gt(t, o, u, s || null, !0)) : e === 1 && o !== null ? (jp(a, o, i, n), Gt(t, o, u, s || null, !0)) : e === 2 ? Hp(a, i, n, d => { yr(t, u, l, d); }) : e === 3 && Hp(a, i, n, () => { t.destroyNode(u); }), c != null && VN(t, e, n, c, i, o, s);
} }
function Mm(e, t) { Nm(e, t), t[H] = null, t[se] = null; }
function ON(e, t, n, o, r, i) { o[H] = r, o[se] = t, Ls(e, o, n, 1, r, i); }
function Nm(e, t) { t[Ze].changeDetectionScheduler?.notify(9), Ls(e, t, t[C], 2, null, null); }
function PN(e) { let t = e[yt]; if (!t)
    return Rc(e[y], e); for (; t;) {
    let n = null;
    if (Y(t))
        n = t[yt];
    else {
        let o = t[F];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[ie] && t !== e;)
            Y(t) && Rc(t[y], t), t = t[q];
        t === null && (t = e), Y(t) && Rc(t[y], t), n = t && t[ie];
    }
    t = n;
} }
function Vu(e, t) { let n = e[Pt], o = n.indexOf(t); n.splice(o, 1); }
function Er(e, t) { if (vt(t))
    return; let n = t[C]; n.destroyNode && Ls(e, t, n, 3, null, null), PN(t); }
function Rc(e, t) { if (vt(t))
    return; let n = R(null); try {
    t[b] &= -129, t[b] |= 256, t[Ne] && go(t[Ne]), jN(e, t), FN(e, t), t[y].type === 1 && t[C].destroy();
    let o = t[Ye];
    if (o !== null && K(t[q])) {
        o !== t[q] && Vu(o, t);
        let r = t[je];
        r !== null && r.detachView(e);
    }
    Jc(t);
}
finally {
    R(n);
} }
function Hp(e, t, n, o) { let r = e?.[Ke]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); e && Wt.add(e), Tm(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        r.detachedLeaveAnimationFns = void 0;
    }
    r.running = Promise.allSettled(a), LN(e, o);
}
else
    e && Wt.delete(e), o(!1); }, r); }
function LN(e, t) { let n = e[Ke]?.running; if (n) {
    n.then(() => { e[Ke].running = void 0, Wt.delete(e), t(!0); });
    return;
} t(!1); }
function FN(e, t) { let n = e.cleanup, o = t[xt]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[xt] = null); let r = t[Ua]; if (r !== null) {
    t[Ua] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[To]; if (i !== null) {
    t[To] = null;
    for (let s of i)
        s.destroy();
} }
function jN(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof Ut)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    x(4, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        x(5, a, c);
                    }
                }
            else {
                x(4, r, i);
                try {
                    i.call(r);
                }
                finally {
                    x(5, r, i);
                }
            }
        }
    } }
function Bu(e, t, n) { return _m(e, t.parent, n); }
function _m(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[H]; if (ge(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === ot.None || r === ot.Emulated)
        return null;
} return ne(o, n); }
function wm(e, t, n) { return Sm(e, t, n); }
function bm(e, t, n) { return e.type & 40 ? ne(e, n) : null; }
var Sm = bm, Il;
function Am(e, t) { Sm = e, Il = t; }
function $u(e, t, n, o) { let r = Bu(e, o, t), i = t[C], s = o.parent || t[se], a = wm(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            kp(i, r, n[c], a, !1);
    else
        kp(i, r, n, a, !1); Il !== void 0 && Il(i, o, t, n, r); }
function Bt(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return ne(t, e);
    if (n & 4)
        return Qi(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return Bt(e, o);
        {
            let r = e[t.index];
            return K(r) ? Qi(-1, r) : k(r);
        }
    }
    else {
        if (n & 128)
            return Bt(e, t.next);
        if (n & 32)
            return xu(t, e)() || k(e[t.index]);
        {
            let o = Rm(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = Ft(e[Q]);
                return Bt(r, o);
            }
            else
                return Bt(e, t.next);
        }
    }
} return null; }
function Rm(e, t) { if (t !== null) {
    let o = e[Q][se], r = t.projection;
    return o.projection[r];
} return null; }
function Qi(e, t) { let n = F + e + 1; if (n < t.length) {
    let o = t[n], r = o[y].firstChild;
    if (r !== null)
        return Bt(o, r);
} return t[ke]; }
function Uu(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[A];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && we(k(c), o), n.flags |= 2), !Kn(n))
        if (l & 8)
            Uu(e, t, n.child, o, r, i, !1), Dn(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = xu(n, o), d;
            for (; d = u();)
                Dn(t, e, a, r, d, n, i, o);
            Dn(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? km(e, t, o, n, r, i) : Dn(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function Ls(e, t, n, o, r, i) { Uu(n, o, e.firstChild, t, r, i, !1); }
function HN(e, t, n) { let o = t[C], r = Bu(e, n, t), i = n.parent || t[se], s = wm(i, n, t); km(o, 0, t, n, r, s); }
function km(e, t, n, o, r, i) { let s = n[Q], c = s[se].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        Dn(t, e, n[A], r, u, o, i, n);
    }
else {
    let l = c, u = s[q];
    zo(o) && (l.flags |= 128), Uu(e, t, l, u, r, i, !0);
} }
function VN(e, t, n, o, r, i, s) { let a = o[ke], c = k(o); a !== c && Dn(t, e, n, i, a, r, s); for (let l = F; l < o.length; l++) {
    let u = o[l];
    Ls(u[y], u, e, t, i, a);
} }
function BN(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : Wi.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= Wi.Important), e.setStyle(n, o, r, i));
} }
function xm(e, t, n, o, r) { let i = oe(), s = o & 2; try {
    Dt(-1), s && t.length > I && pm(e, t, I, !1), x(s ? 2 : 0, r, n), n(o, r);
}
finally {
    Dt(i), x(s ? 3 : 1, r, n);
} }
function Fs(e, t, n) { qN(e, t, n), (n.flags & 64) === 64 && zN(e, t, n); }
function no(e, t, n = ne) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function $N(e, t, n, o) { let i = o.get(lu, gg) || n === ot.ShadowDom, s = e.selectRootElement(t, i); return UN(s), s; }
function UN(e) { Om(e); }
var Om = () => null;
function GN(e) { Xh(e) ? Jg(e) : cM(e); }
function Pm() { Om = GN; }
function WN(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function Gu(e, t, n, o, r, i) { let s = t[y]; if (Bs(e, s, t, n, o)) {
    ge(e) && Lm(t, e.index);
    return;
} e.type & 3 && (n = WN(n)), Wu(e, t, n, o, r, i); }
function Wu(e, t, n, o, r, i) { if (e.type & 3) {
    let s = ne(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function Lm(e, t) { let n = le(t, e); n[b] & 16 || (n[b] |= 64); }
function qN(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; ge(n) && IN(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || Hi(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = qo(t, e, s, n);
    if (we(c, t), i !== null && YN(t, s - o, c, a, n, i), me(a)) {
        let l = le(n.index, t);
        l[L] = qo(t, e, s, n);
    }
} }
function zN(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = Xf(); try {
    Dt(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        cc(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && QN(c, l);
    }
}
finally {
    Dt(-1), cc(s);
} }
function QN(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function qu(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        um(t, i.selectors, !1) && (o ??= [], me(i) ? o.unshift(i) : o.push(i));
    } return o; }
function ZN(e, t, n, o, r, i) { let s = ne(e, t); js(t[C], s, i, e.value, n, o, r); }
function js(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? M(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function YN(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        Zo(o, n, c, l);
    } }
function Hs(e, t, n, o, r) { let i = I + n, s = t[y], a = r(s, t, e, o, n); t[i] = a, Ve(e, !0); let c = e.type === 2; return c ? (Xg(t[C], a, e), (zf() === 0 || un(e)) && we(a, t), Qf()) : we(a, t), Ao() && (!c || !Kn(e)) && $u(s, t, a, e), e; }
function Vs(e) { let t = e; return tc() ? nc() : (t = t.parent, Ve(t, !1)), t; }
function Fm(e, t, n) { return (e === null || me(e)) && (n = No(n[t.index])), n[C]; }
function zu(e, t) { let n = e[A]; if (!n)
    return; let o; try {
    o = n.get(Ct, null);
}
catch {
    o = null;
} o?.(t); }
function Bs(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        Zo(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        Zo(u, l, o, r), a = !0;
    } return a; }
function KN(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], m = d[f + 1];
            Zo(h, n[p], m, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (Zo(o, n[s], r, i), l = !0), l; }
function JN(e, t) { let n = le(t, e), o = n[y]; XN(o, n); let r = n[H]; r !== null && n[te] === null && (n[te] = bg(r, n[A])), x(18), $s(o, n, n[L]), x(19, n[L]); }
function XN(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function $s(e, t, n) { ai(t); try {
    let o = e.viewQuery;
    o !== null && ol(1, o, n);
    let r = e.template;
    r !== null && xm(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[je]?.finishViewCreation(e), e.staticContentQueries && Hg(e, t), e.staticViewQueries && ol(2, e.viewQuery, n);
    let i = e.components;
    i !== null && e_(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[b] &= -5, ci();
} }
function e_(e, t) { for (let n = 0; n < t.length; n++)
    JN(e, t[n]); }
function oo(e, t, n, o) { let r = R(null); try {
    let i = t.tView, a = e[b] & 4096 ? 4096 : 16, c = Ss(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[Ye] = l;
    let u = e[je];
    return u !== null && (c[je] = u.createEmbeddedView(i)), $s(i, c, n), c;
}
finally {
    R(r);
} }
function qt(e, t) { return !t || t.firstChild === null || zo(e); }
function xn(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(k(i)), K(i) && Us(i, o);
    let s = n.type;
    if (s & 8)
        xn(e, t, n.child, o);
    else if (s & 32) {
        let a = xu(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = Rm(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = Ft(t[Q]);
            xn(c[y], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function Us(e, t) { for (let n = F; n < e.length; n++) {
    let o = e[n], r = o[y].firstChild;
    r !== null && xn(o[y], o, r, t);
} e[ke] !== e[H] && t.push(e[ke]); }
function jm(e) { if (e[Ot] !== null) {
    for (let t of e[Ot])
        t.impl.addSequence(t);
    e[Ot].length = 0;
} }
var Hm = [];
function t_(e) { return e[Ne] ?? n_(e); }
function n_(e) { let t = Hm.pop() ?? Object.create(r_); return t.lView = e, t; }
function o_(e) { e.lView[Ne] !== e && (e.lView = null, Hm.push(e)); }
var r_ = Le(W({}, ba), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { ni(e.lView); }, consumerOnSignalRead() { this.lView[Ne] = this; } });
function i_(e) { let t = e[Ne] ?? Object.create(s_); return t.lView = e, t; }
var s_ = Le(W({}, ba), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = Ft(e.lView); for (; t && !Vm(t[y]);)
        t = Ft(t); t && ei(t); }, consumerOnSignalRead() { this.lView[Ne] = this; } });
function Vm(e) { return e.type !== 2; }
function Bm(e) { if (e[To] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[To])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[b] & 8192);
} }
var a_ = 100;
function $m(e, t = 0) { let o = e[Ze].rendererFactory, r = !1; r || o.begin?.(); try {
    c_(e, t);
}
finally {
    r || o.end?.();
} }
function c_(e, t) { let n = rc(); try {
    ic(!0), El(e, t);
    let o = 0;
    for (; wo(e);) {
        if (o === a_)
            throw new _(103, !1);
        o++, El(e, 1);
    }
}
finally {
    ic(n);
} }
function Um(e, t, n, o) { if (vt(t))
    return; let r = t[b], i = !1, s = !1; ai(t); let a = !0, c = null, l = null; i || (Vm(e) ? (l = t_(t), c = ho(l)) : Tf() === null ? (a = !1, l = i_(t), c = ho(l)) : t[Ne] && (go(t[Ne]), t[Ne] = null)); try {
    qa(t), sc(e.bindingStartIndex), n !== null && xm(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && Mi(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && Ni(t, p, 0, null), Mc(t, 0);
        }
    if (s || l_(t), Bm(t), Gm(t, 0), e.contentQueries !== null && Hg(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && Mi(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && Ni(t, p, 1), Mc(t, 1);
        }
    d_(e, t);
    let d = e.components;
    d !== null && qm(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && ol(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && Mi(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && Ni(t, p, 2), Mc(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[Xr]) {
        for (let p of t[Xr])
            p();
        t[Xr] = null;
    }
    i || (jm(t), t[b] &= -73);
}
catch (u) {
    throw i || ni(t), u;
}
finally {
    l !== null && (Fr(l, c), a && o_(l)), ci();
} }
function Gm(e, t) { for (let n = ig(e); n !== null; n = sg(n))
    for (let o = F; o < n.length; o++) {
        let r = n[o];
        Wm(r, t);
    } }
function l_(e) { for (let t = ig(e); t !== null; t = sg(t)) {
    if (!(t[b] & 2))
        continue;
    let n = t[Pt];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        ei(r);
    }
} }
function u_(e, t, n) { x(18); let o = le(t, e); Wm(o, n), x(19, o[L]); }
function Wm(e, t) { Bf(e) && El(e, t); }
function El(e, t) { let o = e[y], r = e[b], i = e[Ne], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && jr(i)), s ||= !1, i && (i.dirty = !1), e[b] &= -9217, s)
    Um(o, e, o.template, e[L]);
else if (r & 8192) {
    let a = R(null);
    try {
        Bm(e), Gm(e, 1);
        let c = o.components;
        c !== null && qm(e, c, 1), jm(e);
    }
    finally {
        R(a);
    }
} }
function qm(e, t, n) { for (let o = 0; o < t.length; o++)
    u_(e, t[o], n); }
function d_(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                Dt(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                Jf(s, i);
                let c = t[i];
                x(24, c), a(2, c), x(25, c);
            }
        }
    }
    finally {
        Dt(-1);
    } }
function Dr(e, t) { let n = rc() ? 64 : 1088; for (e[Ze].changeDetectionScheduler?.notify(t); e;) {
    e[b] |= n;
    let o = Ft(e);
    if (He(e) && !o)
        return e;
    e = o;
} return null; }
function zm(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function Qm(e, t) { let n = F + t; if (n < e.length)
    return e[n]; }
function ro(e, t, n, o = !0) { let r = t[y]; if (f_(r, t, e, n), o) {
    let s = Qi(n, e), a = t[C], c = a.parentNode(e[ke]);
    c !== null && ON(r, e[se], a, t, c, s);
} let i = t[te]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function Qu(e, t) { let n = Ko(e, t); return n !== void 0 && Er(n[y], n), n; }
function Ko(e, t) { if (e.length <= F)
    return; let n = F + t, o = e[n]; if (o) {
    let r = o[Ye];
    r !== null && r !== e && Vu(r, o), t > 0 && (e[n - 1][ie] = o[ie]);
    let i = yo(e, F + t);
    Mm(o[y], o);
    let s = i[je];
    s !== null && s.detachView(i[y]), o[q] = null, o[ie] = null, o[b] &= -129;
} return o; }
function f_(e, t, n, o) { let r = F + o, i = n.length; o > 0 && (n[r - 1][ie] = t), o < i - F ? (t[ie] = n[r], Fa(n, F + o, t)) : (n.push(t), t[ie] = null), t[q] = n; let s = t[Ye]; s !== null && n !== s && Zm(s, t); let a = t[je]; a !== null && a.insertView(e), ti(t), t[b] |= 128; }
function Zm(e, t) { let n = e[Pt], o = t[q]; if (Y(o))
    e[b] |= 2;
else {
    let r = o[q][Q];
    t[Q] !== r && (e[b] |= 2);
} n === null ? e[Pt] = [t] : n.push(t); }
var wt = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[y]; return xn(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[L]; }
    set context(t) { this._lView[L] = t; }
    get destroyed() { return vt(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[q];
        if (K(t)) {
            let n = t[Mo], o = n ? n.indexOf(this) : -1;
            o > -1 && (Ko(t, o), yo(n, o));
        }
        this._attachedToViewContainer = !1;
    } Er(this._lView[y], this._lView); }
    onDestroy(t) { oi(this._lView, t); }
    markForCheck() { Dr(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[b] &= -129; }
    reattach() { ti(this._lView), this._lView[b] |= 128; }
    detectChanges() { this._lView[b] |= 1024, $m(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new _(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = He(this._lView), n = this._lView[Ye]; n !== null && !t && Vu(n, this._lView), Nm(this._lView[y], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new _(902, !1); this._appRef = t; let n = He(this._lView), o = this._lView[Ye]; o !== null && !n && Zm(o, this._lView), ti(this._lView); }
};
function p_(e) { return wo(e._lView) || !!(e._lView[b] & 64); }
function h_(e) { ei(e._lView); }
var Jo = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = g_;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = oo(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new wt(i); }
} return e; })();
function g_() { return Gs(T(), g()); }
function Gs(e, t) { return e.type & 4 ? new Jo(t, e, Wn(e, t)) : null; }
var Dl = "<-- AT THIS LOCATION";
function m_(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function y_(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${D_(e, t, !1)}

`, r = T_();
    throw new _(-502, n + o + r);
}
function Ym(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${C_(e)}

`, o = t + n + M_();
    return new _(-503, o);
}
function v_(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${Zi(r)}"`);
    } return t.join(" "); }
var I_ = new Set(["ngh", "ng-version", "ng-server-context"]);
function E_(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    I_.has(o.name) || t.push(`${o.name}="${Zi(o.value)}"`);
} return t.join(" "); }
function kc(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = v_(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${m_(e.type)})`;
} }
function bi(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = E_(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? Zi(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${Zi(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function D_(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + kc(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + kc(t) + `
`, r += `  <!-- container -->  ${Dl}
`) : r += "  " + kc(t) + `  ${Dl}
`, r += `  \u2026
`;
    let i = t.type ? Bu(e[y], t, e) : null;
    return i && (r = bi(i, `
` + r)), r;
}
function C_(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + bi(o.previousSibling) + `
`), n += "  " + bi(o) + `  ${Dl}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = bi(o.parentNode, `
` + n)), n;
}
function T_(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function M_() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function N_(e) { return e.replace(/\s+/gm, ""); }
function Zi(e, t = 50) { return e ? (e = N_(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function Km(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? bm(e, t, n) : k(n[r]); }
function Jm(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            Gt(e, s, l, a, !1);
        }
} }
function tn(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = Zu(e, t, n, o, r), Kf() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = dn();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return Ve(i, !0), i; }
function Zu(e, t, n, o, r) { let i = Yf(), s = tc(), a = s ? i : i && i.parent, c = e.data[t] = w_(e, a, n, t, o, r); return __(e, c, i, s), c; }
function __(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function w_(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return bo() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function Xm(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        ey(o) || b_(o, t) && S_(o) === null && A_(o, t.index);
    } }
function ey(e) { return !(e.type & 64); }
function b_(e, t) { return ey(t) || e.index > t.index; }
function S_(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function A_(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (Am(Km, Jm), e.insertBeforeIndex = t); }
function Po(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function R_(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function k_(e, t) { let n = e.insertBeforeIndex; n === null ? (Am(Km, Jm), n = e.insertBeforeIndex = [null, t]) : (bf(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function x_(e, t, n) { let o = Zu(e, n, 64, null, null); return Xm(t, o), o; }
function Ws(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function O_(e) { return e >>> 17; }
function P_(e) { return (e & 131070) >>> 1; }
function L_(e, t, n) { return e | t << 17 | n << 1; }
function ty(e) { return e === -1; }
function Yu(e, t, n) { e.index = 0; let o = Ws(t, n); o !== null ? e.removes = t.remove[o] : e.removes = P; }
function Yi(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[y].data[n];
        return Yu(e, o, e.lView), Yi(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), Yi(e)); }
function F_() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return Yu(e, n.value, o), Yi.bind(null, e); } return t; }
function j_(e, t) { let n = { stack: [], index: -1, lView: t }; return Yu(n, e, t), Yi.bind(null, n); }
var H_ = new RegExp(`^(\\d+)*(${au}|${su})*(.*)`);
function V_(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function B_(e) { let t = e.match(H_), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function $_(e) { return !e.prev && e.parent?.type === 8; }
function xc(e) { return e.index - I; }
function io(e, t) { return !(e.type & 144) && !!t[e.index] && ny(k(t[e.index])); }
function ny(e) { return !!e && !e.isConnected; }
function oy(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function U_(e, t, n) { let r = e.data[fr]?.[n]; return r ? ry(r, t) : null; }
function Cr(e, t, n, o) { let r = xc(o), i = oy(e, r); if (i === void 0) {
    let s = e.data[fr];
    if (s?.[r])
        i = ry(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if ($_(o)) {
            let l = xc(o.parent);
            i = nl(e, l);
        }
        else {
            let l = ne(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = xc(c), d = nl(e, u);
                if (c.type === 2 && d) {
                    let p = Iu(e, u) + 1;
                    i = qs(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function qs(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function G_(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case pg:
                n = n.firstChild;
                break;
            case hg:
                n = n.nextSibling;
                break;
        }
} return n; }
function ry(e, t) { let [n, ...o] = B_(e), r; if (n === su)
    r = t[Q][H];
else if (n === au)
    r = bu(t[Q][H]);
else {
    let i = Number(n);
    r = k(t[i + I]);
} return G_(r, o); }
function Cl(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return W_(e, t); {
    let n = t.parentElement, o = Cl(e, n), r = Cl(n.firstChild, t);
    return !o || !r ? null : [...o, pg, ...r];
} }
function W_(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(hg); return o == null ? null : n; }
function Vp(e, t, n) { let o = Cl(e, t); return o === null ? null : V_(n, o); }
function iy(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (io(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = su, i = t[Q][H]) : (r = o.index, i = k(t[r]), s = M(r - I)); let a = k(t[e.index]); if (e.type & 44) {
    let l = Bt(t, e);
    l && (a = l);
} let c = Vp(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = Vp(l, a, au), c === null)
        throw y_(t, e);
} return c; }
function sy(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: q_ }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function q_(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var ay = !1, cy = () => { };
function Ku(e) { ay = e; }
function zs() { return ay; }
function z_(e, t, n, o) { cy(e, t, n, o); }
function ly() { cy = J_; }
function uy(e) { return e = e ?? D(De), e.get(uu, !1); }
function dy(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = Q_(e), t.i18nChildren.set(e, n)), n; }
function Q_(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
    case 1:
    case 2: {
        for (let r of o.children)
            n(r);
        break;
    }
    case 3: {
        for (let r of o.cases)
            for (let i of r)
                n(i);
        break;
    }
} } for (let o = I; o < e.bindingStartIndex; o++) {
    let r = e.data[o];
    if (!(!r || !r.ast))
        for (let i of r.ast)
            n(i);
} return t.size === 0 ? null : t; }
function fy(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[y], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && eg(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return Tl(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function Tl(e, t, n, o) { let r = null; for (let i of o) {
    let s = Y_(e, t, n, i);
    s && (Z_(r, s) && t.disjointNodes.add(i.index - I), r = s);
} return r; }
function Z_(e, t) { return e && e.nextSibling !== t; }
function Y_(e, t, n, o) { let r = k(e[o.index]); if (!r || ny(r))
    return t.disconnectedNodes.add(o.index - I), null; let i = r; switch (o.kind) {
    case 0: {
        Eu(n, i);
        break;
    }
    case 1:
    case 2: {
        Tl(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), Tl(e, t, n, o.cases[a]);
        }
        break;
    }
} return K_(e, o); }
function K_(e, t) { let o = e[y].data[t.index]; return fs(o) ? Bt(e, o) : t.kind === 3 ? j_(o, e)() ?? k(e[t.index]) : k(e[t.index]) ?? null; }
function jt(e, t) { e.currentNode = t; }
function ko(e, t, n) { let o = n.index - I, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function Oc(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function Pc(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function J_(e, t, n, o) { let r = e[te]; if (!r || !zs() || n && (eg(n) || _s(r, n.index - I)))
    return; let i = e[y], s = i.data[t]; function a() { if (ty(o)) {
    let p = Cr(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = kg(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[Is]?.[t - I] ?? [], f = r.dehydratedIcuData ??= new Map; gn({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function gn(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = U_(e.hydrationInfo, e.lView, r.index - I);
        i && (o = Pc(t, i)), gn(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - I))
        return;
    switch (n.kind) {
        case 0: {
            let o = ko(e, t, n);
            jt(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            gn(e, Pc(t, t.currentNode?.firstChild ?? null), n.children);
            let o = ko(e, t, n);
            jt(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - I, { hydrationInfo: r } = e, i = Ag(r, o);
            switch (n.type) {
                case 0: {
                    let s = ko(e, t, n);
                    if (pM(r, o)) {
                        gn(e, t, n.children);
                        let a = Oc(t, 1);
                        jt(t, a);
                    }
                    else if (gn(e, Pc(t, t.currentNode?.firstChild ?? null), n.children), jt(t, s?.nextSibling ?? null), i !== null) {
                        let a = Oc(t, i + 1);
                        jt(t, a);
                    }
                    break;
                }
                case 1: {
                    ko(e, t, n);
                    let s = Oc(t, i + 1);
                    jt(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                gn(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = ko(e, t, n);
            jt(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var py = () => { };
function X_(e, t, n) { py(e, t, n); }
function hy() { py = ew; }
function ew(e, t, n) { let o = e[te]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function tw(e) { let t = e[te]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[C];
        for (let i of o.values())
            nw(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function nw(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - I);
    r && yr(e, r, !1);
} }
function Qs(e) { let t = e[Ee] ?? [], o = e[q][C], r = []; for (let i of t)
    i.data[Es] !== void 0 ? r.push(i) : gy(i, o); e[Ee] = r; }
function ow(e) { let { lContainer: t } = e, n = t[Ee]; if (n === null)
    return; let r = t[q][C]; for (let i of n)
    gy(i, r); }
function gy(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[nt];
    for (; n < r;) {
        let i = o.nextSibling;
        yr(t, o, !1), o = i, n++;
    }
} }
function Zs(e) { Qs(e); let t = e[H]; Y(t) && Ki(t); for (let n = F; n < e.length; n++)
    Ki(e[n]); }
function Ki(e) { tw(e); let t = e[y]; for (let n = I; n < t.bindingStartIndex; n++)
    if (K(e[n])) {
        let o = e[n];
        Zs(o);
    }
    else
        Y(e[n]) && Ki(e[n]); }
function Ju(e) { let t = e._views; for (let n of t) {
    let o = vu(n);
    o !== null && o[H] !== null && (Y(o) ? Ki(o) : Zs(o));
} }
function rw(e, t, n, o) { e !== null && (n.cleanup(t), Zs(e.lContainer), Ju(o)); }
function iw(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[dr] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[nt] > 0 && (i.firstChild = e, e = qs(o[nt], e)), n.push(i);
    } return [e, n]; }
var my = () => null, yy = () => null;
function vy() { my = sw, yy = aw; }
function sw(e, t) { return Ey(e, t) ? e[Ee].shift() : (Qs(e), null); }
function Xo(e, t) { return my(e, t); }
function aw(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = Xo(e, t.tView.ssrId); return n[y].firstUpdatePass && o === null && cw(n, t), o; }
function Iy(e, t, n) { return yy(e, t, n); }
function cw(e, t) { let n = t; for (; n;) {
    if (Bp(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (Bp(e, n))
        return;
    n = n.next;
} }
function Ey(e, t) { let n = e[Ee]; return !t || n === null || n.length === 0 ? !1 : n[0].data[vs] === t; }
function Bp(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return K(o) && Ey(o, n) ? (Qs(o), !0) : !1; }
var Dy = class {
}, Ys = class {
}, Ml = class {
    resolveComponentFactory(t) { throw new _(917, !1); }
}, Tr = class {
    static NULL = new Ml;
}, er = class {
}, lw = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => uw();
} return e; })();
function uw() { let e = g(), t = T(), n = le(t.index, e); return (Y(n) ? n : e)[C]; }
var Cy = (() => { class e {
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function Xu(e) { return e.ngModule !== void 0; }
function Ht(e) { return !!an(e); }
function vi(e) { return !!Fe(e); }
function $p(e) { return !!Me(e); }
function Lo(e) { return !!G(e); }
function dw(e) { return G(e) ? "component" : Me(e) ? "directive" : Fe(e) ? "pipe" : "type"; }
function fw(e, t) { if (Br(e) && (e = U(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Ie(t)}", to return a standalone entity or NgModule but got "${Ie(e) || e}".`); if (an(e) == null) {
    let n = G(e) || Me(e) || Fe(e);
    if (n != null) {
        if (!n.standalone)
            throw new Error(`The "${Ie(e)}" ${dw(e)}, imported from "${Ie(t)}", is not standalone. Did you forget to add the standalone: true flag?`);
    }
    else
        throw Xu(e) ? new Error(`A module with providers was imported from "${Ie(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Ie(e)}" type, imported from "${Ie(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var Nl = class {
    ownerNgModule = new Map;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new Map;
    standaloneComponentsScopeCache = new Map;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = an(t);
            if (n?.declarations)
                for (let o of En(n.declarations))
                    Lo(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = G(t); if (o === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (o.standalone) {
        let r = this.getStandaloneComponentScope(t, n);
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let r = this.getNgModuleScope(this.ownerNgModule.get(t));
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!Ht(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = Zr(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of En(n.imports))
        if (Ht(r)) {
            let i = this.getNgModuleScope(r);
            Mt(i.exported.directives, o.compilation.directives), Mt(i.exported.pipes, o.compilation.pipes);
        }
        else if (Eo(r))
            if ($p(r) || Lo(r))
                o.compilation.directives.add(r);
            else if (vi(r))
                o.compilation.pipes.add(r);
            else
                throw new _(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of En(n.declarations)) {
            if (Ht(r) || Eo(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            vi(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of En(n.exports))
        if (Ht(r)) {
            let i = this.getNgModuleScope(r);
            Mt(i.exported.directives, o.exported.directives), Mt(i.exported.pipes, o.exported.pipes), Mt(i.exported.directives, o.compilation.directives), Mt(i.exported.pipes, o.compilation.pipes);
        }
        else
            vi(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Re(n ?? [])) {
        let i = U(r);
        try {
            fw(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (Ht(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            Mt(s.exported.directives, o.compilation.directives), Mt(s.exported.pipes, o.compilation.pipes);
        }
        else if (vi(i))
            o.compilation.pipes.add(i);
        else if ($p(i) || Lo(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = G(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function Mt(e, t) { for (let n of e)
    t.add(n); }
var On = new Nl, Si = {}, _n = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, Si, o); return r !== Si || n === Si ? r : this.parentInjector.get(t, n, o); }
};
function Ji(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = Vr(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = Vr(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function so(e, t = 0) { let n = g(); if (n === null)
    return Ae(e, t); let o = T(); return qh(o, n, U(e), t); }
function Ty() { let e = "invalid"; throw new Error(e); }
function My(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    gw(e, t, n, a, i, c, l);
} i !== null && o !== null && pw(n, o, i); }
function pw(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new _(-301, !1);
    o.push(t[r], i);
} }
function hw(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function gw(e, t, n, o, r, i, s) { let a = o.length, c = !1; for (let f = 0; f < a; f++) {
    let p = o[f];
    !c && me(p) && (c = !0, hw(e, n, f)), Yc(Hi(n, t), e, p.type);
} Dw(n, e.data.length, a); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = Ir(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = Rn(n.mergedAttrs, p.hostAttrs), yw(e, n, t, d, p), Ew(d, p, r), s !== null && s.has(p)) {
        let [m, v] = s.get(p);
        n.directiveToIndex.set(p.type, [d, m + n.directiveStart, v + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} mw(e, n, i); }
function mw(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        Up(0, t, r, o), Up(1, t, r, o), Wp(t, o, !1);
    else {
        let i = n.get(r);
        Gp(0, t, i, o), Gp(1, t, i, o), Wp(t, o, !0);
    }
} }
function Up(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), Ny(t, i);
    } }
function Gp(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), Ny(t, s);
    } }
function Ny(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function Wp(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || Su(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < o.length;) {
    let c = o[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && r.hasOwnProperty(c)) {
        let l = r[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, o[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], o[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function yw(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = qr(r.type, !0)), s = new Ut(i, me(r), so, null); e.blueprint[o] = s, n[o] = s, vw(e, t, o, Ir(e, n, r.hostVars, O), r); }
function vw(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    Iw(s) != a && s.push(a), s.push(n, o, i);
} }
function Iw(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function Ew(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    me(t) && (n[""] = e);
} }
function Dw(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function ed(e, t, n, o, r, i, s, a) { let c = t[y], l = c.consts, u = ae(l, s), d = tn(c, e, n, o, u); return i && My(c, t, d, ae(l, a), r), d.mergedAttrs = Rn(d.mergedAttrs, d.attrs), d.attrs !== null && Ji(d, d.attrs, !1), d.mergedAttrs !== null && Ji(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function td(e, t) { Lh(e, t), Ga(t) && e.queries.elementEnd(t); }
function _y(e, t, n, o, r, i) { let s = t.consts, a = ae(s, r), c = tn(t, e, n, o, a); if (c.mergedAttrs = Rn(c.mergedAttrs, c.attrs), i != null) {
    let l = ae(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && Ji(c, c.attrs, !1), c.mergedAttrs !== null && Ji(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function tr(e) { return Ks(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function Cw(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function wy(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function Ks(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function by(e, t) { let n = tr(e), o = tr(t); return n && o ? Cw(e, t, by) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function qe(e, t, n) { return e[t] = n; }
function Mr(e, t) { return e[t]; }
function $(e, t, n) { if (n === O)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function zt(e, t, n, o) { let r = $(e, t, n); return $(e, t + 1, o) || r; }
function Js(e, t, n, o, r) { let i = zt(e, t, n, o); return $(e, t + 2, r) || i; }
function be(e, t, n, o, r, i) { let s = zt(e, t, n, o); return zt(e, t + 2, r, i) || s; }
function Fo(e, t, n) { return function o(r) { let i = ge(e) ? le(e.index, t) : t; Dr(i, 5); let s = t[L], a = qp(t, s, n, r), c = o.__ngNextListenerFn__; for (; c;)
    a = qp(t, s, c, r) && a, c = c.__ngNextListenerFn__; return a; }; }
function qp(e, t, n, o) { let r = fp(null); try {
    return x(6, t, n), n(o) !== !1;
}
catch (i) {
    return zu(e, i), !1;
}
finally {
    x(7, t, n), fp(r);
} }
function Sy(e, t, n, o, r, i, s, a) { let c = un(e), l = !1, u = null; if (!o && c && (u = Mw(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = ne(e, n), f = o ? o(d) : d;
    rM(n, f, i, a);
    let p = r.listen(f, i, a);
    if (!Tw(i)) {
        let h = o ? m => o(k(m[e.index])) : e.index;
        Ay(h, t, n, i, a, p, !1);
    }
} return l; }
function Tw(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function Mw(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[xt], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function Ay(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? Wf(t) : null, c = Gf(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function Nw(e, t, n, o, r) { let i = Fo(e, t, n), s = _w(e, t, o, r, i); }
function _w(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, Xi(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, Xi(e, t, i, o, o, r)), c; }
function Xi(e, t, n, o, r, i) { let s = t[n], a = t[y], l = a.data[n].outputs[o], d = s[l].subscribe(i); Ay(e.index, a, t, r, i, d, !0); }
var _t = Symbol("BINDING"), ww = { kind: "input", requiredVars: 1 }, bw = { kind: "output", requiredVars: 0 };
function Sw(e, t, n) { let o = g(), r = de(); if ($(o, r, n)) {
    let i = o[y], s = _e(), a = le(s.index, o);
    Dr(a, 1);
    let c = i.directiveRegistry[e], l = KN(s, i, o, c, t, n);
} }
function Ry(e, t) { let n = { [_t]: ww, update: () => Sw(n.targetIdx, e, t()) }; return n; }
function ky(e, t) { let n = { [_t]: bw, create: () => { let o = g(), r = T(), s = o[y].directiveRegistry[n.targetIdx]; Nw(r, o, t, s, e); } }; return n; }
function Aw(e, t) { let n = Ry(e, t), o = ky(e + "Change", i => t.set(i)); return { [_t]: { kind: "twoWay", requiredVars: n[_t].requiredVars + o[_t].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
var es = class extends Tr {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = G(t); return new bt(n, this.ngModule); }
};
function Rw(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & As.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function kw(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function xw(e, t, n) { let o = t instanceof mt ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new _n(n, o) : n; }
function Ow(e) { let t = e.get(er, null); if (t === null)
    throw new _(407, !1); let n = e.get(Cy, null), o = e.get(Je, null); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1 }; }
function Pw(e, t) { let n = xy(e); return bs(t, n, n === "svg" ? Ff : n === "math" ? jf : null); }
function xy(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var bt = class extends Ys {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= Rw(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= kw(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = mN(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { x(22); let a = R(null); try {
        let c = this.componentDef, l = Lw(o, c, s, i), u = xw(c, r || this.ngModule, t), d = Ow(u), f = d.rendererFactory.createRenderer(null, c), p = o ? $N(f, o, c.encapsulation, u) : Pw(c, f), h = s?.some(zp) || i?.some(E => typeof E != "function" && E.bindings.some(zp)), m = Ss(null, l, null, 512 | Ru(c), null, null, d, f, u, null, bg(p, u, !0));
        m[I] = p, ai(m);
        let v = null;
        try {
            let E = ed(I, m, 2, "#host", () => l.directiveRegistry, !0, 0);
            Xg(f, p, E), we(p, m), Fs(l, m, E), Du(l, E, m), td(l, E), n !== void 0 && jw(E, this.ngContentSelectors, n), v = le(E.index, m), m[L] = v[L], $s(l, m, null);
        }
        catch (E) {
            throw v !== null && Jc(v), Jc(m), E;
        }
        finally {
            x(23), ci();
        }
        return new ts(this.componentType, m, !!h);
    }
    finally {
        R(a);
    } }
};
function Lw(e, t, n, o) { let r = e ? ["ng-version", "20.3.18"] : yN(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[_t].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[_t].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = Me(d);
        c.push(f);
    } return Au(0, null, Fw(i, s), 1, a, c, null, null, null, [r], null); }
function Fw(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function zp(e) { let t = e[_t].kind; return t === "input" || t === "twoWay"; }
var ts = class extends Dy {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = It(n[y], I), this.location = Wn(this._tNode, n), this.instance = le(this._tNode.index, n)[L], this.hostView = this.changeDetectorRef = new wt(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = Bs(o, r[y], r, t, n); this.previousInputValues.set(t, n); let s = le(o.index, r); Dr(s, 1); }
    get injector() { return new Nt(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function jw(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var Xs = (() => { class e {
    static __NG_ELEMENT_ID__ = Hw;
} return e; })();
function Hw() { let e = T(); return Py(e, g()); }
var Vw = Xs, Oy = class extends Vw {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return Wn(this._hostTNode, this._hostLView); }
    get injector() { return new Nt(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = nu(this._hostTNode, this._hostLView); if (Vh(t)) {
        let n = Fi(t, this._hostLView), o = Li(t), r = n[y].data[o + 8];
        return new Nt(r, n);
    }
    else
        return new Nt(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = Qp(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - F; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = Xo(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, qt(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !xo(t), l; if (c)
        l = n;
    else {
        let v = n || {};
        l = v.index, o = v.injector, r = v.projectableNodes, i = v.environmentInjector || v.ngModuleRef, s = v.directives, a = v.bindings;
    } let u = c ? t : new bt(G(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let E = (c ? d : this.parentInjector).get(mt, null);
        E && (i = E);
    } let f = G(u.componentType ?? {}), p = Xo(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, m = u.create(d, r, h, i, s, a); return this.insertImpl(m.hostView, l, qt(this._hostTNode, p)), m; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if ($f(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[q], l = new Oy(c, c[se], c[q]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return ro(s, r, i, o), t.attachToViewContainerRef(), Fa(Lc(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = Qp(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = Ko(this._lContainer, n); o && (yo(Lc(this._lContainer), n), Er(o[y], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = Ko(this._lContainer, n); return o && yo(Lc(this._lContainer), n) != null ? new wt(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function Qp(e) { return e[Mo]; }
function Lc(e) { return e[Mo] || (e[Mo] = []); }
function Py(e, t) { let n, o = t[e.index]; return K(o) ? n = o : (n = zm(o, t, null, e), t[e.index] = n, ku(t, n)), Ly(n, t, e, o), new Oy(n, e, t); }
function Bw(e, t) { let n = e[C], o = n.createComment(""), r = ne(t, e), i = n.parentNode(r); return Gt(n, i, o, n.nextSibling(r), !1), o; }
var Ly = jy, nd = () => !1;
function Fy(e, t, n) { return nd(e, t, n); }
function jy(e, t, n, o) { if (e[ke])
    return; let r; n.type & 8 ? r = k(o) : r = Bw(t, n), e[ke] = r; }
function $w(e, t, n) { if (e[ke] && e[Ee])
    return !0; let o = n[te], r = t.index - I; if (!o || zn(t) || _s(o, r))
    return !1; let s = nl(o, r), a = o.data[Qn]?.[r], [c, l] = iw(s, a); return e[ke] = c, e[Ee] = l, !0; }
function Uw(e, t, n, o) { nd(e, n, t) || jy(e, t, n, o); }
function Hy() { Ly = Uw, nd = $w; }
var _l = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, wl = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length, r = [];
        for (let i = 0; i < o; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            r.push(a.clone());
        }
        return new e(r);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        rd(t, n).matches !== null && this.queries[n].setDirty(); }
}, ns = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = Qw(t) : this.predicate = t; }
}, bl = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0, i = this.getByIndex(o).embeddedTView(t, r);
        i && (i.indexInDeclarationView = o, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, Sl = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n;)
            o = o.parent;
        return n === (o !== null ? o.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let o = this.metadata.predicate; if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
            let i = o[r];
            this.matchTNodeWithReadOption(t, n, Gw(n, i)), this.matchTNodeWithReadOption(t, n, _i(n, t, i, !1, !1));
        }
    else
        o === Jo ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, _i(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === lr || r === Xs || r === Jo && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = _i(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function Gw(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function Ww(e, t) { return e.type & 11 ? Wn(e, t) : e.type & 4 ? Gs(e, t) : null; }
function qw(e, t, n, o) { return n === -1 ? Ww(t, e) : n === -2 ? zw(e, t, o) : qo(e, e[y], n, t); }
function zw(e, t, n) { if (n === lr)
    return Wn(t, e); if (n === Jo)
    return Gs(t, e); if (n === Xs)
    return Py(t, e); }
function Vy(e, t, n, o) { let r = t[je].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(qw(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function Al(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = Vy(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = F; d < u.length; d++) {
                let f = u[d];
                f[Ye] === f[q] && Al(f[y], f, l, o);
            }
            if (u[Pt] !== null) {
                let d = u[Pt];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    Al(p[y], p, l, o);
                }
            }
        }
    }
} return o; }
function od(e, t) { return e[je].queries[t].queryList; }
function By(e, t, n) { let o = new Vi((n & 4) === 4); return qf(e, t, o, o.destroy), (t[je] ??= new wl).queries.push(new _l(o)) - 1; }
function $y(e, t, n) { let o = N(); return o.firstCreatePass && (Gy(o, new ns(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), By(o, g(), t); }
function Uy(e, t, n, o) { let r = N(); if (r.firstCreatePass) {
    let i = T();
    Gy(r, new ns(t, n, o), i.index), Zw(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return By(r, g(), n); }
function Qw(e) { return e.split(",").map(t => t.trim()); }
function Gy(e, t, n) { e.queries === null && (e.queries = new bl), e.queries.track(new Sl(t, n)); }
function Zw(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function rd(e, t) { return e.queries.getByIndex(t); }
function Wy(e, t) { let n = e[y], o = rd(n, t); return o.crossesNgTemplate ? Al(n, e, t, []) : Vy(n, e, o, t); }
function id(e, t, n) { let o, r = Mf(() => { o._dirtyCounter(); let i = Yw(o, e); if (t && i === void 0)
    throw new _(-951, !1); return i; }); return o = r[pt], o._dirtyCounter = mc(0), o._flatValue = void 0, r; }
function sd(e) { return id(!0, !1, e); }
function ad(e) { return id(!0, !0, e); }
function cd(e) { return id(!1, !1, e); }
function qy(e, t) { let n = e[pt]; n._lView = g(), n._queryIndex = t, n._queryList = od(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function Yw(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[b] & 4)
    return t ? void 0 : P; let r = od(n, o), i = Wy(n, o); return r.reset(i, Jh), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
function zy(e) { let t = [], n = new Map; function o(r) { let i = n.get(r); if (!i) {
    let s = e(r);
    n.set(r, i = s.then(a => eb(r, a)));
} return i; } return Pn.forEach((r, i) => { let s = []; r.templateUrl && s.push(o(r.templateUrl).then(l => { r.template = l; })); let a = typeof r.styles == "string" ? [r.styles] : r.styles || []; if (r.styles = a, r.styleUrl && r.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); if (r.styleUrls?.length) {
    let l = r.styles.length, u = r.styleUrls;
    r.styleUrls.forEach((d, f) => { a.push(""), s.push(o(d).then(p => { a[l + f] = p, u.splice(u.indexOf(d), 1), u.length == 0 && (r.styleUrls = void 0); })); });
}
else
    r.styleUrl && s.push(o(r.styleUrl).then(l => { a.push(l), r.styleUrl = void 0; })); let c = Promise.all(s).then(() => tb(i)); t.push(c); }), Zy(), Promise.all(t).then(() => { }); }
var Pn = new Map, nr = new Set;
function Kw(e, t) { Qy(t) && (Pn.set(e, t), nr.add(e)); }
function Jw(e) { return nr.has(e); }
function Qy(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls && e.styleUrls.length || e.styleUrl); }
function Zy() { let e = Pn; return Pn = new Map, e; }
function Xw(e) { nr.clear(), e.forEach((t, n) => nr.add(n)), Pn = e; }
function Yy() { return Pn.size === 0; }
function eb(e, t) { return typeof t == "string" ? t : t.status !== void 0 && t.status !== 200 ? Promise.reject(new _(918, !1)) : t.text(); }
function tb(e) { nr.delete(e); }
var Rl = new Map, Ky = !0;
function nb(e, t, n) { if (t && t !== n && Ky)
    throw new Error(`Duplicate module registered for ${e} - ${on(t)} vs ${on(t.name)}`); }
function ld(e, t) { let n = Rl.get(t) || null; nb(t, n, e), Rl.set(t, e); }
function ud(e) { return Rl.get(e); }
function ob(e) { Ky = !e; }
var Ln = class {
}, Jy = class {
};
function Xy(e, t) { return new Fn(e, t ?? null, []); }
var rb = Xy, Fn = class extends Ln {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new es(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = an(t); this._bootstrapComponents = En(i.bootstrap), this._r3Injector = tp(t, n, [{ provide: Ln, useValue: this }, { provide: Tr, useValue: this.componentFactoryResolver }, ...o], on(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, jn = class extends Jy {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new Fn(this.moduleType, t, []); }
};
function ev(e, t, n) { return new Fn(e, t, n, !1); }
var or = class extends Ln {
    injector;
    componentFactoryResolver = new es(this);
    instance = null;
    constructor(t) { super(); let n = new Va([...t.providers, { provide: Ln, useValue: this }, { provide: Tr, useValue: this.componentFactoryResolver }], t.parent || Kr(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function dd(e, t, n = null) { return new or({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var ib = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = Ha(!1, n.type), r = o.length > 0 ? dd([o], this._injector, `Standalone[${n.type.name}]`) : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = V({ token: e, providedIn: "environment", factory: () => new e(Ae(mt)) });
} return e; })();
function tv(e) { return Ge(() => { let t = iv(e), n = Le(W({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === gs.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(ib).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || ot.Emulated, styles: e.styles || P, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && Z("NgStandalone"), sv(n); let o = e.dependencies; return n.directiveDefs = os(o, nv), n.pipeDefs = os(o, Fe), n.id = lb(n), n; }); }
function nv(e) { return G(e) || Me(e); }
function fd(e) { return Ge(() => ({ type: e.type, bootstrap: e.bootstrap || P, declarations: e.declarations || P, imports: e.imports || P, exports: e.exports || P, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function sb(e, t) { if (e == null)
    return Te; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = As.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function ab(e) { if (e == null)
    return Te; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function ov(e) { return Ge(() => { let t = iv(e); return sv(t), t; }); }
function rv(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function iv(e) { let t = {}; return { type: e.type, providersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || Te, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || P, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, inputs: sb(e.inputs, t), outputs: ab(e.outputs), debugInfo: null }; }
function sv(e) { e.features?.forEach(t => t(e)); }
function os(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var cb = new Map;
function lb(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function av(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function pd(e) { let t = av(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (me(e))
        r = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new _(903, !1);
        r = t.\u0275dir;
    }
    if (r) {
        if (n) {
            o.push(r);
            let s = e;
            s.inputs = Fc(e.inputs), s.declaredInputs = Fc(e.declaredInputs), s.outputs = Fc(e.outputs);
            let a = r.hostBindings;
            a && hb(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && fb(e, c), l && pb(e, l), ub(e, r), wf(e.outputs, r.outputs), me(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === pd && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} db(o); }
function ub(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function db(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = Rn(r.hostAttrs, n = Rn(n, r.hostAttrs));
} }
function Fc(e) { return e === Te ? {} : e === P ? [] : e; }
function fb(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function pb(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function hb(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
var gb = ["providersResolver"], mb = ["template", "decls", "consts", "vars", "onPush", "ngContentSelectors", "styles", "encapsulation", "schemas"];
function cv(e) { let t = av(e.type), n; me(e) ? n = t.\u0275cmp : n = t.\u0275dir; let o = e; for (let r of gb)
    o[r] = n[r]; if (me(n))
    for (let r of mb)
        o[r] = n[r]; }
function lv(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = yb, n.hostDirectives = o ? e.map(kl) : [e]) : o ? n.hostDirectives.unshift(...e.map(kl)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function yb(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, uv(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && me(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function uv(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                Zp(kl(i), t, n);
        }
        else
            Zp(o, t, n); }
function Zp(e, t, n) { let o = Me(e.directive); vb(o.declaredInputs, e.inputs), uv(o, t, n), n.set(o, e), t.push(o); }
function kl(e) { return typeof e == "function" ? { directive: U(e), inputs: Te, outputs: Te } : { directive: U(e.directive), inputs: Yp(e.inputs), outputs: Yp(e.outputs) }; }
function Yp(e) { if (e === void 0 || e.length === 0)
    return Te; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function vb(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function dv(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = Rn(e.mergedAttrs, e.attrs);
    let u = e.tView = Au(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), Ve(e, !1); let c = fv(n, t, e, o); Ao() && $u(n, t, c, e), we(c, t); let l = zm(c, t, c, e); t[o + I] = l, ku(t, l), Fy(l, e, t); }
function Ib(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; return t.firstCreatePass ? (f = tn(t, d, 4, s || null, a || null), ri() && My(t, e, f, ae(t.consts, l), qu), Lh(t, f)) : f = t.data[d], dv(f, e, t, n, o, r, i, c), un(f) && Fs(t, e, f), l != null && no(e, f, u), f; }
function Qt(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; if (t.firstCreatePass) {
    if (f = tn(t, d, 4, s || null, a || null), l != null) {
        let p = ae(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return dv(f, e, t, n, o, r, i, c), l != null && no(e, f, u), f; }
function hd(e, t, n, o, r, i, s, a) { let c = g(), l = N(), u = ae(l.consts, i); return Ib(c, l, e, t, n, o, r, u, void 0, s, a), hd; }
function gd(e, t, n, o, r, i, s, a) { let c = g(), l = N(), u = ae(l.consts, i); return Qt(c, l, e, t, n, o, r, u, void 0, s, a), gd; }
var fv = pv;
function pv(e, t, n, o) { return xe(!0), t[C].createComment(""); }
function Eb(e, t, n, o) { let r = !ws(t, n); xe(r); let i = t[te]?.data[ys]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return pv(e, t); let s = t[te], a = Cr(s, e, t, n); Ns(s, o, a); let c = Iu(s, o); return qs(c, a); }
function hv() { fv = Eb; }
var J = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(J || {}), Kp = 0, Db = 1, B = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })(B || {}), rr = (function (e) { return e[e.Initial = -1] = "Initial", e; })(rr || {}), wn = 0, ut = 1, Oo = 2, Ii = 3, Cb = 4, Tb = 5, ea = 6, Mb = 7, bn = 8, Nb = 9, md = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(md || {});
function Nr(e, t, n) { let o = mv(e); t[o] === null && (t[o] = []), t[o].push(n); }
function Ai(e, t) { let n = mv(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function gv(e) { Ai(1, e), Ai(0, e), Ai(2, e); }
function mv(e) { let t = Cb; return e === 1 ? t = Tb : e === 2 && (t = Nb), t; }
function _r(e) { return e + 1; }
function pe(e, t) { let n = e[y], o = _r(t.index); return e[o]; }
function _b(e, t, n) { let o = e[y], r = _r(t); e[r] = n; }
function re(e, t) { let n = _r(t.index); return e.data[n]; }
function wb(e, t, n) { let o = _r(t); e.data[o] = n; }
function bb(e, t, n) { let o = t[y], r = re(o, n); switch (e) {
    case B.Complete: return r.primaryTmplIndex;
    case B.Loading: return r.loadingTmplIndex;
    case B.Error: return r.errorTmplIndex;
    case B.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function xl(e, t) { return t === B.Placeholder ? e.placeholderBlockConfig?.[Kp] ?? null : t === B.Loading ? e.loadingBlockConfig?.[Kp] ?? null : null; }
function yv(e) { return e.loadingBlockConfig?.[Db] ?? null; }
function Jp(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function Sb(e, t) { let n = t.primaryTmplIndex + I; return It(e, n); }
function vv(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function Iv(e, t) { let n = null, o = _r(t.index); return I < o && o < e.bindingStartIndex && (n = re(e, t)), !!n && vv(n); }
function yd(e, t, n) { let o = n.get(j); return nM(e, () => o.run(t), () => o.runOutsideAngular(() => tM())); }
function Ab(e, t, n) { return n == null ? e : n >= 0 ? Uf(n, e) : e[t.index][F] ?? null; }
function Rb(e, t) { return Lt(I + t, e); }
function ao(e, t, n, o, r, i, s) { let a = e[A], c = a.get(j), l; function u() { if (vt(e)) {
    l.destroy();
    return;
} let d = pe(e, t), f = d[ut]; if (f !== rr.Initial && f !== B.Placeholder) {
    l.destroy();
    return;
} let p = Ab(e, t, o); if (!p || (l.destroy(), vt(p)))
    return; let h = Rb(p, n), m = r(h, () => { c.run(() => { e !== p && za(p, m), i(); }); }, a); e !== p && oi(p, m), Nr(s, d, m); } l = Dm({ read: u }, { injector: a }); }
function ta(e, t) { let n = t.get(Ob), o = () => n.remove(e); return n.add(e), o; }
var kb = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, xb = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, Ob = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = D(j);
    requestIdleCallbackFn = kb().bind(globalThis);
    cancelIdleCallbackFn = xb().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: o, deferred: r } = this; o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let o of this.current)
        o(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let o of this.deferred)
            this.current.add(o);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function na(e) { return (t, n) => Ev(e, t, n); }
function Ev(e, t, n) { let o = n.get(Dv), r = n.get(j), i = () => o.remove(t); return o.add(e, t, r), i; }
var Dv = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, o, r) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, o), this.scheduleTimer(r); }
    remove(n) { let { current: o, deferred: r } = this; this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout(); }
    addToQueue(n, o, r) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > o) {
            i = s;
            break;
        } kf(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && ja(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && ja(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(o), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Pb = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? dd(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = V({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), Lb = new w("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), Cv = new w("");
function jc(e, t, n) { return e.get(Pb).getOrCreateInjector(t, e, n, ""); }
function Fb(e, t, n) { if (e instanceof _n) {
    let r = e.injector, i = e.parentInjector, s = jc(i, t, n);
    return new _n(r, s);
} let o = e.get(mt); if (o !== e) {
    let r = jc(o, t, n);
    return new _n(e, r);
} return jc(e, t, n); }
function tt(e, t, n, o = !1) { let r = n[q], i = r[y]; if (vt(r))
    return; let s = pe(r, t), a = s[ut], c = s[Mb]; if (!(c !== null && e < c) && eh(a, e) && eh(s[wn] ?? -1, e)) {
    let l = re(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (yv(l) !== null || xl(l, B.Loading) !== null || xl(l, B.Placeholder)) ? Ol : Tv;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        zu(r, f);
    }
} }
function jb(e, t) { let n = e[Ee]?.findIndex(r => r.data[pr] === t[ut]) ?? -1; return { dehydratedView: n > -1 ? e[Ee][n] : null, dehydratedViewIx: n }; }
function Tv(e, t, n, o, r) { x(20); let i = bb(e, r, o); if (i !== null) {
    t[ut] = e;
    let s = r[y], a = i + I, c = It(s, a), l = 0;
    Qu(n, l);
    let u;
    if (e === B.Complete) {
        let h = re(s, o), m = h.providers;
        m && m.length > 0 && (u = Fb(r[A], h, m));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = jb(n, t), p = oo(r, c, null, { injector: u, dehydratedView: d });
    if (ro(n, p, l, qt(c, d)), Dr(p, 2), f > -1 && n[Ee]?.splice(f, 1), (e === B.Complete || e === B.Error) && Array.isArray(t[bn])) {
        for (let h of t[bn])
            h();
        t[bn] = null;
    }
} x(21); }
function Hb(e, t, n, o, r) { let i = Date.now(), s = r[y], a = re(s, o); if (t[Oo] === null || t[Oo] <= i) {
    t[Oo] = null;
    let c = yv(a), l = t[Ii] !== null;
    if (e === B.Loading && c !== null && !l) {
        t[wn] = e;
        let u = Xp(c, t, o, n, r);
        t[Ii] = u;
    }
    else {
        e > B.Loading && l && (t[Ii](), t[Ii] = null, t[wn] = null), Tv(e, t, n, o, r);
        let u = xl(a, e);
        u !== null && (t[Oo] = i + u, Xp(u, t, o, n, r));
    }
}
else
    t[wn] = e; }
function Xp(e, t, n, o, r) { return Ev(e, () => { let s = t[wn]; t[Oo] = null, t[wn] = null, s !== null && tt(s, n, o); }, r[A]); }
function eh(e, t) { return e < t; }
function co(e, t) { let n = e[t.index]; tt(B.Placeholder, t, n); }
function th(e, t, n) { e.loadingPromise.then(() => { e.loadingState === J.COMPLETE ? tt(B.Complete, t, n) : e.loadingState === J.FAILED && tt(B.Error, t, n); }); }
var Ol = null;
function Mv(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = ae(r, n)), o != null && (t.loadingBlockConfig = ae(r, o)), Ol === null && (Ol = Hb); }
var Ri = "__ngAsyncComponentMetadataFn__";
function Vb(e) { return e[Ri] ?? null; }
function Nv(e, t, n) { let o = e; return o[Ri] = () => Promise.all(t()).then(r => (n(...r), o[Ri] = null, r)), o[Ri]; }
function vd(e, t, n, o) { return Ge(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = W(W({}, r.propDecorators), o) : r.propDecorators = o); }); }
var Bb = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function ki(e, t) { let n = e[y]; for (let o = I; o < n.bindingStartIndex; o++)
    if (K(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = re(n, s);
            if (vv(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        Y(r[H]) && ki(r[H], t);
        for (let s = F; s < r.length; s++)
            ki(r[s], t);
    }
    else
        Y(e[o]) && ki(e[o], t); }
function $b() { return Z("Chrome DevTools profiling"), () => { }; }
function Ub(e) { let t = st(), n = e.get(at), o = fg(t, n), r = {}; for (let [i, s] of Object.entries(o))
    iM(i) || (r[i] = s); return r; }
var nh = "ng";
function Gb(e, t) { Wb(e, t); }
function Wb(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = ve;
    n[nh] ??= {}, n[nh][e] = t;
} }
var _v = new w(""), wv = new w(""), qb = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, Ba() && (this._destroyRef = D(fn, { optional: !0 }) ?? void 0), Id || (Sv(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { j.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, o, r) { let i = -1; o && o > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, o)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r }); }
    whenStable(n, o, r) { if (r && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, o, r), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, o, r) { return []; }
    static \u0275fac = function (o) { return new (o || e)(Ae(j), Ae(bv), Ae(wv)); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac });
} return e; })(), bv = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return Id?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Sv(e) { Id = e; }
var Id;
function Ed(e) { return !!e && typeof e.then == "function"; }
function Av(e) { return !!e && typeof e.subscribe == "function"; }
var Dd = new w("");
function zb(e) { return Qe([{ provide: Dd, multi: !0, useValue: e }]); }
var Cd = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = D(Dd, { optional: !0 }) ?? [];
    injector = D(De);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = Jr(this.injector, r);
        if (Ed(i))
            n.push(i);
        else if (Av(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), wr = new w("");
function Td() { Nf(() => { let e = ""; throw new _(600, e); }); }
function Rv(e) { return e.isBoundToModule; }
var Pl = class {
    name;
    token;
    constructor(t, n) { this.name = t, this.token = n; }
}, Qb = 10;
function Md(e, t) { return Array.isArray(t) ? t.reduce(Md, e) : W(W({}, e), t); }
var Pe = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = D(Ct);
    afterRenderManager = D(ks);
    zonelessEnabled = D(pn);
    rootEffectScheduler = D(Ec);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new Xl;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = D(Tt);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(GC(n => !n)); }
    constructor() { D(to, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = D(mt);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = De.NULL) { return this._injector.get(j).run(() => { x(10); let s = n instanceof Ys; if (!this._injector.get(Cd).done) {
        let h = "";
        throw new _(405, h);
    } let c; s ? c = n : c = this._injector.get(Tr).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = Rv(c) ? void 0 : this._injector.get(Ln), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(_v, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), jo(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), x(11, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { x(12), this.tracingSnapshot !== null ? this.tracingSnapshot.run(Rs.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw new _(101, !1); let n = R(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, R(n), this.afterTick.next(), x(13);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(er, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < Qb;)
        x(14), this.synchronizeOnce(), x(15); }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !wo(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            $m(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => wo(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; jo(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(wr, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => jo(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new _(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function jo(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function Nd() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function kv(e) { let t = g(), n = T(); if (co(t, n), !Pv(0, t))
    return; let o = t[A], r = pe(t, n), i = e(() => he(0, t, n), o); Nr(0, r, i); }
function xv(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = g(), n = t[A], o = T(), r = t[y], i = re(r, o); if (i.loadingState === J.NOT_STARTED) {
    let s = pe(t, o), c = e(() => br(i, t, o), n);
    Nr(1, s, c);
} }
function Ov(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[A], r = pe(t, n), i = r[ea], s = e(() => dt(o, i), o); Nr(2, r, s); }
function br(e, t, n) { oa(e, t, n); }
function oa(e, t, n) { let o = t[A], r = t[y]; if (e.loadingState !== J.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = pe(t, n), s = Sb(r, e); e.loadingState = J.IN_PROGRESS, Ai(1, i); let a = e.dependencyResolverFn, c = o.get(Ic).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = [], f = []; for (let p of l)
    if (p.status === "fulfilled") {
        let h = p.value, m = G(h) || Me(h);
        if (m)
            d.push(m);
        else {
            let v = Fe(h);
            v && f.push(v);
        }
    }
    else {
        u = !0;
        break;
    } if (u) {
    if (e.loadingState = J.FAILED, e.errorTmplIndex === null) {
        let h = new _(-750, !1);
        zu(t, h);
    }
}
else {
    e.loadingState = J.COMPLETE;
    let p = s.tView;
    if (d.length > 0) {
        p.directiveRegistry = Jp(p.directiveRegistry, d);
        let h = d.map(v => v.type), m = Ha(!1, ...h);
        e.providers = m;
    }
    f.length > 0 && (p.pipeRegistry = Jp(p.pipeRegistry, f));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = J.COMPLETE, c(); }), e.loadingPromise); }
function Pv(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[A].get(Cv, null, { optional: !0 })?.behavior === md.Manual); }
function he(e, t, n) { let o = t[y], r = t[n.index]; if (!Pv(e, t))
    return; let i = pe(t, n), s = re(o, n); switch (gv(i), s.loadingState) {
    case J.NOT_STARTED:
        tt(B.Loading, n, r), oa(s, t, n), s.loadingState === J.IN_PROGRESS && th(s, n, r);
        break;
    case J.IN_PROGRESS:
        tt(B.Loading, n, r), th(s, n, r);
        break;
    case J.COMPLETE:
        tt(B.Complete, n, r);
        break;
    case J.FAILED:
        tt(B.Error, n, r);
        break;
    default:
} }
function dt(e, t, n) { return po(this, null, function* () { let o = e.get(ct); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = hM(t, e); if (s.length === 0)
    return; i !== null && s.shift(), Kb(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield oh(e, s, n) : o.awaitParentBlock(a, () => po(null, null, function* () { return yield oh(e, s, n); })); }); }
function oh(e, t, n) { return po(this, null, function* () { let o = e.get(ct), r = o.hydrating, i = e.get(Tt), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield Xb(u), yield Jb(e), Zb(u)) {
            ow(u), rh(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        Yb(c, t, o), rh(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), rw(o.get(a), t, o, e.get(Pe)); }); }
function Zb(e) { return pe(e.lView, e.tNode)[ut] === B.Error; }
function Yb(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && Zs(r.lContainer); }
function rh(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function Kb(e, t) { for (let n of t)
    e.hydrating.set(n, Nd()); }
function Jb(e) { return new Promise(t => ju(t, { injector: e })); }
function Xb(e) { return po(this, null, function* () { let { tNode: t, lView: n } = e, o = pe(n, t); return new Promise(r => { eS(o, r), he(2, n, t); }); }); }
function eS(e, t) { Array.isArray(e[bn]) || (e[bn] = []), e[bn].push(t); }
function z(e, t, n) { return e === 0 ? ih(t, n) : e === 2 ? !ih(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function tS(e) { return e != null && (e & 1) === 1; }
function ih(e, t) { let n = e[A], o = re(e[y], t), r = gr(n), i = tS(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = pe(e, t)[ea] !== null; return !(i && a && r); }
function St(e, t) { let n = re(e, t); return n.hydrateTriggers ??= new Map; }
function Lv(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[nt], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && i.push(p);
        }
    }
} nS(e, o), iS(e, s), oS(e, i), rS(e, r); }
function nS(e, t) { for (let n of t) {
    let o = e.get(ct), i = ta(() => dt(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function oS(e, t) { if (t.length > 0) {
    let n = e.get(ct);
    for (let o of t) {
        let r = yd(o.el, () => dt(e, o.blockName), e);
        n.addCleanupFn(o.blockName, r);
    }
} }
function rS(e, t) { for (let n of t) {
    let o = e.get(ct), r = () => dt(e, n.blockName), s = na(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function iS(e, t) { for (let n of t)
    dt(e, n.blockName); }
function Fv(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = N(), f = e + I, p = Qt(u, d, e, null, 0, 0), h = u[A], m = gr(h); if (d.firstCreatePass) {
    Z("NgDefer");
    let ze = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: J.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, ze, a, s), wb(d, f, ze);
} let v = u[f]; Fy(v, p, u); let E = null, S = null; if (v[Ee]?.length > 0) {
    let ze = v[Ee][0].data;
    S = ze[Es] ?? null, E = ze[pr];
} let ce = [null, rr.Initial, null, null, null, null, S, E, null, null]; _b(u, f, ce); let Se = null; S !== null && m && (Se = h.get(ct), Se.add(S, { lView: u, tNode: p, lContainer: v })); let Ce = () => { gv(ce), S !== null && Se?.cleanup([S]); }; Nr(0, ce, () => za(u, Ce)), oi(u, Ce); }
function jv(e) { let t = g(), n = _e(); if (!z(0, t, n))
    return; let o = de(); if ($(t, o, e)) {
    let r = R(null);
    try {
        let i = !!e, a = pe(t, n)[ut];
        i === !1 && a === rr.Initial ? co(t, n) : i === !0 && (a === rr.Initial || a === B.Placeholder) && he(0, t, n);
    }
    finally {
        R(r);
    }
} }
function Hv(e) { let t = g(), n = _e(); if (!z(1, t, n))
    return; let o = de(); if ($(t, o, e)) {
    let r = R(null);
    try {
        let i = !!e, s = t[y], a = re(s, n);
        i === !0 && a.loadingState === J.NOT_STARTED && br(a, t, n);
    }
    finally {
        R(r);
    }
} }
function Vv(e) { let t = g(), n = _e(); if (!z(2, t, n))
    return; let o = de(), r = N(); if (St(r, n).set(6, null), $(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        he(2, t, n);
    else {
        let s = t[A], a = R(null);
        try {
            if (!!e === !0) {
                let u = pe(t, n)[ea];
                dt(s, u);
            }
        }
        finally {
            R(a);
        }
    } }
function Bv() { let e = g(), t = T(); if (!z(2, e, t))
    return; St(N(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && he(2, e, t); }
function $v() { let e = g(), t = T(); z(0, e, t) && kv(ta); }
function Uv() { let e = g(), t = T(); z(1, e, t) && xv(ta); }
function Gv() { let e = g(), t = T(); if (!z(2, e, t))
    return; St(N(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? he(2, e, t) : Ov(ta, e, t); }
function Wv() { let e = g(), t = T(); if (!z(0, e, t))
    return; re(e[y], t).loadingTmplIndex === null && co(e, t), he(0, e, t); }
function qv() { let e = g(), t = T(); if (!z(1, e, t))
    return; let n = e[y], o = re(n, t); o.loadingState === J.NOT_STARTED && oa(o, e, t); }
function zv() { let e = g(), t = T(); if (!z(2, e, t))
    return; if (St(N(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    he(2, e, t);
else {
    let o = e[A], i = pe(e, t)[ea];
    dt(o, i);
} }
function Qv(e) { let t = g(), n = T(); z(0, t, n) && kv(na(e)); }
function Zv(e) { let t = g(), n = T(); z(1, t, n) && xv(na(e)); }
function Yv(e) { let t = g(), n = T(); if (!z(2, t, n))
    return; St(N(), n).set(5, { delay: e }), typeof ngServerMode < "u" && ngServerMode ? he(2, t, n) : Ov(na(e), t, n); }
function Kv(e, t) { let n = g(), o = T(); z(0, n, o) && (co(n, o), typeof ngServerMode < "u" && ngServerMode || ao(n, o, e, t, yg, () => he(0, n, o), 0)); }
function Jv(e, t) { let n = g(), o = T(); if (!z(1, n, o))
    return; let r = n[y], i = re(r, o); i.loadingState === J.NOT_STARTED && ao(n, o, e, t, yg, () => br(i, n, o), 1); }
function Xv() { let e = g(), t = T(); if (!z(2, e, t))
    return; St(N(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && he(2, e, t); }
function eI(e, t) { let n = g(), o = T(); z(0, n, o) && (co(n, o), typeof ngServerMode < "u" && ngServerMode || ao(n, o, e, t, mg, () => he(0, n, o), 0)); }
function tI(e, t) { let n = g(), o = T(); if (!z(1, n, o))
    return; let r = n[y], i = re(r, o); i.loadingState === J.NOT_STARTED && ao(n, o, e, t, mg, () => br(i, n, o), 1); }
function nI() { let e = g(), t = T(); if (!z(2, e, t))
    return; St(N(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && he(2, e, t); }
function oI(e, t) { let n = g(), o = T(); z(0, n, o) && (co(n, o), typeof ngServerMode < "u" && ngServerMode || ao(n, o, e, t, yd, () => he(0, n, o), 0)); }
function rI(e, t) { let n = g(), o = T(); if (!z(1, n, o))
    return; let r = n[y], i = re(r, o); i.loadingState === J.NOT_STARTED && ao(n, o, e, t, yd, () => br(i, n, o), 1); }
function iI() { let e = g(), t = T(); if (!z(2, e, t))
    return; St(N(), t).set(2, null), typeof ngServerMode < "u" && ngServerMode && he(2, e, t); }
function _d(e, t) { let n = g(), o = de(); if ($(n, o, t)) {
    let r = N(), i = _e();
    if (Bs(i, r, n, e, t))
        ge(i) && Lm(n, i.index);
    else {
        let a = ne(i, n);
        js(n[C], a, null, i.value, e, t, null);
    }
} return _d; }
function wd(e, t, n, o) { let r = g(), i = de(); if ($(r, i, t)) {
    let s = N(), a = _e();
    ZN(a, r, e, t, n, o);
} return wd; }
var sI = new w("", { providedIn: "root", factory: () => !1 }), aI = new w("", { providedIn: "root", factory: () => sS }), sS = 4e3, aS = !1, nn = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function ra(e) { return e[A].get(sI, aS); }
function cS(e, t, n) { let o = Hn.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    Hn.set(e, { classList: t, cleanupFns: n }); }
function bd(e) { let t = Hn.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    Hn.delete(e);
} $t.delete(e); }
var lS = () => { }, Hn = new WeakMap, $t = new WeakMap, Sn = new WeakMap;
function Ll(e, t) { let n = Sn.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && Sn.delete(e); }
function ia(e, t) { let n = Sn.get(e)?.shift(), o = t[Ye]; if (o) {
    let i = Qi(e.index, o)?.previousSibling;
    n && i && n === i && n.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }));
} }
function cI(e, t) { Sn.has(e) ? Sn.get(e)?.push(t) : Sn.set(e, [t]); }
function rs(e) { let t = e[Ke] ??= {}; return t.enter ??= new Map; }
function Zt(e) { let t = e[Ke] ??= {}; return t.leave ??= new Map; }
function lI(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function uS(e, t) { if (!nn)
    return; let n = Hn.get(e); if (n && n.classList.length > 0 && dS(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); bd(e); }
function dS(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function uI(e, t) { let n = $t.get(t); return n === void 0 ? !0 : t === e.target && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && e.propertyName === n.propertyName); }
function sa(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function Fl(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function jl(e, t) { let n = Zt(e).get(t.index); n && (n.resolvers = void 0); }
function Ei(e, t, n, o, r) { Ll(t, n), Fl(o, r), jl(e, t); }
function Ho(e) { if (Z("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !nn)
    return Ho; let t = g(); if (ra(t))
    return Ho; let n = T(); return ia(n, t), sa(rs(t), n, () => fS(t, n, e)), Ps(t[A]), Hu(t[A], rs(t)), Ho; }
function fS(e, t, n) { let o = ne(t, e), r = e[C], i = e[A].get(j), s = lI(n), a = [], c = u => { if (u.target !== o)
    return; let d = u instanceof AnimationEvent ? "animationend" : "transitionend"; i.runOutsideAngular(() => { r.listen(o, d, l); }); }, l = u => { u.target === o && pS(u, o, r); }; if (s && s.length > 0) {
    i.runOutsideAngular(() => { a.push(r.listen(o, "animationstart", c)), a.push(r.listen(o, "transitionstart", c)); }), cS(o, s, a);
    for (let u of s)
        r.addClass(o, u);
    i.runOutsideAngular(() => { requestAnimationFrame(() => { if (mm(o, $t, nn), !$t.has(o)) {
        for (let u of s)
            r.removeClass(o, u);
        bd(o);
    } }); });
} }
function pS(e, t, n) { let o = Hn.get(t); if (!(e.target !== t || !o) && uI(e, t)) {
    e.stopImmediatePropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    bd(t);
} }
function Vo(e) { if (Z("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !nn)
    return Vo; let t = g(); if (ra(t))
    return Vo; let n = T(); return ia(n, t), sa(rs(t), n, () => hS(t, n, e)), Ps(t[A]), Hu(t[A], rs(t)), Vo; }
function hS(e, t, n) { let o = ne(t, e); n.call(e[L], { target: o, animationComplete: lS }); }
function Bo(e) { if (Z("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !nn)
    return Bo; let t = g(); if (ra(t))
    return Bo; let o = T(); return ia(o, t), sa(Zt(t), o, () => gS(t, o, e)), Ps(t[A]), Bo; }
function gS(e, t, n) { let { promise: o, resolve: r } = Nd(), i = ne(t, e), s = e[C], a = e[A].get(j); Wt.add(e), (Zt(e).get(t.index).resolvers ??= []).push(r); let c = lI(n); return c && c.length > 0 ? mS(i, t, e, c, s, a) : r(), { promise: o, resolve: r }; }
function mS(e, t, n, o, r, i) { uS(e, r); let s = [], a = Zt(n).get(t.index)?.resolvers, c = l => { if (l.target === e && (l instanceof CustomEvent || uI(l, e))) {
    if (l.stopImmediatePropagation(), $t.delete(e), Ll(t, e), Array.isArray(t.projection))
        for (let u of o)
            r.removeClass(e, u);
    Fl(a, s), jl(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", c)), s.push(r.listen(e, "transitionend", c)); }), cI(t, e); for (let l of o)
    r.addClass(e, l); i.runOutsideAngular(() => { requestAnimationFrame(() => { mm(e, $t, nn), $t.has(e) || (Ll(t, e), Fl(a, s), jl(n, t)); }); }); }
function is(e) { if (Z("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !nn)
    return is; let t = g(), n = T(); return ia(n, t), Wt.add(t), sa(Zt(t), n, () => yS(t, n, e)), Ps(t[A]), is; }
function yS(e, t, n) { let { promise: o, resolve: r } = Nd(), i = ne(t, e), s = [], a = e[C], c = ra(e), l = e[A].get(j), u = e[A].get(aI); (Zt(e).get(t.index).resolvers ??= []).push(r); let d = Zt(e).get(t.index)?.resolvers; if (c)
    Ei(e, t, i, d, s);
else {
    let f = setTimeout(() => Ei(e, t, i, d, s), u), p = { target: i, animationComplete: () => { Ei(e, t, i, d, s), clearTimeout(f); } };
    cI(t, i), l.runOutsideAngular(() => { s.push(a.listen(i, "animationend", () => { Ei(e, t, i, d, s), clearTimeout(f); }, { once: !0 })); }), n.call(e[L], p);
} return { promise: o, resolve: r }; }
function dI() { return g()[Q][L]; }
var Hl = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let o = Math.min(t, n), r = Math.max(t, n), i = this.detach(r); if (r - o > 1) {
        let s = this.detach(o);
        this.attach(o, i), this.attach(r, s);
    }
    else
        this.attach(o, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function Hc(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function vS(e, t, n) { let o, r, i = 0, s = e.length - 1, a = void 0; if (Array.isArray(t)) {
    let c = t.length - 1;
    for (; i <= s && i <= c;) {
        let l = e.at(i), u = t[i], d = Hc(i, l, i, u, n);
        if (d !== 0) {
            d < 0 && e.updateValue(i, u), i++;
            continue;
        }
        let f = e.at(s), p = t[c], h = Hc(s, f, c, p, n);
        if (h !== 0) {
            h < 0 && e.updateValue(s, p), s--, c--;
            continue;
        }
        let m = n(i, l), v = n(s, f), E = n(i, u);
        if (Object.is(E, v)) {
            let S = n(c, p);
            Object.is(S, m) ? (e.swap(i, s), e.updateValue(s, p), c--, s--) : e.move(s, i), e.updateValue(i, u), i++;
            continue;
        }
        if (o ??= new ss, r ??= ah(e, i, s, n), Vl(e, o, i, E))
            e.updateValue(i, u), i++, s++;
        else if (r.has(E))
            o.set(m, e.detach(i)), s--;
        else {
            let S = e.create(i, t[i]);
            e.attach(i, S), i++, s++;
        }
    }
    for (; i <= c;)
        sh(e, o, n, i, t[i]), i++;
}
else if (t != null) {
    let c = t[Symbol.iterator](), l = c.next();
    for (; !l.done && i <= s;) {
        let u = e.at(i), d = l.value, f = Hc(i, u, i, d, n);
        if (f !== 0)
            f < 0 && e.updateValue(i, d), i++, l = c.next();
        else {
            o ??= new ss, r ??= ah(e, i, s, n);
            let p = n(i, d);
            if (Vl(e, o, i, p))
                e.updateValue(i, d), i++, s++, l = c.next();
            else if (!r.has(p))
                e.attach(i, e.create(i, d)), i++, s++, l = c.next();
            else {
                let h = n(i, u);
                o.set(h, e.detach(i)), s--;
            }
        }
    }
    for (; !l.done;)
        sh(e, o, n, e.length, l.value), l = c.next();
} for (; i <= s;)
    e.destroy(e.detach(s--)); o?.forEach(c => { e.destroy(c); }); }
function Vl(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function sh(e, t, n, o, r) { if (Vl(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function ah(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var ss = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let o = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let r = this._vMap;
        for (; r.has(o);)
            o = r.get(o);
        r.set(o, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, o] of this.kvMap)
        if (t(o, n), this._vMap !== void 0) {
            let r = this._vMap;
            for (; r.has(o);)
                o = r.get(o), t(o, n);
        } }
};
function fI(e, t, n, o, r, i, s, a) { Z("NgControlFlow"); let c = g(), l = N(), u = ae(l.consts, i); return Qt(c, l, e, t, n, o, r, u, 256, s, a), aa; }
function aa(e, t, n, o, r, i, s, a) { Z("NgControlFlow"); let c = g(), l = N(), u = ae(l.consts, i); return Qt(c, l, e, t, n, o, r, u, 512, s, a), aa; }
function pI(e, t) { Z("NgControlFlow"); let n = g(), o = de(), r = n[o] !== O ? n[o] : -1, i = r !== -1 ? as(n, I + r) : void 0, s = 0; if ($(n, o, e)) {
    let a = R(null);
    try {
        if (i !== void 0 && Qu(i, s), e !== -1) {
            let c = I + e, l = as(n, c), u = Gl(n[y], c), d = Iy(l, u, n), f = oo(n, u, t, { dehydratedView: d });
            ro(l, f, s, qt(u, d));
        }
    }
    finally {
        R(a);
    }
}
else if (i !== void 0) {
    let a = Qm(i, s);
    a !== void 0 && (a[L] = t);
} }
var Bl = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - F; }
};
function hI(e) { return e; }
function gI(e, t) { return t; }
var $l = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function mI(e, t, n, o, r, i, s, a, c, l, u, d, f) { Z("NgControlFlow"); let p = g(), h = N(), m = c !== void 0, v = g(), E = a ? s.bind(v[Q][L]) : s, S = new $l(m, E); v[I + e] = S, Qt(p, h, e + 1, t, n, o, r, ae(h.consts, i), 256), m && Qt(p, h, e + 2, c, l, u, d, ae(h.consts, f), 512); }
var Ul = class extends Hl {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - F; }
    at(t) { return this.getLView(t)[L].$implicit; }
    attach(t, n) { let o = n[te]; this.needsIndexUpdate ||= t !== this.length, ro(this.lContainer, n, t, qt(this.templateTNode, o)), IS(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, ES(this.lContainer, t), DS(this.lContainer, t); }
    create(t, n) { let o = Xo(this.lContainer, this.templateTNode.tView.ssrId), r = oo(this.hostLView, this.templateTNode, new Bl(this.lContainer, n, t), { dehydratedView: o }); return this.operationsCounter?.recordCreate(), r; }
    destroy(t) { Er(t[y], t), this.operationsCounter?.recordDestroy(); }
    updateValue(t, n) { this.getLView(t)[L].$implicit = n; }
    reset() { this.needsIndexUpdate = !1, this.operationsCounter?.reset(); }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[L].$index = t; }
    getLView(t) { return CS(this.lContainer, t); }
};
function yI(e) { let t = R(null), n = oe(); try {
    let o = g(), r = o[y], i = o[n], s = n + 1, a = as(o, s);
    if (i.liveCollection === void 0) {
        let l = Gl(r, s);
        i.liveCollection = new Ul(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (vS(c, e, i.trackByFn), c.updateIndexes(), i.hasEmptyBlock) {
        let l = de(), u = c.length === 0;
        if ($(o, l, u)) {
            let d = n + 2, f = as(o, d);
            if (u) {
                let p = Gl(r, d), h = Iy(f, p, o), m = oo(o, p, void 0, { dehydratedView: h });
                ro(f, m, 0, qt(p, h));
            }
            else
                r.firstUpdatePass && Qs(f), Qu(f, 0);
        }
    }
}
finally {
    R(t);
} }
function as(e, t) { return e[t]; }
function IS(e, t) { if (e.length <= F)
    return; let n = F + t, o = e[n], r = o ? o[Ke] : void 0; if (o && r && r.detachedLeaveAnimationFns && r.detachedLeaveAnimationFns.length > 0) {
    let i = o[A];
    kN(i, r), Wt.delete(o), r.detachedLeaveAnimationFns = void 0;
} }
function ES(e, t) { if (e.length <= F)
    return; let n = F + t, o = e[n], r = o ? o[Ke] : void 0; r && r.leave && r.leave.size > 0 && (r.detachedLeaveAnimationFns = []); }
function DS(e, t) { return Ko(e, t); }
function CS(e, t) { return Qm(e, t); }
function Gl(e, t) { return It(e, t); }
function Sd(e, t, n) { let o = g(), r = de(); if ($(o, r, t)) {
    let i = N(), s = _e();
    Gu(s, o, e, t, o[C], n);
} return Sd; }
function Wl(e, t, n, o, r) { Bs(t, e, n, r ? "class" : "style", o); }
function ca(e, t, n, o) { let r = g(), i = r[y], s = e + I, a = i.firstCreatePass ? ed(s, r, 2, t, qu, ri(), n, o) : i.data[s]; if (Hs(a, r, e, t, kd), un(a)) {
    let c = r[y];
    Fs(c, r, a), Du(c, a, r);
} return o != null && no(r, a), ca; }
function la() { let e = N(), t = T(), n = Vs(t); return e.firstCreatePass && td(e, n), Za(n) && Ja(), Qa(), n.classesWithoutHost != null && tT(n) && Wl(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && nT(n) && Wl(e, n, g(), n.stylesWithoutHost, !1), la; }
function Ad(e, t, n, o) { return ca(e, t, n, o), la(), Ad; }
function ua(e, t, n, o) { let r = g(), i = r[y], s = e + I, a = i.firstCreatePass ? _y(s, i, 2, t, n, o) : i.data[s]; return Hs(a, r, e, t, kd), o != null && no(r, a), ua; }
function da() { let e = T(), t = Vs(e); return Za(t) && Ja(), Qa(), da; }
function Rd(e, t, n, o) { return ua(e, t, n, o), da(), Rd; }
var kd = (e, t, n, o, r) => (xe(!0), bs(t[C], o, hc()));
function TS(e, t, n, o, r) { let i = !ws(t, n); if (xe(i), i)
    return bs(t[C], o, hc()); let s = t[te], a = Cr(s, e, t, n); return Rg(s, r) && Ns(s, r, a.nextSibling), s && (ru(n) || Xh(a)) && ge(n) && (Zf(n), Jg(a)), a; }
function vI() { kd = TS; }
function fa(e, t, n) { let o = g(), r = o[y], i = e + I, s = r.firstCreatePass ? ed(i, o, 8, "ng-container", qu, ri(), t, n) : r.data[i]; if (Hs(s, o, e, "ng-container", Ld), un(s)) {
    let a = o[y];
    Fs(a, o, s), Du(a, s, o);
} return n != null && no(o, s), fa; }
function Sr() { let e = N(), t = T(), n = Vs(t); return e.firstCreatePass && td(e, n), Sr; }
function xd(e, t, n) { return fa(e, t, n), Sr(), xd; }
function pa(e, t, n) { let o = g(), r = o[y], i = e + I, s = r.firstCreatePass ? _y(i, r, 8, "ng-container", t, n) : r.data[i]; return Hs(s, o, e, "ng-container", Ld), n != null && no(o, s), pa; }
function Od() { let e = T(), t = Vs(e); return Sr; }
function Pd(e, t, n) { return pa(e, t, n), Od(), Pd; }
var Ld = (e, t, n, o, r) => (xe(!0), Nu(t[C], ""));
function MS(e, t, n, o, r) { let i, s = !ws(t, n); if (xe(s), s)
    return Nu(t[C], ""); let a = t[te], c = Cr(a, e, t, n), l = Ag(a, r); return Ns(a, r, c), i = qs(l, c), i; }
function II() { Ld = MS; }
function EI() { return g(); }
function Fd(e, t, n) { let o = g(), r = de(); if ($(o, r, t)) {
    let i = N(), s = _e();
    Wu(s, o, e, t, o[C], n);
} return Fd; }
function jd(e, t, n) { let o = g(), r = de(); if ($(o, r, t)) {
    let i = N(), s = _e(), a = ii(i.data), c = Fm(a, s, o);
    Wu(s, o, e, t, c, n);
} return jd; }
var Di = void 0;
function NS(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var _S = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Di, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Di, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", Di, "{1} 'at' {0}", Di], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", NS], An = {};
function wS(e, t, n) { typeof t != "string" && (n = t, t = e[Vn.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), An[t] = e, n && (An[t][Vn.ExtraData] = n); }
function Hd(e) { let t = AS(e), n = ch(t); if (n)
    return n; let o = t.split("-")[0]; if (n = ch(o), n)
    return n; if (o === "en")
    return _S; throw new _(701, !1); }
function bS(e) { return Hd(e)[Vn.CurrencyCode] || null; }
function DI(e) { return Hd(e)[Vn.PluralCase]; }
function ch(e) { return e in An || (An[e] = ve.ng && ve.ng.common && ve.ng.common.locales && ve.ng.common.locales[e]), An[e]; }
function SS() { An = {}; }
var Vn = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(Vn || {});
function AS(e) { return e.toLowerCase().replace(/_/g, "-"); }
var RS = ["zero", "one", "two", "few", "many"];
function kS(e, t) { let n = DI(t)(parseInt(e, 10)), o = RS[n]; return o !== void 0 ? o : "other"; }
var Ar = "en-US", xS = "USD", CI = { marker: "element" }, TI = { marker: "ICU" }, Xe = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(Xe || {}), MI = Ar;
function NI(e) { typeof e == "string" && (MI = e.toLowerCase().replace(/_/g, "-")); }
function OS() { return MI; }
var ir = 0, $o = 0;
function PS(e) { e && (ir = ir | 1 << Math.min($o, 31)), $o++; }
function LS(e, t, n) { if ($o > 0) {
    let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = Be() - $o - 1;
    SI(e, t, r, i, ir);
} ir = 0, $o = 0; }
function _I(e, t, n) { let o = e[C]; switch (n) {
    case Node.COMMENT_NODE: return Nu(o, t);
    case Node.TEXT_NODE: return Mu(o, t);
    case Node.ELEMENT_NODE: return bs(o, t, null);
} }
var Uo = (e, t, n, o) => (xe(!0), _I(e, n, o));
function FS(e, t, n, o) { let r = e[te], i = t - I, s = !zs() || !r || bo() || _s(r, i); return xe(s), s ? _I(e, n, o) : oy(r, i); }
function wI() { Uo = FS; }
function jS(e, t, n, o) { let r = e[C]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & Xe.COMMENT) === Xe.COMMENT, l = (s & Xe.APPEND_EAGERLY) === Xe.APPEND_EAGERLY, u = s >>> Xe.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = Uo(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = Ao()), l && n !== null && f && Gt(r, n, d, o, !1);
} }
function bI(e, t, n, o) { let r = n[C], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = Uo(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = O_(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = k(n[l])), d !== null) {
                    let m = P_(c), v = n[m];
                    Gt(r, d, v, u, !1);
                    let E = Po(e, m);
                    if (E !== null && typeof E == "object") {
                        let S = Ws(E, n);
                        S !== null && bI(e, E.create[S], n, n[E.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                js(r, Lt(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case TI:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = Uo(n, u, l, Node.COMMENT_NODE);
                    we(p, n);
                }
                break;
            case CI:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = Uo(n, f, d, Node.ELEMENT_NODE);
                    we(p, n);
                }
                break;
            default:
        }
} }
function SI(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += M(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            typeof h == "string" ? js(t[C], t[d], null, h, f, c, p) : Gu(h, t, f, c, t[C], p);
                            break;
                        case 0:
                            let m = t[d];
                            m !== null && Yg(t[C], m, c);
                            break;
                        case 2:
                            HS(e, Po(e, d), t, c);
                            break;
                        case 3:
                            lh(e, Po(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = Po(e, l);
            t[u.currentCaseLViewIndex] < 0 && lh(e, u, o, t);
        }
    }
    i += a;
} }
function lh(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = ir;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), SI(e, o, t.update[r], n, i);
} }
function HS(e, t, n, o) { let r = VS(t, o); if (Ws(t, n) !== r && (AI(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && bI(e, t.create[r], n, s), X_(n, t.anchorIdx, r);
} }
function AI(e, t, n) { let o = Ws(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = Lt(s, n);
            a !== null && yr(n[C], a);
        }
        else
            AI(e, Po(e, ~s), n);
    }
} }
function VS(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = kS(t, OS());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var cs = /�(\d+):?\d*�/gi, BS = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, $S = /�(\d+)�/, RI = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Go = "\uFFFD", US = /�\/?\*(\d+:\d+)�/gi, GS = /�(\/?[#*]\d+):?\d*�/gi, WS = /\uE500/g;
function qS(e) { return e.replace(WS, " "); }
function zS(e, t, n, o, r, i) { let s = dn(), a = [], c = [], l = [[]], u = [[]]; r = KS(r, i); let d = qS(r).split(GS); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = ql(p);
        for (let m = 0; m < h.length; m++) {
            let v = h[m];
            if ((m & 1) === 0) {
                let E = v;
                E !== "" && QS(u[0], e, s, l[0], a, c, n, E);
            }
            else {
                let E = v;
                if (typeof E != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let ce = kI(e, s, l[0], n, a, "", !0).index;
                OI(u[0], e, n, c, t, E, ce);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, m = p.charCodeAt(h ? 1 : 0), v = I + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), Ve(dn(), !1);
        else {
            let E = x_(e, l[0], v);
            l.unshift([]), Ve(E, !0);
            let S = { kind: 2, index: v, children: [], type: m === 35 ? 0 : 1 };
            u[0].push(S), u.unshift(S.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function kI(e, t, n, o, r, i, s) { let a = Ir(e, o, 1, null), c = a << Xe.SHIFT, l = dn(); t === l && (l = null), l === null && (c |= Xe.APPEND_EAGERLY), s && (c |= Xe.COMMENT, EN(F_)), r.push(c, i === null ? "" : i); let u = Zu(e, a, s ? 32 : 1, i === null ? "" : i, null); Xm(n, u); let d = u.index; return Ve(u, !1), l !== null && t !== l && k_(l, d), u; }
function QS(e, t, n, o, r, i, s, a) { let c = a.match(cs), u = kI(t, n, o, s, r, c ? null : a, !1).index; c && ls(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function ZS(e, t, n) { let r = T().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (BS.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            ls(i, c, r, a, YS(i), pl[a.toLowerCase()] ? mr : null);
        }
    }
    e.data[t] = i;
} }
function ls(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(cs), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | xI(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function YS(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function xI(e) { return 1 << Math.min(e, 31); }
function uh(e) { let t, n = "", o = 0, r = !1, i; for (; (t = US.exec(e)) !== null;)
    r ? t[0] === `${Go}/*${i}${Go}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function KS(e, t) { if (ty(t))
    return uh(e); {
    let n = e.indexOf(`:${t}${Go}`) + 2 + t.toString().length, o = e.search(new RegExp(`${Go}\\/\\*\\d+:${t}${Go}`));
    return uh(e.substring(n, o));
} }
function OI(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: Ir(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; tA(o, i, s), R_(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let m = 0; m < f.length; m++) {
        let v = f[m];
        if (typeof v != "string") {
            let E = p.push(v) - 1;
            f[m] = `<!--\uFFFD${E}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = XS(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && nA(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function JS(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(RI, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = ql(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = ql(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function ql(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            RI.test(c) ? o.push(JS(c)) : o.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return o.push(s), o; }
function XS(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = Gg(st()).getInertBodyElement(a), h = gl(p) || p; return h ? PI(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function PI(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = Ir(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let m = p, v = m.tagName.toLowerCase();
            if (dl.hasOwnProperty(v)) {
                Vc(i, CI, v, l, h), t.data[h] = v;
                let Se = m.attributes;
                for (let ze = 0; ze < Se.length; ze++) {
                    let At = Se.item(ze), Pr = At.name.toLowerCase();
                    !!At.value.match(cs) ? fl.hasOwnProperty(Pr) && ls(a, At.value, h, At.name, 0, pl[Pr] ? mr : null) : fl[Pr] && (pl[Pr] ? fh(i, h, At.name, "unsafe:blocked") : fh(i, h, At.name, At.value));
                }
                let Ce = { kind: 1, index: h, children: [] };
                e.push(Ce), f = PI(Ce.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, dh(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let E = p.textContent || "", S = E.match(cs);
            Vc(i, null, S ? "" : E, l, h), dh(s, h, d), S && (f = ls(a, E, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let ce = $S.exec(p.textContent || "");
            if (ce) {
                let Se = parseInt(ce[1], 10), Ce = u[Se];
                Vc(i, TI, "", l, h), OI(e, t, o, r, l, Ce, h), eA(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function dh(e, t, n) { n === 0 && e.push(t); }
function eA(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function tA(e, t, n) { e.push(xI(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function nA(e, t, n) { e.push(t, 1, n << 2 | 3); }
function Vc(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, L_(0, o, r)); }
function fh(e, t, n, o) { e.push(t << 1 | 1, n, o); }
var ph = 0, oA = /\[(�.+?�?)\]/, rA = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, iA = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, sA = /{([A-Z0-9_]+)}/g, aA = /�I18N_EXP_(ICU(_\d+)?)�/g, cA = /\/\*/, lA = /\d+\:(\d+)/;
function uA(e, t = {}) { let n = e; if (oA.test(e)) {
    let o = {}, r = [ph];
    n = n.replace(rA, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(m => { let v = m.match(lA), E = v ? parseInt(v[1], 10) : ph, S = cA.test(m); l.push([E, S, m]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let m = 0; m < l.length; m++)
        if (l[m][0] === u) {
            d = m;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(iA, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(sA, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(aA, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function Vd(e, t, n = -1) { let o = N(), r = g(), i = I + e, s = ae(o.consts, t), a = dn(); if (o.firstCreatePass && zS(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[Q];
    f[b] |= 32;
}
else
    r[b] |= 32; let c = o.data[i], l = a === r[se] ? null : a, u = _m(o, l, r), d = a && a.type & 8 ? r[a.index] : null; z_(r, i, a, n), jS(r, c.create, u, d), ac(!0); }
function Bd() { ac(!1); }
function LI(e, t, n) { Vd(e, t, n), Bd(); }
function FI(e, t) { let n = N(), o = ae(n.consts, t); ZS(n, e + I, o); }
function $d(e) { let t = g(); return PS($(t, de(), e)), $d; }
function jI(e) { LS(N(), g(), e + I); }
function HI(e, t = {}) { return uA(e, t); }
function Ud(e, t, n) { let o = g(), r = N(), i = T(); return qd(r, o, o[C], i, e, t, n), Ud; }
function Gd(e, t) { let n = T(), o = g(), r = N(), i = ii(r.data), s = Fm(i, n, o); return qd(r, o, s, n, e, t), Gd; }
function Wd(e, t, n) { let o = g(), r = N(), i = T(); return (i.type & 3 || n) && Sy(i, r, o, n, o[C], e, t, Fo(i, o, t)), Wd; }
function qd(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= Fo(o, t, i), Sy(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= Fo(o, t, i), Xi(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= Fo(o, t, i), Xi(o, t, d, r, r, c);
} }
function VI(e = 1) { return ep(e); }
function dA(e, t) { let n = null, o = dN(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? um(e, i, !0) : hN(o, i))
        return r;
} return n; }
function BI(e) { let t = g()[Q][se]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = vo(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? dA(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function $I(e, t = 0, n, o, r, i) { let s = g(), a = N(), c = o ? e + 1 : null; c !== null && Qt(s, a, c, o, r, i, null, n); let l = tn(a, I + e, 16, null, n || null); l.projection === null && (l.projection = t), nc(); let d = !s[te] || bo(); s[Q][se].projection[l.projection] === null && c !== null ? fA(s, a, c) : d && !Kn(l) && HN(a, s, l); }
function fA(e, t, n) { let o = I + n, r = t.data[o], i = e[o], s = Xo(i, r.tView.ssrId), a = oo(e, r, void 0, { dehydratedView: s }); ro(i, a, 0, qt(r, s)); }
function UI(e, t, n, o) { Uy(e, t, n, o); }
function GI(e, t, n) { $y(e, t, n); }
function WI(e) { let t = g(), n = N(), o = si(); So(o + 1); let r = rd(n, o); if (e.dirty && Vf(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = Wy(t, o);
        e.reset(i, Jh), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function qI() { return od(g(), si()); }
function zI(e, t, n, o, r) { qy(t, Uy(e, n, o, r)); }
function QI(e, t, n, o) { qy(e, $y(t, n, o)); }
function ZI(e = 1) { So(si() + e); }
function YI(e) { let t = oc(); return Et(t, I + e); }
function Ci(e, t) { return e << 17 | t << 2; }
function Yt(e) { return e >> 17 & 32767; }
function pA(e) { return (e & 2) == 2; }
function hA(e, t) { return e & 131071 | t << 17; }
function zl(e) { return e | 2; }
function Bn(e) { return (e & 131068) >> 2; }
function Bc(e, t) { return e & -131069 | t << 2; }
function gA(e) { return (e & 1) === 1; }
function Ql(e) { return e | 1; }
function mA(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = Yt(s), c = Bn(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || Qr(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = Yt(e[a + 1]);
        e[o + 1] = Ci(f, a), f !== 0 && (e[f + 1] = Bc(e[f + 1], o)), e[a + 1] = hA(e[a + 1], o);
    }
    else
        e[o + 1] = Ci(a, 0), a !== 0 && (e[a + 1] = Bc(e[a + 1], o)), a = o;
else
    e[o + 1] = Ci(c, 0), a === 0 ? a = o : e[c + 1] = Bc(e[c + 1], o), c = o; l && (e[o + 1] = zl(e[o + 1])), hh(e, u, o, !0), hh(e, u, o, !1), yA(t, u, e, o, i), s = Ci(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function yA(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && Qr(i, t) >= 0 && (n[o + 1] = Ql(n[o + 1])); }
function hh(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? Yt(r) : Bn(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    vA(c, t) && (a = !0, e[s + 1] = o ? Ql(l) : zl(l)), s = o ? Yt(l) : Bn(l);
} a && (e[n + 1] = o ? zl(r) : Ql(r)); }
function vA(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? Qr(e, t) >= 0 : !1; }
var ee = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function KI(e) { return e.substring(ee.key, ee.keyEnd); }
function IA(e) { return e.substring(ee.value, ee.valueEnd); }
function EA(e) { return eE(e), JI(e, $n(e, 0, ee.textEnd)); }
function JI(e, t) { let n = ee.textEnd; return n === t ? -1 : (t = ee.keyEnd = CA(e, ee.key = t, n), $n(e, t, n)); }
function DA(e) { return eE(e), XI(e, $n(e, 0, ee.textEnd)); }
function XI(e, t) { let n = ee.textEnd, o = ee.key = $n(e, t, n); return n === o ? -1 : (o = ee.keyEnd = TA(e, o, n), o = gh(e, o, n, 58), o = ee.value = $n(e, o, n), o = ee.valueEnd = MA(e, o, n), gh(e, o, n, 59)); }
function eE(e) { ee.key = 0, ee.keyEnd = 0, ee.value = 0, ee.valueEnd = 0, ee.textEnd = e.length; }
function $n(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function CA(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function TA(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function gh(e, t, n, o) { return t = $n(e, t, n), t < n && t++, t; }
function MA(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = mh(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = mh(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function mh(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function zd(e, t, n) { return oE(e, t, n, !1), zd; }
function Qd(e, t) { return oE(e, t, null, !0), Qd; }
function tE(e) { rE(aE, NA, e, !1); }
function NA(e, t) { for (let n = DA(t); n >= 0; n = XI(t, n))
    aE(e, KI(t), IA(t)); }
function nE(e) { rE(kA, _A, e, !0); }
function _A(e, t) { for (let n = EA(t); n >= 0; n = JI(t, n))
    Io(e, KI(t), !0); }
function oE(e, t, n, o) { let r = g(), i = N(), s = $e(2); if (i.firstUpdatePass && sE(i, e, s, o), t !== O && $(r, s, t)) {
    let a = i.data[oe()];
    cE(i, a, r, r[C], e, r[s + 1] = OA(t, n), o, s);
} }
function rE(e, t, n, o) { let r = N(), i = $e(2); r.firstUpdatePass && sE(r, null, i, o); let s = g(); if (n !== O && $(s, i, n)) {
    let a = r.data[oe()];
    if (lE(a, o) && !iE(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = Vr(c, n || "")), Wl(r, a, s, n, o);
    }
    else
        xA(r, a, s, s[C], s[i + 1], s[i + 1] = RA(e, t, n), o, i);
} }
function iE(e, t) { return t >= e.expandoStartIndex; }
function sE(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[oe()], s = iE(e, n);
    lE(i, o) && t === null && !s && (t = !1), t = wA(r, i, t, o), mA(r, i, t, n, s, o);
} }
function wA(e, t, n, o) { let r = ii(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = $c(null, e, t, n, o), n = sr(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = $c(r, e, t, n, o), i === null) {
            let c = bA(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = $c(null, e, t, c[1], o), c = sr(c, t.attrs, o), SA(e, t, o, c));
        }
        else
            i = AA(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function bA(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (Bn(o) !== 0)
    return e[Yt(o)]; }
function SA(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[Yt(r)] = o; }
function AA(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = sr(o, s, n);
} return sr(o, t.attrs, n); }
function $c(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = sr(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function sr(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), Io(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function RA(e, t, n) { if (n == null || n === "")
    return P; let o = [], r = lt(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function aE(e, t, n) { Io(e, t, lt(n)); }
function kA(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && Io(e, o, n); }
function xA(e, t, n, o, r, i, s, a) { r === O && (r = P); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, m;
    u === d ? (c += 2, l += 2, f !== p && (h = d, m = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, m = p), h !== null && cE(e, t, n, o, h, m, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function cE(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = gA(l) ? yh(c, t, n, r, Bn(l), s) : void 0; if (!us(u)) {
    us(i) || pA(l) && (i = yh(c, null, n, r, a, s));
    let d = Lt(oe(), n);
    BN(o, s, d, r, i);
} }
function yh(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === O && (f = d ? P : void 0);
    let p = d ? zr(f, o) : u === o ? f : void 0;
    if (l && !us(p) && (p = zr(c, o)), us(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? Yt(h) : Bn(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = zr(c, o));
} return a; }
function us(e) { return e !== void 0; }
function OA(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = on(lt(e)))), e; }
function lE(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function uE(e, t = "") { let n = g(), o = N(), r = e + I, i = o.firstCreatePass ? tn(o, r, 1, t, null) : o.data[r], s = dE(o, n, i, t, e); n[r] = s, Ao() && $u(o, n, s, i), Ve(i, !1); }
var dE = (e, t, n, o, r) => (xe(!0), Mu(t[C], o));
function PA(e, t, n, o, r) { let i = !ws(t, n); if (xe(i), i)
    return Mu(t[C], o); let s = t[te]; return Cr(s, e, t, n); }
function fE() { dE = PA; }
function pE(e, t) { let n = !1, o = Be(); for (let i = 1; i < t.length; i += 2)
    n = $(e, o++, t[i]) || n; if (sc(o), !n)
    return O; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += M(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function hE(e, t, n, o = "") { return $(e, de(), n) ? t + M(n) + o : O; }
function gE(e, t, n, o, r, i = "") { let s = Be(), a = zt(e, s, n, r); return $e(2), a ? t + M(n) + o + M(r) + i : O; }
function mE(e, t, n, o, r, i, s, a = "") { let c = Be(), l = Js(e, c, n, r, s); return $e(3), l ? t + M(n) + o + M(r) + i + M(s) + a : O; }
function yE(e, t, n, o, r, i, s, a, c, l = "") { let u = Be(), d = be(e, u, n, r, s, c); return $e(4), d ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l : O; }
function vE(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = Be(), p = be(e, f, n, r, s, c); return p = $(e, f + 4, u) || p, $e(5), p ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l + M(u) + d : O; }
function IE(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = Be(), m = be(e, h, n, r, s, c); return m = zt(e, h + 4, u, f) || m, $e(6), m ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l + M(u) + d + M(f) + p : O; }
function EE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m = "") { let v = Be(), E = be(e, v, n, r, s, c); return E = Js(e, v + 4, u, f, h) || E, $e(7), E ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l + M(u) + d + M(f) + p + M(h) + m : O; }
function DE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v, E = "") { let S = Be(), ce = be(e, S, n, r, s, c); return ce = be(e, S + 4, u, f, h, v) || ce, $e(8), ce ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l + M(u) + d + M(f) + p + M(h) + m + M(v) + E : O; }
function Zd(e) { return ha("", e), Zd; }
function ha(e, t, n) { let o = g(), r = hE(o, e, t, n); return r !== O && ft(o, oe(), r), ha; }
function Yd(e, t, n, o, r) { let i = g(), s = gE(i, e, t, n, o, r); return s !== O && ft(i, oe(), s), Yd; }
function Kd(e, t, n, o, r, i, s) { let a = g(), c = mE(a, e, t, n, o, r, i, s); return c !== O && ft(a, oe(), c), Kd; }
function Jd(e, t, n, o, r, i, s, a, c) { let l = g(), u = yE(l, e, t, n, o, r, i, s, a, c); return u !== O && ft(l, oe(), u), Jd; }
function Xd(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = vE(d, e, t, n, o, r, i, s, a, c, l, u); return f !== O && ft(d, oe(), f), Xd; }
function ef(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = IE(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== O && ft(p, oe(), h), ef; }
function tf(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let m = g(), v = EE(m, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return v !== O && ft(m, oe(), v), tf; }
function nf(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v) { let E = g(), S = DE(E, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v); return S !== O && ft(E, oe(), S), nf; }
function of(e) { let t = g(), n = pE(t, e); return n !== O && ft(t, oe(), n), of; }
function ft(e, t, n) { let o = Lt(t, e); Yg(e[C], o, n); }
function rf(e, t, n) { yc(t) && (t = t()); let o = g(), r = de(); if ($(o, r, t)) {
    let i = N(), s = _e();
    Gu(s, o, e, t, o[C], n);
} return rf; }
function CE(e, t) { let n = yc(e); return n && e.set(t), n; }
function sf(e, t) { let n = g(), o = N(), r = T(); return qd(o, n, n[C], r, e, t), sf; }
var TE = {};
function af(e) { let t = N(), n = g(), o = e + I, r = tn(t, o, 128, null, null); return Ve(r, !1), _o(t, n, o, TE), af; }
function ME(e) { Z("NgLet"); let t = N(), n = g(), o = oe(); return _o(t, n, o, e), e; }
function NE(e) { let t = oc(), n = Et(t, I + e); if (n === TE)
    throw new _(314, !1); return n; }
function _E(e, t) { let n = N(), o = g(), r = o[C], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = It(n, s + I), d = Lt(s + I, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function wE(e) { return $(g(), de(), e) ? M(e) : O; }
function bE(e, t, n = "") { return hE(g(), e, t, n); }
function SE(e, t, n, o, r = "") { return gE(g(), e, t, n, o, r); }
function AE(e, t, n, o, r, i, s = "") { return mE(g(), e, t, n, o, r, i, s); }
function RE(e, t, n, o, r, i, s, a, c = "") { return yE(g(), e, t, n, o, r, i, s, a, c); }
function kE(e, t, n, o, r, i, s, a, c, l, u = "") { return vE(g(), e, t, n, o, r, i, s, a, c, l, u); }
function xE(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return IE(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function OE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return EE(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function PE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v = "") { return DE(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v); }
function LE(e) { return pE(g(), e); }
function LA(e, t, n) { let o = N(); if (o.firstCreatePass) {
    let r = me(e);
    Zl(n, o.data, o.blueprint, r, !0), Zl(t, o.data, o.blueprint, r, !1);
} }
function Zl(e, t, n, o, r) { if (e = U(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        Zl(e[i], t, n, o, r);
else {
    let i = N(), s = g(), a = T(), c = Yr(e) ? e : U(e.provide), l = Pf(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (Yr(e) || !e.multi) {
        let p = new Ut(l, r, so, null), h = Gc(c, t, r ? u : u + f, d);
        h === -1 ? (Yc(Hi(a, s), i, c), Uc(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = Gc(c, t, u + f, d), h = Gc(c, t, u, u + f), m = p >= 0 && n[p], v = h >= 0 && n[h];
        if (r && !v || !r && !m) {
            Yc(Hi(a, s), i, c);
            let E = HA(r ? jA : FA, n.length, r, o, l, e);
            !r && v && (n[h].providerFactory = E), Uc(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(E), s.push(E);
        }
        else {
            let E = FE(n[r ? h : p], l, !r && o);
            Uc(i, e, p > -1 ? p : h, E);
        }
        !r && o && v && n[h].componentProviders++;
    }
} }
function Uc(e, t, n, o) { let r = Yr(t), i = xf(t); if (r || i) {
    let c = (i ? U(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
        }
        else
            l.push(n, c);
    }
} }
function FE(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function Gc(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function FA(e, t, n, o, r) { return Yl(this.multi, []); }
function jA(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = qo(o, o[y], this.providerFactory.index, r);
    s = c.slice(0, a), Yl(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], Yl(i, s); return s; }
function Yl(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function HA(e, t, n, o, r, i) { let s = new Ut(e, n, so, null); return s.multi = [], s.index = t, s.componentProviders = 0, FE(s, r, o && !n), s; }
function jE(e, t = []) { return n => { n.providersResolver = (o, r) => LA(o, r ? r(e) : e, t); }; }
function HE(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function VE(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = os(t, nv), o.pipeDefs = os(n, Fe); }
function BE(e, t) { return Ge(() => { let n = Zr(e); n.declarations = Ti(t.declarations || P), n.imports = Ti(t.imports || P), n.exports = Ti(t.exports || P), t.bootstrap && (n.bootstrap = Ti(t.bootstrap)), On.registerNgModule(e, t); }); }
function Ti(e) { if (typeof e == "function")
    return e; let t = Re(e); return t.some(Br) ? () => t.map(U).map(vh) : t.map(vh); }
function vh(e) { return Xu(e) ? e.ngModule : e; }
function $E(e, t, n) { let o = ue() + e, r = g(); return r[o] === O ? qe(r, o, n ? t.call(n) : t()) : Mr(r, o); }
function UE(e, t, n, o) { return JE(g(), ue(), e, t, n, o); }
function GE(e, t, n, o, r) { return XE(g(), ue(), e, t, n, o, r); }
function WE(e, t, n, o, r, i) { return eD(g(), ue(), e, t, n, o, r, i); }
function qE(e, t, n, o, r, i, s) { return tD(g(), ue(), e, t, n, o, r, i, s); }
function zE(e, t, n, o, r, i, s, a) { let c = ue() + e, l = g(), u = be(l, c, n, o, r, i); return $(l, c + 4, s) || u ? qe(l, c + 5, a ? t.call(a, n, o, r, i, s) : t(n, o, r, i, s)) : Mr(l, c + 5); }
function QE(e, t, n, o, r, i, s, a, c) { let l = ue() + e, u = g(), d = be(u, l, n, o, r, i); return zt(u, l + 4, s, a) || d ? qe(u, l + 6, c ? t.call(c, n, o, r, i, s, a) : t(n, o, r, i, s, a)) : Mr(u, l + 6); }
function ZE(e, t, n, o, r, i, s, a, c, l) { let u = ue() + e, d = g(), f = be(d, u, n, o, r, i); return Js(d, u + 4, s, a, c) || f ? qe(d, u + 7, l ? t.call(l, n, o, r, i, s, a, c) : t(n, o, r, i, s, a, c)) : Mr(d, u + 7); }
function YE(e, t, n, o, r, i, s, a, c, l, u) { let d = ue() + e, f = g(), p = be(f, d, n, o, r, i); return be(f, d + 4, s, a, c, l) || p ? qe(f, d + 8, u ? t.call(u, n, o, r, i, s, a, c, l) : t(n, o, r, i, s, a, c, l)) : Mr(f, d + 8); }
function KE(e, t, n, o) { return nD(g(), ue(), e, t, n, o); }
function Rr(e, t) { let n = e[t]; return n === O ? void 0 : n; }
function JE(e, t, n, o, r, i) { let s = t + n; return $(e, s, r) ? qe(e, s + 1, i ? o.call(i, r) : o(r)) : Rr(e, s + 1); }
function XE(e, t, n, o, r, i, s) { let a = t + n; return zt(e, a, r, i) ? qe(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : Rr(e, a + 2); }
function eD(e, t, n, o, r, i, s, a) { let c = t + n; return Js(e, c, r, i, s) ? qe(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : Rr(e, c + 3); }
function tD(e, t, n, o, r, i, s, a, c) { let l = t + n; return be(e, l, r, i, s, a) ? qe(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : Rr(e, l + 4); }
function nD(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    $(e, s++, r[c]) && (a = !0); return a ? qe(e, s, o.apply(i, r)) : Rr(e, s); }
function oD(e, t) { let n = N(), o, r = e + I; n.firstCreatePass ? (o = VA(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = qr(o.type, !0)), s, a = kt(so); try {
    let c = ji(!1), l = i();
    return ji(c), _o(n, g(), r, l), l;
}
finally {
    kt(a);
} }
function VA(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function rD(e, t, n) { let o = e + I, r = g(), i = Et(r, o); return kr(r, o) ? JE(r, ue(), t, i.transform, n, i) : i.transform(n); }
function iD(e, t, n, o) { let r = e + I, i = g(), s = Et(i, r); return kr(i, r) ? XE(i, ue(), t, s.transform, n, o, s) : s.transform(n, o); }
function sD(e, t, n, o, r) { let i = e + I, s = g(), a = Et(s, i); return kr(s, i) ? eD(s, ue(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function aD(e, t, n, o, r, i) { let s = e + I, a = g(), c = Et(a, s); return kr(a, s) ? tD(a, ue(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function cD(e, t, n) { let o = e + I, r = g(), i = Et(r, o); return kr(r, o) ? nD(r, ue(), t, i.transform, n, i) : i.transform.apply(i, n); }
function kr(e, t) { return e[y].data[t].pure; }
function lD(e, t) { return Gs(e, t); }
function uD(e, t) { return () => { try {
    return On.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function dD(e, t) { let n = G(e); n !== null && (n.debugInfo = t); }
function fD(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function pD(e, t, n, o, r = null, i = null) { let s = G(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = BA(s, G(e)); if (e[rn] = a, c.tView) {
    let l = wT().values();
    for (let u of l)
        He(u) && u[q] === null && xi(r, i, a, c, u);
} }
function BA(e, t) { let n = W({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function xi(e, t, n, o, r) { let i = r[y]; if (i === o.tView) {
    UA(e, t, n, o, r);
    return;
} for (let s = I; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (K(a)) {
        Y(a[H]) && xi(e, t, n, o, a[H]);
        for (let c = F; c < a.length; c++)
            xi(e, t, n, o, a[c]);
    }
    else
        Y(a) && xi(e, t, n, o, a);
} }
function $A(e, t) { e.componentReplaced?.(t.id); }
function UA(e, t, n, o, r) { let i = r[L], s = r[H], a = r[q], c = r[se], l = r[A].get(j, null), u = () => { if (o.encapsulation === ot.ShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = dm(n), f = Ss(a, d, i, Ru(n), s, c, null, null, null, null, null); GA(a, r, f, c.index), Er(r[y], r); let p = r[Ze].rendererFactory; $A(p, o), f[C] = p.createRenderer(s, n), Mm(r[y], r), WA(c), $s(d, f, i), Um(d, f, d.template, i); }; l === null ? Ih(e, t, u) : l.run(() => Ih(e, t, u)); }
function Ih(e, t, n) {
    try {
        n();
    }
    catch (o) {
        let r = o;
        if (t !== null && r.message) {
            let i = r.message + (r.stack ? `
` + r.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw o;
    }
}
function GA(e, t, n, o) { for (let r = I; r < e[y].bindingStartIndex; r++) {
    let i = e[r];
    if ((Y(i) || K(i)) && i[ie] === t) {
        i[ie] = n;
        break;
    }
} e[yt] === t && (e[yt] = n), e[Do] === t && (e[Do] = n), n[ie] = t[ie], t[ie] = null, e[o] = n; }
function WA(e) { if (e.projection !== null) {
    for (let t of e.projection)
        fs(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var fe = { \u0275\u0275animateEnter: Ho, \u0275\u0275animateEnterListener: Vo, \u0275\u0275animateLeave: Bo, \u0275\u0275animateLeaveListener: is, \u0275\u0275attribute: wd, \u0275\u0275defineComponent: tv, \u0275\u0275defineDirective: ov, \u0275\u0275defineInjectable: V, \u0275\u0275defineInjector: mo, \u0275\u0275defineNgModule: fd, \u0275\u0275definePipe: rv, \u0275\u0275directiveInject: so, \u0275\u0275getInheritedFactory: Qh, \u0275\u0275inject: Ae, \u0275\u0275injectAttribute: ps, \u0275\u0275invalidFactory: Ty, \u0275\u0275invalidFactoryDep: Wr, \u0275\u0275templateRefExtractor: lD, \u0275\u0275resetView: ec, \u0275\u0275HostDirectivesFeature: lv, \u0275\u0275NgOnChangesFeature: kh, \u0275\u0275ProvidersFeature: jE, \u0275\u0275CopyDefinitionFeature: cv, \u0275\u0275InheritDefinitionFeature: pd, \u0275\u0275ExternalStylesFeature: HE, \u0275\u0275nextContext: VI, \u0275\u0275namespaceHTML: pc, \u0275\u0275namespaceMathML: fc, \u0275\u0275namespaceSVG: dc, \u0275\u0275enableBindings: Ya, \u0275\u0275disableBindings: Ka, \u0275\u0275elementStart: ca, \u0275\u0275elementEnd: la, \u0275\u0275element: Ad, \u0275\u0275elementContainerStart: fa, \u0275\u0275elementContainerEnd: Sr, \u0275\u0275domElement: Rd, \u0275\u0275domElementStart: ua, \u0275\u0275domElementEnd: da, \u0275\u0275domElementContainer: Pd, \u0275\u0275domElementContainerStart: pa, \u0275\u0275domElementContainerEnd: Od, \u0275\u0275domTemplate: gd, \u0275\u0275domListener: Wd, \u0275\u0275elementContainer: xd, \u0275\u0275pureFunction0: $E, \u0275\u0275pureFunction1: UE, \u0275\u0275pureFunction2: GE, \u0275\u0275pureFunction3: WE, \u0275\u0275pureFunction4: qE, \u0275\u0275pureFunction5: zE, \u0275\u0275pureFunction6: QE, \u0275\u0275pureFunction7: ZE, \u0275\u0275pureFunction8: YE, \u0275\u0275pureFunctionV: KE, \u0275\u0275getCurrentView: EI, \u0275\u0275restoreView: Xa, \u0275\u0275listener: Ud, \u0275\u0275projection: $I, \u0275\u0275syntheticHostProperty: jd, \u0275\u0275syntheticHostListener: Gd, \u0275\u0275pipeBind1: rD, \u0275\u0275pipeBind2: iD, \u0275\u0275pipeBind3: sD, \u0275\u0275pipeBind4: aD, \u0275\u0275pipeBindV: cD, \u0275\u0275projectionDef: BI, \u0275\u0275domProperty: Fd, \u0275\u0275ariaProperty: _d, \u0275\u0275property: Sd, \u0275\u0275pipe: oD, \u0275\u0275queryRefresh: WI, \u0275\u0275queryAdvance: ZI, \u0275\u0275viewQuery: GI, \u0275\u0275viewQuerySignal: QI, \u0275\u0275loadQuery: qI, \u0275\u0275contentQuery: UI, \u0275\u0275contentQuerySignal: zI, \u0275\u0275reference: YI, \u0275\u0275classMap: nE, \u0275\u0275styleMap: tE, \u0275\u0275styleProp: zd, \u0275\u0275classProp: Qd, \u0275\u0275advance: fm, \u0275\u0275template: hd, \u0275\u0275conditional: pI, \u0275\u0275conditionalCreate: fI, \u0275\u0275conditionalBranchCreate: aa, \u0275\u0275defer: Fv, \u0275\u0275deferWhen: jv, \u0275\u0275deferOnIdle: $v, \u0275\u0275deferOnImmediate: Wv, \u0275\u0275deferOnTimer: Qv, \u0275\u0275deferOnHover: Kv, \u0275\u0275deferOnInteraction: eI, \u0275\u0275deferOnViewport: oI, \u0275\u0275deferPrefetchWhen: Hv, \u0275\u0275deferPrefetchOnIdle: Uv, \u0275\u0275deferPrefetchOnImmediate: qv, \u0275\u0275deferPrefetchOnTimer: Zv, \u0275\u0275deferPrefetchOnHover: Jv, \u0275\u0275deferPrefetchOnInteraction: tI, \u0275\u0275deferPrefetchOnViewport: rI, \u0275\u0275deferHydrateWhen: Vv, \u0275\u0275deferHydrateNever: Bv, \u0275\u0275deferHydrateOnIdle: Gv, \u0275\u0275deferHydrateOnImmediate: zv, \u0275\u0275deferHydrateOnTimer: Yv, \u0275\u0275deferHydrateOnHover: Xv, \u0275\u0275deferHydrateOnInteraction: nI, \u0275\u0275deferHydrateOnViewport: iI, \u0275\u0275deferEnableTimerScheduling: Mv, \u0275\u0275repeater: yI, \u0275\u0275repeaterCreate: mI, \u0275\u0275repeaterTrackByIndex: hI, \u0275\u0275repeaterTrackByIdentity: gI, \u0275\u0275componentInstance: dI, \u0275\u0275text: uE, \u0275\u0275textInterpolate: Zd, \u0275\u0275textInterpolate1: ha, \u0275\u0275textInterpolate2: Yd, \u0275\u0275textInterpolate3: Kd, \u0275\u0275textInterpolate4: Jd, \u0275\u0275textInterpolate5: Xd, \u0275\u0275textInterpolate6: ef, \u0275\u0275textInterpolate7: tf, \u0275\u0275textInterpolate8: nf, \u0275\u0275textInterpolateV: of, \u0275\u0275i18n: LI, \u0275\u0275i18nAttributes: FI, \u0275\u0275i18nExp: $d, \u0275\u0275i18nStart: Vd, \u0275\u0275i18nEnd: Bd, \u0275\u0275i18nApply: jI, \u0275\u0275i18nPostprocess: HI, \u0275\u0275resolveWindow: am, \u0275\u0275resolveDocument: cm, \u0275\u0275resolveBody: bu, \u0275\u0275setComponentScope: VE, \u0275\u0275setNgModuleScope: BE, \u0275\u0275registerNgModuleType: ld, \u0275\u0275getComponentDepsFactory: uD, \u0275setClassDebugInfo: dD, \u0275\u0275declareLet: af, \u0275\u0275storeLet: ME, \u0275\u0275readContextLet: NE, \u0275\u0275attachSourceLocations: _E, \u0275\u0275interpolate: wE, \u0275\u0275interpolate1: bE, \u0275\u0275interpolate2: SE, \u0275\u0275interpolate3: AE, \u0275\u0275interpolate4: RE, \u0275\u0275interpolate5: kE, \u0275\u0275interpolate6: xE, \u0275\u0275interpolate7: OE, \u0275\u0275interpolate8: PE, \u0275\u0275interpolateV: LE, \u0275\u0275sanitizeHtml: em, \u0275\u0275sanitizeStyle: tm, \u0275\u0275sanitizeResourceUrl: wu, \u0275\u0275sanitizeScript: nm, \u0275\u0275validateAttribute: sm, \u0275\u0275sanitizeUrl: _u, \u0275\u0275sanitizeUrlOrResourceUrl: im, \u0275\u0275trustConstantHtml: om, \u0275\u0275trustConstantResourceUrl: rm, forwardRef: ka, resolveForwardRef: U, \u0275\u0275twoWayProperty: rf, \u0275\u0275twoWayBindingSet: CE, \u0275\u0275twoWayListener: sf, \u0275\u0275replaceMetadata: pD, \u0275\u0275getReplaceMetadataURL: fD }, Cn = null;
function hD(e) { Cn !== null && (e.defaultEncapsulation !== Cn.defaultEncapsulation || e.preserveWhitespaces !== Cn.preserveWhitespaces) || (Cn = e); }
function qA() { return Cn; }
function zA() { Cn = null; }
var Wo = [];
function QA(e, t) { Wo.push({ moduleType: e, ngModule: t }); }
var Wc = !1;
function gD() { if (!Wc) {
    Wc = !0;
    try {
        for (let e = Wo.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = Wo[e];
            n.declarations && n.declarations.every(mD) && (Wo.splice(e, 1), XA(t, n));
        }
    }
    finally {
        Wc = !1;
    }
} }
function mD(e) { return Array.isArray(e) ? e.every(mD) : !!U(e); }
function yD(e, t = {}) { vD(e, t), t.id !== void 0 && ld(e, t.id), QA(e, t); }
function vD(e, t, n = !1) { let o = Re(t.declarations || P), r = null; Object.defineProperty(e, Oa, { configurable: !0, get: () => (r === null && (r = X({ usage: 0, kind: "NgModule", type: e }).compileNgModule(fe, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Re(t.bootstrap || P).map(U), declarations: o.map(U), imports: Re(t.imports || P).map(U).map(Eh), exports: Re(t.exports || P).map(U).map(Eh), schemas: t.schemas ? Re(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, ht, { get: () => { if (i === null) {
        let a = X({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(fe, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: hs(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, xa, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || P, imports: [(t.imports || P).map(U), (t.exports || P).map(U)] };
        s = X({ usage: 0, kind: "NgModule", type: e }).compileInjector(fe, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function ZA(e, t) { let n = `Unexpected "${Ie(e)}" found in the "declarations" array of the`, o = `"${Ie(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var YA = new WeakMap, KA = new WeakMap;
function JA() { YA = new WeakMap, KA = new WeakMap, Wo.length = 0, cb.clear(); }
function XA(e, t) { let n = Re(t.declarations || P), o = lf(e); n.forEach(r => { if (r = U(r), r.hasOwnProperty(rn)) {
    let s = G(r);
    cf(s, o);
}
else
    !r.hasOwnProperty(Ur) && !r.hasOwnProperty(Gr) && (r.ngSelectorScope = e); }); }
function cf(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(rn) ? G(n) : Me(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => Fe(n)), e.schemas = t.schemas, e.tView = null; }
function lf(e) { if (Ht(e)) {
    let t = On.getNgModuleScope(e), n = Zr(e);
    return W({ schemas: n.schemas || null }, t);
}
else if (Eo(e)) {
    if ((G(e) || Me(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (Fe(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function Eh(e) { return Xu(e) ? e.ngModule : e; }
var qc = 0;
function ID(e, t) {
    let n = null;
    Kw(e, t), DD(e, t), Object.defineProperty(e, rn, { get: () => {
            if (n === null) {
                let o = X({ usage: 0, kind: "component", type: e });
                if (Qy(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = qA(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = ot.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = CD(e, t), l = Le(W({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || P, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, interpolation: t.interpolation, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                qc++;
                try {
                    if (l.usesInheritance && TD(e), n = o.compileComponent(fe, a, l), l.isStandalone) {
                        let u = Re(t.imports || P), { directiveDefs: d, pipeDefs: f } = eR(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(U);
                    }
                }
                finally {
                    qc--;
                }
                if (qc === 0 && gD(), tR(e)) {
                    let u = lf(e.ngSelectorScope);
                    cf(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Ie(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function eR(e, t) { return { directiveDefs: () => Lo(e) ? [...On.getStandaloneComponentScope(e, t).compilation.directives].map(i => G(i) || Me(i)).filter(i => i !== null) : [], pipeDefs: () => Lo(e) ? [...On.getStandaloneComponentScope(e, t).compilation.pipes].map(i => Fe(i)).filter(i => i !== null) : [] }; }
function tR(e) { return e.ngSelectorScope !== void 0; }
function uf(e, t) { let n = null; DD(e, t || {}), Object.defineProperty(e, Ur, { get: () => { if (n === null) {
        let o = ED(e, t || {});
        n = X({ usage: 0, kind: "directive", type: e }).compileDirective(fe, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function ED(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = X({ usage: 0, kind: "directive", type: e }), i = CD(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && TD(e), { metadata: i, sourceMapUrl: o }; }
function DD(e, t) { let n = null; Object.defineProperty(e, ht, { get: () => { if (n === null) {
        let o = ED(e, t), r = X({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(fe, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: hs(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function nR(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function CD(e, t) { let n = ou(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || Te, propMetadata: o, inputs: t.inputs || P, outputs: t.outputs || P, queries: Dh(e, o, MD), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, typeSourceSpan: null, usesInheritance: !nR(e), exportAs: iR(t.exportAs), providers: t.providers || null, viewQueries: Dh(e, o, ND), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function TD(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Me(n) && !G(n) && aR(n) && uf(n, null), n = Object.getPrototypeOf(n); }
function oR(e) { return typeof e == "string" ? wD(e) : U(e); }
function rR(e, t) { return { propertyName: e, predicate: oR(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function Dh(e, t, n) { let o = []; for (let r in t)
    if (t.hasOwnProperty(r)) {
        let i = t[r];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${r}" of "${Ie(e)}" since the query selector wasn't defined.`);
            if (i.some(_D))
                throw new Error("Cannot combine @Input decorators with query decorators");
            o.push(rR(r, s));
        } });
    } return o; }
function iR(e) { return e === void 0 ? null : wD(e); }
function MD(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function ND(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function _D(e) { return e.ngMetadataName === "Input"; }
function wD(e) { return e.split(",").map(t => t.trim()); }
var sR = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function aR(e) { let t = ou(); if (sR.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (_D(s) || MD(s) || ND(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function bD(e, t) { let n = null, o = null; Object.defineProperty(e, ht, { get: () => { if (o === null) {
        let r = Ch(e, t), i = X({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(fe, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: hs(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, Gr, { get: () => { if (n === null) {
        let r = Ch(e, t);
        n = X({ usage: 0, kind: "pipe", type: r.type }).compilePipe(fe, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function Ch(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var SD = cr("Directive", (e = {}) => e, void 0, void 0, (e, t) => uf(e, t)), cR = cr("Component", (e = {}) => W({ changeDetection: gs.Default }, e), SD, void 0, (e, t) => ID(e, t)), lR = cr("Pipe", e => W({ pure: !0 }, e), void 0, void 0, (e, t) => bD(e, t)), uR = it("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), dR = it("Output", e => ({ alias: e })), fR = it("HostBinding", e => ({ hostPropertyName: e })), pR = it("HostListener", (e, t) => ({ eventName: e, args: t })), hR = cr("NgModule", e => e, void 0, void 0, (e, t) => yD(e, t)), ds = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, gR = (() => { class e {
    compileModuleSync(n) { return new jn(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = an(n), i = En(r.declarations).reduce((s, a) => { let c = G(a); return c && s.push(new bt(c)), s; }, []); return new ds(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), AD = new w(""), Kl = class {
}, mR = (() => { class e {
    zone = D(j);
    changeDetectionScheduler = D(Je);
    applicationRef = D(Pe);
    applicationErrorHandler = D(Ct);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), RD = new w("", { factory: () => !1 });
function ga({ ngZoneFactory: e, ignoreChangesOutsideZone: t, scheduleInRootZone: n }) { return e ??= () => new j(Le(W({}, ma()), { scheduleInRootZone: n })), [{ provide: j, useFactory: e }, { provide: gt, multi: !0, useFactory: () => { let o = D(mR, { optional: !0 }); return () => o.initialize(); } }, { provide: gt, multi: !0, useFactory: () => { let o = D(vR); return () => { o.initialize(); }; } }, t === !0 ? { provide: vc, useValue: !0 } : [], { provide: di, useValue: n ?? ym }, { provide: Ct, useFactory: () => { let o = D(j), r = D(mt), i; return s => { o.runOutsideAngular(() => { r.destroyed && !i ? setTimeout(() => { throw s; }) : (i ??= r.get(li), i.handleError(s)); }); }; } }]; }
function yR(e) { let t = e?.ignoreChangesOutsideZone, n = e?.scheduleInRootZone, o = ga({ ngZoneFactory: () => { let r = ma(e); return r.scheduleInRootZone = n, r.shouldCoalesceEventChangeDetection && Z("NgZone_CoalesceEvent"), new j(r); }, ignoreChangesOutsideZone: t, scheduleInRootZone: n }); return Qe([{ provide: RD, useValue: !0 }, { provide: pn, useValue: !1 }, o]); }
function ma(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var vR = (() => { class e {
    subscription = new eu;
    initialized = !1;
    zone = D(j);
    pendingTasks = D(Tt);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { j.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { j.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var ya = (() => { class e {
    applicationErrorHandler = D(Ct);
    appRef = D(Pe);
    taskService = D(Tt);
    ngZone = D(j);
    zonelessEnabled = D(pn);
    tracing = D(to, { optional: !0 });
    disableScheduling = D(vc, { optional: !0 }) ?? !1;
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new eu;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(zi) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (D(di, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { this.runningTick || this.cleanup(); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })), this.disableScheduling ||= !this.zonelessEnabled && (this.ngZone instanceof kn || !this.zoneIsDefined); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; let o = !1; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2, o = !0;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16, o = !0;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2, o = !0;
            break;
        }
        case 11: {
            o = !0;
            break;
        }
        case 9:
        case 8:
        case 7:
        case 10:
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick(o))
        return; let r = this.useMicrotaskScheduler ? Pp : vm; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => r(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => r(() => this.tick())); }
    shouldScheduleTick(n) { return !(this.disableScheduling && !n || this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(zi + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (o) {
        this.taskService.remove(n), this.applicationErrorHandler(o);
    }
    finally {
        this.cleanup();
    } this.useMicrotaskScheduler = !0, Pp(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function IR() { return Z("NgZoneless"), Qe([{ provide: Je, useExisting: ya }, { provide: j, useClass: kn }, { provide: pn, useValue: !0 }, { provide: di, useValue: !1 }, []]); }
function ER() { return typeof $localize < "u" && $localize.locale || Ar; }
var df = new w("", { providedIn: "root", factory: () => D(df, { optional: !0, skipSelf: !0 }) || ER() }), DR = new w("", { providedIn: "root", factory: () => xS }), CR = new w(""), TR = new w(""), kD = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(kD || {}), Jl = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function MR(e) { return e.map(t => t.nativeElement); }
var ar = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new Kt(t) : null; }
    get injector() { return LT(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (Mp(t) || PT(t)); }
    get context() { return Mp(this.nativeNode) || OT(this.nativeNode); }
    get listeners() { return BT(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return HT(this.nativeNode); }
    get providerTokens() { return FT(this.nativeNode); }
}, Kt = class extends ar {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = ye(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[y].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = ye(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[y].data, r = o[t.nodeIndex], i = {}; return NR(this.nativeElement, i), wR(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = ye(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[y].data[o.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, o = this.nativeElement.className; return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let o = 0; o < t.length; o++) {
        let r = t[o];
        n.push(Un(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(Un(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return Th(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return Th(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function NR(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                _R(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function _R(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function Th(e, t, n, o) { let r = ye(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[y].data[r.nodeIndex];
    Vt(s, i, t, n, o, e.nativeNode);
}
else
    ff(e.nativeNode, t, n, o); }
function Vt(e, t, n, o, r, i) { let s = Hf(e, t); if (e.type & 11) {
    if (zc(s, n, o, r, i), ge(e)) {
        let c = le(e.index, t);
        c && c[y].firstChild && Vt(c[y].firstChild, c, n, o, r, i);
    }
    else
        e.child && Vt(e.child, t, n, o, r, i), s && ff(s, n, o, r);
    let a = t[e.index];
    K(a) && Mh(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    zc(a[ke], n, o, r, i), Mh(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[Q], l = a[se].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            zc(u, n, o, r, i);
    else if (l) {
        let u = a[q], d = u[y].data[l.index];
        Vt(d, u, n, o, r, i);
    }
}
else
    e.child && Vt(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && Vt(a, t, n, o, r, i);
} }
function Mh(e, t, n, o, r) { for (let i = F; i < e.length; i++) {
    let s = e[i], a = s[y].firstChild;
    a && Vt(a, s, t, n, o, r);
} }
function zc(e, t, n, o, r) { if (r !== e) {
    let i = Un(e);
    if (!i)
        return;
    (o && i instanceof Kt && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function ff(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = Un(a);
    c && ((o && c instanceof Kt && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), ff(a, t, n, o));
} }
function wR(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(iN), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += M(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var Qc = "__ng_debug__";
function Un(e) { return e instanceof Node ? (e.hasOwnProperty(Qc) || (e[Qc] = e.nodeType == Node.ELEMENT_NODE ? new Kt(e) : new ar(e)), e[Qc]) : null; }
import "rxjs";
import "@angular/core/primitives/signals";
import "@angular/core/primitives/di";
import "rxjs/operators";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var Na = Symbol("InputSignalNode#UNSET"), JD = Le(W({}, Aa), { transformFn: void 0, applyValueToInputSignal(e, t) { Sa(e, t); } }), nO = Symbol();
function XD(e, t) { let n = Object.create(JD); n.value = e, n.transformFn = t?.transform; function o() { if (Lr(n), n.value === Na) {
    let r = null;
    throw new _(-950, r);
} return n.value; } return o[pt] = n, o; }
var lo = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })(lo || {});
var xD = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => ps(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, bR = new w("");
bR.__NG_ELEMENT_ID__ = e => { let t = T(); if (t === null)
    throw new _(204, !1); if (t.type & 2)
    return t.value; if (e & 8)
    return null; throw new _(204, !1); };
function oO(e) { return new Dc; }
function OD(e, t) { return XD(e, t); }
function SR(e) { return XD(Na, e); }
var rO = (OD.required = SR, OD);
function PD(e, t) { return sd(t); }
function AR(e, t) { return ad(t); }
var iO = (PD.required = AR, PD);
function sO(e, t) { return cd(t); }
function LD(e, t) { return sd(t); }
function RR(e, t) { return ad(t); }
var aO = (LD.required = RR, LD);
function cO(e, t) { return cd(t); }
function eC(e, t) { let n = Object.create(JD), o = new Dc; n.value = e; function r() { return Lr(n), FD(n.value), n.value; } return r[pt] = n, r.asReadonly = op.bind(r), r.set = i => { n.equal(n.value, i) || (Sa(n, i), o.emit(i)); }, r.update = i => { FD(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function FD(e) { if (e === Na)
    throw new _(952, !1); }
function jD(e, t) { return eC(e, t); }
function kR(e) { return eC(Na, e); }
var lO = (jD.required = kR, jD), tC = !0, fo = class {
}, uO = it("ContentChildren", (e, t = {}) => W({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: tC }, t), fo), dO = it("ContentChild", (e, t = {}) => W({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), fo), fO = it("ViewChildren", (e, t = {}) => W({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: tC }, t), fo), pO = it("ViewChild", (e, t) => W({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), fo);
function xR(e, t, n) { let o = new jn(n); return Promise.resolve(o); }
function HD(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var Ea = new w(""), OR = new w("");
function xr(e) { return !e.moduleRef; }
function nC(e) { let t = xr(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(j); return n.run(() => { xr(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(Ct), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), xr(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(Ea);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(Ea);
    s.add(i), e.moduleRef.onDestroy(() => { jo(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return LR(o, n, () => { let i = t.get(Tt), s = i.add(), a = t.get(Cd); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(df, Ar); if (NI(c || Ar), !t.get(OR, !0))
    return xr(e) ? t.get(Pe) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (xr(e)) {
    let u = t.get(Pe);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return oC?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => void i.remove(s)); }); }); }
var oC;
function VD() { oC = PR; }
function PR(e, t) { let n = e.injector.get(Pe); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new _(-403, !1); t.push(e); }
function LR(e, t, n) { try {
    let o = n();
    return Ed(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var rC = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = o?.scheduleInRootZone, i = () => Em(o?.ngZone, Le(W({}, ma({ eventCoalescing: o?.ngZoneEventCoalescing, runCoalescing: o?.ngZoneRunCoalescing })), { scheduleInRootZone: r })), s = o?.ignoreChangesOutsideZone, a = [ga({ ngZoneFactory: i, ignoreChangesOutsideZone: s }), { provide: Je, useExisting: ya }, gc], c = ev(n.moduleType, this.injector, a); return VD(), nC({ moduleRef: c, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = Md({}, o); return VD(), xR(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new _(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(Ea, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(Ae(De)); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), uo = null;
function FR(e) { if (_a())
    throw new _(400, !1); Td(), uo = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(rC); return sC(e), t; }
function jR(e, t, n = []) { let o = `Platform: ${t}`, r = new w(o); return (i = []) => { let s = _a(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? FR(iC(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : HR(r); }; }
function iC(e = [], t) { return De.create({ name: t, providers: [{ provide: Of, useValue: "platform" }, { provide: Ea, useValue: new Set([() => uo = null]) }, ...e] }); }
function HR(e) { let t = _a(); if (!t)
    throw new _(-401, !1); return t; }
function _a() { return typeof ngServerMode < "u" && ngServerMode ? null : uo?.get(rC) ?? null; }
function hO() { _a()?.destroy(); }
function VR(e = []) { if (uo)
    return uo; let t = iC(e); return (typeof ngServerMode > "u" || !ngServerMode) && (uo = t), Td(), sC(t), t; }
function gO(e) { return Qe([{ provide: iu, useValue: e, multi: !0 }]); }
function sC(e) { let t = e.get(iu, null); Jr(e, () => { t?.forEach(n => n()); }); }
function mO(e) { return Qe([]); }
function yO() { return !1; }
function vO() { }
function IO(e) { let t = ud(e); if (!t)
    throw aC(e); return new jn(t); }
function EO(e) { let t = ud(e); if (!t)
    throw aC(e); return t; }
function aC(e) { return new Error(`No module with ID ${e} loaded`); }
var BR = (() => { class e {
    static __NG_ELEMENT_ID__ = $R;
} return e; })();
function $R(e) { return UR(T(), g(), (e & 16) === 16); }
function UR(e, t, n) { if (ge(e) && !n) {
    let o = le(e.index, t);
    return new wt(o, o);
}
else if (e.type & 175) {
    let o = t[Q];
    return new wt(o, t);
} return null; }
var gf = class extends BR {
}, BD = class extends gf {
}, Da = class {
    constructor() { }
    supports(t) { return tr(t); }
    create(t) { return new mf(t); }
}, GR = (e, t) => t, mf = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || GR; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < $D(o, r, i) ? n : o, a = $D(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !tr(t))
        throw new _(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, wy(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new yf(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Ca), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new Ca), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, yf = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, vf = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, Ca = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new vf, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function $D(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var Ta = class {
    constructor() { }
    supports(t) { return t instanceof Map || Ks(t); }
    create() { return new If; }
}, If = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    _removalsTail = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || Ks(t)))
        throw new _(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (o, r) => { if (n && n.key === r)
        this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(r, o);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let o = n; o !== null; o = o._nextRemoved)
            o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let o = t._prev;
        return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev, s = r._next;
        return i && (i._next = s), s && (s._prev = i), r._next = null, r._prev = null, r;
    } let o = new Ef(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o)); }
}, Ef = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function UD() { return new cC([new Da]); }
var cC = (() => { class e {
    factories;
    static \u0275prov = V({ token: e, providedIn: "root", factory: UD });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = D(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || UD()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new _(901, !1); }
} return e; })();
function GD() { return new lC([new Ta]); }
var lC = (() => { class e {
    static \u0275prov = V({ token: e, providedIn: "root", factory: GD });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = D(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || GD()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new _(901, !1); }
} return e; })(), WR = [new Ta], qR = [new Da], DO = new cC(qR), CO = new lC(WR), TO = jR(null, "core", []), MO = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(Ae(Pe)); };
    static \u0275mod = fd({ type: e });
    static \u0275inj = mo({});
} return e; })();
function NO(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (x(8), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new _(-401, !1); try {
    let i = r?.injector ?? VR(o), s = [ga({}), { provide: Je, useExisting: ya }, gc, ...n || []], a = new or({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return nC({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    x(9);
} }
var va = new WeakSet, WD = "", Ia = [];
function qD(e) { return e.get(Cs, du); }
function zR() { let e = [{ provide: Cs, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = D(at);
            t = !!window._ejsas?.[n];
        } return t && Z("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: gt, useValue: () => { let t = D(Pe), { injector: n } = t; if (!va.has(t)) {
        let o = D(hr);
        if (qD(n)) {
            Dg();
            let r = n.get(at), i = Ig(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (vg(s, a, c), hu(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: wr, useFactory: () => { let t = D(Pe), { injector: n } = t; return () => { if (!qD(n) || va.has(t))
        return; va.add(t); let o = n.get(at); t.onDestroy(() => { va.delete(t), typeof ngServerMode < "u" && !ngServerMode && Cc(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(mu); QR(r, n); let i = n.get(hr); i.get(WD)?.forEach(gu), i.delete(WD); let s = r.instance; gr(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var QR = (e, t) => { let n = t.get(at), o = window._ejsas[n], r = e.instance = new up(new sp(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = dp(n); r.replayEarlyEventInfos(i), Cc(n); let s = new cp(a => { YR(t, a, a.currentTarget); }); lp(r, s); };
function ZR(e, t, n) { let o = new Map, r = t[xt], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!ip(l))
        continue;
    rp(l) ? n.capture.add(l) : n.regular.add(l);
    let u = k(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function YR(e, t, n) { let o = (n && n.getAttribute(Yn)) ?? ""; /d\d+/.test(o) ? KR(o, e, t, n) : t.eventPhase === ap.REPLAY && yu(t, n); }
function KR(e, t, n, o) { Ia.push({ event: n, currentTarget: o }), dt(t, e, JR); }
function JR(e) { let t = [...Ia], n = new Set(e); Ia = []; for (let { event: o, currentTarget: r } of t) {
    let i = r.getAttribute(Yn);
    n.has(i) ? yu(o, r) : Ia.push({ event: o, currentTarget: r });
} }
var Df = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, XR = 0;
function uC(e) { return e.ssrId || (e.ssrId = `t${XR++}`), e.ssrId; }
function dC(e, t, n) { let o = []; return xn(e, t, n, o), o.length; }
function ek(e) { let t = []; return Us(e, t), t.length; }
function fC(e, t, n) { let o = e[H]; return o && !o.hasAttribute(qn) ? Ma(o, e, null, t) : null; }
function pC(e, t, n) { let o = No(e[H]), r = fC(o, t); if (r === null)
    return; let i = k(o[H]), s = e[q], a = Ma(i, s, null, t), c = o[C], l = `${r}|${a}`; c.setAttribute(i, Mn, l); }
function _O(e, t) { let n = e.injector, o = uy(n), r = gr(n), i = new Df, s = new Map, a = e._views, c = n.get(Cs, du), l = { regular: new Set, capture: new Set }, u = new Map, d = e.injector.get(at); for (let h of a) {
    let m = vu(h);
    if (m !== null) {
        let v = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, appId: d, deferBlocks: u };
        K(m) ? pC(m, v) : fC(m, v), ik(s, t);
    }
} let f = i.getAll(), p = n.get(Jt); if (p.set(Ts, f), u.size > 0) {
    let h = {};
    for (let [m, v] of u.entries())
        h[m] = v;
    p.set(Ms, h);
} return l; }
function tk(e, t, n, o, r) { let i = [], s = ""; for (let a = F; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (He(c) && (c = c[I], K(c))) {
        u = ek(c) + 1, pC(c, r);
        let p = No(c[H]);
        d = { [vs]: p[y].ssrId, [nt]: u };
    }
    if (!d) {
        let p = c[y];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = uC(p), u = dC(p, c, p.firstChild)), d = { [vs]: l, [nt]: u };
        let h = !1;
        if (Iv(n[y], t)) {
            let m = pe(n, t), v = re(n[y], t);
            if (r.isIncrementalHydrationEnabled && v.hydrateTriggers !== null) {
                let E = `d${r.deferBlocks.size}`;
                v.hydrateTriggers.has(7) && (h = !0);
                let S = [];
                Us(e, S);
                let ce = { [nt]: S.length, [pr]: m[ut] }, Se = nk(v.hydrateTriggers);
                Se.length > 0 && (ce[Ds] = Se), o !== null && (ce[cu] = o), r.deferBlocks.set(E, ce);
                let Ce = k(e);
                Ce !== void 0 ? Ce.nodeType === Node.COMMENT_NODE && zD(Ce, E) : zD(Ce, E), h || ak(v, S, E, r), o = E, d[Es] = E;
            }
            d[pr] = m[ut];
        }
        h || Object.assign(d, hC(e[a], o, r));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[dr] ??= 1, p[dr]++;
    }
    else
        s = f, i.push(d);
} return i; }
function nk(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : n.push({ trigger: o, delay: r.delay })); return n; }
function Or(e, t, n, o) { let r = t.index - I; e[fr] ??= {}, e[fr][r] ??= iy(t, n, o); }
function pf(e, t) { let n = typeof t == "number" ? t : t.index - I; e[Zn] ??= [], e[Zn].includes(n) || e[Zn].push(n); }
function hC(e, t = null, n) { let o = {}, r = e[y], i = dy(r, n), s = n.shouldReplayEvents ? ZR(r, e, n.eventTypesToReplay) : null; for (let a = I; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - I, u = fy(e, a, n);
    if (u) {
        o[Is] ??= {}, o[Is][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            pf(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + I];
            Or(o, f, e, i);
        }
        continue;
    }
    if (fs(c) && !Kn(c)) {
        if (K(e[a]) && c.tView && (o[ys] ??= {}, o[ys][l] = uC(c.tView)), io(c, e) && sk(c)) {
            pf(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !Wa(d) && !zn(d) && (io(d, e) ? pf(o, d) : Or(o, d, e, i));
                    else
                        throw Ym(k(e[a]));
        }
        if (ok(o, c, e, i), K(e[a])) {
            let d = e[a][H];
            if (Array.isArray(d)) {
                let f = k(d);
                f.hasAttribute(qn) || Ma(f, d, t, n);
            }
            o[Qn] ??= {}, o[Qn][l] = tk(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !jh(c)) {
            let d = k(e[a][H]);
            d.hasAttribute(qn) || Ma(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[ur] ??= {}, o[ur][l] = dC(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !zn(d) && Or(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = k(e[a]);
            Eu(n, d);
        }
        if (s && c.type & 2) {
            let d = k(e[a]);
            s.has(d) && pu(d, s.get(d), t);
        }
    }
} return o; }
function ok(e, t, n, o) { Wa(t) || (t.projectionNext && t.projectionNext !== t.next && !zn(t.projectionNext) && Or(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && io(t.parent, n) && !io(t, n) && Or(e, t, n, o)); }
function rk(e) { let t = e[L]; return t?.constructor ? G(t.constructor)?.encapsulation === ot.ShadowDom : !1; }
function Ma(e, t, n, o) { let r = t[C]; if (Lf(t) && !zs() || rk(t))
    return r.setAttribute(e, qn, ""), null; {
    let i = hC(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, Mn, s.toString()), s;
} }
function zD(e, t) { e.textContent = `ngh=${t}`; }
function ik(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function sk(e) { let t = e; for (; t != null;) {
    if (ge(t))
        return !0;
    t = t.parent;
} return !1; }
function ak(e, t, n, o) { let r = xg(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        pu(s, r, n);
} }
var QD = !1, ZD = !1, YD = !1;
function ck() { QD || (QD = !0, wg(), vI(), fE(), II(), hv(), Hy(), vy(), Pm()); }
function lk() { ZD || (ZD = !0, wI(), ly(), hy()); }
function uk() { YD || (YD = !0, Lg()); }
function dk(e) { return e.whenStable(); }
var wO = "ngcm";
function bO() { let e = [{ provide: Xt, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!D(Jt, { optional: !0 })?.get(Ts, null)), t && Z("NgHydration"), t; } }, { provide: gt, useValue: () => { Ku(!1), !(typeof ngServerMode < "u" && ngServerMode) && D(Xt) && (jg(st()), ck()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: lu, useFactory: () => D(Xt) }, { provide: wr, useFactory: () => { if (D(Xt)) {
        let t = D(Pe);
        return () => { dk(t).then(() => { t.destroyed || Ju(t); }); };
    } return () => { }; }, multi: !0 }), Qe(e); }
function SO() { return [{ provide: uu, useFactory: () => D(Xt) }, { provide: gt, useValue: () => { D(Xt) && (lk(), Ku(!0), Z("NgI18nHydration")); }, multi: !0 }]; }
function AO() { let e = [zR(), { provide: fu, useValue: !0 }, { provide: ct, useClass: Cg }, { provide: gt, useValue: () => { uk(), Z("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: wr, useFactory: () => { let t = D(De), n = st(); return () => { let o = Fg(t), r = sy(n, n.body); Lv(t, o, r), Og(n, t); }; }, multi: !0 }), e; }
function RO(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function kO(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var fk = "\u{1F170}\uFE0F", wa = !1;
function xO(e) { if (!wa)
    return; let { startLabel: t } = gC(e); performance.mark(t); }
function OO(e) { if (!wa)
    return; let { startLabel: t, labelName: n, endLabel: o } = gC(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function gC(e) { let t = `${fk}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var KD = !1;
function PO() { if (!KD && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    KD = !0, console.warn("Performance API is not supported on this platform");
    return;
} wa = !0; }
function LO() { wa = !1; }
function FO(e) { let t = e; for (; t;) {
    let n = ng(t);
    if (n !== null)
        for (let o = I; o < n.length; o++) {
            let r = n[o];
            if (!Y(r) && !K(r) || r[H] !== t)
                continue;
            let i = n[y], s = It(i, o);
            if (ge(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = a.debugInfo?.className || a.type.name;
                if (c)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function jO(e) { }
function HO(e) { return X({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(fe, `ng:///${e.type.name}/\u0275fac.js`, e); }
function VO(e) { vd(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function BO(e) { Nv(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); vd(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function $O(e) { return X({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(fe, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function UO(e) { return X({ usage: 1, kind: pk(e.target), type: e.type }).compileFactoryDeclaration(fe, `ng:///${e.type.name}/\u0275fac.js`, e); }
function pk(e) { switch (e) {
    case lo.Directive: return "directive";
    case lo.Component: return "component";
    case lo.Injectable: return "injectable";
    case lo.Pipe: return "pipe";
    case lo.NgModule: return "NgModule";
} }
function GO(e) { return X({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(fe, `ng:///${e.type.name}/\u0275prov.js`, e); }
function WO(e) { return X({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(fe, `ng:///${e.type.name}/\u0275inj.js`, e); }
function qO(e) { return X({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(fe, `ng:///${e.type.name}/\u0275mod.js`, e); }
function zO(e) { return X({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(fe, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var hf = Symbol("NOT_SET"), mC = new Set, hk = Le(W({}, Aa), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: hf, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== hf && !jr(this))
        return this.signal; try {
        for (let r of this.cleanup ?? mC)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = ho(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        Fr(this, n);
    } return (this.value === hf || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), Cf = class extends Yo {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get(fn), s), this.scheduler = r; for (let a of Lu) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(hk);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (Lr(l), l.value), l.signal[pt] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? mC)
                    n();
            }
            finally {
                go(t);
            } }
};
function QO(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return xs; let n = t?.injector ?? D(De), o = n.get(Je), r = n.get(ks), i = n.get(to, null, { optional: !0 }); r.impl ??= n.get(Fu); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(ui, null, { optional: !0 }), c = new Cf(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function ZO(e, t) { let n = G(e), o = t.elementInjector || Kr(); return new bt(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function YO(e) { let t = G(e); if (!t)
    return null; let n = new bt(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function KO(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var JO = new w("", { providedIn: "platform", factory: () => null }), XO = new w("", { providedIn: "platform", factory: () => null }), eP = new w("", { providedIn: "platform", factory: () => null });
export { ZT as ANIMATION_MODULE_TYPE, wr as APP_BOOTSTRAP_LISTENER, at as APP_ID, Dd as APP_INITIALIZER, Cd as ApplicationInitStatus, MO as ApplicationModule, Pe as ApplicationRef, Yh as Attribute, AD as COMPILER_OPTIONS, YT as CSP_NONCE, DM as CUSTOM_ELEMENTS_SCHEMA, gs as ChangeDetectionStrategy, BR as ChangeDetectorRef, gR as Compiler, Kl as CompilerFactory, cR as Component, Ys as ComponentFactory, Tr as ComponentFactoryResolver, Dy as ComponentRef, dO as ContentChild, uO as ContentChildren, DR as DEFAULT_CURRENCY_CODE, RC as DOCUMENT, Kt as DebugElement, Jl as DebugEventListener, ar as DebugNode, mf as DefaultIterableDiffer, fn as DestroyRef, SD as Directive, gt as ENVIRONMENT_INITIALIZER, lr as ElementRef, BD as EmbeddedViewRef, mt as EnvironmentInjector, li as ErrorHandler, et as EventEmitter, bR as HOST_TAG_NAME, Sh as Host, xD as HostAttributeToken, fR as HostBinding, pR as HostListener, _C as INJECTOR, Nh as Inject, ET as Injectable, w as InjectionToken, De as Injector, uR as Input, cC as IterableDiffers, lC as KeyValueDiffers, df as LOCALE_ID, aI as MAX_ANIMATION_TIMEOUT, kD as MissingTranslationStrategy, ds as ModuleWithComponentFactories, CM as NO_ERRORS_SCHEMA, hR as NgModule, Jy as NgModuleFactory, Ln as NgModuleRef, Pl as NgProbeToken, j as NgZone, _h as Optional, dR as Output, Dc as OutputEmitterRef, QT as PACKAGE_ROOT_URL, zT as PLATFORM_ID, iu as PLATFORM_INITIALIZER, Ic as PendingTasks, lR as Pipe, rC as PlatformRef, fo as Query, Vi as QueryList, JO as REQUEST, eP as REQUEST_CONTEXT, XO as RESPONSE_INIT, lw as Renderer2, er as RendererFactory2, Wi as RendererStyleFlags2, Cy as Sanitizer, en as SecurityContext, wh as Self, Pi as SimpleChange, bh as SkipSelf, CR as TRANSLATIONS, TR as TRANSLATIONS_FORMAT, Jo as TemplateRef, qb as Testability, bv as TestabilityRegistry, Jt as TransferState, Ah as Type, IC as VERSION, vC as Version, pO as ViewChild, fO as ViewChildren, Xs as ViewContainerRef, ot as ViewEncapsulation, gf as ViewRef, Dm as afterEveryRender, ju as afterNextRender, QO as afterRenderEffect, MR as asNativeElements, SC as assertInInjectionContext, OC as assertNotInReactiveContext, HR as assertPlatform, RO as booleanAttribute, FC as computed, aO as contentChild, cO as contentChildren, ZO as createComponent, dd as createEnvironmentInjector, Xy as createNgModule, rb as createNgModuleRef, FR as createPlatform, jR as createPlatformFactory, DC as defineInjectable, hO as destroyPlatform, jC as effect, vO as enableProdMode, $b as enableProfiling, ka as forwardRef, Un as getDebugNode, IO as getModuleFactory, EO as getNgModuleById, _a as getPlatform, bC as importProvidersFrom, D as inject, rO as input, Ry as inputBinding, yO as isDevMode, np as isSignal, Eo as isStandalone, HC as linkedSignal, Qe as makeEnvironmentProviders, JT as makeStateKey, KO as mergeApplicationConfig, lO as model, kO as numberAttribute, oO as output, ky as outputBinding, TO as platformCore, zb as provideAppInitializer, kC as provideBrowserGlobalErrorListeners, mO as provideCheckNoChangesConfig, wC as provideEnvironmentInitializer, rN as provideNgReflectAttributes, gO as providePlatformInitializer, yR as provideZoneChangeDetection, IR as provideZonelessChangeDetection, YO as reflectComponentType, U as resolveForwardRef, VC as resource, Jr as runInInjectionContext, Sv as setTestabilityGetter, mc as signal, Aw as twoWayBinding, LC as untracked, iO as viewChild, sO as viewChildren, sI as \u0275ANIMATIONS_DISABLED, lg as \u0275AcxChangeDetectionStrategy, ug as \u0275AcxViewEncapsulation, ks as \u0275AfterRenderManager, wO as \u0275CLIENT_RENDER_MODE_FLAG, F as \u0275CONTAINER_HEADER_OFFSET, Je as \u0275ChangeDetectionScheduler, ya as \u0275ChangeDetectionSchedulerImpl, Ys as \u0275ComponentFactory, Bb as \u0275Console, Ar as \u0275DEFAULT_LOCALE_ID, Cv as \u0275DEFER_BLOCK_CONFIG, Lb as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, ct as \u0275DEHYDRATED_BLOCK_REGISTRY, md as \u0275DeferBlockBehavior, B as \u0275DeferBlockState, OR as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, Ec as \u0275EffectScheduler, cg as \u0275Framework, Sg as \u0275HydrationStatus, KT as \u0275IMAGE_CONFIG, dg as \u0275IMAGE_CONFIG_DEFAULTS, Of as \u0275INJECTOR_SCOPE, nO as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, Ct as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, eM as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, Xt as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, fu as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, hr as \u0275JSACTION_BLOCK_ELEMENT_MAP, mu as \u0275JSACTION_EVENT_CONTRACT, Bi as \u0275LContext, Vn as \u0275LocaleDataIndex, rn as \u0275NG_COMP_DEF, Ur as \u0275NG_DIR_DEF, Rt as \u0275NG_ELEMENT_ID, xa as \u0275NG_INJ_DEF, Oa as \u0275NG_MOD_DEF, Gr as \u0275NG_PIPE_DEF, $r as \u0275NG_PROV_DEF, Si as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, O as \u0275NO_CHANGE, jn as \u0275NgModuleFactory, kn as \u0275NoopNgZone, fk as \u0275PERFORMANCE_MARK_PREFIX, RD as \u0275PROVIDED_NG_ZONE, Tt as \u0275PendingTasksInternal, Va as \u0275R3Injector, Oi as \u0275ReflectionCapabilities, bt as \u0275Render3ComponentFactory, ts as \u0275Render3ComponentRef, Fn as \u0275Render3NgModuleRef, BC as \u0275ResourceImpl, _ as \u0275RuntimeError, pt as \u0275SIGNAL, Ng as \u0275SSR_CONTENT_INTEGRITY_MARKER, _v as \u0275TESTABILITY, wv as \u0275TESTABILITY_GETTER, Dv as \u0275TimerScheduler, Rs as \u0275TracingAction, to as \u0275TracingService, wt as \u0275ViewRef, Hr as \u0275XSS_SECURITY_URL, pn as \u0275ZONELESS_ENABLED, Zg as \u0275_sanitizeHtml, mr as \u0275_sanitizeUrl, Wt as \u0275allLeavingAnimations, Xn as \u0275allowSanitizationBypassAndThrow, _O as \u0275annotateForHydration, jO as \u0275assertType, bM as \u0275bypassSanitizationTrustHtml, kM as \u0275bypassSanitizationTrustResourceUrl, AM as \u0275bypassSanitizationTrustScript, SM as \u0275bypassSanitizationTrustStyle, RM as \u0275bypassSanitizationTrustUrl, Zy as \u0275clearResolutionOfComponentResourcesQueue, ID as \u0275compileComponent, uf as \u0275compileDirective, yD as \u0275compileNgModule, vD as \u0275compileNgModuleDefs, xR as \u0275compileNgModuleFactory, bD as \u0275compilePipe, La as \u0275convertToBitFlags, AC as \u0275createInjector, VR as \u0275createOrReusePlatformInjector, DO as \u0275defaultIterableDiffers, CO as \u0275defaultKeyValueDiffers, On as \u0275depsTracker, by as \u0275devModeEqual, LO as \u0275disableProfiling, PO as \u0275enableProfiling, $C as \u0275encapsulateResourceError, Hd as \u0275findLocaleData, gD as \u0275flushModuleScopingQueueAsMuchAsPossible, _f as \u0275formatRuntimeError, ZA as \u0275generateStandaloneInDeclarationsError, Vb as \u0275getAsyncClassMetadataFn, FO as \u0275getClosestComponentName, G as \u0275getComponentDef, Un as \u0275getDebugNode, ki as \u0275getDeferBlocks, jT as \u0275getDirectives, st as \u0275getDocument, VT as \u0275getHostElement, CC as \u0275getInjectableDef, ye as \u0275getLContext, bS as \u0275getLocaleCurrencyCode, DI as \u0275getLocalePluralCase, PC as \u0275getOutputDestroyRef, Ug as \u0275getSanitizationBypassType, Ub as \u0275getTransferState, MM as \u0275getUnknownElementStrictMode, _M as \u0275getUnknownPropertyStrictMode, ve as \u0275global, xy as \u0275inferTagNameFromDefinition, $R as \u0275injectChangeDetectorRef, NO as \u0275internalCreateApplication, ga as \u0275internalProvideZoneChangeDetection, Rv as \u0275isBoundToModule, Jw as \u0275isComponentDefPendingResolution, NC as \u0275isEnvironmentProviders, TC as \u0275isInjectable, Ht as \u0275isNgModule, Ed as \u0275isPromise, Av as \u0275isSubscribable, p_ as \u0275isViewDirty, h_ as \u0275markForRefresh, Ge as \u0275noSideEffects, cf as \u0275patchComponentDefWithScope, Z as \u0275performanceMarkFeature, Gb as \u0275publishExternalGlobalUtil, uM as \u0275readHydrationInfo, wS as \u0275registerLocaleData, tt as \u0275renderDeferBlockState, JA as \u0275resetCompiledComponents, fM as \u0275resetIncrementalHydrationEnabledWarnedForTests, zA as \u0275resetJitOptions, zy as \u0275resolveComponentResources, Xw as \u0275restoreComponentResolutionQueue, ob as \u0275setAllowDuplicateNgModuleIdsForTest, UC as \u0275setAlternateWeakRefImpl, dD as \u0275setClassDebugInfo, vd as \u0275setClassMetadata, Nv as \u0275setClassMetadataAsync, yC as \u0275setCurrentInjector, WT as \u0275setDocument, MC as \u0275setInjectorProfilerContext, NI as \u0275setLocaleId, TM as \u0275setUnknownElementStrictMode, NM as \u0275setUnknownPropertyStrictMode, xO as \u0275startMeasuring, OO as \u0275stopMeasuring, _o as \u0275store, on as \u0275stringify, lf as \u0275transitiveScopesFor, oa as \u0275triggerResourceLoading, EC as \u0275truncateMiddle, SS as \u0275unregisterLocaleData, lt as \u0275unwrapSafeValue, xC as \u0275unwrapWritableSignal, bO as \u0275withDomHydration, zR as \u0275withEventReplay, SO as \u0275withI18nSupport, AO as \u0275withIncrementalHydration, cv as \u0275\u0275CopyDefinitionFeature, HE as \u0275\u0275ExternalStylesFeature, lo as \u0275\u0275FactoryTarget, lv as \u0275\u0275HostDirectivesFeature, pd as \u0275\u0275InheritDefinitionFeature, kh as \u0275\u0275NgOnChangesFeature, jE as \u0275\u0275ProvidersFeature, fm as \u0275\u0275advance, Ho as \u0275\u0275animateEnter, Vo as \u0275\u0275animateEnterListener, Bo as \u0275\u0275animateLeave, is as \u0275\u0275animateLeaveListener, _d as \u0275\u0275ariaProperty, _E as \u0275\u0275attachSourceLocations, wd as \u0275\u0275attribute, nE as \u0275\u0275classMap, Qd as \u0275\u0275classProp, dI as \u0275\u0275componentInstance, pI as \u0275\u0275conditional, aa as \u0275\u0275conditionalBranchCreate, fI as \u0275\u0275conditionalCreate, UI as \u0275\u0275contentQuery, zI as \u0275\u0275contentQuerySignal, af as \u0275\u0275declareLet, Fv as \u0275\u0275defer, Mv as \u0275\u0275deferEnableTimerScheduling, Bv as \u0275\u0275deferHydrateNever, Xv as \u0275\u0275deferHydrateOnHover, Gv as \u0275\u0275deferHydrateOnIdle, zv as \u0275\u0275deferHydrateOnImmediate, nI as \u0275\u0275deferHydrateOnInteraction, Yv as \u0275\u0275deferHydrateOnTimer, iI as \u0275\u0275deferHydrateOnViewport, Vv as \u0275\u0275deferHydrateWhen, Kv as \u0275\u0275deferOnHover, $v as \u0275\u0275deferOnIdle, Wv as \u0275\u0275deferOnImmediate, eI as \u0275\u0275deferOnInteraction, Qv as \u0275\u0275deferOnTimer, oI as \u0275\u0275deferOnViewport, Jv as \u0275\u0275deferPrefetchOnHover, Uv as \u0275\u0275deferPrefetchOnIdle, qv as \u0275\u0275deferPrefetchOnImmediate, tI as \u0275\u0275deferPrefetchOnInteraction, Zv as \u0275\u0275deferPrefetchOnTimer, rI as \u0275\u0275deferPrefetchOnViewport, Hv as \u0275\u0275deferPrefetchWhen, jv as \u0275\u0275deferWhen, tv as \u0275\u0275defineComponent, ov as \u0275\u0275defineDirective, V as \u0275\u0275defineInjectable, mo as \u0275\u0275defineInjector, fd as \u0275\u0275defineNgModule, rv as \u0275\u0275definePipe, so as \u0275\u0275directiveInject, Ka as \u0275\u0275disableBindings, Rd as \u0275\u0275domElement, Pd as \u0275\u0275domElementContainer, Od as \u0275\u0275domElementContainerEnd, pa as \u0275\u0275domElementContainerStart, da as \u0275\u0275domElementEnd, ua as \u0275\u0275domElementStart, Wd as \u0275\u0275domListener, Fd as \u0275\u0275domProperty, gd as \u0275\u0275domTemplate, Ad as \u0275\u0275element, xd as \u0275\u0275elementContainer, Sr as \u0275\u0275elementContainerEnd, fa as \u0275\u0275elementContainerStart, la as \u0275\u0275elementEnd, ca as \u0275\u0275elementStart, Ya as \u0275\u0275enableBindings, uD as \u0275\u0275getComponentDepsFactory, EI as \u0275\u0275getCurrentView, Qh as \u0275\u0275getInheritedFactory, fD as \u0275\u0275getReplaceMetadataURL, LI as \u0275\u0275i18n, jI as \u0275\u0275i18nApply, FI as \u0275\u0275i18nAttributes, Bd as \u0275\u0275i18nEnd, $d as \u0275\u0275i18nExp, HI as \u0275\u0275i18nPostprocess, Vd as \u0275\u0275i18nStart, Ae as \u0275\u0275inject, ps as \u0275\u0275injectAttribute, wE as \u0275\u0275interpolate, bE as \u0275\u0275interpolate1, SE as \u0275\u0275interpolate2, AE as \u0275\u0275interpolate3, RE as \u0275\u0275interpolate4, kE as \u0275\u0275interpolate5, xE as \u0275\u0275interpolate6, OE as \u0275\u0275interpolate7, PE as \u0275\u0275interpolate8, LE as \u0275\u0275interpolateV, Ty as \u0275\u0275invalidFactory, Wr as \u0275\u0275invalidFactoryDep, Ud as \u0275\u0275listener, qI as \u0275\u0275loadQuery, pc as \u0275\u0275namespaceHTML, fc as \u0275\u0275namespaceMathML, dc as \u0275\u0275namespaceSVG, VI as \u0275\u0275nextContext, VO as \u0275\u0275ngDeclareClassMetadata, BO as \u0275\u0275ngDeclareClassMetadataAsync, $O as \u0275\u0275ngDeclareComponent, HO as \u0275\u0275ngDeclareDirective, UO as \u0275\u0275ngDeclareFactory, GO as \u0275\u0275ngDeclareInjectable, WO as \u0275\u0275ngDeclareInjector, qO as \u0275\u0275ngDeclareNgModule, zO as \u0275\u0275ngDeclarePipe, oD as \u0275\u0275pipe, rD as \u0275\u0275pipeBind1, iD as \u0275\u0275pipeBind2, sD as \u0275\u0275pipeBind3, aD as \u0275\u0275pipeBind4, cD as \u0275\u0275pipeBindV, $I as \u0275\u0275projection, BI as \u0275\u0275projectionDef, Sd as \u0275\u0275property, $E as \u0275\u0275pureFunction0, UE as \u0275\u0275pureFunction1, GE as \u0275\u0275pureFunction2, WE as \u0275\u0275pureFunction3, qE as \u0275\u0275pureFunction4, zE as \u0275\u0275pureFunction5, QE as \u0275\u0275pureFunction6, ZE as \u0275\u0275pureFunction7, YE as \u0275\u0275pureFunction8, KE as \u0275\u0275pureFunctionV, ZI as \u0275\u0275queryAdvance, WI as \u0275\u0275queryRefresh, NE as \u0275\u0275readContextLet, YI as \u0275\u0275reference, ld as \u0275\u0275registerNgModuleType, yI as \u0275\u0275repeater, mI as \u0275\u0275repeaterCreate, gI as \u0275\u0275repeaterTrackByIdentity, hI as \u0275\u0275repeaterTrackByIndex, pD as \u0275\u0275replaceMetadata, ec as \u0275\u0275resetView, bu as \u0275\u0275resolveBody, cm as \u0275\u0275resolveDocument, am as \u0275\u0275resolveWindow, Xa as \u0275\u0275restoreView, em as \u0275\u0275sanitizeHtml, wu as \u0275\u0275sanitizeResourceUrl, nm as \u0275\u0275sanitizeScript, tm as \u0275\u0275sanitizeStyle, _u as \u0275\u0275sanitizeUrl, im as \u0275\u0275sanitizeUrlOrResourceUrl, VE as \u0275\u0275setComponentScope, BE as \u0275\u0275setNgModuleScope, ME as \u0275\u0275storeLet, tE as \u0275\u0275styleMap, zd as \u0275\u0275styleProp, Gd as \u0275\u0275syntheticHostListener, jd as \u0275\u0275syntheticHostProperty, hd as \u0275\u0275template, lD as \u0275\u0275templateRefExtractor, uE as \u0275\u0275text, Zd as \u0275\u0275textInterpolate, ha as \u0275\u0275textInterpolate1, Yd as \u0275\u0275textInterpolate2, Kd as \u0275\u0275textInterpolate3, Jd as \u0275\u0275textInterpolate4, Xd as \u0275\u0275textInterpolate5, ef as \u0275\u0275textInterpolate6, tf as \u0275\u0275textInterpolate7, nf as \u0275\u0275textInterpolate8, of as \u0275\u0275textInterpolateV, om as \u0275\u0275trustConstantHtml, rm as \u0275\u0275trustConstantResourceUrl, CE as \u0275\u0275twoWayBindingSet, sf as \u0275\u0275twoWayListener, rf as \u0275\u0275twoWayProperty, sm as \u0275\u0275validateAttribute, GI as \u0275\u0275viewQuery, QI as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v20.3.18
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)

@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/core.mjs:
@angular/core/fesm2022/core.mjs:
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
