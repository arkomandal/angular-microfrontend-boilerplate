import { a as N, b as D, c as C, d as R, e as U } from "@nf-internal/chunk-2CYE7VDY";
import { a as B, u as A } from "@nf-internal/chunk-XWZ5U5LX";
import "@nf-internal/chunk-ICXNGLPY";
import "@nf-internal/chunk-5VUD2K26";
import "@nf-internal/chunk-BUL5WOS2";
import { b as z, d as q } from "@nf-internal/chunk-3SAWXQOS";
import { e as x, h as L, k, l as O, m as I, t as M } from "@nf-internal/chunk-4TJQB64Q";
import "@nf-internal/chunk-VDCRBLM6";
var g = class {
    constructor(l, t = 1 / 0) { this.subscribedFrame = l, this.unsubscribedFrame = t; }
};
var F = class {
    constructor() { this.subscriptions = []; }
    logSubscribedFrame() { return this.subscriptions.push(new g(this.scheduler.now())), this.subscriptions.length - 1; }
    logUnsubscribedFrame(l) { let t = this.subscriptions, e = t[l]; t[l] = new g(e.subscribedFrame, this.scheduler.now()); }
};
function j(f, l) { for (let t = 0, e = l.length; t < e; t++) {
    let s = l[t], i = Object.getOwnPropertyNames(s.prototype);
    for (let r = 0, c = i.length; r < c; r++) {
        let o = i[r];
        f.prototype[o] = s.prototype[o];
    }
} }
var y = class extends M {
    constructor(l, t) { super(function (e) { let s = this, i = s.logSubscribedFrame(), r = new x; return r.add(new x(() => { s.logUnsubscribedFrame(i); })), s.scheduleMessages(e), r; }), this.messages = l, this.subscriptions = [], this.scheduler = t; }
    scheduleMessages(l) { let t = this.messages.length; for (let e = 0; e < t; e++) {
        let s = this.messages[e];
        l.add(this.scheduler.schedule(i => { let { message: { notification: r }, subscriber: c } = i; A(r, c); }, s.frame, { message: s, subscriber: l }));
    } }
};
j(y, [F]);
var T = class extends z {
    constructor(l, t) { super(), this.messages = l, this.subscriptions = [], this.scheduler = t; }
    _subscribe(l) { let t = this, e = t.logSubscribedFrame(), s = new x; return s.add(new x(() => { t.logUnsubscribedFrame(e); })), s.add(super._subscribe(l)), s; }
    setup() { let l = this, t = l.messages.length; for (let e = 0; e < t; e++)
        (() => { let { notification: s, frame: i } = l.messages[e]; l.scheduler.schedule(() => { A(s, l); }, i); })(); }
};
j(T, [F]);
var $ = 750, K = (() => { class f extends R {
    constructor(t) { super(U, $), this.assertDeepEqual = t, this.hotObservables = [], this.coldObservables = [], this.flushTests = [], this.runMode = !1; }
    createTime(t) { let e = this.runMode ? t.trim().indexOf("|") : t.indexOf("|"); if (e === -1)
        throw new Error('marble diagram for time should have a completion marker "|"'); return e * f.frameTimeFactor; }
    createColdObservable(t, e, s) { if (t.indexOf("^") !== -1)
        throw new Error('cold observable cannot have subscription offset "^"'); if (t.indexOf("!") !== -1)
        throw new Error('cold observable cannot have unsubscription marker "!"'); let i = f.parseMarbles(t, e, s, void 0, this.runMode), r = new y(i, this); return this.coldObservables.push(r), r; }
    createHotObservable(t, e, s) { if (t.indexOf("!") !== -1)
        throw new Error('hot observable cannot have unsubscription marker "!"'); let i = f.parseMarbles(t, e, s, void 0, this.runMode), r = new T(i, this); return this.hotObservables.push(r), r; }
    materializeInnerObservable(t, e) { let s = []; return t.subscribe({ next: i => { s.push({ frame: this.frame - e, notification: I(i) }); }, error: i => { s.push({ frame: this.frame - e, notification: O(i) }); }, complete: () => { s.push({ frame: this.frame - e, notification: k }); } }), s; }
    expectObservable(t, e = null) { let s = [], i = { actual: s, ready: !1 }, r = f.parseMarblesAsSubscriptions(e, this.runMode), c = r.subscribedFrame === 1 / 0 ? 0 : r.subscribedFrame, o = r.unsubscribedFrame, n; this.schedule(() => { n = t.subscribe({ next: m => { let h = m instanceof M ? this.materializeInnerObservable(m, this.frame) : m; s.push({ frame: this.frame, notification: I(h) }); }, error: m => { s.push({ frame: this.frame, notification: O(m) }); }, complete: () => { s.push({ frame: this.frame, notification: k }); } }); }, c), o !== 1 / 0 && this.schedule(() => n.unsubscribe(), o), this.flushTests.push(i); let { runMode: u } = this; return { toBe(m, h, d) { i.ready = !0, i.expected = f.parseMarbles(m, h, d, !0, u); }, toEqual: m => { i.ready = !0, i.expected = [], this.schedule(() => { n = m.subscribe({ next: h => { let d = h instanceof M ? this.materializeInnerObservable(h, this.frame) : h; i.expected.push({ frame: this.frame, notification: I(d) }); }, error: h => { i.expected.push({ frame: this.frame, notification: O(h) }); }, complete: () => { i.expected.push({ frame: this.frame, notification: k }); } }); }, c); } }; }
    expectSubscriptions(t) { let e = { actual: t, ready: !1 }; this.flushTests.push(e); let { runMode: s } = this; return { toBe(i) { let r = typeof i == "string" ? [i] : i; e.ready = !0, e.expected = r.map(c => f.parseMarblesAsSubscriptions(c, s)).filter(c => c.subscribedFrame !== 1 / 0); } }; }
    flush() { let t = this.hotObservables; for (; t.length > 0;)
        t.shift().setup(); super.flush(), this.flushTests = this.flushTests.filter(e => e.ready ? (this.assertDeepEqual(e.actual, e.expected), !1) : !0); }
    static parseMarblesAsSubscriptions(t, e = !1) { if (typeof t != "string")
        return new g(1 / 0); let s = [...t], i = s.length, r = -1, c = 1 / 0, o = 1 / 0, n = 0; for (let u = 0; u < i; u++) {
        let m = n, h = a => { m += a * this.frameTimeFactor; }, d = s[u];
        switch (d) {
            case " ":
                e || h(1);
                break;
            case "-":
                h(1);
                break;
            case "(":
                r = n, h(1);
                break;
            case ")":
                r = -1, h(1);
                break;
            case "^":
                if (c !== 1 / 0)
                    throw new Error("found a second subscription point '^' in a subscription marble diagram. There can only be one.");
                c = r > -1 ? r : n, h(1);
                break;
            case "!":
                if (o !== 1 / 0)
                    throw new Error("found a second unsubscription point '!' in a subscription marble diagram. There can only be one.");
                o = r > -1 ? r : n;
                break;
            default:
                if (e && d.match(/^[0-9]$/) && (u === 0 || s[u - 1] === " ")) {
                    let p = s.slice(u).join("").match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                    if (p) {
                        u += p[0].length - 1;
                        let b = parseFloat(p[1]), v = p[2], w;
                        switch (v) {
                            case "ms":
                                w = b;
                                break;
                            case "s":
                                w = b * 1e3;
                                break;
                            case "m":
                                w = b * 1e3 * 60;
                                break;
                            default: break;
                        }
                        h(w / this.frameTimeFactor);
                        break;
                    }
                }
                throw new Error("there can only be '^' and '!' markers in a subscription marble diagram. Found instead '" + d + "'.");
        }
        n = m;
    } return o < 0 ? new g(c) : new g(c, o); }
    static parseMarbles(t, e, s, i = !1, r = !1) { if (t.indexOf("!") !== -1)
        throw new Error('conventional marble diagrams cannot have the unsubscription marker "!"'); let c = [...t], o = c.length, n = [], u = r ? t.replace(/^[ ]+/, "").indexOf("^") : t.indexOf("^"), m = u === -1 ? 0 : u * -this.frameTimeFactor, h = typeof e != "object" ? a => a : a => i && e[a] instanceof y ? e[a].messages : e[a], d = -1; for (let a = 0; a < o; a++) {
        let p = m, b = H => { p += H * this.frameTimeFactor; }, v, w = c[a];
        switch (w) {
            case " ":
                r || b(1);
                break;
            case "-":
                b(1);
                break;
            case "(":
                d = m, b(1);
                break;
            case ")":
                d = -1, b(1);
                break;
            case "|":
                v = k, b(1);
                break;
            case "^":
                b(1);
                break;
            case "#":
                v = O(s || "error"), b(1);
                break;
            default:
                if (r && w.match(/^[0-9]$/) && (a === 0 || c[a - 1] === " ")) {
                    let E = c.slice(a).join("").match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                    if (E) {
                        a += E[0].length - 1;
                        let P = parseFloat(E[1]), V = E[2], S;
                        switch (V) {
                            case "ms":
                                S = P;
                                break;
                            case "s":
                                S = P * 1e3;
                                break;
                            case "m":
                                S = P * 1e3 * 60;
                                break;
                            default: break;
                        }
                        b(S / this.frameTimeFactor);
                        break;
                    }
                }
                v = I(h(w)), b(1);
                break;
        }
        v && n.push({ frame: d > -1 ? d : m, notification: v }), m = p;
    } return n; }
    createAnimator() { if (!this.runMode)
        throw new Error("animate() must only be used in run mode"); let t = 0, e; return { animate: r => { if (e)
            throw new Error("animate() must not be called more than once within run()"); if (/[|#]/.test(r))
            throw new Error("animate() must not complete or error"); e = new Map; let c = f.parseMarbles(r, void 0, void 0, void 0, !0); for (let o of c)
            this.schedule(() => { let n = this.now(), u = Array.from(e.values()); e.clear(); for (let m of u)
                m(n); }, o.frame); }, delegate: { requestAnimationFrame(r) { if (!e)
                throw new Error("animate() was not called within run()"); let c = ++t; return e.set(c, r), c; }, cancelAnimationFrame(r) { if (!e)
                throw new Error("animate() was not called within run()"); e.delete(r); } } }; }
    createDelegates() { let t = 0, e = new Map, s = () => { let o = this.now(), u = Array.from(e.values()).filter(({ due: a }) => a <= o), m = u.filter(({ type: a }) => a === "immediate"); if (m.length > 0) {
        let { handle: a, handler: p } = m[0];
        e.delete(a), p();
        return;
    } let h = u.filter(({ type: a }) => a === "interval"); if (h.length > 0) {
        let a = h[0], { duration: p, handler: b } = a;
        a.due = o + p, a.subscription = this.schedule(s, p), b();
        return;
    } let d = u.filter(({ type: a }) => a === "timeout"); if (d.length > 0) {
        let { handle: a, handler: p } = d[0];
        e.delete(a), p();
        return;
    } throw new Error("Expected a due immediate or interval"); }; return { immediate: { setImmediate: o => { let n = ++t; return e.set(n, { due: this.now(), duration: 0, handle: n, handler: o, subscription: this.schedule(s, 0), type: "immediate" }), n; }, clearImmediate: o => { let n = e.get(o); n && (n.subscription.unsubscribe(), e.delete(o)); } }, interval: { setInterval: (o, n = 0) => { let u = ++t; return e.set(u, { due: this.now() + n, duration: n, handle: u, handler: o, subscription: this.schedule(s, n), type: "interval" }), u; }, clearInterval: o => { let n = e.get(o); n && (n.subscription.unsubscribe(), e.delete(o)); } }, timeout: { setTimeout: (o, n = 0) => { let u = ++t; return e.set(u, { due: this.now() + n, duration: n, handle: u, handler: o, subscription: this.schedule(s, n), type: "timeout" }), u; }, clearTimeout: o => { let n = e.get(o); n && (n.subscription.unsubscribe(), e.delete(o)); } } }; }
    run(t) { let e = f.frameTimeFactor, s = this.maxFrames; f.frameTimeFactor = 1, this.maxFrames = 1 / 0, this.runMode = !0; let i = this.createAnimator(), r = this.createDelegates(); D.delegate = i.delegate, q.delegate = this, C.delegate = r.immediate, B.delegate = r.interval, L.delegate = r.timeout, N.delegate = this; let c = { cold: this.createColdObservable.bind(this), hot: this.createHotObservable.bind(this), flush: this.flush.bind(this), time: this.createTime.bind(this), expectObservable: this.expectObservable.bind(this), expectSubscriptions: this.expectSubscriptions.bind(this), animate: i.animate }; try {
        let o = t(c);
        return this.flush(), o;
    }
    finally {
        f.frameTimeFactor = e, this.maxFrames = s, this.runMode = !1, D.delegate = void 0, q.delegate = void 0, C.delegate = void 0, B.delegate = void 0, L.delegate = void 0, N.delegate = void 0;
    } }
} return f.frameTimeFactor = 10, f; })();
export { K as TestScheduler };
