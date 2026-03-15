import { j as b } from "@nf-internal/chunk-5VUD2K26";
import { a as m } from "@nf-internal/chunk-BUL5WOS2";
import { t as s } from "@nf-internal/chunk-4TJQB64Q";
import "@nf-internal/chunk-VDCRBLM6";
import { __rest as g } from "tslib";
function h(d, a = {}) { let { selector: l } = a, c = g(a, ["selector"]); return new s(t => { let r = new AbortController, { signal: f } = r, o = !0, { signal: n } = c; if (n)
    if (n.aborted)
        r.abort();
    else {
        let e = () => { f.aborted || r.abort(); };
        n.addEventListener("abort", e), t.add(() => n.removeEventListener("abort", e));
    } let p = Object.assign(Object.assign({}, c), { signal: f }), i = e => { o = !1, t.error(e); }; return fetch(d, p).then(e => { l ? b(l(e)).subscribe(m(t, void 0, () => { o = !1, t.complete(); }, i)) : (o = !1, t.next(e), t.complete()); }).catch(i), () => { o && r.abort(); }; }); }
export { h as fromFetch };
