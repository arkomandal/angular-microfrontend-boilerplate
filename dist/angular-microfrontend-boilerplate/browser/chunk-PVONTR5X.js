import { b as A, d as v } from "@nf-internal/chunk-H3UJLGDZ";
import { a as h } from "@nf-internal/chunk-LYMFQPXM";
import { c as p } from "@nf-internal/chunk-OIQ2QPHM";
import { a as d } from "@nf-internal/chunk-7N7HFQKY";
import { b as g } from "@nf-internal/chunk-XSLIODQX";
import { a as l } from "@nf-internal/chunk-DQM2BKPX";
import * as a from "@angular/core";
import { inject as r, afterNextRender as F, NgZone as b, DOCUMENT as m, Injector as w, ElementRef as N, booleanAttribute as E, InjectionToken as I } from "@angular/core";
var T = class {
    ignoreVisibility = !1;
}, x = (() => { class t {
    _platform = r(l);
    constructor() { }
    isDisabled(e) { return e.hasAttribute("disabled"); }
    isVisible(e) { return M(e) && getComputedStyle(e).visibility === "visible"; }
    isTabbable(e) { if (!this._platform.isBrowser)
        return !1; let i = D(V(e)); if (i && (y(i) === -1 || !this.isVisible(i)))
        return !1; let s = e.nodeName.toLowerCase(), o = y(e); return e.hasAttribute("contenteditable") ? o !== -1 : s === "iframe" || s === "object" || this._platform.WEBKIT && this._platform.IOS && !j(e) ? !1 : s === "audio" ? e.hasAttribute("controls") ? o !== -1 : !1 : s === "video" ? o === -1 ? !1 : o !== null ? !0 : this._platform.FIREFOX || e.hasAttribute("controls") : e.tabIndex >= 0; }
    isFocusable(e, i) { return P(e) && !this.isDisabled(e) && (i?.ignoreVisibility || this.isVisible(e)); }
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function D(t) { try {
    return t.frameElement;
}
catch {
    return null;
} }
function M(t) { return !!(t.offsetWidth || t.offsetHeight || typeof t.getClientRects == "function" && t.getClientRects().length); }
function S(t) { let n = t.nodeName.toLowerCase(); return n === "input" || n === "select" || n === "button" || n === "textarea"; }
function R(t) { return H(t) && t.type == "hidden"; }
function B(t) { return W(t) && t.hasAttribute("href"); }
function H(t) { return t.nodeName.toLowerCase() == "input"; }
function W(t) { return t.nodeName.toLowerCase() == "a"; }
function L(t) { if (!t.hasAttribute("tabindex") || t.tabIndex === void 0)
    return !1; let n = t.getAttribute("tabindex"); return !!(n && !isNaN(parseInt(n, 10))); }
function y(t) { if (!L(t))
    return null; let n = parseInt(t.getAttribute("tabindex") || "", 10); return isNaN(n) ? -1 : n; }
function j(t) { let n = t.nodeName.toLowerCase(), e = n === "input" && t.type; return e === "text" || e === "password" || n === "select" || n === "textarea"; }
function P(t) { return R(t) ? !1 : S(t) || B(t) || t.hasAttribute("contenteditable") || L(t); }
function V(t) { return t.ownerDocument && t.ownerDocument.defaultView || window; }
var _ = class {
    _element;
    _checker;
    _ngZone;
    _document;
    _injector;
    _startAnchor;
    _endAnchor;
    _hasAttached = !1;
    startAnchorListener = () => this.focusLastTabbableElement();
    endAnchorListener = () => this.focusFirstTabbableElement();
    get enabled() { return this._enabled; }
    set enabled(n) { this._enabled = n, this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(n, this._startAnchor), this._toggleAnchorTabIndex(n, this._endAnchor)); }
    _enabled = !0;
    constructor(n, e, i, s, o = !1, c) { this._element = n, this._checker = e, this._ngZone = i, this._document = s, this._injector = c, o || this.attachAnchors(); }
    destroy() { let n = this._startAnchor, e = this._endAnchor; n && (n.removeEventListener("focus", this.startAnchorListener), n.remove()), e && (e.removeEventListener("focus", this.endAnchorListener), e.remove()), this._startAnchor = this._endAnchor = null, this._hasAttached = !1; }
    attachAnchors() { return this._hasAttached ? !0 : (this._ngZone.runOutsideAngular(() => { this._startAnchor || (this._startAnchor = this._createAnchor(), this._startAnchor.addEventListener("focus", this.startAnchorListener)), this._endAnchor || (this._endAnchor = this._createAnchor(), this._endAnchor.addEventListener("focus", this.endAnchorListener)); }), this._element.parentNode && (this._element.parentNode.insertBefore(this._startAnchor, this._element), this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling), this._hasAttached = !0), this._hasAttached); }
    focusInitialElementWhenReady(n) { return new Promise(e => { this._executeOnStable(() => e(this.focusInitialElement(n))); }); }
    focusFirstTabbableElementWhenReady(n) { return new Promise(e => { this._executeOnStable(() => e(this.focusFirstTabbableElement(n))); }); }
    focusLastTabbableElementWhenReady(n) { return new Promise(e => { this._executeOnStable(() => e(this.focusLastTabbableElement(n))); }); }
    _getRegionBoundary(n) { let e = this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`); return n == "start" ? e.length ? e[0] : this._getFirstTabbableElement(this._element) : e.length ? e[e.length - 1] : this._getLastTabbableElement(this._element); }
    focusInitialElement(n) { let e = this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]"); if (e) {
        if (!this._checker.isFocusable(e)) {
            let i = this._getFirstTabbableElement(e);
            return i?.focus(n), !!i;
        }
        return e.focus(n), !0;
    } return this.focusFirstTabbableElement(n); }
    focusFirstTabbableElement(n) { let e = this._getRegionBoundary("start"); return e && e.focus(n), !!e; }
    focusLastTabbableElement(n) { let e = this._getRegionBoundary("end"); return e && e.focus(n), !!e; }
    hasAttached() { return this._hasAttached; }
    _getFirstTabbableElement(n) { if (this._checker.isFocusable(n) && this._checker.isTabbable(n))
        return n; let e = n.children; for (let i = 0; i < e.length; i++) {
        let s = e[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(e[i]) : null;
        if (s)
            return s;
    } return null; }
    _getLastTabbableElement(n) { if (this._checker.isFocusable(n) && this._checker.isTabbable(n))
        return n; let e = n.children; for (let i = e.length - 1; i >= 0; i--) {
        let s = e[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(e[i]) : null;
        if (s)
            return s;
    } return null; }
    _createAnchor() { let n = this._document.createElement("div"); return this._toggleAnchorTabIndex(this._enabled, n), n.classList.add("cdk-visually-hidden"), n.classList.add("cdk-focus-trap-anchor"), n.setAttribute("aria-hidden", "true"), n; }
    _toggleAnchorTabIndex(n, e) { n ? e.setAttribute("tabindex", "0") : e.removeAttribute("tabindex"); }
    toggleAnchors(n) { this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(n, this._startAnchor), this._toggleAnchorTabIndex(n, this._endAnchor)); }
    _executeOnStable(n) { this._injector ? F(n, { injector: this._injector }) : setTimeout(n); }
}, K = (() => { class t {
    _checker = r(x);
    _ngZone = r(b);
    _document = r(m);
    _injector = r(w);
    constructor() { r(d).load(h); }
    create(e, i = !1) { return new _(e, this._checker, this._ngZone, this._document, i, this._injector); }
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), ae = (() => { class t {
    _elementRef = r(N);
    _focusTrapFactory = r(K);
    focusTrap;
    _previouslyFocusedElement = null;
    get enabled() { return this.focusTrap?.enabled || !1; }
    set enabled(e) { this.focusTrap && (this.focusTrap.enabled = e); }
    autoCapture;
    constructor() { r(l).isBrowser && (this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, !0)); }
    ngOnDestroy() { this.focusTrap?.destroy(), this._previouslyFocusedElement && (this._previouslyFocusedElement.focus(), this._previouslyFocusedElement = null); }
    ngAfterContentInit() { this.focusTrap?.attachAnchors(), this.autoCapture && this._captureFocus(); }
    ngDoCheck() { this.focusTrap && !this.focusTrap.hasAttached() && this.focusTrap.attachAnchors(); }
    ngOnChanges(e) { let i = e.autoCapture; i && !i.firstChange && this.autoCapture && this.focusTrap?.hasAttached() && this._captureFocus(); }
    _captureFocus() { this._previouslyFocusedElement = p(), this.focusTrap?.focusInitialElementWhenReady(); }
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["", "cdkTrapFocus", ""]], inputs: { enabled: [2, "cdkTrapFocus", "enabled", E], autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", E] }, exportAs: ["cdkTrapFocus"], features: [a.\u0275\u0275NgOnChangesFeature] });
} return t; })(), Z = new I("liveAnnouncerElement", { providedIn: "root", factory: $ });
function $() { return null; }
var U = new I("LIVE_ANNOUNCER_DEFAULT_OPTIONS"), q = 0, G = (() => { class t {
    _ngZone = r(b);
    _defaultOptions = r(U, { optional: !0 });
    _liveElement;
    _document = r(m);
    _previousTimeout;
    _currentPromise;
    _currentResolve;
    constructor() { let e = r(Z, { optional: !0 }); this._liveElement = e || this._createLiveElement(); }
    announce(e, ...i) { let s = this._defaultOptions, o, c; return i.length === 1 && typeof i[0] == "number" ? c = i[0] : [o, c] = i, this.clear(), clearTimeout(this._previousTimeout), o || (o = s && s.politeness ? s.politeness : "polite"), c == null && s && (c = s.duration), this._liveElement.setAttribute("aria-live", o), this._liveElement.id && this._exposeAnnouncerToModals(this._liveElement.id), this._ngZone.runOutsideAngular(() => (this._currentPromise || (this._currentPromise = new Promise(O => this._currentResolve = O)), clearTimeout(this._previousTimeout), this._previousTimeout = setTimeout(() => { this._liveElement.textContent = e, typeof c == "number" && (this._previousTimeout = setTimeout(() => this.clear(), c)), this._currentResolve?.(), this._currentPromise = this._currentResolve = void 0; }, 100), this._currentPromise)); }
    clear() { this._liveElement && (this._liveElement.textContent = ""); }
    ngOnDestroy() { clearTimeout(this._previousTimeout), this._liveElement?.remove(), this._liveElement = null, this._currentResolve?.(), this._currentPromise = this._currentResolve = void 0; }
    _createLiveElement() { let e = "cdk-live-announcer-element", i = this._document.getElementsByClassName(e), s = this._document.createElement("div"); for (let o = 0; o < i.length; o++)
        i[o].remove(); return s.classList.add(e), s.classList.add("cdk-visually-hidden"), s.setAttribute("aria-atomic", "true"), s.setAttribute("aria-live", "polite"), s.id = `cdk-live-announcer-${q++}`, this._document.body.appendChild(s), s; }
    _exposeAnnouncerToModals(e) { let i = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]'); for (let s = 0; s < i.length; s++) {
        let o = i[s], c = o.getAttribute("aria-owns");
        c ? c.indexOf(e) === -1 && o.setAttribute("aria-owns", c + " " + e) : o.setAttribute("aria-owns", e);
    } }
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), ce = (() => { class t {
    _elementRef = r(N);
    _liveAnnouncer = r(G);
    _contentObserver = r(A);
    _ngZone = r(b);
    get politeness() { return this._politeness; }
    set politeness(e) { this._politeness = e === "off" || e === "assertive" ? e : "polite", this._politeness === "off" ? this._subscription && (this._subscription.unsubscribe(), this._subscription = null) : this._subscription || (this._subscription = this._ngZone.runOutsideAngular(() => this._contentObserver.observe(this._elementRef).subscribe(() => { let i = this._elementRef.nativeElement.textContent; i !== this._previousAnnouncedText && (this._liveAnnouncer.announce(i, this._politeness, this.duration), this._previousAnnouncedText = i); }))); }
    _politeness = "polite";
    duration;
    _previousAnnouncedText;
    _subscription;
    constructor() { r(d).load(h); }
    ngOnDestroy() { this._subscription && this._subscription.unsubscribe(); }
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["", "cdkAriaLive", ""]], inputs: { politeness: [0, "cdkAriaLive", "politeness"], duration: [0, "cdkAriaLiveDuration", "duration"] }, exportAs: ["cdkAriaLive"] });
} return t; })(), u = (function (t) { return t[t.NONE = 0] = "NONE", t[t.BLACK_ON_WHITE = 1] = "BLACK_ON_WHITE", t[t.WHITE_ON_BLACK = 2] = "WHITE_ON_BLACK", t; })(u || {}), C = "cdk-high-contrast-black-on-white", k = "cdk-high-contrast-white-on-black", f = "cdk-high-contrast-active", X = (() => { class t {
    _platform = r(l);
    _hasCheckedHighContrastMode;
    _document = r(m);
    _breakpointSubscription;
    constructor() { this._breakpointSubscription = r(g).observe("(forced-colors: active)").subscribe(() => { this._hasCheckedHighContrastMode && (this._hasCheckedHighContrastMode = !1, this._applyBodyHighContrastModeCssClasses()); }); }
    getHighContrastMode() { if (!this._platform.isBrowser)
        return u.NONE; let e = this._document.createElement("div"); e.style.backgroundColor = "rgb(1,2,3)", e.style.position = "absolute", this._document.body.appendChild(e); let i = this._document.defaultView || window, s = i && i.getComputedStyle ? i.getComputedStyle(e) : null, o = (s && s.backgroundColor || "").replace(/ /g, ""); switch (e.remove(), o) {
        case "rgb(0,0,0)":
        case "rgb(45,50,54)":
        case "rgb(32,32,32)": return u.WHITE_ON_BLACK;
        case "rgb(255,255,255)":
        case "rgb(255,250,239)": return u.BLACK_ON_WHITE;
    } return u.NONE; }
    ngOnDestroy() { this._breakpointSubscription.unsubscribe(); }
    _applyBodyHighContrastModeCssClasses() { if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
        let e = this._document.body.classList;
        e.remove(f, C, k), this._hasCheckedHighContrastMode = !0;
        let i = this.getHighContrastMode();
        i === u.BLACK_ON_WHITE ? e.add(f, C) : i === u.WHITE_ON_BLACK && e.add(f, k);
    } }
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), ue = (() => { class t {
    constructor() { r(X)._applyBodyHighContrastModeCssClasses(); }
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275mod = a.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = a.\u0275\u0275defineInjector({ imports: [v] });
} return t; })();
export { T as a, x as b, _ as c, K as d, ae as e, Z as f, $ as g, U as h, G as i, ce as j, u as k, X as l, ue as m };
