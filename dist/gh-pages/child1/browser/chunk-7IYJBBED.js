import { a as R, b as T } from "@nf-internal/chunk-VDCRBLM6";
import { DOCUMENT as D, \u0275getDOM as k } from "@angular/common";
import * as i from "@angular/core";
import { InjectionToken as L, \u0275RuntimeError as M, APP_ID as x, CSP_NONCE as H, PLATFORM_ID as B, ViewEncapsulation as y, \u0275TracingService as $, RendererStyleFlags2 as m, \u0275allLeavingAnimations as F } from "@angular/core";
var C = class {
    _doc;
    constructor(n) { this._doc = n; }
    manager;
}, P = (() => { class o extends C {
    constructor(e) { super(e); }
    supports(e) { return !0; }
    addEventListener(e, t, s, r) { return e.addEventListener(t, s, r), () => this.removeEventListener(e, t, s, r); }
    removeEventListener(e, t, s, r) { return e.removeEventListener(t, s, r); }
    static \u0275fac = function (t) { return new (t || o)(i.\u0275\u0275inject(D)); };
    static \u0275prov = i.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), Z = new L(""), G = (() => { class o {
    _zone;
    _plugins;
    _eventNameToPlugin = new Map;
    constructor(e, t) { this._zone = t, e.forEach(a => { a.manager = this; }); let s = e.filter(a => !(a instanceof P)); this._plugins = s.slice().reverse(); let r = e.find(a => a instanceof P); r && this._plugins.push(r); }
    addEventListener(e, t, s, r) { return this._findPluginFor(t).addEventListener(e, t, s, r); }
    getZone() { return this._zone; }
    _findPluginFor(e) { let t = this._eventNameToPlugin.get(e); if (t)
        return t; if (t = this._plugins.find(r => r.supports(e)), !t)
        throw new M(5101, !1); return this._eventNameToPlugin.set(e, t), t; }
    static \u0275fac = function (t) { return new (t || o)(i.\u0275\u0275inject(Z), i.\u0275\u0275inject(i.NgZone)); };
    static \u0275prov = i.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), S = "ng-app-id";
function b(o) { for (let n of o)
    n.remove(); }
function N(o, n) { let e = n.createElement("style"); return e.textContent = o, e; }
function V(o, n, e, t) { let s = o.head?.querySelectorAll(`style[${S}="${n}"],link[${S}="${n}"]`); if (s)
    for (let r of s)
        r.removeAttribute(S), r instanceof HTMLLinkElement ? t.set(r.href.slice(r.href.lastIndexOf("/") + 1), { usage: 0, elements: [r] }) : r.textContent && e.set(r.textContent, { usage: 0, elements: [r] }); }
function A(o, n) { let e = n.createElement("link"); return e.setAttribute("rel", "stylesheet"), e.setAttribute("href", o), e; }
var z = (() => { class o {
    doc;
    appId;
    nonce;
    inline = new Map;
    external = new Map;
    hosts = new Set;
    constructor(e, t, s, r = {}) { this.doc = e, this.appId = t, this.nonce = s, V(e, t, this.inline, this.external), this.hosts.add(e.head); }
    addStyles(e, t) { for (let s of e)
        this.addUsage(s, this.inline, N); t?.forEach(s => this.addUsage(s, this.external, A)); }
    removeStyles(e, t) { for (let s of e)
        this.removeUsage(s, this.inline); t?.forEach(s => this.removeUsage(s, this.external)); }
    addUsage(e, t, s) { let r = t.get(e); r ? r.usage++ : t.set(e, { usage: 1, elements: [...this.hosts].map(a => this.addElement(a, s(e, this.doc))) }); }
    removeUsage(e, t) { let s = t.get(e); s && (s.usage--, s.usage <= 0 && (b(s.elements), t.delete(e))); }
    ngOnDestroy() { for (let [, { elements: e }] of [...this.inline, ...this.external])
        b(e); this.hosts.clear(); }
    addHost(e) { this.hosts.add(e); for (let [t, { elements: s }] of this.inline)
        s.push(this.addElement(e, N(t, this.doc))); for (let [t, { elements: s }] of this.external)
        s.push(this.addElement(e, A(t, this.doc))); }
    removeHost(e) { this.hosts.delete(e); }
    addElement(e, t) { return this.nonce && t.setAttribute("nonce", this.nonce), typeof ngServerMode < "u" && ngServerMode && t.setAttribute(S, this.appId), e.appendChild(t); }
    static \u0275fac = function (t) { return new (t || o)(i.\u0275\u0275inject(D), i.\u0275\u0275inject(x), i.\u0275\u0275inject(H, 8), i.\u0275\u0275inject(B)); };
    static \u0275prov = i.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), w = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/", math: "http://www.w3.org/1998/Math/MathML" }, _ = /%COMP%/g;
var U = "%COMP%", X = `_nghost-${U}`, Y = `_ngcontent-${U}`, q = !0, W = new L("", { providedIn: "root", factory: () => q });
function J(o) { return Y.replace(_, o); }
function K(o) { return X.replace(_, o); }
function j(o, n) { return n.map(e => e.replace(_, o)); }
var re = (() => { class o {
    eventManager;
    sharedStylesHost;
    appId;
    removeStylesOnCompDestroy;
    doc;
    ngZone;
    nonce;
    tracingService;
    rendererByCompId = new Map;
    defaultRenderer;
    platformIsServer;
    constructor(e, t, s, r, a, d, h = null, c = null) { this.eventManager = e, this.sharedStylesHost = t, this.appId = s, this.removeStylesOnCompDestroy = r, this.doc = a, this.ngZone = d, this.nonce = h, this.tracingService = c, this.platformIsServer = typeof ngServerMode < "u" && ngServerMode, this.defaultRenderer = new g(e, a, d, this.platformIsServer, this.tracingService); }
    createRenderer(e, t) { if (!e || !t)
        return this.defaultRenderer; typeof ngServerMode < "u" && ngServerMode && t.encapsulation === y.ShadowDom && (t = T(R({}, t), { encapsulation: y.Emulated })); let s = this.getOrCreateRenderer(e, t); return s instanceof E ? s.applyToHost(e) : s instanceof v && s.applyStyles(), s; }
    getOrCreateRenderer(e, t) { let s = this.rendererByCompId, r = s.get(t.id); if (!r) {
        let a = this.doc, d = this.ngZone, h = this.eventManager, c = this.sharedStylesHost, l = this.removeStylesOnCompDestroy, f = this.platformIsServer, u = this.tracingService;
        switch (t.encapsulation) {
            case y.Emulated:
                r = new E(h, c, t, this.appId, l, a, d, f, u);
                break;
            case y.ShadowDom: return new O(h, c, e, t, a, d, this.nonce, f, u);
            default:
                r = new v(h, c, t, l, a, d, f, u);
                break;
        }
        s.set(t.id, r);
    } return r; }
    ngOnDestroy() { this.rendererByCompId.clear(); }
    componentReplaced(e) { this.rendererByCompId.delete(e); }
    static \u0275fac = function (t) { return new (t || o)(i.\u0275\u0275inject(G), i.\u0275\u0275inject(z), i.\u0275\u0275inject(x), i.\u0275\u0275inject(W), i.\u0275\u0275inject(D), i.\u0275\u0275inject(i.NgZone), i.\u0275\u0275inject(H), i.\u0275\u0275inject($, 8)); };
    static \u0275prov = i.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), g = class {
    eventManager;
    doc;
    ngZone;
    platformIsServer;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(n, e, t, s, r) { this.eventManager = n, this.doc = e, this.ngZone = t, this.platformIsServer = s, this.tracingService = r; }
    destroy() { }
    destroyNode = null;
    createElement(n, e) { return e ? this.doc.createElementNS(w[e] || e, n) : this.doc.createElement(n); }
    createComment(n) { return this.doc.createComment(n); }
    createText(n) { return this.doc.createTextNode(n); }
    appendChild(n, e) { (I(n) ? n.content : n).appendChild(e); }
    insertBefore(n, e, t) { n && (I(n) ? n.content : n).insertBefore(e, t); }
    removeChild(n, e) { e.remove(); }
    selectRootElement(n, e) { let t = typeof n == "string" ? this.doc.querySelector(n) : n; if (!t)
        throw new M(-5104, !1); return e || (t.textContent = ""), t; }
    parentNode(n) { return n.parentNode; }
    nextSibling(n) { return n.nextSibling; }
    setAttribute(n, e, t, s) { if (s) {
        e = s + ":" + e;
        let r = w[s];
        r ? n.setAttributeNS(r, e, t) : n.setAttribute(e, t);
    }
    else
        n.setAttribute(e, t); }
    removeAttribute(n, e, t) { if (t) {
        let s = w[t];
        s ? n.removeAttributeNS(s, e) : n.removeAttribute(`${t}:${e}`);
    }
    else
        n.removeAttribute(e); }
    addClass(n, e) { n.classList.add(e); }
    removeClass(n, e) { n.classList.remove(e); }
    setStyle(n, e, t, s) { s & (m.DashCase | m.Important) ? n.style.setProperty(e, t, s & m.Important ? "important" : "") : n.style[e] = t; }
    removeStyle(n, e, t) { t & m.DashCase ? n.style.removeProperty(e) : n.style[e] = ""; }
    setProperty(n, e, t) { n != null && (n[e] = t); }
    setValue(n, e) { n.nodeValue = e; }
    listen(n, e, t, s) { if (typeof n == "string" && (n = k().getGlobalEventTarget(this.doc, n), !n))
        throw new M(5102, !1); let r = this.decoratePreventDefault(t); return this.tracingService?.wrapEventListener && (r = this.tracingService.wrapEventListener(n, e, r)), this.eventManager.addEventListener(n, e, r, s); }
    decoratePreventDefault(n) { return e => { if (e === "__ngUnwrap__")
        return n; (typeof ngServerMode < "u" && ngServerMode ? this.ngZone.runGuarded(() => n(e)) : n(e)) === !1 && e.preventDefault(); }; }
};
function I(o) { return o.tagName === "TEMPLATE" && o.content !== void 0; }
var O = class extends g {
    sharedStylesHost;
    hostEl;
    shadowRoot;
    constructor(n, e, t, s, r, a, d, h, c) { super(n, r, a, h, c), this.sharedStylesHost = e, this.hostEl = t, this.shadowRoot = t.attachShadow({ mode: "open" }), this.sharedStylesHost.addHost(this.shadowRoot); let l = s.styles; l = j(s.id, l); for (let u of l) {
        let p = document.createElement("style");
        d && p.setAttribute("nonce", d), p.textContent = u, this.shadowRoot.appendChild(p);
    } let f = s.getExternalStyles?.(); if (f)
        for (let u of f) {
            let p = A(u, r);
            d && p.setAttribute("nonce", d), this.shadowRoot.appendChild(p);
        } }
    nodeOrShadowRoot(n) { return n === this.hostEl ? this.shadowRoot : n; }
    appendChild(n, e) { return super.appendChild(this.nodeOrShadowRoot(n), e); }
    insertBefore(n, e, t) { return super.insertBefore(this.nodeOrShadowRoot(n), e, t); }
    removeChild(n, e) { return super.removeChild(null, e); }
    parentNode(n) { return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n))); }
    destroy() { this.sharedStylesHost.removeHost(this.shadowRoot); }
}, v = class extends g {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(n, e, t, s, r, a, d, h, c) { super(n, r, a, d, h), this.sharedStylesHost = e, this.removeStylesOnCompDestroy = s; let l = t.styles; this.styles = c ? j(c, l) : l, this.styleUrls = t.getExternalStyles?.(c); }
    applyStyles() { this.sharedStylesHost.addStyles(this.styles, this.styleUrls); }
    destroy() { this.removeStylesOnCompDestroy && F.size === 0 && this.sharedStylesHost.removeStyles(this.styles, this.styleUrls); }
}, E = class extends v {
    contentAttr;
    hostAttr;
    constructor(n, e, t, s, r, a, d, h, c) { let l = s + "-" + t.id; super(n, e, t, r, a, d, h, c, l), this.contentAttr = J(l), this.hostAttr = K(l); }
    applyToHost(n) { this.applyStyles(), this.setAttribute(n, this.hostAttr, ""); }
    createElement(n, e) { let t = super.createElement(n, e); return super.setAttribute(t, this.contentAttr, ""), t; }
};
export { C as a, P as b, Z as c, G as d, z as e, W as f, re as g };
/*! Bundled license information:

@angular/platform-browser/fesm2022/dom_renderer.mjs:
  (**
   * @license Angular v20.3.18
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
