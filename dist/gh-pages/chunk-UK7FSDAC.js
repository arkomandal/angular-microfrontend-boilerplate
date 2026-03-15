var u = new Set(["host", "x-forwarded-host"]), R = /^\d+$/, p = /^https?$/i, g = /^[a-z0-9.:-]+$/i, v = /^[/\\]{2}|(?:^|[/\\])\.\.?(?:[/\\]|$)/;
function d(t) { return t?.toString().split(",", 1)[0]?.trim(); }
function A(t, r) { _(t), m(new URL(t.url), r); }
function m(t, r) { let { hostname: e } = t; if (!f(e, r))
    throw new Error(`URL with hostname "${e}" is not allowed.`); }
function L(t, r) { let e, n = new Promise(s => { e = s; }), a = new Request(t.clone(), { signal: t.signal }), o = a.headers, c = o.get; o.get = function (s) { let i = c.call(o, s); return i && (l(s, i, r, e), i); }; let w = o.values; o.values = function () { for (let s of u)
    l(s, c.call(o, s), r, e); return w.call(o); }; let h = o.entries; return o.entries = function () { let s = h.call(o); return { next() { let i = s.next(); if (!i.done) {
        let [E, x] = i.value;
        l(E, x, r, e);
    } return i; }, [Symbol.iterator]() { return this; } }; }, o[Symbol.iterator] = o.entries, { request: a, onError: n }; }
function l(t, r, e, n) { if (r && u.has(t.toLowerCase()))
    try {
        H(t, r, e);
    }
    catch (a) {
        throw n(a), a;
    } }
function H(t, r, e) { let n = d(r); if (!n)
    return; let a = `http://${n}`; if (!URL.canParse(a))
    throw new Error(`Header "${t}" contains an invalid value and cannot be parsed.`); let { hostname: o } = new URL(a); if (!f(o, e))
    throw new Error(`Header "${t}" with value "${n}" is not allowed.`); }
function f(t, r) { if (r.has(t))
    return !0; for (let e of r) {
    if (!e.startsWith("*."))
        continue;
    let n = e.slice(1);
    if (t.endsWith(n))
        return !0;
} return !1; }
function _(t) { let r = t.headers; for (let o of u) {
    let c = d(r.get(o));
    if (c && !g.test(c))
        throw new Error(`Header "${o}" contains characters that are not allowed.`);
} let e = d(r.get("x-forwarded-port")); if (e && !R.test(e))
    throw new Error('Header "x-forwarded-port" must be a numeric value.'); let n = d(r.get("x-forwarded-proto")); if (n && !p.test(n))
    throw new Error('Header "x-forwarded-proto" must be either "http" or "https".'); let a = d(r.get("x-forwarded-prefix")); if (a && v.test(a))
    throw new Error('Header "x-forwarded-prefix" must not start with multiple "/" or "\\" or contain ".", ".." path segments.'); }
export { d as a, A as b, m as c, L as d };
