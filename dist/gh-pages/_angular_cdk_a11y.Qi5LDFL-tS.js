import { a as Q, b as W, c as M, d as ee } from "@nf-internal/chunk-RFWTQ57W";
import { a as J } from "@nf-internal/chunk-R7WHURPC";
import "@nf-internal/chunk-WWJFM5W5";
import { a as Y, b as y, c as b, d as j, e as K, f as w, g as B, h as U, i as $, j as G, k as V, l as H, m as Z } from "@nf-internal/chunk-PVONTR5X";
import { a as N, b as F, c as S, d as k, e as L, f as P, g as x } from "@nf-internal/chunk-5KXVGZLV";
import "@nf-internal/chunk-H3UJLGDZ";
import "@nf-internal/chunk-QXX5WOHX";
import { a as p } from "@nf-internal/chunk-LYMFQPXM";
import { a as O, b as D } from "@nf-internal/chunk-VP6KNDS4";
import "@nf-internal/chunk-OIQ2QPHM";
import { a as E } from "@nf-internal/chunk-7N7HFQKY";
import "@nf-internal/chunk-JYXTBF5A";
import "@nf-internal/chunk-XSLIODQX";
import { a as z } from "@nf-internal/chunk-NTRP3R35";
import { a as X } from "@nf-internal/chunk-JLNKCSJ3";
import "@nf-internal/chunk-F64D2ISK";
import "@nf-internal/chunk-SVIUGILY";
import "@nf-internal/chunk-N26NRATF";
import { a as h } from "@nf-internal/chunk-DQM2BKPX";
import "@nf-internal/chunk-FSAIB72R";
import { a as q } from "@nf-internal/chunk-G25BAKAM";
import "@nf-internal/chunk-VDCRBLM6";
import * as _ from "@angular/core";
import { inject as o, DOCUMENT as T, APP_ID as te, InjectionToken as se, NgZone as re, Injector as ie } from "@angular/core";
import { Subject as ne } from "rxjs";
import "rxjs/operators";
import "@angular/common";
var A = " ";
function oe(r, i, t) { let e = d(r, i); t = t.trim(), !e.some(s => s.trim() === t) && (e.push(t), r.setAttribute(i, e.join(A))); }
function ae(r, i, t) { let e = d(r, i); t = t.trim(); let s = e.filter(n => n !== t); s.length ? r.setAttribute(i, s.join(A)) : r.removeAttribute(i); }
function d(r, i) { return r.getAttribute(i)?.match(/\S+/g) ?? []; }
var Me = "cdk-describedby-message-container", I = "cdk-describedby-message", c = "cdk-describedby-host", u = 0, Re = (() => { class r {
    _platform = o(h);
    _document = o(T);
    _messageRegistry = new Map;
    _messagesContainer = null;
    _id = `${u++}`;
    constructor() { o(E).load(p), this._id = o(te) + "-" + u++; }
    describe(t, e, s) { if (!this._canBeDescribed(t, e))
        return; let n = l(e, s); typeof e != "string" ? (R(e, this._id), this._messageRegistry.set(n, { messageElement: e, referenceCount: 0 })) : this._messageRegistry.has(n) || this._createMessageElement(e, s), this._isElementDescribedByMessage(t, n) || this._addMessageReference(t, n); }
    removeDescription(t, e, s) { if (!e || !this._isElementNode(t))
        return; let n = l(e, s); if (this._isElementDescribedByMessage(t, n) && this._removeMessageReference(t, n), typeof e == "string") {
        let a = this._messageRegistry.get(n);
        a && a.referenceCount === 0 && this._deleteMessageElement(n);
    } this._messagesContainer?.childNodes.length === 0 && (this._messagesContainer.remove(), this._messagesContainer = null); }
    ngOnDestroy() { let t = this._document.querySelectorAll(`[${c}="${this._id}"]`); for (let e = 0; e < t.length; e++)
        this._removeCdkDescribedByReferenceIds(t[e]), t[e].removeAttribute(c); this._messagesContainer?.remove(), this._messagesContainer = null, this._messageRegistry.clear(); }
    _createMessageElement(t, e) { let s = this._document.createElement("div"); R(s, this._id), s.textContent = t, e && s.setAttribute("role", e), this._createMessagesContainer(), this._messagesContainer.appendChild(s), this._messageRegistry.set(l(t, e), { messageElement: s, referenceCount: 0 }); }
    _deleteMessageElement(t) { this._messageRegistry.get(t)?.messageElement?.remove(), this._messageRegistry.delete(t); }
    _createMessagesContainer() { if (this._messagesContainer)
        return; let t = "cdk-describedby-message-container", e = this._document.querySelectorAll(`.${t}[platform="server"]`); for (let n = 0; n < e.length; n++)
        e[n].remove(); let s = this._document.createElement("div"); s.style.visibility = "hidden", s.classList.add(t), s.classList.add("cdk-visually-hidden"), this._platform.isBrowser || s.setAttribute("platform", "server"), this._document.body.appendChild(s), this._messagesContainer = s; }
    _removeCdkDescribedByReferenceIds(t) { let e = d(t, "aria-describedby").filter(s => s.indexOf(I) != 0); t.setAttribute("aria-describedby", e.join(" ")); }
    _addMessageReference(t, e) { let s = this._messageRegistry.get(e); oe(t, "aria-describedby", s.messageElement.id), t.setAttribute(c, this._id), s.referenceCount++; }
    _removeMessageReference(t, e) { let s = this._messageRegistry.get(e); s.referenceCount--, ae(t, "aria-describedby", s.messageElement.id), t.removeAttribute(c); }
    _isElementDescribedByMessage(t, e) { let s = d(t, "aria-describedby"), n = this._messageRegistry.get(e), a = n && n.messageElement.id; return !!a && s.indexOf(a) != -1; }
    _canBeDescribed(t, e) { if (!this._isElementNode(t))
        return !1; if (e && typeof e == "object")
        return !0; let s = e == null ? "" : `${e}`.trim(), n = t.getAttribute("aria-label"); return s ? !n || n.trim() !== s : !1; }
    _isElementNode(t) { return t.nodeType === this._document.ELEMENT_NODE; }
    static \u0275fac = function (e) { return new (e || r); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })();
function l(r, i) { return typeof r == "string" ? `${i || ""}/${r}` : r; }
function R(r, i) { r.id || (r.id = `${I}-${i}-${u++}`); }
var g = class {
    _isNoopTreeKeyManager = !0;
    change = new ne;
    destroy() { this.change.complete(); }
    onKeydown() { }
    getActiveItemIndex() { return null; }
    getActiveItem() { return null; }
    focusItem() { }
};
function ce() { return () => new g; }
var Te = { provide: M, useFactory: ce }, f = class extends b {
    _focusTrapManager;
    _inertStrategy;
    get enabled() { return this._enabled; }
    set enabled(i) { this._enabled = i, this._enabled ? this._focusTrapManager.register(this) : this._focusTrapManager.deregister(this); }
    constructor(i, t, e, s, n, a, v, C) { super(i, t, e, s, v.defer, C), this._focusTrapManager = n, this._inertStrategy = a, this._focusTrapManager.register(this); }
    destroy() { this._focusTrapManager.deregister(this), super.destroy(); }
    _enable() { this._inertStrategy.preventFocus(this), this.toggleAnchors(!0); }
    _disable() { this._inertStrategy.allowFocus(this), this.toggleAnchors(!1); }
}, m = class {
    _listener = null;
    preventFocus(i) { this._listener && i._document.removeEventListener("focus", this._listener, !0), this._listener = t => this._trapFocus(i, t), i._ngZone.runOutsideAngular(() => { i._document.addEventListener("focus", this._listener, !0); }); }
    allowFocus(i) { this._listener && (i._document.removeEventListener("focus", this._listener, !0), this._listener = null); }
    _trapFocus(i, t) { let e = t.target, s = i._element; e && !s.contains(e) && !e.closest?.("div.cdk-overlay-pane") && setTimeout(() => { i.enabled && !s.contains(i._document.activeElement) && i.focusFirstTabbableElement(); }); }
}, de = new se("FOCUS_TRAP_INERT_STRATEGY"), _e = (() => { class r {
    _focusTrapStack = [];
    register(t) { this._focusTrapStack = this._focusTrapStack.filter(s => s !== t); let e = this._focusTrapStack; e.length && e[e.length - 1]._disable(), e.push(t), t._enable(); }
    deregister(t) { t._disable(); let e = this._focusTrapStack, s = e.indexOf(t); s !== -1 && (e.splice(s, 1), e.length && e[e.length - 1]._enable()); }
    static \u0275fac = function (e) { return new (e || r); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })(), Ae = (() => { class r {
    _checker = o(y);
    _ngZone = o(re);
    _focusTrapManager = o(_e);
    _document = o(T);
    _inertStrategy;
    _injector = o(ie);
    constructor() { let t = o(de, { optional: !0 }); this._inertStrategy = t || new m; }
    create(t, e = { defer: !1 }) { let s; return typeof e == "boolean" ? s = { defer: e } : s = e, new f(t, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, s, this._injector); }
    static \u0275fac = function (e) { return new (e || r); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })();
export { Z as A11yModule, z as ActiveDescendantKeyManager, Re as AriaDescriber, c as CDK_DESCRIBEDBY_HOST_ATTRIBUTE, I as CDK_DESCRIBEDBY_ID_PREFIX, G as CdkAriaLive, x as CdkMonitorFocus, K as CdkTrapFocus, f as ConfigurableFocusTrap, Ae as ConfigurableFocusTrapFactory, m as EventListenerFocusTrapInertStrategy, L as FOCUS_MONITOR_DEFAULT_OPTIONS, de as FOCUS_TRAP_INERT_STRATEGY, J as FocusKeyManager, P as FocusMonitor, k as FocusMonitorDetectionMode, b as FocusTrap, j as FocusTrapFactory, V as HighContrastMode, H as HighContrastModeDetector, F as INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS, N as INPUT_MODALITY_DETECTOR_OPTIONS, S as InputModalityDetector, y as InteractivityChecker, Y as IsFocusableConfig, U as LIVE_ANNOUNCER_DEFAULT_OPTIONS, w as LIVE_ANNOUNCER_ELEMENT_TOKEN, B as LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, X as ListKeyManager, $ as LiveAnnouncer, Me as MESSAGES_CONTAINER_ID, ce as NOOP_TREE_KEY_MANAGER_FACTORY, Te as NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER, g as NoopTreeKeyManager, M as TREE_KEY_MANAGER, W as TREE_KEY_MANAGER_FACTORY, ee as TREE_KEY_MANAGER_FACTORY_PROVIDER, Q as TreeKeyManager, q as _IdGenerator, oe as addAriaReferencedId, d as getAriaReferenceIds, O as isFakeMousedownFromScreenReader, D as isFakeTouchstartFromScreenReader, ae as removeAriaReferencedId };
