import { b as m, d as u } from "@nf-internal/chunk-XWZ5U5LX";
import { e as a } from "@nf-internal/chunk-4TJQB64Q";
var w = (() => { class i extends u {
    constructor(t = o, r = 1 / 0) { super(t, () => this.frame), this.maxFrames = r, this.frame = 0, this.index = -1; }
    flush() { let { actions: t, maxFrames: r } = this, s, n; for (; (n = t[0]) && n.delay <= r && (t.shift(), this.frame = n.delay, !(s = n.execute(n.state, n.delay)));)
        ; if (s) {
        for (; n = t.shift();)
            n.unsubscribe();
        throw s;
    } }
} return i.frameTimeFactor = 10, i; })(), o = class i extends m {
    constructor(e, t, r = e.index += 1) { super(e, t), this.scheduler = e, this.work = t, this.index = r, this.active = !0, this.index = e.index = r; }
    schedule(e, t = 0) { if (Number.isFinite(t)) {
        if (!this.id)
            return super.schedule(e, t);
        this.active = !1;
        let r = new i(this.scheduler, this.work);
        return this.add(r), r.schedule(e, t);
    }
    else
        return a.EMPTY; }
    requestAsyncId(e, t, r = 0) { this.delay = e.frame + r; let { actions: s } = e; return s.push(this), s.sort(i.sortActions), 1; }
    recycleAsyncId(e, t, r = 0) { }
    _execute(e, t) { if (this.active === !0)
        return super._execute(e, t); }
    static sortActions(e, t) { return e.delay === t.delay ? e.index === t.index ? 0 : e.index > t.index ? 1 : -1 : e.delay > t.delay ? 1 : -1; }
};
var x = { now() { return (x.delegate || performance).now(); }, delegate: void 0 };
var d = { schedule(i) { let e = requestAnimationFrame, t = cancelAnimationFrame, { delegate: r } = d; r && (e = r.requestAnimationFrame, t = r.cancelAnimationFrame); let s = e(n => { t = void 0, i(n); }); return new a(() => t?.(s)); }, requestAnimationFrame(...i) { let { delegate: e } = d; return (e?.requestAnimationFrame || requestAnimationFrame)(...i); }, cancelAnimationFrame(...i) { let { delegate: e } = d; return (e?.cancelAnimationFrame || cancelAnimationFrame)(...i); }, delegate: void 0 };
var v = 1, c, l = {};
function f(i) { return i in l ? (delete l[i], !0) : !1; }
var h = { setImmediate(i) { let e = v++; return l[e] = !0, c || (c = Promise.resolve()), c.then(() => f(e) && i()), e; }, clearImmediate(i) { f(i); } };
var { setImmediate: A, clearImmediate: F } = h, p = { setImmediate(...i) { let { delegate: e } = p; return (e?.setImmediate || A)(...i); }, clearImmediate(i) { let { delegate: e } = p; return (e?.clearImmediate || F)(i); }, delegate: void 0 };
export { x as a, d as b, p as c, w as d, o as e };
