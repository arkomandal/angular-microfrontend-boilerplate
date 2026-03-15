import { a as F } from "@nf-internal/chunk-SOEXL22L";
import "@nf-internal/chunk-ICXNGLPY";
import "@nf-internal/chunk-BUL5WOS2";
import { b as N, t as G } from "@nf-internal/chunk-4TJQB64Q";
import "@nf-internal/chunk-VDCRBLM6";
function A(e) { switch (e.responseType) {
    case "json": return "response" in e ? e.response : JSON.parse(e.responseText);
    case "document": return e.responseXML;
    case "text":
    default: return "response" in e ? e.response : e.responseText;
} }
var T = class {
    constructor(t, n, c, d = "download_load") {
        this.originalEvent = t, this.xhr = n, this.request = c, this.type = d;
        let { status: u, responseType: y } = n;
        this.status = u ?? 0, this.responseType = y ?? "";
        let m = n.getAllResponseHeaders();
        this.responseHeaders = m ? m.split(`
`).reduce((E, w) => { let j = w.indexOf(": "); return E[w.slice(0, j)] = w.slice(j + 2), E; }, {}) : {}, this.response = A(n);
        let { loaded: l, total: p } = t;
        this.loaded = l, this.total = p;
    }
};
var x = N(e => function (n, c, d) { this.message = n, this.name = "AjaxError", this.xhr = c, this.request = d, this.status = c.status, this.responseType = c.responseType; let u; try {
    u = A(c);
}
catch {
    u = c.responseText;
} this.response = u; }), H = (() => { function e(t, n) { return x.call(this, "ajax timeout", t, n), this.name = "AjaxTimeoutError", this; } return e.prototype = Object.create(x.prototype), e; })();
function I(e, t) { return v({ method: "GET", url: e, headers: t }); }
function V(e, t, n) { return v({ method: "POST", url: e, body: t, headers: n }); }
function z(e, t) { return v({ method: "DELETE", url: e, headers: t }); }
function W(e, t, n) { return v({ method: "PUT", url: e, body: t, headers: n }); }
function K(e, t, n) { return v({ method: "PATCH", url: e, body: t, headers: n }); }
var Q = F(e => e.response);
function Y(e, t) { return Q(v({ method: "GET", url: e, headers: t })); }
var v = (() => { let e = t => ee(typeof t == "string" ? { url: t } : t); return e.get = I, e.post = V, e.delete = z, e.put = W, e.patch = K, e.getJSON = Y, e; })(), Z = "upload", J = "download", O = "loadstart", b = "progress", M = "load";
function ee(e) { return new G(t => { var n, c; let d = Object.assign({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, e), { queryParams: u, body: y, headers: m } = d, l = d.url; if (!l)
    throw new TypeError("url is required"); if (u) {
    let r;
    if (l.includes("?")) {
        let R = l.split("?");
        if (2 < R.length)
            throw new TypeError("invalid url");
        r = new URLSearchParams(R[1]), new URLSearchParams(u).forEach((L, g) => r.set(g, L)), l = R[0] + "?" + r;
    }
    else
        r = new URLSearchParams(u), l = l + "?" + r;
} let p = {}; if (m)
    for (let r in m)
        m.hasOwnProperty(r) && (p[r.toLowerCase()] = m[r]); let E = d.crossDomain; !E && !("x-requested-with" in p) && (p["x-requested-with"] = "XMLHttpRequest"); let { withCredentials: w, xsrfCookieName: j, xsrfHeaderName: _ } = d; if ((w || !E) && j && _) {
    let r = (c = (n = document?.cookie.match(new RegExp(`(^|;\\s*)(${j})=([^;]*)`))) === null || n === void 0 ? void 0 : n.pop()) !== null && c !== void 0 ? c : "";
    r && (p[_] = r);
} let S = re(y, p), f = Object.assign(Object.assign({}, d), { url: l, headers: p, body: S }), o; o = e.createXHR ? e.createXHR() : new XMLHttpRequest; {
    let { progressSubscriber: r, includeDownloadProgress: R = !1, includeUploadProgress: L = !1 } = e, g = (s, a) => { o.addEventListener(s, () => { var i; let h = a(); (i = r?.error) === null || i === void 0 || i.call(r, h), t.error(h); }); };
    g("timeout", () => new H(o, f)), g("abort", () => new x("aborted", o, f));
    let C = (s, a) => new T(a, o, f, `${s}_${a.type}`), U = (s, a, i) => { s.addEventListener(a, h => { t.next(C(i, h)); }); };
    L && [O, b, M].forEach(s => U(o.upload, s, Z)), r && [O, b].forEach(s => o.upload.addEventListener(s, a => { var i; return (i = r?.next) === null || i === void 0 ? void 0 : i.call(r, a); })), R && [O, b].forEach(s => U(o, s, J));
    let B = s => { let a = "ajax error" + (s ? " " + s : ""); t.error(new x(a, o, f)); };
    o.addEventListener("error", s => { var a; (a = r?.error) === null || a === void 0 || a.call(r, s), B(); }), o.addEventListener(M, s => { var a, i; let { status: h } = o; if (h < 400) {
        (a = r?.complete) === null || a === void 0 || a.call(r);
        let k;
        try {
            k = C(J, s);
        }
        catch ($) {
            t.error($);
            return;
        }
        t.next(k), t.complete();
    }
    else
        (i = r?.error) === null || i === void 0 || i.call(r, s), B(h); });
} let { user: X, method: q, async: P } = f; X ? o.open(q, l, P, X, f.password) : o.open(q, l, P), P && (o.timeout = f.timeout, o.responseType = f.responseType), "withCredentials" in o && (o.withCredentials = f.withCredentials); for (let r in p)
    p.hasOwnProperty(r) && o.setRequestHeader(r, p[r]); return S ? o.send(S) : o.send(), () => { o && o.readyState !== 4 && o.abort(); }; }); }
function re(e, t) { var n; if (!e || typeof e == "string" || ie(e) || ce(e) || oe(e) || ne(e) || se(e) || ue(e))
    return e; if (ae(e))
    return e.buffer; if (typeof e == "object")
    return t["content-type"] = (n = t["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(e); throw new TypeError("Unknown body type"); }
var te = Object.prototype.toString;
function D(e, t) { return te.call(e) === `[object ${t}]`; }
function oe(e) { return D(e, "ArrayBuffer"); }
function ne(e) { return D(e, "File"); }
function se(e) { return D(e, "Blob"); }
function ae(e) { return typeof ArrayBuffer < "u" && ArrayBuffer.isView(e); }
function ie(e) { return typeof FormData < "u" && e instanceof FormData; }
function ce(e) { return typeof URLSearchParams < "u" && e instanceof URLSearchParams; }
function ue(e) { return typeof ReadableStream < "u" && e instanceof ReadableStream; }
export { x as AjaxError, T as AjaxResponse, H as AjaxTimeoutError, v as ajax };
