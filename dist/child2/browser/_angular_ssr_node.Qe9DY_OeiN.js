import { a as h, c as P } from "@nf-internal/chunk-UK7FSDAC";
import { a as f, b as g, g as c } from "@nf-internal/chunk-BHG4M34P";
import { renderApplication as S, renderModule as H, \u0275SERVER_CONTEXT as A } from "@angular/platform-server";
import * as u from "fs";
import { dirname as v, join as F, normalize as _, resolve as M } from "path";
import { URL as m, fileURLToPath as G } from "url";
import { \u0275InlineCriticalCssProcessor as T, AngularAppEngine as x } from "@angular/ssr";
import { readFile as O } from "fs/promises";
import { argv as $ } from "process";
function E() { let t = [], e = process.env.NG_ALLOWED_HOSTS; if (!e)
    return t; let r = e.split(","); for (let n of r) {
    let o = n.trim();
    o.length > 0 && t.push(o);
} return t; }
function b() { if (typeof Zone < "u")
    return; let t = globalThis; t.ngAttachNodeGlobalErrorHandlersCalled || (t.ngAttachNodeGlobalErrorHandlersCalled = !0, process.on("unhandledRejection", e => console.error("unhandledRejection", e)).on("uncaughtException", e => console.error("uncaughtException", e))); }
var p = class {
    resourceCache = new Map;
    process(e, r) { return c(this, null, function* () { return new T(o => c(this, null, function* () { let a = this.resourceCache.get(o); return a === void 0 && (a = yield O(o, "utf-8"), this.resourceCache.set(o, a)), a; }), r).process(e); }); }
}, w = "\u{1F170}\uFE0F";
function k() { let t = 0, e = []; for (let { name: r, duration: n } of performance.getEntriesByType("measure")) {
    if (!r.startsWith(w))
        continue;
    let o = r.slice(w.length + 1) + ":";
    o.length > t && (t = o.length), e.push([o, `${n.toFixed(1)}ms`]), performance.clearMeasures(r);
} console.log("********** Performance results **********"); for (let [r, n] of e) {
    let o = t - r.length + 5;
    console.log(r + " ".repeat(o) + n);
} console.log("*****************************************"); }
function L(t, e) { return c(this, null, function* () { let r = `${w}:${t}`, n = `start:${r}`, o = `end:${r}`; try {
    return performance.mark(n), yield e();
}
finally {
    performance.mark(o), performance.measure(r, n, o), performance.clearMarks(n), performance.clearMarks(o);
} }); }
function N(t, e) { return e(); }
var U = /ng-server-context=["']\w*\|?ssg\|?\w*["']/, R = class {
    options;
    templateCache = new Map;
    inlineCriticalCssProcessor = new p;
    pageIsSSG = new Map;
    allowedHosts;
    constructor(e) { this.options = e, this.allowedHosts = new Set([...E(), ...this.options?.allowedHosts ?? []]), b(); }
    render(e) {
        return c(this, null, function* () {
            let { url: r } = e;
            if (r && m.canParse(r)) {
                let s = new m(r);
                try {
                    P(s, this.allowedHosts);
                }
                catch (i) {
                    let l = this.allowedHosts.size > 0;
                    if (console.error(`ERROR: ${i.message}Please provide a list of allowed hosts in the "allowedHosts" option in the "CommonEngine" constructor.`, l ? "" : `
Falling back to client side rendering. This will become a 400 Bad Request in a future major version.`), !l) {
                        let d = e.document;
                        if (!d && e.documentFilePath && (d = e.document ?? (yield this.getDocument(e.documentFilePath))), d)
                            return d;
                    }
                    throw i;
                }
            }
            let n = this.options?.enablePerformanceProfiler, o = n ? L : N, a = yield o("Retrieve SSG Page", () => this.retrieveSSGPage(e));
            return a === void 0 && (a = yield o("Render Page", () => this.renderApplication(e)), e.inlineCriticalCss !== !1 && (a = yield o("Inline Critical CSS", () => this.inlineCriticalCss(a, e)))), n && k(), a;
        });
    }
    inlineCriticalCss(e, r) { let n = r.publicPath ?? (r.documentFilePath ? v(r.documentFilePath) : ""); return this.inlineCriticalCssProcessor.process(e, n); }
    retrieveSSGPage(e) { return c(this, null, function* () { let { publicPath: r, documentFilePath: n, url: o } = e; if (!r || !n || o === void 0)
        return; let { pathname: a } = new m(o, "resolve://"), s = F(r, a, "index.html"); if (this.pageIsSSG.get(s))
        return u.promises.readFile(s, "utf-8"); if (!s.startsWith(_(r)))
        return; if (s === M(n) || !(yield I(s))) {
        this.pageIsSSG.set(s, !1);
        return;
    } let i = yield u.promises.readFile(s, "utf-8"), l = U.test(i); return this.pageIsSSG.set(s, l), l ? i : void 0; }); }
    renderApplication(e) { return c(this, null, function* () { let r = this.options?.bootstrap ?? e.bootstrap; if (!r)
        throw new Error("A module or bootstrap option must be provided."); let n = [{ provide: A, useValue: "ssr" }, ...e.providers ?? [], ...this.options?.providers ?? []], o = e.document; !o && e.documentFilePath && (o = yield this.getDocument(e.documentFilePath)); let a = { url: e.url, document: o }; return q(r) ? S(r, f({ platformProviders: n }, a)) : H(r, f({ extraProviders: n }, a)); }); }
    getDocument(e) { return c(this, null, function* () { let r = this.templateCache.get(e); return r || (r = yield u.promises.readFile(e, "utf-8"), this.templateCache.set(e, r)), r; }); }
};
function I(t) { return c(this, null, function* () { try {
    return yield u.promises.access(t, u.constants.F_OK), !0;
}
catch {
    return !1;
} }); }
function q(t) { return typeof t == "function" && !("\u0275mod" in t); }
var D = new Set([":method", ":scheme", ":authority", ":path", ":status"]);
function W(t) { let { headers: e, method: r = "GET" } = t, n = r !== "GET" && r !== "HEAD", o = e.referer && URL.canParse(e.referer) ? e.referer : void 0; return new Request(B(t), { method: r, headers: j(e), body: n ? t : void 0, duplex: n ? "half" : void 0, referrer: o }); }
function j(t) { let e = new Headers; for (let [r, n] of Object.entries(t))
    if (!D.has(r)) {
        if (typeof n == "string")
            e.append(r, n);
        else if (Array.isArray(n))
            for (let o of n)
                e.append(r, o);
    } return e; }
