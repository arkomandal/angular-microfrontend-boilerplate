import { a as A, b as y, c as p, d as h, e as I, g as m } from "@nf-internal/chunk-7IYJBBED";
import { a as M } from "@nf-internal/chunk-VDCRBLM6";
import { \u0275DomAdapter as N, \u0275setRootDomAdapter as B, \u0275parseCookieValue as V, \u0275getDOM as O, DOCUMENT as d, \u0275PLATFORM_BROWSER_ID as x, XhrFactory as U, CommonModule as j } from "@angular/common";
import * as s from "@angular/core";
import { \u0275global as u, \u0275RuntimeError as K, \u0275internalCreateApplication as S, PLATFORM_ID as H, PLATFORM_INITIALIZER as W, createPlatformFactory as G, platformCore as Y, InjectionToken as fe, \u0275TESTABILITY_GETTER as E, \u0275TESTABILITY as z, Testability as R, NgZone as _, TestabilityRegistry as b, \u0275INJECTOR_SCOPE as J, ErrorHandler as C, RendererFactory2 as Z, ApplicationModule as X, \u0275setDocument as q } from "@angular/core";
var v = class t extends N {
    supportsDOMEvents = !0;
    static makeCurrent() { B(new t); }
    onAndCancel(o, e, n, r) { return o.addEventListener(e, n, r), () => { o.removeEventListener(e, n, r); }; }
    dispatchEvent(o, e) { o.dispatchEvent(e); }
    remove(o) { o.remove(); }
    createElement(o, e) { return e = e || this.getDefaultDocument(), e.createElement(o); }
    createHtmlDocument() { return document.implementation.createHTMLDocument("fakeTitle"); }
    getDefaultDocument() { return document; }
    isElementNode(o) { return o.nodeType === Node.ELEMENT_NODE; }
    isShadowRoot(o) { return o instanceof DocumentFragment; }
    getGlobalEventTarget(o, e) { return e === "window" ? window : e === "document" ? o : e === "body" ? o.body : null; }
    getBaseHref(o) { let e = Q(); return e == null ? null : $(e); }
    resetBaseElement() { c = null; }
    getUserAgent() { return window.navigator.userAgent; }
    getCookie(o) { return V(document.cookie, o); }
}, c = null;
function Q() { return c = c || document.head.querySelector("base"), c ? c.getAttribute("href") : null; }
function $(t) { return new URL(t, document.baseURI).pathname; }
var g = class {
    addToWindow(o) { u.getAngularTestability = (n, r = !0) => { let i = o.findTestabilityInTree(n, r); if (i == null)
        throw new K(5103, !1); return i; }, u.getAllAngularTestabilities = () => o.getAllTestabilities(), u.getAllAngularRootElements = () => o.getAllRootElements(); let e = n => { let r = u.getAllAngularTestabilities(), i = r.length, a = function () { i--, i == 0 && n(); }; r.forEach(l => { l.whenStable(a); }); }; u.frameworkStabilizers || (u.frameworkStabilizers = []), u.frameworkStabilizers.push(e); }
    findTestabilityInTree(o, e, n) { if (e == null)
        return null; let r = o.getTestability(e); return r ?? (n ? O().isShadowRoot(e) ? this.findTestabilityInTree(o, e.host, !0) : this.findTestabilityInTree(o, e.parentElement, !0) : null); }
}, ee = (() => { class t {
    build() { return new XMLHttpRequest; }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = s.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), w = ["alt", "control", "meta", "shift"], te = { "\b": "Backspace", "	": "Tab", "\x7F": "Delete", "\x1B": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" }, ne = { alt: t => t.altKey, control: t => t.ctrlKey, meta: t => t.metaKey, shift: t => t.shiftKey }, re = (() => { class t extends A {
    constructor(e) { super(e); }
    supports(e) { return t.parseEventName(e) != null; }
    addEventListener(e, n, r, i) { let a = t.parseEventName(n), l = t.eventCallback(a.fullKey, r, this.manager.getZone()); return this.manager.getZone().runOutsideAngular(() => O().onAndCancel(e, a.domEventName, l, i)); }
    static parseEventName(e) { let n = e.toLowerCase().split("."), r = n.shift(); if (n.length === 0 || !(r === "keydown" || r === "keyup"))
        return null; let i = t._normalizeKey(n.pop()), a = "", l = n.indexOf("code"); if (l > -1 && (n.splice(l, 1), a = "code."), w.forEach(T => { let D = n.indexOf(T); D > -1 && (n.splice(D, 1), a += T + "."); }), a += i, n.length != 0 || i.length === 0)
        return null; let f = {}; return f.domEventName = r, f.fullKey = a, f; }
    static matchEventFullKeyCode(e, n) { let r = te[e.key] || e.key, i = ""; return n.indexOf("code.") > -1 && (r = e.code, i = "code."), r == null || !r ? !1 : (r = r.toLowerCase(), r === " " ? r = "space" : r === "." && (r = "dot"), w.forEach(a => { if (a !== r) {
        let l = ne[a];
        l(e) && (i += a + ".");
    } }), i += r, i === n); }
    static eventCallback(e, n, r) { return i => { t.matchEventFullKeyCode(i, e) && r.runGuarded(() => n(i)); }; }
    static _normalizeKey(e) { return e === "esc" ? "escape" : e; }
    static \u0275fac = function (n) { return new (n || t)(s.\u0275\u0275inject(d)); };
    static \u0275prov = s.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })();
function Re(t, o, e) { let n = M({ rootComponent: t, platformRef: e?.platformRef }, L(o)); return S(n); }
function ve(t) { return S(L(t)); }
function L(t) { return { appProviders: [...F, ...t?.providers ?? []], platformProviders: k }; }
function ge() { return [...P]; }
function oe() { v.makeCurrent(); }
function ie() { return new C; }
function ae() { return q(document), document; }
var k = [{ provide: H, useValue: x }, { provide: W, useValue: oe, multi: !0 }, { provide: d, useFactory: ae }], Te = G(Y, "browser", k);
var P = [{ provide: E, useClass: g }, { provide: z, useClass: R, deps: [_, b, E] }, { provide: R, useClass: R, deps: [_, b, E] }], F = [{ provide: J, useValue: "root" }, { provide: C, useFactory: ie }, { provide: p, useClass: y, multi: !0, deps: [d] }, { provide: p, useClass: re, multi: !0, deps: [d] }, m, I, h, { provide: Z, useExisting: m }, { provide: U, useClass: ee }, []], De = (() => { class t {
    constructor() { }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275mod = s.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = s.\u0275\u0275defineInjector({ providers: [...F, ...P], imports: [j, X] });
} return t; })();
export { v as a, g as b, re as c, Re as d, ve as e, ge as f, Te as g, De as h };
/*! Bundled license information:

@angular/platform-browser/fesm2022/browser.mjs:
  (**
   * @license Angular v20.3.18
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
