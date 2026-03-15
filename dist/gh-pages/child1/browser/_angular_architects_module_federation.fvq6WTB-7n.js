import { a as y, b as p, c as k, e as N, f as P, g as R, h as j, i as s } from "@nf-internal/chunk-VDCRBLM6";
var x = {};
R(x, { getManifest: () => C, initFederation: () => z, loadManifest: () => _, loadRemoteEntry: () => l, loadRemoteModule: () => v, setManifest: () => M });
function S(e, t) { return s(this, null, function* () { return (yield u[e].get(t))(); }); }
function E(e, t) { return s(this, null, function* () { return d[t] || (m || (yield __webpack_init_sharing__("default"), m = !0), yield e.init(__webpack_share_scopes__.default), d[t] = !0), e; }); }
function l(e, t) { return s(this, null, function* () { if (typeof e == "string")
    return yield w(e, t); if (e.type === "script") {
    let o = e;
    return yield w(o.remoteEntry, o.remoteName);
}
else
    e.type === "module" && (yield q(e.remoteEntry)); }); }
function q(e) { return s(this, null, function* () { return u[e] ? Promise.resolve() : yield import(e).then(t => { E(t, e), u[e] = t; }); }); }
function w(e, t) { return s(this, null, function* () { return new Promise((o, i) => { if (u[t]) {
    o();
    return;
} let r = document.createElement("script"); r.src = e, r.onerror = i, r.onload = () => { let n = window[t]; E(n, t), u[t] = n, o(); }, document.body.appendChild(r); }); }); }
function v(e, t) { return s(this, null, function* () { let o, i, r, n; if (typeof e == "string" ? n = { type: "manifest", remoteName: e, exposedModule: t } : n = e, !n.type) {
    let a = Object.keys(c).length > 0;
    n.type = a ? "manifest" : "script";
} if (n.type === "manifest") {
    let a = c[n.remoteName];
    if (!a)
        throw new Error("Manifest does not contain " + n.remoteName);
    n = { type: a.type, exposedModule: n.exposedModule, remoteEntry: a.remoteEntry, remoteName: a.type === "script" ? n.remoteName : void 0 }, r = a.remoteEntry;
}
else
    r = n.remoteEntry; return n.type === "script" ? (o = { type: "script", remoteEntry: n.remoteEntry, remoteName: n.remoteName }, i = n.remoteName) : n.type === "module" && (o = { type: "module", remoteEntry: n.remoteEntry }, i = n.remoteEntry), r && (yield l(o)), yield S(i, n.exposedModule); }); }
function M(e, t = !1) { return s(this, null, function* () { c = h(e), t || (yield g()); }); }
function C() { return c; }
function z(e, t = !1) { return s(this, null, function* () { return typeof e == "string" ? _(e, t) : M(e, t); }); }
function _(e, t = !1) { return s(this, null, function* () { let o = yield fetch(e); if (!o.ok)
    throw Error("could not load configFile: " + e); c = h(yield o.json()), t || (yield g()); }); }
function h(e) { let t = {}; for (let o in e) {
    let i = e[o], r;
    typeof i == "string" ? r = { remoteEntry: i, type: "module" } : r = p(y({}, i), { type: i.type || "module" }), t[o] = r;
} return t; }
function g() { return s(this, null, function* () { let e = []; for (let t in c) {
    let o = c[t];
    o.type === "module" ? e.push(l({ type: "module", remoteEntry: o.remoteEntry })) : e.push(l({ type: "script", remoteEntry: o.remoteEntry, remoteName: t }));
} yield Promise.all(e); }); }
var c, u, d, m, b = N(() => { c = {}, u = {}, d = {}, m = !1; });
var F = P(f => { Object.defineProperty(f, "__esModule", { value: !0 }); var D = k("tslib"); D.__exportStar((b(), j(x)), f); });
export default F();
