var h = Object.defineProperty, p = Object.defineProperties, q = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyDescriptors, s = Object.getOwnPropertyNames, g = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var l = (a, b, c) => b in a ? h(a, b, { enumerable: !0, configurable: !0, writable: !0, value: c }) : a[b] = c, u = (a, b) => { for (var c in b ||= {})
    k.call(b, c) && l(a, c, b[c]); if (g)
    for (var c of g(b))
        m.call(b, c) && l(a, c, b[c]); return a; }, v = (a, b) => p(a, r(b));
var w = (a => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(a, { get: (b, c) => (typeof require < "u" ? require : b)[c] }) : a)(function (a) { if (typeof require < "u")
    return require.apply(this, arguments); throw Error('Dynamic require of "' + a + '" is not supported'); });
var x = (a, b) => { var c = {}; for (var d in a)
    k.call(a, d) && b.indexOf(d) < 0 && (c[d] = a[d]); if (a != null && g)
    for (var d of g(a))
        b.indexOf(d) < 0 && m.call(a, d) && (c[d] = a[d]); return c; };
var y = (a, b) => () => (a && (b = a(a = 0)), b);
var z = (a, b) => () => (b || a((b = { exports: {} }).exports, b), b.exports), A = (a, b) => { for (var c in b)
    h(a, c, { get: b[c], enumerable: !0 }); }, t = (a, b, c, d) => { if (b && typeof b == "object" || typeof b == "function")
    for (let e of s(b))
        !k.call(a, e) && e !== c && h(a, e, { get: () => b[e], enumerable: !(d = q(b, e)) || d.enumerable }); return a; };
var B = a => t(h({}, "__esModule", { value: !0 }), a);
var C = (a, b, c) => new Promise((d, e) => { var n = f => { try {
    i(c.next(f));
}
catch (j) {
    e(j);
} }, o = f => { try {
    i(c.throw(f));
}
catch (j) {
    e(j);
} }, i = f => f.done ? d(f.value) : Promise.resolve(f.value).then(n, o); i((c = c.apply(a, b)).next()); });
export { u as a, v as b, w as c, x as d, y as e, z as f, A as g, B as h, C as i };
