import { a as t, i as s, q as l, t as i } from "@nf-internal/chunk-4TJQB64Q";
var d = r => r && typeof r.length == "number" && typeof r != "function";
function y(r) { return t(r?.then); }
function u(r) { return t(r[l]); }
function p(r) { return Symbol.asyncIterator && t(r?.[Symbol.asyncIterator]); }
function b(r) { return new TypeError(`You provided ${r !== null && typeof r == "object" ? "an invalid object" : `'${r}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`); }
function h() { return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator; }
var v = h();
function x(r) { return t(r?.[v]); }
import { __asyncGenerator as w, __await as f } from "tslib";
function _(r) { return w(this, arguments, function* () { let o = r.getReader(); try {
    for (;;) {
        let { value: n, done: a } = yield f(o.read());
        if (a)
            return yield f(void 0);
        yield yield f(n);
    }
}
finally {
    o.releaseLock();
} }); }
function I(r) { return t(r?.getReader); }
import { __asyncValues as A, __awaiter as k } from "tslib";
function ar(r) { if (r instanceof i)
    return r; if (r != null) {
    if (u(r))
        return L(r);
    if (d(r))
        return F(r);
    if (y(r))
        return O(r);
    if (p(r))
        return S(r);
    if (x(r))
        return T(r);
    if (I(r))
        return g(r);
} throw b(r); }
function L(r) { return new i(e => { let o = r[l](); if (t(o.subscribe))
    return o.subscribe(e); throw new TypeError("Provided object does not correctly implement Symbol.observable"); }); }
function F(r) { return new i(e => { for (let o = 0; o < r.length && !e.closed; o++)
    e.next(r[o]); e.complete(); }); }
function O(r) { return new i(e => { r.then(o => { e.closed || (e.next(o), e.complete()); }, o => e.error(o)).then(null, s); }); }
function T(r) { return new i(e => { for (let o of r)
    if (e.next(o), e.closed)
        return; e.complete(); }); }
function S(r) { return new i(e => { R(r, e).catch(o => e.error(o)); }); }
function g(r) { return S(_(r)); }
function R(r, e) { var o, n, a, c; return k(this, void 0, void 0, function* () { try {
    for (o = A(r); n = yield o.next(), !n.done;) {
        let m = n.value;
        if (e.next(m), e.closed)
            return;
    }
}
catch (m) {
    a = { error: m };
}
finally {
    try {
        n && !n.done && (c = o.return) && (yield c.call(o));
    }
    finally {
        if (a)
            throw a.error;
    }
} e.complete(); }); }
export { d as a, y as b, u as c, p as d, b as e, v as f, x as g, _ as h, I as i, ar as j };