function B(t) { let { headers: e, socket: r, url: n = "", originalUrl: o } = t, a = h(e["x-forwarded-proto"]) ?? ("encrypted" in r && r.encrypted ? "https" : "http"), s = h(e["x-forwarded-host"]) ?? e.host ?? e[":authority"]; if (Array.isArray(s))
    throw new Error("host value cannot be an array."); let i = s; if (!s?.includes(":")) {
    let l = h(e["x-forwarded-port"]);
    l && (i += `:${l}`);
} return new URL(`${a}://${i}${o ?? n}`); }
var y = class {
    angularAppEngine;
    constructor(e) { this.angularAppEngine = new x(g(f({}, e), { allowedHosts: [...E(), ...e?.allowedHosts ?? []] })), b(); }
    handle(e, r) { return c(this, null, function* () { let n = e instanceof Request ? e : W(e); return this.angularAppEngine.handle(n, r); }); }
};
function Y(t) { return t.__ng_node_request_handler__ = !0, t; }
function ee(t, e) { return c(this, null, function* () { let { status: r, headers: n, body: o } = t; e.statusCode = r; let a = !1; for (let [s, i] of n.entries())
    if (s === "set-cookie") {
        if (a)
            continue;
        e.setHeader(s, n.getSetCookie()), a = !0;
    }
    else
        e.setHeader(s, i); if ("flushHeaders" in e && e.flushHeaders(), !o) {
    e.end();
    return;
} try {
    let s = o.getReader();
    for (e.on("close", () => { s.cancel().catch(i => { console.error(`An error occurred while writing the response body for: ${e.req.url}.`, i); }); });;) {
        let { done: i, value: l } = yield s.read();
        if (i) {
            e.end();
            break;
        }
        e.write(l) === !1 && (yield new Promise(C => e.once("drain", C)));
    }
}
catch {
    e.end("Internal server error.");
} }); }
function re(t) { return t.startsWith("file:") && $[1] === G(t); }
export { y as AngularNodeAppEngine, R as CommonEngine, Y as createNodeRequestHandler, W as createWebRequestFromNodeRequest, re as isMainModule, ee as writeResponseToNodeResponse };
