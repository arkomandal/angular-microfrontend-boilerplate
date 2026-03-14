import { g as Lt } from "@nf-internal/chunk-BHG4M34P";
import { \u0275setRootDomAdapter as Do, DOCUMENT as St, XhrFactory as Co, PlatformLocation as Ai, \u0275getDOM as Fa, \u0275PLATFORM_SERVER_ID as Lo, ViewportScroller as Ao, \u0275NullViewportScroller as ko } from "@angular/common";
import * as ke from "@angular/core";
import { InjectionToken as Ba, inject as At, Injector as Tr, \u0275startMeasuring as ki, \u0275stopMeasuring as Mi, Optional as Mo, APP_ID as Io, TransferState as Oo, PLATFORM_ID as Ro, PLATFORM_INITIALIZER as Ho, \u0275setDocument as qo, createPlatformFactory as Fo, platformCore as Bo, Testability as Po, \u0275TESTABILITY as Uo } from "@angular/core";
import { \u0275BrowserDomAdapter as Ii, EventManagerPlugin as Vo, EVENT_MANAGER_PLUGINS as jo, BrowserModule as Go } from "@angular/platform-browser";
import { \u0275HTTP_ROOT_INTERCEPTOR_FNS as zo } from "@angular/common/http";
import { Subject as Wo } from "rxjs";
function Ko(l) { return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l; }
var Kr = {}, Xr, An;
function jt() { if (An)
    return Xr; An = 1, Xr = l, l.CAPTURING_PHASE = 1, l.AT_TARGET = 2, l.BUBBLING_PHASE = 3; function l(f, t) { if (this.type = "", this.target = null, this.currentTarget = null, this.eventPhase = l.AT_TARGET, this.bubbles = !1, this.cancelable = !1, this.isTrusted = !1, this.defaultPrevented = !1, this.timeStamp = Date.now(), this._propagationStopped = !1, this._immediatePropagationStopped = !1, this._initialized = !0, this._dispatching = !1, f && (this.type = f), t)
    for (var a in t)
        this[a] = t[a]; } return l.prototype = Object.create(Object.prototype, { constructor: { value: l }, stopPropagation: { value: function () { this._propagationStopped = !0; } }, stopImmediatePropagation: { value: function () { this._propagationStopped = !0, this._immediatePropagationStopped = !0; } }, preventDefault: { value: function () { this.cancelable && (this.defaultPrevented = !0); } }, initEvent: { value: function (t, a, s) { this._initialized = !0, !this._dispatching && (this._propagationStopped = !1, this._immediatePropagationStopped = !1, this.defaultPrevented = !1, this.isTrusted = !1, this.target = null, this.type = t, this.bubbles = a, this.cancelable = s); } } }), Xr; }
var Qr, kn;
function Oi() { if (kn)
    return Qr; kn = 1; var l = jt(); Qr = f; function f() { l.call(this), this.view = null, this.detail = 0; } return f.prototype = Object.create(l.prototype, { constructor: { value: f }, initUIEvent: { value: function (t, a, s, i, c) { this.initEvent(t, a, s), this.view = i, this.detail = c; } } }), Qr; }
var Yr, Mn;
function Ri() { if (Mn)
    return Yr; Mn = 1; var l = Oi(); Yr = f; function f() { l.call(this), this.screenX = this.screenY = this.clientX = this.clientY = 0, this.ctrlKey = this.altKey = this.shiftKey = this.metaKey = !1, this.button = 0, this.buttons = 1, this.relatedTarget = null; } return f.prototype = Object.create(l.prototype, { constructor: { value: f }, initMouseEvent: { value: function (t, a, s, i, c, u, x, d, m, A, F, W, M, P, K) { switch (this.initEvent(t, a, s, i, c), this.screenX = u, this.screenY = x, this.clientX = d, this.clientY = m, this.ctrlKey = A, this.altKey = F, this.shiftKey = W, this.metaKey = M, this.button = P, P) {
            case 0:
                this.buttons = 1;
                break;
            case 1:
                this.buttons = 4;
                break;
            case 2:
                this.buttons = 2;
                break;
            default:
                this.buttons = 0;
                break;
        } this.relatedTarget = K; } }, getModifierState: { value: function (t) { switch (t) {
            case "Alt": return this.altKey;
            case "Control": return this.ctrlKey;
            case "Shift": return this.shiftKey;
            case "Meta": return this.metaKey;
            default: return !1;
        } } } }), Yr; }
var ue = {}, Zr = {}, In;
function Pa() { return In || (In = 1, Zr.isApiWritable = !globalThis.__domino_frozen__), Zr; }
var On;
function we() {
    if (On)
        return ue;
    On = 1;
    var l = Pa().isApiWritable;
    return ue.NAMESPACE = { HTML: "http://www.w3.org/1999/xhtml", XML: "http://www.w3.org/XML/1998/namespace", XMLNS: "http://www.w3.org/2000/xmlns/", MATHML: "http://www.w3.org/1998/Math/MathML", SVG: "http://www.w3.org/2000/svg", XLINK: "http://www.w3.org/1999/xlink" }, ue.IndexSizeError = () => { throw new DOMException("The index is not in the allowed range", "IndexSizeError"); }, ue.HierarchyRequestError = () => { throw new DOMException("The node tree hierarchy is not correct", "HierarchyRequestError"); }, ue.WrongDocumentError = () => { throw new DOMException("The object is in the wrong Document", "WrongDocumentError"); }, ue.InvalidCharacterError = () => { throw new DOMException("The string contains invalid characters", "InvalidCharacterError"); }, ue.NoModificationAllowedError = () => { throw new DOMException("The object cannot be modified", "NoModificationAllowedError"); }, ue.NotFoundError = () => { throw new DOMException("The object can not be found here", "NotFoundError"); }, ue.NotSupportedError = () => { throw new DOMException("The operation is not supported", "NotSupportedError"); }, ue.InvalidStateError = () => { throw new DOMException("The object is in an invalid state", "InvalidStateError"); }, ue.SyntaxError = () => { throw new DOMException("The string did not match the expected pattern", "SyntaxError"); }, ue.InvalidModificationError = () => { throw new DOMException("The object can not be modified in this way", "InvalidModificationError"); }, ue.NamespaceError = () => { throw new DOMException("The operation is not allowed by Namespaces in XML", "NamespaceError"); }, ue.InvalidAccessError = () => { throw new DOMException("The object does not support the operation or argument", "InvalidAccessError"); }, ue.TypeMismatchError = () => { throw new DOMException("The type of the object does not match the expected type", "TypeMismatchError"); }, ue.SecurityError = () => { throw new DOMException("The operation is insecure", "SecurityError"); }, ue.NetworkError = () => { throw new DOMException("A network error occurred", "NetworkError"); }, ue.AbortError = () => { throw new DOMException("The operation was aborted", "AbortError"); }, ue.UrlMismatchError = () => { throw new DOMException("The given URL does not match another URL", "URLMismatchError"); }, ue.QuotaExceededError = () => { throw new DOMException("The quota has been exceeded", "QuotaExceededError"); }, ue.TimeoutError = () => { throw new DOMException("The operation timed out", "TimeoutError"); }, ue.InvalidNodeTypeError = () => { throw new DOMException("The node is of an invalid type", "InvalidNodeTypeError"); }, ue.DataCloneError = () => { throw new DOMException("The object can not be cloned", "DataCloneError"); }, ue.InUseAttributeError = () => { throw new DOMException("The attribute is already in use", "InUseAttributeError"); }, ue.nyi = function () { throw new Error("NotYetImplemented"); }, ue.shouldOverride = function () { throw new Error("Abstract function; should be overriding in subclass."); }, ue.assert = function (f, t) {
        if (!f)
            throw new Error("Assertion failed: " + (t || "") + `
` + new Error().stack);
    }, ue.expose = function (f, t) { for (var a in f)
        Object.defineProperty(t.prototype, a, { value: f[a], writable: l }); }, ue.merge = function (f, t) { for (var a in t)
        f[a] = t[a]; }, ue.documentOrder = function (f, t) { return 3 - (f.compareDocumentPosition(t) & 6); }, ue.toASCIILowerCase = function (f) { return f.replace(/[A-Z]+/g, function (t) { return t.toLowerCase(); }); }, ue.toASCIIUpperCase = function (f) { return f.replace(/[a-z]+/g, function (t) { return t.toUpperCase(); }); }, ue;
}
var $r, Rn;
function Hi() { if (Rn)
    return $r; Rn = 1; var l = jt(), f = Ri(), t = we(); $r = a; function a() { } return a.prototype = { addEventListener: function (i, c, u) { if (c) {
        u === void 0 && (u = !1), this._listeners || (this._listeners = Object.create(null)), this._listeners[i] || (this._listeners[i] = []);
        for (var x = this._listeners[i], d = 0, m = x.length; d < m; d++) {
            var A = x[d];
            if (A.listener === c && A.capture === u)
                return;
        }
        var F = { listener: c, capture: u };
        typeof c == "function" && (F.f = c), x.push(F);
    } }, removeEventListener: function (i, c, u) { if (u === void 0 && (u = !1), this._listeners) {
        var x = this._listeners[i];
        if (x)
            for (var d = 0, m = x.length; d < m; d++) {
                var A = x[d];
                if (A.listener === c && A.capture === u) {
                    x.length === 1 ? this._listeners[i] = void 0 : x.splice(d, 1);
                    return;
                }
            }
    } }, dispatchEvent: function (i) { return this._dispatchEvent(i, !1); }, _dispatchEvent: function (i, c) { typeof c != "boolean" && (c = !1); function u(W, M) { var P = M.type, K = M.eventPhase; if (M.currentTarget = W, K !== l.CAPTURING_PHASE && W._handlers && W._handlers[P]) {
        var w = W._handlers[P], b;
        if (typeof w == "function")
            b = w.call(M.currentTarget, M);
        else {
            var _ = w.handleEvent;
            if (typeof _ != "function")
                throw new TypeError("handleEvent property of event handler object isnot a function.");
            b = _.call(w, M);
        }
        switch (M.type) {
            case "mouseover":
                b === !0 && M.preventDefault();
                break;
            case "beforeunload":
            default:
                b === !1 && M.preventDefault();
                break;
        }
    } var y = W._listeners && W._listeners[P]; if (y) {
        y = y.slice();
        for (var j = 0, ve = y.length; j < ve; j++) {
            if (M._immediatePropagationStopped)
                return;
            var U = y[j];
            if (!(K === l.CAPTURING_PHASE && !U.capture || K === l.BUBBLING_PHASE && U.capture))
                if (U.f)
                    U.f.call(M.currentTarget, M);
                else {
                    var D = U.listener.handleEvent;
                    if (typeof D != "function")
                        throw new TypeError("handleEvent property of event listener object is not a function.");
                    D.call(U.listener, M);
                }
        }
    } } (!i._initialized || i._dispatching) && t.InvalidStateError(), i.isTrusted = c, i._dispatching = !0, i.target = this; for (var x = [], d = this.parentNode; d; d = d.parentNode)
        x.push(d); i.eventPhase = l.CAPTURING_PHASE; for (var m = x.length - 1; m >= 0 && (u(x[m], i), !i._propagationStopped); m--)
        ; if (i._propagationStopped || (i.eventPhase = l.AT_TARGET, u(this, i)), i.bubbles && !i._propagationStopped) {
        i.eventPhase = l.BUBBLING_PHASE;
        for (var A = 0, F = x.length; A < F && (u(x[A], i), !i._propagationStopped); A++)
            ;
    } if (i._dispatching = !1, i.eventPhase = l.AT_TARGET, i.currentTarget = null, c && !i.defaultPrevented && i instanceof f)
        switch (i.type) {
            case "mousedown":
                this._armed = { x: i.clientX, y: i.clientY, t: i.timeStamp };
                break;
            case "mouseout":
            case "mouseover":
                this._armed = null;
                break;
            case "mouseup":
                this._isClick(i) && this._doClick(i), this._armed = null;
                break;
        } return !i.defaultPrevented; }, _isClick: function (s) { return this._armed !== null && s.type === "mouseup" && s.isTrusted && s.button === 0 && s.timeStamp - this._armed.t < 1e3 && Math.abs(s.clientX - this._armed.x) < 10 && Math.abs(s.clientY - this._armed.Y) < 10; }, _doClick: function (s) { if (!this._click_in_progress) {
        this._click_in_progress = !0;
        for (var i = this; i && !i._post_click_activation_steps;)
            i = i.parentNode;
        i && i._pre_click_activation_steps && i._pre_click_activation_steps();
        var c = this.ownerDocument.createEvent("MouseEvent");
        c.initMouseEvent("click", !0, !0, this.ownerDocument.defaultView, 1, s.screenX, s.screenY, s.clientX, s.clientY, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.button, null);
        var u = this._dispatchEvent(c, !0);
        i && (u ? i._post_click_activation_steps && i._post_click_activation_steps(c) : i._cancelled_activation_steps && i._cancelled_activation_steps());
    } }, _setEventHandler: function (i, c) { this._handlers || (this._handlers = Object.create(null)), this._handlers[i] = c; }, _getEventHandler: function (i) { return this._handlers && this._handlers[i] || null; } }, $r; }
var Jr = { exports: {} }, Hn;
function qi() { if (Hn)
    return Jr.exports; Hn = 1; var l = we(), f = Jr.exports = { valid: function (t) { return l.assert(t, "list falsy"), l.assert(t._previousSibling, "previous falsy"), l.assert(t._nextSibling, "next falsy"), !0; }, insertBefore: function (t, a) { l.assert(f.valid(t) && f.valid(a)); var s = t, i = t._previousSibling, c = a, u = a._previousSibling; s._previousSibling = u, i._nextSibling = c, u._nextSibling = s, c._previousSibling = i, l.assert(f.valid(t) && f.valid(a)); }, replace: function (t, a) { l.assert(f.valid(t) && (a === null || f.valid(a))), a !== null && f.insertBefore(a, t), f.remove(t), l.assert(f.valid(t) && (a === null || f.valid(a))); }, remove: function (t) { l.assert(f.valid(t)); var a = t._previousSibling; if (a !== t) {
        var s = t._nextSibling;
        a._nextSibling = s, s._previousSibling = a, t._previousSibling = t._nextSibling = t, l.assert(f.valid(t));
    } } }; return Jr.exports; }
var ea, qn;
function Fi() {
    if (qn)
        return ea;
    qn = 1, ea = { serializeOne: M, \u0275escapeMatchingClosingTag: m, \u0275escapeClosingCommentTag: F, \u0275escapeProcessingInstructionContent: W };
    var l = we(), f = l.NAMESPACE, t = { STYLE: !0, SCRIPT: !0, XMP: !0, IFRAME: !0, NOEMBED: !0, NOFRAMES: !0, PLAINTEXT: !0 }, a = { area: !0, base: !0, basefont: !0, bgsound: !0, br: !0, col: !0, embed: !0, frame: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, s = {};
    let i = /[&<>\u00A0]/g, c = /[&"<>\u00A0]/g;
    function u(P) { return i.test(P) ? P.replace(i, K => { switch (K) {
        case "&": return "&amp;";
        case "<": return "&lt;";
        case ">": return "&gt;";
        case "\xA0": return "&nbsp;";
    } }) : P; }
    function x(P) { return c.test(P) ? P.replace(c, K => { switch (K) {
        case "<": return "&lt;";
        case ">": return "&gt;";
        case "&": return "&amp;";
        case '"': return "&quot;";
        case "\xA0": return "&nbsp;";
    } }) : P; }
    function d(P) { var K = P.namespaceURI; return K ? K === f.XML ? "xml:" + P.localName : K === f.XLINK ? "xlink:" + P.localName : K === f.XMLNS ? P.localName === "xmlns" ? "xmlns" : "xmlns:" + P.localName : P.name : P.localName; }
    function m(P, K) { let w = "</" + K; if (!P.toLowerCase().includes(w))
        return P; let b = [...P], _ = P.matchAll(new RegExp(w, "ig")); for (let y of _)
        b[y.index] = "&lt;"; return b.join(""); }
    let A = /--!?>/;
    function F(P) { return A.test(P) ? P.replace(/(--\!?)>/g, "$1&gt;") : P; }
    function W(P) { return P.includes(">") ? P.replaceAll(">", "&gt;") : P; }
    function M(P, K) {
        var w = "";
        switch (P.nodeType) {
            case 1:
                var b = P.namespaceURI, _ = b === f.HTML, y = _ || b === f.SVG || b === f.MATHML ? P.localName : P.tagName;
                w += "<" + y;
                for (var j = 0, ve = P._numattrs; j < ve; j++) {
                    var U = P._attr(j);
                    w += " " + d(U), U.value !== void 0 && (w += '="' + x(U.value) + '"');
                }
                if (w += ">", !(_ && a[y])) {
                    var D = P.serialize();
                    t[y.toUpperCase()] && (D = m(D, y)), _ && s[y] && D.charAt(0) === `
` && (w += `
`), w += D, w += "</" + y + ">";
                }
                break;
            case 3:
            case 4:
                var I;
                K.nodeType === 1 && K.namespaceURI === f.HTML ? I = K.tagName : I = "", t[I] || I === "NOSCRIPT" && K.ownerDocument._scripting_enabled ? w += P.data : w += u(P.data);
                break;
            case 8:
                w += "<!--" + F(P.data) + "-->";
                break;
            case 7:
                let E = W(P.data);
                w += "<?" + P.target + " " + E + "?>";
                break;
            case 10:
                w += "<!DOCTYPE " + P.name, w += ">";
                break;
            default: l.InvalidStateError();
        }
        return w;
    }
    return ea;
}
var ta, Fn;
function De() { if (Fn)
    return ta; Fn = 1, ta = s; var l = Hi(), f = qi(), t = Fi(), a = we(); function s() { l.call(this), this.parentNode = null, this._nextSibling = this._previousSibling = this, this._index = void 0; } var i = s.ELEMENT_NODE = 1, c = s.ATTRIBUTE_NODE = 2, u = s.TEXT_NODE = 3, x = s.CDATA_SECTION_NODE = 4, d = s.ENTITY_REFERENCE_NODE = 5, m = s.ENTITY_NODE = 6, A = s.PROCESSING_INSTRUCTION_NODE = 7, F = s.COMMENT_NODE = 8, W = s.DOCUMENT_NODE = 9, M = s.DOCUMENT_TYPE_NODE = 10, P = s.DOCUMENT_FRAGMENT_NODE = 11, K = s.NOTATION_NODE = 12, w = s.DOCUMENT_POSITION_DISCONNECTED = 1, b = s.DOCUMENT_POSITION_PRECEDING = 2, _ = s.DOCUMENT_POSITION_FOLLOWING = 4, y = s.DOCUMENT_POSITION_CONTAINS = 8, j = s.DOCUMENT_POSITION_CONTAINED_BY = 16, ve = s.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32; return s.prototype = Object.create(l.prototype, { baseURI: { get: a.nyi }, parentElement: { get: function () { return this.parentNode && this.parentNode.nodeType === i ? this.parentNode : null; } }, hasChildNodes: { value: a.shouldOverride }, firstChild: { get: a.shouldOverride }, lastChild: { get: a.shouldOverride }, isConnected: { get: function () { let U = this; for (; U != null;) {
            if (U.nodeType === s.DOCUMENT_NODE)
                return !0;
            U = U.parentNode, U != null && U.nodeType === s.DOCUMENT_FRAGMENT_NODE && (U = U.host);
        } return !1; } }, previousSibling: { get: function () { var U = this.parentNode; return !U || this === U.firstChild ? null : this._previousSibling; } }, nextSibling: { get: function () { var U = this.parentNode, D = this._nextSibling; return !U || D === U.firstChild ? null : D; } }, textContent: { get: function () { return null; }, set: function (U) { } }, innerText: { get: function () { return null; }, set: function (U) { } }, _countChildrenOfType: { value: function (U) { for (var D = 0, I = this.firstChild; I !== null; I = I.nextSibling)
            I.nodeType === U && D++; return D; } }, _ensureInsertValid: { value: function (D, I, E) { var o = this, g, n; if (!D.nodeType)
            throw new TypeError("not a node"); switch (o.nodeType) {
            case W:
            case P:
            case i: break;
            default: a.HierarchyRequestError();
        } switch (D.isAncestor(o) && a.HierarchyRequestError(), (I !== null || !E) && I.parentNode !== o && a.NotFoundError(), D.nodeType) {
            case P:
            case M:
            case i:
            case u:
            case A:
            case F: break;
            default: a.HierarchyRequestError();
        } if (o.nodeType === W)
            switch (D.nodeType) {
                case u:
                    a.HierarchyRequestError();
                    break;
                case P:
                    switch (D._countChildrenOfType(u) > 0 && a.HierarchyRequestError(), D._countChildrenOfType(i)) {
                        case 0: break;
                        case 1:
                            if (I !== null)
                                for (E && I.nodeType === M && a.HierarchyRequestError(), n = I.nextSibling; n !== null; n = n.nextSibling)
                                    n.nodeType === M && a.HierarchyRequestError();
                            g = o._countChildrenOfType(i), E ? g > 0 && a.HierarchyRequestError() : (g > 1 || g === 1 && I.nodeType !== i) && a.HierarchyRequestError();
                            break;
                        default: a.HierarchyRequestError();
                    }
                    break;
                case i:
                    if (I !== null)
                        for (E && I.nodeType === M && a.HierarchyRequestError(), n = I.nextSibling; n !== null; n = n.nextSibling)
                            n.nodeType === M && a.HierarchyRequestError();
                    g = o._countChildrenOfType(i), E ? g > 0 && a.HierarchyRequestError() : (g > 1 || g === 1 && I.nodeType !== i) && a.HierarchyRequestError();
                    break;
                case M:
                    if (I === null)
                        o._countChildrenOfType(i) && a.HierarchyRequestError();
                    else
                        for (n = o.firstChild; n !== null && n !== I; n = n.nextSibling)
                            n.nodeType === i && a.HierarchyRequestError();
                    g = o._countChildrenOfType(M), E ? g > 0 && a.HierarchyRequestError() : (g > 1 || g === 1 && I.nodeType !== M) && a.HierarchyRequestError();
                    break;
            }
        else
            D.nodeType === M && a.HierarchyRequestError(); } }, insertBefore: { value: function (D, I) { var E = this; E._ensureInsertValid(D, I, !0); var o = I; return o === D && (o = D.nextSibling), E.doc.adoptNode(D), D._insertOrReplace(E, o, !1), D; } }, appendChild: { value: function (U) { return this.insertBefore(U, null); } }, _appendChild: { value: function (U) { U._insertOrReplace(this, null, !1); } }, removeChild: { value: function (D) { var I = this; if (!D.nodeType)
            throw new TypeError("not a node"); return D.parentNode !== I && a.NotFoundError(), D.remove(), D; } }, replaceChild: { value: function (D, I) { var E = this; return E._ensureInsertValid(D, I, !1), D.doc !== E.doc && E.doc.adoptNode(D), D._insertOrReplace(E, I, !0), I; } }, contains: { value: function (D) { return D === null ? !1 : this === D ? !0 : (this.compareDocumentPosition(D) & j) !== 0; } }, compareDocumentPosition: { value: function (D) { if (this === D)
            return 0; if (this.doc !== D.doc || this.rooted !== D.rooted)
            return w + ve; for (var I = [], E = [], o = this; o !== null; o = o.parentNode)
            I.push(o); for (o = D; o !== null; o = o.parentNode)
            E.push(o); if (I.reverse(), E.reverse(), I[0] !== E[0])
            return w + ve; o = Math.min(I.length, E.length); for (var g = 1; g < o; g++)
            if (I[g] !== E[g])
                return I[g].index < E[g].index ? _ : b; return I.length < E.length ? _ + j : b + y; } }, isSameNode: { value: function (D) { return this === D; } }, isEqualNode: { value: function (D) { if (!D || D.nodeType !== this.nodeType || !this.isEqual(D))
            return !1; for (var I = this.firstChild, E = D.firstChild; I && E; I = I.nextSibling, E = E.nextSibling)
            if (!I.isEqualNode(E))
                return !1; return I === null && E === null; } }, cloneNode: { value: function (U) { var D = this.clone(); if (U)
            for (var I = this.firstChild; I !== null; I = I.nextSibling)
                D._appendChild(I.cloneNode(!0)); return D; } }, lookupPrefix: { value: function (D) { var I; if (D === "" || D === null || D === void 0)
            return null; switch (this.nodeType) {
            case i: return this._lookupNamespacePrefix(D, this);
            case W: return I = this.documentElement, I ? I.lookupPrefix(D) : null;
            case m:
            case K:
            case P:
            case M: return null;
            case c: return I = this.ownerElement, I ? I.lookupPrefix(D) : null;
            default: return I = this.parentElement, I ? I.lookupPrefix(D) : null;
        } } }, lookupNamespaceURI: { value: function (D) { (D === "" || D === void 0) && (D = null); var I; switch (this.nodeType) {
            case i: return a.shouldOverride();
            case W: return I = this.documentElement, I ? I.lookupNamespaceURI(D) : null;
            case m:
            case K:
            case M:
            case P: return null;
            case c: return I = this.ownerElement, I ? I.lookupNamespaceURI(D) : null;
            default: return I = this.parentElement, I ? I.lookupNamespaceURI(D) : null;
        } } }, isDefaultNamespace: { value: function (D) { (D === "" || D === void 0) && (D = null); var I = this.lookupNamespaceURI(null); return I === D; } }, index: { get: function () { var U = this.parentNode; if (this === U.firstChild)
            return 0; var D = U.childNodes; if (this._index === void 0 || D[this._index] !== this) {
            for (var I = 0; I < D.length; I++)
                D[I]._index = I;
            a.assert(D[this._index] === this);
        } return this._index; } }, isAncestor: { value: function (U) { if (this.doc !== U.doc || this.rooted !== U.rooted)
            return !1; for (var D = U; D; D = D.parentNode)
            if (D === this)
                return !0; return !1; } }, ensureSameDoc: { value: function (U) { U.ownerDocument === null ? U.ownerDocument = this.doc : U.ownerDocument !== this.doc && a.WrongDocumentError(); } }, removeChildren: { value: a.shouldOverride }, _insertOrReplace: { value: function (D, I, E) { var o = this, g, n; if (o.nodeType === P && o.rooted && a.HierarchyRequestError(), D._childNodes && (g = I === null ? D._childNodes.length : I.index, o.parentNode === D)) {
            var p = o.index;
            p < g && g--;
        } E && (I.rooted && I.doc.mutateRemove(I), I.parentNode = null); var N = I; N === null && (N = D.firstChild); var q = o.rooted && D.rooted; if (o.nodeType === P) {
            for (var G = [0, E ? 1 : 0], X, re = o.firstChild; re !== null; re = X)
                X = re.nextSibling, G.push(re), re.parentNode = D;
            var v = G.length;
            if (E ? f.replace(N, v > 2 ? G[2] : null) : v > 2 && N !== null && f.insertBefore(G[2], N), D._childNodes)
                for (G[0] = I === null ? D._childNodes.length : I._index, D._childNodes.splice.apply(D._childNodes, G), n = 2; n < v; n++)
                    G[n]._index = G[0] + (n - 2);
            else
                D._firstChild === I && (v > 2 ? D._firstChild = G[2] : E && (D._firstChild = null));
            if (o._childNodes ? o._childNodes.length = 0 : o._firstChild = null, D.rooted)
                for (D.modify(), n = 2; n < v; n++)
                    D.doc.mutateInsert(G[n]);
        }
        else {
            if (I === o)
                return;
            q ? o._remove() : o.parentNode && o.remove(), o.parentNode = D, E ? (f.replace(N, o), D._childNodes ? (o._index = g, D._childNodes[g] = o) : D._firstChild === I && (D._firstChild = o)) : (N !== null && f.insertBefore(o, N), D._childNodes ? (o._index = g, D._childNodes.splice(g, 0, o)) : D._firstChild === I && (D._firstChild = o)), q ? (D.modify(), D.doc.mutateMove(o)) : D.rooted && (D.modify(), D.doc.mutateInsert(o));
        } } }, lastModTime: { get: function () { return this._lastModTime || (this._lastModTime = this.doc.modclock), this._lastModTime; } }, modify: { value: function () { if (this.doc.modclock)
            for (var U = ++this.doc.modclock, D = this; D; D = D.parentElement)
                D._lastModTime && (D._lastModTime = U); } }, doc: { get: function () { return this.ownerDocument || this; } }, rooted: { get: function () { return !!this._nid; } }, normalize: { value: function () { for (var U, D = this.firstChild; D !== null; D = U)
            if (U = D.nextSibling, D.normalize && D.normalize(), D.nodeType === s.TEXT_NODE) {
                if (D.nodeValue === "") {
                    this.removeChild(D);
                    continue;
                }
                var I = D.previousSibling;
                I !== null && I.nodeType === s.TEXT_NODE && (I.appendData(D.nodeValue), this.removeChild(D));
            } } }, serialize: { value: function () { if (this._innerHTML)
            return this._innerHTML; for (var U = "", D = this.firstChild; D !== null; D = D.nextSibling)
            U += t.serializeOne(D, this); return U; } }, outerHTML: { get: function () { return t.serializeOne(this, { nodeType: 0 }); }, set: a.nyi }, ELEMENT_NODE: { value: i }, ATTRIBUTE_NODE: { value: c }, TEXT_NODE: { value: u }, CDATA_SECTION_NODE: { value: x }, ENTITY_REFERENCE_NODE: { value: d }, ENTITY_NODE: { value: m }, PROCESSING_INSTRUCTION_NODE: { value: A }, COMMENT_NODE: { value: F }, DOCUMENT_NODE: { value: W }, DOCUMENT_TYPE_NODE: { value: M }, DOCUMENT_FRAGMENT_NODE: { value: P }, NOTATION_NODE: { value: K }, DOCUMENT_POSITION_DISCONNECTED: { value: w }, DOCUMENT_POSITION_PRECEDING: { value: b }, DOCUMENT_POSITION_FOLLOWING: { value: _ }, DOCUMENT_POSITION_CONTAINS: { value: y }, DOCUMENT_POSITION_CONTAINED_BY: { value: j }, DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: { value: ve } }), ta; }
var ra, Bn;
function Xo() { return Bn || (Bn = 1, ra = class extends Array {
    constructor(f) { if (super(f && f.length || 0), f)
        for (var t in f)
            this[t] = f[t]; }
    item(f) { return this[f] || null; }
}), ra; }
var aa, Pn;
function Qo() { if (Pn)
    return aa; Pn = 1; function l(t) { return this[t] || null; } function f(t) { return t || (t = []), t.item = l, t; } return aa = f, aa; }
var na, Un;
function kt() { if (Un)
    return na; Un = 1; var l; try {
    l = Xo();
}
catch {
    l = Qo();
} return na = l, na; }
var ia, Vn;
function Ua() { if (Vn)
    return ia; Vn = 1, ia = t; var l = De(), f = kt(); function t() { l.call(this), this._firstChild = this._childNodes = null; } return t.prototype = Object.create(l.prototype, { hasChildNodes: { value: function () { return this._childNodes ? this._childNodes.length > 0 : this._firstChild !== null; } }, childNodes: { get: function () { return this._ensureChildNodes(), this._childNodes; } }, firstChild: { get: function () { return this._childNodes ? this._childNodes.length === 0 ? null : this._childNodes[0] : this._firstChild; } }, lastChild: { get: function () { var a = this._childNodes, s; return a ? a.length === 0 ? null : a[a.length - 1] : (s = this._firstChild, s === null ? null : s._previousSibling); } }, _ensureChildNodes: { value: function () { if (!this._childNodes) {
            var a = this._firstChild, s = a, i = this._childNodes = new f;
            if (a)
                do
                    i.push(s), s = s._nextSibling;
                while (s !== a);
            this._firstChild = null;
        } } }, removeChildren: { value: function () { for (var s = this.rooted ? this.ownerDocument : null, i = this.firstChild, c; i !== null;)
            c = i, i = c.nextSibling, s && s.mutateRemove(c), c.parentNode = null; this._childNodes ? this._childNodes.length = 0 : this._firstChild = null, this.modify(); } } }), ia; }
var br = {}, jn;
function Va() { if (jn)
    return br; jn = 1, br.isValidName = M, br.isValidQName = P; var l = /^[_:A-Za-z][-.:\w]+$/, f = /^([_A-Za-z][-.\w]+|[_A-Za-z][-.\w]+:[_A-Za-z][-.\w]+)$/, t = "_A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD", a = "-._A-Za-z0-9\xB7\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0300-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD", s = "[" + t + "][" + a + "]*", i = t + ":", c = a + ":", u = new RegExp("^[" + i + "][" + c + "]*$"), x = new RegExp("^(" + s + "|" + s + ":" + s + ")$"), d = /[\uD800-\uDB7F\uDC00-\uDFFF]/, m = /[\uD800-\uDB7F\uDC00-\uDFFF]/g, A = /[\uD800-\uDB7F][\uDC00-\uDFFF]/g; t += "\uD800-\u{EFC00}-\uDFFF", a += "\uD800-\u{EFC00}-\uDFFF", s = "[" + t + "][" + a + "]*", i = t + ":", c = a + ":"; var F = new RegExp("^[" + i + "][" + c + "]*$"), W = new RegExp("^(" + s + "|" + s + ":" + s + ")$"); function M(K) { if (l.test(K) || u.test(K))
    return !0; if (!d.test(K) || !F.test(K))
    return !1; var w = K.match(m), b = K.match(A); return b !== null && 2 * b.length === w.length; } function P(K) { if (f.test(K) || x.test(K))
    return !0; if (!d.test(K) || !W.test(K))
    return !1; var w = K.match(m), b = K.match(A); return b !== null && 2 * b.length === w.length; } return br; }
var vr = {}, Gn;
function Bi() { if (Gn)
    return vr; Gn = 1; var l = we(); vr.property = function (t) { if (Array.isArray(t.type)) {
    var a = Object.create(null);
    t.type.forEach(function (c) { a[c.value || c] = c.alias || c; });
    var s = t.missing;
    s === void 0 && (s = null);
    var i = t.invalid;
    return i === void 0 && (i = s), { get: function () { var c = this._getattr(t.name); return c === null ? s : (c = a[c.toLowerCase()], c !== void 0 ? c : i !== null ? i : c); }, set: function (c) { this._setattr(t.name, c); } };
}
else {
    if (t.type === Boolean)
        return { get: function () { return this.hasAttribute(t.name); }, set: function (c) { c ? this._setattr(t.name, "") : this.removeAttribute(t.name); } };
    if (t.type === Number || t.type === "long" || t.type === "unsigned long" || t.type === "limited unsigned long with fallback")
        return f(t);
    if (!t.type || t.type === String)
        return { get: function () { return this._getattr(t.name) || ""; }, set: function (c) { t.treatNullAsEmptyString && c === null && (c = ""), this._setattr(t.name, c); } };
    if (typeof t.type == "function")
        return t.type(t.name, t);
} throw new Error("Invalid attribute definition"); }; function f(t) { var a; typeof t.default == "function" ? a = t.default : typeof t.default == "number" ? a = function () { return t.default; } : a = function () { l.assert(!1, typeof t.default); }; var s = t.type === "unsigned long", i = t.type === "long", c = t.type === "limited unsigned long with fallback", u = t.min, x = t.max, d = t.setmin; return u === void 0 && (s && (u = 0), i && (u = -2147483648), c && (u = 1)), x === void 0 && (s || i || c) && (x = 2147483647), { get: function () { var m = this._getattr(t.name), A = t.float ? parseFloat(m) : parseInt(m, 10); if (m === null || !isFinite(A) || u !== void 0 && A < u || x !== void 0 && A > x)
        return a.call(this); if (s || i || c) {
        if (!/^[ \t\n\f\r]*[-+]?[0-9]/.test(m))
            return a.call(this);
        A = A | 0;
    } return A; }, set: function (m) { t.float || (m = Math.floor(m)), d !== void 0 && m < d && l.IndexSizeError(t.name + " set to " + m), s ? m = m < 0 || m > 2147483647 ? a.call(this) : m | 0 : c ? m = m < 1 || m > 2147483647 ? a.call(this) : m | 0 : i && (m = m < -2147483648 || m > 2147483647 ? a.call(this) : m | 0), this._setattr(t.name, String(m)); } }; } return vr.registerChangeHandler = function (t, a, s) { var i = t.prototype; Object.prototype.hasOwnProperty.call(i, "_attributeChangeHandlers") || (i._attributeChangeHandlers = Object.create(i._attributeChangeHandlers || null)), i._attributeChangeHandlers[a] = s; }, vr; }
var sa, zn;
function Yo() { if (zn)
    return sa; zn = 1, sa = f; var l = De(); function f(t, a) { this.root = t, this.filter = a, this.lastModTime = t.lastModTime, this.done = !1, this.cache = [], this.traverse(); } return f.prototype = Object.create(Object.prototype, { length: { get: function () { return this.checkcache(), this.done || this.traverse(), this.cache.length; } }, item: { value: function (t) { return this.checkcache(), !this.done && t >= this.cache.length && this.traverse(), this.cache[t]; } }, checkcache: { value: function () { if (this.lastModTime !== this.root.lastModTime) {
            for (var t = this.cache.length - 1; t >= 0; t--)
                this[t] = void 0;
            this.cache.length = 0, this.done = !1, this.lastModTime = this.root.lastModTime;
        } } }, traverse: { value: function (t) { t !== void 0 && t++; for (var a; (a = this.next()) !== null;)
            if (this[this.cache.length] = a, this.cache.push(a), t && this.cache.length === t)
                return; this.done = !0; } }, next: { value: function () { var t = this.cache.length === 0 ? this.root : this.cache[this.cache.length - 1], a; for (t.nodeType === l.DOCUMENT_NODE ? a = t.documentElement : a = t.nextElement(this.root); a;) {
            if (this.filter(a))
                return a;
            a = a.nextElement(this.root);
        } return null; } } }), sa; }
var oa, Wn;
function Pi() { if (Wn)
    return oa; Wn = 1; var l = we(); oa = f; function f(c, u) { this._getString = c, this._setString = u, this._length = 0, this._lastStringValue = "", this._update(); } Object.defineProperties(f.prototype, { length: { get: function () { return this._length; } }, item: { value: function (c) { var u = i(this); return c < 0 || c >= u.length ? null : u[c]; } }, contains: { value: function (c) { c = String(c); var u = i(this); return u.indexOf(c) > -1; } }, add: { value: function () { for (var c = i(this), u = 0, x = arguments.length; u < x; u++) {
            var d = a(arguments[u]);
            c.indexOf(d) < 0 && c.push(d);
        } this._update(c); } }, remove: { value: function () { for (var c = i(this), u = 0, x = arguments.length; u < x; u++) {
            var d = a(arguments[u]), m = c.indexOf(d);
            m > -1 && c.splice(m, 1);
        } this._update(c); } }, toggle: { value: function (u, x) { return u = a(u), this.contains(u) ? x === void 0 || x === !1 ? (this.remove(u), !1) : !0 : x === void 0 || x === !0 ? (this.add(u), !0) : !1; } }, replace: { value: function (u, x) { String(x) === "" && l.SyntaxError(), u = a(u), x = a(x); var d = i(this), m = d.indexOf(u); if (m < 0)
            return !1; var A = d.indexOf(x); return A < 0 ? d[m] = x : m < A ? (d[m] = x, d.splice(A, 1)) : d.splice(m, 1), this._update(d), !0; } }, toString: { value: function () { return this._getString(); } }, value: { get: function () { return this._getString(); }, set: function (c) { this._setString(c), this._update(); } }, _update: { value: function (c) { c ? (t(this, c), this._setString(c.join(" ").trim())) : t(this, i(this)), this._lastStringValue = this._getString(); } } }); function t(c, u) { var x = c._length, d; for (c._length = u.length, d = 0; d < u.length; d++)
    c[d] = u[d]; for (; d < x; d++)
    c[d] = void 0; } function a(c) { return c = String(c), c === "" && l.SyntaxError(), /[ \t\r\n\f]/.test(c) && l.InvalidCharacterError(), c; } function s(c) { for (var u = c._length, x = Array(u), d = 0; d < u; d++)
    x[d] = c[d]; return x; } function i(c) { var u = c._getString(); if (u === c._lastStringValue)
    return s(c); var x = u.replace(/(^[ \t\r\n\f]+)|([ \t\r\n\f]+$)/g, ""); if (x === "")
    return []; var d = Object.create(null); return x.split(/[ \t\r\n\f]+/g).filter(function (m) { var A = "$" + m; return d[A] ? !1 : (d[A] = !0, !0); }); } return oa; }
var Er = { exports: {} }, Kn;
function ja() { return Kn || (Kn = 1, (function (l, f) { var t = Object.create(null, { location: { get: function () { throw new Error("window.location is not supported."); } } }), a = function (n, p) { return n.compareDocumentPosition(p); }, s = function (n, p) { return a(n, p) & 2 ? 1 : -1; }, i = function (n) { for (; (n = n.nextSibling) && n.nodeType !== 1;)
    ; return n; }, c = function (n) { for (; (n = n.previousSibling) && n.nodeType !== 1;)
    ; return n; }, u = function (n) { if (n = n.firstChild)
    for (; n.nodeType !== 1 && (n = n.nextSibling);)
        ; return n; }, x = function (n) { if (n = n.lastChild)
    for (; n.nodeType !== 1 && (n = n.previousSibling);)
        ; return n; }, d = function (n) { if (!n.parentNode)
    return !1; var p = n.parentNode.nodeType; return p === 1 || p === 9; }, m = function (n) { if (!n)
    return n; var p = n[0]; return p === '"' || p === "'" ? (n[n.length - 1] === p ? n = n.slice(1, -1) : n = n.slice(1), n.replace(j.str_escape, function (N) { var q = /^\\(?:([0-9A-Fa-f]+)|([\r\n\f]+))/.exec(N); if (!q)
    return N.slice(1); if (q[2])
    return ""; var G = parseInt(q[1], 16); return String.fromCodePoint ? String.fromCodePoint(G) : String.fromCharCode(G); })) : j.ident.test(n) ? A(n) : n; }, A = function (n) { return n.replace(j.escape, function (p) { var N = /^\\([0-9A-Fa-f]+)/.exec(p); if (!N)
    return p[1]; var q = parseInt(N[1], 16); return String.fromCodePoint ? String.fromCodePoint(q) : String.fromCharCode(q); }); }, F = (function () { return Array.prototype.indexOf ? Array.prototype.indexOf : function (n, p) { for (var N = this.length; N--;)
    if (this[N] === p)
        return N; return -1; }; })(), W = function (n, p) { var N = j.inside.source.replace(/</g, n).replace(/>/g, p); return new RegExp(N); }, M = function (n, p, N) { return n = n.source, n = n.replace(p, N.source || N), new RegExp(n); }, P = function (n, p) { return n.replace(/^(?:\w+:\/\/|\/+)/, "").replace(/(?:\/+|\/*#.*?)$/, "").split("/", p).join("/"); }, K = function (n, p) { var N = n.replace(/\s+/g, ""), q; return N === "even" ? N = "2n+0" : N === "odd" ? N = "2n+1" : N.indexOf("n") === -1 && (N = "0n" + N), q = /^([+-])?(\d+)?n([+-])?(\d+)?$/.exec(N), { group: q[1] === "-" ? -(q[2] || 1) : +(q[2] || 1), offset: q[4] ? q[3] === "-" ? -q[4] : +q[4] : 0 }; }, w = function (n, p, N) { var q = K(n), G = q.group, X = q.offset, re = N ? x : u, v = N ? c : i; return function (L) { if (d(L))
    for (var B = re(L.parentNode), ae = 0; B;) {
        if (p(B, L) && ae++, B === L)
            return ae -= X, G && ae ? ae % G === 0 && ae < 0 == G < 0 : !ae;
        B = v(B);
    } }; }, b = { "*": (function () { return function () { return !0; }; })(), type: function (n) { return n = n.toLowerCase(), function (p) { return p.nodeName.toLowerCase() === n; }; }, attr: function (n, p, N, q) { return p = _[p], function (G) { var X; switch (n) {
        case "for":
            X = G.htmlFor;
            break;
        case "class":
            X = G.className, X === "" && G.getAttribute("class") == null && (X = null);
            break;
        case "href":
        case "src":
            X = G.getAttribute(n, 2);
            break;
        case "title":
            X = G.getAttribute("title") || null;
            break;
        case "id":
        case "lang":
        case "dir":
        case "accessKey":
        case "hidden":
        case "tabIndex":
        case "style": if (G.getAttribute) {
            X = G.getAttribute(n);
            break;
        }
        default:
            if (G.hasAttribute && !G.hasAttribute(n))
                break;
            X = G[n] != null ? G[n] : G.getAttribute && G.getAttribute(n);
            break;
    } if (X != null)
        return X = X + "", q && (X = X.toLowerCase(), N = N.toLowerCase()), p(X, N); }; }, ":first-child": function (n) { return !c(n) && d(n); }, ":last-child": function (n) { return !i(n) && d(n); }, ":only-child": function (n) { return !c(n) && !i(n) && d(n); }, ":nth-child": function (n, p) { return w(n, function () { return !0; }, p); }, ":nth-last-child": function (n) { return b[":nth-child"](n, !0); }, ":root": function (n) { return n.ownerDocument.documentElement === n; }, ":empty": function (n) { return !n.firstChild; }, ":not": function (n) { var p = o(n); return function (N) { return !p(N); }; }, ":first-of-type": function (n) { if (d(n)) {
        for (var p = n.nodeName; n = c(n);)
            if (n.nodeName === p)
                return;
        return !0;
    } }, ":last-of-type": function (n) { if (d(n)) {
        for (var p = n.nodeName; n = i(n);)
            if (n.nodeName === p)
                return;
        return !0;
    } }, ":only-of-type": function (n) { return b[":first-of-type"](n) && b[":last-of-type"](n); }, ":nth-of-type": function (n, p) { return w(n, function (N, q) { return N.nodeName === q.nodeName; }, p); }, ":nth-last-of-type": function (n) { return b[":nth-of-type"](n, !0); }, ":checked": function (n) { return !!(n.checked || n.selected); }, ":indeterminate": function (n) { return !b[":checked"](n); }, ":enabled": function (n) { return !n.disabled && n.type !== "hidden"; }, ":disabled": function (n) { return !!n.disabled; }, ":target": function (n) { return n.id === t.location.hash.substring(1); }, ":focus": function (n) { return n === n.ownerDocument.activeElement; }, ":is": function (n) { return o(n); }, ":matches": function (n) { return b[":is"](n); }, ":nth-match": function (n, p) { var N = n.split(/\s*,\s*/), q = N.shift(), G = o(N.join(",")); return w(q, G, p); }, ":nth-last-match": function (n) { return b[":nth-match"](n, !0); }, ":links-here": function (n) { return n + "" == t.location + ""; }, ":lang": function (n) { return function (p) { for (; p;) {
        if (p.lang)
            return p.lang.indexOf(n) === 0;
        p = p.parentNode;
    } }; }, ":dir": function (n) { return function (p) { for (; p;) {
        if (p.dir)
            return p.dir === n;
        p = p.parentNode;
    } }; }, ":scope": function (n, p) { var N = p || n.ownerDocument; return N.nodeType === 9 ? n === N.documentElement : n === N; }, ":any-link": function (n) { return typeof n.href == "string"; }, ":local-link": function (n) { if (n.nodeName)
        return n.href && n.host === t.location.host; var p = +n + 1; return function (N) { if (N.href) {
        var q = t.location + "", G = N + "";
        return P(q, p) === P(G, p);
    } }; }, ":default": function (n) { return !!n.defaultSelected; }, ":valid": function (n) { return n.willValidate || n.validity && n.validity.valid; }, ":invalid": function (n) { return !b[":valid"](n); }, ":in-range": function (n) { return n.value > n.min && n.value <= n.max; }, ":out-of-range": function (n) { return !b[":in-range"](n); }, ":required": function (n) { return !!n.required; }, ":optional": function (n) { return !n.required; }, ":read-only": function (n) { if (n.readOnly)
        return !0; var p = n.getAttribute("contenteditable"), N = n.contentEditable, q = n.nodeName.toLowerCase(); return q = q !== "input" && q !== "textarea", (q || n.disabled) && p == null && N !== "true"; }, ":read-write": function (n) { return !b[":read-only"](n); }, ":hover": function () { throw new Error(":hover is not supported."); }, ":active": function () { throw new Error(":active is not supported."); }, ":link": function () { throw new Error(":link is not supported."); }, ":visited": function () { throw new Error(":visited is not supported."); }, ":column": function () { throw new Error(":column is not supported."); }, ":nth-column": function () { throw new Error(":nth-column is not supported."); }, ":nth-last-column": function () { throw new Error(":nth-last-column is not supported."); }, ":current": function () { throw new Error(":current is not supported."); }, ":past": function () { throw new Error(":past is not supported."); }, ":future": function () { throw new Error(":future is not supported."); }, ":contains": function (n) { return function (p) { var N = p.innerText || p.textContent || p.value || ""; return N.indexOf(n) !== -1; }; }, ":has": function (n) { return function (p) { return g(n, p).length > 0; }; } }, _ = { "-": function () { return !0; }, "=": function (n, p) { return n === p; }, "*=": function (n, p) { return n.indexOf(p) !== -1; }, "~=": function (n, p) { var N, q, G, X; for (q = 0;; q = N + 1) {
        if (N = n.indexOf(p, q), N === -1)
            return !1;
        if (G = n[N - 1], X = n[N + p.length], (!G || G === " ") && (!X || X === " "))
            return !0;
    } }, "|=": function (n, p) { var N = n.indexOf(p), q; if (N === 0)
        return q = n[N + p.length], q === "-" || !q; }, "^=": function (n, p) { return n.indexOf(p) === 0; }, "$=": function (n, p) { var N = n.lastIndexOf(p); return N !== -1 && N + p.length === n.length; }, "!=": function (n, p) { return n !== p; } }, y = { " ": function (n) { return function (p) { for (; p = p.parentNode;)
        if (n(p))
            return p; }; }, ">": function (n) { return function (p) { if (p = p.parentNode)
        return n(p) && p; }; }, "+": function (n) { return function (p) { if (p = c(p))
        return n(p) && p; }; }, "~": function (n) { return function (p) { for (; p = c(p);)
        if (n(p))
            return p; }; }, noop: function (n) { return function (p) { return n(p) && p; }; }, ref: function (n, p) { var N; function q(G) { for (var X = G.ownerDocument, re = X.getElementsByTagName("*"), v = re.length; v--;)
        if (N = re[v], q.test(G))
            return N = null, !0; N = null; } return q.combinator = function (G) { if (!(!N || !N.getAttribute)) {
        var X = N.getAttribute(p) || "";
        if (X[0] === "#" && (X = X.substring(1)), X === G.id && n(N))
            return N;
    } }, q; } }, j = { escape: /\\(?:[^0-9A-Fa-f\r\n]|[0-9A-Fa-f]{1,6}[\r\n\t ]?)/g, str_escape: /(escape)|\\(\n|\r\n?|\f)/g, nonascii: /[\u00A0-\uFFFF]/, cssid: /(?:(?!-?[0-9])(?:escape|nonascii|[-_a-zA-Z0-9])+)/, qname: /^ *(cssid|\*)/, simple: /^(?:([.#]cssid)|pseudo|attr)/, ref: /^ *\/(cssid)\/ */, combinator: /^(?: +([^ \w*.#\\]) +|( )+|([^ \w*.#\\]))(?! *$)/, attr: /^\[(cssid)(?:([^\w]?=)(inside))?\]/, pseudo: /^(:cssid)(?:\((inside)\))?/, inside: /(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|<[^"'>]*>|\\["'>]|[^"'>])*/, ident: /^(cssid)$/ }; j.cssid = M(j.cssid, "nonascii", j.nonascii), j.cssid = M(j.cssid, "escape", j.escape), j.qname = M(j.qname, "cssid", j.cssid), j.simple = M(j.simple, "cssid", j.cssid), j.ref = M(j.ref, "cssid", j.cssid), j.attr = M(j.attr, "cssid", j.cssid), j.pseudo = M(j.pseudo, "cssid", j.cssid), j.inside = M(j.inside, `[^"'>]*`, j.inside), j.attr = M(j.attr, "inside", W("\\[", "\\]")), j.pseudo = M(j.pseudo, "inside", W("\\(", "\\)")), j.simple = M(j.simple, "pseudo", j.pseudo), j.simple = M(j.simple, "attr", j.attr), j.ident = M(j.ident, "cssid", j.cssid), j.str_escape = M(j.str_escape, "escape", j.escape); var ve = function (n) { for (var p = n.replace(/^\s+|\s+$/g, ""), N, q = [], G = [], X, re, v, L, B; p;) {
    if (v = j.qname.exec(p))
        p = p.substring(v[0].length), re = A(v[1]), G.push(U(re, !0));
    else if (v = j.simple.exec(p))
        p = p.substring(v[0].length), re = "*", G.push(U(re, !0)), G.push(U(v));
    else
        throw new SyntaxError("Invalid selector.");
    for (; v = j.simple.exec(p);)
        p = p.substring(v[0].length), G.push(U(v));
    if (p[0] === "!" && (p = p.substring(1), X = E(), X.qname = re, G.push(X.simple)), v = j.ref.exec(p)) {
        p = p.substring(v[0].length), B = y.ref(D(G), A(v[1])), q.push(B.combinator), G = [];
        continue;
    }
    if (v = j.combinator.exec(p)) {
        if (p = p.substring(v[0].length), L = v[1] || v[2] || v[3], L === ",") {
            q.push(y.noop(D(G)));
            break;
        }
    }
    else
        L = "noop";
    if (!y[L])
        throw new SyntaxError("Bad combinator.");
    q.push(y[L](D(G))), G = [];
} return N = I(q), N.qname = re, N.sel = p, X && (X.lname = N.qname, X.test = N, X.qname = X.qname, X.sel = N.sel, N = X), B && (B.test = N, B.qname = N.qname, B.sel = N.sel, N = B), N; }, U = function (n, p) { if (p)
    return n === "*" ? b["*"] : b.type(n); if (n[1])
    return n[1][0] === "." ? b.attr("class", "~=", A(n[1].substring(1)), !1) : b.attr("id", "=", A(n[1].substring(1)), !1); if (n[2])
    return n[3] ? b[A(n[2])](m(n[3])) : b[A(n[2])]; if (n[4]) {
    var N = n[6], q = /["'\s]\s*I$/i.test(N);
    return q && (N = N.replace(/\s*I$/i, "")), b.attr(A(n[4]), n[5] || "-", m(N), q);
} throw new SyntaxError("Unknown Selector."); }, D = function (n) { var p = n.length, N; return p < 2 ? n[0] : function (q) { if (q) {
    for (N = 0; N < p; N++)
        if (!n[N](q))
            return;
    return !0;
} }; }, I = function (n) { return n.length < 2 ? function (p) { return !!n[0](p); } : function (p) { for (var N = n.length; N--;)
    if (!(p = n[N](p)))
        return; return !0; }; }, E = function () { var n; function p(N) { for (var q = N.ownerDocument, G = q.getElementsByTagName(p.lname), X = G.length; X--;)
    if (p.test(G[X]) && n === N)
        return n = null, !0; n = null; } return p.simple = function (N) { return n = N, !0; }, p; }, o = function (n) { for (var p = ve(n), N = [p]; p.sel;)
    p = ve(p.sel), N.push(p); return N.length < 2 ? p : function (q) { for (var G = N.length, X = 0; X < G; X++)
    if (N[X](q))
        return !0; }; }, g = function (n, p) { for (var N = [], q = ve(n), G = p.getElementsByTagName(q.qname), X = 0, re; re = G[X++];)
    q(re) && N.push(re); if (q.sel) {
    for (; q.sel;)
        for (q = ve(q.sel), G = p.getElementsByTagName(q.qname), X = 0; re = G[X++];)
            q(re) && F.call(N, re) === -1 && N.push(re);
    N.sort(s);
} return N; }; l.exports = f = function (n, p) { var N, q; if (p.nodeType !== 11 && n.indexOf(" ") === -1) {
    if (n[0] === "#" && p.rooted && /^#[A-Z_][-A-Z0-9_]*$/i.test(n) && p.doc._hasMultipleElementsWithId && (N = n.substring(1), !p.doc._hasMultipleElementsWithId(N)))
        return q = p.doc.getElementById(N), q ? [q] : [];
    if (n[0] === "." && /^\.\w+$/.test(n))
        return p.getElementsByClassName(n.substring(1));
    if (/^\w+$/.test(n))
        return p.getElementsByTagName(n);
} return g(n, p); }, f.selectors = b, f.operators = _, f.combinators = y, f.matches = function (n, p) { var N = { sel: p }; do
    if (N = ve(N.sel), N(n))
        return !0;
while (N.sel); return !1; }; })(Er, Er.exports)), Er.exports; }
var ca, Xn;
function Ga() { if (Xn)
    return ca; Xn = 1; var l = De(), f = qi(), t = function (s, i) { for (var c = s.createDocumentFragment(), u = 0; u < i.length; u++) {
    var x = i[u], d = x instanceof l;
    c.appendChild(d ? x : s.createTextNode(String(x)));
} return c; }, a = { after: { value: function () { var i = Array.prototype.slice.call(arguments), c = this.parentNode, u = this.nextSibling; if (c !== null) {
            for (; u && i.some(function (d) { return d === u; });)
                u = u.nextSibling;
            var x = t(this.doc, i);
            c.insertBefore(x, u);
        } } }, before: { value: function () { var i = Array.prototype.slice.call(arguments), c = this.parentNode, u = this.previousSibling; if (c !== null) {
            for (; u && i.some(function (m) { return m === u; });)
                u = u.previousSibling;
            var x = t(this.doc, i), d = u ? u.nextSibling : c.firstChild;
            c.insertBefore(x, d);
        } } }, remove: { value: function () { this.parentNode !== null && (this.doc && (this.doc._preremoveNodeIterators(this), this.rooted && this.doc.mutateRemove(this)), this._remove(), this.parentNode = null); } }, _remove: { value: function () { var i = this.parentNode; i !== null && (i._childNodes ? i._childNodes.splice(this.index, 1) : i._firstChild === this && (this._nextSibling === this ? i._firstChild = null : i._firstChild = this._nextSibling), f.remove(this), i.modify()); } }, replaceWith: { value: function () { var i = Array.prototype.slice.call(arguments), c = this.parentNode, u = this.nextSibling; if (c !== null) {
            for (; u && i.some(function (d) { return d === u; });)
                u = u.nextSibling;
            var x = t(this.doc, i);
            this.parentNode === c ? c.replaceChild(x, this) : c.insertBefore(x, u);
        } } } }; return ca = a, ca; }
var ua, Qn;
function Ui() { if (Qn)
    return ua; Qn = 1; var l = De(), f = { nextElementSibling: { get: function () { if (this.parentNode) {
            for (var t = this.nextSibling; t !== null; t = t.nextSibling)
                if (t.nodeType === l.ELEMENT_NODE)
                    return t;
        } return null; } }, previousElementSibling: { get: function () { if (this.parentNode) {
            for (var t = this.previousSibling; t !== null; t = t.previousSibling)
                if (t.nodeType === l.ELEMENT_NODE)
                    return t;
        } return null; } } }; return ua = f, ua; }
var la, Yn;
function Vi() { if (Yn)
    return la; Yn = 1, la = f; var l = we(); function f(t) { this.element = t; } return Object.defineProperties(f.prototype, { length: { get: l.shouldOverride }, item: { value: l.shouldOverride }, getNamedItem: { value: function (a) { return this.element.getAttributeNode(a); } }, getNamedItemNS: { value: function (a, s) { return this.element.getAttributeNodeNS(a, s); } }, setNamedItem: { value: l.nyi }, setNamedItemNS: { value: l.nyi }, removeNamedItem: { value: function (a) { var s = this.element.getAttributeNode(a); if (s)
            return this.element.removeAttribute(a), s; l.NotFoundError(); } }, removeNamedItemNS: { value: function (a, s) { var i = this.element.getAttributeNodeNS(a, s); if (i)
            return this.element.removeAttributeNS(a, s), i; l.NotFoundError(); } } }), la; }
var fa, Zn;
function Gt() { if (Zn)
    return fa; Zn = 1, fa = P; var l = Va(), f = we(), t = f.NAMESPACE, a = Bi(), s = De(), i = kt(), c = Fi(), u = Yo(), x = Pi(), d = ja(), m = Ua(), A = Ga(), F = Ui(), W = Vi(), M = Object.create(null); function P(E, o, g, n) { m.call(this), this.nodeType = s.ELEMENT_NODE, this.ownerDocument = E, this.localName = o, this.namespaceURI = g, this.prefix = n, this._tagName = void 0, this._attrsByQName = Object.create(null), this._attrsByLName = Object.create(null), this._attrKeys = []; } function K(E, o) { if (E.nodeType === s.TEXT_NODE)
    o.push(E._data);
else
    for (var g = 0, n = E.childNodes.length; g < n; g++)
        K(E.childNodes[g], o); } P.prototype = Object.create(m.prototype, { isHTML: { get: function () { return this.namespaceURI === t.HTML && this.ownerDocument.isHTML; } }, tagName: { get: function () { if (this._tagName === void 0) {
            var o;
            if (this.prefix === null ? o = this.localName : o = this.prefix + ":" + this.localName, this.isHTML) {
                var g = M[o];
                g || (M[o] = g = f.toASCIIUpperCase(o)), o = g;
            }
            this._tagName = o;
        } return this._tagName; } }, nodeName: { get: function () { return this.tagName; } }, nodeValue: { get: function () { return null; }, set: function () { } }, textContent: { get: function () { var E = []; return K(this, E), E.join(""); }, set: function (E) { this.removeChildren(), E != null && E !== "" && this._appendChild(this.ownerDocument.createTextNode(E)); } }, innerText: { get: function () { var E = []; return K(this, E), E.join("").replace(/[ \t\n\f\r]+/g, " ").trim(); }, set: function (E) { this.removeChildren(), E != null && E !== "" && this._appendChild(this.ownerDocument.createTextNode(E)); } }, innerHTML: { get: function () { return this.serialize(); }, set: f.nyi }, outerHTML: { get: function () { return c.serializeOne(this, { nodeType: 0 }); }, set: function (E) { var o = this.ownerDocument, g = this.parentNode; if (g !== null) {
            g.nodeType === s.DOCUMENT_NODE && f.NoModificationAllowedError(), g.nodeType === s.DOCUMENT_FRAGMENT_NODE && (g = g.ownerDocument.createElement("body"));
            var n = o.implementation.mozHTMLParser(o._address, g);
            n.parse(E === null ? "" : String(E), !0), this.replaceWith(n._asDocumentFragment());
        } } }, _insertAdjacent: { value: function (o, g) { var n = !1; switch (o) {
            case "beforebegin": n = !0;
            case "afterend":
                var p = this.parentNode;
                return p === null ? null : p.insertBefore(g, n ? this : this.nextSibling);
            case "afterbegin": n = !0;
            case "beforeend": return this.insertBefore(g, n ? this.firstChild : null);
            default: return f.SyntaxError();
        } } }, insertAdjacentElement: { value: function (o, g) { if (g.nodeType !== s.ELEMENT_NODE)
            throw new TypeError("not an element"); return o = f.toASCIILowerCase(String(o)), this._insertAdjacent(o, g); } }, insertAdjacentText: { value: function (o, g) { var n = this.ownerDocument.createTextNode(g); o = f.toASCIILowerCase(String(o)), this._insertAdjacent(o, n); } }, insertAdjacentHTML: { value: function (o, g) { o = f.toASCIILowerCase(String(o)), g = String(g); var n; switch (o) {
            case "beforebegin":
            case "afterend":
                n = this.parentNode, (n === null || n.nodeType === s.DOCUMENT_NODE) && f.NoModificationAllowedError();
                break;
            case "afterbegin":
            case "beforeend":
                n = this;
                break;
            default: f.SyntaxError();
        } (!(n instanceof P) || n.ownerDocument.isHTML && n.localName === "html" && n.namespaceURI === t.HTML) && (n = n.ownerDocument.createElementNS(t.HTML, "body")); var p = this.ownerDocument.implementation.mozHTMLParser(this.ownerDocument._address, n); p.parse(g, !0), this._insertAdjacent(o, p._asDocumentFragment()); } }, children: { get: function () { return this._children || (this._children = new _(this)), this._children; } }, attributes: { get: function () { return this._attributes || (this._attributes = new b(this)), this._attributes; } }, firstElementChild: { get: function () { for (var E = this.firstChild; E !== null; E = E.nextSibling)
            if (E.nodeType === s.ELEMENT_NODE)
                return E; return null; } }, lastElementChild: { get: function () { for (var E = this.lastChild; E !== null; E = E.previousSibling)
            if (E.nodeType === s.ELEMENT_NODE)
                return E; return null; } }, childElementCount: { get: function () { return this.children.length; } }, nextElement: { value: function (E) { E || (E = this.ownerDocument.documentElement); var o = this.firstElementChild; if (!o) {
            if (this === E)
                return null;
            o = this.nextElementSibling;
        } if (o)
            return o; for (var g = this.parentElement; g && g !== E; g = g.parentElement)
            if (o = g.nextElementSibling, o)
                return o; return null; } }, getElementsByTagName: { value: function (o) { var g; return o ? (o === "*" ? g = function () { return !0; } : this.isHTML ? g = j(o) : g = y(o), new u(this, g)) : new i; } }, getElementsByTagNameNS: { value: function (o, g) { var n; return o === "*" && g === "*" ? n = function () { return !0; } : o === "*" ? n = y(g) : g === "*" ? n = ve(o) : n = U(o, g), new u(this, n); } }, getElementsByClassName: { value: function (o) { if (o = String(o).trim(), o === "") {
            var g = new i;
            return g;
        } return o = o.split(/[ \t\r\n\f]+/), new u(this, D(o)); } }, getElementsByName: { value: function (o) { return new u(this, I(String(o))); } }, clone: { value: function () { var o; this.namespaceURI !== t.HTML || this.prefix || !this.ownerDocument.isHTML ? o = this.ownerDocument.createElementNS(this.namespaceURI, this.prefix !== null ? this.prefix + ":" + this.localName : this.localName) : o = this.ownerDocument.createElement(this.localName); for (var g = 0, n = this._attrKeys.length; g < n; g++) {
            var p = this._attrKeys[g], N = this._attrsByLName[p], q = N.cloneNode();
            q._setOwnerElement(o), o._attrsByLName[p] = q, o._addQName(q);
        } return o._attrKeys = this._attrKeys.concat(), o; } }, isEqual: { value: function (o) { if (this.localName !== o.localName || this.namespaceURI !== o.namespaceURI || this.prefix !== o.prefix || this._numattrs !== o._numattrs)
            return !1; for (var g = 0, n = this._numattrs; g < n; g++) {
            var p = this._attr(g);
            if (!o.hasAttributeNS(p.namespaceURI, p.localName) || o.getAttributeNS(p.namespaceURI, p.localName) !== p.value)
                return !1;
        } return !0; } }, _lookupNamespacePrefix: { value: function (o, g) { if (this.namespaceURI && this.namespaceURI === o && this.prefix !== null && g.lookupNamespaceURI(this.prefix) === o)
            return this.prefix; for (var n = 0, p = this._numattrs; n < p; n++) {
            var N = this._attr(n);
            if (N.prefix === "xmlns" && N.value === o && g.lookupNamespaceURI(N.localName) === o)
                return N.localName;
        } var q = this.parentElement; return q ? q._lookupNamespacePrefix(o, g) : null; } }, lookupNamespaceURI: { value: function (o) { if ((o === "" || o === void 0) && (o = null), this.namespaceURI !== null && this.prefix === o)
            return this.namespaceURI; for (var g = 0, n = this._numattrs; g < n; g++) {
            var p = this._attr(g);
            if (p.namespaceURI === t.XMLNS && (p.prefix === "xmlns" && p.localName === o || o === null && p.prefix === null && p.localName === "xmlns"))
                return p.value || null;
        } var N = this.parentElement; return N ? N.lookupNamespaceURI(o) : null; } }, getAttribute: { value: function (o) { var g = this.getAttributeNode(o); return g ? g.value : null; } }, getAttributeNS: { value: function (o, g) { var n = this.getAttributeNodeNS(o, g); return n ? n.value : null; } }, getAttributeNode: { value: function (o) { o = String(o), /[A-Z]/.test(o) && this.isHTML && (o = f.toASCIILowerCase(o)); var g = this._attrsByQName[o]; return g ? (Array.isArray(g) && (g = g[0]), g) : null; } }, getAttributeNodeNS: { value: function (o, g) { o = o == null ? "" : String(o), g = String(g); var n = this._attrsByLName[o + "|" + g]; return n || null; } }, hasAttribute: { value: function (o) { return o = String(o), /[A-Z]/.test(o) && this.isHTML && (o = f.toASCIILowerCase(o)), this._attrsByQName[o] !== void 0; } }, hasAttributeNS: { value: function (o, g) { o = o == null ? "" : String(o), g = String(g); var n = o + "|" + g; return this._attrsByLName[n] !== void 0; } }, hasAttributes: { value: function () { return this._numattrs > 0; } }, toggleAttribute: { value: function (o, g) { o = String(o), l.isValidName(o) || f.InvalidCharacterError(), /[A-Z]/.test(o) && this.isHTML && (o = f.toASCIILowerCase(o)); var n = this._attrsByQName[o]; return n === void 0 ? g === void 0 || g === !0 ? (this._setAttribute(o, ""), !0) : !1 : g === void 0 || g === !1 ? (this.removeAttribute(o), !1) : !0; } }, _setAttribute: { value: function (o, g) { var n = this._attrsByQName[o], p; n ? Array.isArray(n) && (n = n[0]) : (n = this._newattr(o), p = !0), n.value = g, this._attributes && (this._attributes[o] = n), p && this._newattrhook && this._newattrhook(o, g); } }, setAttribute: { value: function (o, g) { o = String(o), l.isValidName(o) || f.InvalidCharacterError(), /[A-Z]/.test(o) && this.isHTML && (o = f.toASCIILowerCase(o)), this._setAttribute(o, String(g)); } }, _setAttributeNS: { value: function (o, g, n) { var p = g.indexOf(":"), N, q; p < 0 ? (N = null, q = g) : (N = g.substring(0, p), q = g.substring(p + 1)), (o === "" || o === void 0) && (o = null); var G = (o === null ? "" : o) + "|" + q, X = this._attrsByLName[G], re; X || (X = new w(this, q, N, o), re = !0, this._attrsByLName[G] = X, this._attributes && (this._attributes[this._attrKeys.length] = X), this._attrKeys.push(G), this._addQName(X)), X.value = n, re && this._newattrhook && this._newattrhook(g, n); } }, setAttributeNS: { value: function (o, g, n) { o = o == null || o === "" ? null : String(o), g = String(g), l.isValidQName(g) || f.InvalidCharacterError(); var p = g.indexOf(":"), N = p < 0 ? null : g.substring(0, p); (N !== null && o === null || N === "xml" && o !== t.XML || (g === "xmlns" || N === "xmlns") && o !== t.XMLNS || o === t.XMLNS && !(g === "xmlns" || N === "xmlns")) && f.NamespaceError(), this._setAttributeNS(o, g, String(n)); } }, setAttributeNode: { value: function (o) { o.ownerElement !== null && o.ownerElement !== this && f.InUseAttributeError(); var g = null, n = this._attrsByQName[o.name]; if (n) {
            if (Array.isArray(n) || (n = [n]), n.some(function (p) { return p === o; }))
                return o;
            o.ownerElement !== null && f.InUseAttributeError(), n.forEach(function (p) { this.removeAttributeNode(p); }, this), g = n[0];
        } return this.setAttributeNodeNS(o), g; } }, setAttributeNodeNS: { value: function (o) { o.ownerElement !== null && f.InUseAttributeError(); var g = o.namespaceURI, n = (g === null ? "" : g) + "|" + o.localName, p = this._attrsByLName[n]; return p && this.removeAttributeNode(p), o._setOwnerElement(this), this._attrsByLName[n] = o, this._attributes && (this._attributes[this._attrKeys.length] = o), this._attrKeys.push(n), this._addQName(o), this._newattrhook && this._newattrhook(o.name, o.value), p || null; } }, removeAttribute: { value: function (o) { o = String(o), /[A-Z]/.test(o) && this.isHTML && (o = f.toASCIILowerCase(o)); var g = this._attrsByQName[o]; if (g) {
            Array.isArray(g) ? g.length > 2 ? g = g.shift() : (this._attrsByQName[o] = g[1], g = g[0]) : this._attrsByQName[o] = void 0;
            var n = g.namespaceURI, p = (n === null ? "" : n) + "|" + g.localName;
            this._attrsByLName[p] = void 0;
            var N = this._attrKeys.indexOf(p);
            this._attributes && (Array.prototype.splice.call(this._attributes, N, 1), this._attributes[o] = void 0), this._attrKeys.splice(N, 1);
            var q = g.onchange;
            g._setOwnerElement(null), q && q.call(g, this, g.localName, g.value, null), this.rooted && this.ownerDocument.mutateRemoveAttr(g);
        } } }, removeAttributeNS: { value: function (o, g) { o = o == null ? "" : String(o), g = String(g); var n = o + "|" + g, p = this._attrsByLName[n]; if (p) {
            this._attrsByLName[n] = void 0;
            var N = this._attrKeys.indexOf(n);
            this._attributes && Array.prototype.splice.call(this._attributes, N, 1), this._attrKeys.splice(N, 1), this._removeQName(p);
            var q = p.onchange;
            p._setOwnerElement(null), q && q.call(p, this, p.localName, p.value, null), this.rooted && this.ownerDocument.mutateRemoveAttr(p);
        } } }, removeAttributeNode: { value: function (o) { var g = o.namespaceURI, n = (g === null ? "" : g) + "|" + o.localName; return this._attrsByLName[n] !== o && f.NotFoundError(), this.removeAttributeNS(g, o.localName), o; } }, getAttributeNames: { value: function () { var o = this; return this._attrKeys.map(function (g) { return o._attrsByLName[g].name; }); } }, _getattr: { value: function (o) { var g = this._attrsByQName[o]; return g ? g.value : null; } }, _setattr: { value: function (o, g) { var n = this._attrsByQName[o], p; n || (n = this._newattr(o), p = !0), n.value = String(g), this._attributes && (this._attributes[o] = n), p && this._newattrhook && this._newattrhook(o, g); } }, _newattr: { value: function (o) { var g = new w(this, o, null, null), n = "|" + o; return this._attrsByQName[o] = g, this._attrsByLName[n] = g, this._attributes && (this._attributes[this._attrKeys.length] = g), this._attrKeys.push(n), g; } }, _addQName: { value: function (E) { var o = E.name, g = this._attrsByQName[o]; g ? Array.isArray(g) ? g.push(E) : this._attrsByQName[o] = [g, E] : this._attrsByQName[o] = E, this._attributes && (this._attributes[o] = E); } }, _removeQName: { value: function (E) { var o = E.name, g = this._attrsByQName[o]; if (Array.isArray(g)) {
            var n = g.indexOf(E);
            f.assert(n !== -1), g.length === 2 ? (this._attrsByQName[o] = g[1 - n], this._attributes && (this._attributes[o] = this._attrsByQName[o])) : (g.splice(n, 1), this._attributes && this._attributes[o] === E && (this._attributes[o] = g[0]));
        }
        else
            f.assert(g === E), this._attrsByQName[o] = void 0, this._attributes && (this._attributes[o] = void 0); } }, _numattrs: { get: function () { return this._attrKeys.length; } }, _attr: { value: function (E) { return this._attrsByLName[this._attrKeys[E]]; } }, id: a.property({ name: "id" }), className: a.property({ name: "class" }), classList: { get: function () { var E = this; if (this._classList)
            return this._classList; var o = new x(function () { return E.className || ""; }, function (g) { E.className = g; }); return this._classList = o, o; }, set: function (E) { this.className = E; } }, matches: { value: function (E) { return d.matches(this, E); } }, closest: { value: function (E) { var o = this; do {
            if (o.matches && o.matches(E))
                return o;
            o = o.parentElement || o.parentNode;
        } while (o !== null && o.nodeType === s.ELEMENT_NODE); return null; } }, querySelector: { value: function (E) { return d(E, this)[0]; } }, querySelectorAll: { value: function (E) { var o = d(E, this); return o.item ? o : new i(o); } } }), Object.defineProperties(P.prototype, A), Object.defineProperties(P.prototype, F), a.registerChangeHandler(P, "id", function (E, o, g, n) { E.rooted && (g && E.ownerDocument.delId(g, E), n && E.ownerDocument.addId(n, E)); }), a.registerChangeHandler(P, "class", function (E, o, g, n) { E._classList && E._classList._update(); }); function w(E, o, g, n, p) { this.localName = o, this.prefix = g === null || g === "" ? null : "" + g, this.namespaceURI = n === null || n === "" ? null : "" + n, this.data = p, this._setOwnerElement(E); } w.prototype = Object.create(Object.prototype, { ownerElement: { get: function () { return this._ownerElement; } }, _setOwnerElement: { value: function (o) { this._ownerElement = o, this.prefix === null && this.namespaceURI === null && o ? this.onchange = o._attributeChangeHandlers[this.localName] : this.onchange = null; } }, name: { get: function () { return this.prefix ? this.prefix + ":" + this.localName : this.localName; } }, specified: { get: function () { return !0; } }, value: { get: function () { return this.data; }, set: function (E) { var o = this.data; E = E === void 0 ? "" : E + "", E !== o && (this.data = E, this.ownerElement && (this.onchange && this.onchange(this.ownerElement, this.localName, o, E), this.ownerElement.rooted && this.ownerElement.ownerDocument.mutateAttr(this, o))); } }, cloneNode: { value: function (o) { return new w(null, this.localName, this.prefix, this.namespaceURI, this.data); } }, nodeType: { get: function () { return s.ATTRIBUTE_NODE; } }, nodeName: { get: function () { return this.name; } }, nodeValue: { get: function () { return this.value; }, set: function (E) { this.value = E; } }, textContent: { get: function () { return this.value; }, set: function (E) { E == null && (E = ""), this.value = E; } }, innerText: { get: function () { return this.value; }, set: function (E) { E == null && (E = ""), this.value = E; } } }), P._Attr = w; function b(E) { W.call(this, E); for (var o in E._attrsByQName)
    this[o] = E._attrsByQName[o]; for (var g = 0; g < E._attrKeys.length; g++)
    this[g] = E._attrsByLName[E._attrKeys[g]]; } b.prototype = Object.create(W.prototype, { length: { get: function () { return this.element._attrKeys.length; }, set: function () { } }, item: { value: function (E) { return E = E >>> 0, E >= this.length ? null : this.element._attrsByLName[this.element._attrKeys[E]]; } } }), globalThis.Symbol?.iterator && (b.prototype[globalThis.Symbol.iterator] = function () { var E = 0, o = this.length, g = this; return { next: function () { return E < o ? { value: g.item(E++) } : { done: !0 }; } }; }); function _(E) { this.element = E, this.updateCache(); } _.prototype = Object.create(Object.prototype, { length: { get: function () { return this.updateCache(), this.childrenByNumber.length; } }, item: { value: function (o) { return this.updateCache(), this.childrenByNumber[o] || null; } }, namedItem: { value: function (o) { return this.updateCache(), this.childrenByName[o] || null; } }, namedItems: { get: function () { return this.updateCache(), this.childrenByName; } }, updateCache: { value: function () { var o = /^(a|applet|area|embed|form|frame|frameset|iframe|img|object)$/; if (this.lastModTime !== this.element.lastModTime) {
            this.lastModTime = this.element.lastModTime;
            for (var g = this.childrenByNumber && this.childrenByNumber.length || 0, n = 0; n < g; n++)
                this[n] = void 0;
            this.childrenByNumber = [], this.childrenByName = Object.create(null);
            for (var p = this.element.firstChild; p !== null; p = p.nextSibling)
                if (p.nodeType === s.ELEMENT_NODE) {
                    this[this.childrenByNumber.length] = p, this.childrenByNumber.push(p);
                    var N = p.getAttribute("id");
                    N && !this.childrenByName[N] && (this.childrenByName[N] = p);
                    var q = p.getAttribute("name");
                    q && this.element.namespaceURI === t.HTML && o.test(this.element.localName) && !this.childrenByName[q] && (this.childrenByName[N] = p);
                }
        } } } }); function y(E) { return function (o) { return o.localName === E; }; } function j(E) { var o = f.toASCIILowerCase(E); return o === E ? y(E) : function (g) { return g.isHTML ? g.localName === o : g.localName === E; }; } function ve(E) { return function (o) { return o.namespaceURI === E; }; } function U(E, o) { return function (g) { return g.namespaceURI === E && g.localName === o; }; } function D(E) { return function (o) { return E.every(function (g) { return o.classList.contains(g); }); }; } function I(E) { return function (o) { return o.namespaceURI !== t.HTML ? !1 : o.getAttribute("name") === E; }; } return fa; }
var xa, $n;
function ji() { if ($n)
    return xa; $n = 1, xa = i; var l = De(), f = kt(), t = we(), a = t.HierarchyRequestError, s = t.NotFoundError; function i() { l.call(this); } return i.prototype = Object.create(l.prototype, { hasChildNodes: { value: function () { return !1; } }, firstChild: { value: null }, lastChild: { value: null }, insertBefore: { value: function (c, u) { if (!c.nodeType)
            throw new TypeError("not a node"); a(); } }, replaceChild: { value: function (c, u) { if (!c.nodeType)
            throw new TypeError("not a node"); a(); } }, removeChild: { value: function (c) { if (!c.nodeType)
            throw new TypeError("not a node"); s(); } }, removeChildren: { value: function () { } }, childNodes: { get: function () { return this._childNodes || (this._childNodes = new f), this._childNodes; } } }), xa; }
var da, Jn;
function wr() { if (Jn)
    return da; Jn = 1, da = s; var l = ji(), f = we(), t = Ga(), a = Ui(); function s() { l.call(this); } return s.prototype = Object.create(l.prototype, { substringData: { value: function (c, u) { if (arguments.length < 2)
            throw new TypeError("Not enough arguments"); return c = c >>> 0, u = u >>> 0, (c > this.data.length || c < 0 || u < 0) && f.IndexSizeError(), this.data.substring(c, c + u); } }, appendData: { value: function (c) { if (arguments.length < 1)
            throw new TypeError("Not enough arguments"); this.data += String(c); } }, insertData: { value: function (c, u) { return this.replaceData(c, 0, u); } }, deleteData: { value: function (c, u) { return this.replaceData(c, u, ""); } }, replaceData: { value: function (c, u, x) { var d = this.data, m = d.length; c = c >>> 0, u = u >>> 0, x = String(x), (c > m || c < 0) && f.IndexSizeError(), c + u > m && (u = m - c); var A = d.substring(0, c), F = d.substring(c + u); this.data = A + x + F; } }, isEqual: { value: function (c) { return this._data === c._data; } }, length: { get: function () { return this.data.length; } } }), Object.defineProperties(s.prototype, t), Object.defineProperties(s.prototype, a), da; }
var ha, ei;
function Gi() { if (ei)
    return ha; ei = 1, ha = a; var l = we(), f = De(), t = wr(); function a(i, c) { t.call(this), this.nodeType = f.TEXT_NODE, this.ownerDocument = i, this._data = c, this._index = void 0; } var s = { get: function () { return this._data; }, set: function (i) { i == null ? i = "" : i = String(i), i !== this._data && (this._data = i, this.rooted && this.ownerDocument.mutateValue(this), this.parentNode && this.parentNode._textchangehook && this.parentNode._textchangehook(this)); } }; return a.prototype = Object.create(t.prototype, { nodeName: { value: "#text" }, nodeValue: s, textContent: s, innerText: s, data: { get: s.get, set: function (i) { s.set.call(this, i === null ? "" : String(i)); } }, splitText: { value: function (c) { (c > this._data.length || c < 0) && l.IndexSizeError(); var u = this._data.substring(c), x = this.ownerDocument.createTextNode(u); this.data = this.data.substring(0, c); var d = this.parentNode; return d !== null && d.insertBefore(x, this.nextSibling), x; } }, wholeText: { get: function () { for (var c = this.textContent, u = this.nextSibling; u && u.nodeType === f.TEXT_NODE; u = u.nextSibling)
            c += u.textContent; return c; } }, replaceWholeText: { value: l.nyi }, clone: { value: function () { return new a(this.ownerDocument, this._data); } } }), ha; }
var pa, ti;
function zi() { if (ti)
    return pa; ti = 1, pa = t; var l = De(), f = wr(); function t(s, i) { f.call(this), this.nodeType = l.COMMENT_NODE, this.ownerDocument = s, this._data = i; } var a = { get: function () { return this._data; }, set: function (s) { s == null ? s = "" : s = String(s), this._data = s, this.rooted && this.ownerDocument.mutateValue(this); } }; return t.prototype = Object.create(f.prototype, { nodeName: { value: "#comment" }, nodeValue: a, textContent: a, innerText: a, data: { get: a.get, set: function (s) { a.set.call(this, s === null ? "" : String(s)); } }, clone: { value: function () { return new t(this.ownerDocument, this._data); } } }), pa; }
var ma, ri;
function Wi() { if (ri)
    return ma; ri = 1, ma = c; var l = De(), f = kt(), t = Ua(), a = Gt(), s = ja(), i = we(); function c(u) { t.call(this), this.nodeType = l.DOCUMENT_FRAGMENT_NODE, this.ownerDocument = u; } return c.prototype = Object.create(t.prototype, { nodeName: { value: "#document-fragment" }, nodeValue: { get: function () { return null; }, set: function () { } }, textContent: Object.getOwnPropertyDescriptor(a.prototype, "textContent"), innerText: Object.getOwnPropertyDescriptor(a.prototype, "innerText"), querySelector: { value: function (u) { var x = this.querySelectorAll(u); return x.length ? x[0] : null; } }, querySelectorAll: { value: function (u) { var x = Object.create(this); x.isHTML = !0, x.getElementsByTagName = a.prototype.getElementsByTagName, x.nextElement = Object.getOwnPropertyDescriptor(a.prototype, "firstElementChild").get; var d = s(u, x); return d.item ? d : new f(d); } }, clone: { value: function () { return new c(this.ownerDocument); } }, isEqual: { value: function (x) { return !0; } }, innerHTML: { get: function () { return this.serialize(); }, set: i.nyi }, outerHTML: { get: function () { return this.serialize(); }, set: i.nyi } }), ma; }
var ga, ai;
function Ki() { if (ai)
    return ga; ai = 1, ga = t; var l = De(), f = wr(); function t(s, i, c) { f.call(this), this.nodeType = l.PROCESSING_INSTRUCTION_NODE, this.ownerDocument = s, this.target = i, this._data = c; } var a = { get: function () { return this._data; }, set: function (s) { s == null ? s = "" : s = String(s), this._data = s, this.rooted && this.ownerDocument.mutateValue(this); } }; return t.prototype = Object.create(f.prototype, { nodeName: { get: function () { return this.target; } }, nodeValue: a, textContent: a, innerText: a, data: { get: a.get, set: function (s) { a.set.call(this, s === null ? "" : String(s)); } }, clone: { value: function () { return new t(this.ownerDocument, this.target, this._data); } }, isEqual: { value: function (i) { return this.target === i.target && this._data === i._data; } } }), ga; }
var ba, ni;
function Sr() { if (ni)
    return ba; ni = 1; var l = { FILTER_ACCEPT: 1, FILTER_REJECT: 2, FILTER_SKIP: 3, SHOW_ALL: 4294967295, SHOW_ELEMENT: 1, SHOW_ATTRIBUTE: 2, SHOW_TEXT: 4, SHOW_CDATA_SECTION: 8, SHOW_ENTITY_REFERENCE: 16, SHOW_ENTITY: 32, SHOW_PROCESSING_INSTRUCTION: 64, SHOW_COMMENT: 128, SHOW_DOCUMENT: 256, SHOW_DOCUMENT_TYPE: 512, SHOW_DOCUMENT_FRAGMENT: 1024, SHOW_NOTATION: 2048 }; return ba = l.constructor = l.prototype = l, ba; }
var va = { exports: {} }, ii;
function Xi() { if (ii)
    return va.exports; ii = 1, va.exports = { nextSkippingChildren: l, nextAncestorSibling: f, next: t, previous: s, deepLastChild: a }; function l(i, c) { return i === c ? null : i.nextSibling !== null ? i.nextSibling : f(i, c); } function f(i, c) { for (i = i.parentNode; i !== null; i = i.parentNode) {
    if (i === c)
        return null;
    if (i.nextSibling !== null)
        return i.nextSibling;
} return null; } function t(i, c) { var u; return u = i.firstChild, u !== null ? u : i === c ? null : (u = i.nextSibling, u !== null ? u : f(i, c)); } function a(i) { for (; i.lastChild;)
    i = i.lastChild; return i; } function s(i, c) { var u; return u = i.previousSibling, u !== null ? a(u) : (u = i.parentNode, u === c ? null : u); } return va.exports; }
var Ea, si;
function Zo() { if (si)
    return Ea; si = 1, Ea = x; var l = De(), f = Sr(), t = Xi(), a = we(), s = { first: "firstChild", last: "lastChild", next: "firstChild", previous: "lastChild" }, i = { first: "nextSibling", last: "previousSibling", next: "nextSibling", previous: "previousSibling" }; function c(d, m) { var A, F, W, M, P; for (F = d._currentNode[s[m]]; F !== null;) {
    if (M = d._internalFilter(F), M === f.FILTER_ACCEPT)
        return d._currentNode = F, F;
    if (M === f.FILTER_SKIP && (A = F[s[m]], A !== null)) {
        F = A;
        continue;
    }
    for (; F !== null;) {
        if (P = F[i[m]], P !== null) {
            F = P;
            break;
        }
        if (W = F.parentNode, W === null || W === d.root || W === d._currentNode)
            return null;
        F = W;
    }
} return null; } function u(d, m) { var A, F, W; if (A = d._currentNode, A === d.root)
    return null; for (;;) {
    for (W = A[i[m]]; W !== null;) {
        if (A = W, F = d._internalFilter(A), F === f.FILTER_ACCEPT)
            return d._currentNode = A, A;
        W = A[s[m]], (F === f.FILTER_REJECT || W === null) && (W = A[i[m]]);
    }
    if (A = A.parentNode, A === null || A === d.root || d._internalFilter(A) === f.FILTER_ACCEPT)
        return null;
} } function x(d, m, A) { (!d || !d.nodeType) && a.NotSupportedError(), this._root = d, this._whatToShow = Number(m) || 0, this._filter = A || null, this._active = !1, this._currentNode = d; } return Object.defineProperties(x.prototype, { root: { get: function () { return this._root; } }, whatToShow: { get: function () { return this._whatToShow; } }, filter: { get: function () { return this._filter; } }, currentNode: { get: function () { return this._currentNode; }, set: function (m) { if (!(m instanceof l))
            throw new TypeError("Not a Node"); this._currentNode = m; } }, _internalFilter: { value: function (m) { var A, F; if (this._active && a.InvalidStateError(), !(1 << m.nodeType - 1 & this._whatToShow))
            return f.FILTER_SKIP; if (F = this._filter, F === null)
            A = f.FILTER_ACCEPT;
        else {
            this._active = !0;
            try {
                typeof F == "function" ? A = F(m) : A = F.acceptNode(m);
            }
            finally {
                this._active = !1;
            }
        } return +A; } }, parentNode: { value: function () { for (var m = this._currentNode; m !== this.root;) {
            if (m = m.parentNode, m === null)
                return null;
            if (this._internalFilter(m) === f.FILTER_ACCEPT)
                return this._currentNode = m, m;
        } return null; } }, firstChild: { value: function () { return c(this, "first"); } }, lastChild: { value: function () { return c(this, "last"); } }, previousSibling: { value: function () { return u(this, "previous"); } }, nextSibling: { value: function () { return u(this, "next"); } }, previousNode: { value: function () { var m, A, F, W; for (m = this._currentNode; m !== this._root;) {
            for (F = m.previousSibling; F; F = m.previousSibling)
                if (m = F, A = this._internalFilter(m), A !== f.FILTER_REJECT) {
                    for (W = m.lastChild; W && (m = W, A = this._internalFilter(m), A !== f.FILTER_REJECT); W = m.lastChild)
                        ;
                    if (A === f.FILTER_ACCEPT)
                        return this._currentNode = m, m;
                }
            if (m === this.root || m.parentNode === null)
                return null;
            if (m = m.parentNode, this._internalFilter(m) === f.FILTER_ACCEPT)
                return this._currentNode = m, m;
        } return null; } }, nextNode: { value: function () { var m, A, F, W; m = this._currentNode, A = f.FILTER_ACCEPT; e: for (;;) {
            for (F = m.firstChild; F; F = m.firstChild) {
                if (m = F, A = this._internalFilter(m), A === f.FILTER_ACCEPT)
                    return this._currentNode = m, m;
                if (A === f.FILTER_REJECT)
                    break;
            }
            for (W = t.nextSkippingChildren(m, this.root); W; W = t.nextSkippingChildren(m, this.root)) {
                if (m = W, A = this._internalFilter(m), A === f.FILTER_ACCEPT)
                    return this._currentNode = m, m;
                if (A === f.FILTER_SKIP)
                    continue e;
            }
            return null;
        } } }, toString: { value: function () { return "[object TreeWalker]"; } } }), Ea; }
var _a, oi;
function $o() { if (oi)
    return _a; oi = 1, _a = c; var l = Sr(), f = Xi(), t = we(); function a(u, x, d) { return d ? f.next(u, x) : u === x ? null : f.previous(u, null); } function s(u, x) { for (; x; x = x.parentNode)
    if (u === x)
        return !0; return !1; } function i(u, x) { var d, m; for (d = u._referenceNode, m = u._pointerBeforeReferenceNode;;) {
    if (m === x)
        m = !m;
    else if (d = a(d, u._root, x), d === null)
        return null;
    var A = u._internalFilter(d);
    if (A === l.FILTER_ACCEPT)
        break;
} return u._referenceNode = d, u._pointerBeforeReferenceNode = m, d; } function c(u, x, d) { (!u || !u.nodeType) && t.NotSupportedError(), this._root = u, this._referenceNode = u, this._pointerBeforeReferenceNode = !0, this._whatToShow = Number(x) || 0, this._filter = d || null, this._active = !1, u.doc._attachNodeIterator(this); } return Object.defineProperties(c.prototype, { root: { get: function () { return this._root; } }, referenceNode: { get: function () { return this._referenceNode; } }, pointerBeforeReferenceNode: { get: function () { return this._pointerBeforeReferenceNode; } }, whatToShow: { get: function () { return this._whatToShow; } }, filter: { get: function () { return this._filter; } }, _internalFilter: { value: function (x) { var d, m; if (this._active && t.InvalidStateError(), !(1 << x.nodeType - 1 & this._whatToShow))
            return l.FILTER_SKIP; if (m = this._filter, m === null)
            d = l.FILTER_ACCEPT;
        else {
            this._active = !0;
            try {
                typeof m == "function" ? d = m(x) : d = m.acceptNode(x);
            }
            finally {
                this._active = !1;
            }
        } return +d; } }, _preremove: { value: function (x) { if (!s(x, this._root) && s(x, this._referenceNode)) {
            if (this._pointerBeforeReferenceNode) {
                for (var d = x; d.lastChild;)
                    d = d.lastChild;
                if (d = f.next(d, this.root), d) {
                    this._referenceNode = d;
                    return;
                }
                this._pointerBeforeReferenceNode = !1;
            }
            if (x.previousSibling === null)
                this._referenceNode = x.parentNode;
            else {
                this._referenceNode = x.previousSibling;
                var m;
                for (m = this._referenceNode.lastChild; m; m = this._referenceNode.lastChild)
                    this._referenceNode = m;
            }
        } } }, nextNode: { value: function () { return i(this, !0); } }, previousNode: { value: function () { return i(this, !1); } }, detach: { value: function () { } }, toString: { value: function () { return "[object NodeIterator]"; } } }), _a; }
var Ta, ci;
function za() { if (ci)
    return Ta; ci = 1, Ta = l; function l(f) { if (!f)
    return Object.create(l.prototype); this.url = f.replace(/^[ \t\n\r\f]+|[ \t\n\r\f]+$/g, ""); var t = l.pattern.exec(this.url); if (t) {
    if (t[2] && (this.scheme = t[2]), t[4]) {
        var a = t[4].match(l.userinfoPattern);
        if (a && (this.username = a[1], this.password = a[3], t[4] = t[4].substring(a[0].length)), t[4].match(l.portPattern)) {
            var s = t[4].lastIndexOf(":");
            this.host = t[4].substring(0, s), this.port = t[4].substring(s + 1);
        }
        else
            this.host = t[4];
    }
    t[5] && (this.path = t[5]), t[6] && (this.query = t[7]), t[8] && (this.fragment = t[9]);
} } return l.pattern = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/, l.userinfoPattern = /^([^@:]*)(:([^@]*))?@/, l.portPattern = /:\d+$/, l.authorityPattern = /^[^:\/?#]+:\/\//, l.hierarchyPattern = /^[^:\/?#]+:\//, l.percentEncode = function (t) { var a = t.charCodeAt(0); if (a < 256)
    return "%" + a.toString(16); throw Error("can't percent-encode codepoints > 255 yet"); }, l.prototype = { constructor: l, isAbsolute: function () { return !!this.scheme; }, isAuthorityBased: function () { return l.authorityPattern.test(this.url); }, isHierarchical: function () { return l.hierarchyPattern.test(this.url); }, toString: function () { var f = ""; return this.scheme !== void 0 && (f += this.scheme + ":"), this.isAbsolute() && (f += "//", (this.username || this.password) && (f += this.username || "", this.password && (f += ":" + this.password), f += "@"), this.host && (f += this.host)), this.port !== void 0 && (f += ":" + this.port), this.path !== void 0 && (f += this.path), this.query !== void 0 && (f += "?" + this.query), this.fragment !== void 0 && (f += "#" + this.fragment), f; }, resolve: function (f) { var t = this, a = new l(f), s = new l; return a.scheme !== void 0 ? (s.scheme = a.scheme, s.username = a.username, s.password = a.password, s.host = a.host, s.port = a.port, s.path = c(a.path), s.query = a.query) : (s.scheme = t.scheme, a.host !== void 0 ? (s.username = a.username, s.password = a.password, s.host = a.host, s.port = a.port, s.path = c(a.path), s.query = a.query) : (s.username = t.username, s.password = t.password, s.host = t.host, s.port = t.port, a.path ? (a.path.charAt(0) === "/" ? s.path = c(a.path) : (s.path = i(t.path, a.path), s.path = c(s.path)), s.query = a.query) : (s.path = t.path, a.query !== void 0 ? s.query = a.query : s.query = t.query))), s.fragment = a.fragment, s.toString(); function i(u, x) { if (t.host !== void 0 && !t.path)
        return "/" + x; var d = u.lastIndexOf("/"); return d === -1 ? x : u.substring(0, d + 1) + x; } function c(u) { if (!u)
        return u; for (var x = ""; u.length > 0;) {
        if (u === "." || u === "..") {
            u = "";
            break;
        }
        var d = u.substring(0, 2), m = u.substring(0, 3), A = u.substring(0, 4);
        if (m === "../")
            u = u.substring(3);
        else if (d === "./")
            u = u.substring(2);
        else if (m === "/./")
            u = "/" + u.substring(3);
        else if (d === "/." && u.length === 2)
            u = "/";
        else if (A === "/../" || m === "/.." && u.length === 3)
            u = "/" + u.substring(4), x = x.replace(/\/?[^\/]*$/, "");
        else {
            var F = u.match(/(\/?([^\/]*))/)[0];
            x += F, u = u.substring(F.length);
        }
    } return x; } } }, Ta; }
var ya, ui;
function Jo() { if (ui)
    return ya; ui = 1, ya = f; var l = jt(); function f(t, a) { l.call(this, t, a); } return f.prototype = Object.create(l.prototype, { constructor: { value: f } }), ya; }
var wa, li;
function Qi() { return li || (li = 1, wa = { Event: jt(), UIEvent: Oi(), MouseEvent: Ri(), CustomEvent: Jo() }), wa; }
var Vt = {}, wt = {}, fi;
function e0() { if (fi)
    return wt; fi = 1, Object.defineProperty(wt, "__esModule", { value: !0 }), wt.hyphenate = wt.parse = void 0; function l(t) { let a = [], s = 0, i = 0, c = 0, u = 0, x = 0, d = null; for (; s < t.length;)
    switch (t.charCodeAt(s++)) {
        case 40:
            i++;
            break;
        case 41:
            i--;
            break;
        case 39:
            c === 0 ? c = 39 : c === 39 && t.charCodeAt(s - 1) !== 92 && (c = 0);
            break;
        case 34:
            c === 0 ? c = 34 : c === 34 && t.charCodeAt(s - 1) !== 92 && (c = 0);
            break;
        case 58:
            !d && i === 0 && c === 0 && (d = f(t.substring(x, s - 1).trim()), u = s);
            break;
        case 59:
            if (d && u > 0 && i === 0 && c === 0) {
                let A = t.substring(u, s - 1).trim();
                a.push(d, A), x = s, u = 0, d = null;
            }
            break;
    } if (d && u) {
    let m = t.slice(u).trim();
    a.push(d, m);
} return a; } wt.parse = l; function f(t) { return t.replace(/[a-z][A-Z]/g, a => a.charAt(0) + "-" + a.charAt(1)).toLowerCase(); } return wt.hyphenate = f, wt; }
var Sa, xi;
function Wa() { if (xi)
    return Sa; xi = 1; let { parse: l } = e0(); Sa = function (c) { let u = new t(c), x = { get: function (d, m) { return m in d ? d[m] : d.getPropertyValue(f(m)); }, has: function (d, m) { return !0; }, set: function (d, m, A) { return m in d ? d[m] = A : d.setProperty(f(m), A ?? void 0), !0; } }; return new Proxy(u, x); }; function f(c) { return c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(); } function t(c) { this._element = c; } let a = "!important"; function s(c) { let u = { property: {}, priority: {} }; if (!c)
    return u; let x = l(c); if (x.length < 2)
    return u; for (let d = 0; d < x.length; d += 2) {
    let m = x[d], A = x[d + 1];
    A.endsWith(a) && (u.priority[m] = "important", A = A.slice(0, -a.length).trim()), u.property[m] = A;
} return u; } var i = {}; return t.prototype = Object.create(Object.prototype, { _parsed: { get: function () { if (!this._parsedStyles || this.cssText !== this._lastParsedText) {
            var c = this.cssText;
            this._parsedStyles = s(c), this._lastParsedText = c, delete this._names;
        } return this._parsedStyles; } }, _serialize: { value: function () { var c = this._parsed, u = ""; for (var x in c.property)
            u && (u += " "), u += x + ": " + c.property[x], c.priority[x] && (u += " !" + c.priority[x]), u += ";"; this.cssText = u, this._lastParsedText = u, delete this._names; } }, cssText: { get: function () { return this._element.getAttribute("style"); }, set: function (c) { this._element.setAttribute("style", c); } }, length: { get: function () { return this._names || (this._names = Object.getOwnPropertyNames(this._parsed.property)), this._names.length; } }, item: { value: function (c) { return this._names || (this._names = Object.getOwnPropertyNames(this._parsed.property)), this._names[c]; } }, getPropertyValue: { value: function (c) { return c = c.toLowerCase(), this._parsed.property[c] || ""; } }, getPropertyPriority: { value: function (c) { return c = c.toLowerCase(), this._parsed.priority[c] || ""; } }, setProperty: { value: function (c, u, x) { if (c = c.toLowerCase(), u == null && (u = ""), x == null && (x = ""), u !== i && (u = "" + u), u = u.trim(), u === "") {
            this.removeProperty(c);
            return;
        } if (!(x !== "" && x !== i && !/^important$/i.test(x))) {
            var d = this._parsed;
            if (u === i) {
                if (!d.property[c])
                    return;
                x !== "" ? d.priority[c] = "important" : delete d.priority[c];
            }
            else {
                if (u.includes(";") && !u.includes("data:"))
                    return;
                var m = s(c + ":" + u);
                if (Object.getOwnPropertyNames(m.property).length === 0 || Object.getOwnPropertyNames(m.priority).length !== 0)
                    return;
                for (var A in m.property)
                    d.property[A] = m.property[A], x !== i && (x !== "" ? d.priority[A] = "important" : d.priority[A] && delete d.priority[A]);
            }
            this._serialize();
        } } }, setPropertyValue: { value: function (c, u) { return this.setProperty(c, u, i); } }, setPropertyPriority: { value: function (c, u) { return this.setProperty(c, i, u); } }, removeProperty: { value: function (c) { c = c.toLowerCase(); var u = this._parsed; c in u.property && (delete u.property[c], delete u.priority[c], this._serialize()); } } }), Sa; }
var Na, di;
function Yi() { if (di)
    return Na; di = 1; var l = za(); Na = f; function f() { } return f.prototype = Object.create(Object.prototype, { _url: { get: function () { return new l(this.href); } }, protocol: { get: function () { var t = this._url; return t && t.scheme ? t.scheme + ":" : ":"; }, set: function (t) { var a = this.href, s = new l(a); s.isAbsolute() && (t = t.replace(/:+$/, ""), t = t.replace(/[^-+\.a-zA-Z0-9]/g, l.percentEncode), t.length > 0 && (s.scheme = t, a = s.toString())), this.href = a; } }, host: { get: function () { var t = this._url; return t.isAbsolute() && t.isAuthorityBased() ? t.host + (t.port ? ":" + t.port : "") : ""; }, set: function (t) { var a = this.href, s = new l(a); s.isAbsolute() && s.isAuthorityBased() && (t = t.replace(/[^-+\._~!$&'()*,;:=a-zA-Z0-9]/g, l.percentEncode), t.length > 0 && (s.host = t, delete s.port, a = s.toString())), this.href = a; } }, hostname: { get: function () { var t = this._url; return t.isAbsolute() && t.isAuthorityBased() ? t.host : ""; }, set: function (t) { var a = this.href, s = new l(a); s.isAbsolute() && s.isAuthorityBased() && (t = t.replace(/^\/+/, ""), t = t.replace(/[^-+\._~!$&'()*,;:=a-zA-Z0-9]/g, l.percentEncode), t.length > 0 && (s.host = t, a = s.toString())), this.href = a; } }, port: { get: function () { var t = this._url; return t.isAbsolute() && t.isAuthorityBased() && t.port !== void 0 ? t.port : ""; }, set: function (t) { var a = this.href, s = new l(a); s.isAbsolute() && s.isAuthorityBased() && (t = "" + t, t = t.replace(/[^0-9].*$/, ""), t = t.replace(/^0+/, ""), t.length === 0 && (t = "0"), parseInt(t, 10) <= 65535 && (s.port = t, a = s.toString())), this.href = a; } }, pathname: { get: function () { var t = this._url; return t.isAbsolute() && t.isHierarchical() ? t.path : ""; }, set: function (t) { var a = this.href, s = new l(a); s.isAbsolute() && s.isHierarchical() && (t.charAt(0) !== "/" && (t = "/" + t), t = t.replace(/[^-+\._~!$&'()*,;:=@\/a-zA-Z0-9]/g, l.percentEncode), s.path = t, a = s.toString()), this.href = a; } }, search: { get: function () { var t = this._url; return t.isAbsolute() && t.isHierarchical() && t.query !== void 0 ? "?" + t.query : ""; }, set: function (t) { var a = this.href, s = new l(a); s.isAbsolute() && s.isHierarchical() && (t.charAt(0) === "?" && (t = t.substring(1)), t = t.replace(/[^-+\._~!$&'()*,;:=@\/?a-zA-Z0-9]/g, l.percentEncode), s.query = t, a = s.toString()), this.href = a; } }, hash: { get: function () { var t = this._url; return t == null || t.fragment == null || t.fragment === "" ? "" : "#" + t.fragment; }, set: function (t) { var a = this.href, s = new l(a); t.charAt(0) === "#" && (t = t.substring(1)), t = t.replace(/[^-+\._~!$&'()*,;:=@\/?a-zA-Z0-9]/g, l.percentEncode), s.fragment = t, a = s.toString(), this.href = a; } }, username: { get: function () { var t = this._url; return t.username || ""; }, set: function (t) { var a = this.href, s = new l(a); s.isAbsolute() && (t = t.replace(/[\x00-\x1F\x7F-\uFFFF "#<>?`\/@\\:]/g, l.percentEncode), s.username = t, a = s.toString()), this.href = a; } }, password: { get: function () { var t = this._url; return t.password || ""; }, set: function (t) { var a = this.href, s = new l(a); s.isAbsolute() && (t === "" ? s.password = null : (t = t.replace(/[\x00-\x1F\x7F-\uFFFF "#<>?`\/@\\]/g, l.percentEncode), s.password = t), a = s.toString()), this.href = a; } }, origin: { get: function () { var t = this._url; if (t == null)
            return ""; var a = function (s) { var i = [t.scheme, t.host, +t.port || s]; return i[0] + "://" + i[1] + (i[2] === s ? "" : ":" + i[2]); }; switch (t.scheme) {
            case "ftp": return a(21);
            case "gopher": return a(70);
            case "http":
            case "ws": return a(80);
            case "https":
            case "wss": return a(443);
            default: return t.scheme + "://";
        } } } }), f._inherit = function (t) { Object.getOwnPropertyNames(f.prototype).forEach(function (a) { if (!(a === "constructor" || a === "href")) {
    var s = Object.getOwnPropertyDescriptor(f.prototype, a);
    Object.defineProperty(t, a, s);
} }); }, Na; }
var Da, hi;
function Zi() { if (hi)
    return Da; hi = 1; var l = Bi(), f = Pa().isApiWritable; Da = function (i, c, u, x) { var d = i.ctor; if (d) {
    var m = i.props || {};
    if (i.attributes)
        for (var A in i.attributes) {
            var F = i.attributes[A];
            (typeof F != "object" || Array.isArray(F)) && (F = { type: F }), F.name || (F.name = A.toLowerCase()), m[A] = l.property(F);
        }
    m.constructor = { value: d, writable: f }, d.prototype = Object.create((i.superclass || c).prototype, m), i.events && s(d, i.events), u[i.name] = d;
}
else
    d = c; return (i.tags || i.tag && [i.tag] || []).forEach(function (W) { x[W] = d; }), d; }; function t(i, c, u, x) { this.body = i, this.document = c, this.form = u, this.element = x; } t.prototype.build = function () { return () => { }; }; function a(i, c, u, x) { var d = i.ownerDocument || Object.create(null), m = i.form || Object.create(null); i[c] = new t(x, d, m, i).build(); } function s(i, c) { var u = i.prototype; c.forEach(function (x) { Object.defineProperty(u, "on" + x, { get: function () { return this._getEventHandler(x); }, set: function (d) { this._setEventHandler(x, d); } }), l.registerChangeHandler(i, "on" + x, a); }); } return Da; }
var pi;
function Ka() { if (pi)
    return Vt; pi = 1; var l = De(), f = Gt(), t = Wa(), a = we(), s = Yi(), i = Zi(), c = Vt.elements = {}, u = Object.create(null); Vt.createElement = function (w, b, _) { var y = u[b] || P; return new y(w, b, _); }; function x(w) { return i(w, M, c, u); } function d(w) { return { get: function () { var b = this._getattr(w); if (b === null)
        return ""; var _ = this.doc._resolve(b); return _ === null ? b : _; }, set: function (b) { this._setattr(w, b); } }; } function m(w) { return { get: function () { var b = this._getattr(w); return b === null ? null : b.toLowerCase() === "use-credentials" ? "use-credentials" : "anonymous"; }, set: function (b) { b == null ? this.removeAttribute(w) : this._setattr(w, b); } }; } let A = { type: ["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"], missing: "" }; var F = { A: !0, LINK: !0, BUTTON: !0, INPUT: !0, SELECT: !0, TEXTAREA: !0, COMMAND: !0 }, W = function (w, b, _) { M.call(this, w, b, _), this._form = null; }, M = Vt.HTMLElement = x({ superclass: f, name: "HTMLElement", ctor: function (b, _, y) { f.call(this, b, _, a.NAMESPACE.HTML, y); }, props: { dangerouslySetInnerHTML: { set: function (w) { this._innerHTML = w; } }, innerHTML: { get: function () { return this.serialize(); }, set: function (w) { var b = this.ownerDocument.implementation.mozHTMLParser(this.ownerDocument._address, this); b.parse(w === null ? "" : String(w), !0); for (var _ = this instanceof u.template ? this.content : this; _.hasChildNodes();)
                _.removeChild(_.firstChild); _.appendChild(b._asDocumentFragment()); } }, style: { get: function () { return this._style || (this._style = new t(this)), this._style; }, set: function (w) { w == null && (w = ""), this._setattr("style", String(w)); } }, blur: { value: function () { } }, focus: { value: function () { } }, forceSpellCheck: { value: function () { } }, click: { value: function () { if (!this._click_in_progress) {
                this._click_in_progress = !0;
                try {
                    this._pre_click_activation_steps && this._pre_click_activation_steps();
                    var w = this.ownerDocument.createEvent("MouseEvent");
                    w.initMouseEvent("click", !0, !0, this.ownerDocument.defaultView, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
                    var b = this.dispatchEvent(w);
                    b ? this._post_click_activation_steps && this._post_click_activation_steps(w) : this._cancelled_activation_steps && this._cancelled_activation_steps();
                }
                finally {
                    this._click_in_progress = !1;
                }
            } } }, submit: { value: a.nyi } }, attributes: { title: String, lang: String, dir: { type: ["ltr", "rtl", "auto"], missing: "" }, draggable: { type: ["true", "false"], treatNullAsEmptyString: !0 }, spellcheck: { type: ["true", "false"], missing: "" }, enterKeyHint: { type: ["enter", "done", "go", "next", "previous", "search", "send"], missing: "" }, autoCapitalize: { type: ["off", "on", "none", "sentences", "words", "characters"], missing: "" }, autoFocus: Boolean, accessKey: String, nonce: String, hidden: Boolean, translate: { type: ["no", "yes"], missing: "" }, tabIndex: { type: "long", default: function () { return this.tagName in F || this.contentEditable ? 0 : -1; } } }, events: ["abort", "canplay", "canplaythrough", "change", "click", "contextmenu", "cuechange", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "ended", "input", "invalid", "keydown", "keypress", "keyup", "loadeddata", "loadedmetadata", "loadstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "pause", "play", "playing", "progress", "ratechange", "readystatechange", "reset", "seeked", "seeking", "select", "show", "stalled", "submit", "suspend", "timeupdate", "volumechange", "waiting", "blur", "error", "focus", "load", "scroll"] }), P = x({ name: "HTMLUnknownElement", ctor: function (b, _, y) { M.call(this, b, _, y); } }), K = { form: { get: function () { return this._form; } } }; return x({ tag: "a", name: "HTMLAnchorElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, props: { _post_click_activation_steps: { value: function (w) { this.href && (this.ownerDocument.defaultView.location = this.href); } } }, attributes: { href: d, ping: String, download: String, target: String, rel: String, media: String, hreflang: String, type: String, referrerPolicy: A, coords: String, charset: String, name: String, rev: String, shape: String } }), s._inherit(u.a.prototype), x({ tag: "area", name: "HTMLAreaElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { alt: String, target: String, download: String, rel: String, media: String, href: d, hreflang: String, type: String, shape: String, coords: String, ping: String, referrerPolicy: A, noHref: Boolean } }), s._inherit(u.area.prototype), x({ tag: "br", name: "HTMLBRElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { clear: String } }), x({ tag: "base", name: "HTMLBaseElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { target: String } }), x({ tag: "body", name: "HTMLBodyElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, events: ["afterprint", "beforeprint", "beforeunload", "blur", "error", "focus", "hashchange", "load", "message", "offline", "online", "pagehide", "pageshow", "popstate", "resize", "scroll", "storage", "unload"], attributes: { text: { type: String, treatNullAsEmptyString: !0 }, link: { type: String, treatNullAsEmptyString: !0 }, vLink: { type: String, treatNullAsEmptyString: !0 }, aLink: { type: String, treatNullAsEmptyString: !0 }, bgColor: { type: String, treatNullAsEmptyString: !0 }, background: String } }), x({ tag: "button", name: "HTMLButtonElement", ctor: function (b, _, y) { W.call(this, b, _, y); }, props: K, attributes: { name: String, value: String, disabled: Boolean, autofocus: Boolean, type: { type: ["submit", "reset", "button", "menu"], missing: "submit" }, formTarget: String, formAction: d, formNoValidate: Boolean, formMethod: { type: ["get", "post", "dialog"], invalid: "get", missing: "" }, formEnctype: { type: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"], invalid: "application/x-www-form-urlencoded", missing: "" } } }), x({ tag: "dl", name: "HTMLDListElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { compact: Boolean } }), x({ tag: "data", name: "HTMLDataElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { value: String } }), x({ tag: "datalist", name: "HTMLDataListElement", ctor: function (b, _, y) { M.call(this, b, _, y); } }), x({ tag: "details", name: "HTMLDetailsElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { open: Boolean } }), x({ tag: "div", name: "HTMLDivElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { align: String } }), x({ tag: "embed", name: "HTMLEmbedElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { src: d, type: String, width: String, height: String, align: String, name: String } }), x({ tag: "fieldset", name: "HTMLFieldSetElement", ctor: function (b, _, y) { W.call(this, b, _, y); }, props: K, attributes: { disabled: Boolean, name: String } }), x({ tag: "form", name: "HTMLFormElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { action: String, autocomplete: { type: ["on", "off"], missing: "on" }, name: String, acceptCharset: { name: "accept-charset" }, target: String, noValidate: Boolean, method: { type: ["get", "post", "dialog"], invalid: "get", missing: "get" }, enctype: { type: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"], invalid: "application/x-www-form-urlencoded", missing: "application/x-www-form-urlencoded" }, encoding: { name: "enctype", type: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"], invalid: "application/x-www-form-urlencoded", missing: "application/x-www-form-urlencoded" } } }), x({ tag: "hr", name: "HTMLHRElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { align: String, color: String, noShade: Boolean, size: String, width: String } }), x({ tag: "head", name: "HTMLHeadElement", ctor: function (b, _, y) { M.call(this, b, _, y); } }), x({ tags: ["h1", "h2", "h3", "h4", "h5", "h6"], name: "HTMLHeadingElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { align: String } }), x({ tag: "html", name: "HTMLHtmlElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { xmlns: d, version: String } }), x({ tag: "iframe", name: "HTMLIFrameElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { src: d, srcdoc: String, name: String, width: String, height: String, seamless: Boolean, allow: Boolean, allowFullscreen: Boolean, allowUserMedia: Boolean, allowPaymentRequest: Boolean, referrerPolicy: A, loading: { type: ["eager", "lazy"], treatNullAsEmptyString: !0 }, align: String, scrolling: String, frameBorder: String, longDesc: d, marginHeight: { type: String, treatNullAsEmptyString: !0 }, marginWidth: { type: String, treatNullAsEmptyString: !0 } } }), x({ tag: "img", name: "HTMLImageElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { alt: String, src: d, srcset: String, crossOrigin: m, useMap: String, isMap: Boolean, sizes: String, height: { type: "unsigned long", default: 0 }, width: { type: "unsigned long", default: 0 }, referrerPolicy: A, loading: { type: ["eager", "lazy"], missing: "" }, name: String, lowsrc: d, align: String, hspace: { type: "unsigned long", default: 0 }, vspace: { type: "unsigned long", default: 0 }, longDesc: d, border: { type: String, treatNullAsEmptyString: !0 } } }), x({ tag: "input", name: "HTMLInputElement", ctor: function (b, _, y) { W.call(this, b, _, y); }, props: { form: K.form, _post_click_activation_steps: { value: function (w) { if (this.type === "checkbox")
                this.checked = !this.checked;
            else if (this.type === "radio")
                for (var b = this.form.getElementsByName(this.name), _ = b.length - 1; _ >= 0; _--) {
                    var y = b[_];
                    y.checked = y === this;
                } } } }, attributes: { name: String, disabled: Boolean, autofocus: Boolean, accept: String, alt: String, max: String, min: String, pattern: String, placeholder: String, step: String, dirName: String, defaultValue: { name: "value" }, multiple: Boolean, required: Boolean, readOnly: Boolean, checked: Boolean, value: String, src: d, defaultChecked: { name: "checked", type: Boolean }, size: { type: "unsigned long", default: 20, min: 1, setmin: 1 }, width: { type: "unsigned long", min: 0, setmin: 0, default: 0 }, height: { type: "unsigned long", min: 0, setmin: 0, default: 0 }, minLength: { type: "unsigned long", min: 0, setmin: 0, default: -1 }, maxLength: { type: "unsigned long", min: 0, setmin: 0, default: -1 }, autocomplete: String, type: { type: ["text", "hidden", "search", "tel", "url", "email", "password", "datetime", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"], missing: "text" }, formTarget: String, formNoValidate: Boolean, formMethod: { type: ["get", "post"], invalid: "get", missing: "" }, formEnctype: { type: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"], invalid: "application/x-www-form-urlencoded", missing: "" }, inputMode: { type: ["verbatim", "latin", "latin-name", "latin-prose", "full-width-latin", "kana", "kana-name", "katakana", "numeric", "tel", "email", "url"], missing: "" }, align: String, useMap: String } }), x({ tag: "keygen", name: "HTMLKeygenElement", ctor: function (b, _, y) { W.call(this, b, _, y); }, props: K, attributes: { name: String, disabled: Boolean, autofocus: Boolean, challenge: String, keytype: { type: ["rsa"], missing: "" } } }), x({ tag: "li", name: "HTMLLIElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { value: { type: "long", default: 0 }, type: String } }), x({ tag: "label", name: "HTMLLabelElement", ctor: function (b, _, y) { W.call(this, b, _, y); }, props: K, attributes: { htmlFor: { name: "for", type: String } } }), x({ tag: "legend", name: "HTMLLegendElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { align: String } }), x({ tag: "link", name: "HTMLLinkElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { href: d, rel: String, media: String, hreflang: String, type: String, crossOrigin: m, nonce: String, integrity: String, referrerPolicy: A, imageSizes: String, imageSrcset: String, charset: String, rev: String, target: String } }), x({ tag: "map", name: "HTMLMapElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { name: String } }), x({ tag: "menu", name: "HTMLMenuElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { type: { type: ["context", "popup", "toolbar"], missing: "toolbar" }, label: String, compact: Boolean } }), x({ tag: "meta", name: "HTMLMetaElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { name: String, content: String, httpEquiv: { name: "http-equiv", type: String }, scheme: String } }), x({ tag: "meter", name: "HTMLMeterElement", ctor: function (b, _, y) { W.call(this, b, _, y); }, props: K }), x({ tags: ["ins", "del"], name: "HTMLModElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { cite: d, dateTime: String } }), x({ tag: "ol", name: "HTMLOListElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, props: { _numitems: { get: function () { var w = 0; return this.childNodes.forEach(function (b) { b.nodeType === l.ELEMENT_NODE && b.tagName === "LI" && w++; }), w; } } }, attributes: { type: String, reversed: Boolean, start: { type: "long", default: function () { return this.reversed ? this._numitems : 1; } }, compact: Boolean } }), x({ tag: "object", name: "HTMLObjectElement", ctor: function (b, _, y) { W.call(this, b, _, y); }, props: K, attributes: { data: d, type: String, name: String, useMap: String, typeMustMatch: Boolean, width: String, height: String, align: String, archive: String, code: String, declare: Boolean, hspace: { type: "unsigned long", default: 0 }, standby: String, vspace: { type: "unsigned long", default: 0 }, codeBase: d, codeType: String, border: { type: String, treatNullAsEmptyString: !0 } } }), x({ tag: "optgroup", name: "HTMLOptGroupElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { disabled: Boolean, label: String } }), x({ tag: "option", name: "HTMLOptionElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, props: { form: { get: function () { for (var w = this.parentNode; w && w.nodeType === l.ELEMENT_NODE;) {
                if (w.localName === "select")
                    return w.form;
                w = w.parentNode;
            } } }, value: { get: function () { return this._getattr("value") || this.text; }, set: function (w) { this._setattr("value", w); } }, text: { get: function () { return this.textContent.replace(/[ \t\n\f\r]+/g, " ").trim(); }, set: function (w) { this.textContent = w; } } }, attributes: { disabled: Boolean, defaultSelected: { name: "selected", type: Boolean }, label: String } }), x({ tag: "output", name: "HTMLOutputElement", ctor: function (b, _, y) { W.call(this, b, _, y); }, props: K, attributes: { name: String } }), x({ tag: "p", name: "HTMLParagraphElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { align: String } }), x({ tag: "param", name: "HTMLParamElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { name: String, value: String, type: String, valueType: String } }), x({ tags: ["pre", "listing", "xmp"], name: "HTMLPreElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { width: { type: "long", default: 0 } } }), x({ tag: "progress", name: "HTMLProgressElement", ctor: function (b, _, y) { W.call(this, b, _, y); }, props: K, attributes: { max: { type: Number, float: !0, default: 1, min: 0 } } }), x({ tags: ["q", "blockquote"], name: "HTMLQuoteElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { cite: d } }), x({ tag: "script", name: "HTMLScriptElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, props: { text: { get: function () { for (var w = "", b = 0, _ = this.childNodes.length; b < _; b++) {
                var y = this.childNodes[b];
                y.nodeType === l.TEXT_NODE && (w += y._data);
            } return w; }, set: function (w) { this.removeChildren(), w !== null && w !== "" && this.appendChild(this.ownerDocument.createTextNode(w)); } } }, attributes: { src: d, type: String, charset: String, referrerPolicy: A, defer: Boolean, async: Boolean, nomodule: Boolean, crossOrigin: m, nonce: String, integrity: String } }), x({ tag: "select", name: "HTMLSelectElement", ctor: function (b, _, y) { W.call(this, b, _, y); }, props: { form: K.form, options: { get: function () { return this.getElementsByTagName("option"); } } }, attributes: { autocomplete: String, name: String, disabled: Boolean, autofocus: Boolean, multiple: Boolean, required: Boolean, size: { type: "unsigned long", default: 0 } } }), x({ tag: "span", name: "HTMLSpanElement", ctor: function (b, _, y) { M.call(this, b, _, y); } }), x({ tag: "style", name: "HTMLStyleElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { media: String, type: String, scoped: Boolean } }), x({ tag: "caption", name: "HTMLTableCaptionElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { align: String } }), x({ name: "HTMLTableCellElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { colSpan: { type: "unsigned long", default: 1 }, rowSpan: { type: "unsigned long", default: 1 }, scope: { type: ["row", "col", "rowgroup", "colgroup"], missing: "" }, abbr: String, align: String, axis: String, height: String, width: String, ch: { name: "char", type: String }, chOff: { name: "charoff", type: String }, noWrap: Boolean, vAlign: String, bgColor: { type: String, treatNullAsEmptyString: !0 } } }), x({ tags: ["col", "colgroup"], name: "HTMLTableColElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { span: { type: "limited unsigned long with fallback", default: 1, min: 1 }, align: String, ch: { name: "char", type: String }, chOff: { name: "charoff", type: String }, vAlign: String, width: String } }), x({ tag: "table", name: "HTMLTableElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, props: { rows: { get: function () { return this.getElementsByTagName("tr"); } } }, attributes: { align: String, border: String, frame: String, rules: String, summary: String, width: String, bgColor: { type: String, treatNullAsEmptyString: !0 }, cellPadding: { type: String, treatNullAsEmptyString: !0 }, cellSpacing: { type: String, treatNullAsEmptyString: !0 } } }), x({ tag: "template", name: "HTMLTemplateElement", ctor: function (b, _, y) { M.call(this, b, _, y), this._contentFragment = b._templateDoc.createDocumentFragment(); }, props: { content: { get: function () { return this._contentFragment; } }, serialize: { value: function () { return this.content.serialize(); } } } }), x({ tag: "tr", name: "HTMLTableRowElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, props: { cells: { get: function () { return this.querySelectorAll("td,th"); } } }, attributes: { align: String, ch: { name: "char", type: String }, chOff: { name: "charoff", type: String }, vAlign: String, bgColor: { type: String, treatNullAsEmptyString: !0 } } }), x({ tags: ["thead", "tfoot", "tbody"], name: "HTMLTableSectionElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, props: { rows: { get: function () { return this.getElementsByTagName("tr"); } } }, attributes: { align: String, ch: { name: "char", type: String }, chOff: { name: "charoff", type: String }, vAlign: String } }), x({ tag: "textarea", name: "HTMLTextAreaElement", ctor: function (b, _, y) { W.call(this, b, _, y); }, props: { form: K.form, type: { get: function () { return "textarea"; } }, defaultValue: { get: function () { return this.textContent; }, set: function (w) { this.textContent = w; } }, value: { get: function () { return this.defaultValue; }, set: function (w) { this.defaultValue = w; } }, textLength: { get: function () { return this.value.length; } } }, attributes: { autocomplete: String, name: String, disabled: Boolean, autofocus: Boolean, placeholder: String, wrap: String, dirName: String, required: Boolean, readOnly: Boolean, rows: { type: "limited unsigned long with fallback", default: 2 }, cols: { type: "limited unsigned long with fallback", default: 20 }, maxLength: { type: "unsigned long", min: 0, setmin: 0, default: -1 }, minLength: { type: "unsigned long", min: 0, setmin: 0, default: -1 }, inputMode: { type: ["verbatim", "latin", "latin-name", "latin-prose", "full-width-latin", "kana", "kana-name", "katakana", "numeric", "tel", "email", "url"], missing: "" } } }), x({ tag: "time", name: "HTMLTimeElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { dateTime: String, pubDate: Boolean } }), x({ tag: "title", name: "HTMLTitleElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, props: { text: { get: function () { return this.textContent; } } } }), x({ tag: "ul", name: "HTMLUListElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { type: String, compact: Boolean } }), x({ name: "HTMLMediaElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { src: d, crossOrigin: m, preload: { type: ["metadata", "none", "auto", { value: "", alias: "auto" }], missing: "auto" }, loop: Boolean, autoplay: Boolean, mediaGroup: String, controls: Boolean, defaultMuted: { name: "muted", type: Boolean } } }), x({ name: "HTMLAudioElement", tag: "audio", superclass: c.HTMLMediaElement, ctor: function (b, _, y) { c.HTMLMediaElement.call(this, b, _, y); } }), x({ name: "HTMLVideoElement", tag: "video", superclass: c.HTMLMediaElement, ctor: function (b, _, y) { c.HTMLMediaElement.call(this, b, _, y); }, attributes: { poster: d, width: { type: "unsigned long", min: 0, default: 0 }, height: { type: "unsigned long", min: 0, default: 0 } } }), x({ tag: "td", name: "HTMLTableDataCellElement", superclass: c.HTMLTableCellElement, ctor: function (b, _, y) { c.HTMLTableCellElement.call(this, b, _, y); } }), x({ tag: "th", name: "HTMLTableHeaderCellElement", superclass: c.HTMLTableCellElement, ctor: function (b, _, y) { c.HTMLTableCellElement.call(this, b, _, y); } }), x({ tag: "frameset", name: "HTMLFrameSetElement", ctor: function (b, _, y) { M.call(this, b, _, y); } }), x({ tag: "frame", name: "HTMLFrameElement", ctor: function (b, _, y) { M.call(this, b, _, y); } }), x({ tag: "canvas", name: "HTMLCanvasElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, props: { getContext: { value: a.nyi }, probablySupportsContext: { value: a.nyi }, setContext: { value: a.nyi }, transferControlToProxy: { value: a.nyi }, toDataURL: { value: a.nyi }, toBlob: { value: a.nyi } }, attributes: { width: { type: "unsigned long", default: 300 }, height: { type: "unsigned long", default: 150 } } }), x({ tag: "dialog", name: "HTMLDialogElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, props: { show: { value: a.nyi }, showModal: { value: a.nyi }, close: { value: a.nyi } }, attributes: { open: Boolean, returnValue: String } }), x({ tag: "menuitem", name: "HTMLMenuItemElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, props: { _label: { get: function () { var w = this._getattr("label"); return w !== null && w !== "" ? w : (w = this.textContent, w.replace(/[ \t\n\f\r]+/g, " ").trim()); } }, label: { get: function () { var w = this._getattr("label"); return w !== null ? w : this._label; }, set: function (w) { this._setattr("label", w); } } }, attributes: { type: { type: ["command", "checkbox", "radio"], missing: "command" }, icon: d, disabled: Boolean, checked: Boolean, radiogroup: String, default: Boolean } }), x({ tag: "source", name: "HTMLSourceElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { srcset: String, sizes: String, media: String, src: d, type: String, width: String, height: String } }), x({ tag: "track", name: "HTMLTrackElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { src: d, srclang: String, label: String, default: Boolean, kind: { type: ["subtitles", "captions", "descriptions", "chapters", "metadata"], missing: "subtitles", invalid: "metadata" } }, props: { NONE: { get: function () { return 0; } }, LOADING: { get: function () { return 1; } }, LOADED: { get: function () { return 2; } }, ERROR: { get: function () { return 3; } }, readyState: { get: a.nyi }, track: { get: a.nyi } } }), x({ tag: "font", name: "HTMLFontElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { color: { type: String, treatNullAsEmptyString: !0 }, face: { type: String }, size: { type: String } } }), x({ tag: "dir", name: "HTMLDirectoryElement", ctor: function (b, _, y) { M.call(this, b, _, y); }, attributes: { compact: Boolean } }), x({ tags: ["abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "content", "code", "dd", "dfn", "dt", "em", "figcaption", "figure", "footer", "header", "hgroup", "i", "kbd", "main", "mark", "nav", "noscript", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr", "acronym", "basefont", "big", "center", "nobr", "noembed", "noframes", "plaintext", "strike", "tt"] }), Vt; }
var Ca = {}, mi;
function $i() { return mi || (mi = 1, (function (l) { var f = Gt(), t = Zi(), a = we(), s = Wa(), i = l.elements = {}, c = Object.create(null); l.createElement = function (d, m, A) { var F = c[m] || x; return new F(d, m, A); }; function u(d) { return t(d, x, i, c); } var x = u({ superclass: f, name: "SVGElement", ctor: function (m, A, F) { f.call(this, m, A, a.NAMESPACE.SVG, F); }, props: { style: { get: function () { return this._style || (this._style = new s(this)), this._style; } } } }); u({ name: "SVGSVGElement", ctor: function (m, A, F) { x.call(this, m, A, F); }, tag: "svg", props: { createSVGRect: { value: function () { return l.createElement(this.ownerDocument, "rect", null); } } } }), u({ tags: ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"] }); })(Ca)), Ca; }
var La, gi;
function t0() { return gi || (gi = 1, La = { VALUE: 1, ATTR: 2, REMOVE_ATTR: 3, REMOVE: 4, MOVE: 5, INSERT: 6 }), La; }
var Aa, bi;
function Xa() {
    if (bi)
        return Aa;
    bi = 1, Aa = U;
    var l = De(), f = kt(), t = Ua(), a = Gt(), s = Gi(), i = zi(), c = jt(), u = Wi(), x = Ki(), d = Nr(), m = Zo(), A = $o(), F = Sr(), W = za(), M = ja(), P = Qi(), K = Va(), w = Ka(), b = $i(), _ = we(), y = t0(), j = _.NAMESPACE, ve = Pa().isApiWritable;
    function U(v, L) { t.call(this), this.nodeType = l.DOCUMENT_NODE, this.isHTML = v, this._address = L || "about:blank", this.readyState = "loading", this.implementation = new d(this), this.ownerDocument = null, this._contentType = v ? "text/html" : "application/xml", this.doctype = null, this.documentElement = null, this._templateDocCache = null, this._nodeIterators = null, this._nid = 1, this._nextnid = 2, this._nodes = [null, this], this.byId = Object.create(null), this.modclock = 0; }
    var D = { event: "Event", customevent: "CustomEvent", uievent: "UIEvent", mouseevent: "MouseEvent" }, I = { events: "event", htmlevents: "event", mouseevents: "mouseevent", mutationevents: "mutationevent", uievents: "uievent" }, E = function (v, L, B) { return { get: function () { var ae = v.call(this); return ae ? ae[L] : B; }, set: function (ae) { var Me = v.call(this); Me && (Me[L] = ae); } }; };
    function o(v, L) { var B, ae, Me; return v === "" && (v = null), K.isValidQName(L) || _.InvalidCharacterError(), B = null, ae = L, Me = L.indexOf(":"), Me >= 0 && (B = L.substring(0, Me), ae = L.substring(Me + 1)), B !== null && v === null && _.NamespaceError(), B === "xml" && v !== j.XML && _.NamespaceError(), (B === "xmlns" || L === "xmlns") && v !== j.XMLNS && _.NamespaceError(), v === j.XMLNS && !(B === "xmlns" || L === "xmlns") && _.NamespaceError(), { namespace: v, prefix: B, localName: ae }; }
    U.prototype = Object.create(t.prototype, { _setMutationHandler: { value: function (v) { this.mutationHandler = v; } }, _dispatchRendererEvent: { value: function (v, L, B) { var ae = this._nodes[v]; ae && ae._dispatchEvent(new c(L, B), !0); } }, nodeName: { value: "#document" }, nodeValue: { get: function () { return null; }, set: function () { } }, documentURI: { get: function () { return this._address; }, set: _.nyi }, compatMode: { get: function () { return this._quirks ? "BackCompat" : "CSS1Compat"; } }, createTextNode: { value: function (v) { return new s(this, String(v)); } }, createComment: { value: function (v) { return new i(this, v); } }, createDocumentFragment: { value: function () { return new u(this); } }, createProcessingInstruction: { value: function (v, L) { return (!K.isValidName(v) || L.indexOf("?>") !== -1) && _.InvalidCharacterError(), new x(this, v, L); } }, createAttribute: { value: function (v) { return v = String(v), K.isValidName(v) || _.InvalidCharacterError(), this.isHTML && (v = _.toASCIILowerCase(v)), new a._Attr(null, v, null, null, ""); } }, createAttributeNS: { value: function (v, L) { v = v == null || v === "" ? null : String(v), L = String(L); var B = o(v, L); return new a._Attr(null, B.localName, B.prefix, B.namespace, ""); } }, createElement: { value: function (v) { return v = String(v), K.isValidName(v) || _.InvalidCharacterError(), this.isHTML ? (/[A-Z]/.test(v) && (v = _.toASCIILowerCase(v)), w.createElement(this, v, null)) : this.contentType === "application/xhtml+xml" ? w.createElement(this, v, null) : new a(this, v, null, null); }, writable: ve }, createElementNS: { value: function (v, L) { v = v == null || v === "" ? null : String(v), L = String(L); var B = o(v, L); return this._createElementNS(B.localName, B.namespace, B.prefix); }, writable: ve }, _createElementNS: { value: function (v, L, B) { return L === j.HTML ? w.createElement(this, v, B) : L === j.SVG ? b.createElement(this, v, B) : new a(this, v, L, B); } }, createEvent: { value: function (L) { L = L.toLowerCase(); var B = I[L] || L, ae = P[D[B]]; if (ae) {
                var Me = new ae;
                return Me._initialized = !1, Me;
            }
            else
                _.NotSupportedError(); } }, createTreeWalker: { value: function (v, L, B) { if (!v)
                throw new TypeError("root argument is required"); if (!(v instanceof l))
                throw new TypeError("root not a node"); return L = L === void 0 ? F.SHOW_ALL : +L, B = B === void 0 ? null : B, new m(v, L, B); } }, createNodeIterator: { value: function (v, L, B) { if (!v)
                throw new TypeError("root argument is required"); if (!(v instanceof l))
                throw new TypeError("root not a node"); return L = L === void 0 ? F.SHOW_ALL : +L, B = B === void 0 ? null : B, new A(v, L, B); } }, _attachNodeIterator: { value: function (v) { this._nodeIterators || (this._nodeIterators = []), this._nodeIterators.push(v); } }, _detachNodeIterator: { value: function (v) { var L = this._nodeIterators.indexOf(v); this._nodeIterators.splice(L, 1); } }, _preremoveNodeIterators: { value: function (v) { this._nodeIterators && this._nodeIterators.forEach(function (L) { L._preremove(v); }); } }, _updateDocTypeElement: { value: function () { this.doctype = this.documentElement = null; for (var L = this.firstChild; L !== null; L = L.nextSibling)
                L.nodeType === l.DOCUMENT_TYPE_NODE ? this.doctype = L : L.nodeType === l.ELEMENT_NODE && (this.documentElement = L); } }, insertBefore: { value: function (L, B) { return l.prototype.insertBefore.call(this, L, B), this._updateDocTypeElement(), L; } }, replaceChild: { value: function (L, B) { return l.prototype.replaceChild.call(this, L, B), this._updateDocTypeElement(), B; } }, removeChild: { value: function (L) { return l.prototype.removeChild.call(this, L), this._updateDocTypeElement(), L; } }, getElementById: { value: function (v) { var L = this.byId[v]; return L ? L instanceof re ? L.getFirst() : L : null; } }, _hasMultipleElementsWithId: { value: function (v) { return this.byId[v] instanceof re; } }, getElementsByName: { value: a.prototype.getElementsByName }, getElementsByTagName: { value: a.prototype.getElementsByTagName }, getElementsByTagNameNS: { value: a.prototype.getElementsByTagNameNS }, getElementsByClassName: { value: a.prototype.getElementsByClassName }, adoptNode: { value: function (L) { return L.nodeType === l.DOCUMENT_NODE && _.NotSupportedError(), L.nodeType === l.ATTRIBUTE_NODE || (L.parentNode && L.parentNode.removeChild(L), L.ownerDocument !== this && X(L, this)), L; } }, importNode: { value: function (L, B) { return this.adoptNode(L.cloneNode(B)); }, writable: ve }, origin: { get: function () { return null; } }, characterSet: { get: function () { return "UTF-8"; } }, contentType: { get: function () { return this._contentType; } }, URL: { get: function () { return this._address; } }, domain: { get: _.nyi, set: _.nyi }, referrer: { get: _.nyi }, cookie: { get: _.nyi, set: _.nyi }, lastModified: { get: _.nyi }, location: { get: function () { return this.defaultView ? this.defaultView.location : null; }, set: _.nyi }, _titleElement: { get: function () { return this.getElementsByTagName("title").item(0) || null; } }, title: { get: function () { var v = this._titleElement, L = v ? v.textContent : ""; return L.replace(/[ \t\n\r\f]+/g, " ").replace(/(^ )|( $)/g, ""); }, set: function (v) { var L = this._titleElement, B = this.head; !L && !B || (L || (L = this.createElement("title"), B.appendChild(L)), L.textContent = v); } }, dir: E(function () { var v = this.documentElement; if (v && v.tagName === "HTML")
            return v; }, "dir", ""), fgColor: E(function () { return this.body; }, "text", ""), linkColor: E(function () { return this.body; }, "link", ""), vlinkColor: E(function () { return this.body; }, "vLink", ""), alinkColor: E(function () { return this.body; }, "aLink", ""), bgColor: E(function () { return this.body; }, "bgColor", ""), charset: { get: function () { return this.characterSet; } }, inputEncoding: { get: function () { return this.characterSet; } }, scrollingElement: { get: function () { return this._quirks ? this.body : this.documentElement; } }, body: { get: function () { return n(this.documentElement, "body"); }, set: _.nyi }, head: { get: function () { return n(this.documentElement, "head"); } }, images: { get: _.nyi }, embeds: { get: _.nyi }, plugins: { get: _.nyi }, links: { get: _.nyi }, forms: { get: _.nyi }, scripts: { get: _.nyi }, applets: { get: function () { return []; } }, activeElement: { get: function () { return null; } }, innerHTML: { get: function () { return this.serialize(); }, set: _.nyi }, outerHTML: { get: function () { return this.serialize(); }, set: _.nyi }, write: { value: function (v) { if (this.isHTML || _.InvalidStateError(), !!this._parser) {
                var L = arguments.join("");
                this._parser.parse(L);
            } } }, writeln: { value: function (L) {
                this.write(Array.prototype.join.call(arguments, "") + `
`);
            } }, open: { value: function () { this.documentElement = null; } }, close: { value: function () { this.readyState = "interactive", this._dispatchEvent(new c("readystatechange"), !0), this._dispatchEvent(new c("DOMContentLoaded"), !0), this.readyState = "complete", this._dispatchEvent(new c("readystatechange"), !0), this.defaultView && this.defaultView._dispatchEvent(new c("load"), !0); } }, clone: { value: function () { var L = new U(this.isHTML, this._address); return L._quirks = this._quirks, L._contentType = this._contentType, L; } }, cloneNode: { value: function (L) { var B = l.prototype.cloneNode.call(this, !1); if (L)
                for (var ae = this.firstChild; ae !== null; ae = ae.nextSibling)
                    B._appendChild(B.importNode(ae, !0)); return B._updateDocTypeElement(), B; } }, isEqual: { value: function (L) { return !0; } }, mutateValue: { value: function (v) { this.mutationHandler && this.mutationHandler({ type: y.VALUE, target: v, data: v.data }); } }, mutateAttr: { value: function (v, L) { this.mutationHandler && this.mutationHandler({ type: y.ATTR, target: v.ownerElement, attr: v }); } }, mutateRemoveAttr: { value: function (v) { this.mutationHandler && this.mutationHandler({ type: y.REMOVE_ATTR, target: v.ownerElement, attr: v }); } }, mutateRemove: { value: function (v) { this.mutationHandler && this.mutationHandler({ type: y.REMOVE, target: v.parentNode, node: v }), G(v); } }, mutateInsert: { value: function (v) { q(v), this.mutationHandler && this.mutationHandler({ type: y.INSERT, target: v.parentNode, node: v }); } }, mutateMove: { value: function (v) { this.mutationHandler && this.mutationHandler({ type: y.MOVE, target: v }); } }, addId: { value: function (L, B) { var ae = this.byId[L]; ae ? (ae instanceof re || (ae = new re(ae), this.byId[L] = ae), ae.add(B)) : this.byId[L] = B; } }, delId: { value: function (L, B) { var ae = this.byId[L]; _.assert(ae), ae instanceof re ? (ae.del(B), ae.length === 1 && (this.byId[L] = ae.downgrade())) : this.byId[L] = void 0; } }, _resolve: { value: function (v) { return new W(this._documentBaseURL).resolve(v); } }, _documentBaseURL: { get: function () { var v = this._address; v === "about:blank" && (v = "/"); var L = this.querySelector("base[href]"); return L ? new W(v).resolve(L.getAttribute("href")) : v; } }, _templateDoc: { get: function () { if (!this._templateDocCache) {
                var v = new U(this.isHTML, this._address);
                this._templateDocCache = v._templateDocCache = v;
            } return this._templateDocCache; } }, querySelector: { value: function (v) { return M(v, this)[0]; } }, querySelectorAll: { value: function (v) { var L = M(v, this); return L.item ? L : new f(L); } } });
    var g = ["abort", "canplay", "canplaythrough", "change", "click", "contextmenu", "cuechange", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "ended", "input", "invalid", "keydown", "keypress", "keyup", "loadeddata", "loadedmetadata", "loadstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "pause", "play", "playing", "progress", "ratechange", "readystatechange", "reset", "seeked", "seeking", "select", "show", "stalled", "submit", "suspend", "timeupdate", "volumechange", "waiting", "blur", "error", "focus", "load", "scroll"];
    g.forEach(function (v) { Object.defineProperty(U.prototype, "on" + v, { get: function () { return this._getEventHandler(v); }, set: function (L) { this._setEventHandler(v, L); } }); });
    function n(v, L) { if (v && v.isHTML) {
        for (var B = v.firstChild; B !== null; B = B.nextSibling)
            if (B.nodeType === l.ELEMENT_NODE && B.localName === L && B.namespaceURI === j.HTML)
                return B;
    } return null; }
    function p(v) { if (v._nid = v.ownerDocument._nextnid++, v.ownerDocument._nodes[v._nid] = v, v.nodeType === l.ELEMENT_NODE) {
        var L = v.getAttribute("id");
        L && v.ownerDocument.addId(L, v), v._roothook && v._roothook();
    } }
    function N(v) { if (v.nodeType === l.ELEMENT_NODE) {
        var L = v.getAttribute("id");
        L && v.ownerDocument.delId(L, v);
    } v.ownerDocument._nodes[v._nid] = void 0, v._nid = void 0; }
    function q(v) { if (p(v), v.nodeType === l.ELEMENT_NODE)
        for (var L = v.firstChild; L !== null; L = L.nextSibling)
            q(L); }
    function G(v) { N(v); for (var L = v.firstChild; L !== null; L = L.nextSibling)
        G(L); }
    function X(v, L) { v.ownerDocument = L, v._lastModTime = void 0, Object.prototype.hasOwnProperty.call(v, "_tagName") && (v._tagName = void 0); for (var B = v.firstChild; B !== null; B = B.nextSibling)
        X(B, L); }
    function re(v) { this.nodes = Object.create(null), this.nodes[v._nid] = v, this.length = 1, this.firstNode = void 0; }
    return re.prototype.add = function (v) { this.nodes[v._nid] || (this.nodes[v._nid] = v, this.length++, this.firstNode = void 0); }, re.prototype.del = function (v) { this.nodes[v._nid] && (delete this.nodes[v._nid], this.length--, this.firstNode = void 0); }, re.prototype.getFirst = function () { if (!this.firstNode) {
        var v;
        for (v in this.nodes)
            (this.firstNode === void 0 || this.firstNode.compareDocumentPosition(this.nodes[v]) & l.DOCUMENT_POSITION_PRECEDING) && (this.firstNode = this.nodes[v]);
    } return this.firstNode; }, re.prototype.downgrade = function () { if (this.length === 1) {
        var v;
        for (v in this.nodes)
            return this.nodes[v];
    } return this; }, Aa;
}
var ka, vi;
function Qa() { if (vi)
    return ka; vi = 1, ka = a; var l = De(), f = ji(), t = Ga(); function a(s, i, c, u) { f.call(this), this.nodeType = l.DOCUMENT_TYPE_NODE, this.ownerDocument = s || null, this.name = i, this.publicId = c || "", this.systemId = u || ""; } return a.prototype = Object.create(f.prototype, { nodeName: { get: function () { return this.name; } }, nodeValue: { get: function () { return null; }, set: function () { } }, clone: { value: function () { return new a(this.ownerDocument, this.name, this.publicId, this.systemId); } }, isEqual: { value: function (i) { return this.name === i.name && this.publicId === i.publicId && this.systemId === i.systemId; } } }), Object.defineProperties(a.prototype, t), ka; }
var Ma, Ei;
function Ya() {
    if (Ei)
        return Ma;
    Ei = 1, Ma = ce;
    var l = Xa(), f = Qa(), t = De(), a = we().NAMESPACE, s = Ka(), i = s.elements, c = Function.prototype.apply.bind(Array.prototype.push), u = -1, x = 1, d = 2, m = 3, A = 4, F = 5, W = [], M = /^HTML$|^-\/\/W3O\/\/DTD W3 HTML Strict 3\.0\/\/EN\/\/$|^-\/W3C\/DTD HTML 4\.0 Transitional\/EN$|^\+\/\/Silmaril\/\/dtd html Pro v0r11 19970101\/\/|^-\/\/AdvaSoft Ltd\/\/DTD HTML 3\.0 asWedit \+ extensions\/\/|^-\/\/AS\/\/DTD HTML 3\.0 asWedit \+ extensions\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Level 1\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Level 2\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict Level 1\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict Level 2\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict\/\/|^-\/\/IETF\/\/DTD HTML 2\.0\/\/|^-\/\/IETF\/\/DTD HTML 2\.1E\/\/|^-\/\/IETF\/\/DTD HTML 3\.0\/\/|^-\/\/IETF\/\/DTD HTML 3\.2 Final\/\/|^-\/\/IETF\/\/DTD HTML 3\.2\/\/|^-\/\/IETF\/\/DTD HTML 3\/\/|^-\/\/IETF\/\/DTD HTML Level 0\/\/|^-\/\/IETF\/\/DTD HTML Level 1\/\/|^-\/\/IETF\/\/DTD HTML Level 2\/\/|^-\/\/IETF\/\/DTD HTML Level 3\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 0\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 1\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 2\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 3\/\/|^-\/\/IETF\/\/DTD HTML Strict\/\/|^-\/\/IETF\/\/DTD HTML\/\/|^-\/\/Metrius\/\/DTD Metrius Presentational\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 HTML Strict\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 HTML\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 Tables\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 HTML Strict\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 HTML\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 Tables\/\/|^-\/\/Netscape Comm\. Corp\.\/\/DTD HTML\/\/|^-\/\/Netscape Comm\. Corp\.\/\/DTD Strict HTML\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML 2\.0\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML Extended 1\.0\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML Extended Relaxed 1\.0\/\/|^-\/\/SoftQuad Software\/\/DTD HoTMetaL PRO 6\.0::19990601::extensions to HTML 4\.0\/\/|^-\/\/SoftQuad\/\/DTD HoTMetaL PRO 4\.0::19971010::extensions to HTML 4\.0\/\/|^-\/\/Spyglass\/\/DTD HTML 2\.0 Extended\/\/|^-\/\/SQ\/\/DTD HTML 2\.0 HoTMetaL \+ extensions\/\/|^-\/\/Sun Microsystems Corp\.\/\/DTD HotJava HTML\/\/|^-\/\/Sun Microsystems Corp\.\/\/DTD HotJava Strict HTML\/\/|^-\/\/W3C\/\/DTD HTML 3 1995-03-24\/\/|^-\/\/W3C\/\/DTD HTML 3\.2 Draft\/\/|^-\/\/W3C\/\/DTD HTML 3\.2 Final\/\/|^-\/\/W3C\/\/DTD HTML 3\.2\/\/|^-\/\/W3C\/\/DTD HTML 3\.2S Draft\/\/|^-\/\/W3C\/\/DTD HTML 4\.0 Frameset\/\/|^-\/\/W3C\/\/DTD HTML 4\.0 Transitional\/\/|^-\/\/W3C\/\/DTD HTML Experimental 19960712\/\/|^-\/\/W3C\/\/DTD HTML Experimental 970421\/\/|^-\/\/W3C\/\/DTD W3 HTML\/\/|^-\/\/W3O\/\/DTD W3 HTML 3\.0\/\/|^-\/\/WebTechs\/\/DTD Mozilla HTML 2\.0\/\/|^-\/\/WebTechs\/\/DTD Mozilla HTML\/\//i, P = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", K = /^-\/\/W3C\/\/DTD HTML 4\.01 Frameset\/\/|^-\/\/W3C\/\/DTD HTML 4\.01 Transitional\/\//i, w = /^-\/\/W3C\/\/DTD XHTML 1\.0 Frameset\/\/|^-\/\/W3C\/\/DTD XHTML 1\.0 Transitional\/\//i, b = Object.create(null);
    b[a.HTML] = { __proto__: null, address: !0, applet: !0, area: !0, article: !0, aside: !0, base: !0, basefont: !0, bgsound: !0, blockquote: !0, body: !0, br: !0, button: !0, caption: !0, center: !0, col: !0, colgroup: !0, dd: !0, details: !0, dir: !0, div: !0, dl: !0, dt: !0, embed: !0, fieldset: !0, figcaption: !0, figure: !0, footer: !0, form: !0, frame: !0, frameset: !0, h1: !0, h2: !0, h3: !0, h4: !0, h5: !0, h6: !0, head: !0, header: !0, hgroup: !0, hr: !0, html: !0, iframe: !0, img: !0, input: !0, li: !0, link: !0, listing: !0, main: !0, marquee: !0, menu: !0, meta: !0, nav: !0, noembed: !0, noframes: !0, noscript: !0, object: !0, ol: !0, p: !0, param: !0, plaintext: !0, pre: !0, script: !0, section: !0, select: !0, source: !0, style: !0, summary: !0, table: !0, tbody: !0, td: !0, template: !0, textarea: !0, tfoot: !0, th: !0, thead: !0, title: !0, tr: !0, track: !0, ul: !0, wbr: !0, xmp: !0 }, b[a.SVG] = { __proto__: null, foreignObject: !0, desc: !0, title: !0 }, b[a.MATHML] = { __proto__: null, mi: !0, mo: !0, mn: !0, ms: !0, mtext: !0, "annotation-xml": !0 };
    var _ = Object.create(null);
    _[a.HTML] = { __proto__: null, address: !0, div: !0, p: !0 };
    var y = Object.create(null);
    y[a.HTML] = { __proto__: null, dd: !0, dt: !0 };
    var j = Object.create(null);
    j[a.HTML] = { __proto__: null, table: !0, thead: !0, tbody: !0, tfoot: !0, tr: !0 };
    var ve = Object.create(null);
    ve[a.HTML] = { __proto__: null, dd: !0, dt: !0, li: !0, menuitem: !0, optgroup: !0, option: !0, p: !0, rb: !0, rp: !0, rt: !0, rtc: !0 };
    var U = Object.create(null);
    U[a.HTML] = { __proto__: null, caption: !0, colgroup: !0, dd: !0, dt: !0, li: !0, optgroup: !0, option: !0, p: !0, rb: !0, rp: !0, rt: !0, rtc: !0, tbody: !0, td: !0, tfoot: !0, th: !0, thead: !0, tr: !0 };
    var D = Object.create(null);
    D[a.HTML] = { __proto__: null, table: !0, template: !0, html: !0 };
    var I = Object.create(null);
    I[a.HTML] = { __proto__: null, tbody: !0, tfoot: !0, thead: !0, template: !0, html: !0 };
    var E = Object.create(null);
    E[a.HTML] = { __proto__: null, tr: !0, template: !0, html: !0 };
    var o = Object.create(null);
    o[a.HTML] = { __proto__: null, button: !0, fieldset: !0, input: !0, keygen: !0, object: !0, output: !0, select: !0, textarea: !0, img: !0 };
    var g = Object.create(null);
    g[a.HTML] = { __proto__: null, applet: !0, caption: !0, html: !0, table: !0, td: !0, th: !0, marquee: !0, object: !0, template: !0 }, g[a.MATHML] = { __proto__: null, mi: !0, mo: !0, mn: !0, ms: !0, mtext: !0, "annotation-xml": !0 }, g[a.SVG] = { __proto__: null, foreignObject: !0, desc: !0, title: !0 };
    var n = Object.create(g);
    n[a.HTML] = Object.create(g[a.HTML]), n[a.HTML].ol = !0, n[a.HTML].ul = !0;
    var p = Object.create(g);
    p[a.HTML] = Object.create(g[a.HTML]), p[a.HTML].button = !0;
    var N = Object.create(null);
    N[a.HTML] = { __proto__: null, html: !0, table: !0, template: !0 };
    var q = Object.create(null);
    q[a.HTML] = { __proto__: null, optgroup: !0, option: !0 };
    var G = Object.create(null);
    G[a.MATHML] = { __proto__: null, mi: !0, mo: !0, mn: !0, ms: !0, mtext: !0 };
    var X = Object.create(null);
    X[a.SVG] = { __proto__: null, foreignObject: !0, desc: !0, title: !0 };
    var re = { __proto__: null, "xlink:actuate": a.XLINK, "xlink:arcrole": a.XLINK, "xlink:href": a.XLINK, "xlink:role": a.XLINK, "xlink:show": a.XLINK, "xlink:title": a.XLINK, "xlink:type": a.XLINK, "xml:base": a.XML, "xml:lang": a.XML, "xml:space": a.XML, xmlns: a.XMLNS, "xmlns:xlink": a.XMLNS }, v = { __proto__: null, attributename: "attributeName", attributetype: "attributeType", basefrequency: "baseFrequency", baseprofile: "baseProfile", calcmode: "calcMode", clippathunits: "clipPathUnits", diffuseconstant: "diffuseConstant", edgemode: "edgeMode", filterunits: "filterUnits", glyphref: "glyphRef", gradienttransform: "gradientTransform", gradientunits: "gradientUnits", kernelmatrix: "kernelMatrix", kernelunitlength: "kernelUnitLength", keypoints: "keyPoints", keysplines: "keySplines", keytimes: "keyTimes", lengthadjust: "lengthAdjust", limitingconeangle: "limitingConeAngle", markerheight: "markerHeight", markerunits: "markerUnits", markerwidth: "markerWidth", maskcontentunits: "maskContentUnits", maskunits: "maskUnits", numoctaves: "numOctaves", pathlength: "pathLength", patterncontentunits: "patternContentUnits", patterntransform: "patternTransform", patternunits: "patternUnits", pointsatx: "pointsAtX", pointsaty: "pointsAtY", pointsatz: "pointsAtZ", preservealpha: "preserveAlpha", preserveaspectratio: "preserveAspectRatio", primitiveunits: "primitiveUnits", refx: "refX", refy: "refY", repeatcount: "repeatCount", repeatdur: "repeatDur", requiredextensions: "requiredExtensions", requiredfeatures: "requiredFeatures", specularconstant: "specularConstant", specularexponent: "specularExponent", spreadmethod: "spreadMethod", startoffset: "startOffset", stddeviation: "stdDeviation", stitchtiles: "stitchTiles", surfacescale: "surfaceScale", systemlanguage: "systemLanguage", tablevalues: "tableValues", targetx: "targetX", targety: "targetY", textlength: "textLength", viewbox: "viewBox", viewtarget: "viewTarget", xchannelselector: "xChannelSelector", ychannelselector: "yChannelSelector", zoomandpan: "zoomAndPan" }, L = { __proto__: null, altglyph: "altGlyph", altglyphdef: "altGlyphDef", altglyphitem: "altGlyphItem", animatecolor: "animateColor", animatemotion: "animateMotion", animatetransform: "animateTransform", clippath: "clipPath", feblend: "feBlend", fecolormatrix: "feColorMatrix", fecomponenttransfer: "feComponentTransfer", fecomposite: "feComposite", feconvolvematrix: "feConvolveMatrix", fediffuselighting: "feDiffuseLighting", fedisplacementmap: "feDisplacementMap", fedistantlight: "feDistantLight", feflood: "feFlood", fefunca: "feFuncA", fefuncb: "feFuncB", fefuncg: "feFuncG", fefuncr: "feFuncR", fegaussianblur: "feGaussianBlur", feimage: "feImage", femerge: "feMerge", femergenode: "feMergeNode", femorphology: "feMorphology", feoffset: "feOffset", fepointlight: "fePointLight", fespecularlighting: "feSpecularLighting", fespotlight: "feSpotLight", fetile: "feTile", feturbulence: "feTurbulence", foreignobject: "foreignObject", glyphref: "glyphRef", lineargradient: "linearGradient", radialgradient: "radialGradient", textpath: "textPath" }, B = { __proto__: null, 0: 65533, 128: 8364, 130: 8218, 131: 402, 132: 8222, 133: 8230, 134: 8224, 135: 8225, 136: 710, 137: 8240, 138: 352, 139: 8249, 140: 338, 142: 381, 145: 8216, 146: 8217, 147: 8220, 148: 8221, 149: 8226, 150: 8211, 151: 8212, 152: 732, 153: 8482, 154: 353, 155: 8250, 156: 339, 158: 382, 159: 376 }, ae = { __proto__: null, AElig: 198, "AElig;": 198, AMP: 38, "AMP;": 38, Aacute: 193, "Aacute;": 193, "Abreve;": 258, Acirc: 194, "Acirc;": 194, "Acy;": 1040, "Afr;": [55349, 56580], Agrave: 192, "Agrave;": 192, "Alpha;": 913, "Amacr;": 256, "And;": 10835, "Aogon;": 260, "Aopf;": [55349, 56632], "ApplyFunction;": 8289, Aring: 197, "Aring;": 197, "Ascr;": [55349, 56476], "Assign;": 8788, Atilde: 195, "Atilde;": 195, Auml: 196, "Auml;": 196, "Backslash;": 8726, "Barv;": 10983, "Barwed;": 8966, "Bcy;": 1041, "Because;": 8757, "Bernoullis;": 8492, "Beta;": 914, "Bfr;": [55349, 56581], "Bopf;": [55349, 56633], "Breve;": 728, "Bscr;": 8492, "Bumpeq;": 8782, "CHcy;": 1063, COPY: 169, "COPY;": 169, "Cacute;": 262, "Cap;": 8914, "CapitalDifferentialD;": 8517, "Cayleys;": 8493, "Ccaron;": 268, Ccedil: 199, "Ccedil;": 199, "Ccirc;": 264, "Cconint;": 8752, "Cdot;": 266, "Cedilla;": 184, "CenterDot;": 183, "Cfr;": 8493, "Chi;": 935, "CircleDot;": 8857, "CircleMinus;": 8854, "CirclePlus;": 8853, "CircleTimes;": 8855, "ClockwiseContourIntegral;": 8754, "CloseCurlyDoubleQuote;": 8221, "CloseCurlyQuote;": 8217, "Colon;": 8759, "Colone;": 10868, "Congruent;": 8801, "Conint;": 8751, "ContourIntegral;": 8750, "Copf;": 8450, "Coproduct;": 8720, "CounterClockwiseContourIntegral;": 8755, "Cross;": 10799, "Cscr;": [55349, 56478], "Cup;": 8915, "CupCap;": 8781, "DD;": 8517, "DDotrahd;": 10513, "DJcy;": 1026, "DScy;": 1029, "DZcy;": 1039, "Dagger;": 8225, "Darr;": 8609, "Dashv;": 10980, "Dcaron;": 270, "Dcy;": 1044, "Del;": 8711, "Delta;": 916, "Dfr;": [55349, 56583], "DiacriticalAcute;": 180, "DiacriticalDot;": 729, "DiacriticalDoubleAcute;": 733, "DiacriticalGrave;": 96, "DiacriticalTilde;": 732, "Diamond;": 8900, "DifferentialD;": 8518, "Dopf;": [55349, 56635], "Dot;": 168, "DotDot;": 8412, "DotEqual;": 8784, "DoubleContourIntegral;": 8751, "DoubleDot;": 168, "DoubleDownArrow;": 8659, "DoubleLeftArrow;": 8656, "DoubleLeftRightArrow;": 8660, "DoubleLeftTee;": 10980, "DoubleLongLeftArrow;": 10232, "DoubleLongLeftRightArrow;": 10234, "DoubleLongRightArrow;": 10233, "DoubleRightArrow;": 8658, "DoubleRightTee;": 8872, "DoubleUpArrow;": 8657, "DoubleUpDownArrow;": 8661, "DoubleVerticalBar;": 8741, "DownArrow;": 8595, "DownArrowBar;": 10515, "DownArrowUpArrow;": 8693, "DownBreve;": 785, "DownLeftRightVector;": 10576, "DownLeftTeeVector;": 10590, "DownLeftVector;": 8637, "DownLeftVectorBar;": 10582, "DownRightTeeVector;": 10591, "DownRightVector;": 8641, "DownRightVectorBar;": 10583, "DownTee;": 8868, "DownTeeArrow;": 8615, "Downarrow;": 8659, "Dscr;": [55349, 56479], "Dstrok;": 272, "ENG;": 330, ETH: 208, "ETH;": 208, Eacute: 201, "Eacute;": 201, "Ecaron;": 282, Ecirc: 202, "Ecirc;": 202, "Ecy;": 1069, "Edot;": 278, "Efr;": [55349, 56584], Egrave: 200, "Egrave;": 200, "Element;": 8712, "Emacr;": 274, "EmptySmallSquare;": 9723, "EmptyVerySmallSquare;": 9643, "Eogon;": 280, "Eopf;": [55349, 56636], "Epsilon;": 917, "Equal;": 10869, "EqualTilde;": 8770, "Equilibrium;": 8652, "Escr;": 8496, "Esim;": 10867, "Eta;": 919, Euml: 203, "Euml;": 203, "Exists;": 8707, "ExponentialE;": 8519, "Fcy;": 1060, "Ffr;": [55349, 56585], "FilledSmallSquare;": 9724, "FilledVerySmallSquare;": 9642, "Fopf;": [55349, 56637], "ForAll;": 8704, "Fouriertrf;": 8497, "Fscr;": 8497, "GJcy;": 1027, GT: 62, "GT;": 62, "Gamma;": 915, "Gammad;": 988, "Gbreve;": 286, "Gcedil;": 290, "Gcirc;": 284, "Gcy;": 1043, "Gdot;": 288, "Gfr;": [55349, 56586], "Gg;": 8921, "Gopf;": [55349, 56638], "GreaterEqual;": 8805, "GreaterEqualLess;": 8923, "GreaterFullEqual;": 8807, "GreaterGreater;": 10914, "GreaterLess;": 8823, "GreaterSlantEqual;": 10878, "GreaterTilde;": 8819, "Gscr;": [55349, 56482], "Gt;": 8811, "HARDcy;": 1066, "Hacek;": 711, "Hat;": 94, "Hcirc;": 292, "Hfr;": 8460, "HilbertSpace;": 8459, "Hopf;": 8461, "HorizontalLine;": 9472, "Hscr;": 8459, "Hstrok;": 294, "HumpDownHump;": 8782, "HumpEqual;": 8783, "IEcy;": 1045, "IJlig;": 306, "IOcy;": 1025, Iacute: 205, "Iacute;": 205, Icirc: 206, "Icirc;": 206, "Icy;": 1048, "Idot;": 304, "Ifr;": 8465, Igrave: 204, "Igrave;": 204, "Im;": 8465, "Imacr;": 298, "ImaginaryI;": 8520, "Implies;": 8658, "Int;": 8748, "Integral;": 8747, "Intersection;": 8898, "InvisibleComma;": 8291, "InvisibleTimes;": 8290, "Iogon;": 302, "Iopf;": [55349, 56640], "Iota;": 921, "Iscr;": 8464, "Itilde;": 296, "Iukcy;": 1030, Iuml: 207, "Iuml;": 207, "Jcirc;": 308, "Jcy;": 1049, "Jfr;": [55349, 56589], "Jopf;": [55349, 56641], "Jscr;": [55349, 56485], "Jsercy;": 1032, "Jukcy;": 1028, "KHcy;": 1061, "KJcy;": 1036, "Kappa;": 922, "Kcedil;": 310, "Kcy;": 1050, "Kfr;": [55349, 56590], "Kopf;": [55349, 56642], "Kscr;": [55349, 56486], "LJcy;": 1033, LT: 60, "LT;": 60, "Lacute;": 313, "Lambda;": 923, "Lang;": 10218, "Laplacetrf;": 8466, "Larr;": 8606, "Lcaron;": 317, "Lcedil;": 315, "Lcy;": 1051, "LeftAngleBracket;": 10216, "LeftArrow;": 8592, "LeftArrowBar;": 8676, "LeftArrowRightArrow;": 8646, "LeftCeiling;": 8968, "LeftDoubleBracket;": 10214, "LeftDownTeeVector;": 10593, "LeftDownVector;": 8643, "LeftDownVectorBar;": 10585, "LeftFloor;": 8970, "LeftRightArrow;": 8596, "LeftRightVector;": 10574, "LeftTee;": 8867, "LeftTeeArrow;": 8612, "LeftTeeVector;": 10586, "LeftTriangle;": 8882, "LeftTriangleBar;": 10703, "LeftTriangleEqual;": 8884, "LeftUpDownVector;": 10577, "LeftUpTeeVector;": 10592, "LeftUpVector;": 8639, "LeftUpVectorBar;": 10584, "LeftVector;": 8636, "LeftVectorBar;": 10578, "Leftarrow;": 8656, "Leftrightarrow;": 8660, "LessEqualGreater;": 8922, "LessFullEqual;": 8806, "LessGreater;": 8822, "LessLess;": 10913, "LessSlantEqual;": 10877, "LessTilde;": 8818, "Lfr;": [55349, 56591], "Ll;": 8920, "Lleftarrow;": 8666, "Lmidot;": 319, "LongLeftArrow;": 10229, "LongLeftRightArrow;": 10231, "LongRightArrow;": 10230, "Longleftarrow;": 10232, "Longleftrightarrow;": 10234, "Longrightarrow;": 10233, "Lopf;": [55349, 56643], "LowerLeftArrow;": 8601, "LowerRightArrow;": 8600, "Lscr;": 8466, "Lsh;": 8624, "Lstrok;": 321, "Lt;": 8810, "Map;": 10501, "Mcy;": 1052, "MediumSpace;": 8287, "Mellintrf;": 8499, "Mfr;": [55349, 56592], "MinusPlus;": 8723, "Mopf;": [55349, 56644], "Mscr;": 8499, "Mu;": 924, "NJcy;": 1034, "Nacute;": 323, "Ncaron;": 327, "Ncedil;": 325, "Ncy;": 1053, "NegativeMediumSpace;": 8203, "NegativeThickSpace;": 8203, "NegativeThinSpace;": 8203, "NegativeVeryThinSpace;": 8203, "NestedGreaterGreater;": 8811, "NestedLessLess;": 8810, "NewLine;": 10, "Nfr;": [55349, 56593], "NoBreak;": 8288, "NonBreakingSpace;": 160, "Nopf;": 8469, "Not;": 10988, "NotCongruent;": 8802, "NotCupCap;": 8813, "NotDoubleVerticalBar;": 8742, "NotElement;": 8713, "NotEqual;": 8800, "NotEqualTilde;": [8770, 824], "NotExists;": 8708, "NotGreater;": 8815, "NotGreaterEqual;": 8817, "NotGreaterFullEqual;": [8807, 824], "NotGreaterGreater;": [8811, 824], "NotGreaterLess;": 8825, "NotGreaterSlantEqual;": [10878, 824], "NotGreaterTilde;": 8821, "NotHumpDownHump;": [8782, 824], "NotHumpEqual;": [8783, 824], "NotLeftTriangle;": 8938, "NotLeftTriangleBar;": [10703, 824], "NotLeftTriangleEqual;": 8940, "NotLess;": 8814, "NotLessEqual;": 8816, "NotLessGreater;": 8824, "NotLessLess;": [8810, 824], "NotLessSlantEqual;": [10877, 824], "NotLessTilde;": 8820, "NotNestedGreaterGreater;": [10914, 824], "NotNestedLessLess;": [10913, 824], "NotPrecedes;": 8832, "NotPrecedesEqual;": [10927, 824], "NotPrecedesSlantEqual;": 8928, "NotReverseElement;": 8716, "NotRightTriangle;": 8939, "NotRightTriangleBar;": [10704, 824], "NotRightTriangleEqual;": 8941, "NotSquareSubset;": [8847, 824], "NotSquareSubsetEqual;": 8930, "NotSquareSuperset;": [8848, 824], "NotSquareSupersetEqual;": 8931, "NotSubset;": [8834, 8402], "NotSubsetEqual;": 8840, "NotSucceeds;": 8833, "NotSucceedsEqual;": [10928, 824], "NotSucceedsSlantEqual;": 8929, "NotSucceedsTilde;": [8831, 824], "NotSuperset;": [8835, 8402], "NotSupersetEqual;": 8841, "NotTilde;": 8769, "NotTildeEqual;": 8772, "NotTildeFullEqual;": 8775, "NotTildeTilde;": 8777, "NotVerticalBar;": 8740, "Nscr;": [55349, 56489], Ntilde: 209, "Ntilde;": 209, "Nu;": 925, "OElig;": 338, Oacute: 211, "Oacute;": 211, Ocirc: 212, "Ocirc;": 212, "Ocy;": 1054, "Odblac;": 336, "Ofr;": [55349, 56594], Ograve: 210, "Ograve;": 210, "Omacr;": 332, "Omega;": 937, "Omicron;": 927, "Oopf;": [55349, 56646], "OpenCurlyDoubleQuote;": 8220, "OpenCurlyQuote;": 8216, "Or;": 10836, "Oscr;": [55349, 56490], Oslash: 216, "Oslash;": 216, Otilde: 213, "Otilde;": 213, "Otimes;": 10807, Ouml: 214, "Ouml;": 214, "OverBar;": 8254, "OverBrace;": 9182, "OverBracket;": 9140, "OverParenthesis;": 9180, "PartialD;": 8706, "Pcy;": 1055, "Pfr;": [55349, 56595], "Phi;": 934, "Pi;": 928, "PlusMinus;": 177, "Poincareplane;": 8460, "Popf;": 8473, "Pr;": 10939, "Precedes;": 8826, "PrecedesEqual;": 10927, "PrecedesSlantEqual;": 8828, "PrecedesTilde;": 8830, "Prime;": 8243, "Product;": 8719, "Proportion;": 8759, "Proportional;": 8733, "Pscr;": [55349, 56491], "Psi;": 936, QUOT: 34, "QUOT;": 34, "Qfr;": [55349, 56596], "Qopf;": 8474, "Qscr;": [55349, 56492], "RBarr;": 10512, REG: 174, "REG;": 174, "Racute;": 340, "Rang;": 10219, "Rarr;": 8608, "Rarrtl;": 10518, "Rcaron;": 344, "Rcedil;": 342, "Rcy;": 1056, "Re;": 8476, "ReverseElement;": 8715, "ReverseEquilibrium;": 8651, "ReverseUpEquilibrium;": 10607, "Rfr;": 8476, "Rho;": 929, "RightAngleBracket;": 10217, "RightArrow;": 8594, "RightArrowBar;": 8677, "RightArrowLeftArrow;": 8644, "RightCeiling;": 8969, "RightDoubleBracket;": 10215, "RightDownTeeVector;": 10589, "RightDownVector;": 8642, "RightDownVectorBar;": 10581, "RightFloor;": 8971, "RightTee;": 8866, "RightTeeArrow;": 8614, "RightTeeVector;": 10587, "RightTriangle;": 8883, "RightTriangleBar;": 10704, "RightTriangleEqual;": 8885, "RightUpDownVector;": 10575, "RightUpTeeVector;": 10588, "RightUpVector;": 8638, "RightUpVectorBar;": 10580, "RightVector;": 8640, "RightVectorBar;": 10579, "Rightarrow;": 8658, "Ropf;": 8477, "RoundImplies;": 10608, "Rrightarrow;": 8667, "Rscr;": 8475, "Rsh;": 8625, "RuleDelayed;": 10740, "SHCHcy;": 1065, "SHcy;": 1064, "SOFTcy;": 1068, "Sacute;": 346, "Sc;": 10940, "Scaron;": 352, "Scedil;": 350, "Scirc;": 348, "Scy;": 1057, "Sfr;": [55349, 56598], "ShortDownArrow;": 8595, "ShortLeftArrow;": 8592, "ShortRightArrow;": 8594, "ShortUpArrow;": 8593, "Sigma;": 931, "SmallCircle;": 8728, "Sopf;": [55349, 56650], "Sqrt;": 8730, "Square;": 9633, "SquareIntersection;": 8851, "SquareSubset;": 8847, "SquareSubsetEqual;": 8849, "SquareSuperset;": 8848, "SquareSupersetEqual;": 8850, "SquareUnion;": 8852, "Sscr;": [55349, 56494], "Star;": 8902, "Sub;": 8912, "Subset;": 8912, "SubsetEqual;": 8838, "Succeeds;": 8827, "SucceedsEqual;": 10928, "SucceedsSlantEqual;": 8829, "SucceedsTilde;": 8831, "SuchThat;": 8715, "Sum;": 8721, "Sup;": 8913, "Superset;": 8835, "SupersetEqual;": 8839, "Supset;": 8913, THORN: 222, "THORN;": 222, "TRADE;": 8482, "TSHcy;": 1035, "TScy;": 1062, "Tab;": 9, "Tau;": 932, "Tcaron;": 356, "Tcedil;": 354, "Tcy;": 1058, "Tfr;": [55349, 56599], "Therefore;": 8756, "Theta;": 920, "ThickSpace;": [8287, 8202], "ThinSpace;": 8201, "Tilde;": 8764, "TildeEqual;": 8771, "TildeFullEqual;": 8773, "TildeTilde;": 8776, "Topf;": [55349, 56651], "TripleDot;": 8411, "Tscr;": [55349, 56495], "Tstrok;": 358, Uacute: 218, "Uacute;": 218, "Uarr;": 8607, "Uarrocir;": 10569, "Ubrcy;": 1038, "Ubreve;": 364, Ucirc: 219, "Ucirc;": 219, "Ucy;": 1059, "Udblac;": 368, "Ufr;": [55349, 56600], Ugrave: 217, "Ugrave;": 217, "Umacr;": 362, "UnderBar;": 95, "UnderBrace;": 9183, "UnderBracket;": 9141, "UnderParenthesis;": 9181, "Union;": 8899, "UnionPlus;": 8846, "Uogon;": 370, "Uopf;": [55349, 56652], "UpArrow;": 8593, "UpArrowBar;": 10514, "UpArrowDownArrow;": 8645, "UpDownArrow;": 8597, "UpEquilibrium;": 10606, "UpTee;": 8869, "UpTeeArrow;": 8613, "Uparrow;": 8657, "Updownarrow;": 8661, "UpperLeftArrow;": 8598, "UpperRightArrow;": 8599, "Upsi;": 978, "Upsilon;": 933, "Uring;": 366, "Uscr;": [55349, 56496], "Utilde;": 360, Uuml: 220, "Uuml;": 220, "VDash;": 8875, "Vbar;": 10987, "Vcy;": 1042, "Vdash;": 8873, "Vdashl;": 10982, "Vee;": 8897, "Verbar;": 8214, "Vert;": 8214, "VerticalBar;": 8739, "VerticalLine;": 124, "VerticalSeparator;": 10072, "VerticalTilde;": 8768, "VeryThinSpace;": 8202, "Vfr;": [55349, 56601], "Vopf;": [55349, 56653], "Vscr;": [55349, 56497], "Vvdash;": 8874, "Wcirc;": 372, "Wedge;": 8896, "Wfr;": [55349, 56602], "Wopf;": [55349, 56654], "Wscr;": [55349, 56498], "Xfr;": [55349, 56603], "Xi;": 926, "Xopf;": [55349, 56655], "Xscr;": [55349, 56499], "YAcy;": 1071, "YIcy;": 1031, "YUcy;": 1070, Yacute: 221, "Yacute;": 221, "Ycirc;": 374, "Ycy;": 1067, "Yfr;": [55349, 56604], "Yopf;": [55349, 56656], "Yscr;": [55349, 56500], "Yuml;": 376, "ZHcy;": 1046, "Zacute;": 377, "Zcaron;": 381, "Zcy;": 1047, "Zdot;": 379, "ZeroWidthSpace;": 8203, "Zeta;": 918, "Zfr;": 8488, "Zopf;": 8484, "Zscr;": [55349, 56501], aacute: 225, "aacute;": 225, "abreve;": 259, "ac;": 8766, "acE;": [8766, 819], "acd;": 8767, acirc: 226, "acirc;": 226, acute: 180, "acute;": 180, "acy;": 1072, aelig: 230, "aelig;": 230, "af;": 8289, "afr;": [55349, 56606], agrave: 224, "agrave;": 224, "alefsym;": 8501, "aleph;": 8501, "alpha;": 945, "amacr;": 257, "amalg;": 10815, amp: 38, "amp;": 38, "and;": 8743, "andand;": 10837, "andd;": 10844, "andslope;": 10840, "andv;": 10842, "ang;": 8736, "ange;": 10660, "angle;": 8736, "angmsd;": 8737, "angmsdaa;": 10664, "angmsdab;": 10665, "angmsdac;": 10666, "angmsdad;": 10667, "angmsdae;": 10668, "angmsdaf;": 10669, "angmsdag;": 10670, "angmsdah;": 10671, "angrt;": 8735, "angrtvb;": 8894, "angrtvbd;": 10653, "angsph;": 8738, "angst;": 197, "angzarr;": 9084, "aogon;": 261, "aopf;": [55349, 56658], "ap;": 8776, "apE;": 10864, "apacir;": 10863, "ape;": 8778, "apid;": 8779, "apos;": 39, "approx;": 8776, "approxeq;": 8778, aring: 229, "aring;": 229, "ascr;": [55349, 56502], "ast;": 42, "asymp;": 8776, "asympeq;": 8781, atilde: 227, "atilde;": 227, auml: 228, "auml;": 228, "awconint;": 8755, "awint;": 10769, "bNot;": 10989, "backcong;": 8780, "backepsilon;": 1014, "backprime;": 8245, "backsim;": 8765, "backsimeq;": 8909, "barvee;": 8893, "barwed;": 8965, "barwedge;": 8965, "bbrk;": 9141, "bbrktbrk;": 9142, "bcong;": 8780, "bcy;": 1073, "bdquo;": 8222, "becaus;": 8757, "because;": 8757, "bemptyv;": 10672, "bepsi;": 1014, "bernou;": 8492, "beta;": 946, "beth;": 8502, "between;": 8812, "bfr;": [55349, 56607], "bigcap;": 8898, "bigcirc;": 9711, "bigcup;": 8899, "bigodot;": 10752, "bigoplus;": 10753, "bigotimes;": 10754, "bigsqcup;": 10758, "bigstar;": 9733, "bigtriangledown;": 9661, "bigtriangleup;": 9651, "biguplus;": 10756, "bigvee;": 8897, "bigwedge;": 8896, "bkarow;": 10509, "blacklozenge;": 10731, "blacksquare;": 9642, "blacktriangle;": 9652, "blacktriangledown;": 9662, "blacktriangleleft;": 9666, "blacktriangleright;": 9656, "blank;": 9251, "blk12;": 9618, "blk14;": 9617, "blk34;": 9619, "block;": 9608, "bne;": [61, 8421], "bnequiv;": [8801, 8421], "bnot;": 8976, "bopf;": [55349, 56659], "bot;": 8869, "bottom;": 8869, "bowtie;": 8904, "boxDL;": 9559, "boxDR;": 9556, "boxDl;": 9558, "boxDr;": 9555, "boxH;": 9552, "boxHD;": 9574, "boxHU;": 9577, "boxHd;": 9572, "boxHu;": 9575, "boxUL;": 9565, "boxUR;": 9562, "boxUl;": 9564, "boxUr;": 9561, "boxV;": 9553, "boxVH;": 9580, "boxVL;": 9571, "boxVR;": 9568, "boxVh;": 9579, "boxVl;": 9570, "boxVr;": 9567, "boxbox;": 10697, "boxdL;": 9557, "boxdR;": 9554, "boxdl;": 9488, "boxdr;": 9484, "boxh;": 9472, "boxhD;": 9573, "boxhU;": 9576, "boxhd;": 9516, "boxhu;": 9524, "boxminus;": 8863, "boxplus;": 8862, "boxtimes;": 8864, "boxuL;": 9563, "boxuR;": 9560, "boxul;": 9496, "boxur;": 9492, "boxv;": 9474, "boxvH;": 9578, "boxvL;": 9569, "boxvR;": 9566, "boxvh;": 9532, "boxvl;": 9508, "boxvr;": 9500, "bprime;": 8245, "breve;": 728, brvbar: 166, "brvbar;": 166, "bscr;": [55349, 56503], "bsemi;": 8271, "bsim;": 8765, "bsime;": 8909, "bsol;": 92, "bsolb;": 10693, "bsolhsub;": 10184, "bull;": 8226, "bullet;": 8226, "bump;": 8782, "bumpE;": 10926, "bumpe;": 8783, "bumpeq;": 8783, "cacute;": 263, "cap;": 8745, "capand;": 10820, "capbrcup;": 10825, "capcap;": 10827, "capcup;": 10823, "capdot;": 10816, "caps;": [8745, 65024], "caret;": 8257, "caron;": 711, "ccaps;": 10829, "ccaron;": 269, ccedil: 231, "ccedil;": 231, "ccirc;": 265, "ccups;": 10828, "ccupssm;": 10832, "cdot;": 267, cedil: 184, "cedil;": 184, "cemptyv;": 10674, cent: 162, "cent;": 162, "centerdot;": 183, "cfr;": [55349, 56608], "chcy;": 1095, "check;": 10003, "checkmark;": 10003, "chi;": 967, "cir;": 9675, "cirE;": 10691, "circ;": 710, "circeq;": 8791, "circlearrowleft;": 8634, "circlearrowright;": 8635, "circledR;": 174, "circledS;": 9416, "circledast;": 8859, "circledcirc;": 8858, "circleddash;": 8861, "cire;": 8791, "cirfnint;": 10768, "cirmid;": 10991, "cirscir;": 10690, "clubs;": 9827, "clubsuit;": 9827, "colon;": 58, "colone;": 8788, "coloneq;": 8788, "comma;": 44, "commat;": 64, "comp;": 8705, "compfn;": 8728, "complement;": 8705, "complexes;": 8450, "cong;": 8773, "congdot;": 10861, "conint;": 8750, "copf;": [55349, 56660], "coprod;": 8720, copy: 169, "copy;": 169, "copysr;": 8471, "crarr;": 8629, "cross;": 10007, "cscr;": [55349, 56504], "csub;": 10959, "csube;": 10961, "csup;": 10960, "csupe;": 10962, "ctdot;": 8943, "cudarrl;": 10552, "cudarrr;": 10549, "cuepr;": 8926, "cuesc;": 8927, "cularr;": 8630, "cularrp;": 10557, "cup;": 8746, "cupbrcap;": 10824, "cupcap;": 10822, "cupcup;": 10826, "cupdot;": 8845, "cupor;": 10821, "cups;": [8746, 65024], "curarr;": 8631, "curarrm;": 10556, "curlyeqprec;": 8926, "curlyeqsucc;": 8927, "curlyvee;": 8910, "curlywedge;": 8911, curren: 164, "curren;": 164, "curvearrowleft;": 8630, "curvearrowright;": 8631, "cuvee;": 8910, "cuwed;": 8911, "cwconint;": 8754, "cwint;": 8753, "cylcty;": 9005, "dArr;": 8659, "dHar;": 10597, "dagger;": 8224, "daleth;": 8504, "darr;": 8595, "dash;": 8208, "dashv;": 8867, "dbkarow;": 10511, "dblac;": 733, "dcaron;": 271, "dcy;": 1076, "dd;": 8518, "ddagger;": 8225, "ddarr;": 8650, "ddotseq;": 10871, deg: 176, "deg;": 176, "delta;": 948, "demptyv;": 10673, "dfisht;": 10623, "dfr;": [55349, 56609], "dharl;": 8643, "dharr;": 8642, "diam;": 8900, "diamond;": 8900, "diamondsuit;": 9830, "diams;": 9830, "die;": 168, "digamma;": 989, "disin;": 8946, "div;": 247, divide: 247, "divide;": 247, "divideontimes;": 8903, "divonx;": 8903, "djcy;": 1106, "dlcorn;": 8990, "dlcrop;": 8973, "dollar;": 36, "dopf;": [55349, 56661], "dot;": 729, "doteq;": 8784, "doteqdot;": 8785, "dotminus;": 8760, "dotplus;": 8724, "dotsquare;": 8865, "doublebarwedge;": 8966, "downarrow;": 8595, "downdownarrows;": 8650, "downharpoonleft;": 8643, "downharpoonright;": 8642, "drbkarow;": 10512, "drcorn;": 8991, "drcrop;": 8972, "dscr;": [55349, 56505], "dscy;": 1109, "dsol;": 10742, "dstrok;": 273, "dtdot;": 8945, "dtri;": 9663, "dtrif;": 9662, "duarr;": 8693, "duhar;": 10607, "dwangle;": 10662, "dzcy;": 1119, "dzigrarr;": 10239, "eDDot;": 10871, "eDot;": 8785, eacute: 233, "eacute;": 233, "easter;": 10862, "ecaron;": 283, "ecir;": 8790, ecirc: 234, "ecirc;": 234, "ecolon;": 8789, "ecy;": 1101, "edot;": 279, "ee;": 8519, "efDot;": 8786, "efr;": [55349, 56610], "eg;": 10906, egrave: 232, "egrave;": 232, "egs;": 10902, "egsdot;": 10904, "el;": 10905, "elinters;": 9191, "ell;": 8467, "els;": 10901, "elsdot;": 10903, "emacr;": 275, "empty;": 8709, "emptyset;": 8709, "emptyv;": 8709, "emsp13;": 8196, "emsp14;": 8197, "emsp;": 8195, "eng;": 331, "ensp;": 8194, "eogon;": 281, "eopf;": [55349, 56662], "epar;": 8917, "eparsl;": 10723, "eplus;": 10865, "epsi;": 949, "epsilon;": 949, "epsiv;": 1013, "eqcirc;": 8790, "eqcolon;": 8789, "eqsim;": 8770, "eqslantgtr;": 10902, "eqslantless;": 10901, "equals;": 61, "equest;": 8799, "equiv;": 8801, "equivDD;": 10872, "eqvparsl;": 10725, "erDot;": 8787, "erarr;": 10609, "escr;": 8495, "esdot;": 8784, "esim;": 8770, "eta;": 951, eth: 240, "eth;": 240, euml: 235, "euml;": 235, "euro;": 8364, "excl;": 33, "exist;": 8707, "expectation;": 8496, "exponentiale;": 8519, "fallingdotseq;": 8786, "fcy;": 1092, "female;": 9792, "ffilig;": 64259, "fflig;": 64256, "ffllig;": 64260, "ffr;": [55349, 56611], "filig;": 64257, "fjlig;": [102, 106], "flat;": 9837, "fllig;": 64258, "fltns;": 9649, "fnof;": 402, "fopf;": [55349, 56663], "forall;": 8704, "fork;": 8916, "forkv;": 10969, "fpartint;": 10765, frac12: 189, "frac12;": 189, "frac13;": 8531, frac14: 188, "frac14;": 188, "frac15;": 8533, "frac16;": 8537, "frac18;": 8539, "frac23;": 8532, "frac25;": 8534, frac34: 190, "frac34;": 190, "frac35;": 8535, "frac38;": 8540, "frac45;": 8536, "frac56;": 8538, "frac58;": 8541, "frac78;": 8542, "frasl;": 8260, "frown;": 8994, "fscr;": [55349, 56507], "gE;": 8807, "gEl;": 10892, "gacute;": 501, "gamma;": 947, "gammad;": 989, "gap;": 10886, "gbreve;": 287, "gcirc;": 285, "gcy;": 1075, "gdot;": 289, "ge;": 8805, "gel;": 8923, "geq;": 8805, "geqq;": 8807, "geqslant;": 10878, "ges;": 10878, "gescc;": 10921, "gesdot;": 10880, "gesdoto;": 10882, "gesdotol;": 10884, "gesl;": [8923, 65024], "gesles;": 10900, "gfr;": [55349, 56612], "gg;": 8811, "ggg;": 8921, "gimel;": 8503, "gjcy;": 1107, "gl;": 8823, "glE;": 10898, "gla;": 10917, "glj;": 10916, "gnE;": 8809, "gnap;": 10890, "gnapprox;": 10890, "gne;": 10888, "gneq;": 10888, "gneqq;": 8809, "gnsim;": 8935, "gopf;": [55349, 56664], "grave;": 96, "gscr;": 8458, "gsim;": 8819, "gsime;": 10894, "gsiml;": 10896, gt: 62, "gt;": 62, "gtcc;": 10919, "gtcir;": 10874, "gtdot;": 8919, "gtlPar;": 10645, "gtquest;": 10876, "gtrapprox;": 10886, "gtrarr;": 10616, "gtrdot;": 8919, "gtreqless;": 8923, "gtreqqless;": 10892, "gtrless;": 8823, "gtrsim;": 8819, "gvertneqq;": [8809, 65024], "gvnE;": [8809, 65024], "hArr;": 8660, "hairsp;": 8202, "half;": 189, "hamilt;": 8459, "hardcy;": 1098, "harr;": 8596, "harrcir;": 10568, "harrw;": 8621, "hbar;": 8463, "hcirc;": 293, "hearts;": 9829, "heartsuit;": 9829, "hellip;": 8230, "hercon;": 8889, "hfr;": [55349, 56613], "hksearow;": 10533, "hkswarow;": 10534, "hoarr;": 8703, "homtht;": 8763, "hookleftarrow;": 8617, "hookrightarrow;": 8618, "hopf;": [55349, 56665], "horbar;": 8213, "hscr;": [55349, 56509], "hslash;": 8463, "hstrok;": 295, "hybull;": 8259, "hyphen;": 8208, iacute: 237, "iacute;": 237, "ic;": 8291, icirc: 238, "icirc;": 238, "icy;": 1080, "iecy;": 1077, iexcl: 161, "iexcl;": 161, "iff;": 8660, "ifr;": [55349, 56614], igrave: 236, "igrave;": 236, "ii;": 8520, "iiiint;": 10764, "iiint;": 8749, "iinfin;": 10716, "iiota;": 8489, "ijlig;": 307, "imacr;": 299, "image;": 8465, "imagline;": 8464, "imagpart;": 8465, "imath;": 305, "imof;": 8887, "imped;": 437, "in;": 8712, "incare;": 8453, "infin;": 8734, "infintie;": 10717, "inodot;": 305, "int;": 8747, "intcal;": 8890, "integers;": 8484, "intercal;": 8890, "intlarhk;": 10775, "intprod;": 10812, "iocy;": 1105, "iogon;": 303, "iopf;": [55349, 56666], "iota;": 953, "iprod;": 10812, iquest: 191, "iquest;": 191, "iscr;": [55349, 56510], "isin;": 8712, "isinE;": 8953, "isindot;": 8949, "isins;": 8948, "isinsv;": 8947, "isinv;": 8712, "it;": 8290, "itilde;": 297, "iukcy;": 1110, iuml: 239, "iuml;": 239, "jcirc;": 309, "jcy;": 1081, "jfr;": [55349, 56615], "jmath;": 567, "jopf;": [55349, 56667], "jscr;": [55349, 56511], "jsercy;": 1112, "jukcy;": 1108, "kappa;": 954, "kappav;": 1008, "kcedil;": 311, "kcy;": 1082, "kfr;": [55349, 56616], "kgreen;": 312, "khcy;": 1093, "kjcy;": 1116, "kopf;": [55349, 56668], "kscr;": [55349, 56512], "lAarr;": 8666, "lArr;": 8656, "lAtail;": 10523, "lBarr;": 10510, "lE;": 8806, "lEg;": 10891, "lHar;": 10594, "lacute;": 314, "laemptyv;": 10676, "lagran;": 8466, "lambda;": 955, "lang;": 10216, "langd;": 10641, "langle;": 10216, "lap;": 10885, laquo: 171, "laquo;": 171, "larr;": 8592, "larrb;": 8676, "larrbfs;": 10527, "larrfs;": 10525, "larrhk;": 8617, "larrlp;": 8619, "larrpl;": 10553, "larrsim;": 10611, "larrtl;": 8610, "lat;": 10923, "latail;": 10521, "late;": 10925, "lates;": [10925, 65024], "lbarr;": 10508, "lbbrk;": 10098, "lbrace;": 123, "lbrack;": 91, "lbrke;": 10635, "lbrksld;": 10639, "lbrkslu;": 10637, "lcaron;": 318, "lcedil;": 316, "lceil;": 8968, "lcub;": 123, "lcy;": 1083, "ldca;": 10550, "ldquo;": 8220, "ldquor;": 8222, "ldrdhar;": 10599, "ldrushar;": 10571, "ldsh;": 8626, "le;": 8804, "leftarrow;": 8592, "leftarrowtail;": 8610, "leftharpoondown;": 8637, "leftharpoonup;": 8636, "leftleftarrows;": 8647, "leftrightarrow;": 8596, "leftrightarrows;": 8646, "leftrightharpoons;": 8651, "leftrightsquigarrow;": 8621, "leftthreetimes;": 8907, "leg;": 8922, "leq;": 8804, "leqq;": 8806, "leqslant;": 10877, "les;": 10877, "lescc;": 10920, "lesdot;": 10879, "lesdoto;": 10881, "lesdotor;": 10883, "lesg;": [8922, 65024], "lesges;": 10899, "lessapprox;": 10885, "lessdot;": 8918, "lesseqgtr;": 8922, "lesseqqgtr;": 10891, "lessgtr;": 8822, "lesssim;": 8818, "lfisht;": 10620, "lfloor;": 8970, "lfr;": [55349, 56617], "lg;": 8822, "lgE;": 10897, "lhard;": 8637, "lharu;": 8636, "lharul;": 10602, "lhblk;": 9604, "ljcy;": 1113, "ll;": 8810, "llarr;": 8647, "llcorner;": 8990, "llhard;": 10603, "lltri;": 9722, "lmidot;": 320, "lmoust;": 9136, "lmoustache;": 9136, "lnE;": 8808, "lnap;": 10889, "lnapprox;": 10889, "lne;": 10887, "lneq;": 10887, "lneqq;": 8808, "lnsim;": 8934, "loang;": 10220, "loarr;": 8701, "lobrk;": 10214, "longleftarrow;": 10229, "longleftrightarrow;": 10231, "longmapsto;": 10236, "longrightarrow;": 10230, "looparrowleft;": 8619, "looparrowright;": 8620, "lopar;": 10629, "lopf;": [55349, 56669], "loplus;": 10797, "lotimes;": 10804, "lowast;": 8727, "lowbar;": 95, "loz;": 9674, "lozenge;": 9674, "lozf;": 10731, "lpar;": 40, "lparlt;": 10643, "lrarr;": 8646, "lrcorner;": 8991, "lrhar;": 8651, "lrhard;": 10605, "lrm;": 8206, "lrtri;": 8895, "lsaquo;": 8249, "lscr;": [55349, 56513], "lsh;": 8624, "lsim;": 8818, "lsime;": 10893, "lsimg;": 10895, "lsqb;": 91, "lsquo;": 8216, "lsquor;": 8218, "lstrok;": 322, lt: 60, "lt;": 60, "ltcc;": 10918, "ltcir;": 10873, "ltdot;": 8918, "lthree;": 8907, "ltimes;": 8905, "ltlarr;": 10614, "ltquest;": 10875, "ltrPar;": 10646, "ltri;": 9667, "ltrie;": 8884, "ltrif;": 9666, "lurdshar;": 10570, "luruhar;": 10598, "lvertneqq;": [8808, 65024], "lvnE;": [8808, 65024], "mDDot;": 8762, macr: 175, "macr;": 175, "male;": 9794, "malt;": 10016, "maltese;": 10016, "map;": 8614, "mapsto;": 8614, "mapstodown;": 8615, "mapstoleft;": 8612, "mapstoup;": 8613, "marker;": 9646, "mcomma;": 10793, "mcy;": 1084, "mdash;": 8212, "measuredangle;": 8737, "mfr;": [55349, 56618], "mho;": 8487, micro: 181, "micro;": 181, "mid;": 8739, "midast;": 42, "midcir;": 10992, middot: 183, "middot;": 183, "minus;": 8722, "minusb;": 8863, "minusd;": 8760, "minusdu;": 10794, "mlcp;": 10971, "mldr;": 8230, "mnplus;": 8723, "models;": 8871, "mopf;": [55349, 56670], "mp;": 8723, "mscr;": [55349, 56514], "mstpos;": 8766, "mu;": 956, "multimap;": 8888, "mumap;": 8888, "nGg;": [8921, 824], "nGt;": [8811, 8402], "nGtv;": [8811, 824], "nLeftarrow;": 8653, "nLeftrightarrow;": 8654, "nLl;": [8920, 824], "nLt;": [8810, 8402], "nLtv;": [8810, 824], "nRightarrow;": 8655, "nVDash;": 8879, "nVdash;": 8878, "nabla;": 8711, "nacute;": 324, "nang;": [8736, 8402], "nap;": 8777, "napE;": [10864, 824], "napid;": [8779, 824], "napos;": 329, "napprox;": 8777, "natur;": 9838, "natural;": 9838, "naturals;": 8469, nbsp: 160, "nbsp;": 160, "nbump;": [8782, 824], "nbumpe;": [8783, 824], "ncap;": 10819, "ncaron;": 328, "ncedil;": 326, "ncong;": 8775, "ncongdot;": [10861, 824], "ncup;": 10818, "ncy;": 1085, "ndash;": 8211, "ne;": 8800, "neArr;": 8663, "nearhk;": 10532, "nearr;": 8599, "nearrow;": 8599, "nedot;": [8784, 824], "nequiv;": 8802, "nesear;": 10536, "nesim;": [8770, 824], "nexist;": 8708, "nexists;": 8708, "nfr;": [55349, 56619], "ngE;": [8807, 824], "nge;": 8817, "ngeq;": 8817, "ngeqq;": [8807, 824], "ngeqslant;": [10878, 824], "nges;": [10878, 824], "ngsim;": 8821, "ngt;": 8815, "ngtr;": 8815, "nhArr;": 8654, "nharr;": 8622, "nhpar;": 10994, "ni;": 8715, "nis;": 8956, "nisd;": 8954, "niv;": 8715, "njcy;": 1114, "nlArr;": 8653, "nlE;": [8806, 824], "nlarr;": 8602, "nldr;": 8229, "nle;": 8816, "nleftarrow;": 8602, "nleftrightarrow;": 8622, "nleq;": 8816, "nleqq;": [8806, 824], "nleqslant;": [10877, 824], "nles;": [10877, 824], "nless;": 8814, "nlsim;": 8820, "nlt;": 8814, "nltri;": 8938, "nltrie;": 8940, "nmid;": 8740, "nopf;": [55349, 56671], not: 172, "not;": 172, "notin;": 8713, "notinE;": [8953, 824], "notindot;": [8949, 824], "notinva;": 8713, "notinvb;": 8951, "notinvc;": 8950, "notni;": 8716, "notniva;": 8716, "notnivb;": 8958, "notnivc;": 8957, "npar;": 8742, "nparallel;": 8742, "nparsl;": [11005, 8421], "npart;": [8706, 824], "npolint;": 10772, "npr;": 8832, "nprcue;": 8928, "npre;": [10927, 824], "nprec;": 8832, "npreceq;": [10927, 824], "nrArr;": 8655, "nrarr;": 8603, "nrarrc;": [10547, 824], "nrarrw;": [8605, 824], "nrightarrow;": 8603, "nrtri;": 8939, "nrtrie;": 8941, "nsc;": 8833, "nsccue;": 8929, "nsce;": [10928, 824], "nscr;": [55349, 56515], "nshortmid;": 8740, "nshortparallel;": 8742, "nsim;": 8769, "nsime;": 8772, "nsimeq;": 8772, "nsmid;": 8740, "nspar;": 8742, "nsqsube;": 8930, "nsqsupe;": 8931, "nsub;": 8836, "nsubE;": [10949, 824], "nsube;": 8840, "nsubset;": [8834, 8402], "nsubseteq;": 8840, "nsubseteqq;": [10949, 824], "nsucc;": 8833, "nsucceq;": [10928, 824], "nsup;": 8837, "nsupE;": [10950, 824], "nsupe;": 8841, "nsupset;": [8835, 8402], "nsupseteq;": 8841, "nsupseteqq;": [10950, 824], "ntgl;": 8825, ntilde: 241, "ntilde;": 241, "ntlg;": 8824, "ntriangleleft;": 8938, "ntrianglelefteq;": 8940, "ntriangleright;": 8939, "ntrianglerighteq;": 8941, "nu;": 957, "num;": 35, "numero;": 8470, "numsp;": 8199, "nvDash;": 8877, "nvHarr;": 10500, "nvap;": [8781, 8402], "nvdash;": 8876, "nvge;": [8805, 8402], "nvgt;": [62, 8402], "nvinfin;": 10718, "nvlArr;": 10498, "nvle;": [8804, 8402], "nvlt;": [60, 8402], "nvltrie;": [8884, 8402], "nvrArr;": 10499, "nvrtrie;": [8885, 8402], "nvsim;": [8764, 8402], "nwArr;": 8662, "nwarhk;": 10531, "nwarr;": 8598, "nwarrow;": 8598, "nwnear;": 10535, "oS;": 9416, oacute: 243, "oacute;": 243, "oast;": 8859, "ocir;": 8858, ocirc: 244, "ocirc;": 244, "ocy;": 1086, "odash;": 8861, "odblac;": 337, "odiv;": 10808, "odot;": 8857, "odsold;": 10684, "oelig;": 339, "ofcir;": 10687, "ofr;": [55349, 56620], "ogon;": 731, ograve: 242, "ograve;": 242, "ogt;": 10689, "ohbar;": 10677, "ohm;": 937, "oint;": 8750, "olarr;": 8634, "olcir;": 10686, "olcross;": 10683, "oline;": 8254, "olt;": 10688, "omacr;": 333, "omega;": 969, "omicron;": 959, "omid;": 10678, "ominus;": 8854, "oopf;": [55349, 56672], "opar;": 10679, "operp;": 10681, "oplus;": 8853, "or;": 8744, "orarr;": 8635, "ord;": 10845, "order;": 8500, "orderof;": 8500, ordf: 170, "ordf;": 170, ordm: 186, "ordm;": 186, "origof;": 8886, "oror;": 10838, "orslope;": 10839, "orv;": 10843, "oscr;": 8500, oslash: 248, "oslash;": 248, "osol;": 8856, otilde: 245, "otilde;": 245, "otimes;": 8855, "otimesas;": 10806, ouml: 246, "ouml;": 246, "ovbar;": 9021, "par;": 8741, para: 182, "para;": 182, "parallel;": 8741, "parsim;": 10995, "parsl;": 11005, "part;": 8706, "pcy;": 1087, "percnt;": 37, "period;": 46, "permil;": 8240, "perp;": 8869, "pertenk;": 8241, "pfr;": [55349, 56621], "phi;": 966, "phiv;": 981, "phmmat;": 8499, "phone;": 9742, "pi;": 960, "pitchfork;": 8916, "piv;": 982, "planck;": 8463, "planckh;": 8462, "plankv;": 8463, "plus;": 43, "plusacir;": 10787, "plusb;": 8862, "pluscir;": 10786, "plusdo;": 8724, "plusdu;": 10789, "pluse;": 10866, plusmn: 177, "plusmn;": 177, "plussim;": 10790, "plustwo;": 10791, "pm;": 177, "pointint;": 10773, "popf;": [55349, 56673], pound: 163, "pound;": 163, "pr;": 8826, "prE;": 10931, "prap;": 10935, "prcue;": 8828, "pre;": 10927, "prec;": 8826, "precapprox;": 10935, "preccurlyeq;": 8828, "preceq;": 10927, "precnapprox;": 10937, "precneqq;": 10933, "precnsim;": 8936, "precsim;": 8830, "prime;": 8242, "primes;": 8473, "prnE;": 10933, "prnap;": 10937, "prnsim;": 8936, "prod;": 8719, "profalar;": 9006, "profline;": 8978, "profsurf;": 8979, "prop;": 8733, "propto;": 8733, "prsim;": 8830, "prurel;": 8880, "pscr;": [55349, 56517], "psi;": 968, "puncsp;": 8200, "qfr;": [55349, 56622], "qint;": 10764, "qopf;": [55349, 56674], "qprime;": 8279, "qscr;": [55349, 56518], "quaternions;": 8461, "quatint;": 10774, "quest;": 63, "questeq;": 8799, quot: 34, "quot;": 34, "rAarr;": 8667, "rArr;": 8658, "rAtail;": 10524, "rBarr;": 10511, "rHar;": 10596, "race;": [8765, 817], "racute;": 341, "radic;": 8730, "raemptyv;": 10675, "rang;": 10217, "rangd;": 10642, "range;": 10661, "rangle;": 10217, raquo: 187, "raquo;": 187, "rarr;": 8594, "rarrap;": 10613, "rarrb;": 8677, "rarrbfs;": 10528, "rarrc;": 10547, "rarrfs;": 10526, "rarrhk;": 8618, "rarrlp;": 8620, "rarrpl;": 10565, "rarrsim;": 10612, "rarrtl;": 8611, "rarrw;": 8605, "ratail;": 10522, "ratio;": 8758, "rationals;": 8474, "rbarr;": 10509, "rbbrk;": 10099, "rbrace;": 125, "rbrack;": 93, "rbrke;": 10636, "rbrksld;": 10638, "rbrkslu;": 10640, "rcaron;": 345, "rcedil;": 343, "rceil;": 8969, "rcub;": 125, "rcy;": 1088, "rdca;": 10551, "rdldhar;": 10601, "rdquo;": 8221, "rdquor;": 8221, "rdsh;": 8627, "real;": 8476, "realine;": 8475, "realpart;": 8476, "reals;": 8477, "rect;": 9645, reg: 174, "reg;": 174, "rfisht;": 10621, "rfloor;": 8971, "rfr;": [55349, 56623], "rhard;": 8641, "rharu;": 8640, "rharul;": 10604, "rho;": 961, "rhov;": 1009, "rightarrow;": 8594, "rightarrowtail;": 8611, "rightharpoondown;": 8641, "rightharpoonup;": 8640, "rightleftarrows;": 8644, "rightleftharpoons;": 8652, "rightrightarrows;": 8649, "rightsquigarrow;": 8605, "rightthreetimes;": 8908, "ring;": 730, "risingdotseq;": 8787, "rlarr;": 8644, "rlhar;": 8652, "rlm;": 8207, "rmoust;": 9137, "rmoustache;": 9137, "rnmid;": 10990, "roang;": 10221, "roarr;": 8702, "robrk;": 10215, "ropar;": 10630, "ropf;": [55349, 56675], "roplus;": 10798, "rotimes;": 10805, "rpar;": 41, "rpargt;": 10644, "rppolint;": 10770, "rrarr;": 8649, "rsaquo;": 8250, "rscr;": [55349, 56519], "rsh;": 8625, "rsqb;": 93, "rsquo;": 8217, "rsquor;": 8217, "rthree;": 8908, "rtimes;": 8906, "rtri;": 9657, "rtrie;": 8885, "rtrif;": 9656, "rtriltri;": 10702, "ruluhar;": 10600, "rx;": 8478, "sacute;": 347, "sbquo;": 8218, "sc;": 8827, "scE;": 10932, "scap;": 10936, "scaron;": 353, "sccue;": 8829, "sce;": 10928, "scedil;": 351, "scirc;": 349, "scnE;": 10934, "scnap;": 10938, "scnsim;": 8937, "scpolint;": 10771, "scsim;": 8831, "scy;": 1089, "sdot;": 8901, "sdotb;": 8865, "sdote;": 10854, "seArr;": 8664, "searhk;": 10533, "searr;": 8600, "searrow;": 8600, sect: 167, "sect;": 167, "semi;": 59, "seswar;": 10537, "setminus;": 8726, "setmn;": 8726, "sext;": 10038, "sfr;": [55349, 56624], "sfrown;": 8994, "sharp;": 9839, "shchcy;": 1097, "shcy;": 1096, "shortmid;": 8739, "shortparallel;": 8741, shy: 173, "shy;": 173, "sigma;": 963, "sigmaf;": 962, "sigmav;": 962, "sim;": 8764, "simdot;": 10858, "sime;": 8771, "simeq;": 8771, "simg;": 10910, "simgE;": 10912, "siml;": 10909, "simlE;": 10911, "simne;": 8774, "simplus;": 10788, "simrarr;": 10610, "slarr;": 8592, "smallsetminus;": 8726, "smashp;": 10803, "smeparsl;": 10724, "smid;": 8739, "smile;": 8995, "smt;": 10922, "smte;": 10924, "smtes;": [10924, 65024], "softcy;": 1100, "sol;": 47, "solb;": 10692, "solbar;": 9023, "sopf;": [55349, 56676], "spades;": 9824, "spadesuit;": 9824, "spar;": 8741, "sqcap;": 8851, "sqcaps;": [8851, 65024], "sqcup;": 8852, "sqcups;": [8852, 65024], "sqsub;": 8847, "sqsube;": 8849, "sqsubset;": 8847, "sqsubseteq;": 8849, "sqsup;": 8848, "sqsupe;": 8850, "sqsupset;": 8848, "sqsupseteq;": 8850, "squ;": 9633, "square;": 9633, "squarf;": 9642, "squf;": 9642, "srarr;": 8594, "sscr;": [55349, 56520], "ssetmn;": 8726, "ssmile;": 8995, "sstarf;": 8902, "star;": 9734, "starf;": 9733, "straightepsilon;": 1013, "straightphi;": 981, "strns;": 175, "sub;": 8834, "subE;": 10949, "subdot;": 10941, "sube;": 8838, "subedot;": 10947, "submult;": 10945, "subnE;": 10955, "subne;": 8842, "subplus;": 10943, "subrarr;": 10617, "subset;": 8834, "subseteq;": 8838, "subseteqq;": 10949, "subsetneq;": 8842, "subsetneqq;": 10955, "subsim;": 10951, "subsub;": 10965, "subsup;": 10963, "succ;": 8827, "succapprox;": 10936, "succcurlyeq;": 8829, "succeq;": 10928, "succnapprox;": 10938, "succneqq;": 10934, "succnsim;": 8937, "succsim;": 8831, "sum;": 8721, "sung;": 9834, sup1: 185, "sup1;": 185, sup2: 178, "sup2;": 178, sup3: 179, "sup3;": 179, "sup;": 8835, "supE;": 10950, "supdot;": 10942, "supdsub;": 10968, "supe;": 8839, "supedot;": 10948, "suphsol;": 10185, "suphsub;": 10967, "suplarr;": 10619, "supmult;": 10946, "supnE;": 10956, "supne;": 8843, "supplus;": 10944, "supset;": 8835, "supseteq;": 8839, "supseteqq;": 10950, "supsetneq;": 8843, "supsetneqq;": 10956, "supsim;": 10952, "supsub;": 10964, "supsup;": 10966, "swArr;": 8665, "swarhk;": 10534, "swarr;": 8601, "swarrow;": 8601, "swnwar;": 10538, szlig: 223, "szlig;": 223, "target;": 8982, "tau;": 964, "tbrk;": 9140, "tcaron;": 357, "tcedil;": 355, "tcy;": 1090, "tdot;": 8411, "telrec;": 8981, "tfr;": [55349, 56625], "there4;": 8756, "therefore;": 8756, "theta;": 952, "thetasym;": 977, "thetav;": 977, "thickapprox;": 8776, "thicksim;": 8764, "thinsp;": 8201, "thkap;": 8776, "thksim;": 8764, thorn: 254, "thorn;": 254, "tilde;": 732, times: 215, "times;": 215, "timesb;": 8864, "timesbar;": 10801, "timesd;": 10800, "tint;": 8749, "toea;": 10536, "top;": 8868, "topbot;": 9014, "topcir;": 10993, "topf;": [55349, 56677], "topfork;": 10970, "tosa;": 10537, "tprime;": 8244, "trade;": 8482, "triangle;": 9653, "triangledown;": 9663, "triangleleft;": 9667, "trianglelefteq;": 8884, "triangleq;": 8796, "triangleright;": 9657, "trianglerighteq;": 8885, "tridot;": 9708, "trie;": 8796, "triminus;": 10810, "triplus;": 10809, "trisb;": 10701, "tritime;": 10811, "trpezium;": 9186, "tscr;": [55349, 56521], "tscy;": 1094, "tshcy;": 1115, "tstrok;": 359, "twixt;": 8812, "twoheadleftarrow;": 8606, "twoheadrightarrow;": 8608, "uArr;": 8657, "uHar;": 10595, uacute: 250, "uacute;": 250, "uarr;": 8593, "ubrcy;": 1118, "ubreve;": 365, ucirc: 251, "ucirc;": 251, "ucy;": 1091, "udarr;": 8645, "udblac;": 369, "udhar;": 10606, "ufisht;": 10622, "ufr;": [55349, 56626], ugrave: 249, "ugrave;": 249, "uharl;": 8639, "uharr;": 8638, "uhblk;": 9600, "ulcorn;": 8988, "ulcorner;": 8988, "ulcrop;": 8975, "ultri;": 9720, "umacr;": 363, uml: 168, "uml;": 168, "uogon;": 371, "uopf;": [55349, 56678], "uparrow;": 8593, "updownarrow;": 8597, "upharpoonleft;": 8639, "upharpoonright;": 8638, "uplus;": 8846, "upsi;": 965, "upsih;": 978, "upsilon;": 965, "upuparrows;": 8648, "urcorn;": 8989, "urcorner;": 8989, "urcrop;": 8974, "uring;": 367, "urtri;": 9721, "uscr;": [55349, 56522], "utdot;": 8944, "utilde;": 361, "utri;": 9653, "utrif;": 9652, "uuarr;": 8648, uuml: 252, "uuml;": 252, "uwangle;": 10663, "vArr;": 8661, "vBar;": 10984, "vBarv;": 10985, "vDash;": 8872, "vangrt;": 10652, "varepsilon;": 1013, "varkappa;": 1008, "varnothing;": 8709, "varphi;": 981, "varpi;": 982, "varpropto;": 8733, "varr;": 8597, "varrho;": 1009, "varsigma;": 962, "varsubsetneq;": [8842, 65024], "varsubsetneqq;": [10955, 65024], "varsupsetneq;": [8843, 65024], "varsupsetneqq;": [10956, 65024], "vartheta;": 977, "vartriangleleft;": 8882, "vartriangleright;": 8883, "vcy;": 1074, "vdash;": 8866, "vee;": 8744, "veebar;": 8891, "veeeq;": 8794, "vellip;": 8942, "verbar;": 124, "vert;": 124, "vfr;": [55349, 56627], "vltri;": 8882, "vnsub;": [8834, 8402], "vnsup;": [8835, 8402], "vopf;": [55349, 56679], "vprop;": 8733, "vrtri;": 8883, "vscr;": [55349, 56523], "vsubnE;": [10955, 65024], "vsubne;": [8842, 65024], "vsupnE;": [10956, 65024], "vsupne;": [8843, 65024], "vzigzag;": 10650, "wcirc;": 373, "wedbar;": 10847, "wedge;": 8743, "wedgeq;": 8793, "weierp;": 8472, "wfr;": [55349, 56628], "wopf;": [55349, 56680], "wp;": 8472, "wr;": 8768, "wreath;": 8768, "wscr;": [55349, 56524], "xcap;": 8898, "xcirc;": 9711, "xcup;": 8899, "xdtri;": 9661, "xfr;": [55349, 56629], "xhArr;": 10234, "xharr;": 10231, "xi;": 958, "xlArr;": 10232, "xlarr;": 10229, "xmap;": 10236, "xnis;": 8955, "xodot;": 10752, "xopf;": [55349, 56681], "xoplus;": 10753, "xotime;": 10754, "xrArr;": 10233, "xrarr;": 10230, "xscr;": [55349, 56525], "xsqcup;": 10758, "xuplus;": 10756, "xutri;": 9651, "xvee;": 8897, "xwedge;": 8896, yacute: 253, "yacute;": 253, "yacy;": 1103, "ycirc;": 375, "ycy;": 1099, yen: 165, "yen;": 165, "yfr;": [55349, 56630], "yicy;": 1111, "yopf;": [55349, 56682], "yscr;": [55349, 56526], "yucy;": 1102, yuml: 255, "yuml;": 255, "zacute;": 378, "zcaron;": 382, "zcy;": 1079, "zdot;": 380, "zeetrf;": 8488, "zeta;": 950, "zfr;": [55349, 56631], "zhcy;": 1078, "zigrarr;": 8669, "zopf;": [55349, 56683], "zscr;": [55349, 56527], "zwj;": 8205, "zwnj;": 8204 }, Me = /(A(?:Elig;?|MP;?|acute;?|breve;|c(?:irc;?|y;)|fr;|grave;?|lpha;|macr;|nd;|o(?:gon;|pf;)|pplyFunction;|ring;?|s(?:cr;|sign;)|tilde;?|uml;?)|B(?:a(?:ckslash;|r(?:v;|wed;))|cy;|e(?:cause;|rnoullis;|ta;)|fr;|opf;|reve;|scr;|umpeq;)|C(?:Hcy;|OPY;?|a(?:cute;|p(?:;|italDifferentialD;)|yleys;)|c(?:aron;|edil;?|irc;|onint;)|dot;|e(?:dilla;|nterDot;)|fr;|hi;|ircle(?:Dot;|Minus;|Plus;|Times;)|lo(?:ckwiseContourIntegral;|seCurly(?:DoubleQuote;|Quote;))|o(?:lon(?:;|e;)|n(?:gruent;|int;|tourIntegral;)|p(?:f;|roduct;)|unterClockwiseContourIntegral;)|ross;|scr;|up(?:;|Cap;))|D(?:D(?:;|otrahd;)|Jcy;|Scy;|Zcy;|a(?:gger;|rr;|shv;)|c(?:aron;|y;)|el(?:;|ta;)|fr;|i(?:a(?:critical(?:Acute;|Do(?:t;|ubleAcute;)|Grave;|Tilde;)|mond;)|fferentialD;)|o(?:pf;|t(?:;|Dot;|Equal;)|uble(?:ContourIntegral;|Do(?:t;|wnArrow;)|L(?:eft(?:Arrow;|RightArrow;|Tee;)|ong(?:Left(?:Arrow;|RightArrow;)|RightArrow;))|Right(?:Arrow;|Tee;)|Up(?:Arrow;|DownArrow;)|VerticalBar;)|wn(?:Arrow(?:;|Bar;|UpArrow;)|Breve;|Left(?:RightVector;|TeeVector;|Vector(?:;|Bar;))|Right(?:TeeVector;|Vector(?:;|Bar;))|Tee(?:;|Arrow;)|arrow;))|s(?:cr;|trok;))|E(?:NG;|TH;?|acute;?|c(?:aron;|irc;?|y;)|dot;|fr;|grave;?|lement;|m(?:acr;|pty(?:SmallSquare;|VerySmallSquare;))|o(?:gon;|pf;)|psilon;|qu(?:al(?:;|Tilde;)|ilibrium;)|s(?:cr;|im;)|ta;|uml;?|x(?:ists;|ponentialE;))|F(?:cy;|fr;|illed(?:SmallSquare;|VerySmallSquare;)|o(?:pf;|rAll;|uriertrf;)|scr;)|G(?:Jcy;|T;?|amma(?:;|d;)|breve;|c(?:edil;|irc;|y;)|dot;|fr;|g;|opf;|reater(?:Equal(?:;|Less;)|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;)|scr;|t;)|H(?:ARDcy;|a(?:cek;|t;)|circ;|fr;|ilbertSpace;|o(?:pf;|rizontalLine;)|s(?:cr;|trok;)|ump(?:DownHump;|Equal;))|I(?:Ecy;|Jlig;|Ocy;|acute;?|c(?:irc;?|y;)|dot;|fr;|grave;?|m(?:;|a(?:cr;|ginaryI;)|plies;)|n(?:t(?:;|e(?:gral;|rsection;))|visible(?:Comma;|Times;))|o(?:gon;|pf;|ta;)|scr;|tilde;|u(?:kcy;|ml;?))|J(?:c(?:irc;|y;)|fr;|opf;|s(?:cr;|ercy;)|ukcy;)|K(?:Hcy;|Jcy;|appa;|c(?:edil;|y;)|fr;|opf;|scr;)|L(?:Jcy;|T;?|a(?:cute;|mbda;|ng;|placetrf;|rr;)|c(?:aron;|edil;|y;)|e(?:ft(?:A(?:ngleBracket;|rrow(?:;|Bar;|RightArrow;))|Ceiling;|Do(?:ubleBracket;|wn(?:TeeVector;|Vector(?:;|Bar;)))|Floor;|Right(?:Arrow;|Vector;)|T(?:ee(?:;|Arrow;|Vector;)|riangle(?:;|Bar;|Equal;))|Up(?:DownVector;|TeeVector;|Vector(?:;|Bar;))|Vector(?:;|Bar;)|arrow;|rightarrow;)|ss(?:EqualGreater;|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;))|fr;|l(?:;|eftarrow;)|midot;|o(?:ng(?:Left(?:Arrow;|RightArrow;)|RightArrow;|left(?:arrow;|rightarrow;)|rightarrow;)|pf;|wer(?:LeftArrow;|RightArrow;))|s(?:cr;|h;|trok;)|t;)|M(?:ap;|cy;|e(?:diumSpace;|llintrf;)|fr;|inusPlus;|opf;|scr;|u;)|N(?:Jcy;|acute;|c(?:aron;|edil;|y;)|e(?:gative(?:MediumSpace;|Thi(?:ckSpace;|nSpace;)|VeryThinSpace;)|sted(?:GreaterGreater;|LessLess;)|wLine;)|fr;|o(?:Break;|nBreakingSpace;|pf;|t(?:;|C(?:ongruent;|upCap;)|DoubleVerticalBar;|E(?:lement;|qual(?:;|Tilde;)|xists;)|Greater(?:;|Equal;|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;)|Hump(?:DownHump;|Equal;)|Le(?:ftTriangle(?:;|Bar;|Equal;)|ss(?:;|Equal;|Greater;|Less;|SlantEqual;|Tilde;))|Nested(?:GreaterGreater;|LessLess;)|Precedes(?:;|Equal;|SlantEqual;)|R(?:everseElement;|ightTriangle(?:;|Bar;|Equal;))|S(?:quareSu(?:bset(?:;|Equal;)|perset(?:;|Equal;))|u(?:bset(?:;|Equal;)|cceeds(?:;|Equal;|SlantEqual;|Tilde;)|perset(?:;|Equal;)))|Tilde(?:;|Equal;|FullEqual;|Tilde;)|VerticalBar;))|scr;|tilde;?|u;)|O(?:Elig;|acute;?|c(?:irc;?|y;)|dblac;|fr;|grave;?|m(?:acr;|ega;|icron;)|opf;|penCurly(?:DoubleQuote;|Quote;)|r;|s(?:cr;|lash;?)|ti(?:lde;?|mes;)|uml;?|ver(?:B(?:ar;|rac(?:e;|ket;))|Parenthesis;))|P(?:artialD;|cy;|fr;|hi;|i;|lusMinus;|o(?:incareplane;|pf;)|r(?:;|ecedes(?:;|Equal;|SlantEqual;|Tilde;)|ime;|o(?:duct;|portion(?:;|al;)))|s(?:cr;|i;))|Q(?:UOT;?|fr;|opf;|scr;)|R(?:Barr;|EG;?|a(?:cute;|ng;|rr(?:;|tl;))|c(?:aron;|edil;|y;)|e(?:;|verse(?:E(?:lement;|quilibrium;)|UpEquilibrium;))|fr;|ho;|ight(?:A(?:ngleBracket;|rrow(?:;|Bar;|LeftArrow;))|Ceiling;|Do(?:ubleBracket;|wn(?:TeeVector;|Vector(?:;|Bar;)))|Floor;|T(?:ee(?:;|Arrow;|Vector;)|riangle(?:;|Bar;|Equal;))|Up(?:DownVector;|TeeVector;|Vector(?:;|Bar;))|Vector(?:;|Bar;)|arrow;)|o(?:pf;|undImplies;)|rightarrow;|s(?:cr;|h;)|uleDelayed;)|S(?:H(?:CHcy;|cy;)|OFTcy;|acute;|c(?:;|aron;|edil;|irc;|y;)|fr;|hort(?:DownArrow;|LeftArrow;|RightArrow;|UpArrow;)|igma;|mallCircle;|opf;|q(?:rt;|uare(?:;|Intersection;|Su(?:bset(?:;|Equal;)|perset(?:;|Equal;))|Union;))|scr;|tar;|u(?:b(?:;|set(?:;|Equal;))|c(?:ceeds(?:;|Equal;|SlantEqual;|Tilde;)|hThat;)|m;|p(?:;|erset(?:;|Equal;)|set;)))|T(?:HORN;?|RADE;|S(?:Hcy;|cy;)|a(?:b;|u;)|c(?:aron;|edil;|y;)|fr;|h(?:e(?:refore;|ta;)|i(?:ckSpace;|nSpace;))|ilde(?:;|Equal;|FullEqual;|Tilde;)|opf;|ripleDot;|s(?:cr;|trok;))|U(?:a(?:cute;?|rr(?:;|ocir;))|br(?:cy;|eve;)|c(?:irc;?|y;)|dblac;|fr;|grave;?|macr;|n(?:der(?:B(?:ar;|rac(?:e;|ket;))|Parenthesis;)|ion(?:;|Plus;))|o(?:gon;|pf;)|p(?:Arrow(?:;|Bar;|DownArrow;)|DownArrow;|Equilibrium;|Tee(?:;|Arrow;)|arrow;|downarrow;|per(?:LeftArrow;|RightArrow;)|si(?:;|lon;))|ring;|scr;|tilde;|uml;?)|V(?:Dash;|bar;|cy;|dash(?:;|l;)|e(?:e;|r(?:bar;|t(?:;|ical(?:Bar;|Line;|Separator;|Tilde;))|yThinSpace;))|fr;|opf;|scr;|vdash;)|W(?:circ;|edge;|fr;|opf;|scr;)|X(?:fr;|i;|opf;|scr;)|Y(?:Acy;|Icy;|Ucy;|acute;?|c(?:irc;|y;)|fr;|opf;|scr;|uml;)|Z(?:Hcy;|acute;|c(?:aron;|y;)|dot;|e(?:roWidthSpace;|ta;)|fr;|opf;|scr;)|a(?:acute;?|breve;|c(?:;|E;|d;|irc;?|ute;?|y;)|elig;?|f(?:;|r;)|grave;?|l(?:e(?:fsym;|ph;)|pha;)|m(?:a(?:cr;|lg;)|p;?)|n(?:d(?:;|and;|d;|slope;|v;)|g(?:;|e;|le;|msd(?:;|a(?:a;|b;|c;|d;|e;|f;|g;|h;))|rt(?:;|vb(?:;|d;))|s(?:ph;|t;)|zarr;))|o(?:gon;|pf;)|p(?:;|E;|acir;|e;|id;|os;|prox(?:;|eq;))|ring;?|s(?:cr;|t;|ymp(?:;|eq;))|tilde;?|uml;?|w(?:conint;|int;))|b(?:Not;|a(?:ck(?:cong;|epsilon;|prime;|sim(?:;|eq;))|r(?:vee;|wed(?:;|ge;)))|brk(?:;|tbrk;)|c(?:ong;|y;)|dquo;|e(?:caus(?:;|e;)|mptyv;|psi;|rnou;|t(?:a;|h;|ween;))|fr;|ig(?:c(?:ap;|irc;|up;)|o(?:dot;|plus;|times;)|s(?:qcup;|tar;)|triangle(?:down;|up;)|uplus;|vee;|wedge;)|karow;|l(?:a(?:ck(?:lozenge;|square;|triangle(?:;|down;|left;|right;))|nk;)|k(?:1(?:2;|4;)|34;)|ock;)|n(?:e(?:;|quiv;)|ot;)|o(?:pf;|t(?:;|tom;)|wtie;|x(?:D(?:L;|R;|l;|r;)|H(?:;|D;|U;|d;|u;)|U(?:L;|R;|l;|r;)|V(?:;|H;|L;|R;|h;|l;|r;)|box;|d(?:L;|R;|l;|r;)|h(?:;|D;|U;|d;|u;)|minus;|plus;|times;|u(?:L;|R;|l;|r;)|v(?:;|H;|L;|R;|h;|l;|r;)))|prime;|r(?:eve;|vbar;?)|s(?:cr;|emi;|im(?:;|e;)|ol(?:;|b;|hsub;))|u(?:ll(?:;|et;)|mp(?:;|E;|e(?:;|q;))))|c(?:a(?:cute;|p(?:;|and;|brcup;|c(?:ap;|up;)|dot;|s;)|r(?:et;|on;))|c(?:a(?:ps;|ron;)|edil;?|irc;|ups(?:;|sm;))|dot;|e(?:dil;?|mptyv;|nt(?:;|erdot;|))|fr;|h(?:cy;|eck(?:;|mark;)|i;)|ir(?:;|E;|c(?:;|eq;|le(?:arrow(?:left;|right;)|d(?:R;|S;|ast;|circ;|dash;)))|e;|fnint;|mid;|scir;)|lubs(?:;|uit;)|o(?:lon(?:;|e(?:;|q;))|m(?:ma(?:;|t;)|p(?:;|fn;|le(?:ment;|xes;)))|n(?:g(?:;|dot;)|int;)|p(?:f;|rod;|y(?:;|sr;|)))|r(?:arr;|oss;)|s(?:cr;|u(?:b(?:;|e;)|p(?:;|e;)))|tdot;|u(?:darr(?:l;|r;)|e(?:pr;|sc;)|larr(?:;|p;)|p(?:;|brcap;|c(?:ap;|up;)|dot;|or;|s;)|r(?:arr(?:;|m;)|ly(?:eq(?:prec;|succ;)|vee;|wedge;)|ren;?|vearrow(?:left;|right;))|vee;|wed;)|w(?:conint;|int;)|ylcty;)|d(?:Arr;|Har;|a(?:gger;|leth;|rr;|sh(?:;|v;))|b(?:karow;|lac;)|c(?:aron;|y;)|d(?:;|a(?:gger;|rr;)|otseq;)|e(?:g;?|lta;|mptyv;)|f(?:isht;|r;)|har(?:l;|r;)|i(?:am(?:;|ond(?:;|suit;)|s;)|e;|gamma;|sin;|v(?:;|ide(?:;|ontimes;|)|onx;))|jcy;|lc(?:orn;|rop;)|o(?:llar;|pf;|t(?:;|eq(?:;|dot;)|minus;|plus;|square;)|ublebarwedge;|wn(?:arrow;|downarrows;|harpoon(?:left;|right;)))|r(?:bkarow;|c(?:orn;|rop;))|s(?:c(?:r;|y;)|ol;|trok;)|t(?:dot;|ri(?:;|f;))|u(?:arr;|har;)|wangle;|z(?:cy;|igrarr;))|e(?:D(?:Dot;|ot;)|a(?:cute;?|ster;)|c(?:aron;|ir(?:;|c;?)|olon;|y;)|dot;|e;|f(?:Dot;|r;)|g(?:;|rave;?|s(?:;|dot;))|l(?:;|inters;|l;|s(?:;|dot;))|m(?:acr;|pty(?:;|set;|v;)|sp(?:1(?:3;|4;)|;))|n(?:g;|sp;)|o(?:gon;|pf;)|p(?:ar(?:;|sl;)|lus;|si(?:;|lon;|v;))|q(?:c(?:irc;|olon;)|s(?:im;|lant(?:gtr;|less;))|u(?:als;|est;|iv(?:;|DD;))|vparsl;)|r(?:Dot;|arr;)|s(?:cr;|dot;|im;)|t(?:a;|h;?)|u(?:ml;?|ro;)|x(?:cl;|ist;|p(?:ectation;|onentiale;)))|f(?:allingdotseq;|cy;|emale;|f(?:ilig;|l(?:ig;|lig;)|r;)|ilig;|jlig;|l(?:at;|lig;|tns;)|nof;|o(?:pf;|r(?:all;|k(?:;|v;)))|partint;|r(?:a(?:c(?:1(?:2;?|3;|4;?|5;|6;|8;)|2(?:3;|5;)|3(?:4;?|5;|8;)|45;|5(?:6;|8;)|78;)|sl;)|own;)|scr;)|g(?:E(?:;|l;)|a(?:cute;|mma(?:;|d;)|p;)|breve;|c(?:irc;|y;)|dot;|e(?:;|l;|q(?:;|q;|slant;)|s(?:;|cc;|dot(?:;|o(?:;|l;))|l(?:;|es;)))|fr;|g(?:;|g;)|imel;|jcy;|l(?:;|E;|a;|j;)|n(?:E;|ap(?:;|prox;)|e(?:;|q(?:;|q;))|sim;)|opf;|rave;|s(?:cr;|im(?:;|e;|l;))|t(?:;|c(?:c;|ir;)|dot;|lPar;|quest;|r(?:a(?:pprox;|rr;)|dot;|eq(?:less;|qless;)|less;|sim;)|)|v(?:ertneqq;|nE;))|h(?:Arr;|a(?:irsp;|lf;|milt;|r(?:dcy;|r(?:;|cir;|w;)))|bar;|circ;|e(?:arts(?:;|uit;)|llip;|rcon;)|fr;|ks(?:earow;|warow;)|o(?:arr;|mtht;|ok(?:leftarrow;|rightarrow;)|pf;|rbar;)|s(?:cr;|lash;|trok;)|y(?:bull;|phen;))|i(?:acute;?|c(?:;|irc;?|y;)|e(?:cy;|xcl;?)|f(?:f;|r;)|grave;?|i(?:;|i(?:int;|nt;)|nfin;|ota;)|jlig;|m(?:a(?:cr;|g(?:e;|line;|part;)|th;)|of;|ped;)|n(?:;|care;|fin(?:;|tie;)|odot;|t(?:;|cal;|e(?:gers;|rcal;)|larhk;|prod;))|o(?:cy;|gon;|pf;|ta;)|prod;|quest;?|s(?:cr;|in(?:;|E;|dot;|s(?:;|v;)|v;))|t(?:;|ilde;)|u(?:kcy;|ml;?))|j(?:c(?:irc;|y;)|fr;|math;|opf;|s(?:cr;|ercy;)|ukcy;)|k(?:appa(?:;|v;)|c(?:edil;|y;)|fr;|green;|hcy;|jcy;|opf;|scr;)|l(?:A(?:arr;|rr;|tail;)|Barr;|E(?:;|g;)|Har;|a(?:cute;|emptyv;|gran;|mbda;|ng(?:;|d;|le;)|p;|quo;?|rr(?:;|b(?:;|fs;)|fs;|hk;|lp;|pl;|sim;|tl;)|t(?:;|ail;|e(?:;|s;)))|b(?:arr;|brk;|r(?:ac(?:e;|k;)|k(?:e;|sl(?:d;|u;))))|c(?:aron;|e(?:dil;|il;)|ub;|y;)|d(?:ca;|quo(?:;|r;)|r(?:dhar;|ushar;)|sh;)|e(?:;|ft(?:arrow(?:;|tail;)|harpoon(?:down;|up;)|leftarrows;|right(?:arrow(?:;|s;)|harpoons;|squigarrow;)|threetimes;)|g;|q(?:;|q;|slant;)|s(?:;|cc;|dot(?:;|o(?:;|r;))|g(?:;|es;)|s(?:approx;|dot;|eq(?:gtr;|qgtr;)|gtr;|sim;)))|f(?:isht;|loor;|r;)|g(?:;|E;)|h(?:ar(?:d;|u(?:;|l;))|blk;)|jcy;|l(?:;|arr;|corner;|hard;|tri;)|m(?:idot;|oust(?:;|ache;))|n(?:E;|ap(?:;|prox;)|e(?:;|q(?:;|q;))|sim;)|o(?:a(?:ng;|rr;)|brk;|ng(?:left(?:arrow;|rightarrow;)|mapsto;|rightarrow;)|oparrow(?:left;|right;)|p(?:ar;|f;|lus;)|times;|w(?:ast;|bar;)|z(?:;|enge;|f;))|par(?:;|lt;)|r(?:arr;|corner;|har(?:;|d;)|m;|tri;)|s(?:aquo;|cr;|h;|im(?:;|e;|g;)|q(?:b;|uo(?:;|r;))|trok;)|t(?:;|c(?:c;|ir;)|dot;|hree;|imes;|larr;|quest;|r(?:Par;|i(?:;|e;|f;))|)|ur(?:dshar;|uhar;)|v(?:ertneqq;|nE;))|m(?:DDot;|a(?:cr;?|l(?:e;|t(?:;|ese;))|p(?:;|sto(?:;|down;|left;|up;))|rker;)|c(?:omma;|y;)|dash;|easuredangle;|fr;|ho;|i(?:cro;?|d(?:;|ast;|cir;|dot;?)|nus(?:;|b;|d(?:;|u;)))|l(?:cp;|dr;)|nplus;|o(?:dels;|pf;)|p;|s(?:cr;|tpos;)|u(?:;|ltimap;|map;))|n(?:G(?:g;|t(?:;|v;))|L(?:eft(?:arrow;|rightarrow;)|l;|t(?:;|v;))|Rightarrow;|V(?:Dash;|dash;)|a(?:bla;|cute;|ng;|p(?:;|E;|id;|os;|prox;)|tur(?:;|al(?:;|s;)))|b(?:sp;?|ump(?:;|e;))|c(?:a(?:p;|ron;)|edil;|ong(?:;|dot;)|up;|y;)|dash;|e(?:;|Arr;|ar(?:hk;|r(?:;|ow;))|dot;|quiv;|s(?:ear;|im;)|xist(?:;|s;))|fr;|g(?:E;|e(?:;|q(?:;|q;|slant;)|s;)|sim;|t(?:;|r;))|h(?:Arr;|arr;|par;)|i(?:;|s(?:;|d;)|v;)|jcy;|l(?:Arr;|E;|arr;|dr;|e(?:;|ft(?:arrow;|rightarrow;)|q(?:;|q;|slant;)|s(?:;|s;))|sim;|t(?:;|ri(?:;|e;)))|mid;|o(?:pf;|t(?:;|in(?:;|E;|dot;|v(?:a;|b;|c;))|ni(?:;|v(?:a;|b;|c;))|))|p(?:ar(?:;|allel;|sl;|t;)|olint;|r(?:;|cue;|e(?:;|c(?:;|eq;))))|r(?:Arr;|arr(?:;|c;|w;)|ightarrow;|tri(?:;|e;))|s(?:c(?:;|cue;|e;|r;)|hort(?:mid;|parallel;)|im(?:;|e(?:;|q;))|mid;|par;|qsu(?:be;|pe;)|u(?:b(?:;|E;|e;|set(?:;|eq(?:;|q;)))|cc(?:;|eq;)|p(?:;|E;|e;|set(?:;|eq(?:;|q;)))))|t(?:gl;|ilde;?|lg;|riangle(?:left(?:;|eq;)|right(?:;|eq;)))|u(?:;|m(?:;|ero;|sp;))|v(?:Dash;|Harr;|ap;|dash;|g(?:e;|t;)|infin;|l(?:Arr;|e;|t(?:;|rie;))|r(?:Arr;|trie;)|sim;)|w(?:Arr;|ar(?:hk;|r(?:;|ow;))|near;))|o(?:S;|a(?:cute;?|st;)|c(?:ir(?:;|c;?)|y;)|d(?:ash;|blac;|iv;|ot;|sold;)|elig;|f(?:cir;|r;)|g(?:on;|rave;?|t;)|h(?:bar;|m;)|int;|l(?:arr;|c(?:ir;|ross;)|ine;|t;)|m(?:acr;|ega;|i(?:cron;|d;|nus;))|opf;|p(?:ar;|erp;|lus;)|r(?:;|arr;|d(?:;|er(?:;|of;)|f;?|m;?)|igof;|or;|slope;|v;)|s(?:cr;|lash;?|ol;)|ti(?:lde;?|mes(?:;|as;))|uml;?|vbar;)|p(?:ar(?:;|a(?:;|llel;|)|s(?:im;|l;)|t;)|cy;|er(?:cnt;|iod;|mil;|p;|tenk;)|fr;|h(?:i(?:;|v;)|mmat;|one;)|i(?:;|tchfork;|v;)|l(?:an(?:ck(?:;|h;)|kv;)|us(?:;|acir;|b;|cir;|d(?:o;|u;)|e;|mn;?|sim;|two;))|m;|o(?:intint;|pf;|und;?)|r(?:;|E;|ap;|cue;|e(?:;|c(?:;|approx;|curlyeq;|eq;|n(?:approx;|eqq;|sim;)|sim;))|ime(?:;|s;)|n(?:E;|ap;|sim;)|o(?:d;|f(?:alar;|line;|surf;)|p(?:;|to;))|sim;|urel;)|s(?:cr;|i;)|uncsp;)|q(?:fr;|int;|opf;|prime;|scr;|u(?:at(?:ernions;|int;)|est(?:;|eq;)|ot;?))|r(?:A(?:arr;|rr;|tail;)|Barr;|Har;|a(?:c(?:e;|ute;)|dic;|emptyv;|ng(?:;|d;|e;|le;)|quo;?|rr(?:;|ap;|b(?:;|fs;)|c;|fs;|hk;|lp;|pl;|sim;|tl;|w;)|t(?:ail;|io(?:;|nals;)))|b(?:arr;|brk;|r(?:ac(?:e;|k;)|k(?:e;|sl(?:d;|u;))))|c(?:aron;|e(?:dil;|il;)|ub;|y;)|d(?:ca;|ldhar;|quo(?:;|r;)|sh;)|e(?:al(?:;|ine;|part;|s;)|ct;|g;?)|f(?:isht;|loor;|r;)|h(?:ar(?:d;|u(?:;|l;))|o(?:;|v;))|i(?:ght(?:arrow(?:;|tail;)|harpoon(?:down;|up;)|left(?:arrows;|harpoons;)|rightarrows;|squigarrow;|threetimes;)|ng;|singdotseq;)|l(?:arr;|har;|m;)|moust(?:;|ache;)|nmid;|o(?:a(?:ng;|rr;)|brk;|p(?:ar;|f;|lus;)|times;)|p(?:ar(?:;|gt;)|polint;)|rarr;|s(?:aquo;|cr;|h;|q(?:b;|uo(?:;|r;)))|t(?:hree;|imes;|ri(?:;|e;|f;|ltri;))|uluhar;|x;)|s(?:acute;|bquo;|c(?:;|E;|a(?:p;|ron;)|cue;|e(?:;|dil;)|irc;|n(?:E;|ap;|sim;)|polint;|sim;|y;)|dot(?:;|b;|e;)|e(?:Arr;|ar(?:hk;|r(?:;|ow;))|ct;?|mi;|swar;|tm(?:inus;|n;)|xt;)|fr(?:;|own;)|h(?:arp;|c(?:hcy;|y;)|ort(?:mid;|parallel;)|y;?)|i(?:gma(?:;|f;|v;)|m(?:;|dot;|e(?:;|q;)|g(?:;|E;)|l(?:;|E;)|ne;|plus;|rarr;))|larr;|m(?:a(?:llsetminus;|shp;)|eparsl;|i(?:d;|le;)|t(?:;|e(?:;|s;)))|o(?:ftcy;|l(?:;|b(?:;|ar;))|pf;)|pa(?:des(?:;|uit;)|r;)|q(?:c(?:ap(?:;|s;)|up(?:;|s;))|su(?:b(?:;|e;|set(?:;|eq;))|p(?:;|e;|set(?:;|eq;)))|u(?:;|ar(?:e;|f;)|f;))|rarr;|s(?:cr;|etmn;|mile;|tarf;)|t(?:ar(?:;|f;)|r(?:aight(?:epsilon;|phi;)|ns;))|u(?:b(?:;|E;|dot;|e(?:;|dot;)|mult;|n(?:E;|e;)|plus;|rarr;|s(?:et(?:;|eq(?:;|q;)|neq(?:;|q;))|im;|u(?:b;|p;)))|cc(?:;|approx;|curlyeq;|eq;|n(?:approx;|eqq;|sim;)|sim;)|m;|ng;|p(?:1;?|2;?|3;?|;|E;|d(?:ot;|sub;)|e(?:;|dot;)|hs(?:ol;|ub;)|larr;|mult;|n(?:E;|e;)|plus;|s(?:et(?:;|eq(?:;|q;)|neq(?:;|q;))|im;|u(?:b;|p;))))|w(?:Arr;|ar(?:hk;|r(?:;|ow;))|nwar;)|zlig;?)|t(?:a(?:rget;|u;)|brk;|c(?:aron;|edil;|y;)|dot;|elrec;|fr;|h(?:e(?:re(?:4;|fore;)|ta(?:;|sym;|v;))|i(?:ck(?:approx;|sim;)|nsp;)|k(?:ap;|sim;)|orn;?)|i(?:lde;|mes(?:;|b(?:;|ar;)|d;|)|nt;)|o(?:ea;|p(?:;|bot;|cir;|f(?:;|ork;))|sa;)|prime;|r(?:ade;|i(?:angle(?:;|down;|left(?:;|eq;)|q;|right(?:;|eq;))|dot;|e;|minus;|plus;|sb;|time;)|pezium;)|s(?:c(?:r;|y;)|hcy;|trok;)|w(?:ixt;|ohead(?:leftarrow;|rightarrow;)))|u(?:Arr;|Har;|a(?:cute;?|rr;)|br(?:cy;|eve;)|c(?:irc;?|y;)|d(?:arr;|blac;|har;)|f(?:isht;|r;)|grave;?|h(?:ar(?:l;|r;)|blk;)|l(?:c(?:orn(?:;|er;)|rop;)|tri;)|m(?:acr;|l;?)|o(?:gon;|pf;)|p(?:arrow;|downarrow;|harpoon(?:left;|right;)|lus;|si(?:;|h;|lon;)|uparrows;)|r(?:c(?:orn(?:;|er;)|rop;)|ing;|tri;)|scr;|t(?:dot;|ilde;|ri(?:;|f;))|u(?:arr;|ml;?)|wangle;)|v(?:Arr;|Bar(?:;|v;)|Dash;|a(?:ngrt;|r(?:epsilon;|kappa;|nothing;|p(?:hi;|i;|ropto;)|r(?:;|ho;)|s(?:igma;|u(?:bsetneq(?:;|q;)|psetneq(?:;|q;)))|t(?:heta;|riangle(?:left;|right;))))|cy;|dash;|e(?:e(?:;|bar;|eq;)|llip;|r(?:bar;|t;))|fr;|ltri;|nsu(?:b;|p;)|opf;|prop;|rtri;|s(?:cr;|u(?:bn(?:E;|e;)|pn(?:E;|e;)))|zigzag;)|w(?:circ;|e(?:d(?:bar;|ge(?:;|q;))|ierp;)|fr;|opf;|p;|r(?:;|eath;)|scr;)|x(?:c(?:ap;|irc;|up;)|dtri;|fr;|h(?:Arr;|arr;)|i;|l(?:Arr;|arr;)|map;|nis;|o(?:dot;|p(?:f;|lus;)|time;)|r(?:Arr;|arr;)|s(?:cr;|qcup;)|u(?:plus;|tri;)|vee;|wedge;)|y(?:ac(?:ute;?|y;)|c(?:irc;|y;)|en;?|fr;|icy;|opf;|scr;|u(?:cy;|ml;?))|z(?:acute;|c(?:aron;|y;)|dot;|e(?:etrf;|ta;)|fr;|hcy;|igrarr;|opf;|scr;|w(?:j;|nj;)))|[\s\S]/g, ds = /[^\r"&\u0000]+/g, hs = /[^\r'&\u0000]+/g, ps = /[^\r\t\n\f &>\u0000]+/g, ms = /[^\r\t\n\f \/>A-Z\u0000]+/g, gs = /[^\r\t\n\f \/=>A-Z\u0000]+/g, bs = /[^\]\r\u0000\uffff]*/g, vs = /[^&<\r\u0000\uffff]*/g, rn = /[^<\r\u0000\uffff]*/g, Es = /[^\r\u0000\uffff]*/g, an = /(?:(\/)?([a-z]+)>)|[\s\S]/g, nn = /(?:([-a-z]+)[ \t\n\f]*=[ \t\n\f]*('[^'&\r\u0000]*'|"[^"&\r\u0000]*"|[^\t\n\r\f "&'\u0000>][^&> \t\n\r\f\u0000]*[ \t\n\f]))|[\s\S]/g, Wt = /[^\x09\x0A\x0C\x0D\x20]/, Dr = /[^\x09\x0A\x0C\x0D\x20]/g, _s = /[^\x00\x09\x0A\x0C\x0D\x20]/, dt = /^[\x09\x0A\x0C\x0D\x20]+/, Kt = /\x00/g;
    function Ne(O) { var H = 16384; if (O.length < H)
        return String.fromCharCode.apply(String, O); for (var $ = "", Q = 0; Q < O.length; Q += H)
        $ += String.fromCharCode.apply(String, O.slice(Q, Q + H)); return $; }
    function Ts(O) { for (var H = [], $ = 0; $ < O.length; $++)
        H[$] = O.charCodeAt($); return H; }
    function de(O, H) { if (typeof H == "string")
        return O.namespaceURI === a.HTML && O.localName === H; var $ = H[O.namespaceURI]; return $ && $[O.localName]; }
    function sn(O) { return de(O, G); }
    function on(O) { if (de(O, X))
        return !0; if (O.namespaceURI === a.MATHML && O.localName === "annotation-xml") {
        var H = O.getAttribute("encoding");
        if (H && (H = H.toLowerCase()), H === "text/html" || H === "application/xhtml+xml")
            return !0;
    } return !1; }
    function ys(O) { return O in L ? L[O] : O; }
    function cn(O) { for (var H = 0, $ = O.length; H < $; H++)
        O[H][0] in v && (O[H][0] = v[O[H][0]]); }
    function un(O) { for (var H = 0, $ = O.length; H < $; H++)
        if (O[H][0] === "definitionurl") {
            O[H][0] = "definitionURL";
            break;
        } }
    function Cr(O) { for (var H = 0, $ = O.length; H < $; H++)
        O[H][0] in re && O[H].push(re[O[H][0]]); }
    function ln(O, H) { for (var $ = 0, Q = O.length; $ < Q; $++) {
        var ge = O[$][0], Y = O[$][1];
        H.hasAttribute(ge) || H._setAttribute(ge, Y);
    } }
    ce.ElementStack = function () { this.elements = [], this.top = null; }, ce.ElementStack.prototype.push = function (O) { this.elements.push(O), this.top = O; }, ce.ElementStack.prototype.pop = function (O) { this.elements.pop(), this.top = this.elements[this.elements.length - 1]; }, ce.ElementStack.prototype.popTag = function (O) { for (var H = this.elements.length - 1; H > 0; H--) {
        var $ = this.elements[H];
        if (de($, O))
            break;
    } this.elements.length = H, this.top = this.elements[H - 1]; }, ce.ElementStack.prototype.popElementType = function (O) { for (var H = this.elements.length - 1; H > 0 && !(this.elements[H] instanceof O); H--)
        ; this.elements.length = H, this.top = this.elements[H - 1]; }, ce.ElementStack.prototype.popElement = function (O) { for (var H = this.elements.length - 1; H > 0 && this.elements[H] !== O; H--)
        ; this.elements.length = H, this.top = this.elements[H - 1]; }, ce.ElementStack.prototype.removeElement = function (O) { if (this.top === O)
        this.pop();
    else {
        var H = this.elements.lastIndexOf(O);
        H !== -1 && this.elements.splice(H, 1);
    } }, ce.ElementStack.prototype.clearToContext = function (O) { for (var H = this.elements.length - 1; H > 0 && !de(this.elements[H], O); H--)
        ; this.elements.length = H + 1, this.top = this.elements[H]; }, ce.ElementStack.prototype.contains = function (O) { return this.inSpecificScope(O, Object.create(null)); }, ce.ElementStack.prototype.inSpecificScope = function (O, H) { for (var $ = this.elements.length - 1; $ >= 0; $--) {
        var Q = this.elements[$];
        if (de(Q, O))
            return !0;
        if (de(Q, H))
            return !1;
    } return !1; }, ce.ElementStack.prototype.elementInSpecificScope = function (O, H) { for (var $ = this.elements.length - 1; $ >= 0; $--) {
        var Q = this.elements[$];
        if (Q === O)
            return !0;
        if (de(Q, H))
            return !1;
    } return !1; }, ce.ElementStack.prototype.elementTypeInSpecificScope = function (O, H) { for (var $ = this.elements.length - 1; $ >= 0; $--) {
        var Q = this.elements[$];
        if (Q instanceof O)
            return !0;
        if (de(Q, H))
            return !1;
    } return !1; }, ce.ElementStack.prototype.inScope = function (O) { return this.inSpecificScope(O, g); }, ce.ElementStack.prototype.elementInScope = function (O) { return this.elementInSpecificScope(O, g); }, ce.ElementStack.prototype.elementTypeInScope = function (O) { return this.elementTypeInSpecificScope(O, g); }, ce.ElementStack.prototype.inButtonScope = function (O) { return this.inSpecificScope(O, p); }, ce.ElementStack.prototype.inListItemScope = function (O) { return this.inSpecificScope(O, n); }, ce.ElementStack.prototype.inTableScope = function (O) { return this.inSpecificScope(O, N); }, ce.ElementStack.prototype.inSelectScope = function (O) { for (var H = this.elements.length - 1; H >= 0; H--) {
        var $ = this.elements[H];
        if ($.namespaceURI !== a.HTML)
            return !1;
        var Q = $.localName;
        if (Q === O)
            return !0;
        if (Q !== "optgroup" && Q !== "option")
            return !1;
    } return !1; }, ce.ElementStack.prototype.generateImpliedEndTags = function (O, H) { for (var $ = H ? U : ve, Q = this.elements.length - 1; Q >= 0; Q--) {
        var ge = this.elements[Q];
        if (O && de(ge, O) || !de(this.elements[Q], $))
            break;
    } this.elements.length = Q + 1, this.top = this.elements[Q]; }, ce.ActiveFormattingElements = function () { this.list = [], this.attrs = []; }, ce.ActiveFormattingElements.prototype.MARKER = { localName: "|" }, ce.ActiveFormattingElements.prototype.insertMarker = function () { this.list.push(this.MARKER), this.attrs.push(this.MARKER); }, ce.ActiveFormattingElements.prototype.push = function (O, H) { for (var $ = 0, Q = this.list.length - 1; Q >= 0 && this.list[Q] !== this.MARKER; Q--)
        if (ht(O, this.list[Q], this.attrs[Q]) && ($++, $ === 3)) {
            this.list.splice(Q, 1), this.attrs.splice(Q, 1);
            break;
        } this.list.push(O); for (var ge = [], Y = 0; Y < H.length; Y++)
        ge[Y] = H[Y]; this.attrs.push(ge); function ht(Ye, pt, je) { if (Ye.localName !== pt.localName || Ye._numattrs !== je.length)
        return !1; for (var Le = 0, Xt = je.length; Le < Xt; Le++) {
        var mt = je[Le][0], S = je[Le][1];
        if (!Ye.hasAttribute(mt) || Ye.getAttribute(mt) !== S)
            return !1;
    } return !0; } }, ce.ActiveFormattingElements.prototype.clearToMarker = function () { for (var O = this.list.length - 1; O >= 0 && this.list[O] !== this.MARKER; O--)
        ; O < 0 && (O = 0), this.list.length = O, this.attrs.length = O; }, ce.ActiveFormattingElements.prototype.findElementByTag = function (O) { for (var H = this.list.length - 1; H >= 0; H--) {
        var $ = this.list[H];
        if ($ === this.MARKER)
            break;
        if ($.localName === O)
            return $;
    } return null; }, ce.ActiveFormattingElements.prototype.indexOf = function (O) { return this.list.lastIndexOf(O); }, ce.ActiveFormattingElements.prototype.remove = function (O) { var H = this.list.lastIndexOf(O); H !== -1 && (this.list.splice(H, 1), this.attrs.splice(H, 1)); }, ce.ActiveFormattingElements.prototype.replace = function (O, H, $) { var Q = this.list.lastIndexOf(O); Q !== -1 && (this.list[Q] = H, this.attrs[Q] = $); }, ce.ActiveFormattingElements.prototype.insertAfter = function (O, H) { var $ = this.list.lastIndexOf(O); $ !== -1 && (this.list.splice($, 0, H), this.attrs.splice($, 0, H)); };
    function ce(O, H, $) {
        var Q = null, ge = 0, Y = 0, ht = !1, Ye = !1, pt = 0, je = [], Le = "", Xt = !0, mt = 0, S = se, Ze, Ee, he = "", Qt = "", pe = [], Ie = "", Ae = "", me = [], $e = [], Je = [], et = [], qe = [], Yt = !1, R = _o, Ge = null, ze = [], T = new ce.ElementStack, ie = new ce.ActiveFormattingElements, gt = H !== void 0, Zt = null, We = null, $t = !0;
        H && ($t = H.ownerDocument._scripting_enabled), $ && $.scripting_enabled === !1 && ($t = !1);
        var _e = !0, Lr = !1, Jt, Ar, V = [], tt = !1, bt = !1, er = { document: function () { return le; }, _asDocumentFragment: function () { for (var e = le.createDocumentFragment(), r = le.firstChild; r.hasChildNodes();)
                e.appendChild(r.firstChild); return e; }, pause: function () { mt++; }, resume: function () { mt--, this.parse(""); }, parse: function (e, r, h) { var C; return mt > 0 ? (Le += e, !0) : (pt === 0 ? (Le && (e = Le + e, Le = ""), r && (e += "\uFFFF", ht = !0), Q = e, ge = e.length, Y = 0, Xt && (Xt = !1, Q.charCodeAt(0) === 65279 && (Y = 1)), pt++, C = xn(h), Le = Q.substring(Y, ge), pt--) : (pt++, je.push(Q, ge, Y), Q = e, ge = e.length, Y = 0, xn(), C = !1, Le = Q.substring(Y, ge), Y = je.pop(), ge = je.pop(), Q = je.pop(), Le && (Q = Le + Q.substring(Y), ge = Q.length, Y = 0, Le = ""), pt--), C); } }, le = new l(!0, O);
        if (le._parser = er, le._scripting_enabled = $t, H) {
            if (H.ownerDocument._quirks && (le._quirks = !0), H.ownerDocument._limitedQuirks && (le._limitedQuirks = !0), H.namespaceURI === a.HTML)
                switch (H.localName) {
                    case "title":
                    case "textarea":
                        S = it;
                        break;
                    case "style":
                    case "xmp":
                    case "iframe":
                    case "noembed":
                    case "noframes":
                    case "script":
                    case "plaintext":
                        S = Rr;
                        break;
                }
            var fn = le.createElement("html");
            le._appendChild(fn), T.push(fn), H instanceof i.HTMLTemplateElement && ze.push(zr), qt();
            for (var Mt = H; Mt !== null; Mt = Mt.parentElement)
                if (Mt instanceof i.HTMLFormElement) {
                    We = Mt;
                    break;
                }
        }
        function xn(e) { for (var r, h, C, k; Y < ge;) {
            if (mt > 0 || e && e())
                return !0;
            switch (typeof S.lookahead) {
                case "undefined":
                    if (r = Q.charCodeAt(Y++), Ye && (Ye = !1, r === 10)) {
                        Y++;
                        continue;
                    }
                    switch (r) {
                        case 13:
                            Y < ge ? Q.charCodeAt(Y) === 10 && Y++ : Ye = !0, S(10);
                            break;
                        case 65535: if (ht && Y === ge) {
                            S(u);
                            break;
                        }
                        default:
                            S(r);
                            break;
                    }
                    break;
                case "number":
                    r = Q.charCodeAt(Y);
                    var z = S.lookahead, ee = !0;
                    if (z < 0 && (ee = !1, z = -z), z < ge - Y)
                        h = ee ? Q.substring(Y, Y + z) : null, k = !1;
                    else if (ht)
                        h = ee ? Q.substring(Y, ge) : null, k = !0, r === 65535 && Y === ge - 1 && (r = u);
                    else
                        return !0;
                    S(r, h, k);
                    break;
                case "string":
                    r = Q.charCodeAt(Y), C = S.lookahead;
                    var oe = Q.indexOf(C, Y);
                    if (oe !== -1)
                        h = Q.substring(Y, oe + C.length), k = !1;
                    else {
                        if (!ht)
                            return !0;
                        h = Q.substring(Y, ge), r === 65535 && Y === ge - 1 && (r = u), k = !0;
                    }
                    S(r, h, k);
                    break;
            }
        } return !1; }
        function rt(e, r) { for (var h = 0; h < qe.length; h++)
            if (qe[h][0] === e)
                return; r !== void 0 ? qe.push([e, r]) : qe.push([e]); }
        function ws() { nn.lastIndex = Y - 1; var e = nn.exec(Q); if (!e)
            throw new Error("should never happen"); var r = e[1]; if (!r)
            return !1; var h = e[2], C = h.length; switch (h[0]) {
            case '"':
            case "'":
                h = h.substring(1, C - 1), Y += e[0].length - 1, S = Br;
                break;
            default:
                S = Ve, Y += e[0].length - 1, h = h.substring(0, C - 1);
                break;
        } for (var k = 0; k < qe.length; k++)
            if (qe[k][0] === r)
                return !0; return qe.push([r, h]), !0; }
        function Ss() { Yt = !1, he = "", qe.length = 0; }
        function It() { Yt = !0, he = "", qe.length = 0; }
        function Ke() { pe.length = 0; }
        function kr() { Ie = ""; }
        function Mr() { Ae = ""; }
        function dn() { me.length = 0; }
        function Nt() { $e.length = 0, Je = null, et = null; }
        function tr() { Je = []; }
        function at() { et = []; }
        function fe() { Lr = !0; }
        function Ns() { return T.top && T.top.namespaceURI !== "http://www.w3.org/1999/xhtml"; }
        function Oe(e) { return Qt === e; }
        function Dt() {
            if (V.length > 0) {
                var e = Ne(V);
                if (V.length = 0, bt && (bt = !1, e[0] === `
` && (e = e.substring(1)), e.length === 0))
                    return;
                ye(x, e), tt = !1;
            }
            bt = !1;
        }
        function Ot(e) { e.lastIndex = Y - 1; var r = e.exec(Q); if (r && r.index === Y - 1)
            return r = r[0], Y += r.length - 1, ht && Y === ge && (r = r.slice(0, -1), Y--), r; throw new Error("should never happen"); }
        function Rt(e) { e.lastIndex = Y - 1; var r = e.exec(Q)[0]; return r ? (Ds(r), Y += r.length - 1, !0) : !1; }
        function Ds(e) {
            V.length > 0 && Dt(), !(bt && (bt = !1, e[0] === `
` && (e = e.substring(1)), e.length === 0)) && ye(x, e);
        }
        function Xe() { if (Yt)
            ye(m, he);
        else {
            var e = he;
            he = "", Qt = e, ye(d, e, qe);
        } }
        function Cs() { if (Y === ge)
            return !1; an.lastIndex = Y; var e = an.exec(Q); if (!e)
            throw new Error("should never happen"); var r = e[2]; if (!r)
            return !1; var h = e[1]; return h ? (Y += r.length + 2, ye(m, r)) : (Y += r.length + 1, Qt = r, ye(d, r, W)), !0; }
        function Ls() { Yt ? ye(m, he, null, !0) : ye(d, he, qe, !0); }
        function xe() { ye(F, Ne($e), Je ? Ne(Je) : void 0, et ? Ne(et) : void 0); }
        function ne() { Dt(), R(u), le.modclock = 1; }
        var ye = er.insertToken = function (r, h, C, k) { Dt(); var z = T.top; !z || z.namespaceURI === a.HTML ? R(r, h, C, k) : r !== d && r !== x ? Ln(r, h, C, k) : sn(z) && (r === x || r === d && h !== "mglyph" && h !== "malignmark") || r === d && h === "svg" && z.namespaceURI === a.MATHML && z.localName === "annotation-xml" || on(z) ? (Ar = !0, R(r, h, C, k), Ar = !1) : Ln(r, h, C, k); };
        function Be(e) { var r = T.top; nt && de(r, j) ? ar(function (h) { return h.createComment(e); }) : (r instanceof i.HTMLTemplateElement && (r = r.content), r._appendChild(r.ownerDocument.createComment(e))); }
        function Pe(e) { var r = T.top; if (nt && de(r, j))
            ar(function (C) { return C.createTextNode(e); });
        else {
            r instanceof i.HTMLTemplateElement && (r = r.content);
            var h = r.lastChild;
            h && h.nodeType === t.TEXT_NODE ? h.appendData(e) : r._appendChild(r.ownerDocument.createTextNode(e));
        } }
        function Ht(e, r, h) { var C = s.createElement(e, r, null); if (h)
            for (var k = 0, z = h.length; k < z; k++)
                C._setAttribute(h[k][0], h[k][1]); return C; }
        var nt = !1;
        function te(e, r) { var h = rr(function (C) { return Ht(C, e, r); }); return de(h, o) && (h._form = We), h; }
        function rr(e) { var r; return nt && de(T.top, j) ? r = ar(e) : T.top instanceof i.HTMLTemplateElement ? (r = e(T.top.content.ownerDocument), T.top.content._appendChild(r)) : (r = e(T.top.ownerDocument), T.top._appendChild(r)), T.push(r), r; }
        function Ir(e, r, h) { return rr(function (C) { var k = C._createElementNS(e, h, null); if (r)
            for (var z = 0, ee = r.length; z < ee; z++) {
                var oe = r[z];
                oe.length === 2 ? k._setAttribute(oe[0], oe[1]) : k._setAttributeNS(oe[2], oe[0], oe[1]);
            } return k; }); }
        function hn(e) { for (var r = T.elements.length - 1; r >= 0; r--)
            if (T.elements[r] instanceof e)
                return r; return -1; }
        function ar(e) { var r, h, C = -1, k = -1, z; if (C = hn(i.HTMLTableElement), k = hn(i.HTMLTemplateElement), k >= 0 && (C < 0 || k > C) ? r = T.elements[k] : C >= 0 && (r = T.elements[C].parentNode, r ? h = T.elements[C] : r = T.elements[C - 1]), r || (r = T.elements[0]), r instanceof i.HTMLTemplateElement && (r = r.content), z = e(r.ownerDocument), z.nodeType === t.TEXT_NODE) {
            var ee;
            if (h ? ee = h.previousSibling : ee = r.lastChild, ee && ee.nodeType === t.TEXT_NODE)
                return ee.appendData(z.data), z;
        } return h ? r.insertBefore(z, h) : r._appendChild(z), z; }
        function qt() { for (var e = !1, r = T.elements.length - 1; r >= 0; r--) {
            var h = T.elements[r];
            if (r === 0 && (e = !0, gt && (h = H)), h.namespaceURI === a.HTML) {
                var C = h.localName;
                switch (C) {
                    case "select":
                        for (var k = r; k > 0;) {
                            var z = T.elements[--k];
                            if (z instanceof i.HTMLTemplateElement)
                                break;
                            if (z instanceof i.HTMLTableElement) {
                                R = gr;
                                return;
                            }
                        }
                        R = Qe;
                        return;
                    case "tr":
                        R = Pt;
                        return;
                    case "tbody":
                    case "tfoot":
                    case "thead":
                        R = Tt;
                        return;
                    case "caption":
                        R = Gr;
                        return;
                    case "colgroup":
                        R = mr;
                        return;
                    case "table":
                        R = Re;
                        return;
                    case "template":
                        R = ze[ze.length - 1];
                        return;
                    case "body":
                        R = J;
                        return;
                    case "frameset":
                        R = Wr;
                        return;
                    case "html":
                        Zt === null ? R = hr : R = jr;
                        return;
                    default: if (!e) {
                        if (C === "head") {
                            R = Te;
                            return;
                        }
                        if (C === "td" || C === "th") {
                            R = Ct;
                            return;
                        }
                    }
                }
            }
            if (e) {
                R = J;
                return;
            }
        } }
        function nr(e, r) { te(e, r), S = Ft, Ge = R, R = pr; }
        function As(e, r) { te(e, r), S = it, Ge = R, R = pr; }
        function Or(e, r) { return { elt: Ht(e, ie.list[r].localName, ie.attrs[r]), attrs: ie.attrs[r] }; }
        function Ce() { if (ie.list.length !== 0) {
            var e = ie.list[ie.list.length - 1];
            if (e !== ie.MARKER && T.elements.lastIndexOf(e) === -1) {
                for (var r = ie.list.length - 2; r >= 0 && (e = ie.list[r], !(e === ie.MARKER || T.elements.lastIndexOf(e) !== -1)); r--)
                    ;
                for (r = r + 1; r < ie.list.length; r++) {
                    var h = rr(function (C) { return Or(C, r).elt; });
                    ie.list[r] = h;
                }
            }
        } }
        var ir = { localName: "BM" };
        function ks(e) { if (de(T.top, e) && ie.indexOf(T.top) === -1)
            return T.pop(), !0; for (var r = 0; r < 8;) {
            r++;
            var h = ie.findElementByTag(e);
            if (!h)
                return !1;
            var C = T.elements.lastIndexOf(h);
            if (C === -1)
                return ie.remove(h), !0;
            if (!T.elementInScope(h))
                return !0;
            for (var k = null, z, ee = C + 1; ee < T.elements.length; ee++)
                if (de(T.elements[ee], b)) {
                    k = T.elements[ee], z = ee;
                    break;
                }
            if (k) {
                var oe = T.elements[C - 1];
                ie.insertAfter(h, ir);
                for (var be = k, Se = k, He = z, Fe, yt = 0; yt++, be = T.elements[--He], be !== h;) {
                    if (Fe = ie.indexOf(be), yt > 3 && Fe !== -1 && (ie.remove(be), Fe = -1), Fe === -1) {
                        T.removeElement(be);
                        continue;
                    }
                    var lt = Or(oe.ownerDocument, Fe);
                    ie.replace(be, lt.elt, lt.attrs), T.elements[He] = lt.elt, be = lt.elt, Se === k && (ie.remove(ir), ie.insertAfter(lt.elt, ir)), be._appendChild(Se), Se = be;
                }
                nt && de(oe, j) ? ar(function () { return Se; }) : oe instanceof i.HTMLTemplateElement ? oe.content._appendChild(Se) : oe._appendChild(Se);
                for (var Ut = Or(k.ownerDocument, ie.indexOf(h)); k.hasChildNodes();)
                    Ut.elt._appendChild(k.firstChild);
                k._appendChild(Ut.elt), ie.remove(h), ie.replace(ir, Ut.elt, Ut.attrs), T.removeElement(h);
                var No = T.elements.lastIndexOf(k);
                T.elements.splice(No + 1, 0, Ut.elt);
            }
            else
                return T.popElement(h), ie.remove(h), !0;
        } return !0; }
        function Ms() { T.pop(), R = Ge; }
        function vt() { delete le._parser, T.elements.length = 0, le.defaultView && le.defaultView.dispatchEvent(new i.Event("load", {})); }
        function Z(e, r) { S = r, Y--; }
        function se(e) { switch (e) {
            case 38:
                Ze = se, S = Bt;
                break;
            case 60:
                if (Cs())
                    break;
                S = Is;
                break;
            case 0:
                V.push(e), tt = !0;
                break;
            case -1:
                ne();
                break;
            default:
                Rt(vs) || V.push(e);
                break;
        } }
        function it(e) { switch (e) {
            case 38:
                Ze = it, S = Bt;
                break;
            case 60:
                S = Rs;
                break;
            case 0:
                V.push(65533), tt = !0;
                break;
            case -1:
                ne();
                break;
            default:
                V.push(e);
                break;
        } }
        function Ft(e) { switch (e) {
            case 60:
                S = Fs;
                break;
            case 0:
                V.push(65533);
                break;
            case -1:
                ne();
                break;
            default:
                Rt(rn) || V.push(e);
                break;
        } }
        function st(e) { switch (e) {
            case 60:
                S = Us;
                break;
            case 0:
                V.push(65533);
                break;
            case -1:
                ne();
                break;
            default:
                Rt(rn) || V.push(e);
                break;
        } }
        function Rr(e) { switch (e) {
            case 0:
                V.push(65533);
                break;
            case -1:
                ne();
                break;
            default:
                Rt(Es) || V.push(e);
                break;
        } }
        function Is(e) { switch (e) {
            case 33:
                S = bn;
                break;
            case 47:
                S = Os;
                break;
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
                Ss(), Z(e, pn);
                break;
            case 63:
                Z(e, ur);
                break;
            default:
                V.push(60), Z(e, se);
                break;
        } }
        function Os(e) { switch (e) {
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
                It(), Z(e, pn);
                break;
            case 62:
                S = se;
                break;
            case -1:
                V.push(60), V.push(47), ne();
                break;
            default:
                Z(e, ur);
                break;
        } }
        function pn(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32:
                S = Ve;
                break;
            case 47:
                S = ct;
                break;
            case 62:
                S = se, Xe();
                break;
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
                he += String.fromCharCode(e + 32);
                break;
            case 0:
                he += "\uFFFD";
                break;
            case -1:
                ne();
                break;
            default:
                he += Ot(ms);
                break;
        } }
        function Rs(e) { e === 47 ? (Ke(), S = Hs) : (V.push(60), Z(e, it)); }
        function Hs(e) { switch (e) {
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
                It(), Z(e, qs);
                break;
            default:
                V.push(60), V.push(47), Z(e, it);
                break;
        } }
        function qs(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32:
                if (Oe(he)) {
                    S = Ve;
                    return;
                }
                break;
            case 47:
                if (Oe(he)) {
                    S = ct;
                    return;
                }
                break;
            case 62:
                if (Oe(he)) {
                    S = se, Xe();
                    return;
                }
                break;
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
                he += String.fromCharCode(e + 32), pe.push(e);
                return;
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
                he += String.fromCharCode(e), pe.push(e);
                return;
        } V.push(60), V.push(47), c(V, pe), Z(e, it); }
        function Fs(e) { e === 47 ? (Ke(), S = Bs) : (V.push(60), Z(e, Ft)); }
        function Bs(e) { switch (e) {
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
                It(), Z(e, Ps);
                break;
            default:
                V.push(60), V.push(47), Z(e, Ft);
                break;
        } }
        function Ps(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32:
                if (Oe(he)) {
                    S = Ve;
                    return;
                }
                break;
            case 47:
                if (Oe(he)) {
                    S = ct;
                    return;
                }
                break;
            case 62:
                if (Oe(he)) {
                    S = se, Xe();
                    return;
                }
                break;
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
                he += String.fromCharCode(e + 32), pe.push(e);
                return;
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
                he += String.fromCharCode(e), pe.push(e);
                return;
        } V.push(60), V.push(47), c(V, pe), Z(e, Ft); }
        function Us(e) { switch (e) {
            case 47:
                Ke(), S = Vs;
                break;
            case 33:
                S = Gs, V.push(60), V.push(33);
                break;
            default:
                V.push(60), Z(e, st);
                break;
        } }
        function Vs(e) { switch (e) {
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
                It(), Z(e, js);
                break;
            default:
                V.push(60), V.push(47), Z(e, st);
                break;
        } }
        function js(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32:
                if (Oe(he)) {
                    S = Ve;
                    return;
                }
                break;
            case 47:
                if (Oe(he)) {
                    S = ct;
                    return;
                }
                break;
            case 62:
                if (Oe(he)) {
                    S = se, Xe();
                    return;
                }
                break;
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
                he += String.fromCharCode(e + 32), pe.push(e);
                return;
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
                he += String.fromCharCode(e), pe.push(e);
                return;
        } V.push(60), V.push(47), c(V, pe), Z(e, st); }
        function Gs(e) { e === 45 ? (S = zs, V.push(45)) : Z(e, st); }
        function zs(e) { e === 45 ? (S = mn, V.push(45)) : Z(e, st); }
        function Ue(e) { switch (e) {
            case 45:
                S = Ws, V.push(45);
                break;
            case 60:
                S = Hr;
                break;
            case 0:
                V.push(65533);
                break;
            case -1:
                ne();
                break;
            default:
                V.push(e);
                break;
        } }
        function Ws(e) { switch (e) {
            case 45:
                S = mn, V.push(45);
                break;
            case 60:
                S = Hr;
                break;
            case 0:
                S = Ue, V.push(65533);
                break;
            case -1:
                ne();
                break;
            default:
                S = Ue, V.push(e);
                break;
        } }
        function mn(e) { switch (e) {
            case 45:
                V.push(45);
                break;
            case 60:
                S = Hr;
                break;
            case 62:
                S = st, V.push(62);
                break;
            case 0:
                S = Ue, V.push(65533);
                break;
            case -1:
                ne();
                break;
            default:
                S = Ue, V.push(e);
                break;
        } }
        function Hr(e) { switch (e) {
            case 47:
                Ke(), S = Ks;
                break;
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
                Ke(), V.push(60), Z(e, Qs);
                break;
            default:
                V.push(60), Z(e, Ue);
                break;
        } }
        function Ks(e) { switch (e) {
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
                It(), Z(e, Xs);
                break;
            default:
                V.push(60), V.push(47), Z(e, Ue);
                break;
        } }
        function Xs(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32:
                if (Oe(he)) {
                    S = Ve;
                    return;
                }
                break;
            case 47:
                if (Oe(he)) {
                    S = ct;
                    return;
                }
                break;
            case 62:
                if (Oe(he)) {
                    S = se, Xe();
                    return;
                }
                break;
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
                he += String.fromCharCode(e + 32), pe.push(e);
                return;
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
                he += String.fromCharCode(e), pe.push(e);
                return;
        } V.push(60), V.push(47), c(V, pe), Z(e, Ue); }
        function Qs(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32:
            case 47:
            case 62:
                Ne(pe) === "script" ? S = ot : S = Ue, V.push(e);
                break;
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
                pe.push(e + 32), V.push(e);
                break;
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
                pe.push(e), V.push(e);
                break;
            default:
                Z(e, Ue);
                break;
        } }
        function ot(e) { switch (e) {
            case 45:
                S = Ys, V.push(45);
                break;
            case 60:
                S = qr, V.push(60);
                break;
            case 0:
                V.push(65533);
                break;
            case -1:
                ne();
                break;
            default:
                V.push(e);
                break;
        } }
        function Ys(e) { switch (e) {
            case 45:
                S = Zs, V.push(45);
                break;
            case 60:
                S = qr, V.push(60);
                break;
            case 0:
                S = ot, V.push(65533);
                break;
            case -1:
                ne();
                break;
            default:
                S = ot, V.push(e);
                break;
        } }
        function Zs(e) { switch (e) {
            case 45:
                V.push(45);
                break;
            case 60:
                S = qr, V.push(60);
                break;
            case 62:
                S = st, V.push(62);
                break;
            case 0:
                S = ot, V.push(65533);
                break;
            case -1:
                ne();
                break;
            default:
                S = ot, V.push(e);
                break;
        } }
        function qr(e) { e === 47 ? (Ke(), S = $s, V.push(47)) : Z(e, ot); }
        function $s(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32:
            case 47:
            case 62:
                Ne(pe) === "script" ? S = Ue : S = ot, V.push(e);
                break;
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
                pe.push(e + 32), V.push(e);
                break;
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
                pe.push(e), V.push(e);
                break;
            default:
                Z(e, ot);
                break;
        } }
        function Ve(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32: break;
            case 47:
                S = ct;
                break;
            case 62:
                S = se, Xe();
                break;
            case -1:
                ne();
                break;
            case 61:
                kr(), Ie += String.fromCharCode(e), S = Fr;
                break;
            default:
                if (ws())
                    break;
                kr(), Z(e, Fr);
                break;
        } }
        function Fr(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32:
            case 47:
            case 62:
            case -1:
                Z(e, Js);
                break;
            case 61:
                S = gn;
                break;
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
                Ie += String.fromCharCode(e + 32);
                break;
            case 0:
                Ie += "\uFFFD";
                break;
            case 34:
            case 39:
            case 60:
            default:
                Ie += Ot(gs);
                break;
        } }
        function Js(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32: break;
            case 47:
                rt(Ie), S = ct;
                break;
            case 61:
                S = gn;
                break;
            case 62:
                S = se, rt(Ie), Xe();
                break;
            case -1:
                rt(Ie), ne();
                break;
            default:
                rt(Ie), kr(), Z(e, Fr);
                break;
        } }
        function gn(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32: break;
            case 34:
                Mr(), S = sr;
                break;
            case 39:
                Mr(), S = or;
                break;
            case 62:
            default:
                Mr(), Z(e, cr);
                break;
        } }
        function sr(e) { switch (e) {
            case 34:
                rt(Ie, Ae), S = Br;
                break;
            case 38:
                Ze = sr, S = Bt;
                break;
            case 0:
                Ae += "\uFFFD";
                break;
            case -1:
                ne();
                break;
            case 10:
                Ae += String.fromCharCode(e);
                break;
            default:
                Ae += Ot(ds);
                break;
        } }
        function or(e) { switch (e) {
            case 39:
                rt(Ie, Ae), S = Br;
                break;
            case 38:
                Ze = or, S = Bt;
                break;
            case 0:
                Ae += "\uFFFD";
                break;
            case -1:
                ne();
                break;
            case 10:
                Ae += String.fromCharCode(e);
                break;
            default:
                Ae += Ot(hs);
                break;
        } }
        function cr(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32:
                rt(Ie, Ae), S = Ve;
                break;
            case 38:
                Ze = cr, S = Bt;
                break;
            case 62:
                rt(Ie, Ae), S = se, Xe();
                break;
            case 0:
                Ae += "\uFFFD";
                break;
            case -1:
                Y--, S = se;
                break;
            case 34:
            case 39:
            case 60:
            case 61:
            case 96:
            default:
                Ae += Ot(ps);
                break;
        } }
        function Br(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32:
                S = Ve;
                break;
            case 47:
                S = ct;
                break;
            case 62:
                S = se, Xe();
                break;
            case -1:
                ne();
                break;
            default:
                Z(e, Ve);
                break;
        } }
        function ct(e) { switch (e) {
            case 62:
                S = se, Ls();
                break;
            case -1:
                ne();
                break;
            default:
                Z(e, Ve);
                break;
        } }
        function ur(e, r, h) {
            var C = r.length;
            h ? Y += C - 1 : Y += C;
            var k = r.substring(0, C - 1);
            k = k.replace(/\u0000/g, "\uFFFD"), k = k.replace(/\u000D\u000A/g, `
`), k = k.replace(/\u000D/g, `
`), ye(A, k), S = se;
        }
        ur.lookahead = ">";
        function bn(e, r, h) { if (r[0] === "-" && r[1] === "-") {
            Y += 2, dn(), S = eo;
            return;
        } r.toUpperCase() === "DOCTYPE" ? (Y += 7, S = oo) : r === "[CDATA[" && Ns() ? (Y += 7, S = Vr) : S = ur; }
        bn.lookahead = 7;
        function eo(e) { switch (dn(), e) {
            case 45:
                S = to;
                break;
            case 62:
                S = se, ye(A, Ne(me));
                break;
            default:
                Z(e, Et);
                break;
        } }
        function to(e) { switch (e) {
            case 45:
                S = lr;
                break;
            case 62:
                S = se, ye(A, Ne(me));
                break;
            case -1:
                ye(A, Ne(me)), ne();
                break;
            default:
                me.push(45), Z(e, Et);
                break;
        } }
        function Et(e) { switch (e) {
            case 60:
                me.push(e), S = ro;
                break;
            case 45:
                S = Pr;
                break;
            case 0:
                me.push(65533);
                break;
            case -1:
                ye(A, Ne(me)), ne();
                break;
            default:
                me.push(e);
                break;
        } }
        function ro(e) { switch (e) {
            case 33:
                me.push(e), S = ao;
                break;
            case 60:
                me.push(e);
                break;
            default:
                Z(e, Et);
                break;
        } }
        function ao(e) { switch (e) {
            case 45:
                S = no;
                break;
            default:
                Z(e, Et);
                break;
        } }
        function no(e) { switch (e) {
            case 45:
                S = io;
                break;
            default:
                Z(e, Pr);
                break;
        } }
        function io(e) { switch (e) {
            case 62:
            case -1:
                Z(e, lr);
                break;
            default:
                Z(e, lr);
                break;
        } }
        function Pr(e) { switch (e) {
            case 45:
                S = lr;
                break;
            case -1:
                ye(A, Ne(me)), ne();
                break;
            default:
                me.push(45), Z(e, Et);
                break;
        } }
        function lr(e) { switch (e) {
            case 62:
                S = se, ye(A, Ne(me));
                break;
            case 33:
                S = so;
                break;
            case 45:
                me.push(45);
                break;
            case -1:
                ye(A, Ne(me)), ne();
                break;
            default:
                me.push(45), me.push(45), Z(e, Et);
                break;
        } }
        function so(e) { switch (e) {
            case 45:
                me.push(45), me.push(45), me.push(33), S = Pr;
                break;
            case 62:
                S = se, ye(A, Ne(me));
                break;
            case -1:
                ye(A, Ne(me)), ne();
                break;
            default:
                me.push(45), me.push(45), me.push(33), Z(e, Et);
                break;
        } }
        function oo(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32:
                S = vn;
                break;
            case -1:
                Nt(), fe(), xe(), ne();
                break;
            default:
                Z(e, vn);
                break;
        } }
        function vn(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32: break;
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
                Nt(), $e.push(e + 32), S = Ur;
                break;
            case 0:
                Nt(), $e.push(65533), S = Ur;
                break;
            case 62:
                Nt(), fe(), S = se, xe();
                break;
            case -1:
                Nt(), fe(), xe(), ne();
                break;
            default:
                Nt(), $e.push(e), S = Ur;
                break;
        } }
        function Ur(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32:
                S = En;
                break;
            case 62:
                S = se, xe();
                break;
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
                $e.push(e + 32);
                break;
            case 0:
                $e.push(65533);
                break;
            case -1:
                fe(), xe(), ne();
                break;
            default:
                $e.push(e);
                break;
        } }
        function En(e, r, h) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32:
                Y += 1;
                break;
            case 62:
                S = se, Y += 1, xe();
                break;
            case -1:
                fe(), xe(), ne();
                break;
            default:
                r = r.toUpperCase(), r === "PUBLIC" ? (Y += 6, S = co) : r === "SYSTEM" ? (Y += 6, S = fo) : (fe(), S = ut);
                break;
        } }
        En.lookahead = 6;
        function co(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32:
                S = uo;
                break;
            case 34:
                tr(), S = _n;
                break;
            case 39:
                tr(), S = Tn;
                break;
            case 62:
                fe(), S = se, xe();
                break;
            case -1:
                fe(), xe(), ne();
                break;
            default:
                fe(), S = ut;
                break;
        } }
        function uo(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32: break;
            case 34:
                tr(), S = _n;
                break;
            case 39:
                tr(), S = Tn;
                break;
            case 62:
                fe(), S = se, xe();
                break;
            case -1:
                fe(), xe(), ne();
                break;
            default:
                fe(), S = ut;
                break;
        } }
        function _n(e) { switch (e) {
            case 34:
                S = yn;
                break;
            case 0:
                Je.push(65533);
                break;
            case 62:
                fe(), S = se, xe();
                break;
            case -1:
                fe(), xe(), ne();
                break;
            default:
                Je.push(e);
                break;
        } }
        function Tn(e) { switch (e) {
            case 39:
                S = yn;
                break;
            case 0:
                Je.push(65533);
                break;
            case 62:
                fe(), S = se, xe();
                break;
            case -1:
                fe(), xe(), ne();
                break;
            default:
                Je.push(e);
                break;
        } }
        function yn(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32:
                S = lo;
                break;
            case 62:
                S = se, xe();
                break;
            case 34:
                at(), S = fr;
                break;
            case 39:
                at(), S = xr;
                break;
            case -1:
                fe(), xe(), ne();
                break;
            default:
                fe(), S = ut;
                break;
        } }
        function lo(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32: break;
            case 62:
                S = se, xe();
                break;
            case 34:
                at(), S = fr;
                break;
            case 39:
                at(), S = xr;
                break;
            case -1:
                fe(), xe(), ne();
                break;
            default:
                fe(), S = ut;
                break;
        } }
        function fo(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32:
                S = xo;
                break;
            case 34:
                at(), S = fr;
                break;
            case 39:
                at(), S = xr;
                break;
            case 62:
                fe(), S = se, xe();
                break;
            case -1:
                fe(), xe(), ne();
                break;
            default:
                fe(), S = ut;
                break;
        } }
        function xo(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32: break;
            case 34:
                at(), S = fr;
                break;
            case 39:
                at(), S = xr;
                break;
            case 62:
                fe(), S = se, xe();
                break;
            case -1:
                fe(), xe(), ne();
                break;
            default:
                fe(), S = ut;
                break;
        } }
        function fr(e) { switch (e) {
            case 34:
                S = wn;
                break;
            case 0:
                et.push(65533);
                break;
            case 62:
                fe(), S = se, xe();
                break;
            case -1:
                fe(), xe(), ne();
                break;
            default:
                et.push(e);
                break;
        } }
        function xr(e) { switch (e) {
            case 39:
                S = wn;
                break;
            case 0:
                et.push(65533);
                break;
            case 62:
                fe(), S = se, xe();
                break;
            case -1:
                fe(), xe(), ne();
                break;
            default:
                et.push(e);
                break;
        } }
        function wn(e) { switch (e) {
            case 9:
            case 10:
            case 12:
            case 32: break;
            case 62:
                S = se, xe();
                break;
            case -1:
                fe(), xe(), ne();
                break;
            default:
                S = ut;
                break;
        } }
        function ut(e) { switch (e) {
            case 62:
                S = se, xe();
                break;
            case -1:
                xe(), ne();
                break;
        } }
        function Vr(e) { switch (e) {
            case 93:
                S = ho;
                break;
            case -1:
                ne();
                break;
            case 0: tt = !0;
            default:
                Rt(bs) || V.push(e);
                break;
        } }
        function ho(e) { switch (e) {
            case 93:
                S = po;
                break;
            default:
                V.push(93), Z(e, Vr);
                break;
        } }
        function po(e) { switch (e) {
            case 93:
                V.push(93);
                break;
            case 62:
                Dt(), S = se;
                break;
            default:
                V.push(93), V.push(93), Z(e, Vr);
                break;
        } }
        function Bt(e) { switch (Ke(), pe.push(38), e) {
            case 9:
            case 10:
            case 12:
            case 32:
            case 60:
            case 38:
            case -1:
                Z(e, _t);
                break;
            case 35:
                pe.push(e), S = mo;
                break;
            default:
                Z(e, Sn);
                break;
        } }
        function Sn(e) { Me.lastIndex = Y; var r = Me.exec(Q); if (!r)
            throw new Error("should never happen"); var h = r[1]; if (!h) {
            S = _t;
            return;
        } switch (Y += h.length, c(pe, Ts(h)), Ze) {
            case sr:
            case or:
            case cr:
                if (h[h.length - 1] !== ";" && /[=A-Za-z0-9]/.test(Q[Y])) {
                    S = _t;
                    return;
                }
                break;
        } Ke(); var C = ae[h]; typeof C == "number" ? pe.push(C) : c(pe, C), S = _t; }
        Sn.lookahead = -32;
        function mo(e) { switch (Ee = 0, e) {
            case 120:
            case 88:
                pe.push(e), S = go;
                break;
            default:
                Z(e, bo);
                break;
        } }
        function go(e) { switch (e) {
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
                Z(e, vo);
                break;
            default:
                Z(e, _t);
                break;
        } }
        function bo(e) { switch (e) {
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                Z(e, Eo);
                break;
            default:
                Z(e, _t);
                break;
        } }
        function vo(e) { switch (e) {
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
                Ee *= 16, Ee += e - 55;
                break;
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
                Ee *= 16, Ee += e - 87;
                break;
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                Ee *= 16, Ee += e - 48;
                break;
            case 59:
                S = dr;
                break;
            default:
                Z(e, dr);
                break;
        } }
        function Eo(e) { switch (e) {
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                Ee *= 10, Ee += e - 48;
                break;
            case 59:
                S = dr;
                break;
            default:
                Z(e, dr);
                break;
        } }
        function dr(e) { Ee in B ? Ee = B[Ee] : (Ee > 1114111 || Ee >= 55296 && Ee < 57344) && (Ee = 65533), Ke(), Ee <= 65535 ? pe.push(Ee) : (Ee = Ee - 65536, pe.push(55296 + (Ee >> 10)), pe.push(56320 + (Ee & 1023))), Z(e, _t); }
        function _t(e) { switch (Ze) {
            case sr:
            case or:
            case cr:
                Ae += Ne(pe);
                break;
            default:
                c(V, pe);
                break;
        } Z(e, Ze); }
        function _o(e, r, h, C) { switch (e) {
            case 1:
                if (r = r.replace(dt, ""), r.length === 0)
                    return;
                break;
            case 4:
                le._appendChild(le.createComment(r));
                return;
            case 5:
                var k = r, z = h, ee = C;
                le.appendChild(new f(le, k, z, ee)), Lr || k.toLowerCase() !== "html" || M.test(z) || ee && ee.toLowerCase() === P || ee === void 0 && K.test(z) ? le._quirks = !0 : (w.test(z) || ee !== void 0 && K.test(z)) && (le._limitedQuirks = !0), R = Nn;
                return;
        } le._quirks = !0, R = Nn, R(e, r, h, C); }
        function Nn(e, r, h, C) { var k; switch (e) {
            case 1:
                if (r = r.replace(dt, ""), r.length === 0)
                    return;
                break;
            case 5: return;
            case 4:
                le._appendChild(le.createComment(r));
                return;
            case 2:
                if (r === "html") {
                    k = Ht(le, r, h), T.push(k), le.appendChild(k), R = hr;
                    return;
                }
                break;
            case 3: switch (r) {
                case "html":
                case "head":
                case "body":
                case "br": break;
                default: return;
            }
        } k = Ht(le, "html", null), T.push(k), le.appendChild(k), R = hr, R(e, r, h, C); }
        function hr(e, r, h, C) { switch (e) {
            case 1:
                if (r = r.replace(dt, ""), r.length === 0)
                    return;
                break;
            case 5: return;
            case 4:
                Be(r);
                return;
            case 2:
                switch (r) {
                    case "html":
                        J(e, r, h, C);
                        return;
                    case "head":
                        var k = te(r, h);
                        Zt = k, R = Te;
                        return;
                }
                break;
            case 3: switch (r) {
                case "html":
                case "head":
                case "body":
                case "br": break;
                default: return;
            }
        } hr(d, "head", null), R(e, r, h, C); }
        function Te(e, r, h, C) { switch (e) {
            case 1:
                var k = r.match(dt);
                if (k && (Pe(k[0]), r = r.substring(k[0].length)), r.length === 0)
                    return;
                break;
            case 4:
                Be(r);
                return;
            case 5: return;
            case 2:
                switch (r) {
                    case "html":
                        J(e, r, h, C);
                        return;
                    case "meta":
                    case "base":
                    case "basefont":
                    case "bgsound":
                    case "link":
                        te(r, h), T.pop();
                        return;
                    case "title":
                        As(r, h);
                        return;
                    case "noscript": if (!$t) {
                        te(r, h), R = Dn;
                        return;
                    }
                    case "noframes":
                    case "style":
                        nr(r, h);
                        return;
                    case "script":
                        rr(function (z) { var ee = Ht(z, r, h); return ee._parser_inserted = !0, ee._force_async = !1, gt && (ee._already_started = !0), Dt(), ee; }), S = st, Ge = R, R = pr;
                        return;
                    case "template":
                        te(r, h), ie.insertMarker(), _e = !1, R = zr, ze.push(R);
                        return;
                    case "head": return;
                }
                break;
            case 3:
                switch (r) {
                    case "head":
                        T.pop(), R = jr;
                        return;
                    case "body":
                    case "html":
                    case "br": break;
                    case "template":
                        if (!T.contains("template"))
                            return;
                        T.generateImpliedEndTags(null, "thorough"), T.popTag("template"), ie.clearToMarker(), ze.pop(), qt();
                        return;
                    default: return;
                }
                break;
        } Te(m, "head", null), R(e, r, h, C); }
        function Dn(e, r, h, C) { switch (e) {
            case 5: return;
            case 4:
                Te(e, r);
                return;
            case 1:
                var k = r.match(dt);
                if (k && (Te(e, k[0]), r = r.substring(k[0].length)), r.length === 0)
                    return;
                break;
            case 2:
                switch (r) {
                    case "html":
                        J(e, r, h, C);
                        return;
                    case "basefont":
                    case "bgsound":
                    case "link":
                    case "meta":
                    case "noframes":
                    case "style":
                        Te(e, r, h);
                        return;
                    case "head":
                    case "noscript": return;
                }
                break;
            case 3:
                switch (r) {
                    case "noscript":
                        T.pop(), R = Te;
                        return;
                    case "br": break;
                    default: return;
                }
                break;
        } Dn(m, "noscript", null), R(e, r, h, C); }
        function jr(e, r, h, C) { switch (e) {
            case 1:
                var k = r.match(dt);
                if (k && (Pe(k[0]), r = r.substring(k[0].length)), r.length === 0)
                    return;
                break;
            case 4:
                Be(r);
                return;
            case 5: return;
            case 2:
                switch (r) {
                    case "html":
                        J(e, r, h, C);
                        return;
                    case "body":
                        te(r, h), _e = !1, R = J;
                        return;
                    case "frameset":
                        te(r, h), R = Wr;
                        return;
                    case "base":
                    case "basefont":
                    case "bgsound":
                    case "link":
                    case "meta":
                    case "noframes":
                    case "script":
                    case "style":
                    case "template":
                    case "title":
                        T.push(Zt), Te(d, r, h), T.removeElement(Zt);
                        return;
                    case "head": return;
                }
                break;
            case 3:
                switch (r) {
                    case "template": return Te(e, r, h, C);
                    case "body":
                    case "html":
                    case "br": break;
                    default: return;
                }
                break;
        } jr(d, "body", null), _e = !0, R(e, r, h, C); }
        function J(e, r, h, C) { var k, z, ee, oe; switch (e) {
            case 1:
                if (tt && (r = r.replace(Kt, ""), r.length === 0))
                    return;
                _e && Wt.test(r) && (_e = !1), Ce(), Pe(r);
                return;
            case 5: return;
            case 4:
                Be(r);
                return;
            case -1:
                if (ze.length)
                    return zr(e);
                vt();
                return;
            case 2:
                switch (r) {
                    case "html":
                        if (T.contains("template"))
                            return;
                        ln(h, T.elements[0]);
                        return;
                    case "base":
                    case "basefont":
                    case "bgsound":
                    case "link":
                    case "meta":
                    case "noframes":
                    case "script":
                    case "style":
                    case "template":
                    case "title":
                        Te(d, r, h);
                        return;
                    case "body":
                        if (k = T.elements[1], !k || !(k instanceof i.HTMLBodyElement) || T.contains("template"))
                            return;
                        _e = !1, ln(h, k);
                        return;
                    case "frameset":
                        if (!_e || (k = T.elements[1], !k || !(k instanceof i.HTMLBodyElement)))
                            return;
                        for (k.parentNode && k.parentNode.removeChild(k); !(T.top instanceof i.HTMLHtmlElement);)
                            T.pop();
                        te(r, h), R = Wr;
                        return;
                    case "address":
                    case "article":
                    case "aside":
                    case "blockquote":
                    case "center":
                    case "details":
                    case "dialog":
                    case "dir":
                    case "div":
                    case "dl":
                    case "fieldset":
                    case "figcaption":
                    case "figure":
                    case "footer":
                    case "header":
                    case "hgroup":
                    case "main":
                    case "nav":
                    case "ol":
                    case "p":
                    case "section":
                    case "summary":
                    case "ul":
                        T.inButtonScope("p") && J(m, "p"), te(r, h);
                        return;
                    case "menu":
                        T.inButtonScope("p") && J(m, "p"), de(T.top, "menuitem") && T.pop(), te(r, h);
                        return;
                    case "h1":
                    case "h2":
                    case "h3":
                    case "h4":
                    case "h5":
                    case "h6":
                        T.inButtonScope("p") && J(m, "p"), T.top instanceof i.HTMLHeadingElement && T.pop(), te(r, h);
                        return;
                    case "pre":
                    case "listing":
                        T.inButtonScope("p") && J(m, "p"), te(r, h), bt = !0, _e = !1;
                        return;
                    case "form":
                        if (We && !T.contains("template"))
                            return;
                        T.inButtonScope("p") && J(m, "p"), oe = te(r, h), T.contains("template") || (We = oe);
                        return;
                    case "li":
                        for (_e = !1, z = T.elements.length - 1; z >= 0; z--) {
                            if (ee = T.elements[z], ee instanceof i.HTMLLIElement) {
                                J(m, "li");
                                break;
                            }
                            if (de(ee, b) && !de(ee, _))
                                break;
                        }
                        T.inButtonScope("p") && J(m, "p"), te(r, h);
                        return;
                    case "dd":
                    case "dt":
                        for (_e = !1, z = T.elements.length - 1; z >= 0; z--) {
                            if (ee = T.elements[z], de(ee, y)) {
                                J(m, ee.localName);
                                break;
                            }
                            if (de(ee, b) && !de(ee, _))
                                break;
                        }
                        T.inButtonScope("p") && J(m, "p"), te(r, h);
                        return;
                    case "plaintext":
                        T.inButtonScope("p") && J(m, "p"), te(r, h), S = Rr;
                        return;
                    case "button":
                        T.inScope("button") ? (J(m, "button"), R(e, r, h, C)) : (Ce(), te(r, h), _e = !1);
                        return;
                    case "a":
                        var be = ie.findElementByTag("a");
                        be && (J(m, r), ie.remove(be), T.removeElement(be));
                    case "b":
                    case "big":
                    case "code":
                    case "em":
                    case "font":
                    case "i":
                    case "s":
                    case "small":
                    case "strike":
                    case "strong":
                    case "tt":
                    case "u":
                        Ce(), ie.push(te(r, h), h);
                        return;
                    case "nobr":
                        Ce(), T.inScope(r) && (J(m, r), Ce()), ie.push(te(r, h), h);
                        return;
                    case "applet":
                    case "marquee":
                    case "object":
                        Ce(), te(r, h), ie.insertMarker(), _e = !1;
                        return;
                    case "table":
                        !le._quirks && T.inButtonScope("p") && J(m, "p"), te(r, h), _e = !1, R = Re;
                        return;
                    case "area":
                    case "br":
                    case "embed":
                    case "img":
                    case "keygen":
                    case "wbr":
                        Ce(), te(r, h), T.pop(), _e = !1;
                        return;
                    case "input":
                        Ce(), oe = te(r, h), T.pop();
                        var Se = oe.getAttribute("type");
                        (!Se || Se.toLowerCase() !== "hidden") && (_e = !1);
                        return;
                    case "param":
                    case "source":
                    case "track":
                        te(r, h), T.pop();
                        return;
                    case "hr":
                        T.inButtonScope("p") && J(m, "p"), de(T.top, "menuitem") && T.pop(), te(r, h), T.pop(), _e = !1;
                        return;
                    case "image":
                        J(d, "img", h, C);
                        return;
                    case "textarea":
                        te(r, h), bt = !0, _e = !1, S = it, Ge = R, R = pr;
                        return;
                    case "xmp":
                        T.inButtonScope("p") && J(m, "p"), Ce(), _e = !1, nr(r, h);
                        return;
                    case "iframe":
                        _e = !1, nr(r, h);
                        return;
                    case "noembed":
                        nr(r, h);
                        return;
                    case "select":
                        Ce(), te(r, h), _e = !1, R === Re || R === Gr || R === Tt || R === Pt || R === Ct ? R = gr : R = Qe;
                        return;
                    case "optgroup":
                    case "option":
                        T.top instanceof i.HTMLOptionElement && J(m, "option"), Ce(), te(r, h);
                        return;
                    case "menuitem":
                        de(T.top, "menuitem") && T.pop(), Ce(), te(r, h);
                        return;
                    case "rb":
                    case "rtc":
                        T.inScope("ruby") && T.generateImpliedEndTags(), te(r, h);
                        return;
                    case "rp":
                    case "rt":
                        T.inScope("ruby") && T.generateImpliedEndTags("rtc"), te(r, h);
                        return;
                    case "math":
                        Ce(), un(h), Cr(h), Ir(r, h, a.MATHML), C && T.pop();
                        return;
                    case "svg":
                        Ce(), cn(h), Cr(h), Ir(r, h, a.SVG), C && T.pop();
                        return;
                    case "caption":
                    case "col":
                    case "colgroup":
                    case "frame":
                    case "head":
                    case "tbody":
                    case "td":
                    case "tfoot":
                    case "th":
                    case "thead":
                    case "tr": return;
                }
                Ce(), te(r, h);
                return;
            case 3:
                switch (r) {
                    case "template":
                        Te(m, r, h);
                        return;
                    case "body":
                        if (!T.inScope("body"))
                            return;
                        R = Cn;
                        return;
                    case "html":
                        if (!T.inScope("body"))
                            return;
                        R = Cn, R(e, r, h);
                        return;
                    case "address":
                    case "article":
                    case "aside":
                    case "blockquote":
                    case "button":
                    case "center":
                    case "details":
                    case "dialog":
                    case "dir":
                    case "div":
                    case "dl":
                    case "fieldset":
                    case "figcaption":
                    case "figure":
                    case "footer":
                    case "header":
                    case "hgroup":
                    case "listing":
                    case "main":
                    case "menu":
                    case "nav":
                    case "ol":
                    case "pre":
                    case "section":
                    case "summary":
                    case "ul":
                        if (!T.inScope(r))
                            return;
                        T.generateImpliedEndTags(), T.popTag(r);
                        return;
                    case "form":
                        if (T.contains("template")) {
                            if (!T.inScope("form"))
                                return;
                            T.generateImpliedEndTags(), T.popTag("form");
                        }
                        else {
                            var He = We;
                            if (We = null, !He || !T.elementInScope(He))
                                return;
                            T.generateImpliedEndTags(), T.removeElement(He);
                        }
                        return;
                    case "p":
                        T.inButtonScope(r) ? (T.generateImpliedEndTags(r), T.popTag(r)) : (J(d, r, null), R(e, r, h, C));
                        return;
                    case "li":
                        if (!T.inListItemScope(r))
                            return;
                        T.generateImpliedEndTags(r), T.popTag(r);
                        return;
                    case "dd":
                    case "dt":
                        if (!T.inScope(r))
                            return;
                        T.generateImpliedEndTags(r), T.popTag(r);
                        return;
                    case "h1":
                    case "h2":
                    case "h3":
                    case "h4":
                    case "h5":
                    case "h6":
                        if (!T.elementTypeInScope(i.HTMLHeadingElement))
                            return;
                        T.generateImpliedEndTags(), T.popElementType(i.HTMLHeadingElement);
                        return;
                    case "sarcasm": break;
                    case "a":
                    case "b":
                    case "big":
                    case "code":
                    case "em":
                    case "font":
                    case "i":
                    case "nobr":
                    case "s":
                    case "small":
                    case "strike":
                    case "strong":
                    case "tt":
                    case "u":
                        var Fe = ks(r);
                        if (Fe)
                            return;
                        break;
                    case "applet":
                    case "marquee":
                    case "object":
                        if (!T.inScope(r))
                            return;
                        T.generateImpliedEndTags(), T.popTag(r), ie.clearToMarker();
                        return;
                    case "br":
                        J(d, r, null);
                        return;
                }
                for (z = T.elements.length - 1; z >= 0; z--)
                    if (ee = T.elements[z], de(ee, r)) {
                        T.generateImpliedEndTags(r), T.popElement(ee);
                        break;
                    }
                    else if (de(ee, b))
                        return;
                return;
        } }
        function pr(e, r, h, C) { switch (e) {
            case 1:
                Pe(r);
                return;
            case -1:
                T.top instanceof i.HTMLScriptElement && (T.top._already_started = !0), T.pop(), R = Ge, R(e);
                return;
            case 3:
                r === "script" ? Ms() : (T.pop(), R = Ge);
                return;
            default: return;
        } }
        function Re(e, r, h, C) { function k(ee) { for (var oe = 0, be = ee.length; oe < be; oe++)
            if (ee[oe][0] === "type")
                return ee[oe][1].toLowerCase(); return null; } switch (e) {
            case 1:
                if (Ar) {
                    J(e, r, h, C);
                    return;
                }
                else if (de(T.top, j)) {
                    Jt = [], Ge = R, R = To, R(e, r, h, C);
                    return;
                }
                break;
            case 4:
                Be(r);
                return;
            case 5: return;
            case 2:
                switch (r) {
                    case "caption":
                        T.clearToContext(D), ie.insertMarker(), te(r, h), R = Gr;
                        return;
                    case "colgroup":
                        T.clearToContext(D), te(r, h), R = mr;
                        return;
                    case "col":
                        Re(d, "colgroup", null), R(e, r, h, C);
                        return;
                    case "tbody":
                    case "tfoot":
                    case "thead":
                        T.clearToContext(D), te(r, h), R = Tt;
                        return;
                    case "td":
                    case "th":
                    case "tr":
                        Re(d, "tbody", null), R(e, r, h, C);
                        return;
                    case "table":
                        if (!T.inTableScope(r))
                            return;
                        Re(m, r), R(e, r, h, C);
                        return;
                    case "style":
                    case "script":
                    case "template":
                        Te(e, r, h, C);
                        return;
                    case "input":
                        var z = k(h);
                        if (z !== "hidden")
                            break;
                        te(r, h), T.pop();
                        return;
                    case "form":
                        if (We || T.contains("template"))
                            return;
                        We = te(r, h), T.popElement(We);
                        return;
                }
                break;
            case 3:
                switch (r) {
                    case "table":
                        if (!T.inTableScope(r))
                            return;
                        T.popTag(r), qt();
                        return;
                    case "body":
                    case "caption":
                    case "col":
                    case "colgroup":
                    case "html":
                    case "tbody":
                    case "td":
                    case "tfoot":
                    case "th":
                    case "thead":
                    case "tr": return;
                    case "template":
                        Te(e, r, h, C);
                        return;
                }
                break;
            case -1:
                J(e, r, h, C);
                return;
        } nt = !0, J(e, r, h, C), nt = !1; }
        function To(e, r, h, C) { if (e === x) {
            if (tt && (r = r.replace(Kt, ""), r.length === 0))
                return;
            Jt.push(r);
        }
        else {
            var k = Jt.join("");
            Jt.length = 0, Wt.test(k) ? (nt = !0, J(x, k), nt = !1) : Pe(k), R = Ge, R(e, r, h, C);
        } }
        function Gr(e, r, h, C) { function k() { return T.inTableScope("caption") ? (T.generateImpliedEndTags(), T.popTag("caption"), ie.clearToMarker(), R = Re, !0) : !1; } switch (e) {
            case 2:
                switch (r) {
                    case "caption":
                    case "col":
                    case "colgroup":
                    case "tbody":
                    case "td":
                    case "tfoot":
                    case "th":
                    case "thead":
                    case "tr":
                        k() && R(e, r, h, C);
                        return;
                }
                break;
            case 3:
                switch (r) {
                    case "caption":
                        k();
                        return;
                    case "table":
                        k() && R(e, r, h, C);
                        return;
                    case "body":
                    case "col":
                    case "colgroup":
                    case "html":
                    case "tbody":
                    case "td":
                    case "tfoot":
                    case "th":
                    case "thead":
                    case "tr": return;
                }
                break;
        } J(e, r, h, C); }
        function mr(e, r, h, C) { switch (e) {
            case 1:
                var k = r.match(dt);
                if (k && (Pe(k[0]), r = r.substring(k[0].length)), r.length === 0)
                    return;
                break;
            case 4:
                Be(r);
                return;
            case 5: return;
            case 2:
                switch (r) {
                    case "html":
                        J(e, r, h, C);
                        return;
                    case "col":
                        te(r, h), T.pop();
                        return;
                    case "template":
                        Te(e, r, h, C);
                        return;
                }
                break;
            case 3:
                switch (r) {
                    case "colgroup":
                        if (!de(T.top, "colgroup"))
                            return;
                        T.pop(), R = Re;
                        return;
                    case "col": return;
                    case "template":
                        Te(e, r, h, C);
                        return;
                }
                break;
            case -1:
                J(e, r, h, C);
                return;
        } de(T.top, "colgroup") && (mr(m, "colgroup"), R(e, r, h, C)); }
        function Tt(e, r, h, C) { function k() { !T.inTableScope("tbody") && !T.inTableScope("thead") && !T.inTableScope("tfoot") || (T.clearToContext(I), Tt(m, T.top.localName, null), R(e, r, h, C)); } switch (e) {
            case 2:
                switch (r) {
                    case "tr":
                        T.clearToContext(I), te(r, h), R = Pt;
                        return;
                    case "th":
                    case "td":
                        Tt(d, "tr", null), R(e, r, h, C);
                        return;
                    case "caption":
                    case "col":
                    case "colgroup":
                    case "tbody":
                    case "tfoot":
                    case "thead":
                        k();
                        return;
                }
                break;
            case 3:
                switch (r) {
                    case "table":
                        k();
                        return;
                    case "tbody":
                    case "tfoot":
                    case "thead":
                        T.inTableScope(r) && (T.clearToContext(I), T.pop(), R = Re);
                        return;
                    case "body":
                    case "caption":
                    case "col":
                    case "colgroup":
                    case "html":
                    case "td":
                    case "th":
                    case "tr": return;
                }
                break;
        } Re(e, r, h, C); }
        function Pt(e, r, h, C) { function k() { return T.inTableScope("tr") ? (T.clearToContext(E), T.pop(), R = Tt, !0) : !1; } switch (e) {
            case 2:
                switch (r) {
                    case "th":
                    case "td":
                        T.clearToContext(E), te(r, h), R = Ct, ie.insertMarker();
                        return;
                    case "caption":
                    case "col":
                    case "colgroup":
                    case "tbody":
                    case "tfoot":
                    case "thead":
                    case "tr":
                        k() && R(e, r, h, C);
                        return;
                }
                break;
            case 3:
                switch (r) {
                    case "tr":
                        k();
                        return;
                    case "table":
                        k() && R(e, r, h, C);
                        return;
                    case "tbody":
                    case "tfoot":
                    case "thead":
                        T.inTableScope(r) && k() && R(e, r, h, C);
                        return;
                    case "body":
                    case "caption":
                    case "col":
                    case "colgroup":
                    case "html":
                    case "td":
                    case "th": return;
                }
                break;
        } Re(e, r, h, C); }
        function Ct(e, r, h, C) { switch (e) {
            case 2:
                switch (r) {
                    case "caption":
                    case "col":
                    case "colgroup":
                    case "tbody":
                    case "td":
                    case "tfoot":
                    case "th":
                    case "thead":
                    case "tr":
                        T.inTableScope("td") ? (Ct(m, "td"), R(e, r, h, C)) : T.inTableScope("th") && (Ct(m, "th"), R(e, r, h, C));
                        return;
                }
                break;
            case 3:
                switch (r) {
                    case "td":
                    case "th":
                        if (!T.inTableScope(r))
                            return;
                        T.generateImpliedEndTags(), T.popTag(r), ie.clearToMarker(), R = Pt;
                        return;
                    case "body":
                    case "caption":
                    case "col":
                    case "colgroup":
                    case "html": return;
                    case "table":
                    case "tbody":
                    case "tfoot":
                    case "thead":
                    case "tr":
                        if (!T.inTableScope(r))
                            return;
                        Ct(m, T.inTableScope("td") ? "td" : "th"), R(e, r, h, C);
                        return;
                }
                break;
        } J(e, r, h, C); }
        function Qe(e, r, h, C) { switch (e) {
            case 1:
                if (tt && (r = r.replace(Kt, ""), r.length === 0))
                    return;
                Pe(r);
                return;
            case 4:
                Be(r);
                return;
            case 5: return;
            case -1:
                J(e, r, h, C);
                return;
            case 2:
                switch (r) {
                    case "html":
                        J(e, r, h, C);
                        return;
                    case "option":
                        T.top instanceof i.HTMLOptionElement && Qe(m, r), te(r, h);
                        return;
                    case "optgroup":
                        T.top instanceof i.HTMLOptionElement && Qe(m, "option"), T.top instanceof i.HTMLOptGroupElement && Qe(m, r), te(r, h);
                        return;
                    case "select":
                        Qe(m, r);
                        return;
                    case "input":
                    case "keygen":
                    case "textarea":
                        if (!T.inSelectScope("select"))
                            return;
                        Qe(m, "select"), R(e, r, h, C);
                        return;
                    case "script":
                    case "template":
                        Te(e, r, h, C);
                        return;
                }
                break;
            case 3:
                switch (r) {
                    case "optgroup":
                        T.top instanceof i.HTMLOptionElement && T.elements[T.elements.length - 2] instanceof i.HTMLOptGroupElement && Qe(m, "option"), T.top instanceof i.HTMLOptGroupElement && T.pop();
                        return;
                    case "option":
                        T.top instanceof i.HTMLOptionElement && T.pop();
                        return;
                    case "select":
                        if (!T.inSelectScope(r))
                            return;
                        T.popTag(r), qt();
                        return;
                    case "template":
                        Te(e, r, h, C);
                        return;
                }
                break;
        } }
        function gr(e, r, h, C) { switch (r) {
            case "caption":
            case "table":
            case "tbody":
            case "tfoot":
            case "thead":
            case "tr":
            case "td":
            case "th": switch (e) {
                case 2:
                    gr(m, "select"), R(e, r, h, C);
                    return;
                case 3:
                    T.inTableScope(r) && (gr(m, "select"), R(e, r, h, C));
                    return;
            }
        } Qe(e, r, h, C); }
        function zr(e, r, h, C) { function k(z) { R = z, ze[ze.length - 1] = R, R(e, r, h, C); } switch (e) {
            case 1:
            case 4:
            case 5:
                J(e, r, h, C);
                return;
            case -1:
                T.contains("template") ? (T.popTag("template"), ie.clearToMarker(), ze.pop(), qt(), R(e, r, h, C)) : vt();
                return;
            case 2:
                switch (r) {
                    case "base":
                    case "basefont":
                    case "bgsound":
                    case "link":
                    case "meta":
                    case "noframes":
                    case "script":
                    case "style":
                    case "template":
                    case "title":
                        Te(e, r, h, C);
                        return;
                    case "caption":
                    case "colgroup":
                    case "tbody":
                    case "tfoot":
                    case "thead":
                        k(Re);
                        return;
                    case "col":
                        k(mr);
                        return;
                    case "tr":
                        k(Tt);
                        return;
                    case "td":
                    case "th":
                        k(Pt);
                        return;
                }
                k(J);
                return;
            case 3: switch (r) {
                case "template":
                    Te(e, r, h, C);
                    return;
                default: return;
            }
        } }
        function Cn(e, r, h, C) { switch (e) {
            case 1:
                if (Wt.test(r))
                    break;
                J(e, r);
                return;
            case 4:
                T.elements[0]._appendChild(le.createComment(r));
                return;
            case 5: return;
            case -1:
                vt();
                return;
            case 2:
                if (r === "html") {
                    J(e, r, h, C);
                    return;
                }
                break;
            case 3:
                if (r === "html") {
                    if (gt)
                        return;
                    R = wo;
                    return;
                }
                break;
        } R = J, R(e, r, h, C); }
        function Wr(e, r, h, C) { switch (e) {
            case 1:
                r = r.replace(Dr, ""), r.length > 0 && Pe(r);
                return;
            case 4:
                Be(r);
                return;
            case 5: return;
            case -1:
                vt();
                return;
            case 2:
                switch (r) {
                    case "html":
                        J(e, r, h, C);
                        return;
                    case "frameset":
                        te(r, h);
                        return;
                    case "frame":
                        te(r, h), T.pop();
                        return;
                    case "noframes":
                        Te(e, r, h, C);
                        return;
                }
                break;
            case 3:
                if (r === "frameset") {
                    if (gt && T.top instanceof i.HTMLHtmlElement)
                        return;
                    T.pop(), !gt && !(T.top instanceof i.HTMLFrameSetElement) && (R = yo);
                    return;
                }
                break;
        } }
        function yo(e, r, h, C) { switch (e) {
            case 1:
                r = r.replace(Dr, ""), r.length > 0 && Pe(r);
                return;
            case 4:
                Be(r);
                return;
            case 5: return;
            case -1:
                vt();
                return;
            case 2:
                switch (r) {
                    case "html":
                        J(e, r, h, C);
                        return;
                    case "noframes":
                        Te(e, r, h, C);
                        return;
                }
                break;
            case 3:
                if (r === "html") {
                    R = So;
                    return;
                }
                break;
        } }
        function wo(e, r, h, C) { switch (e) {
            case 1:
                if (Wt.test(r))
                    break;
                J(e, r, h, C);
                return;
            case 4:
                le._appendChild(le.createComment(r));
                return;
            case 5:
                J(e, r, h, C);
                return;
            case -1:
                vt();
                return;
            case 2:
                if (r === "html") {
                    J(e, r, h, C);
                    return;
                }
                break;
        } R = J, R(e, r, h, C); }
        function So(e, r, h, C) { switch (e) {
            case 1:
                r = r.replace(Dr, ""), r.length > 0 && J(e, r, h, C);
                return;
            case 4:
                le._appendChild(le.createComment(r));
                return;
            case 5:
                J(e, r, h, C);
                return;
            case -1:
                vt();
                return;
            case 2:
                switch (r) {
                    case "html":
                        J(e, r, h, C);
                        return;
                    case "noframes":
                        Te(e, r, h, C);
                        return;
                }
                break;
        } }
        function Ln(e, r, h, C) { function k(be) { for (var Se = 0, He = be.length; Se < He; Se++)
            switch (be[Se][0]) {
                case "color":
                case "face":
                case "size": return !0;
            } return !1; } var z; switch (e) {
            case 1:
                _e && _s.test(r) && (_e = !1), tt && (r = r.replace(Kt, "\uFFFD")), Pe(r);
                return;
            case 4:
                Be(r);
                return;
            case 5: return;
            case 2:
                switch (r) {
                    case "font": if (!k(h))
                        break;
                    case "b":
                    case "big":
                    case "blockquote":
                    case "body":
                    case "br":
                    case "center":
                    case "code":
                    case "dd":
                    case "div":
                    case "dl":
                    case "dt":
                    case "em":
                    case "embed":
                    case "h1":
                    case "h2":
                    case "h3":
                    case "h4":
                    case "h5":
                    case "h6":
                    case "head":
                    case "hr":
                    case "i":
                    case "img":
                    case "li":
                    case "listing":
                    case "menu":
                    case "meta":
                    case "nobr":
                    case "ol":
                    case "p":
                    case "pre":
                    case "ruby":
                    case "s":
                    case "small":
                    case "span":
                    case "strong":
                    case "strike":
                    case "sub":
                    case "sup":
                    case "table":
                    case "tt":
                    case "u":
                    case "ul":
                    case "var":
                        if (gt)
                            break;
                        do
                            T.pop(), z = T.top;
                        while (z.namespaceURI !== a.HTML && !sn(z) && !on(z));
                        ye(e, r, h, C);
                        return;
                }
                z = T.elements.length === 1 && gt ? H : T.top, z.namespaceURI === a.MATHML ? un(h) : z.namespaceURI === a.SVG && (r = ys(r), cn(h)), Cr(h), Ir(r, h, z.namespaceURI), C && T.pop();
                return;
            case 3:
                if (z = T.top, r === "script" && z.namespaceURI === a.SVG && z.localName === "script")
                    T.pop();
                else
                    for (var ee = T.elements.length - 1, oe = T.elements[ee];;) {
                        if (oe.localName.toLowerCase() === r) {
                            T.popElement(oe);
                            break;
                        }
                        if (oe = T.elements[--ee], oe.namespaceURI === a.HTML) {
                            R(e, r, h, C);
                            break;
                        }
                    }
                return;
        } }
        return er.testTokenizer = function (e, r, h, C) { var k = []; switch (r) {
            case "PCDATA state":
                S = se;
                break;
            case "RCDATA state":
                S = it;
                break;
            case "RAWTEXT state":
                S = Ft;
                break;
            case "PLAINTEXT state":
                S = Rr;
                break;
        } if (h && (Qt = h), ye = function (ee, oe, be, Se) { switch (Dt(), ee) {
            case 1:
                k.length > 0 && k[k.length - 1][0] === "Character" ? k[k.length - 1][1] += oe : k.push(["Character", oe]);
                break;
            case 4:
                k.push(["Comment", oe]);
                break;
            case 5:
                k.push(["DOCTYPE", oe, be === void 0 ? null : be, Se === void 0 ? null : Se, !Lr]);
                break;
            case 2:
                for (var He = Object.create(null), Fe = 0; Fe < be.length; Fe++) {
                    var yt = be[Fe];
                    yt.length === 1 ? He[yt[0]] = "" : He[yt[0]] = yt[1];
                }
                var lt = ["StartTag", oe, He];
                Se && lt.push(!0), k.push(lt);
                break;
            case 3:
                k.push(["EndTag", oe]);
                break;
        } }, !C)
            this.parse(e, !0);
        else {
            for (var z = 0; z < e.length; z++)
                this.parse(e[z]);
            this.parse("", !0);
        } return k; }, er;
    }
    return Ma;
}
var Ia, _i;
function Nr() { if (_i)
    return Ia; _i = 1, Ia = i; var l = Xa(), f = Qa(), t = Ya(), a = we(), s = Va(); function i(u) { this.contextObject = u; } var c = { xml: { "": !0, "1.0": !0, "2.0": !0 }, core: { "": !0, "2.0": !0 }, html: { "": !0, "1.0": !0, "2.0": !0 }, xhtml: { "": !0, "1.0": !0, "2.0": !0 } }; return i.prototype = { hasFeature: function (x, d) { var m = c[(x || "").toLowerCase()]; return m && m[d || ""] || !1; }, createDocumentType: function (x, d, m) { return s.isValidQName(x) || a.InvalidCharacterError(), new f(this.contextObject, x, d, m); }, createDocument: function (x, d, m) { var A = new l(!1, null), F; return d ? F = A.createElementNS(x, d) : F = null, m && A.appendChild(m), F && A.appendChild(F), x === a.NAMESPACE.HTML ? A._contentType = "application/xhtml+xml" : x === a.NAMESPACE.SVG ? A._contentType = "image/svg+xml" : A._contentType = "application/xml", A; }, createHTMLDocument: function (x) { var d = new l(!0, null); d.appendChild(new f(d, "html")); var m = d.createElement("html"); d.appendChild(m); var A = d.createElement("head"); if (m.appendChild(A), x !== void 0) {
        var F = d.createElement("title");
        A.appendChild(F), F.appendChild(d.createTextNode(x));
    } return m.appendChild(d.createElement("body")), d.modclock = 1, d; }, mozSetOutputMutationHandler: function (u, x) { u.mutationHandler = x; }, mozGetInputMutationHandler: function (u) { a.nyi(); }, mozHTMLParser: t }, Ia; }
var Oa, Ti;
function r0() { if (Ti)
    return Oa; Ti = 1; var l = za(), f = Yi(); Oa = t; function t(a, s) { this._window = a, this._href = s; } return t.prototype = Object.create(f.prototype, { constructor: { value: t }, href: { get: function () { return this._href; }, set: function (a) { this.assign(a); } }, assign: { value: function (a) { var s = new l(this._href), i = s.resolve(a); this._href = i; } }, replace: { value: function (a) { this.assign(a); } }, reload: { value: function () { this.assign(this.href); } }, toString: { value: function () { return this.href; } } }), Oa; }
var Ra, yi;
function a0() { if (yi)
    return Ra; yi = 1; var l = Object.create(null, { appCodeName: { value: "Mozilla" }, appName: { value: "Netscape" }, appVersion: { value: "4.0" }, platform: { value: "" }, product: { value: "Gecko" }, productSub: { value: "20100101" }, userAgent: { value: "" }, vendor: { value: "" }, vendorSub: { value: "" }, taintEnabled: { value: function () { return !1; } } }); return Ra = l, Ra; }
var Ha, wi;
function n0() { if (wi)
    return Ha; wi = 1; var l = { setTimeout, clearTimeout, setInterval, clearInterval }; return Ha = l, Ha; }
var _r = { exports: {} }, Si;
function Ji() { return Si || (Si = 1, (function (l, f) { var t = we(); f = l.exports = { CSSStyleDeclaration: Wa(), CharacterData: wr(), Comment: zi(), DOMImplementation: Nr(), DOMTokenList: Pi(), Document: Xa(), DocumentFragment: Wi(), DocumentType: Qa(), Element: Gt(), HTMLParser: Ya(), NamedNodeMap: Vi(), Node: De(), NodeList: kt(), NodeFilter: Sr(), ProcessingInstruction: Ki(), Text: Gi(), Window: es() }, t.merge(f, Qi()), t.merge(f, Ka().elements), t.merge(f, $i().elements); })(_r, _r.exports)), _r.exports; }
var qa, Ni;
function es() { if (Ni)
    return qa; Ni = 1; var l = Nr(), f = Hi(), t = r0(), a = we(); qa = s; function s(i) { this.document = i || new l(null).createHTMLDocument(""), this.document._scripting_enabled = !0, this.document.defaultView = this, this.location = new t(this, this.document._address || "about:blank"); } return s.prototype = Object.create(f.prototype, { console: { value: console }, history: { value: { back: a.nyi, forward: a.nyi, go: a.nyi } }, navigator: { value: a0() }, window: { get: function () { return this; } }, self: { get: function () { return this; } }, frames: { get: function () { return this; } }, parent: { get: function () { return this; } }, top: { get: function () { return this; } }, length: { value: 0 }, frameElement: { value: null }, opener: { value: null }, onload: { get: function () { return this._getEventHandler("load"); }, set: function (i) { this._setEventHandler("load", i); } }, getComputedStyle: { value: function (c) { return c.style; } } }), a.expose(n0(), s), a.expose(Ji(), s), qa; }
var Di;
function i0() { return Di || (Di = 1, (function (l) { var f = Nr(), t = Ya(); es(); var a = Ji(); l.createDOMImplementation = function () { return new f(null); }, l.createDocument = function (s, i) { if (s || i) {
    var c = new t;
    return c.parse(s || "", !0), c.document();
} return new f(null).createHTMLDocument(""); }, l.createIncrementalHTMLParser = function () { var s = new t; return { write: function (i) { i.length > 0 && s.parse(i, !1, function () { return !0; }); }, end: function (i) { s.parse(i || "", !0, function () { return !0; }); }, process: function (i) { return s.parse("", !1, i); }, document: function () { return s.document(); } }; }, l.createWindow = function (s, i) { var c = l.createDocument(s); return i !== void 0 && (c._address = i), new a.Window(c); }, l.impl = a; })(Kr)), Kr; }
var s0 = i0(), yr = Ko(s0);
function o0() { Object.assign(globalThis, yr.impl), globalThis.KeyboardEvent = yr.impl.Event; }
function ts(l, f = "/") { return yr.createWindow(l, f).document; }
function c0(l) { return l.serialize(); }
var rs = (() => { class l extends Ii {
    static makeCurrent() { o0(), Do(new l); }
    supportsDOMEvents = !1;
    static defaultDoc;
    createHtmlDocument() { return ts("<html><head><title>fakeTitle</title></head><body></body></html>"); }
    getDefaultDocument() { return l.defaultDoc || (l.defaultDoc = yr.createDocument()), l.defaultDoc; }
    isElementNode(t) { return t ? t.nodeType === l.defaultDoc.ELEMENT_NODE : !1; }
    isShadowRoot(t) { return t.shadowRoot == t; }
    getGlobalEventTarget(t, a) { return a === "window" ? t.defaultView : a === "document" ? t : a === "body" ? t.body : null; }
    getBaseHref(t) { let a = t.head.children.length; for (let s = 0; s < a; s++) {
        let i = t.head.children[s];
        if (i.tagName === "BASE")
            return i.getAttribute("href") || "";
    } return ""; }
    dispatchEvent(t, a) { t.dispatchEvent(a); let i = (t.ownerDocument || t).defaultView; i && i.dispatchEvent(a); }
    getUserAgent() { return "Fake user agent"; }
    getCookie(t) { throw new Error("getCookie has not been implemented"); }
} return l; })(), zt = new Ba("Server.INITIAL_CONFIG"), Za = new Ba("Server.RENDER_MODULE_HOOK"), as = new Ba("ENABLE_DOM_EMULATION"), $a = (() => { class l {
    _doc;
    _enableDomEmulation = Ja(At(Tr));
    constructor(t) { this._doc = t; }
    renderToString() { let t = "renderToString"; ki(t); let a = this._enableDomEmulation ? c0(this._doc) : this._doc.documentElement.outerHTML; return Mi(t), a; }
    getDocument() { return this._doc; }
    static \u0275fac = function (a) { return new (a || l)(ke.\u0275\u0275inject(St)); };
    static \u0275prov = ke.\u0275\u0275defineInjectable({ token: l, factory: l.\u0275fac });
} return l; })();
function Ja(l) { return l.get(as, !0); }
var u0 = (() => { class l {
    xhrImpl;
    \u0275loadImpl() { return Lt(this, null, function* () { if (!this.xhrImpl) {
        let { default: t } = yield import("@nf-internal/xhr2-QSZZM3G7");
        this.xhrImpl = t;
    } }); }
    build() { let t = this.xhrImpl; if (!t)
        throw new Error("Unexpected state in ServerXhr: XHR implementation is not loaded."); return new t.XMLHttpRequest; }
    static \u0275fac = function (a) { return new (a || l); };
    static \u0275prov = ke.\u0275\u0275defineInjectable({ token: l, factory: l.\u0275fac });
} return l; })();
function l0(l, f) { let t = At(Ai), { href: a, protocol: s, hostname: i, port: c } = t; if (!s.startsWith("http"))
    return f(l); let u = `${s}//${i}`; c && (u += `:${c}`); let x = t.getBaseHrefFromDOM() || a, d = new URL(x, u), m = new URL(l.url, d).toString(); return f(l.clone({ url: m })); }
var f0 = [{ provide: Co, useClass: u0 }, { provide: zo, useValue: l0, multi: !0 }], Ci = "resolve:";
function Li(l) { let { hostname: f, protocol: t, port: a, pathname: s, search: i, hash: c } = new URL(l, Ci + "//"); return { hostname: f, protocol: t === Ci ? "" : t, port: a, pathname: s, search: i, hash: c }; }
var x0 = (() => { class l {
    _doc;
    href = "/";
    hostname = "/";
    protocol = "/";
    port = "/";
    pathname = "/";
    search = "";
    hash = "";
    _hashUpdate = new Wo;
    constructor(t, a) { this._doc = t; let s = a; if (s && s.url) {
        let i = Li(s.url);
        this.protocol = i.protocol, this.hostname = i.hostname, this.port = i.port, this.pathname = i.pathname, this.search = i.search, this.hash = i.hash, this.href = t.location.href;
    } }
    getBaseHrefFromDOM() { return Fa().getBaseHref(this._doc); }
    onPopState(t) { return () => { }; }
    onHashChange(t) { let a = this._hashUpdate.subscribe(t); return () => a.unsubscribe(); }
    get url() { return `${this.pathname}${this.search}${this.hash}`; }
    setHash(t, a) { if (this.hash === t)
        return; this.hash = t; let s = this.url; queueMicrotask(() => this._hashUpdate.next({ type: "hashchange", state: null, oldUrl: a, newUrl: s })); }
    replaceState(t, a, s) { let i = this.url, c = Li(s); this.pathname = c.pathname, this.search = c.search, this.setHash(c.hash, i); }
    pushState(t, a, s) { this.replaceState(t, a, s); }
    forward() { throw new Error("Not implemented"); }
    back() { throw new Error("Not implemented"); }
    getState() { }
    static \u0275fac = function (a) { return new (a || l)(ke.\u0275\u0275inject(St), ke.\u0275\u0275inject(zt, 8)); };
    static \u0275prov = ke.\u0275\u0275defineInjectable({ token: l, factory: l.\u0275fac });
} return l; })(), d0 = (() => { class l extends Vo {
    doc;
    constructor(t) { super(t), this.doc = t; }
    supports(t) { return !0; }
    addEventListener(t, a, s, i) { return Fa().onAndCancel(t, a, s, i); }
    static \u0275fac = function (a) { return new (a || l)(ke.\u0275\u0275inject(St)); };
    static \u0275prov = ke.\u0275\u0275defineInjectable({ token: l, factory: l.\u0275fac });
} return l; })();
var h0 = [{ provide: Za, useFactory: p0, multi: !0 }];
function en(l, f, t) { let a = l.createElement("script"); return a.textContent = f, t && a.setAttribute("nonce", t), a; }
function p0() { let l = At(St), f = At(Io), t = At(Oo), a = At(Tr); return () => { let s = "serializeTransferStateFactory"; ki(s); let i = t.toJson(); if (t.isEmpty)
    return; let c = en(l, i, null); c.id = f + "-state", c.setAttribute("type", "application/json"), l.body.appendChild(c), Mi(s); }; }
var ns = [{ provide: St, useFactory: b0, deps: [Tr] }, { provide: Ro, useValue: Lo }, { provide: Ho, useFactory: m0, multi: !0, deps: [Tr] }, { provide: Ai, useClass: x0, deps: [St, [Mo, zt]] }, { provide: $a, deps: [St] }];
function m0(l) { let f = Ja(l); return () => { f ? rs.makeCurrent() : Ii.makeCurrent(); }; }
var is = [{ provide: jo, multi: !0, useClass: d0 }], tn = [h0, is, f0, { provide: Po, useValue: null }, { provide: Uo, useValue: null }, { provide: Ao, useClass: ko }], g0 = (() => { class l {
    static \u0275fac = function (a) { return new (a || l); };
    static \u0275mod = ke.\u0275\u0275defineNgModule({ type: l });
    static \u0275inj = ke.\u0275\u0275defineInjector({ providers: tn, imports: [Go] });
} return l; })();
function b0(l) { let f = l.get(zt, null), t = Ja(l), a; return f && f.document ? a = typeof f.document == "string" ? t ? ts(f.document, f.url) : window.document : f.document : a = Fa().createHtmlDocument(), qo(a), a; }
function ss(l) { let f = typeof ngServerMode > "u"; f && (globalThis.ngServerMode = !0); let t = Fo(Bo, "server", ns)(l); return f && t.onDestroy(() => { globalThis.ngServerMode = void 0; }), t; }
import { makeEnvironmentProviders as v0, InjectionToken as E0, ApplicationRef as _0, \u0275startMeasuring as ft, \u0275stopMeasuring as xt, \u0275IS_HYDRATION_DOM_REUSE_ENABLED as T0, \u0275annotateForHydration as y0, CSP_NONCE as w0, APP_ID as S0, \u0275SSR_CONTENT_INTEGRITY_MARKER as N0, Renderer2 as D0, Version as C0 } from "@angular/core";
import "@angular/common";
import "@angular/platform-browser";
import "@angular/common/http";
import "rxjs";
function J0() { return typeof ngServerMode > "u" && (globalThis.ngServerMode = !0), v0([...tn]); }
var L0 = "ng-event-dispatch-contract";
function cs(l) { let f = l.platformProviders ?? [], t = "createServerPlatform"; ft(t); let a = ss([{ provide: zt, useValue: { document: l.document, url: l.url } }, f]); return xt(t), a; }
function us(l) { return l.getElementById(L0); }
function os(l) { us(l)?.remove(); }
function A0(l, f) { let t = "prepareForHydration"; ft(t); let a = f.injector, s = l.getDocument(); if (!a.get(T0, !1)) {
    os(s);
    return;
} k0(s); let i = y0(f, s); i.regular.size || i.capture.size ? I0(a.get(S0), s, i, a.get(w0, null)) : os(s), xt(t); }
function k0(l) { let f = l.createComment(N0); l.body.firstChild ? l.body.insertBefore(f, l.body.firstChild) : l.body.append(f); }
function M0(l) { let f = l.injector, t = R0(f.get(O0, xs)); l.components.forEach(a => { let s = a.injector.get(D0), i = a.location.nativeElement; i && s.setAttribute(i, "ng-server-context", t); }); }
function I0(l, f, t, a) { let s = "insertEventRecordScript"; ft(s); let { regular: i, capture: c } = t, u = us(f); if (u) {
    let x = `window.__jsaction_bootstrap(document.body,"${l}",${JSON.stringify(Array.from(i))},${JSON.stringify(Array.from(c))});`, d = en(f, x, a);
    u.after(d);
} xt(s); }
function ls(l, f) { return Lt(this, null, function* () { let t = l.injector.get($a); A0(t, f), M0(f); let s = f.injector.get(Za, null); if (s) {
    let i = [];
    for (let c of s)
        try {
            let u = c();
            u && i.push(u);
        }
        catch (u) {
            console.warn("Ignoring BEFORE_APP_SERIALIZED Exception: ", u);
        }
    if (i.length)
        for (let c of yield Promise.allSettled(i))
            c.status === "rejected" && console.warn("Ignoring BEFORE_APP_SERIALIZED Exception: ", c.reason);
} return t.renderToString(); }); }
function fs(l) { return new Promise(f => { setTimeout(() => { l.destroy(), f(); }, 0); }); }
var xs = "other", O0 = new E0("SERVER_CONTEXT");
function R0(l) { let f = l.replace(/[^a-zA-Z0-9\-]/g, ""); return f.length > 0 ? f : xs; }
function ec(l, f) { return Lt(this, null, function* () { let { document: t, url: a, extraProviders: s } = f, i = cs({ document: t, url: a, platformProviders: s }); try {
    let u = (yield i.bootstrapModule(l)).injector.get(_0), x = "whenStable";
    return ft(x), yield u.whenStable(), xt(x), yield ls(i, u);
}
finally {
    yield fs(i);
} }); }
function tc(l, f) { return Lt(this, null, function* () { let t = "renderApplication", a = "bootstrap", s = "_render"; ft(t); let i = cs(f); try {
    ft(a);
    let c = yield l({ platformRef: i });
    xt(a), ft(s);
    let u = "whenStable";
    ft(u), yield c.whenStable(), xt(u);
    let x = yield ls(i, c);
    return xt(s), x;
}
finally {
    yield fs(i), xt(t);
} }); }
var rc = new C0("20.3.18");
export { Za as BEFORE_APP_SERIALIZED, zt as INITIAL_CONFIG, $a as PlatformState, g0 as ServerModule, rc as VERSION, ss as platformServer, J0 as provideServerRendering, tc as renderApplication, ec as renderModule, rs as \u0275DominoAdapter, as as \u0275ENABLE_DOM_EMULATION, ns as \u0275INTERNAL_SERVER_PLATFORM_PROVIDERS, O0 as \u0275SERVER_CONTEXT, is as \u0275SERVER_RENDER_PROVIDERS, ls as \u0275renderInternal };
/*! Bundled license information:

@angular/platform-server/fesm2022/server.mjs:
@angular/platform-server/fesm2022/platform-server.mjs:
  (**
   * @license Angular v20.3.18
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
