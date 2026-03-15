import { b as Ku, d as er } from "@nf-internal/chunk-UK7FSDAC";
import { a as _, b as U, d as ae, f as Ju, g as B, h as yt, i as Be, j as le, k as Yu } from "@nf-internal/chunk-BHG4M34P";
import { \u0275Console as Hu, ApplicationRef as ds, REQUEST as hs, InjectionToken as mo, provideEnvironmentInitializer as go, inject as xo, makeEnvironmentProviders as yo, \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP as wo, Compiler as So, createEnvironmentInjector as vo, EnvironmentInjector as Ao, runInInjectionContext as Eo, REQUEST_CONTEXT as Ro, RESPONSE_INIT as To, LOCALE_ID as Co } from "@angular/core";
import { platformServer as ps, INITIAL_CONFIG as bs, \u0275SERVER_CONTEXT as No, \u0275renderInternal as Po, provideServerRendering as ko } from "@angular/platform-server";
import { ActivatedRoute as Io, Router as ms, ROUTES as Oo, \u0275loadChildren as qo } from "@angular/router";
import { APP_BASE_HREF as gs, PlatformLocation as xs } from "@angular/common";
function ks(t) { throw new Error(`[unenv] ${t} is not implemented yet!`); }
function sn(t) { return Object.assign(() => { throw ks(t); }, { __unenv__: !0 }); }
var Is = sn("fs.writeFile");
var Os = sn("fs.readFile");
function an(t) { let e = function (...u) { let r = u.pop(); t().catch(n => r(n)).then(n => r(void 0, n)); }; return e.__promisify__ = t, e.native = e, e; }
var qs = an(Os), Ls = an(Is), _s = /^[A-Za-z]:\//;
function ce(t = "") { return t && t.replace(/\\/g, "/").replace(_s, e => e.toUpperCase()); }
var Ms = /^[/\\]{2}/, Ds = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/, on = /^[A-Za-z]:$/, tr = /^\/([A-Za-z]:)?$/, cn = "/", ln = ":", hu = function (t) { if (t.length === 0)
    return "."; t = ce(t); let e = t.match(Ms), u = he(t), r = t[t.length - 1] === "/"; return t = rt(t, !u), t.length === 0 ? u ? "/" : r ? "./" : "." : (r && (t += "/"), on.test(t) && (t += "/"), e ? u ? `//${t}` : `//./${t}` : u && !he(t) ? `/${t}` : t); }, fn = function (...t) { if (t.length === 0)
    return "."; let e; for (let u of t)
    u && u.length > 0 && (e === void 0 ? e = u : e += `/${u}`); return e === void 0 ? "." : hu(e.replace(/\/\/+/g, "/")); };
function Fs() { return typeof process < "u" && typeof process.cwd == "function" ? process.cwd().replace(/\\/g, "/") : "/"; }
var Pe = function (...t) { t = t.map(r => ce(r)); let e = "", u = !1; for (let r = t.length - 1; r >= -1 && !u; r--) {
    let n = r >= 0 ? t[r] : Fs();
    !n || n.length === 0 || (e = `${n}/${e}`, u = he(n));
} return e = rt(e, !u), u && !he(e) ? `/${e}` : e.length > 0 ? e : "."; };
function rt(t, e) { let u = "", r = 0, n = -1, s = 0, i = null; for (let o = 0; o <= t.length; ++o) {
    if (o < t.length)
        i = t[o];
    else {
        if (i === "/")
            break;
        i = "/";
    }
    if (i === "/") {
        if (!(n === o - 1 || s === 1))
            if (s === 2) {
                if (u.length < 2 || r !== 2 || u[u.length - 1] !== "." || u[u.length - 2] !== ".") {
                    if (u.length > 2) {
                        let d = u.lastIndexOf("/");
                        d === -1 ? (u = "", r = 0) : (u = u.slice(0, d), r = u.length - 1 - u.lastIndexOf("/")), n = o, s = 0;
                        continue;
                    }
                    else if (u.length > 0) {
                        u = "", r = 0, n = o, s = 0;
                        continue;
                    }
                }
                e && (u += u.length > 0 ? "/.." : "..", r = 2);
            }
            else
                u.length > 0 ? u += `/${t.slice(n + 1, o)}` : u = t.slice(n + 1, o), r = o - n - 1;
        n = o, s = 0;
    }
    else
        i === "." && s !== -1 ? ++s : s = -1;
} return u; }
var he = function (t) { return Ds.test(t); }, dn = function (t) { return ce(t); }, Bs = /.(\.[^./]+)$/, pu = function (t) { let e = Bs.exec(ce(t)); return e && e[1] || ""; }, hn = function (t, e) { let u = Pe(t).replace(tr, "$1").split("/"), r = Pe(e).replace(tr, "$1").split("/"); if (r[0][1] === ":" && u[0][1] === ":" && u[0] !== r[0])
    return r.join("/"); let n = [...u]; for (let s of n) {
    if (r[0] !== s)
        break;
    u.shift(), r.shift();
} return [...u.map(() => ".."), ...r].join("/"); }, bu = function (t) { let e = ce(t).replace(/\/$/, "").split("/").slice(0, -1); return e.length === 1 && on.test(e[0]) && (e[0] += "/"), e.join("/") || (he(t) ? "/" : "."); }, pn = function (t) { let e = [t.root, t.dir, t.base ?? t.name + t.ext].filter(Boolean); return ce(t.root ? Pe(...e) : e.join("/")); }, mu = function (t, e) { let u = ce(t).split("/").pop(); return e && u.endsWith(e) ? u.slice(0, -e.length) : u; }, bn = function (t) { let e = ce(t).split("/").shift() || "/", u = mu(t), r = pu(u); return { root: e, dir: bu(t), base: u, ext: r, name: u.slice(0, u.length - r.length) }; }, $s = { __proto__: null, basename: mu, delimiter: ln, dirname: bu, extname: pu, format: pn, isAbsolute: he, join: fn, normalize: hu, normalizeString: rt, parse: bn, relative: hn, resolve: Pe, sep: cn, toNamespacedPath: dn }, Us = Object.freeze({ __proto__: null, basename: mu, default: $s, delimiter: ln, dirname: bu, extname: pu, format: pn, isAbsolute: he, join: fn, normalize: hu, normalizeString: rt, parse: bn, relative: hn, resolve: Pe, sep: cn, toNamespacedPath: dn }), pe = U(_({}, Us), { platform: "posix", posix: void 0, win32: void 0 });
pe.posix = pe;
pe.win32 = pe;
function nt(t) { return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t; }
function Vs(t) { if (Object.prototype.hasOwnProperty.call(t, "__esModule"))
    return t; var e = t.default; if (typeof e == "function") {
    var u = function r() { var n = !1; try {
        n = this instanceof r;
    }
    catch { } return n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments); };
    u.prototype = e.prototype;
}
else
    u = {}; return Object.defineProperty(u, "__esModule", { value: !0 }), Object.keys(t).forEach(function (r) { var n = Object.getOwnPropertyDescriptor(t, r); Object.defineProperty(u, r, n.get ? n : { enumerable: !0, get: function () { return t[r]; } }); }), u; }
var $e = { exports: {} }, ur;
function mn() { if (ur)
    return $e.exports; ur = 1; var t = String, e = function () { return { isColorSupported: !1, reset: t, bold: t, dim: t, italic: t, underline: t, inverse: t, hidden: t, strikethrough: t, black: t, red: t, green: t, yellow: t, blue: t, magenta: t, cyan: t, white: t, gray: t, bgBlack: t, bgRed: t, bgGreen: t, bgYellow: t, bgBlue: t, bgMagenta: t, bgCyan: t, bgWhite: t, blackBright: t, redBright: t, greenBright: t, yellowBright: t, blueBright: t, magentaBright: t, cyanBright: t, whiteBright: t, bgBlackBright: t, bgRedBright: t, bgGreenBright: t, bgYellowBright: t, bgBlueBright: t, bgMagentaBright: t, bgCyanBright: t, bgWhiteBright: t }; }; return $e.exports = e(), $e.exports.createColors = e, $e.exports; }
var zs = {}, js = Object.freeze({ __proto__: null, default: zs }), Y = Vs(js), wt, rr;
function gu() {
    if (rr)
        return wt;
    rr = 1;
    let t = mn(), e = Y;
    class u extends Error {
        constructor(n, s, i, o, d, f) { super(n), this.name = "CssSyntaxError", this.reason = n, d && (this.file = d), o && (this.source = o), f && (this.plugin = f), typeof s < "u" && typeof i < "u" && (typeof s == "number" ? (this.line = s, this.column = i) : (this.line = s.line, this.column = s.column, this.endLine = i.line, this.endColumn = i.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, u); }
        setMessage() { this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason; }
        showSourceCode(n) {
            if (!this.source)
                return "";
            let s = this.source;
            n == null && (n = t.isColorSupported);
            let i = p => p, o = p => p, d = p => p;
            if (n) {
                let { bold: p, gray: h, red: b } = t.createColors(!0);
                o = g => p(b(g)), i = g => h(g), e && (d = g => e(g));
            }
            let f = s.split(/\r?\n/), a = Math.max(this.line - 3, 0), l = Math.min(this.line + 2, f.length), c = String(l).length;
            return f.slice(a, l).map((p, h) => {
                let b = a + 1 + h, g = " " + (" " + b).slice(-c) + " | ";
                if (b === this.line) {
                    if (p.length > 160) {
                        let x = 20, y = Math.max(0, this.column - x), R = Math.max(this.column + x, this.endColumn + x), C = p.slice(y, R), v = i(g.replace(/\d/g, " ")) + p.slice(0, Math.min(this.column - 1, x - 1)).replace(/[^\t]/g, " ");
                        return o(">") + i(g) + d(C) + `
 ` + v + o("^");
                    }
                    let m = i(g.replace(/\d/g, " ")) + p.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                    return o(">") + i(g) + d(p) + `
 ` + m + o("^");
                }
                return " " + i(g) + d(p);
            }).join(`
`);
        }
        toString() {
            let n = this.showSourceCode();
            return n && (n = `

` + n + `
`), this.name + ": " + this.message + n;
        }
    }
    return wt = u, u.default = u, wt;
}
var St, nr;
function gn() {
    if (nr)
        return St;
    nr = 1;
    let t = { after: `
`, beforeClose: `
`, beforeComment: `
`, beforeDecl: `
`, beforeOpen: " ", beforeRule: `
`, colon: ": ", commentLeft: " ", commentRight: " ", emptyBody: "", indent: "    ", semicolon: !1 };
    function e(r) { return r[0].toUpperCase() + r.slice(1); }
    class u {
        constructor(n) { this.builder = n; }
        atrule(n, s) { let i = "@" + n.name, o = n.params ? this.rawValue(n, "params") : ""; if (typeof n.raws.afterName < "u" ? i += n.raws.afterName : o && (i += " "), n.nodes)
            this.block(n, i + o);
        else {
            let d = (n.raws.between || "") + (s ? ";" : "");
            this.builder(i + o + d, n);
        } }
        beforeAfter(n, s) {
            let i;
            n.type === "decl" ? i = this.raw(n, null, "beforeDecl") : n.type === "comment" ? i = this.raw(n, null, "beforeComment") : s === "before" ? i = this.raw(n, null, "beforeRule") : i = this.raw(n, null, "beforeClose");
            let o = n.parent, d = 0;
            for (; o && o.type !== "root";)
                d += 1, o = o.parent;
            if (i.includes(`
`)) {
                let f = this.raw(n, null, "indent");
                if (f.length)
                    for (let a = 0; a < d; a++)
                        i += f;
            }
            return i;
        }
        block(n, s) { let i = this.raw(n, "between", "beforeOpen"); this.builder(s + i + "{", n, "start"); let o; n.nodes && n.nodes.length ? (this.body(n), o = this.raw(n, "after")) : o = this.raw(n, "after", "emptyBody"), o && this.builder(o), this.builder("}", n, "end"); }
        body(n) { let s = n.nodes.length - 1; for (; s > 0 && n.nodes[s].type === "comment";)
            s -= 1; let i = this.raw(n, "semicolon"); for (let o = 0; o < n.nodes.length; o++) {
            let d = n.nodes[o], f = this.raw(d, "before");
            f && this.builder(f), this.stringify(d, s !== o || i);
        } }
        comment(n) { let s = this.raw(n, "left", "commentLeft"), i = this.raw(n, "right", "commentRight"); this.builder("/*" + s + n.text + i + "*/", n); }
        decl(n, s) { let i = this.raw(n, "between", "colon"), o = n.prop + i + this.rawValue(n, "value"); n.important && (o += n.raws.important || " !important"), s && (o += ";"), this.builder(o, n); }
        document(n) { this.body(n); }
        raw(n, s, i) { let o; if (i || (i = s), s && (o = n.raws[s], typeof o < "u"))
            return o; let d = n.parent; if (i === "before" && (!d || d.type === "root" && d.first === n || d && d.type === "document"))
            return ""; if (!d)
            return t[i]; let f = n.root(); if (f.rawCache || (f.rawCache = {}), typeof f.rawCache[i] < "u")
            return f.rawCache[i]; if (i === "before" || i === "after")
            return this.beforeAfter(n, i); {
            let a = "raw" + e(i);
            this[a] ? o = this[a](f, n) : f.walk(l => { if (o = l.raws[s], typeof o < "u")
                return !1; });
        } return typeof o > "u" && (o = t[i]), f.rawCache[i] = o, o; }
        rawBeforeClose(n) {
            let s;
            return n.walk(i => {
                if (i.nodes && i.nodes.length > 0 && typeof i.raws.after < "u")
                    return s = i.raws.after, s.includes(`
`) && (s = s.replace(/[^\n]+$/, "")), !1;
            }), s && (s = s.replace(/\S/g, "")), s;
        }
        rawBeforeComment(n, s) {
            let i;
            return n.walkComments(o => {
                if (typeof o.raws.before < "u")
                    return i = o.raws.before, i.includes(`
`) && (i = i.replace(/[^\n]+$/, "")), !1;
            }), typeof i > "u" ? i = this.raw(s, null, "beforeDecl") : i && (i = i.replace(/\S/g, "")), i;
        }
        rawBeforeDecl(n, s) {
            let i;
            return n.walkDecls(o => {
                if (typeof o.raws.before < "u")
                    return i = o.raws.before, i.includes(`
`) && (i = i.replace(/[^\n]+$/, "")), !1;
            }), typeof i > "u" ? i = this.raw(s, null, "beforeRule") : i && (i = i.replace(/\S/g, "")), i;
        }
        rawBeforeOpen(n) { let s; return n.walk(i => { if (i.type !== "decl" && (s = i.raws.between, typeof s < "u"))
            return !1; }), s; }
        rawBeforeRule(n) {
            let s;
            return n.walk(i => {
                if (i.nodes && (i.parent !== n || n.first !== i) && typeof i.raws.before < "u")
                    return s = i.raws.before, s.includes(`
`) && (s = s.replace(/[^\n]+$/, "")), !1;
            }), s && (s = s.replace(/\S/g, "")), s;
        }
        rawColon(n) { let s; return n.walkDecls(i => { if (typeof i.raws.between < "u")
            return s = i.raws.between.replace(/[^\s:]/g, ""), !1; }), s; }
        rawEmptyBody(n) { let s; return n.walk(i => { if (i.nodes && i.nodes.length === 0 && (s = i.raws.after, typeof s < "u"))
            return !1; }), s; }
        rawIndent(n) {
            if (n.raws.indent)
                return n.raws.indent;
            let s;
            return n.walk(i => {
                let o = i.parent;
                if (o && o !== n && o.parent && o.parent === n && typeof i.raws.before < "u") {
                    let d = i.raws.before.split(`
`);
                    return s = d[d.length - 1], s = s.replace(/\S/g, ""), !1;
                }
            }), s;
        }
        rawSemicolon(n) { let s; return n.walk(i => { if (i.nodes && i.nodes.length && i.last.type === "decl" && (s = i.raws.semicolon, typeof s < "u"))
            return !1; }), s; }
        rawValue(n, s) { let i = n[s], o = n.raws[s]; return o && o.value === i ? o.raw : i; }
        root(n) { this.body(n), n.raws.after && this.builder(n.raws.after); }
        rule(n) { this.block(n, this.rawValue(n, "selector")), n.raws.ownSemicolon && this.builder(n.raws.ownSemicolon, n, "end"); }
        stringify(n, s) { if (!this[n.type])
            throw new Error("Unknown AST node type " + n.type + ". Maybe you need to change PostCSS stringifier."); this[n.type](n, s); }
    }
    return St = u, u.default = u, St;
}
var vt, sr;
function st() { if (sr)
    return vt; sr = 1; let t = gn(); function e(u, r) { new t(r).stringify(u); } return vt = e, e.default = e, vt; }
var Ue = {}, ir;
function xu() { return ir || (ir = 1, Ue.isClean = Symbol("isClean"), Ue.my = Symbol("my")), Ue; }
var At, ar;
function it() {
    if (ar)
        return At;
    ar = 1;
    let t = gu(), e = gn(), u = st(), { isClean: r, my: n } = xu();
    function s(d, f) { let a = new d.constructor; for (let l in d) {
        if (!Object.prototype.hasOwnProperty.call(d, l) || l === "proxyCache")
            continue;
        let c = d[l], p = typeof c;
        l === "parent" && p === "object" ? f && (a[l] = f) : l === "source" ? a[l] = c : Array.isArray(c) ? a[l] = c.map(h => s(h, a)) : (p === "object" && c !== null && (c = s(c)), a[l] = c);
    } return a; }
    function i(d, f) {
        if (f && typeof f.offset < "u")
            return f.offset;
        let a = 1, l = 1, c = 0;
        for (let p = 0; p < d.length; p++) {
            if (l === f.line && a === f.column) {
                c = p;
                break;
            }
            d[p] === `
` ? (a = 1, l += 1) : a += 1;
        }
        return c;
    }
    class o {
        get proxyOf() { return this; }
        constructor(f = {}) { this.raws = {}, this[r] = !1, this[n] = !0; for (let a in f)
            if (a === "nodes") {
                this.nodes = [];
                for (let l of f[a])
                    typeof l.clone == "function" ? this.append(l.clone()) : this.append(l);
            }
            else
                this[a] = f[a]; }
        addToError(f) { if (f.postcssNode = this, f.stack && this.source && /\n\s{4}at /.test(f.stack)) {
            let a = this.source;
            f.stack = f.stack.replace(/\n\s{4}at /, `$&${a.input.from}:${a.start.line}:${a.start.column}$&`);
        } return f; }
        after(f) { return this.parent.insertAfter(this, f), this; }
        assign(f = {}) { for (let a in f)
            this[a] = f[a]; return this; }
        before(f) { return this.parent.insertBefore(this, f), this; }
        cleanRaws(f) { delete this.raws.before, delete this.raws.after, f || delete this.raws.between; }
        clone(f = {}) { let a = s(this); for (let l in f)
            a[l] = f[l]; return a; }
        cloneAfter(f = {}) { let a = this.clone(f); return this.parent.insertAfter(this, a), a; }
        cloneBefore(f = {}) { let a = this.clone(f); return this.parent.insertBefore(this, a), a; }
        error(f, a = {}) { if (this.source) {
            let { end: l, start: c } = this.rangeBy(a);
            return this.source.input.error(f, { column: c.column, line: c.line }, { column: l.column, line: l.line }, a);
        } return new t(f); }
        getProxyProcessor() { return { get(f, a) { return a === "proxyOf" ? f : a === "root" ? () => f.root().toProxy() : f[a]; }, set(f, a, l) { return f[a] === l || (f[a] = l, (a === "prop" || a === "value" || a === "name" || a === "params" || a === "important" || a === "text") && f.markDirty()), !0; } }; }
        markClean() { this[r] = !0; }
        markDirty() { if (this[r]) {
            this[r] = !1;
            let f = this;
            for (; f = f.parent;)
                f[r] = !1;
        } }
        next() { if (!this.parent)
            return; let f = this.parent.index(this); return this.parent.nodes[f + 1]; }
        positionBy(f = {}) { let a = this.source.start; if (f.index)
            a = this.positionInside(f.index);
        else if (f.word) {
            let l = "document" in this.source.input ? this.source.input.document : this.source.input.css, p = l.slice(i(l, this.source.start), i(l, this.source.end)).indexOf(f.word);
            p !== -1 && (a = this.positionInside(p));
        } return a; }
        positionInside(f) {
            let a = this.source.start.column, l = this.source.start.line, c = "document" in this.source.input ? this.source.input.document : this.source.input.css, p = i(c, this.source.start), h = p + f;
            for (let b = p; b < h; b++)
                c[b] === `
` ? (a = 1, l += 1) : a += 1;
            return { column: a, line: l, offset: h };
        }
        prev() { if (!this.parent)
            return; let f = this.parent.index(this); return this.parent.nodes[f - 1]; }
        rangeBy(f = {}) { let a = "document" in this.source.input ? this.source.input.document : this.source.input.css, l = { column: this.source.start.column, line: this.source.start.line, offset: i(a, this.source.start) }, c = this.source.end ? { column: this.source.end.column + 1, line: this.source.end.line, offset: typeof this.source.end.offset == "number" ? this.source.end.offset : i(a, this.source.end) + 1 } : { column: l.column + 1, line: l.line, offset: l.offset + 1 }; if (f.word) {
            let h = a.slice(i(a, this.source.start), i(a, this.source.end)).indexOf(f.word);
            h !== -1 && (l = this.positionInside(h), c = this.positionInside(h + f.word.length));
        }
        else
            f.start ? l = { column: f.start.column, line: f.start.line, offset: i(a, f.start) } : f.index && (l = this.positionInside(f.index)), f.end ? c = { column: f.end.column, line: f.end.line, offset: i(a, f.end) } : typeof f.endIndex == "number" ? c = this.positionInside(f.endIndex) : f.index && (c = this.positionInside(f.index + 1)); return (c.line < l.line || c.line === l.line && c.column <= l.column) && (c = { column: l.column + 1, line: l.line, offset: l.offset + 1 }), { end: c, start: l }; }
        raw(f, a) { return new e().raw(this, f, a); }
        remove() { return this.parent && this.parent.removeChild(this), this.parent = void 0, this; }
        replaceWith(...f) { if (this.parent) {
            let a = this, l = !1;
            for (let c of f)
                c === this ? l = !0 : l ? (this.parent.insertAfter(a, c), a = c) : this.parent.insertBefore(a, c);
            l || this.remove();
        } return this; }
        root() { let f = this; for (; f.parent && f.parent.type !== "document";)
            f = f.parent; return f; }
        toJSON(f, a) { let l = {}, c = a == null; a = a || new Map; let p = 0; for (let h in this) {
            if (!Object.prototype.hasOwnProperty.call(this, h) || h === "parent" || h === "proxyCache")
                continue;
            let b = this[h];
            if (Array.isArray(b))
                l[h] = b.map(g => typeof g == "object" && g.toJSON ? g.toJSON(null, a) : g);
            else if (typeof b == "object" && b.toJSON)
                l[h] = b.toJSON(null, a);
            else if (h === "source") {
                if (b == null)
                    continue;
                let g = a.get(b.input);
                g == null && (g = p, a.set(b.input, p), p++), l[h] = { end: b.end, inputId: g, start: b.start };
            }
            else
                l[h] = b;
        } return c && (l.inputs = [...a.keys()].map(h => h.toJSON())), l; }
        toProxy() { return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache; }
        toString(f = u) { f.stringify && (f = f.stringify); let a = ""; return f(this, l => { a += l; }), a; }
        warn(f, a, l = {}) { let c = { node: this }; for (let p in l)
            c[p] = l[p]; return f.warn(a, c); }
    }
    return At = o, o.default = o, At;
}
var Et, or;
function at() { if (or)
    return Et; or = 1; let t = it(); class e extends t {
    constructor(r) { super(r), this.type = "comment"; }
} return Et = e, e.default = e, Et; }
var Rt, cr;
function ot() { if (cr)
    return Rt; cr = 1; let t = it(); class e extends t {
    get variable() { return this.prop.startsWith("--") || this.prop[0] === "$"; }
    constructor(r) { r && typeof r.value < "u" && typeof r.value != "string" && (r = U(_({}, r), { value: String(r.value) })), super(r), this.type = "decl"; }
} return Rt = e, e.default = e, Rt; }
var Tt, lr;
function xe() { if (lr)
    return Tt; lr = 1; let t = at(), e = ot(), u = it(), { isClean: r, my: n } = xu(), s, i, o, d; function f(c) { return c.map(p => (p.nodes && (p.nodes = f(p.nodes)), delete p.source, p)); } function a(c) { if (c[r] = !1, c.proxyOf.nodes)
    for (let p of c.proxyOf.nodes)
        a(p); } let l = (() => { class c extends u {
    get first() { if (this.proxyOf.nodes)
        return this.proxyOf.nodes[0]; }
    get last() { if (this.proxyOf.nodes)
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]; }
    append(...h) { for (let b of h) {
        let g = this.normalize(b, this.last);
        for (let m of g)
            this.proxyOf.nodes.push(m);
    } return this.markDirty(), this; }
    cleanRaws(h) { if (super.cleanRaws(h), this.nodes)
        for (let b of this.nodes)
            b.cleanRaws(h); }
    each(h) { if (!this.proxyOf.nodes)
        return; let b = this.getIterator(), g, m; for (; this.indexes[b] < this.proxyOf.nodes.length && (g = this.indexes[b], m = h(this.proxyOf.nodes[g], g), m !== !1);)
        this.indexes[b] += 1; return delete this.indexes[b], m; }
    every(h) { return this.nodes.every(h); }
    getIterator() { this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1; let h = this.lastEach; return this.indexes[h] = 0, h; }
    getProxyProcessor() { return { get(h, b) { return b === "proxyOf" ? h : h[b] ? b === "each" || typeof b == "string" && b.startsWith("walk") ? (...g) => h[b](...g.map(m => typeof m == "function" ? (x, y) => m(x.toProxy(), y) : m)) : b === "every" || b === "some" ? g => h[b]((m, ...x) => g(m.toProxy(), ...x)) : b === "root" ? () => h.root().toProxy() : b === "nodes" ? h.nodes.map(g => g.toProxy()) : b === "first" || b === "last" ? h[b].toProxy() : h[b] : h[b]; }, set(h, b, g) { return h[b] === g || (h[b] = g, (b === "name" || b === "params" || b === "selector") && h.markDirty()), !0; } }; }
    index(h) { return typeof h == "number" ? h : (h.proxyOf && (h = h.proxyOf), this.proxyOf.nodes.indexOf(h)); }
    insertAfter(h, b) { let g = this.index(h), m = this.normalize(b, this.proxyOf.nodes[g]).reverse(); g = this.index(h); for (let y of m)
        this.proxyOf.nodes.splice(g + 1, 0, y); let x; for (let y in this.indexes)
        x = this.indexes[y], g < x && (this.indexes[y] = x + m.length); return this.markDirty(), this; }
    insertBefore(h, b) { let g = this.index(h), m = g === 0 ? "prepend" : !1, x = this.normalize(b, this.proxyOf.nodes[g], m).reverse(); g = this.index(h); for (let R of x)
        this.proxyOf.nodes.splice(g, 0, R); let y; for (let R in this.indexes)
        y = this.indexes[R], g <= y && (this.indexes[R] = y + x.length); return this.markDirty(), this; }
    normalize(h, b) { if (typeof h == "string")
        h = f(i(h).nodes);
    else if (typeof h > "u")
        h = [];
    else if (Array.isArray(h)) {
        h = h.slice(0);
        for (let m of h)
            m.parent && m.parent.removeChild(m, "ignore");
    }
    else if (h.type === "root" && this.type !== "document") {
        h = h.nodes.slice(0);
        for (let m of h)
            m.parent && m.parent.removeChild(m, "ignore");
    }
    else if (h.type)
        h = [h];
    else if (h.prop) {
        if (typeof h.value > "u")
            throw new Error("Value field is missed in node creation");
        typeof h.value != "string" && (h.value = String(h.value)), h = [new e(h)];
    }
    else if (h.selector || h.selectors)
        h = [new d(h)];
    else if (h.name)
        h = [new s(h)];
    else if (h.text)
        h = [new t(h)];
    else
        throw new Error("Unknown node type in node creation"); return h.map(m => (m[n] || c.rebuild(m), m = m.proxyOf, m.parent && m.parent.removeChild(m), m[r] && a(m), m.raws || (m.raws = {}), typeof m.raws.before > "u" && b && typeof b.raws.before < "u" && (m.raws.before = b.raws.before.replace(/\S/g, "")), m.parent = this.proxyOf, m)); }
    prepend(...h) { h = h.reverse(); for (let b of h) {
        let g = this.normalize(b, this.first, "prepend").reverse();
        for (let m of g)
            this.proxyOf.nodes.unshift(m);
        for (let m in this.indexes)
            this.indexes[m] = this.indexes[m] + g.length;
    } return this.markDirty(), this; }
    push(h) { return h.parent = this, this.proxyOf.nodes.push(h), this; }
    removeAll() { for (let h of this.proxyOf.nodes)
        h.parent = void 0; return this.proxyOf.nodes = [], this.markDirty(), this; }
    removeChild(h) { h = this.index(h), this.proxyOf.nodes[h].parent = void 0, this.proxyOf.nodes.splice(h, 1); let b; for (let g in this.indexes)
        b = this.indexes[g], b >= h && (this.indexes[g] = b - 1); return this.markDirty(), this; }
    replaceValues(h, b, g) { return g || (g = b, b = {}), this.walkDecls(m => { b.props && !b.props.includes(m.prop) || b.fast && !m.value.includes(b.fast) || (m.value = m.value.replace(h, g)); }), this.markDirty(), this; }
    some(h) { return this.nodes.some(h); }
    walk(h) { return this.each((b, g) => { let m; try {
        m = h(b, g);
    }
    catch (x) {
        throw b.addToError(x);
    } return m !== !1 && b.walk && (m = b.walk(h)), m; }); }
    walkAtRules(h, b) { return b ? h instanceof RegExp ? this.walk((g, m) => { if (g.type === "atrule" && h.test(g.name))
        return b(g, m); }) : this.walk((g, m) => { if (g.type === "atrule" && g.name === h)
        return b(g, m); }) : (b = h, this.walk((g, m) => { if (g.type === "atrule")
        return b(g, m); })); }
    walkComments(h) { return this.walk((b, g) => { if (b.type === "comment")
        return h(b, g); }); }
    walkDecls(h, b) { return b ? h instanceof RegExp ? this.walk((g, m) => { if (g.type === "decl" && h.test(g.prop))
        return b(g, m); }) : this.walk((g, m) => { if (g.type === "decl" && g.prop === h)
        return b(g, m); }) : (b = h, this.walk((g, m) => { if (g.type === "decl")
        return b(g, m); })); }
    walkRules(h, b) { return b ? h instanceof RegExp ? this.walk((g, m) => { if (g.type === "rule" && h.test(g.selector))
        return b(g, m); }) : this.walk((g, m) => { if (g.type === "rule" && g.selector === h)
        return b(g, m); }) : (b = h, this.walk((g, m) => { if (g.type === "rule")
        return b(g, m); })); }
} return c.registerParse = p => { i = p; }, c.registerRule = p => { d = p; }, c.registerAtRule = p => { s = p; }, c.registerRoot = p => { o = p; }, c; })(); return Tt = l, l.default = l, l.rebuild = c => { c.type === "atrule" ? Object.setPrototypeOf(c, s.prototype) : c.type === "rule" ? Object.setPrototypeOf(c, d.prototype) : c.type === "decl" ? Object.setPrototypeOf(c, e.prototype) : c.type === "comment" ? Object.setPrototypeOf(c, t.prototype) : c.type === "root" && Object.setPrototypeOf(c, o.prototype), c[n] = !0, c.nodes && c.nodes.forEach(p => { l.rebuild(p); }); }, Tt; }
var Ct, fr;
function yu() { if (fr)
    return Ct; fr = 1; let t = xe(); class e extends t {
    constructor(r) { super(r), this.type = "atrule"; }
    append(...r) { return this.proxyOf.nodes || (this.nodes = []), super.append(...r); }
    prepend(...r) { return this.proxyOf.nodes || (this.nodes = []), super.prepend(...r); }
} return Ct = e, e.default = e, t.registerAtRule(e), Ct; }
var Nt, dr;
function wu() { if (dr)
    return Nt; dr = 1; let t = xe(), e, u, r = (() => { class n extends t {
    constructor(i) { super(_({ type: "document" }, i)), this.nodes || (this.nodes = []); }
    toResult(i = {}) { return new e(new u, this, i).stringify(); }
} return n.registerLazyResult = s => { e = s; }, n.registerProcessor = s => { u = s; }, n; })(); return Nt = r, r.default = r, Nt; }
var Pt, hr;
function Hs() { if (hr)
    return Pt; hr = 1; let t = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"; return Pt = { nanoid: (r = 21) => { let n = "", s = r | 0; for (; s--;)
        n += t[Math.random() * 64 | 0]; return n; }, customAlphabet: (r, n = 21) => (s = n) => { let i = "", o = s | 0; for (; o--;)
        i += r[Math.random() * r.length | 0]; return i; } }, Pt; }
var kt, pr;
function xn() { if (pr)
    return kt; pr = 1; let { existsSync: t, readFileSync: e } = Y, { dirname: u, join: r } = Y, { SourceMapConsumer: n, SourceMapGenerator: s } = Y; function i(d) { return Buffer ? Buffer.from(d, "base64").toString() : window.atob(d); } class o {
    constructor(f, a) { if (a.map === !1)
        return; this.loadAnnotation(f), this.inline = this.startWith(this.annotation, "data:"); let l = a.map ? a.map.prev : void 0, c = this.loadMap(a.from, l); !this.mapFile && a.from && (this.mapFile = a.from), this.mapFile && (this.root = u(this.mapFile)), c && (this.text = c); }
    consumer() { return this.consumerCache || (this.consumerCache = new n(this.text)), this.consumerCache; }
    decodeInline(f) { let a = /^data:application\/json;charset=utf-?8;base64,/, l = /^data:application\/json;base64,/, c = /^data:application\/json;charset=utf-?8,/, p = /^data:application\/json,/, h = f.match(c) || f.match(p); if (h)
        return decodeURIComponent(f.substr(h[0].length)); let b = f.match(a) || f.match(l); if (b)
        return i(f.substr(b[0].length)); let g = f.match(/data:application\/json;([^,]+),/)[1]; throw new Error("Unsupported source map encoding " + g); }
    getAnnotationURL(f) { return f.replace(/^\/\*\s*# sourceMappingURL=/, "").trim(); }
    isMap(f) { return typeof f != "object" ? !1 : typeof f.mappings == "string" || typeof f._mappings == "string" || Array.isArray(f.sections); }
    loadAnnotation(f) { let a = f.match(/\/\*\s*# sourceMappingURL=/g); if (!a)
        return; let l = f.lastIndexOf(a.pop()), c = f.indexOf("*/", l); l > -1 && c > -1 && (this.annotation = this.getAnnotationURL(f.substring(l, c))); }
    loadFile(f) { if (this.root = u(f), t(f))
        return this.mapFile = f, e(f, "utf-8").toString().trim(); }
    loadMap(f, a) { if (a === !1)
        return !1; if (a) {
        if (typeof a == "string")
            return a;
        if (typeof a == "function") {
            let l = a(f);
            if (l) {
                let c = this.loadFile(l);
                if (!c)
                    throw new Error("Unable to load previous source map: " + l.toString());
                return c;
            }
        }
        else {
            if (a instanceof n)
                return s.fromSourceMap(a).toString();
            if (a instanceof s)
                return a.toString();
            if (this.isMap(a))
                return JSON.stringify(a);
            throw new Error("Unsupported previous source map format: " + a.toString());
        }
    }
    else {
        if (this.inline)
            return this.decodeInline(this.annotation);
        if (this.annotation) {
            let l = this.annotation;
            return f && (l = r(u(f), l)), this.loadFile(l);
        }
    } }
    startWith(f, a) { return f ? f.substr(0, a.length) === a : !1; }
    withContent() { return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0); }
} return kt = o, o.default = o, kt; }
var It, br;
function ct() {
    if (br)
        return It;
    br = 1;
    let { nanoid: t } = Hs(), { isAbsolute: e, resolve: u } = Y, { SourceMapConsumer: r, SourceMapGenerator: n } = Y, { fileURLToPath: s, pathToFileURL: i } = Y, o = gu(), d = xn(), f = Y, a = Symbol("lineToIndexCache"), l = !!(r && n), c = !!(u && e);
    function p(b) {
        if (b[a])
            return b[a];
        let g = b.css.split(`
`), m = new Array(g.length), x = 0;
        for (let y = 0, R = g.length; y < R; y++)
            m[y] = x, x += g[y].length + 1;
        return b[a] = m, m;
    }
    class h {
        get from() { return this.file || this.id; }
        constructor(g, m = {}) { if (g === null || typeof g > "u" || typeof g == "object" && !g.toString)
            throw new Error(`PostCSS received ${g} instead of CSS string`); if (this.css = g.toString(), this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, this.document = this.css, m.document && (this.document = m.document.toString()), m.from && (!c || /^\w+:\/\//.test(m.from) || e(m.from) ? this.file = m.from : this.file = u(m.from)), c && l) {
            let x = new d(this.css, m);
            if (x.text) {
                this.map = x;
                let y = x.consumer().file;
                !this.file && y && (this.file = this.mapResolve(y));
            }
        } this.file || (this.id = "<input css " + t(6) + ">"), this.map && (this.map.file = this.from); }
        error(g, m, x, y = {}) { let R, C, v, w, S; if (m && typeof m == "object") {
            let A = m, I = x;
            if (typeof A.offset == "number") {
                w = A.offset;
                let q = this.fromOffset(w);
                m = q.line, x = q.col;
            }
            else
                m = A.line, x = A.column, w = this.fromLineAndColumn(m, x);
            if (typeof I.offset == "number") {
                v = I.offset;
                let q = this.fromOffset(v);
                C = q.line, R = q.col;
            }
            else
                C = I.line, R = I.column, v = this.fromLineAndColumn(I.line, I.column);
        }
        else if (x)
            w = this.fromLineAndColumn(m, x);
        else {
            w = m;
            let A = this.fromOffset(w);
            m = A.line, x = A.col;
        } let T = this.origin(m, x, C, R); return T ? S = new o(g, T.endLine === void 0 ? T.line : { column: T.column, line: T.line }, T.endLine === void 0 ? T.column : { column: T.endColumn, line: T.endLine }, T.source, T.file, y.plugin) : S = new o(g, C === void 0 ? m : { column: x, line: m }, C === void 0 ? x : { column: R, line: C }, this.css, this.file, y.plugin), S.input = { column: x, endColumn: R, endLine: C, endOffset: v, line: m, offset: w, source: this.css }, this.file && (i && (S.input.url = i(this.file).toString()), S.input.file = this.file), S; }
        fromLineAndColumn(g, m) { return p(this)[g - 1] + m - 1; }
        fromOffset(g) { let m = p(this), x = m[m.length - 1], y = 0; if (g >= x)
            y = m.length - 1;
        else {
            let R = m.length - 2, C;
            for (; y < R;)
                if (C = y + (R - y >> 1), g < m[C])
                    R = C - 1;
                else if (g >= m[C + 1])
                    y = C + 1;
                else {
                    y = C;
                    break;
                }
        } return { col: g - m[y] + 1, line: y + 1 }; }
        mapResolve(g) { return /^\w+:\/\//.test(g) ? g : u(this.map.consumer().sourceRoot || this.map.root || ".", g); }
        origin(g, m, x, y) { if (!this.map)
            return !1; let R = this.map.consumer(), C = R.originalPositionFor({ column: m, line: g }); if (!C.source)
            return !1; let v; typeof x == "number" && (v = R.originalPositionFor({ column: y, line: x })); let w; e(C.source) ? w = i(C.source) : w = new URL(C.source, this.map.consumer().sourceRoot || i(this.map.mapFile)); let S = { column: C.column, endColumn: v && v.column, endLine: v && v.line, line: C.line, url: w.toString() }; if (w.protocol === "file:")
            if (s)
                S.file = s(w);
            else
                throw new Error("file: protocol is not available in this PostCSS build"); let T = R.sourceContentFor(C.source); return T && (S.source = T), S; }
        toJSON() { let g = {}; for (let m of ["hasBOM", "css", "file", "id"])
            this[m] != null && (g[m] = this[m]); return this.map && (g.map = _({}, this.map), g.map.consumerCache && (g.map.consumerCache = void 0)), g; }
    }
    return It = h, h.default = h, f && f.registerInput && f.registerInput(h), It;
}
var Ot, mr;
function qe() { if (mr)
    return Ot; mr = 1; let t = xe(), e, u, r = (() => { class n extends t {
    constructor(i) { super(i), this.type = "root", this.nodes || (this.nodes = []); }
    normalize(i, o, d) { let f = super.normalize(i); if (o) {
        if (d === "prepend")
            this.nodes.length > 1 ? o.raws.before = this.nodes[1].raws.before : delete o.raws.before;
        else if (this.first !== o)
            for (let a of f)
                a.raws.before = o.raws.before;
    } return f; }
    removeChild(i, o) { let d = this.index(i); return !o && d === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[d].raws.before), super.removeChild(i); }
    toResult(i = {}) { return new e(new u, this, i).stringify(); }
} return n.registerLazyResult = s => { e = s; }, n.registerProcessor = s => { u = s; }, n; })(); return Ot = r, r.default = r, t.registerRoot(r), Ot; }
var qt, gr;
function yn() {
    if (gr)
        return qt;
    gr = 1;
    let t = { comma(e) { return t.split(e, [","], !0); }, space(e) {
            let u = [" ", `
`, "	"];
            return t.split(e, u);
        }, split(e, u, r) { let n = [], s = "", i = !1, o = 0, d = !1, f = "", a = !1; for (let l of e)
            a ? a = !1 : l === "\\" ? a = !0 : d ? l === f && (d = !1) : l === '"' || l === "'" ? (d = !0, f = l) : l === "(" ? o += 1 : l === ")" ? o > 0 && (o -= 1) : o === 0 && u.includes(l) && (i = !0), i ? (s !== "" && n.push(s.trim()), s = "", i = !1) : s += l; return (r || s !== "") && n.push(s.trim()), n; } };
    return qt = t, t.default = t, qt;
}
var Lt, xr;
function Su() { if (xr)
    return Lt; xr = 1; let t = xe(), e = yn(); class u extends t {
    get selectors() { return e.comma(this.selector); }
    set selectors(n) { let s = this.selector ? this.selector.match(/,\s*/) : null, i = s ? s[0] : "," + this.raw("between", "beforeOpen"); this.selector = n.join(i); }
    constructor(n) { super(n), this.type = "rule", this.nodes || (this.nodes = []); }
} return Lt = u, u.default = u, t.registerRule(u), Lt; }
var _t, yr;
function Ws() { if (yr)
    return _t; yr = 1; let t = yu(), e = at(), u = ot(), r = ct(), n = xn(), s = qe(), i = Su(); function o(d, f) { if (Array.isArray(d))
    return d.map(h => o(h)); let c = d, { inputs: a } = c, l = ae(c, ["inputs"]); if (a) {
    f = [];
    for (let h of a) {
        let b = U(_({}, h), { __proto__: r.prototype });
        b.map && (b.map = U(_({}, b.map), { __proto__: n.prototype })), f.push(b);
    }
} if (l.nodes && (l.nodes = d.nodes.map(h => o(h, f))), l.source) {
    let p = l.source, { inputId: h } = p, b = ae(p, ["inputId"]);
    l.source = b, h != null && (l.source.input = f[h]);
} if (l.type === "root")
    return new s(l); if (l.type === "decl")
    return new u(l); if (l.type === "rule")
    return new i(l); if (l.type === "comment")
    return new e(l); if (l.type === "atrule")
    return new t(l); throw new Error("Unknown node type: " + d.type); } return _t = o, o.default = o, _t; }
var Mt, wr;
function wn() {
    if (wr)
        return Mt;
    wr = 1;
    let { dirname: t, relative: e, resolve: u, sep: r } = Y, { SourceMapConsumer: n, SourceMapGenerator: s } = Y, { pathToFileURL: i } = Y, o = ct(), d = !!(n && s), f = !!(t && u && e && r);
    class a {
        constructor(c, p, h, b) { this.stringify = c, this.mapOpts = h.map || {}, this.root = p, this.opts = h, this.css = b, this.originalCSS = b, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map; }
        addAnnotation() {
            let c;
            this.isInline() ? c = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? c = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? c = this.mapOpts.annotation(this.opts.to, this.root) : c = this.outputFile() + ".map";
            let p = `
`;
            this.css.includes(`\r
`) && (p = `\r
`), this.css += p + "/*# sourceMappingURL=" + c + " */";
        }
        applyPrevMaps() { for (let c of this.previous()) {
            let p = this.toUrl(this.path(c.file)), h = c.root || t(c.file), b;
            this.mapOpts.sourcesContent === !1 ? (b = new n(c.text), b.sourcesContent && (b.sourcesContent = null)) : b = c.consumer(), this.map.applySourceMap(b, p, this.toUrl(this.path(h)));
        } }
        clearAnnotation() { if (this.mapOpts.annotation !== !1)
            if (this.root) {
                let c;
                for (let p = this.root.nodes.length - 1; p >= 0; p--)
                    c = this.root.nodes[p], c.type === "comment" && c.text.startsWith("# sourceMappingURL=") && this.root.removeChild(p);
            }
            else
                this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, "")); }
        generate() { if (this.clearAnnotation(), f && d && this.isMap())
            return this.generateMap(); {
            let c = "";
            return this.stringify(this.root, p => { c += p; }), [c];
        } }
        generateMap() { if (this.root)
            this.generateString();
        else if (this.previous().length === 1) {
            let c = this.previous()[0].consumer();
            c.file = this.outputFile(), this.map = s.fromSourceMap(c, { ignoreInvalidMapping: !0 });
        }
        else
            this.map = new s({ file: this.outputFile(), ignoreInvalidMapping: !0 }), this.map.addMapping({ generated: { column: 0, line: 1 }, original: { column: 0, line: 1 }, source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>" }); return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map]; }
        generateString() {
            this.css = "", this.map = new s({ file: this.outputFile(), ignoreInvalidMapping: !0 });
            let c = 1, p = 1, h = "<no source>", b = { generated: { column: 0, line: 0 }, original: { column: 0, line: 0 }, source: "" }, g, m;
            this.stringify(this.root, (x, y, R) => {
                if (this.css += x, y && R !== "end" && (b.generated.line = c, b.generated.column = p - 1, y.source && y.source.start ? (b.source = this.sourcePath(y), b.original.line = y.source.start.line, b.original.column = y.source.start.column - 1, this.map.addMapping(b)) : (b.source = h, b.original.line = 1, b.original.column = 0, this.map.addMapping(b))), m = x.match(/\n/g), m ? (c += m.length, g = x.lastIndexOf(`
`), p = x.length - g) : p += x.length, y && R !== "start") {
                    let C = y.parent || { raws: {} };
                    (!(y.type === "decl" || y.type === "atrule" && !y.nodes) || y !== C.last || C.raws.semicolon) && (y.source && y.source.end ? (b.source = this.sourcePath(y), b.original.line = y.source.end.line, b.original.column = y.source.end.column - 1, b.generated.line = c, b.generated.column = p - 2, this.map.addMapping(b)) : (b.source = h, b.original.line = 1, b.original.column = 0, b.generated.line = c, b.generated.column = p - 1, this.map.addMapping(b)));
                }
            });
        }
        isAnnotation() { return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some(c => c.annotation) : !0; }
        isInline() { if (typeof this.mapOpts.inline < "u")
            return this.mapOpts.inline; let c = this.mapOpts.annotation; return typeof c < "u" && c !== !0 ? !1 : this.previous().length ? this.previous().some(p => p.inline) : !0; }
        isMap() { return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0; }
        isSourcesContent() { return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some(c => c.withContent()) : !0; }
        outputFile() { return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"; }
        path(c) { if (this.mapOpts.absolute || c.charCodeAt(0) === 60 || /^\w+:\/\//.test(c))
            return c; let p = this.memoizedPaths.get(c); if (p)
            return p; let h = this.opts.to ? t(this.opts.to) : "."; typeof this.mapOpts.annotation == "string" && (h = t(u(h, this.mapOpts.annotation))); let b = e(h, c); return this.memoizedPaths.set(c, b), b; }
        previous() { if (!this.previousMaps)
            if (this.previousMaps = [], this.root)
                this.root.walk(c => { if (c.source && c.source.input.map) {
                    let p = c.source.input.map;
                    this.previousMaps.includes(p) || this.previousMaps.push(p);
                } });
            else {
                let c = new o(this.originalCSS, this.opts);
                c.map && this.previousMaps.push(c.map);
            } return this.previousMaps; }
        setSourcesContent() { let c = {}; if (this.root)
            this.root.walk(p => { if (p.source) {
                let h = p.source.input.from;
                if (h && !c[h]) {
                    c[h] = !0;
                    let b = this.usesFileUrls ? this.toFileUrl(h) : this.toUrl(this.path(h));
                    this.map.setSourceContent(b, p.source.input.css);
                }
            } });
        else if (this.css) {
            let p = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(p, this.css);
        } }
        sourcePath(c) { return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(c.source.input.from) : this.toUrl(this.path(c.source.input.from)); }
        toBase64(c) { return Buffer ? Buffer.from(c).toString("base64") : window.btoa(unescape(encodeURIComponent(c))); }
        toFileUrl(c) { let p = this.memoizedFileURLs.get(c); if (p)
            return p; if (i) {
            let h = i(c).toString();
            return this.memoizedFileURLs.set(c, h), h;
        }
        else
            throw new Error("`map.absolute` option is not available in this PostCSS build"); }
        toUrl(c) { let p = this.memoizedURLs.get(c); if (p)
            return p; r === "\\" && (c = c.replace(/\\/g, "/")); let h = encodeURI(c).replace(/[#?]/g, encodeURIComponent); return this.memoizedURLs.set(c, h), h; }
    }
    return Mt = a, Mt;
}
var Dt, Sr;
function Gs() { if (Sr)
    return Dt; Sr = 1; let t = 39, e = 34, u = 92, r = 47, n = 10, s = 32, i = 12, o = 9, d = 13, f = 91, a = 93, l = 40, c = 41, p = 123, h = 125, b = 59, g = 42, m = 58, x = 64, y = /[\t\n\f\r "#'()/;[\\\]{}]/g, R = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, C = /.[\r\n"'(/\\]/, v = /[\da-f]/i; return Dt = function (S, T = {}) { let A = S.css.valueOf(), I = T.ignoreErrors, q, ne, De, N, Gu, X, se, we, ie, Qu, Xu = A.length, L = 0, mt = [], Fe = []; function Ts() { return L; } function gt(Se) { throw S.error("Unclosed " + Se, L); } function Cs() { return Fe.length === 0 && L >= Xu; } function Ns(Se) { if (Fe.length)
    return Fe.pop(); if (L >= Xu)
    return; let xt = Se ? Se.ignoreUnclosed : !1; switch (q = A.charCodeAt(L), q) {
    case n:
    case s:
    case o:
    case d:
    case i: {
        N = L;
        do
            N += 1, q = A.charCodeAt(N);
        while (q === s || q === n || q === o || q === d || q === i);
        X = ["space", A.slice(L, N)], L = N - 1;
        break;
    }
    case f:
    case a:
    case p:
    case h:
    case m:
    case b:
    case c: {
        let Zu = String.fromCharCode(q);
        X = [Zu, Zu, L];
        break;
    }
    case l: {
        if (Qu = mt.length ? mt.pop()[1] : "", ie = A.charCodeAt(L + 1), Qu === "url" && ie !== t && ie !== e && ie !== s && ie !== n && ie !== o && ie !== i && ie !== d) {
            N = L;
            do {
                if (se = !1, N = A.indexOf(")", N + 1), N === -1)
                    if (I || xt) {
                        N = L;
                        break;
                    }
                    else
                        gt("bracket");
                for (we = N; A.charCodeAt(we - 1) === u;)
                    we -= 1, se = !se;
            } while (se);
            X = ["brackets", A.slice(L, N + 1), L, N], L = N;
        }
        else
            N = A.indexOf(")", L + 1), ne = A.slice(L, N + 1), N === -1 || C.test(ne) ? X = ["(", "(", L] : (X = ["brackets", ne, L, N], L = N);
        break;
    }
    case t:
    case e: {
        Gu = q === t ? "'" : '"', N = L;
        do {
            if (se = !1, N = A.indexOf(Gu, N + 1), N === -1)
                if (I || xt) {
                    N = L + 1;
                    break;
                }
                else
                    gt("string");
            for (we = N; A.charCodeAt(we - 1) === u;)
                we -= 1, se = !se;
        } while (se);
        X = ["string", A.slice(L, N + 1), L, N], L = N;
        break;
    }
    case x: {
        y.lastIndex = L + 1, y.test(A), y.lastIndex === 0 ? N = A.length - 1 : N = y.lastIndex - 2, X = ["at-word", A.slice(L, N + 1), L, N], L = N;
        break;
    }
    case u: {
        for (N = L, De = !0; A.charCodeAt(N + 1) === u;)
            N += 1, De = !De;
        if (q = A.charCodeAt(N + 1), De && q !== r && q !== s && q !== n && q !== o && q !== d && q !== i && (N += 1, v.test(A.charAt(N)))) {
            for (; v.test(A.charAt(N + 1));)
                N += 1;
            A.charCodeAt(N + 1) === s && (N += 1);
        }
        X = ["word", A.slice(L, N + 1), L, N], L = N;
        break;
    }
    default: {
        q === r && A.charCodeAt(L + 1) === g ? (N = A.indexOf("*/", L + 2) + 1, N === 0 && (I || xt ? N = A.length : gt("comment")), X = ["comment", A.slice(L, N + 1), L, N], L = N) : (R.lastIndex = L + 1, R.test(A), R.lastIndex === 0 ? N = A.length - 1 : N = R.lastIndex - 2, X = ["word", A.slice(L, N + 1), L, N], mt.push(X), L = N);
        break;
    }
} return L++, X; } function Ps(Se) { Fe.push(Se); } return { back: Ps, endOfFile: Cs, nextToken: Ns, position: Ts }; }, Dt; }
var Ft, vr;
function Qs() { if (vr)
    return Ft; vr = 1; let t = yu(), e = at(), u = ot(), r = qe(), n = Su(), s = Gs(), i = { empty: !0, space: !0 }; function o(f) { for (let a = f.length - 1; a >= 0; a--) {
    let l = f[a], c = l[3] || l[2];
    if (c)
        return c;
} } class d {
    constructor(a) { this.input = a, this.root = new r, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: a, start: { column: 1, line: 1, offset: 0 } }; }
    atrule(a) { let l = new t; l.name = a[1].slice(1), l.name === "" && this.unnamedAtrule(l, a), this.init(l, a[2]); let c, p, h, b = !1, g = !1, m = [], x = []; for (; !this.tokenizer.endOfFile();) {
        if (a = this.tokenizer.nextToken(), c = a[0], c === "(" || c === "[" ? x.push(c === "(" ? ")" : "]") : c === "{" && x.length > 0 ? x.push("}") : c === x[x.length - 1] && x.pop(), x.length === 0)
            if (c === ";") {
                l.source.end = this.getPosition(a[2]), l.source.end.offset++, this.semicolon = !0;
                break;
            }
            else if (c === "{") {
                g = !0;
                break;
            }
            else if (c === "}") {
                if (m.length > 0) {
                    for (h = m.length - 1, p = m[h]; p && p[0] === "space";)
                        p = m[--h];
                    p && (l.source.end = this.getPosition(p[3] || p[2]), l.source.end.offset++);
                }
                this.end(a);
                break;
            }
            else
                m.push(a);
        else
            m.push(a);
        if (this.tokenizer.endOfFile()) {
            b = !0;
            break;
        }
    } l.raws.between = this.spacesAndCommentsFromEnd(m), m.length ? (l.raws.afterName = this.spacesAndCommentsFromStart(m), this.raw(l, "params", m), b && (a = m[m.length - 1], l.source.end = this.getPosition(a[3] || a[2]), l.source.end.offset++, this.spaces = l.raws.between, l.raws.between = "")) : (l.raws.afterName = "", l.params = ""), g && (l.nodes = [], this.current = l); }
    checkMissedSemicolon(a) { let l = this.colon(a); if (l === !1)
        return; let c = 0, p; for (let h = l - 1; h >= 0 && (p = a[h], !(p[0] !== "space" && (c += 1, c === 2))); h--)
        ; throw this.input.error("Missed semicolon", p[0] === "word" ? p[3] + 1 : p[2]); }
    colon(a) { let l = 0, c, p, h; for (let [b, g] of a.entries()) {
        if (p = g, h = p[0], h === "(" && (l += 1), h === ")" && (l -= 1), l === 0 && h === ":")
            if (!c)
                this.doubleColon(p);
            else {
                if (c[0] === "word" && c[1] === "progid")
                    continue;
                return b;
            }
        c = p;
    } return !1; }
    comment(a) { let l = new e; this.init(l, a[2]), l.source.end = this.getPosition(a[3] || a[2]), l.source.end.offset++; let c = a[1].slice(2, -2); if (/^\s*$/.test(c))
        l.text = "", l.raws.left = c, l.raws.right = "";
    else {
        let p = c.match(/^(\s*)([^]*\S)(\s*)$/);
        l.text = p[2], l.raws.left = p[1], l.raws.right = p[3];
    } }
    createTokenizer() { this.tokenizer = s(this.input); }
    decl(a, l) { let c = new u; this.init(c, a[0][2]); let p = a[a.length - 1]; for (p[0] === ";" && (this.semicolon = !0, a.pop()), c.source.end = this.getPosition(p[3] || p[2] || o(a)), c.source.end.offset++; a[0][0] !== "word";)
        a.length === 1 && this.unknownWord(a), c.raws.before += a.shift()[1]; for (c.source.start = this.getPosition(a[0][2]), c.prop = ""; a.length;) {
        let x = a[0][0];
        if (x === ":" || x === "space" || x === "comment")
            break;
        c.prop += a.shift()[1];
    } c.raws.between = ""; let h; for (; a.length;)
        if (h = a.shift(), h[0] === ":") {
            c.raws.between += h[1];
            break;
        }
        else
            h[0] === "word" && /\w/.test(h[1]) && this.unknownWord([h]), c.raws.between += h[1]; (c.prop[0] === "_" || c.prop[0] === "*") && (c.raws.before += c.prop[0], c.prop = c.prop.slice(1)); let b = [], g; for (; a.length && (g = a[0][0], !(g !== "space" && g !== "comment"));)
        b.push(a.shift()); this.precheckMissedSemicolon(a); for (let x = a.length - 1; x >= 0; x--) {
        if (h = a[x], h[1].toLowerCase() === "!important") {
            c.important = !0;
            let y = this.stringFrom(a, x);
            y = this.spacesFromEnd(a) + y, y !== " !important" && (c.raws.important = y);
            break;
        }
        else if (h[1].toLowerCase() === "important") {
            let y = a.slice(0), R = "";
            for (let C = x; C > 0; C--) {
                let v = y[C][0];
                if (R.trim().startsWith("!") && v !== "space")
                    break;
                R = y.pop()[1] + R;
            }
            R.trim().startsWith("!") && (c.important = !0, c.raws.important = R, a = y);
        }
        if (h[0] !== "space" && h[0] !== "comment")
            break;
    } a.some(x => x[0] !== "space" && x[0] !== "comment") && (c.raws.between += b.map(x => x[1]).join(""), b = []), this.raw(c, "value", b.concat(a), l), c.value.includes(":") && !l && this.checkMissedSemicolon(a); }
    doubleColon(a) { throw this.input.error("Double colon", { offset: a[2] }, { offset: a[2] + a[1].length }); }
    emptyRule(a) { let l = new n; this.init(l, a[2]), l.selector = "", l.raws.between = "", this.current = l; }
    end(a) { this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(a[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(a); }
    endFile() { this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position()); }
    freeSemicolon(a) { if (this.spaces += a[1], this.current.nodes) {
        let l = this.current.nodes[this.current.nodes.length - 1];
        l && l.type === "rule" && !l.raws.ownSemicolon && (l.raws.ownSemicolon = this.spaces, this.spaces = "", l.source.end = this.getPosition(a[2]), l.source.end.offset += l.raws.ownSemicolon.length);
    } }
    getPosition(a) { let l = this.input.fromOffset(a); return { column: l.col, line: l.line, offset: a }; }
    init(a, l) { this.current.push(a), a.source = { input: this.input, start: this.getPosition(l) }, a.raws.before = this.spaces, this.spaces = "", a.type !== "comment" && (this.semicolon = !1); }
    other(a) { let l = !1, c = null, p = !1, h = null, b = [], g = a[1].startsWith("--"), m = [], x = a; for (; x;) {
        if (c = x[0], m.push(x), c === "(" || c === "[")
            h || (h = x), b.push(c === "(" ? ")" : "]");
        else if (g && p && c === "{")
            h || (h = x), b.push("}");
        else if (b.length === 0)
            if (c === ";")
                if (p) {
                    this.decl(m, g);
                    return;
                }
                else
                    break;
            else if (c === "{") {
                this.rule(m);
                return;
            }
            else if (c === "}") {
                this.tokenizer.back(m.pop()), l = !0;
                break;
            }
            else
                c === ":" && (p = !0);
        else
            c === b[b.length - 1] && (b.pop(), b.length === 0 && (h = null));
        x = this.tokenizer.nextToken();
    } if (this.tokenizer.endOfFile() && (l = !0), b.length > 0 && this.unclosedBracket(h), l && p) {
        if (!g)
            for (; m.length && (x = m[m.length - 1][0], !(x !== "space" && x !== "comment"));)
                this.tokenizer.back(m.pop());
        this.decl(m, g);
    }
    else
        this.unknownWord(m); }
    parse() { let a; for (; !this.tokenizer.endOfFile();)
        switch (a = this.tokenizer.nextToken(), a[0]) {
            case "space":
                this.spaces += a[1];
                break;
            case ";":
                this.freeSemicolon(a);
                break;
            case "}":
                this.end(a);
                break;
            case "comment":
                this.comment(a);
                break;
            case "at-word":
                this.atrule(a);
                break;
            case "{":
                this.emptyRule(a);
                break;
            default:
                this.other(a);
                break;
        } this.endFile(); }
    precheckMissedSemicolon() { }
    raw(a, l, c, p) { let h, b, g = c.length, m = "", x = !0, y, R; for (let C = 0; C < g; C += 1)
        h = c[C], b = h[0], b === "space" && C === g - 1 && !p ? x = !1 : b === "comment" ? (R = c[C - 1] ? c[C - 1][0] : "empty", y = c[C + 1] ? c[C + 1][0] : "empty", !i[R] && !i[y] ? m.slice(-1) === "," ? x = !1 : m += h[1] : x = !1) : m += h[1]; if (!x) {
        let C = c.reduce((v, w) => v + w[1], "");
        a.raws[l] = { raw: C, value: m };
    } a[l] = m; }
    rule(a) { a.pop(); let l = new n; this.init(l, a[0][2]), l.raws.between = this.spacesAndCommentsFromEnd(a), this.raw(l, "selector", a), this.current = l; }
    spacesAndCommentsFromEnd(a) { let l, c = ""; for (; a.length && (l = a[a.length - 1][0], !(l !== "space" && l !== "comment"));)
        c = a.pop()[1] + c; return c; }
    spacesAndCommentsFromStart(a) { let l, c = ""; for (; a.length && (l = a[0][0], !(l !== "space" && l !== "comment"));)
        c += a.shift()[1]; return c; }
    spacesFromEnd(a) { let l, c = ""; for (; a.length && (l = a[a.length - 1][0], l === "space");)
        c = a.pop()[1] + c; return c; }
    stringFrom(a, l) { let c = ""; for (let p = l; p < a.length; p++)
        c += a[p][1]; return a.splice(l, a.length - l), c; }
    unclosedBlock() { let a = this.current.source.start; throw this.input.error("Unclosed block", a.line, a.column); }
    unclosedBracket(a) { throw this.input.error("Unclosed bracket", { offset: a[2] }, { offset: a[2] + 1 }); }
    unexpectedClose(a) { throw this.input.error("Unexpected }", { offset: a[2] }, { offset: a[2] + 1 }); }
    unknownWord(a) { throw this.input.error("Unknown word " + a[0][1], { offset: a[0][2] }, { offset: a[0][2] + a[0][1].length }); }
    unnamedAtrule(a, l) { throw this.input.error("At-rule without name", { offset: l[2] }, { offset: l[2] + l[1].length }); }
} return Ft = d, Ft; }
var Bt, Ar;
function vu() {
    if (Ar)
        return Bt;
    Ar = 1;
    let t = xe(), e = ct(), u = Qs();
    function r(n, s) {
        let i = new e(n, s), o = new u(i);
        try {
            o.parse();
        }
        catch (d) {
            throw process.env.NODE_ENV !== "production" && d.name === "CssSyntaxError" && s && s.from && (/\.scss$/i.test(s.from) ? d.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(s.from) ? d.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(s.from) && (d.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), d;
        }
        return o.root;
    }
    return Bt = r, r.default = r, t.registerParse(r), Bt;
}
var $t, Er;
function Sn() { if (Er)
    return $t; Er = 1; class t {
    constructor(u, r = {}) { if (this.type = "warning", this.text = u, r.node && r.node.source) {
        let n = r.node.rangeBy(r);
        this.line = n.start.line, this.column = n.start.column, this.endLine = n.end.line, this.endColumn = n.end.column;
    } for (let n in r)
        this[n] = r[n]; }
    toString() { return this.node ? this.node.error(this.text, { index: this.index, plugin: this.plugin, word: this.word }).message : this.plugin ? this.plugin + ": " + this.text : this.text; }
} return $t = t, t.default = t, $t; }
var Ut, Rr;
function Au() { if (Rr)
    return Ut; Rr = 1; let t = Sn(); class e {
    get content() { return this.css; }
    constructor(r, n, s) { this.processor = r, this.messages = [], this.root = n, this.opts = s, this.css = "", this.map = void 0; }
    toString() { return this.css; }
    warn(r, n = {}) { n.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (n.plugin = this.lastPlugin.postcssPlugin); let s = new t(r, n); return this.messages.push(s), s; }
    warnings() { return this.messages.filter(r => r.type === "warning"); }
} return Ut = e, e.default = e, Ut; }
var Vt, Tr;
function vn() { if (Tr)
    return Vt; Tr = 1; let t = {}; return Vt = function (u) { t[u] || (t[u] = !0, typeof console < "u" && console.warn && console.warn(u)); }, Vt; }
var zt, Cr;
function An() { if (Cr)
    return zt; Cr = 1; let t = xe(), e = wu(), u = wn(), r = vu(), n = Au(), s = qe(), i = st(), { isClean: o, my: d } = xu(), f = vn(), a = { atrule: "AtRule", comment: "Comment", decl: "Declaration", document: "Document", root: "Root", rule: "Rule" }, l = { AtRule: !0, AtRuleExit: !0, Comment: !0, CommentExit: !0, Declaration: !0, DeclarationExit: !0, Document: !0, DocumentExit: !0, Once: !0, OnceExit: !0, postcssPlugin: !0, prepare: !0, Root: !0, RootExit: !0, Rule: !0, RuleExit: !0 }, c = { Once: !0, postcssPlugin: !0, prepare: !0 }, p = 0; function h(R) { return typeof R == "object" && typeof R.then == "function"; } function b(R) { let C = !1, v = a[R.type]; return R.type === "decl" ? C = R.prop.toLowerCase() : R.type === "atrule" && (C = R.name.toLowerCase()), C && R.append ? [v, v + "-" + C, p, v + "Exit", v + "Exit-" + C] : C ? [v, v + "-" + C, v + "Exit", v + "Exit-" + C] : R.append ? [v, p, v + "Exit"] : [v, v + "Exit"]; } function g(R) { let C; return R.type === "document" ? C = ["Document", p, "DocumentExit"] : R.type === "root" ? C = ["Root", p, "RootExit"] : C = b(R), { eventIndex: 0, events: C, iterator: 0, node: R, visitorIndex: 0, visitors: [] }; } function m(R) { return R[o] = !1, R.nodes && R.nodes.forEach(C => m(C)), R; } let x = {}, y = (() => { class R {
    get content() { return this.stringify().content; }
    get css() { return this.stringify().css; }
    get map() { return this.stringify().map; }
    get messages() { return this.sync().messages; }
    get opts() { return this.result.opts; }
    get processor() { return this.result.processor; }
    get root() { return this.sync().root; }
    get [Symbol.toStringTag]() { return "LazyResult"; }
    constructor(v, w, S) { this.stringified = !1, this.processed = !1; let T; if (typeof w == "object" && w !== null && (w.type === "root" || w.type === "document"))
        T = m(w);
    else if (w instanceof R || w instanceof n)
        T = m(w.root), w.map && (typeof S.map > "u" && (S.map = {}), S.map.inline || (S.map.inline = !1), S.map.prev = w.map);
    else {
        let A = r;
        S.syntax && (A = S.syntax.parse), S.parser && (A = S.parser), A.parse && (A = A.parse);
        try {
            T = A(w, S);
        }
        catch (I) {
            this.processed = !0, this.error = I;
        }
        T && !T[d] && t.rebuild(T);
    } this.result = new n(v, T, S), this.helpers = U(_({}, x), { postcss: x, result: this.result }), this.plugins = this.processor.plugins.map(A => typeof A == "object" && A.prepare ? _(_({}, A), A.prepare(this.result)) : A); }
    async() { return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing); }
    catch(v) { return this.async().catch(v); }
    finally(v) { return this.async().then(v, v); }
    getAsyncError() { throw new Error("Use process(css).then(cb) to work with async plugins"); }
    handleError(v, w) { let S = this.result.lastPlugin; try {
        if (w && w.addToError(v), this.error = v, v.name === "CssSyntaxError" && !v.plugin)
            v.plugin = S.postcssPlugin, v.setMessage();
        else if (S.postcssVersion && process.env.NODE_ENV !== "production") {
            let T = S.postcssPlugin, A = S.postcssVersion, I = this.result.processor.version, q = A.split("."), ne = I.split(".");
            (q[0] !== ne[0] || parseInt(q[1]) > parseInt(ne[1])) && console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + I + ", but " + T + " uses " + A + ". Perhaps this is the source of the error below.");
        }
    }
    catch (T) {
        console && console.error && console.error(T);
    } return v; }
    prepareVisitors() { this.listeners = {}; let v = (w, S, T) => { this.listeners[S] || (this.listeners[S] = []), this.listeners[S].push([w, T]); }; for (let w of this.plugins)
        if (typeof w == "object")
            for (let S in w) {
                if (!l[S] && /^[A-Z]/.test(S))
                    throw new Error(`Unknown event ${S} in ${w.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!c[S])
                    if (typeof w[S] == "object")
                        for (let T in w[S])
                            T === "*" ? v(w, S, w[S][T]) : v(w, S + "-" + T.toLowerCase(), w[S][T]);
                    else
                        typeof w[S] == "function" && v(w, S, w[S]);
            } this.hasListener = Object.keys(this.listeners).length > 0; }
    runAsync() { return B(this, null, function* () { this.plugin = 0; for (let v = 0; v < this.plugins.length; v++) {
        let w = this.plugins[v], S = this.runOnRoot(w);
        if (h(S))
            try {
                yield S;
            }
            catch (T) {
                throw this.handleError(T);
            }
    } if (this.prepareVisitors(), this.hasListener) {
        let v = this.result.root;
        for (; !v[o];) {
            v[o] = !0;
            let w = [g(v)];
            for (; w.length > 0;) {
                let S = this.visitTick(w);
                if (h(S))
                    try {
                        yield S;
                    }
                    catch (T) {
                        let A = w[w.length - 1].node;
                        throw this.handleError(T, A);
                    }
            }
        }
        if (this.listeners.OnceExit)
            for (let [w, S] of this.listeners.OnceExit) {
                this.result.lastPlugin = w;
                try {
                    if (v.type === "document") {
                        let T = v.nodes.map(A => S(A, this.helpers));
                        yield Promise.all(T);
                    }
                    else
                        yield S(v, this.helpers);
                }
                catch (T) {
                    throw this.handleError(T);
                }
            }
    } return this.processed = !0, this.stringify(); }); }
    runOnRoot(v) { this.result.lastPlugin = v; try {
        if (typeof v == "object" && v.Once) {
            if (this.result.root.type === "document") {
                let w = this.result.root.nodes.map(S => v.Once(S, this.helpers));
                return h(w[0]) ? Promise.all(w) : w;
            }
            return v.Once(this.result.root, this.helpers);
        }
        else if (typeof v == "function")
            return v(this.result.root, this.result);
    }
    catch (w) {
        throw this.handleError(w);
    } }
    stringify() { if (this.error)
        throw this.error; if (this.stringified)
        return this.result; this.stringified = !0, this.sync(); let v = this.result.opts, w = i; v.syntax && (w = v.syntax.stringify), v.stringifier && (w = v.stringifier), w.stringify && (w = w.stringify); let T = new u(w, this.result.root, this.result.opts).generate(); return this.result.css = T[0], this.result.map = T[1], this.result; }
    sync() { if (this.error)
        throw this.error; if (this.processed)
        return this.result; if (this.processed = !0, this.processing)
        throw this.getAsyncError(); for (let v of this.plugins) {
        let w = this.runOnRoot(v);
        if (h(w))
            throw this.getAsyncError();
    } if (this.prepareVisitors(), this.hasListener) {
        let v = this.result.root;
        for (; !v[o];)
            v[o] = !0, this.walkSync(v);
        if (this.listeners.OnceExit)
            if (v.type === "document")
                for (let w of v.nodes)
                    this.visitSync(this.listeners.OnceExit, w);
            else
                this.visitSync(this.listeners.OnceExit, v);
    } return this.result; }
    then(v, w) { return process.env.NODE_ENV !== "production" && ("from" in this.opts || f("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.")), this.async().then(v, w); }
    toString() { return this.css; }
    visitSync(v, w) { for (let [S, T] of v) {
        this.result.lastPlugin = S;
        let A;
        try {
            A = T(w, this.helpers);
        }
        catch (I) {
            throw this.handleError(I, w.proxyOf);
        }
        if (w.type !== "root" && w.type !== "document" && !w.parent)
            return !0;
        if (h(A))
            throw this.getAsyncError();
    } }
    visitTick(v) { let w = v[v.length - 1], { node: S, visitors: T } = w; if (S.type !== "root" && S.type !== "document" && !S.parent) {
        v.pop();
        return;
    } if (T.length > 0 && w.visitorIndex < T.length) {
        let [I, q] = T[w.visitorIndex];
        w.visitorIndex += 1, w.visitorIndex === T.length && (w.visitors = [], w.visitorIndex = 0), this.result.lastPlugin = I;
        try {
            return q(S.toProxy(), this.helpers);
        }
        catch (ne) {
            throw this.handleError(ne, S);
        }
    } if (w.iterator !== 0) {
        let I = w.iterator, q;
        for (; q = S.nodes[S.indexes[I]];)
            if (S.indexes[I] += 1, !q[o]) {
                q[o] = !0, v.push(g(q));
                return;
            }
        w.iterator = 0, delete S.indexes[I];
    } let A = w.events; for (; w.eventIndex < A.length;) {
        let I = A[w.eventIndex];
        if (w.eventIndex += 1, I === p) {
            S.nodes && S.nodes.length && (S[o] = !0, w.iterator = S.getIterator());
            return;
        }
        else if (this.listeners[I]) {
            w.visitors = this.listeners[I];
            return;
        }
    } v.pop(); }
    walkSync(v) { v[o] = !0; let w = b(v); for (let S of w)
        if (S === p)
            v.nodes && v.each(T => { T[o] || this.walkSync(T); });
        else {
            let T = this.listeners[S];
            if (T && this.visitSync(T, v.toProxy()))
                return;
        } }
    warnings() { return this.sync().warnings(); }
} return R.registerPostcss = C => { x = C; }, R; })(); return zt = y, y.default = y, s.registerLazyResult(y), e.registerLazyResult(y), zt; }
var jt, Nr;
function Xs() { if (Nr)
    return jt; Nr = 1; let t = wn(), e = vu(), u = Au(), r = st(), n = vn(); class s {
    get content() { return this.result.css; }
    get css() { return this.result.css; }
    get map() { return this.result.map; }
    get messages() { return []; }
    get opts() { return this.result.opts; }
    get processor() { return this.result.processor; }
    get root() { if (this._root)
        return this._root; let o, d = e; try {
        o = d(this._css, this._opts);
    }
    catch (f) {
        this.error = f;
    } if (this.error)
        throw this.error; return this._root = o, o; }
    get [Symbol.toStringTag]() { return "NoWorkResult"; }
    constructor(o, d, f) { d = d.toString(), this.stringified = !1, this._processor = o, this._css = d, this._opts = f, this._map = void 0; let a, l = r; this.result = new u(this._processor, a, this._opts), this.result.css = d; let c = this; Object.defineProperty(this.result, "root", { get() { return c.root; } }); let p = new t(l, a, this._opts, d); if (p.isMap()) {
        let [h, b] = p.generate();
        h && (this.result.css = h), b && (this.result.map = b);
    }
    else
        p.clearAnnotation(), this.result.css = p.css; }
    async() { return this.error ? Promise.reject(this.error) : Promise.resolve(this.result); }
    catch(o) { return this.async().catch(o); }
    finally(o) { return this.async().then(o, o); }
    sync() { if (this.error)
        throw this.error; return this.result; }
    then(o, d) { return process.env.NODE_ENV !== "production" && ("from" in this._opts || n("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.")), this.async().then(o, d); }
    toString() { return this._css; }
    warnings() { return []; }
} return jt = s, s.default = s, jt; }
var Ht, Pr;
function Zs() { if (Pr)
    return Ht; Pr = 1; let t = wu(), e = An(), u = Xs(), r = qe(); class n {
    constructor(i = []) { this.version = "8.5.6", this.plugins = this.normalize(i); }
    normalize(i) { let o = []; for (let d of i)
        if (d.postcss === !0 ? d = d() : d.postcss && (d = d.postcss), typeof d == "object" && Array.isArray(d.plugins))
            o = o.concat(d.plugins);
        else if (typeof d == "object" && d.postcssPlugin)
            o.push(d);
        else if (typeof d == "function")
            o.push(d);
        else if (typeof d == "object" && (d.parse || d.stringify)) {
            if (process.env.NODE_ENV !== "production")
                throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
        }
        else
            throw new Error(d + " is not a PostCSS plugin"); return o; }
    process(i, o = {}) { return !this.plugins.length && !o.parser && !o.stringifier && !o.syntax ? new u(this, i, o) : new e(this, i, o); }
    use(i) { return this.plugins = this.plugins.concat(this.normalize([i])), this; }
} return Ht = n, n.default = n, r.registerProcessor(n), t.registerProcessor(n), Ht; }
var Wt, kr;
function Js() {
    if (kr)
        return Wt;
    kr = 1;
    let t = yu(), e = at(), u = xe(), r = gu(), n = ot(), s = wu(), i = Ws(), o = ct(), d = An(), f = yn(), a = it(), l = vu(), c = Zs(), p = Au(), h = qe(), b = Su(), g = st(), m = Sn();
    function x(...y) { return y.length === 1 && Array.isArray(y[0]) && (y = y[0]), new c(y); }
    return x.plugin = function (R, C) {
        let v = !1;
        function w(...T) {
            console && console.warn && !v && (v = !0, console.warn(R + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(R + `: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));
            let A = C(...T);
            return A.postcssPlugin = R, A.postcssVersion = new c().version, A;
        }
        let S;
        return Object.defineProperty(w, "postcss", { get() { return S || (S = w()), S; } }), w.process = function (T, A, I) { return x([w(I)]).process(T, A); }, w;
    }, x.stringify = g, x.parse = l, x.fromJSON = i, x.list = f, x.comment = y => new e(y), x.atRule = y => new t(y), x.decl = y => new n(y), x.rule = y => new b(y), x.root = y => new h(y), x.document = y => new s(y), x.CssSyntaxError = r, x.Declaration = n, x.Container = u, x.Processor = c, x.Document = s, x.Comment = e, x.Warning = m, x.AtRule = t, x.Result = p, x.Input = o, x.Rule = b, x.Root = h, x.Node = a, d.registerPostcss(x), Wt = x, x.default = x, Wt;
}
var Ys = Js(), $ = nt(Ys), Ks = $.stringify;
$.fromJSON;
$.plugin;
var ei = $.parse;
$.list;
$.document;
$.comment;
$.atRule;
$.rule;
$.decl;
$.root;
$.CssSyntaxError;
$.Declaration;
$.Container;
$.Processor;
$.Document;
$.Comment;
$.Warning;
$.AtRule;
$.Result;
$.Input;
$.Rule;
$.Root;
$.Node;
var Ve = {}, ze = {}, je = {}, Ir;
function En() { if (Ir)
    return je; Ir = 1, Object.defineProperty(je, "__esModule", { value: !0 }); function t(e) { this.after = e.after, this.before = e.before, this.type = e.type, this.value = e.value, this.sourceIndex = e.sourceIndex; } return je.default = t, je; }
var Or;
function Rn() { if (Or)
    return ze; Or = 1, Object.defineProperty(ze, "__esModule", { value: !0 }); var t = En(), e = u(t); function u(n) { return n && n.__esModule ? n : { default: n }; } function r(n) { var s = this; this.constructor(n), this.nodes = n.nodes, this.after === void 0 && (this.after = this.nodes.length > 0 ? this.nodes[this.nodes.length - 1].after : ""), this.before === void 0 && (this.before = this.nodes.length > 0 ? this.nodes[0].before : ""), this.sourceIndex === void 0 && (this.sourceIndex = this.before.length), this.nodes.forEach(function (i) { i.parent = s; }); } return r.prototype = Object.create(e.default.prototype), r.constructor = e.default, r.prototype.walk = function (s, i) { for (var o = typeof s == "string" || s instanceof RegExp, d = o ? i : s, f = typeof s == "string" ? new RegExp(s) : s, a = 0; a < this.nodes.length; a++) {
    var l = this.nodes[a], c = o ? f.test(l.type) : !0;
    if (c && d && d(l, a, this.nodes) === !1 || l.nodes && l.walk(s, i) === !1)
        return !1;
} return !0; }, r.prototype.each = function () { for (var s = arguments.length <= 0 || arguments[0] === void 0 ? function () { } : arguments[0], i = 0; i < this.nodes.length; i++) {
    var o = this.nodes[i];
    if (s(o, i, this.nodes) === !1)
        return !1;
} return !0; }, ze.default = r, ze; }
var ve = {}, qr;
function ti() { if (qr)
    return ve; qr = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.parseMediaFeature = s, ve.parseMediaQuery = i, ve.parseMediaList = o; var t = En(), e = n(t), u = Rn(), r = n(u); function n(d) { return d && d.__esModule ? d : { default: d }; } function s(d) { var f = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1], a = [{ mode: "normal", character: null }], l = [], c = 0, p = "", h = null, b = null, g = f, m = d; d[0] === "(" && d[d.length - 1] === ")" && (m = d.substring(1, d.length - 1), g++); for (var x = 0; x < m.length; x++) {
    var y = m[x];
    if ((y === "'" || y === '"') && (a[c].isCalculationEnabled === !0 ? (a.push({ mode: "string", isCalculationEnabled: !1, character: y }), c++) : a[c].mode === "string" && a[c].character === y && m[x - 1] !== "\\" && (a.pop(), c--)), y === "{" ? (a.push({ mode: "interpolation", isCalculationEnabled: !0 }), c++) : y === "}" && (a.pop(), c--), a[c].mode === "normal" && y === ":") {
        var R = m.substring(x + 1);
        b = { type: "value", before: /^(\s*)/.exec(R)[1], after: /(\s*)$/.exec(R)[1], value: R.trim() }, b.sourceIndex = b.before.length + x + 1 + g, h = { type: "colon", sourceIndex: x + g, after: b.before, value: ":" };
        break;
    }
    p += y;
} return p = { type: "media-feature", before: /^(\s*)/.exec(p)[1], after: /(\s*)$/.exec(p)[1], value: p.trim() }, p.sourceIndex = p.before.length + g, l.push(p), h !== null && (h.before = p.after, l.push(h)), b !== null && l.push(b), l; } function i(d) { var f = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1], a = [], l = 0, c = !1, p = void 0; function h() { return { before: "", after: "", value: "" }; } p = h(); for (var b = 0; b < d.length; b++) {
    var g = d[b];
    c ? (p.value += g, (g === "{" || g === "(") && l++, (g === ")" || g === "}") && l--) : g.search(/\s/) !== -1 ? p.before += g : (g === "(" && (p.type = "media-feature-expression", l++), p.value = g, p.sourceIndex = f + b, c = !0), c && l === 0 && (g === ")" || b === d.length - 1 || d[b + 1].search(/\s/) !== -1) && (["not", "only", "and"].indexOf(p.value) !== -1 && (p.type = "keyword"), p.type === "media-feature-expression" && (p.nodes = s(p.value, p.sourceIndex)), a.push(Array.isArray(p.nodes) ? new r.default(p) : new e.default(p)), p = h(), c = !1);
} for (var m = 0; m < a.length; m++)
    if (p = a[m], m > 0 && (a[m - 1].after = p.before), p.type === void 0) {
        if (m > 0) {
            if (a[m - 1].type === "media-feature-expression") {
                p.type = "keyword";
                continue;
            }
            if (a[m - 1].value === "not" || a[m - 1].value === "only") {
                p.type = "media-type";
                continue;
            }
            if (a[m - 1].value === "and") {
                p.type = "media-feature-expression";
                continue;
            }
            a[m - 1].type === "media-type" && (a[m + 1] ? p.type = a[m + 1].type === "media-feature-expression" ? "keyword" : "media-feature-expression" : p.type = "media-feature-expression");
        }
        if (m === 0) {
            if (!a[m + 1]) {
                p.type = "media-type";
                continue;
            }
            if (a[m + 1] && (a[m + 1].type === "media-feature-expression" || a[m + 1].type === "keyword")) {
                p.type = "media-type";
                continue;
            }
            if (a[m + 2]) {
                if (a[m + 2].type === "media-feature-expression") {
                    p.type = "media-type", a[m + 1].type = "keyword";
                    continue;
                }
                if (a[m + 2].type === "keyword") {
                    p.type = "keyword", a[m + 1].type = "media-type";
                    continue;
                }
            }
            if (a[m + 3] && a[m + 3].type === "media-feature-expression") {
                p.type = "keyword", a[m + 1].type = "media-type", a[m + 2].type = "keyword";
                continue;
            }
        }
    } return a; } function o(d) { var f = [], a = 0, l = 0, c = /^(\s*)url\s*\(/.exec(d); if (c !== null) {
    for (var p = c[0].length, h = 1; h > 0;) {
        var b = d[p];
        b === "(" && h++, b === ")" && h--, p++;
    }
    f.unshift(new e.default({ type: "url", value: d.substring(0, p).trim(), sourceIndex: c[1].length, before: c[1], after: /^(\s*)/.exec(d.substring(p))[1] })), a = p;
} for (var g = a; g < d.length; g++) {
    var m = d[g];
    if (m === "(" && l++, m === ")" && l--, l === 0 && m === ",") {
        var x = d.substring(a, g), y = /^(\s*)/.exec(x)[1];
        f.push(new r.default({ type: "media-query", value: x.trim(), sourceIndex: a + y.length, nodes: i(x, a), before: y, after: /(\s*)$/.exec(x)[1] })), a = g + 1;
    }
} var R = d.substring(a), C = /^(\s*)/.exec(R)[1]; return f.push(new r.default({ type: "media-query", value: R.trim(), sourceIndex: a + C.length, nodes: i(R, a), before: C, after: /(\s*)$/.exec(R)[1] })), f; } return ve; }
var Lr;
function ui() { if (Lr)
    return Ve; Lr = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.default = n; var t = Rn(), e = r(t), u = ti(); function r(s) { return s && s.__esModule ? s : { default: s }; } function n(s) { return new e.default({ nodes: (0, u.parseMediaList)(s), type: "media-query-list", value: s.trim() }); } return Ve; }
var ri = ui(), Gt = nt(ri), Qt, _r;
function ni() { return _r || (_r = 1, Qt = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }), Qt; }
var M = ni(), Mr = nt(M), O = (function (t) { return t.Attribute = "attribute", t.Pseudo = "pseudo", t.PseudoElement = "pseudo-element", t.Tag = "tag", t.Universal = "universal", t.Adjacent = "adjacent", t.Child = "child", t.Descendant = "descendant", t.Parent = "parent", t.Sibling = "sibling", t.ColumnCombinator = "column-combinator", t; })(O || {}), z = (function (t) { return t.Any = "any", t.Element = "element", t.End = "end", t.Equals = "equals", t.Exists = "exists", t.Hyphen = "hyphen", t.Not = "not", t.Start = "start", t; })(z || {}), Dr = /^[^#\\]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\u00B0-\uFFFF-])+/, si = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, P = (function (t) { return t[t.LeftParenthesis = 40] = "LeftParenthesis", t[t.RightParenthesis = 41] = "RightParenthesis", t[t.LeftSquareBracket = 91] = "LeftSquareBracket", t[t.RightSquareBracket = 93] = "RightSquareBracket", t[t.Comma = 44] = "Comma", t[t.Period = 46] = "Period", t[t.Colon = 58] = "Colon", t[t.SingleQuote = 39] = "SingleQuote", t[t.DoubleQuote = 34] = "DoubleQuote", t[t.Plus = 43] = "Plus", t[t.Tilde = 126] = "Tilde", t[t.QuestionMark = 63] = "QuestionMark", t[t.ExclamationMark = 33] = "ExclamationMark", t[t.Slash = 47] = "Slash", t[t.Equal = 61] = "Equal", t[t.Dollar = 36] = "Dollar", t[t.Pipe = 124] = "Pipe", t[t.Circumflex = 94] = "Circumflex", t[t.Asterisk = 42] = "Asterisk", t[t.GreaterThan = 62] = "GreaterThan", t[t.LessThan = 60] = "LessThan", t[t.Hash = 35] = "Hash", t[t.LowerI = 105] = "LowerI", t[t.LowerS = 115] = "LowerS", t[t.BackSlash = 92] = "BackSlash", t[t.Space = 32] = "Space", t[t.Tab = 9] = "Tab", t[t.NewLine = 10] = "NewLine", t[t.FormFeed = 12] = "FormFeed", t[t.CarriageReturn = 13] = "CarriageReturn", t; })(P || {}), ii = new Map([[P.Tilde, z.Element], [P.Circumflex, z.Start], [P.Dollar, z.End], [P.Asterisk, z.Any], [P.ExclamationMark, z.Not], [P.Pipe, z.Hyphen]]), ai = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]), oi = new Set(["before", "after", "first-line", "first-letter"]);
function Tn(t) { switch (t.type) {
    case O.Adjacent:
    case O.Child:
    case O.Descendant:
    case O.Parent:
    case O.Sibling:
    case O.ColumnCombinator: return !0;
    default: return !1;
} }
var ci = new Set(["contains", "icontains"]);
function li(t, e, u) { let r = Number.parseInt(e, 16) - 65536; return r !== r || u ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function Te(t) { return t.replace(si, li); }
function Xt(t) { return t === P.SingleQuote || t === P.DoubleQuote; }
function Fr(t) { return t === P.Space || t === P.Tab || t === P.NewLine || t === P.FormFeed || t === P.CarriageReturn; }
function Eu(t) { let e = [], u = Cn(e, `${t}`, 0); if (u < t.length)
    throw new Error(`Unmatched selector: ${t.slice(u)}`); return e; }
function Cn(t, e, u) { let r = []; function n(l) { let c = e.slice(u + l).match(Dr); if (!c)
    throw new Error(`Expected name, found ${e.slice(u)}`); let [p] = c; return u += l + p.length, Te(p); } function s(l) { for (u += l; u < e.length && Fr(e.charCodeAt(u));)
    u++; } function i() { u += 1; let l = u; for (let c = 1; u < e.length; u++)
    switch (e.charCodeAt(u)) {
        case P.BackSlash: {
            u += 1;
            break;
        }
        case P.LeftParenthesis: {
            c += 1;
            break;
        }
        case P.RightParenthesis: {
            if (c -= 1, c === 0)
                return Te(e.slice(l, u++));
            break;
        }
    } throw new Error("Parenthesis not matched"); } function o() { if (r.length > 0 && Tn(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function d(l) { if (r.length > 0 && r[r.length - 1].type === O.Descendant) {
    r[r.length - 1].type = l;
    return;
} o(), r.push({ type: l }); } function f(l, c) { r.push({ type: O.Attribute, name: l, action: c, value: n(1), namespace: null, ignoreCase: "quirks" }); } function a() { if (r.length > 0 && r[r.length - 1].type === O.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); t.push(r); } if (s(0), e.length === u)
    return u; e: for (; u < e.length;) {
    let l = e.charCodeAt(u);
    switch (l) {
        case P.Space:
        case P.Tab:
        case P.NewLine:
        case P.FormFeed:
        case P.CarriageReturn: {
            (r.length === 0 || r[0].type !== O.Descendant) && (o(), r.push({ type: O.Descendant })), s(1);
            break;
        }
        case P.GreaterThan: {
            d(O.Child), s(1);
            break;
        }
        case P.LessThan: {
            d(O.Parent), s(1);
            break;
        }
        case P.Tilde: {
            d(O.Sibling), s(1);
            break;
        }
        case P.Plus: {
            d(O.Adjacent), s(1);
            break;
        }
        case P.Period: {
            f("class", z.Element);
            break;
        }
        case P.Hash: {
            f("id", z.Equals);
            break;
        }
        case P.LeftSquareBracket: {
            s(1);
            let c, p = null;
            e.charCodeAt(u) === P.Pipe ? c = n(1) : e.startsWith("*|", u) ? (p = "*", c = n(2)) : (c = n(0), e.charCodeAt(u) === P.Pipe && e.charCodeAt(u + 1) !== P.Equal && (p = c, c = n(1))), s(0);
            let h = z.Exists, b = ii.get(e.charCodeAt(u));
            if (b) {
                if (h = b, e.charCodeAt(u + 1) !== P.Equal)
                    throw new Error("Expected `=`");
                s(2);
            }
            else
                e.charCodeAt(u) === P.Equal && (h = z.Equals, s(1));
            let g = "", m = null;
            if (h !== "exists") {
                if (Xt(e.charCodeAt(u))) {
                    let y = e.charCodeAt(u);
                    u += 1;
                    let R = u;
                    for (; u < e.length && e.charCodeAt(u) !== y;)
                        u += e.charCodeAt(u) === P.BackSlash ? 2 : 1;
                    if (e.charCodeAt(u) !== y)
                        throw new Error("Attribute value didn't end");
                    g = Te(e.slice(R, u)), u += 1;
                }
                else {
                    let y = u;
                    for (; u < e.length && !Fr(e.charCodeAt(u)) && e.charCodeAt(u) !== P.RightSquareBracket;)
                        u += e.charCodeAt(u) === P.BackSlash ? 2 : 1;
                    g = Te(e.slice(y, u));
                }
                switch (s(0), e.charCodeAt(u) | 32) {
                    case P.LowerI: {
                        m = !0, s(1);
                        break;
                    }
                    case P.LowerS: {
                        m = !1, s(1);
                        break;
                    }
                }
            }
            if (e.charCodeAt(u) !== P.RightSquareBracket)
                throw new Error("Attribute selector didn't terminate");
            u += 1;
            let x = { type: O.Attribute, name: c, action: h, value: g, namespace: p, ignoreCase: m };
            r.push(x);
            break;
        }
        case P.Colon: {
            if (e.charCodeAt(u + 1) === P.Colon) {
                r.push({ type: O.PseudoElement, name: n(2).toLowerCase(), data: e.charCodeAt(u) === P.LeftParenthesis ? i() : null });
                break;
            }
            let c = n(1).toLowerCase();
            if (oi.has(c)) {
                r.push({ type: O.PseudoElement, name: c, data: null });
                break;
            }
            let p = null;
            if (e.charCodeAt(u) === P.LeftParenthesis)
                if (ai.has(c)) {
                    if (Xt(e.charCodeAt(u + 1)))
                        throw new Error(`Pseudo-selector ${c} cannot be quoted`);
                    if (p = [], u = Cn(p, e, u + 1), e.charCodeAt(u) !== P.RightParenthesis)
                        throw new Error(`Missing closing parenthesis in :${c} (${e})`);
                    u += 1;
                }
                else {
                    if (p = i(), ci.has(c)) {
                        let h = p.charCodeAt(0);
                        h === p.charCodeAt(p.length - 1) && Xt(h) && (p = p.slice(1, -1));
                    }
                    p = Te(p);
                }
            r.push({ type: O.Pseudo, name: c, data: p });
            break;
        }
        case P.Comma: {
            a(), r = [], s(1);
            break;
        }
        default: {
            if (e.startsWith("/*", u)) {
                let h = e.indexOf("*/", u + 2);
                if (h < 0)
                    throw new Error("Comment was not terminated");
                u = h + 2, r.length === 0 && s(0);
                break;
            }
            let c = null, p;
            if (l === P.Asterisk)
                u += 1, p = "*";
            else if (l === P.Pipe) {
                if (p = "", e.charCodeAt(u + 1) === P.Pipe) {
                    d(O.ColumnCombinator), s(2);
                    break;
                }
            }
            else if (Dr.test(e.slice(u)))
                p = n(0);
            else
                break e;
            e.charCodeAt(u) === P.Pipe && e.charCodeAt(u + 1) !== P.Pipe && (c = p, e.charCodeAt(u + 1) === P.Asterisk ? (p = "*", u += 2) : p = n(1)), r.push(p === "*" ? { type: O.Universal, namespace: c } : { type: O.Tag, name: p, namespace: c });
        }
    }
} return a(), u; }
var D = (function (t) { return t.Root = "root", t.Text = "text", t.Directive = "directive", t.Comment = "comment", t.Script = "script", t.Style = "style", t.Tag = "tag", t.CDATA = "cdata", t.Doctype = "doctype", t; })(D || {});
function fi(t) { return t.type === D.Tag || t.type === D.Script || t.type === D.Style; }
var di = D.Root, hi = D.Text, pi = D.Directive, bi = D.Comment, mi = D.Script, gi = D.Style, xi = D.Tag, yi = D.CDATA, wi = D.Doctype, Qe = class {
    constructor() { this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null; }
    get parentNode() { return this.parent; }
    set parentNode(e) { this.parent = e; }
    get previousSibling() { return this.prev; }
    set previousSibling(e) { this.prev = e; }
    get nextSibling() { return this.next; }
    set nextSibling(e) { this.next = e; }
    cloneNode(e = !1) { return Pn(this, e); }
}, ke = class extends Qe {
    constructor(e) { super(), this.data = e; }
    get nodeValue() { return this.data; }
    set nodeValue(e) { this.data = e; }
}, be = class extends ke {
    constructor() { super(...arguments), this.type = D.Text; }
    get nodeType() { return 3; }
}, Xe = class extends ke {
    constructor() { super(...arguments), this.type = D.Comment; }
    get nodeType() { return 8; }
}, Ze = class extends ke {
    constructor(e, u) { super(u), this.name = e, this.type = D.Directive; }
    get nodeType() { return 1; }
}, Ie = class extends Qe {
    constructor(e) { super(), this.children = e; }
    get firstChild() { var e; return (e = this.children[0]) !== null && e !== void 0 ? e : null; }
    get lastChild() { return this.children.length > 0 ? this.children[this.children.length - 1] : null; }
    get childNodes() { return this.children; }
    set childNodes(e) { this.children = e; }
}, Je = class extends Ie {
    constructor() { super(...arguments), this.type = D.CDATA; }
    get nodeType() { return 4; }
}, Oe = class extends Ie {
    constructor() { super(...arguments), this.type = D.Root; }
    get nodeType() { return 9; }
}, Ee = class extends Ie {
    constructor(e, u, r = [], n = e === "script" ? D.Script : e === "style" ? D.Style : D.Tag) { super(r), this.name = e, this.attribs = u, this.type = n; }
    get nodeType() { return 1; }
    get tagName() { return this.name; }
    set tagName(e) { this.name = e; }
    get attributes() { return Object.keys(this.attribs).map(e => { var u, r; return { name: e, value: this.attribs[e], namespace: (u = this["x-attribsNamespace"]) === null || u === void 0 ? void 0 : u[e], prefix: (r = this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[e] }; }); }
};
function Q(t) { return fi(t); }
function lt(t) { return t.type === D.CDATA; }
function me(t) { return t.type === D.Text; }
function Ru(t) { return t.type === D.Comment; }
function Si(t) { return t.type === D.Directive; }
function Nn(t) { return t.type === D.Root; }
function K(t) { return Object.prototype.hasOwnProperty.call(t, "children"); }
function Pn(t, e = !1) { let u; if (me(t))
    u = new be(t.data);
else if (Ru(t))
    u = new Xe(t.data);
else if (Q(t)) {
    let r = e ? Zt(t.children) : [], n = new Ee(t.name, _({}, t.attribs), r);
    r.forEach(s => s.parent = n), t.namespace != null && (n.namespace = t.namespace), t["x-attribsNamespace"] && (n["x-attribsNamespace"] = _({}, t["x-attribsNamespace"])), t["x-attribsPrefix"] && (n["x-attribsPrefix"] = _({}, t["x-attribsPrefix"])), u = n;
}
else if (lt(t)) {
    let r = e ? Zt(t.children) : [], n = new Je(r);
    r.forEach(s => s.parent = n), u = n;
}
else if (Nn(t)) {
    let r = e ? Zt(t.children) : [], n = new Oe(r);
    r.forEach(s => s.parent = n), t["x-mode"] && (n["x-mode"] = t["x-mode"]), u = n;
}
else if (Si(t)) {
    let r = new Ze(t.name, t.data);
    t["x-name"] != null && (r["x-name"] = t["x-name"], r["x-publicId"] = t["x-publicId"], r["x-systemId"] = t["x-systemId"]), u = r;
}
else
    throw new Error(`Not implemented yet: ${t.type}`); return u.startIndex = t.startIndex, u.endIndex = t.endIndex, t.sourceCodeLocation != null && (u.sourceCodeLocation = t.sourceCodeLocation), u; }
function Zt(t) { let e = t.map(u => Pn(u, !0)); for (let u = 1; u < e.length; u++)
    e[u].prev = e[u - 1], e[u - 1].next = e[u]; return e; }
var Br = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, uu = class {
    constructor(e, u, r) { this.dom = [], this.root = new Oe(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (r = u, u = Br), typeof e == "object" && (u = e, e = void 0), this.callback = e ?? null, this.options = u ?? Br, this.elementCB = r ?? null; }
    onparserinit(e) { this.parser = e; }
    onreset() { this.dom = [], this.root = new Oe(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; }
    onend() { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); }
    onerror(e) { this.handleCallback(e); }
    onclosetag() { this.lastNode = null; let e = this.tagStack.pop(); this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e); }
    onopentag(e, u) { let r = this.options.xmlMode ? D.Tag : void 0, n = new Ee(e, u, void 0, r); this.addNode(n), this.tagStack.push(n); }
    ontext(e) { let { lastNode: u } = this; if (u && u.type === D.Text)
        u.data += e, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
    else {
        let r = new be(e);
        this.addNode(r), this.lastNode = r;
    } }
    oncomment(e) { if (this.lastNode && this.lastNode.type === D.Comment) {
        this.lastNode.data += e;
        return;
    } let u = new Xe(e); this.addNode(u), this.lastNode = u; }
    oncommentend() { this.lastNode = null; }
    oncdatastart() { let e = new be(""), u = new Je([e]); this.addNode(u), e.parent = u, this.lastNode = e; }
    oncdataend() { this.lastNode = null; }
    onprocessinginstruction(e, u) { let r = new Ze(e, u); this.addNode(r); }
    handleCallback(e) { if (typeof this.callback == "function")
        this.callback(e, this.dom);
    else if (e)
        throw e; }
    addNode(e) { let u = this.tagStack[this.tagStack.length - 1], r = u.children[u.children.length - 1]; this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), u.children.push(e), r && (e.prev = r, r.next = e), e.parent = u, this.lastNode = null; }
}, $r = /["&'<>$\x80-\uFFFF]/g, vi = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), Ai = String.prototype.codePointAt != null ? (t, e) => t.codePointAt(e) : (t, e) => (t.charCodeAt(e) & 64512) === 55296 ? (t.charCodeAt(e) - 55296) * 1024 + t.charCodeAt(e + 1) - 56320 + 65536 : t.charCodeAt(e);
function kn(t) { let e = "", u = 0, r; for (; (r = $r.exec(t)) !== null;) {
    let n = r.index, s = t.charCodeAt(n), i = vi.get(s);
    i !== void 0 ? (e += t.substring(u, n) + i, u = n + 1) : (e += `${t.substring(u, n)}&#x${Ai(t, n).toString(16)};`, u = $r.lastIndex += +((s & 64512) === 55296));
} return e + t.substr(u); }
function In(t, e) { return function (r) { let n, s = 0, i = ""; for (; n = t.exec(r);)
    s !== n.index && (i += r.substring(s, n.index)), i += e.get(n[0].charCodeAt(0)), s = n.index + 1; return i + r.substring(s); }; }
var Ei = In(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), Ri = In(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]])), Ti = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(t => [t.toLowerCase(), t])), Ci = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(t => [t.toLowerCase(), t])), Ni = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function Pi(t) { return t.replace(/"/g, "&quot;"); }
function ki(t, e) { var u; if (!t)
    return; let r = ((u = e.encodeEntities) !== null && u !== void 0 ? u : e.decodeEntities) === !1 ? Pi : e.xmlMode || e.encodeEntities !== "utf8" ? kn : Ei; return Object.keys(t).map(n => { var s, i; let o = (s = t[n]) !== null && s !== void 0 ? s : ""; return e.xmlMode === "foreign" && (n = (i = Ci.get(n)) !== null && i !== void 0 ? i : n), !e.emptyAttrs && !e.xmlMode && o === "" ? n : `${n}="${r(o)}"`; }).join(" "); }
var Ur = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function ft(t, e = {}) { let u = "length" in t ? t : [t], r = ""; for (let n = 0; n < u.length; n++)
    r += Ii(u[n], e); return r; }
function Ii(t, e) { switch (t.type) {
    case di: return ft(t.children, e);
    case wi:
    case pi: return _i(t);
    case bi: return Fi(t);
    case yi: return Di(t);
    case mi:
    case gi:
    case xi: return Li(t, e);
    case hi: return Mi(t, e);
} }
var Oi = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), qi = new Set(["svg", "math"]);
function Li(t, e) { var u; e.xmlMode === "foreign" && (t.name = (u = Ti.get(t.name)) !== null && u !== void 0 ? u : t.name, t.parent && Oi.has(t.parent.name) && (e = U(_({}, e), { xmlMode: !1 }))), !e.xmlMode && qi.has(t.name) && (e = U(_({}, e), { xmlMode: "foreign" })); let r = `<${t.name}`, n = ki(t.attribs, e); return n && (r += ` ${n}`), t.children.length === 0 && (e.xmlMode ? e.selfClosingTags !== !1 : e.selfClosingTags && Ur.has(t.name)) ? (e.xmlMode || (r += " "), r += "/>") : (r += ">", t.children.length > 0 && (r += ft(t.children, e)), (e.xmlMode || !Ur.has(t.name)) && (r += `</${t.name}>`)), r; }
function _i(t) { return `<${t.data}>`; }
function Mi(t, e) { var u; let r = t.data || ""; return ((u = e.encodeEntities) !== null && u !== void 0 ? u : e.decodeEntities) !== !1 && !(!e.xmlMode && t.parent && Ni.has(t.parent.name)) && (r = e.xmlMode || e.encodeEntities !== "utf8" ? kn(r) : Ri(r)), r; }
function Di(t) { return `<![CDATA[${t.children[0].data}]]>`; }
function Fi(t) { return `<!--${t.data}-->`; }
function On(t, e) { return ft(t, e); }
function Bi(t, e) { return K(t) ? t.children.map(u => On(u, e)).join("") : ""; }
function Ne(t) {
    return Array.isArray(t) ? t.map(Ne).join("") : Q(t) ? t.name === "br" ? `
` : Ne(t.children) : lt(t) ? Ne(t.children) : me(t) ? t.data : "";
}
function Ye(t) { return Array.isArray(t) ? t.map(Ye).join("") : K(t) && !Ru(t) ? Ye(t.children) : me(t) ? t.data : ""; }
function ru(t) { return Array.isArray(t) ? t.map(ru).join("") : K(t) && (t.type === D.Tag || lt(t)) ? ru(t.children) : me(t) ? t.data : ""; }
function qn(t) { return K(t) ? t.children : []; }
function Ln(t) { return t.parent || null; }
function $i(t) { let e = Ln(t); if (e != null)
    return qn(e); let u = [t], { prev: r, next: n } = t; for (; r != null;)
    u.unshift(r), { prev: r } = r; for (; n != null;)
    u.push(n), { next: n } = n; return u; }
function Ui(t, e) { var u; return (u = t.attribs) === null || u === void 0 ? void 0 : u[e]; }
function Vi(t, e) { return t.attribs != null && Object.prototype.hasOwnProperty.call(t.attribs, e) && t.attribs[e] != null; }
function zi(t) { return t.name; }
function ji(t) { let { next: e } = t; for (; e !== null && !Q(e);)
    ({ next: e } = e); return e; }
function Hi(t) { let { prev: e } = t; for (; e !== null && !Q(e);)
    ({ prev: e } = e); return e; }
function ge(t) { if (t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.parent) {
    let e = t.parent.children, u = e.lastIndexOf(t);
    u >= 0 && e.splice(u, 1);
} t.next = null, t.prev = null, t.parent = null; }
function Wi(t, e) { let u = e.prev = t.prev; u && (u.next = e); let r = e.next = t.next; r && (r.prev = e); let n = e.parent = t.parent; if (n) {
    let s = n.children;
    s[s.lastIndexOf(t)] = e, t.parent = null;
} }
function nu(t, e) { if (ge(e), e.next = null, e.parent = t, t.children.push(e) > 1) {
    let u = t.children[t.children.length - 2];
    u.next = e, e.prev = u;
}
else
    e.prev = null; }
function Gi(t, e) { ge(e); let { parent: u } = t, r = t.next; if (e.next = r, e.prev = t, t.next = e, e.parent = u, r) {
    if (r.prev = e, u) {
        let n = u.children;
        n.splice(n.lastIndexOf(r), 0, e);
    }
}
else
    u && u.children.push(e); }
function Qi(t, e) { if (ge(e), e.parent = t, e.prev = null, t.children.unshift(e) !== 1) {
    let u = t.children[1];
    u.prev = e, e.next = u;
}
else
    e.next = null; }
function _n(t, e) { ge(e); let { parent: u } = t; if (u) {
    let r = u.children;
    r.splice(r.indexOf(t), 0, e);
} t.prev && (t.prev.next = e), e.parent = u, e.prev = t.prev, e.next = t, t.prev = e; }
function Le(t, e, u = !0, r = 1 / 0) { return Mn(t, Array.isArray(e) ? e : [e], u, r); }
function Mn(t, e, u, r) { let n = [], s = [Array.isArray(e) ? e : [e]], i = [0]; for (;;) {
    if (i[0] >= s[0].length) {
        if (i.length === 1)
            return n;
        s.shift(), i.shift();
        continue;
    }
    let o = s[0][i[0]++];
    if (t(o) && (n.push(o), --r <= 0))
        return n;
    u && K(o) && o.children.length > 0 && (i.unshift(0), s.unshift(o.children));
} }
function Xi(t, e) { return e.find(t); }
function Tu(t, e, u = !0) { let r = Array.isArray(e) ? e : [e]; for (let n = 0; n < r.length; n++) {
    let s = r[n];
    if (Q(s) && t(s))
        return s;
    if (u && K(s) && s.children.length > 0) {
        let i = Tu(t, s.children, !0);
        if (i)
            return i;
    }
} return null; }
function Dn(t, e) { return (Array.isArray(e) ? e : [e]).some(u => Q(u) && t(u) || K(u) && Dn(t, u.children)); }
function Zi(t, e) { let u = [], r = [Array.isArray(e) ? e : [e]], n = [0]; for (;;) {
    if (n[0] >= r[0].length) {
        if (r.length === 1)
            return u;
        r.shift(), n.shift();
        continue;
    }
    let s = r[0][n[0]++];
    Q(s) && t(s) && u.push(s), K(s) && s.children.length > 0 && (n.unshift(0), r.unshift(s.children));
} }
var Ke = { tag_name(t) { return typeof t == "function" ? e => Q(e) && t(e.name) : t === "*" ? Q : e => Q(e) && e.name === t; }, tag_type(t) { return typeof t == "function" ? e => t(e.type) : e => e.type === t; }, tag_contains(t) { return typeof t == "function" ? e => me(e) && t(e.data) : e => me(e) && e.data === t; } };
function Cu(t, e) { return typeof e == "function" ? u => Q(u) && e(u.attribs[t]) : u => Q(u) && u.attribs[t] === e; }
function Ji(t, e) { return u => t(u) || e(u); }
function Fn(t) { let e = Object.keys(t).map(u => { let r = t[u]; return Object.prototype.hasOwnProperty.call(Ke, u) ? Ke[u](r) : Cu(u, r); }); return e.length === 0 ? null : e.reduce(Ji); }
function Yi(t, e) { let u = Fn(t); return u ? u(e) : !0; }
function Ki(t, e, u, r = 1 / 0) { let n = Fn(t); return n ? Le(n, e, u, r) : []; }
function ea(t, e, u = !0) { return Array.isArray(e) || (e = [e]), Tu(Cu("id", t), e, u); }
function Re(t, e, u = !0, r = 1 / 0) { return Le(Ke.tag_name(t), e, u, r); }
function ta(t, e, u = !0, r = 1 / 0) { return Le(Cu("class", t), e, u, r); }
function ua(t, e, u = !0, r = 1 / 0) { return Le(Ke.tag_type(t), e, u, r); }
function ra(t) { let e = t.length; for (; --e >= 0;) {
    let u = t[e];
    if (e > 0 && t.lastIndexOf(u, e - 1) >= 0) {
        t.splice(e, 1);
        continue;
    }
    for (let r = u.parent; r; r = r.parent)
        if (t.includes(r)) {
            t.splice(e, 1);
            break;
        }
} return t; }
var Z = (function (t) { return t[t.DISCONNECTED = 1] = "DISCONNECTED", t[t.PRECEDING = 2] = "PRECEDING", t[t.FOLLOWING = 4] = "FOLLOWING", t[t.CONTAINS = 8] = "CONTAINS", t[t.CONTAINED_BY = 16] = "CONTAINED_BY", t; })(Z || {});
function Bn(t, e) { let u = [], r = []; if (t === e)
    return 0; let n = K(t) ? t : t.parent; for (; n;)
    u.unshift(n), n = n.parent; for (n = K(e) ? e : e.parent; n;)
    r.unshift(n), n = n.parent; let s = Math.min(u.length, r.length), i = 0; for (; i < s && u[i] === r[i];)
    i++; if (i === 0)
    return Z.DISCONNECTED; let o = u[i - 1], d = o.children, f = u[i], a = r[i]; return d.indexOf(f) > d.indexOf(a) ? o === e ? Z.FOLLOWING | Z.CONTAINED_BY : Z.FOLLOWING : o === t ? Z.PRECEDING | Z.CONTAINS : Z.PRECEDING; }
function na(t) { return t = t.filter((e, u, r) => !r.includes(e, u + 1)), t.sort((e, u) => { let r = Bn(e, u); return r & Z.PRECEDING ? -1 : r & Z.FOLLOWING ? 1 : 0; }), t; }
function sa(t) { let e = et(la, t); return e ? e.name === "feed" ? ia(e) : aa(e) : null; }
function ia(t) { var e; let u = t.children, r = { type: "atom", items: Re("entry", u).map(i => { var o; let { children: d } = i, f = { media: $n(d) }; G(f, "id", "id", d), G(f, "title", "title", d); let a = (o = et("link", d)) === null || o === void 0 ? void 0 : o.attribs.href; a && (f.link = a); let l = oe("summary", d) || oe("content", d); l && (f.description = l); let c = oe("updated", d); return c && (f.pubDate = new Date(c)), f; }) }; G(r, "id", "id", u), G(r, "title", "title", u); let n = (e = et("link", u)) === null || e === void 0 ? void 0 : e.attribs.href; n && (r.link = n), G(r, "description", "subtitle", u); let s = oe("updated", u); return s && (r.updated = new Date(s)), G(r, "author", "email", u, !0), r; }
function aa(t) { var e, u; let r = (u = (e = et("channel", t.children)) === null || e === void 0 ? void 0 : e.children) !== null && u !== void 0 ? u : [], n = { type: t.name.substr(0, 3), id: "", items: Re("item", t.children).map(i => { let { children: o } = i, d = { media: $n(o) }; G(d, "id", "guid", o), G(d, "title", "title", o), G(d, "link", "link", o), G(d, "description", "description", o); let f = oe("pubDate", o) || oe("dc:date", o); return f && (d.pubDate = new Date(f)), d; }) }; G(n, "title", "title", r), G(n, "link", "link", r), G(n, "description", "description", r); let s = oe("lastBuildDate", r); return s && (n.updated = new Date(s)), G(n, "author", "managingEditor", r, !0), n; }
var oa = ["url", "type", "lang"], ca = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function $n(t) { return Re("media:content", t).map(e => { let { attribs: u } = e, r = { medium: u.medium, isDefault: !!u.isDefault }; for (let n of oa)
    u[n] && (r[n] = u[n]); for (let n of ca)
    u[n] && (r[n] = parseInt(u[n], 10)); return u.expression && (r.expression = u.expression), r; }); }
function et(t, e) { return Re(t, e, !0, 1)[0]; }
function oe(t, e, u = !1) { return Ye(Re(t, e, u, 1)).trim(); }
function G(t, e, u, r, n = !1) { let s = oe(u, r, n); s && (t[e] = s); }
function la(t) { return t === "rss" || t === "feed" || t === "rdf:RDF"; }
var Un = Object.freeze({ __proto__: null, get DocumentPosition() { return Z; }, append: Gi, appendChild: nu, compareDocumentPosition: Bn, existsOne: Dn, filter: Le, find: Mn, findAll: Zi, findOne: Tu, findOneChild: Xi, getAttributeValue: Ui, getChildren: qn, getElementById: ea, getElements: Ki, getElementsByClassName: ta, getElementsByTagName: Re, getElementsByTagType: ua, getFeed: sa, getInnerHTML: Bi, getName: zi, getOuterHTML: On, getParent: Ln, getSiblings: $i, getText: Ne, hasAttrib: Vi, hasChildren: K, innerText: ru, isCDATA: lt, isComment: Ru, isDocument: Nn, isTag: Q, isText: me, nextElementSibling: ji, prepend: _n, prependChild: Qi, prevElementSibling: Hi, removeElement: ge, removeSubsets: ra, replaceElement: Wi, testElement: Yi, textContent: Ye, uniqueSort: na }), fa = /[-[\]{}()*+?.,\\^$|#\s]/g;
function Vr(t) { return t.replace(fa, "\\$&"); }
var da = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function fe(t, e) { return typeof t.ignoreCase == "boolean" ? t.ignoreCase : t.ignoreCase === "quirks" ? !!e.quirksMode : !e.xmlMode && da.has(t.name); }
var ha = { equals(t, e, u) { let { adapter: r } = u, { name: n } = e, { value: s } = e; return fe(e, u) ? (s = s.toLowerCase(), i => { let o = r.getAttributeValue(i, n); return o != null && o.length === s.length && o.toLowerCase() === s && t(i); }) : i => r.getAttributeValue(i, n) === s && t(i); }, hyphen(t, e, u) { let { adapter: r } = u, { name: n } = e, { value: s } = e, i = s.length; return fe(e, u) ? (s = s.toLowerCase(), function (d) { let f = r.getAttributeValue(d, n); return f != null && (f.length === i || f.charAt(i) === "-") && f.substr(0, i).toLowerCase() === s && t(d); }) : function (d) { let f = r.getAttributeValue(d, n); return f != null && (f.length === i || f.charAt(i) === "-") && f.substr(0, i) === s && t(d); }; }, element(t, e, u) { let { adapter: r } = u, { name: n, value: s } = e; if (/\s/.test(s))
        return M.falseFunc; let i = new RegExp(`(?:^|\\s)${Vr(s)}(?:$|\\s)`, fe(e, u) ? "i" : ""); return function (d) { let f = r.getAttributeValue(d, n); return f != null && f.length >= s.length && i.test(f) && t(d); }; }, exists(t, { name: e }, { adapter: u }) { return r => u.hasAttrib(r, e) && t(r); }, start(t, e, u) { let { adapter: r } = u, { name: n } = e, { value: s } = e, i = s.length; return i === 0 ? M.falseFunc : fe(e, u) ? (s = s.toLowerCase(), o => { let d = r.getAttributeValue(o, n); return d != null && d.length >= i && d.substr(0, i).toLowerCase() === s && t(o); }) : o => !!r.getAttributeValue(o, n)?.startsWith(s) && t(o); }, end(t, e, u) { let { adapter: r } = u, { name: n } = e, { value: s } = e, i = -s.length; return i === 0 ? M.falseFunc : fe(e, u) ? (s = s.toLowerCase(), o => r.getAttributeValue(o, n)?.substr(i).toLowerCase() === s && t(o)) : o => !!r.getAttributeValue(o, n)?.endsWith(s) && t(o); }, any(t, e, u) { let { adapter: r } = u, { name: n, value: s } = e; if (s === "")
        return M.falseFunc; if (fe(e, u)) {
        let i = new RegExp(Vr(s), "i");
        return function (d) { let f = r.getAttributeValue(d, n); return f != null && f.length >= s.length && i.test(f) && t(d); };
    } return i => !!r.getAttributeValue(i, n)?.includes(s) && t(i); }, not(t, e, u) { let { adapter: r } = u, { name: n } = e, { value: s } = e; return s === "" ? i => !!r.getAttributeValue(i, n) && t(i) : fe(e, u) ? (s = s.toLowerCase(), i => { let o = r.getAttributeValue(i, n); return (o == null || o.length !== s.length || o.toLowerCase() !== s) && t(i); }) : i => r.getAttributeValue(i, n) !== s && t(i); } };
function pa(t, e, u) { let { adapter: r, xmlMode: n = !1 } = u, s = [], i = [e], o = [0]; for (;;) {
    if (o[0] >= i[0].length) {
        if (i.length === 1)
            return s;
        i.shift(), o.shift();
        continue;
    }
    let d = i[0][o[0]++];
    if (r.isTag(d) && (t(d) && s.push(d), n || r.getName(d) !== "template")) {
        let f = r.getChildren(d);
        f.length > 0 && (i.unshift(f), o.unshift(0));
    }
} }
function Ge(t, e, u) { let { adapter: r, xmlMode: n = !1 } = u, s = [e], i = [0]; for (;;) {
    if (i[0] >= s[0].length) {
        if (s.length === 1)
            return null;
        s.shift(), i.shift();
        continue;
    }
    let o = s[0][i[0]++];
    if (r.isTag(o)) {
        if (t(o))
            return o;
        if (n || r.getName(o) !== "template") {
            let d = r.getChildren(o);
            d.length > 0 && (s.unshift(d), i.unshift(0));
        }
    }
} }
function Vn(t, e) { let u = e.getSiblings(t); if (u.length <= 1)
    return []; let r = u.indexOf(t); return r < 0 || r === u.length - 1 ? [] : u.slice(r + 1).filter(e.isTag); }
function J(t, e) { let u = e.getParent(t); return u != null && e.isTag(u) ? u : null; }
var zr = "input:is([type=text i],[type=search i],[type=url i],[type=tel i],[type=email i],[type=password i],[type=date i],[type=month i],[type=week i],[type=time i],[type=datetime-local i],[type=number i])", ba = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`, enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], :selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", "read-only": `[readonly]:is(textarea, ${zr})`, "read-write": `:not([readonly]):is(textarea, ${zr})`, selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" }, ma = new Set([9, 10, 12, 13, 32]), jr = 48, ga = 57;
function xa(t) { if (t = t.trim().toLowerCase(), t === "even")
    return [2, 0]; if (t === "odd")
    return [2, 1]; let e = 0, u = 0, r = s(), n = i(); if (e < t.length && t.charAt(e) === "n" && (e++, u = r * (n ?? 1), o(), e < t.length ? (r = s(), o(), n = i()) : r = n = 0), n === null || e < t.length)
    throw new Error(`n-th rule couldn't be parsed ('${t}')`); return [u, r * n]; function s() { return t.charAt(e) === "-" ? (e++, -1) : (t.charAt(e) === "+" && e++, 1); } function i() { let d = e, f = 0; for (; e < t.length && t.charCodeAt(e) >= jr && t.charCodeAt(e) <= ga;)
    f = f * 10 + (t.charCodeAt(e) - jr), e++; return e === d ? null : f; } function o() { for (; e < t.length && ma.has(t.charCodeAt(e));)
    e++; } }
function ya(t) { let e = t[0], u = t[1] - 1; if (u < 0 && e <= 0)
    return Mr.falseFunc; if (e === -1)
    return s => s <= u; if (e === 0)
    return s => s === u; if (e === 1)
    return u < 0 ? Mr.trueFunc : s => s >= u; let r = Math.abs(e), n = (u % r + r) % r; return e > 1 ? s => s >= u && s % r === n : s => s <= u && s % r === n; }
function He(t) { return ya(xa(t)); }
function tt(t, { adapter: e, cacheResults: u }, r) { if (u === !1 || typeof WeakMap > "u")
    return i => t(i) && r(i); let n = new WeakMap; function s(i) { let o = r(i); return n.set(i, o), o; } return function (o) { if (!t(o))
    return !1; if (n.has(o))
    return n.get(o); let d = o; do {
    let f = J(d, e);
    if (f === null)
        return s(o);
    d = f;
} while (!n.has(d)); return n.get(d) && s(o); }; }
var su = { contains(t, e, u) { let { getText: r } = u.adapter; return tt(t, u, n => r(n).includes(e)); }, icontains(t, e, u) { let r = e.toLowerCase(), { getText: n } = u.adapter; return tt(t, u, s => n(s).toLowerCase().includes(r)); }, "nth-child"(t, e, { adapter: u, equals: r }) { let n = He(e); return n === M.falseFunc ? M.falseFunc : n === M.trueFunc ? s => J(s, u) !== null && t(s) : function (i) { let o = u.getSiblings(i), d = 0; for (let f = 0; f < o.length && !r(i, o[f]); f++)
        u.isTag(o[f]) && d++; return n(d) && t(i); }; }, "nth-last-child"(t, e, { adapter: u, equals: r }) { let n = He(e); return n === M.falseFunc ? M.falseFunc : n === M.trueFunc ? s => J(s, u) !== null && t(s) : function (i) { let o = u.getSiblings(i), d = 0; for (let f = o.length - 1; f >= 0 && !r(i, o[f]); f--)
        u.isTag(o[f]) && d++; return n(d) && t(i); }; }, "nth-of-type"(t, e, { adapter: u, equals: r }) { let n = He(e); return n === M.falseFunc ? M.falseFunc : n === M.trueFunc ? s => J(s, u) !== null && t(s) : function (i) { let o = u.getSiblings(i), d = 0; for (let f = 0; f < o.length; f++) {
        let a = o[f];
        if (r(i, a))
            break;
        u.isTag(a) && u.getName(a) === u.getName(i) && d++;
    } return n(d) && t(i); }; }, "nth-last-of-type"(t, e, { adapter: u, equals: r }) { let n = He(e); return n === M.falseFunc ? M.falseFunc : n === M.trueFunc ? s => J(s, u) !== null && t(s) : function (i) { let o = u.getSiblings(i), d = 0; for (let f = o.length - 1; f >= 0; f--) {
        let a = o[f];
        if (r(i, a))
            break;
        u.isTag(a) && u.getName(a) === u.getName(i) && d++;
    } return n(d) && t(i); }; }, root(t, e, { adapter: u }) { return r => J(r, u) === null && t(r); }, scope(t, e, u, r) { let { equals: n } = u; return !r || r.length === 0 ? su.root(t, e, u) : r.length === 1 ? s => n(r[0], s) && t(s) : s => r.includes(s) && t(s); }, hover: Jt("isHovered"), visited: Jt("isVisited"), active: Jt("isActive") };
function Jt(t) { return function (u, r, { adapter: n }) { let s = n[t]; return typeof s != "function" ? M.falseFunc : function (o) { return s(o) && u(o); }; }; }
var wa = /^[ \t\r\n]*$/, Hr = { empty(t, { adapter: e }) { let u = e.getChildren(t); return u.every(r => !e.isTag(r)) && u.every(r => wa.test(e.getText(r))); }, "first-child"(t, { adapter: e, equals: u }) { if (e.prevElementSibling)
        return e.prevElementSibling(t) == null; let r = e.getSiblings(t).find(n => e.isTag(n)); return r != null && u(t, r); }, "last-child"(t, { adapter: e, equals: u }) { let r = e.getSiblings(t); for (let n = r.length - 1; n >= 0; n--) {
        if (u(t, r[n]))
            return !0;
        if (e.isTag(r[n]))
            break;
    } return !1; }, "first-of-type"(t, { adapter: e, equals: u }) { let r = e.getSiblings(t), n = e.getName(t); for (let s = 0; s < r.length; s++) {
        let i = r[s];
        if (u(t, i))
            return !0;
        if (e.isTag(i) && e.getName(i) === n)
            break;
    } return !1; }, "last-of-type"(t, { adapter: e, equals: u }) { let r = e.getSiblings(t), n = e.getName(t); for (let s = r.length - 1; s >= 0; s--) {
        let i = r[s];
        if (u(t, i))
            return !0;
        if (e.isTag(i) && e.getName(i) === n)
            break;
    } return !1; }, "only-of-type"(t, { adapter: e, equals: u }) { let r = e.getName(t); return e.getSiblings(t).every(n => u(t, n) || !e.isTag(n) || e.getName(n) !== r); }, "only-child"(t, { adapter: e, equals: u }) { return e.getSiblings(t).every(r => u(t, r) || !e.isTag(r)); } };
function Wr(t, e, u, r) { if (u === null) {
    if (t.length > r)
        throw new Error(`Pseudo-class :${e} requires an argument`);
}
else if (t.length === r)
    throw new Error(`Pseudo-class :${e} doesn't have any arguments`); }
function dt(t) { return t.type === "_flexibleDescendant" || Tn(t); }
function Sa(t) { let e = t.map(Nu); for (let u = 1; u < t.length; u++) {
    let r = e[u];
    if (!(r < 0))
        for (let n = u; n > 0 && r < e[n - 1]; n--) {
            let s = t[n];
            t[n] = t[n - 1], t[n - 1] = s, e[n] = e[n - 1], e[n - 1] = r;
        }
} }
function va(t) { switch (t.action) {
    case z.Exists: return 10;
    case z.Equals: return t.name === "id" ? 9 : 8;
    case z.Not: return 7;
    case z.Start: return 6;
    case z.End: return 6;
    case z.Any: return 5;
    case z.Hyphen: return 4;
    case z.Element: return 3;
} }
function Nu(t) { switch (t.type) {
    case O.Universal: return 50;
    case O.Tag: return 30;
    case O.Attribute: return Math.floor(va(t) / (t.ignoreCase ? 2 : 1));
    case O.Pseudo: return t.data ? t.name === "has" || t.name === "contains" || t.name === "icontains" ? 0 : Array.isArray(t.data) ? Math.max(0, Math.min(...t.data.map(e => Math.min(...e.map(Nu))))) : 2 : 3;
    default: return -1;
} }
function Pu(t) { return t.type === O.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some(e => e.some(Pu))); }
var zn = {};
function Aa(t) { return t.some(e => e.length > 0 && (dt(e[0]) || e.some(Pu))); }
function iu(t) { return { xmlMode: !!t.xmlMode, lowerCaseAttributeNames: !!t.lowerCaseAttributeNames, lowerCaseTags: !!t.lowerCaseTags, quirksMode: !!t.quirksMode, cacheResults: !!t.cacheResults, pseudos: t.pseudos, adapter: t.adapter, equals: t.equals }; }
var Yt = (t, e, u, r, n) => { let s = n(e, iu(u), r); return s === M.trueFunc ? t : s === M.falseFunc ? M.falseFunc : i => s(i) && t(i); }, Kt = { is: Yt, matches: Yt, where: Yt, not(t, e, u, r, n) { let s = n(e, iu(u), r); return s === M.falseFunc ? t : s === M.trueFunc ? M.falseFunc : i => !s(i) && t(i); }, has(t, e, u, r, n) { let { adapter: s } = u, i = iu(u); i.relativeSelector = !0; let o = e.some(l => l.some(dt)) ? [zn] : void 0, d = Aa(e), f = n(e, i, o); if (f === M.falseFunc)
        return M.falseFunc; if (o && f !== M.trueFunc)
        return d ? l => { if (!t(l))
            return !1; o[0] = l; let c = s.getChildren(l); return Ge(f, f.shouldTestNextSiblings ? [...c, ...Vn(l, s)] : c, u) !== null; } : tt(t, u, l => (o[0] = l, Ge(f, s.getChildren(l), u) !== null)); let a = l => Ge(f, s.getChildren(l), u) !== null; return d ? l => t(l) && a(l) : tt(t, u, a); } };
function Ea(t, e, u, r, n) { let { name: s, data: i } = e; if (Array.isArray(i)) {
    if (!(s in Kt))
        throw new Error(`Unknown pseudo-class :${s}(${i})`);
    return Kt[s](t, i, u, r, n);
} let o = u.pseudos?.[s], d = typeof o == "string" ? o : ba[s]; if (typeof d == "string") {
    if (i != null)
        throw new Error(`Pseudo ${s} doesn't have any arguments`);
    let f = Eu(d);
    return Kt.is(t, f, u, r, n);
} if (typeof o == "function")
    return Wr(o, s, i, 1), f => o(f, i) && t(f); if (s in su)
    return su[s](t, i, u, r); if (s in Hr) {
    let f = Hr[s];
    return Wr(f, s, i, 2), a => f(a, u, i) && t(a);
} throw new Error(`Unknown pseudo-class :${s}`); }
function Ra(t, e, u, r, n, s) { let { adapter: i, equals: o, cacheResults: d } = u; switch (e.type) {
    case O.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case O.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case O.Attribute: {
        if (e.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!u.xmlMode || u.lowerCaseAttributeNames) && (e.name = e.name.toLowerCase()), ha[e.action](t, e, u);
    }
    case O.Pseudo: return Ea(t, e, u, r, n);
    case O.Tag: {
        if (e.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        let { name: f } = e;
        return (!u.xmlMode || u.lowerCaseTags) && (f = f.toLowerCase()), function (l) { return i.getName(l) === f && t(l); };
    }
    case O.Descendant: {
        if (!s || d === !1 || typeof WeakMap > "u")
            return function (l) { let c = l; for (; c = J(c, i);)
                if (t(c))
                    return !0; return !1; };
        let f = new WeakMap;
        return function (l) { let c = l, p; for (; c = J(c, i);) {
            let h = f.get(c);
            if (h === void 0) {
                if (p ?? (p = { matches: !1 }), p.matches = t(c), f.set(c, p), p.matches)
                    return !0;
            }
            else
                return p && (p.matches = h.matches), h.matches;
        } return !1; };
    }
    case "_flexibleDescendant": return function (a) { let l = a; do {
        if (t(l))
            return !0;
        l = J(l, i);
    } while (l); return !1; };
    case O.Parent: return function (a) { return i.getChildren(a).some(l => i.isTag(l) && t(l)); };
    case O.Child: return function (a) { let l = J(a, i); return l !== null && t(l); };
    case O.Sibling: return function (a) { let l = i.getSiblings(a); for (let c = 0; c < l.length; c++) {
        let p = l[c];
        if (o(a, p))
            break;
        if (i.isTag(p) && t(p))
            return !0;
    } return !1; };
    case O.Adjacent: return i.prevElementSibling ? function (a) { let l = i.prevElementSibling(a); return l != null && t(l); } : function (a) { let l = i.getSiblings(a), c; for (let p = 0; p < l.length; p++) {
        let h = l[p];
        if (o(a, h))
            break;
        i.isTag(h) && (c = h);
    } return !!c && t(c); };
    case O.Universal: {
        if (e.namespace != null && e.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return t;
    }
} }
var Ta = { type: O.Descendant }, Ca = { type: "_flexibleDescendant" }, Na = { type: O.Pseudo, name: "scope", data: null };
function Pa(t, { adapter: e }, u) { let r = !!u?.every(n => n === zn || e.isTag(n) && J(n, e) !== null); for (let n of t) {
    if (!(n.length > 0 && dt(n[0]) && n[0].type !== O.Descendant))
        if (r && !n.some(Pu))
            n.unshift(Ta);
        else
            continue;
    n.unshift(Na);
} }
function jn(t, e, u) { t.forEach(Sa); let { context: r = u, rootFunc: n = M.trueFunc } = e, s = Array.isArray(r), i = r && (Array.isArray(r) ? r : [r]); if (e.relativeSelector !== !1)
    Pa(t, e, i);
else if (t.some(f => f.length > 0 && dt(f[0])))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); let o = !1, d = M.falseFunc; e: for (let f of t) {
    if (f.length >= 2) {
        let [c, p] = f;
        c.type !== O.Pseudo || c.name !== "scope" || (s && p.type === O.Descendant ? f[1] = Ca : (p.type === O.Adjacent || p.type === O.Sibling) && (o = !0));
    }
    let a = n, l = !1;
    for (let c of f)
        if (a = Ra(a, c, e, i, jn, l), Nu(c) === 0 && (l = !0), a === M.falseFunc)
            continue e;
    if (a === n)
        return n;
    d = d === M.falseFunc ? a : ka(d, a);
} return d.shouldTestNextSiblings = o, d; }
function ka(t, e) { return u => t(u) || e(u); }
var Hn = (t, e) => t === e, Ia = { adapter: Un, equals: Hn };
function Wn(t) { let e = t ?? Ia; return e.adapter ?? (e.adapter = Un), e.equals ?? (e.equals = e.adapter?.equals ?? Hn), e; }
function Oa(t, e, u) { return qa(typeof t == "string" ? Eu(t) : t, e, u); }
function qa(t, e, u) { return jn(t, Wn(e), u); }
function Gn(t) { return function (u, r, n) { let s = Wn(n); typeof u != "function" && (u = Oa(u, s, r)); let i = La(r, s.adapter, u.shouldTestNextSiblings); return t(u, i, s); }; }
function La(t, e, u = !1) { return u && (t = _a(t, e)), Array.isArray(t) ? e.removeSubsets(t) : e.getChildren(t); }
function _a(t, e) { let u = Array.isArray(t) ? t.slice(0) : [t], r = u.length; for (let n = 0; n < r; n++) {
    let s = Vn(u[n], e);
    u.push(...s);
} return u; }
var Qn = Gn((t, e, u) => t === M.falseFunc || !e || e.length === 0 ? [] : pa(t, e, u)), ku = Gn((t, e, u) => t === M.falseFunc || !e || e.length === 0 ? null : Ge(t, e, u)), Ma = new Uint16Array('\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map(t => t.charCodeAt(0))), Da = new Uint16Array("\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map(t => t.charCodeAt(0))), eu, Fa = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Gr = (eu = String.fromCodePoint) !== null && eu !== void 0 ? eu : function (t) { let e = ""; return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | t & 1023), e += String.fromCharCode(t), e; };
function Ba(t) { var e; return t >= 55296 && t <= 57343 || t > 1114111 ? 65533 : (e = Fa.get(t)) !== null && e !== void 0 ? e : t; }
var W = (function (t) { return t[t.NUM = 35] = "NUM", t[t.SEMI = 59] = "SEMI", t[t.EQUALS = 61] = "EQUALS", t[t.ZERO = 48] = "ZERO", t[t.NINE = 57] = "NINE", t[t.LOWER_A = 97] = "LOWER_A", t[t.LOWER_F = 102] = "LOWER_F", t[t.LOWER_X = 120] = "LOWER_X", t[t.LOWER_Z = 122] = "LOWER_Z", t[t.UPPER_A = 65] = "UPPER_A", t[t.UPPER_F = 70] = "UPPER_F", t[t.UPPER_Z = 90] = "UPPER_Z", t; })(W || {}), $a = 32, de = (function (t) { return t[t.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t[t.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", t[t.JUMP_TABLE = 127] = "JUMP_TABLE", t; })(de || {});
function au(t) { return t >= W.ZERO && t <= W.NINE; }
function Ua(t) { return t >= W.UPPER_A && t <= W.UPPER_F || t >= W.LOWER_A && t <= W.LOWER_F; }
function Va(t) { return t >= W.UPPER_A && t <= W.UPPER_Z || t >= W.LOWER_A && t <= W.LOWER_Z || au(t); }
function za(t) { return t === W.EQUALS || Va(t); }
var H = (function (t) { return t[t.EntityStart = 0] = "EntityStart", t[t.NumericStart = 1] = "NumericStart", t[t.NumericDecimal = 2] = "NumericDecimal", t[t.NumericHex = 3] = "NumericHex", t[t.NamedEntity = 4] = "NamedEntity", t; })(H || {}), ue = (function (t) { return t[t.Legacy = 0] = "Legacy", t[t.Strict = 1] = "Strict", t[t.Attribute = 2] = "Attribute", t; })(ue || {}), ou = class {
    constructor(e, u, r) { this.decodeTree = e, this.emitCodePoint = u, this.errors = r, this.state = H.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ue.Strict; }
    startEntity(e) { this.decodeMode = e, this.state = H.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; }
    write(e, u) { switch (this.state) {
        case H.EntityStart: return e.charCodeAt(u) === W.NUM ? (this.state = H.NumericStart, this.consumed += 1, this.stateNumericStart(e, u + 1)) : (this.state = H.NamedEntity, this.stateNamedEntity(e, u));
        case H.NumericStart: return this.stateNumericStart(e, u);
        case H.NumericDecimal: return this.stateNumericDecimal(e, u);
        case H.NumericHex: return this.stateNumericHex(e, u);
        case H.NamedEntity: return this.stateNamedEntity(e, u);
    } }
    stateNumericStart(e, u) { return u >= e.length ? -1 : (e.charCodeAt(u) | $a) === W.LOWER_X ? (this.state = H.NumericHex, this.consumed += 1, this.stateNumericHex(e, u + 1)) : (this.state = H.NumericDecimal, this.stateNumericDecimal(e, u)); }
    addToNumericResult(e, u, r, n) { if (u !== r) {
        let s = r - u;
        this.result = this.result * Math.pow(n, s) + Number.parseInt(e.substr(u, s), n), this.consumed += s;
    } }
    stateNumericHex(e, u) { let r = u; for (; u < e.length;) {
        let n = e.charCodeAt(u);
        if (au(n) || Ua(n))
            u += 1;
        else
            return this.addToNumericResult(e, r, u, 16), this.emitNumericEntity(n, 3);
    } return this.addToNumericResult(e, r, u, 16), -1; }
    stateNumericDecimal(e, u) { let r = u; for (; u < e.length;) {
        let n = e.charCodeAt(u);
        if (au(n))
            u += 1;
        else
            return this.addToNumericResult(e, r, u, 10), this.emitNumericEntity(n, 2);
    } return this.addToNumericResult(e, r, u, 10), -1; }
    emitNumericEntity(e, u) { var r; if (this.consumed <= u)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (e === W.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === ue.Strict)
        return 0; return this.emitCodePoint(Ba(this.result), this.consumed), this.errors && (e !== W.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; }
    stateNamedEntity(e, u) { let { decodeTree: r } = this, n = r[this.treeIndex], s = (n & de.VALUE_LENGTH) >> 14; for (; u < e.length; u++, this.excess++) {
        let i = e.charCodeAt(u);
        if (this.treeIndex = ja(r, n, this.treeIndex + Math.max(1, s), i), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === ue.Attribute && (s === 0 || za(i)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (n = r[this.treeIndex], s = (n & de.VALUE_LENGTH) >> 14, s !== 0) {
            if (i === W.SEMI)
                return this.emitNamedEntityData(this.treeIndex, s, this.consumed + this.excess);
            this.decodeMode !== ue.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; }
    emitNotTerminatedNamedEntity() { var e; let { result: u, decodeTree: r } = this, n = (r[u] & de.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(u, n, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed; }
    emitNamedEntityData(e, u, r) { let { decodeTree: n } = this; return this.emitCodePoint(u === 1 ? n[e] & ~de.VALUE_LENGTH : n[e + 1], r), u === 3 && this.emitCodePoint(n[e + 2], r), r; }
    end() { var e; switch (this.state) {
        case H.NamedEntity: return this.result !== 0 && (this.decodeMode !== ue.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case H.NumericDecimal: return this.emitNumericEntity(0, 2);
        case H.NumericHex: return this.emitNumericEntity(0, 3);
        case H.NumericStart: return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case H.EntityStart: return 0;
    } }
};
function ja(t, e, u, r) { let n = (e & de.BRANCH_LENGTH) >> 7, s = e & de.JUMP_TABLE; if (n === 0)
    return s !== 0 && r === s ? u : -1; if (s) {
    let d = r - s;
    return d < 0 || d >= n ? -1 : t[u + d] - 1;
} let i = u, o = i + n - 1; for (; i <= o;) {
    let d = i + o >>> 1, f = t[d];
    if (f < r)
        i = d + 1;
    else if (f > r)
        o = d - 1;
    else
        return t[d + n];
} return -1; }
var k = (function (t) { return t[t.Tab = 9] = "Tab", t[t.NewLine = 10] = "NewLine", t[t.FormFeed = 12] = "FormFeed", t[t.CarriageReturn = 13] = "CarriageReturn", t[t.Space = 32] = "Space", t[t.ExclamationMark = 33] = "ExclamationMark", t[t.Number = 35] = "Number", t[t.Amp = 38] = "Amp", t[t.SingleQuote = 39] = "SingleQuote", t[t.DoubleQuote = 34] = "DoubleQuote", t[t.Dash = 45] = "Dash", t[t.Slash = 47] = "Slash", t[t.Zero = 48] = "Zero", t[t.Nine = 57] = "Nine", t[t.Semi = 59] = "Semi", t[t.Lt = 60] = "Lt", t[t.Eq = 61] = "Eq", t[t.Gt = 62] = "Gt", t[t.Questionmark = 63] = "Questionmark", t[t.UpperA = 65] = "UpperA", t[t.LowerA = 97] = "LowerA", t[t.UpperF = 70] = "UpperF", t[t.LowerF = 102] = "LowerF", t[t.UpperZ = 90] = "UpperZ", t[t.LowerZ = 122] = "LowerZ", t[t.LowerX = 120] = "LowerX", t[t.OpeningSquareBracket = 91] = "OpeningSquareBracket", t; })(k || {}), E = (function (t) { return t[t.Text = 1] = "Text", t[t.BeforeTagName = 2] = "BeforeTagName", t[t.InTagName = 3] = "InTagName", t[t.InSelfClosingTag = 4] = "InSelfClosingTag", t[t.BeforeClosingTagName = 5] = "BeforeClosingTagName", t[t.InClosingTagName = 6] = "InClosingTagName", t[t.AfterClosingTagName = 7] = "AfterClosingTagName", t[t.BeforeAttributeName = 8] = "BeforeAttributeName", t[t.InAttributeName = 9] = "InAttributeName", t[t.AfterAttributeName = 10] = "AfterAttributeName", t[t.BeforeAttributeValue = 11] = "BeforeAttributeValue", t[t.InAttributeValueDq = 12] = "InAttributeValueDq", t[t.InAttributeValueSq = 13] = "InAttributeValueSq", t[t.InAttributeValueNq = 14] = "InAttributeValueNq", t[t.BeforeDeclaration = 15] = "BeforeDeclaration", t[t.InDeclaration = 16] = "InDeclaration", t[t.InProcessingInstruction = 17] = "InProcessingInstruction", t[t.BeforeComment = 18] = "BeforeComment", t[t.CDATASequence = 19] = "CDATASequence", t[t.InSpecialComment = 20] = "InSpecialComment", t[t.InCommentLike = 21] = "InCommentLike", t[t.BeforeSpecialS = 22] = "BeforeSpecialS", t[t.BeforeSpecialT = 23] = "BeforeSpecialT", t[t.SpecialStartSequence = 24] = "SpecialStartSequence", t[t.InSpecialTag = 25] = "InSpecialTag", t[t.InEntity = 26] = "InEntity", t; })(E || {});
function te(t) { return t === k.Space || t === k.NewLine || t === k.Tab || t === k.FormFeed || t === k.CarriageReturn; }
function We(t) { return t === k.Slash || t === k.Gt || te(t); }
function Ha(t) { return t >= k.LowerA && t <= k.LowerZ || t >= k.UpperA && t <= k.UpperZ; }
var re = (function (t) { return t[t.NoValue = 0] = "NoValue", t[t.Unquoted = 1] = "Unquoted", t[t.Single = 2] = "Single", t[t.Double = 3] = "Double", t; })(re || {}), V = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]), XmpEnd: new Uint8Array([60, 47, 120, 109, 112]) }, cu = class {
    constructor({ xmlMode: e = !1, decodeEntities: u = !0 }, r) { this.cbs = r, this.state = E.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = E.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = e, this.decodeEntities = u, this.entityDecoder = new ou(e ? Da : Ma, (n, s) => this.emitCodePoint(n, s)); }
    reset() { this.state = E.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = E.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; }
    write(e) { this.offset += this.buffer.length, this.buffer = e, this.parse(); }
    end() { this.running && this.finish(); }
    pause() { this.running = !1; }
    resume() { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); }
    stateText(e) { e === k.Lt || !this.decodeEntities && this.fastForwardTo(k.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = E.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && e === k.Amp && this.startEntity(); }
    stateSpecialStartSequence(e) { let u = this.sequenceIndex === this.currentSequence.length; if (!(u ? We(e) : (e | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!u) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = E.InTagName, this.stateInTagName(e); }
    stateInSpecialTag(e) { if (this.sequenceIndex === this.currentSequence.length) {
        if (e === k.Gt || te(e)) {
            let u = this.index - this.currentSequence.length;
            if (this.sectionStart < u) {
                let r = this.index;
                this.index = u, this.cbs.ontext(this.sectionStart, u), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = u + 2, this.stateInClosingTagName(e);
            return;
        }
        this.sequenceIndex = 0;
    } (e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === V.TitleEnd ? this.decodeEntities && e === k.Amp && this.startEntity() : this.fastForwardTo(k.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === k.Lt); }
    stateCDATASequence(e) { e === V.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === V.Cdata.length && (this.state = E.InCommentLike, this.currentSequence = V.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = E.InDeclaration, this.stateInDeclaration(e)); }
    fastForwardTo(e) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === e)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; }
    stateInCommentLike(e) { e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === V.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = E.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); }
    isTagStartChar(e) { return this.xmlMode ? !We(e) : Ha(e); }
    startSpecial(e, u) { this.isSpecial = !0, this.currentSequence = e, this.sequenceIndex = u, this.state = E.SpecialStartSequence; }
    stateBeforeTagName(e) { if (e === k.ExclamationMark)
        this.state = E.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (e === k.Questionmark)
        this.state = E.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(e)) {
        let u = e | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = E.InTagName : u === V.ScriptEnd[2] ? this.state = E.BeforeSpecialS : u === V.TitleEnd[2] || u === V.XmpEnd[2] ? this.state = E.BeforeSpecialT : this.state = E.InTagName;
    }
    else
        e === k.Slash ? this.state = E.BeforeClosingTagName : (this.state = E.Text, this.stateText(e)); }
    stateInTagName(e) { We(e) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = E.BeforeAttributeName, this.stateBeforeAttributeName(e)); }
    stateBeforeClosingTagName(e) { te(e) || (e === k.Gt ? this.state = E.Text : (this.state = this.isTagStartChar(e) ? E.InClosingTagName : E.InSpecialComment, this.sectionStart = this.index)); }
    stateInClosingTagName(e) { (e === k.Gt || te(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = E.AfterClosingTagName, this.stateAfterClosingTagName(e)); }
    stateAfterClosingTagName(e) { (e === k.Gt || this.fastForwardTo(k.Gt)) && (this.state = E.Text, this.sectionStart = this.index + 1); }
    stateBeforeAttributeName(e) { e === k.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = E.InSpecialTag, this.sequenceIndex = 0) : this.state = E.Text, this.sectionStart = this.index + 1) : e === k.Slash ? this.state = E.InSelfClosingTag : te(e) || (this.state = E.InAttributeName, this.sectionStart = this.index); }
    stateInSelfClosingTag(e) { e === k.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = E.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : te(e) || (this.state = E.BeforeAttributeName, this.stateBeforeAttributeName(e)); }
    stateInAttributeName(e) { (e === k.Eq || We(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = E.AfterAttributeName, this.stateAfterAttributeName(e)); }
    stateAfterAttributeName(e) { e === k.Eq ? this.state = E.BeforeAttributeValue : e === k.Slash || e === k.Gt ? (this.cbs.onattribend(re.NoValue, this.sectionStart), this.sectionStart = -1, this.state = E.BeforeAttributeName, this.stateBeforeAttributeName(e)) : te(e) || (this.cbs.onattribend(re.NoValue, this.sectionStart), this.state = E.InAttributeName, this.sectionStart = this.index); }
    stateBeforeAttributeValue(e) { e === k.DoubleQuote ? (this.state = E.InAttributeValueDq, this.sectionStart = this.index + 1) : e === k.SingleQuote ? (this.state = E.InAttributeValueSq, this.sectionStart = this.index + 1) : te(e) || (this.sectionStart = this.index, this.state = E.InAttributeValueNq, this.stateInAttributeValueNoQuotes(e)); }
    handleInAttributeValue(e, u) { e === u || !this.decodeEntities && this.fastForwardTo(u) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(u === k.DoubleQuote ? re.Double : re.Single, this.index + 1), this.state = E.BeforeAttributeName) : this.decodeEntities && e === k.Amp && this.startEntity(); }
    stateInAttributeValueDoubleQuotes(e) { this.handleInAttributeValue(e, k.DoubleQuote); }
    stateInAttributeValueSingleQuotes(e) { this.handleInAttributeValue(e, k.SingleQuote); }
    stateInAttributeValueNoQuotes(e) { te(e) || e === k.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(re.Unquoted, this.index), this.state = E.BeforeAttributeName, this.stateBeforeAttributeName(e)) : this.decodeEntities && e === k.Amp && this.startEntity(); }
    stateBeforeDeclaration(e) { e === k.OpeningSquareBracket ? (this.state = E.CDATASequence, this.sequenceIndex = 0) : this.state = e === k.Dash ? E.BeforeComment : E.InDeclaration; }
    stateInDeclaration(e) { (e === k.Gt || this.fastForwardTo(k.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = E.Text, this.sectionStart = this.index + 1); }
    stateInProcessingInstruction(e) { (e === k.Gt || this.fastForwardTo(k.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = E.Text, this.sectionStart = this.index + 1); }
    stateBeforeComment(e) { e === k.Dash ? (this.state = E.InCommentLike, this.currentSequence = V.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = E.InDeclaration; }
    stateInSpecialComment(e) { (e === k.Gt || this.fastForwardTo(k.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = E.Text, this.sectionStart = this.index + 1); }
    stateBeforeSpecialS(e) { let u = e | 32; u === V.ScriptEnd[3] ? this.startSpecial(V.ScriptEnd, 4) : u === V.StyleEnd[3] ? this.startSpecial(V.StyleEnd, 4) : (this.state = E.InTagName, this.stateInTagName(e)); }
    stateBeforeSpecialT(e) { switch (e | 32) {
        case V.TitleEnd[3]: {
            this.startSpecial(V.TitleEnd, 4);
            break;
        }
        case V.TextareaEnd[3]: {
            this.startSpecial(V.TextareaEnd, 4);
            break;
        }
        case V.XmpEnd[3]: {
            this.startSpecial(V.XmpEnd, 4);
            break;
        }
        default: this.state = E.InTagName, this.stateInTagName(e);
    } }
    startEntity() { this.baseState = this.state, this.state = E.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? ue.Strict : this.baseState === E.Text || this.baseState === E.InSpecialTag ? ue.Legacy : ue.Attribute); }
    stateInEntity() { let e = this.entityDecoder.write(this.buffer, this.index - this.offset); e >= 0 ? (this.state = this.baseState, e === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; }
    cleanup() { this.running && this.sectionStart !== this.index && (this.state === E.Text || this.state === E.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === E.InAttributeValueDq || this.state === E.InAttributeValueSq || this.state === E.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); }
    shouldContinue() { return this.index < this.buffer.length + this.offset && this.running; }
    parse() { for (; this.shouldContinue();) {
        let e = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case E.Text: {
                this.stateText(e);
                break;
            }
            case E.SpecialStartSequence: {
                this.stateSpecialStartSequence(e);
                break;
            }
            case E.InSpecialTag: {
                this.stateInSpecialTag(e);
                break;
            }
            case E.CDATASequence: {
                this.stateCDATASequence(e);
                break;
            }
            case E.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(e);
                break;
            }
            case E.InAttributeName: {
                this.stateInAttributeName(e);
                break;
            }
            case E.InCommentLike: {
                this.stateInCommentLike(e);
                break;
            }
            case E.InSpecialComment: {
                this.stateInSpecialComment(e);
                break;
            }
            case E.BeforeAttributeName: {
                this.stateBeforeAttributeName(e);
                break;
            }
            case E.InTagName: {
                this.stateInTagName(e);
                break;
            }
            case E.InClosingTagName: {
                this.stateInClosingTagName(e);
                break;
            }
            case E.BeforeTagName: {
                this.stateBeforeTagName(e);
                break;
            }
            case E.AfterAttributeName: {
                this.stateAfterAttributeName(e);
                break;
            }
            case E.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(e);
                break;
            }
            case E.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(e);
                break;
            }
            case E.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(e);
                break;
            }
            case E.AfterClosingTagName: {
                this.stateAfterClosingTagName(e);
                break;
            }
            case E.BeforeSpecialS: {
                this.stateBeforeSpecialS(e);
                break;
            }
            case E.BeforeSpecialT: {
                this.stateBeforeSpecialT(e);
                break;
            }
            case E.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(e);
                break;
            }
            case E.InSelfClosingTag: {
                this.stateInSelfClosingTag(e);
                break;
            }
            case E.InDeclaration: {
                this.stateInDeclaration(e);
                break;
            }
            case E.BeforeDeclaration: {
                this.stateBeforeDeclaration(e);
                break;
            }
            case E.BeforeComment: {
                this.stateBeforeComment(e);
                break;
            }
            case E.InProcessingInstruction: {
                this.stateInProcessingInstruction(e);
                break;
            }
            case E.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); }
    finish() { this.state === E.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); }
    handleTrailingData() { let e = this.buffer.length + this.offset; this.sectionStart >= e || (this.state === E.InCommentLike ? this.currentSequence === V.CdataEnd ? this.cbs.oncdata(this.sectionStart, e, 0) : this.cbs.oncomment(this.sectionStart, e, 0) : this.state === E.InTagName || this.state === E.BeforeAttributeName || this.state === E.BeforeAttributeValue || this.state === E.AfterAttributeName || this.state === E.InAttributeName || this.state === E.InAttributeValueSq || this.state === E.InAttributeValueDq || this.state === E.InAttributeValueNq || this.state === E.InClosingTagName || this.cbs.ontext(this.sectionStart, e)); }
    emitCodePoint(e, u) { this.baseState !== E.Text && this.baseState !== E.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.onattribentity(e)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.ontextentity(e, this.sectionStart)); }
}, Ae = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), F = new Set(["p"]), Qr = new Set(["thead", "tbody"]), Xr = new Set(["dd", "dt"]), Zr = new Set(["rt", "rp"]), Wa = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", F], ["h1", F], ["h2", F], ["h3", F], ["h4", F], ["h5", F], ["h6", F], ["select", Ae], ["input", Ae], ["output", Ae], ["button", Ae], ["datalist", Ae], ["textarea", Ae], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Xr], ["dt", Xr], ["address", F], ["article", F], ["aside", F], ["blockquote", F], ["details", F], ["div", F], ["dl", F], ["fieldset", F], ["figcaption", F], ["figure", F], ["footer", F], ["form", F], ["header", F], ["hr", F], ["main", F], ["nav", F], ["ol", F], ["pre", F], ["section", F], ["table", F], ["ul", F], ["rt", Zr], ["rp", Zr], ["tbody", Qr], ["tfoot", Qr]]), Ga = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Jr = new Set(["math", "svg"]), Yr = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), Qa = /\s|\//, lu = class {
    constructor(e, u = {}) { var r, n, s, i, o, d; this.options = u, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e ?? {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = u.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (n = u.lowerCaseAttributeNames) !== null && n !== void 0 ? n : this.htmlMode, this.recognizeSelfClosing = (s = u.recognizeSelfClosing) !== null && s !== void 0 ? s : !this.htmlMode, this.tokenizer = new ((i = u.Tokenizer) !== null && i !== void 0 ? i : cu)(this.options, this), this.foreignContext = [!this.htmlMode], (d = (o = this.cbs).onparserinit) === null || d === void 0 || d.call(o, this); }
    ontext(e, u) { var r, n; let s = this.getSlice(e, u); this.endIndex = u - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, s), this.startIndex = u; }
    ontextentity(e, u) { var r, n; this.endIndex = u - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, Gr(e)), this.startIndex = u; }
    isVoidElement(e) { return this.htmlMode && Ga.has(e); }
    onopentagname(e, u) { this.endIndex = u; let r = this.getSlice(e, u); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); }
    emitOpenTag(e) { var u, r, n, s; this.openTagStart = this.startIndex, this.tagname = e; let i = this.htmlMode && Wa.get(e); if (i)
        for (; this.stack.length > 0 && i.has(this.stack[0]);) {
            let o = this.stack.shift();
            (r = (u = this.cbs).onclosetag) === null || r === void 0 || r.call(u, o, !0);
        } this.isVoidElement(e) || (this.stack.unshift(e), this.htmlMode && (Jr.has(e) ? this.foreignContext.unshift(!0) : Yr.has(e) && this.foreignContext.unshift(!1))), (s = (n = this.cbs).onopentagname) === null || s === void 0 || s.call(n, e), this.cbs.onopentag && (this.attribs = {}); }
    endOpenTag(e) { var u, r; this.startIndex = this.openTagStart, this.attribs && ((r = (u = this.cbs).onopentag) === null || r === void 0 || r.call(u, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; }
    onopentagend(e) { this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1; }
    onclosetag(e, u) { var r, n, s, i, o, d, f, a; this.endIndex = u; let l = this.getSlice(e, u); if (this.lowerCaseTagNames && (l = l.toLowerCase()), this.htmlMode && (Jr.has(l) || Yr.has(l)) && this.foreignContext.shift(), this.isVoidElement(l))
        this.htmlMode && l === "br" && ((i = (s = this.cbs).onopentagname) === null || i === void 0 || i.call(s, "br"), (d = (o = this.cbs).onopentag) === null || d === void 0 || d.call(o, "br", {}, !0), (a = (f = this.cbs).onclosetag) === null || a === void 0 || a.call(f, "br", !1));
    else {
        let c = this.stack.indexOf(l);
        if (c !== -1)
            for (let p = 0; p <= c; p++) {
                let h = this.stack.shift();
                (n = (r = this.cbs).onclosetag) === null || n === void 0 || n.call(r, h, p !== c);
            }
        else
            this.htmlMode && l === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = u + 1; }
    onselfclosingtag(e) { this.endIndex = e, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e); }
    closeCurrentTag(e) { var u, r; let n = this.tagname; this.endOpenTag(e), this.stack[0] === n && ((r = (u = this.cbs).onclosetag) === null || r === void 0 || r.call(u, n, !e), this.stack.shift()); }
    onattribname(e, u) { this.startIndex = e; let r = this.getSlice(e, u); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; }
    onattribdata(e, u) { this.attribvalue += this.getSlice(e, u); }
    onattribentity(e) { this.attribvalue += Gr(e); }
    onattribend(e, u) { var r, n; this.endIndex = u, (n = (r = this.cbs).onattribute) === null || n === void 0 || n.call(r, this.attribname, this.attribvalue, e === re.Double ? '"' : e === re.Single ? "'" : e === re.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; }
    getInstructionName(e) { let u = e.search(Qa), r = u < 0 ? e : e.substr(0, u); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; }
    ondeclaration(e, u) { this.endIndex = u; let r = this.getSlice(e, u); if (this.cbs.onprocessinginstruction) {
        let n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction(`!${n}`, `!${r}`);
    } this.startIndex = u + 1; }
    onprocessinginstruction(e, u) { this.endIndex = u; let r = this.getSlice(e, u); if (this.cbs.onprocessinginstruction) {
        let n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction(`?${n}`, `?${r}`);
    } this.startIndex = u + 1; }
    oncomment(e, u, r) { var n, s, i, o; this.endIndex = u, (s = (n = this.cbs).oncomment) === null || s === void 0 || s.call(n, this.getSlice(e, u - r)), (o = (i = this.cbs).oncommentend) === null || o === void 0 || o.call(i), this.startIndex = u + 1; }
    oncdata(e, u, r) { var n, s, i, o, d, f, a, l, c, p; this.endIndex = u; let h = this.getSlice(e, u - r); !this.htmlMode || this.options.recognizeCDATA ? ((s = (n = this.cbs).oncdatastart) === null || s === void 0 || s.call(n), (o = (i = this.cbs).ontext) === null || o === void 0 || o.call(i, h), (f = (d = this.cbs).oncdataend) === null || f === void 0 || f.call(d)) : ((l = (a = this.cbs).oncomment) === null || l === void 0 || l.call(a, `[CDATA[${h}]]`), (p = (c = this.cbs).oncommentend) === null || p === void 0 || p.call(c)), this.startIndex = u + 1; }
    onend() { var e, u; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (let r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (u = (e = this.cbs).onend) === null || u === void 0 || u.call(e); }
    reset() { var e, u, r, n; (u = (e = this.cbs).onreset) === null || u === void 0 || u.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (r = this.cbs).onparserinit) === null || n === void 0 || n.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; }
    parseComplete(e) { this.reset(), this.end(e); }
    getSlice(e, u) { for (; e - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); let r = this.buffers[0].slice(e - this.bufferOffset, u - this.bufferOffset); for (; u - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, u - this.bufferOffset); return r; }
    shiftBuffer() { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); }
    write(e) { var u, r; if (this.ended) {
        (r = (u = this.cbs).onerror) === null || r === void 0 || r.call(u, new Error(".write() after done!"));
        return;
    } this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++); }
    end(e) { var u, r; if (this.ended) {
        (r = (u = this.cbs).onerror) === null || r === void 0 || r.call(u, new Error(".end() after done!"));
        return;
    } e && this.write(e), this.ended = !0, this.tokenizer.end(); }
    pause() { this.tokenizer.pause(); }
    resume() { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); }
    parseChunk(e) { this.write(e); }
    done(e) { this.end(e); }
};
function Xa(t, e) { let u = new uu(void 0, e); return new lu(u, e).end(t), u.root; }
var Za = mn(), Ce = nt(Za);
function Kr(t) { return ei(t); }
function en(t, e) { let u = []; return Ks(t, (r, n, s) => { if (!(n?.type === "decl" && n.value.includes("</style>"))) {
    if (!e.compress) {
        u.push(r);
        return;
    }
    if (n?.type !== "comment") {
        if (n?.type === "decl") {
            let i = n.prop + n.raws.between;
            u.push(r.replace(i, i.trim()));
            return;
        }
        if (s === "start") {
            n?.type === "rule" && n.selectors ? n.selectors.length === 1 ? u.push(n.selectors[0] ?? "", "{") : u.push(n.selectors.join(","), "{") : u.push(r.trim());
            return;
        }
        if (s === "end" && r === "}" && n?.raws?.semicolon) {
            let i = u.length - 2;
            i >= 0 && u[i] && (u[i] = u[i].slice(0, -1));
        }
        u.push(r.trim());
    }
} }), u.join(""); }
function Ja(t) { return e => { let u = "selectors" in e ? e.selectors : void 0; t(e) === !1 && (e.$$remove = !0), "selectors" in e && (e.$$markedSelectors = e.selectors, e.selectors = u), e._other && (e._other.$$markedSelectors = e._other.selectors); }; }
function Xn(t) { t.$$markedSelectors && (t.selectors = t.$$markedSelectors), t._other && Xn(t._other); }
function Iu(t, e) { "nodes" in t && (t.nodes = t.nodes?.filter(u => (Jn(u) && Iu(u, e), u._other = void 0, u.filterSelectors = Kn, e(u) !== !1))); }
function Zn(t, e, u) { if (!e)
    return Iu(t, u); [t.nodes, e.nodes] = Yn(t.nodes, e.nodes, (r, n, s, i) => { let o = i?.[n]; return Jn(r) && Zn(r, o, u), r._other = o, r.filterSelectors = Kn, u(r) !== !1; }); }
function Jn(t) { return "nodes" in t && !!t.nodes?.length && (!("name" in t) || t.name !== "keyframes" && t.name !== "-webkit-keyframes") && t.nodes.some(e => e.type === "rule" || e.type === "atrule"); }
function Yn(t, e, u) { let r = [], n = []; for (let s = 0; s < t.length; s++) {
    let i = t[s];
    u(i, s, t, e) ? r.push(i) : n.push(i);
} return [r, n]; }
function Kn(t) { if (this._other) {
    let [e, u] = Yn(this.selectors, this._other.selectors, t);
    this.selectors = e, this._other.selectors = u;
}
else
    this.selectors = this.selectors.filter(t); }
var Ya = new Set(["all", "print", "screen", "speech"]), Ka = new Set(["and", "not", ","]), eo = new Set(["width", "aspect-ratio", "color", "color-index", "grid", "height", "monochrome", "orientation", "resolution", "scan"].flatMap(t => [t, `min-${t}`, `max-${t}`]));
function to(t) { let { type: e, value: u } = t; if (e === "media-type")
    return Ya.has(u); if (e === "keyword")
    return Ka.has(u); if (e === "media-feature")
    return eo.has(u); }
function uo(t) { let u = ("default" in Gt ? Gt.default : Gt)(t), r = new Set(["media-type", "keyword", "media-feature"]), n = [u]; for (; n.length > 0;) {
    let s = n.pop();
    if (r.has(s.type) && !to(s))
        return !1;
    s.nodes && n.push(...s.nodes);
} return !0; }
var fu = null, du = null;
function ro(t) { fu = new Set, du = new Set; let e = [t]; for (; e.length;) {
    let u = e.shift();
    if (u.hasAttribute?.("class") && u.getAttribute("class").trim().split(" ").forEach(n => { fu.add(n); }), u.hasAttribute?.("id")) {
        let r = u.getAttribute("id").trim();
        du.add(r);
    }
    "children" in u && e.push(...u.children.filter(r => r.type === "tag"));
} }
function no(t) { let e = Xa(t, { decodeEntities: !1 }); ao(e), io(Ee.prototype); let u = e.querySelector("[data-beasties-container]"); return u || (e.documentElement?.setAttribute("data-beasties-container", ""), u = e.documentElement || e), e.beastiesContainer = u, ro(u), e; }
function so(t) { return ft(t, { decodeEntities: !1 }); }
var tn = !1;
function io(t) { tn || (tn = !0, Object.defineProperties(t, { nodeName: { get() { return this.tagName.toUpperCase(); } }, id: { get() { return this.getAttribute("id"); }, set(e) { this.setAttribute("id", e); } }, className: { get() { return this.getAttribute("class"); }, set(e) { this.setAttribute("class", e); } }, insertBefore: { value(e, u) { return u ? (_n(u, e), e) : this.appendChild(e); } }, appendChild: { value(e) { return nu(this, e), e; } }, removeChild: { value(e) { ge(e); } }, remove: { value() { ge(this); } }, textContent: { get() { return Ne(this); }, set(e) { this.children = [], nu(this, new be(e)); } }, setAttribute: { value(e, u) { this.attribs == null && (this.attribs = {}), u == null && (u = ""), this.attribs[e] = u; } }, removeAttribute: { value(e) { this.attribs != null && delete this.attribs[e]; } }, getAttribute: { value(e) { return this.attribs != null && this.attribs[e]; } }, hasAttribute: { value(e) { return this.attribs != null && this.attribs[e] != null; } }, getAttributeNode: { value(e) { let u = this.getAttribute(e); if (u != null)
            return { specified: !0, value: u }; } }, exists: { value(e) { return es(e, this); } }, querySelector: { value(e) { return ku(e, this); } }, querySelectorAll: { value(e) { return Qn(e, this); } } })); }
function ao(t) { Object.defineProperties(t, { nodeType: { get() { return 9; } }, contentType: { get() { return "text/html"; } }, nodeName: { get() { return "#document"; } }, documentElement: { get() { return this.children.find(e => "tagName" in e && String(e.tagName).toLowerCase() === "html"); } }, head: { get() { return this.querySelector("head"); } }, body: { get() { return this.querySelector("body"); } }, createElement: { value(e) { return new Ee(e, {}); } }, createTextNode: { value(e) { return new be(e); } }, exists: { value(e) { return es(e, this); } }, querySelector: { value(e) { return ku(e, this); } }, querySelectorAll: { value(e) { return e === ":root" ? this : Qn(e, this); } } }); }
var un = new Map;
function es(t, e) { let u = un.get(t); if (u === void 0 && (u = oo(t), un.set(t, u)), u)
    for (let r of u) {
        if (r.name === "class")
            return fu.has(r.value);
        if (r.name === "id")
            return du.has(r.value);
    } return !!ku(t, e); }
function oo(t) { let e = Eu(t), u = []; for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (n?.length !== 1)
        continue;
    let s = n[0];
    s?.type === "attribute" && (s.name === "class" || s.name === "id") && u.push(s);
} return u.length > 0 ? u : null; }
var rn = ["trace", "debug", "info", "warn", "error", "silent"], nn = { trace(t) { console.trace(t); }, debug(t) { console.debug(t); }, warn(t) { console.warn(Ce.yellow(t)); }, error(t) { console.error(Ce.bold(Ce.red(t))); }, info(t) { console.info(Ce.bold(Ce.blue(t))); }, silent() { } };
function co(t) { let e = rn.indexOf(t); return rn.reduce((u, r, n) => (n >= e ? u[r] = nn[r] : u[r] = nn.silent, u), {}); }
function lo(t, e) { return !pe.relative(t, e).startsWith(".."); }
var fo = new RegExp("(?<!\\\\)::?[a-z-]+(?:\\(.+\\))?", "gi"), ho = /([>+~])\s*(?!\1)([>+~])/g, po = /([>+~])\s*(?=\1|$)/g, bo = /\(\s*,|,\s*\)/g, ut = class {
    #e = new Map;
    options;
    logger;
    fs;
    constructor(e = {}) { this.options = Object.assign({ logLevel: "info", path: "", publicPath: "", reduceInlineStyles: !0, pruneSource: !1, additionalStylesheets: [], allowRules: [] }, e), this.logger = this.options.logger || co(this.options.logLevel); }
    readFile(e) { let u = this.fs; return new Promise((r, n) => { let s = (i, o) => { i ? n(i) : r(o.toString()); }; u && u.readFile ? u.readFile(e, s) : qs(e, "utf-8", s); }); }
    writeFile(e, u) { let r = this.fs; return new Promise((n, s) => { let i = o => { o ? s(o) : n(); }; r && r.writeFile ? r.writeFile(e, u, i) : Ls(e, u, i); }); }
    process(e) { return B(this, null, function* () { let u = Date.now(), r = no(e); if (this.options.additionalStylesheets.length > 0 && (yield this.embedAdditionalStylesheet(r)), this.options.external !== !1) {
        let o = [...r.querySelectorAll('link[rel="stylesheet"]')];
        yield Promise.all(o.map(d => this.embedLinkedStylesheet(d, r)));
    } let n = this.getAffectedStyleTags(r); for (let o of n)
        this.processStyle(o, r); this.options.mergeStylesheets !== !1 && n.length !== 0 && this.mergeStylesheets(r); let s = so(r), i = Date.now(); return this.logger.info?.(`Time ${i - u}ms`), s; }); }
    getAffectedStyleTags(e) { let u = [...e.querySelectorAll("style")]; return this.options.reduceInlineStyles === !1 ? u.filter(r => r.$$external) : u; }
    mergeStylesheets(e) { let u = this.getAffectedStyleTags(e); if (u.length === 0) {
        this.logger.warn?.("Merging inline stylesheets into a single <style> tag skipped, no inline stylesheets to merge");
        return;
    } let r = u[0], n = r.textContent; for (let s = 1; s < u.length; s++) {
        let i = u[s];
        n += i.textContent, i.remove();
    } r.textContent = n; }
    getCssAsset(e, u) { return B(this, null, function* () { let r = this.options.path, n = this.options.publicPath, s = e.replace(/^\//, ""), i = `${(n || "").replace(/(^\/|\/$)/g, "")}/`; if (s.startsWith(i) && (s = s.substring(i.length).replace(/^\//, "")), /^https?:\/\//.test(s) || e.startsWith("//"))
        return; let o = pe.resolve(r, s); if (!lo(r, o))
        return; let d; try {
        d = yield this.readFile(o);
    }
    catch {
        this.logger.warn?.(`Unable to locate stylesheet: ${o}`);
    } return d; }); }
    checkInlineThreshold(e, u, r) { if (this.options.inlineThreshold && r.length < this.options.inlineThreshold) {
        let n = u.$$name;
        return u.$$reduce = !1, this.logger.info?.(`\x1B[32mInlined all of ${n} (${r.length} was below the threshold of ${this.options.inlineThreshold})\x1B[39m`), e.remove(), !0;
    } return !1; }
    embedAdditionalStylesheet(e) { return B(this, null, function* () { let u = [], r = yield Promise.all(this.options.additionalStylesheets.map(n => { if (u.includes(n))
        return []; u.push(n); let s = e.createElement("style"); return s.$$external = !0, this.getCssAsset(n, s).then(i => [i, s]); })); for (let [n, s] of r)
        n && (s.textContent = n, e.head.appendChild(s)); }); }
    embedLinkedStylesheet(e, u) { return B(this, null, function* () { let r = e.getAttribute("href"); if (!r?.endsWith(".css"))
        return; let n = u.createElement("style"); n.$$external = !0; let s = yield this.getCssAsset(r, n); if (!s || (n.textContent = s, n.$$name = r, n.$$links = [e], e.parentNode?.insertBefore(n, e), this.checkInlineThreshold(e, n, s)))
        return; let i = e.getAttribute("media"); i && !uo(i) && (i = void 0); let o = this.options.preload, d = "function $loadcss(u,m,l){(l=document.createElement('link')).rel='stylesheet';l.href=u;document.head.appendChild(l)}"; if (o === "js-lazy" && (d = d.replace("l.href", "l.media='print';l.onload=function(){l.media=m};l.href")), o === !1)
        return; let a = !1, l = !1, c = e.cloneNode(!1); if (o === "body")
        u.body.appendChild(e);
    else if (o === "js" || o === "js-lazy") {
        let p = u.createElement("script");
        p.setAttribute("data-href", r), p.setAttribute("data-media", i || "all");
        let h = `${d}$loadcss(document.currentScript.dataset.href,document.currentScript.dataset.media)`;
        p.textContent = h, e.parentNode.insertBefore(p, e.nextSibling), n.$$links.push(p), d = "", a = !0, l = !0;
    }
    else if (o === "media")
        e.setAttribute("media", "print"), e.setAttribute("onload", `this.media='${i || "all"}'`), a = !0;
    else if (o === "swap-high")
        e.setAttribute("rel", "alternate stylesheet preload"), e.setAttribute("title", "styles"), e.setAttribute("onload", "this.title='';this.rel='stylesheet'"), a = !0;
    else if (o === "swap-low")
        e.setAttribute("rel", "alternate stylesheet"), e.setAttribute("title", "styles"), e.setAttribute("onload", "this.title='';this.rel='stylesheet'"), a = !0;
    else if (o === "swap")
        e.setAttribute("onload", "this.rel='stylesheet'"), l = !0, a = !0;
    else {
        let p = e.cloneNode(!1);
        p.removeAttribute("id"), u.body.appendChild(p), n.$$links.push(p), l = !0;
    } if (this.options.noscriptFallback !== !1 && a && !r.includes("</noscript>")) {
        let p = u.createElement("noscript");
        c.removeAttribute("id"), p.appendChild(c), e.parentNode.insertBefore(p, e.nextSibling), n.$$links.push(p);
    } l && (e.setAttribute("rel", "preload"), e.setAttribute("as", "style")); }); }
    pruneSource(e, u, r) { let n = this.options.minimumExternalSize, s = e.$$name, i = n && r.length < n; if (i && this.logger.info?.(`\x1B[32mInlined all of ${s} (non-critical external stylesheet would have been ${r.length}b, which was below the threshold of ${n})\x1B[39m`), (i || !r) && (e.textContent = u, e.$$links))
        for (let o of e.$$links)
            o.parentNode?.removeChild(o); return !!i; }
    processStyle(e, u) {
        if (e.$$reduce === !1)
            return;
        let r = e.$$name ? e.$$name.replace(/^\//, "") : "inline CSS", n = this.options, s = u.beastiesContainer, i = n.keyframes ?? "critical";
        i === !0 && (i = "all"), i === !1 && (i = "none");
        let o = e.textContent, d = o;
        if (!o)
            return;
        let f = Kr(o), a = n.pruneSource ? Kr(o) : null, l = "", c = [], p = new Set, h = !1, b = !1, g = !1, m = !1, x = n.fonts === !0 || n.preloadFonts === !0, y = n.fonts !== !1 && n.inlineFonts === !0;
        Iu(f, Ja(S => { if (S.type === "comment") {
            let A = S.text.match(new RegExp("^(?<!! )beasties:(.*)")), I = A && A[1];
            if (I)
                switch (I) {
                    case "include":
                        h = !0;
                        break;
                    case "exclude":
                        g = !0;
                        break;
                    case "include start":
                        b = !0;
                        break;
                    case "include end":
                        b = !1;
                        break;
                    case "exclude start":
                        m = !0;
                        break;
                    case "exclude end":
                        m = !1;
                        break;
                }
        } if (S.type === "rule") {
            if (h)
                return h = !1, !0;
            if (g)
                return g = !1, !1;
            if (b)
                return !0;
            if (m || (S.filterSelectors?.(A => { if (n.allowRules.some(q => q instanceof RegExp ? q.test(A) : q === A) || A === ":root" || A === "html" || A === "body" || A[0] === ":" && /^::?(?:before|after)$/.test(A))
                return !0; if (A = this.normalizeCssSelector(A), !A)
                return !1; try {
                return s.exists(A);
            }
            catch (q) {
                return c.push(`${A} -> ${q.message || q.toString()}`), !1;
            } }), !S.selector))
                return !1;
            if (S.nodes) {
                for (let A of S.nodes)
                    if ("prop" in A && (y && /\bfont(?:-family)?\b/i.test(A.prop) && (l += ` ${A.value}`), A.prop === "animation" || A.prop === "animation-name"))
                        for (let I of A.value.split(/\s+/)) {
                            let q = I.trim();
                            q && p.add(q);
                        }
            }
        } return S.type === "atrule" && (S.name === "font-face" || S.name === "layer") ? void 0 : ("nodes" in S && S.nodes?.some(A => !A.$$remove)) ?? !0; })), c.length !== 0 && this.logger.warn?.(`${c.length} rules skipped due to selector errors:
  ${c.join(`
  `)}`);
        let R = new Set;
        if (Zn(f, a, S => { if (S.$$remove === !0)
            return !1; if ("selectors" in S && Xn(S), S.type === "atrule" && S.name === "keyframes")
            return i === "none" ? !1 : i === "all" ? !0 : p.has(S.params); if (S.type === "atrule" && S.name === "font-face") {
            let T, A;
            if (S.nodes) {
                for (let I of S.nodes)
                    "prop" in I && (I.prop === "src" ? A = (I.value.match(/url\s*\(\s*(['"]?)(.+?)\1\s*\)/) || [])[2] : I.prop === "font-family" && (T = I.value));
                if (A && x && !R.has(A)) {
                    R.add(A);
                    let I = u.createElement("link");
                    I.setAttribute("rel", "preload"), I.setAttribute("as", "font"), I.setAttribute("crossorigin", "anonymous"), I.setAttribute("href", A.trim()), u.head.appendChild(I);
                }
            }
            if (!y || !T || !A || !l.includes(T))
                return !1;
        } }), o = en(f, { compress: this.options.compress !== !1 }), o.trim().length === 0) {
            e.parentNode && e.remove();
            return;
        }
        let C = "", v = !1;
        if (n.pruneSource) {
            let S = en(a, { compress: this.options.compress !== !1 });
            v = this.pruneSource(e, d, S), v && (C = `, reducing non-inlined size ${S.length / d.length * 100 | 0}% to ${tu(S.length)}`);
            let T = pe.resolve(this.options.path, r);
            this.writeFile(T, S).then(() => this.logger.info?.(`${r} was successfully updated`)).catch(A => this.logger.error?.(A));
        }
        v || (e.textContent = o);
        let w = o.length / d.length * 100 | 0;
        this.logger.info?.(`\x1B[32mInlined ${tu(o.length)} (${w}% of original ${tu(d.length)}) of ${r}${C}.\x1B[39m`);
    }
    normalizeCssSelector(e) { let u = this.#e.get(e); return u !== void 0 || (u = e.replace(fo, "").replace(bo, r => r.includes("(") ? "(" : ")").replace(ho, "$1 * $2").replace(po, "$1 *").trim(), this.#e.set(e, u)), u; }
};
function tu(t) { if (t <= 0)
    return "0 bytes"; let e = ["bytes", "kB", "MB", "GB"], u = Math.floor(Math.log(t) / Math.log(1024)), r = t / 1024 ** u, n = u === 0 ? 0 : 2; return `${r.toFixed(n)} ${e[u]}`; }
var ht = class {
    manifest;
    constructor(e) { this.manifest = e; }
    getServerAsset(e) { let u = this.manifest.assets[e]; if (!u)
        throw new Error(`Server asset '${e}' does not exist.`); return u; }
    hasServerAsset(e) { return !!this.manifest.assets[e]; }
    getIndexServerHtml() { return this.getServerAsset("index.server.html"); }
}, Lo = new Set(["Angular is running in development mode."]), pt = class extends Hu {
    log(e) { Lo.has(e) || super.log(e); }
}, qu;
function o0(t) { qu = t; }
function ys() { if (!qu)
    throw new Error("Angular app manifest is not set. Please ensure you are using the '@angular/build:application' builder to build your server application."); return qu; }
var Lu;
function c0(t) { Lu = t; }
function _o() { if (!Lu)
    throw new Error("Angular app engine manifest is not set. Please ensure you are using the '@angular/build:application' builder to build your server application."); return Lu; }
function Mo(t) { return t.length > 1 && t[t.length - 1] === "/" ? t.slice(0, -1) : t; }
function ye(t) { return t.length > 1 && t[0] === "/" ? t.slice(1) : t; }
function ws(t) { return t[0] === "/" ? t : `/${t}`; }
function _u(t) { return t[t.length - 1] === "/" ? t : `${t}/`; }
function ee(...t) { let e = []; for (let u of t) {
    if (u === "")
        continue;
    let r = 0, n = u.length;
    for (; r < n && u[r] === "/";)
        r++;
    for (; n > r && u[n - 1] === "/";)
        n--;
    r < n && e.push(u.slice(r, n));
} return ws(e.join("/")); }
function Ss(t) { if (t.pathname.endsWith("/index.html")) {
    let e = new URL(t);
    return e.pathname = e.pathname.slice(0, -11), e;
} return t; }
function Do(t, e) { if (t[0] !== "/")
    throw new Error(`Invalid toPath: The string must start with a '/'. Received: '${t}'`); if (e[0] !== "/")
    throw new Error(`Invalid fromPath: The string must start with a '/'. Received: '${e}'`); if (!t.includes("/*"))
    return t; let u = e.split("/"), r = t.split("/"), n = r.map((s, i) => r[i] === "*" ? u[i] : s); return ee(...n); }
var Fo = /;[^/]+/g;
function Bo(t) { return t.includes(";") ? t.replace(Fo, "") : t; }
function $o(t, e, u, r, n) { return B(this, null, function* () { let s = Ss(u), i = ps([{ provide: bs, useValue: { url: s.href, document: t } }, { provide: No, useValue: n }, { provide: Hu, useFactory: () => new pt }, ...r]), o, d = !0; try {
    let f;
    vs(e) ? f = (yield i.bootstrapModule(e)).injector.get(ds) : f = yield e({ platformRef: i }), yield f.whenStable();
    let a = f.injector, l = !!a.get(Io, null), p = a.get(ms).lastSuccessfulNavigation;
    if (!l)
        d = !1;
    else if (p?.finalUrl) {
        d = !1;
        let h = a.get(gs, null, { optional: !0 }) ?? a.get(hs, null, { optional: !0 })?.headers.get("X-Forwarded-Prefix"), { pathname: b, search: g, hash: m } = a.get(xs), x = ts({ pathname: b, search: g, hash: m }, h);
        ts(s, h) !== x && (o = [b, g, m].join(""));
    }
    return { hasNavigationError: d, redirectTo: o, content: () => new Promise((h, b) => { setTimeout(() => { Po(i, f).then(h).catch(b).finally(() => void Ou(i)); }, 0); }) };
}
catch (f) {
    throw yield Ou(i), f;
}
finally {
    (d || o) && Ou(i);
} }); }
function vs(t) { return "\u0275mod" in t; }
function Ou(t) { return new Promise(e => { setTimeout(() => { t.destroyed || t.destroy(), e(); }, 0); }); }
function ts(t, e) { let { pathname: u, hash: r, search: n } = t, s = []; return e && !_u(u).startsWith(_u(e)) ? s.push(ee(e, u)) : s.push(Mo(u)), s.push(n, r), decodeURIComponent(s.join("")); }
function As(t, e, u) {
    return new Promise((r, n) => {
        let s = () => {
            n(new DOMException(`${u} was aborted.
${e.reason}`, "AbortError"));
        };
        if (e.aborted) {
            s();
            return;
        }
        e.addEventListener("abort", s, { once: !0 }), t.then(r).catch(n).finally(() => { e.removeEventListener("abort", s); });
    });
}
var us = "ng-app-shell", _e = (function (t) { return t[t.AppShell = 0] = "AppShell", t[t.ServerRoutes = 1] = "ServerRoutes", t; })(_e || {}), j = (function (t) { return t[t.Server = 0] = "Server", t[t.Client = 1] = "Client", t[t.Prerender = 2] = "Prerender", t; })(j || {}), Mu = (function (t) { return t[t.Server = 0] = "Server", t[t.Client = 1] = "Client", t[t.None = 2] = "None", t; })(Mu || {}), Wu = new mo("SERVER_ROUTES_CONFIG");
function l0(t) { let e = { routes: t }; return { \u0275kind: _e.ServerRoutes, \u0275providers: [{ provide: Wu, useValue: e }] }; }
function f0(t) { let e = { path: us }; return "\u0275cmp" in t ? e.component = t : e.loadComponent = t, { \u0275kind: _e.AppShell, \u0275providers: [{ provide: Oo, useValue: e, multi: !0 }, go(() => { let u = xo(Wu); u.appShellRoute = us; })] }; }
function d0(...t) { let e = !1, u = !1, r = [ko()]; for (let { \u0275kind: n, \u0275providers: s } of t)
    e ||= n === _e.AppShell, u ||= n === _e.ServerRoutes, r.push(...s); if (!u && e)
    throw new Error("Configuration error: found 'withAppShell()' without 'withRoutes()' in the same call to 'provideServerRendering()'.The 'withAppShell()' function requires 'withRoutes()' to be used."); return yo(r); }
var Me = class t {
    root = this.createEmptyRouteTreeNode();
    insert(e, u) { let r = this.root, n = this.getPathSegments(e), s = []; for (let i of n) {
        let o = i[0] === ":" ? "*" : i, d = r.children.get(o);
        d || (d = this.createEmptyRouteTreeNode(), r.children.set(o, d)), r = d, s.push(o);
    } r.metadata = U(_({}, u), { route: ws(s.join("/")) }); }
    match(e) { let u = this.getPathSegments(e); return this.traverseBySegments(u)?.metadata; }
    toObject() { return Array.from(this.traverse()); }
    static fromObject(e) { let u = new t; for (let r of e) {
        let n = r, { route: s } = n, i = ae(n, ["route"]);
        u.insert(s, i);
    } return u; }
    *traverse(e = this.root) { e.metadata && (yield e.metadata); for (let u of e.children.values())
        yield* le(this.traverse(u)); }
    getPathSegments(e) { return e.split("/").filter(Boolean); }
    traverseBySegments(e, u = this.root, r = 0) { if (r >= e.length)
        return u.metadata ? u : u.children.get("**"); if (!u.children.size)
        return; let n = e[r], s = u.children.get(n); if (s) {
        let o = this.traverseBySegments(e, s, r + 1);
        if (o)
            return o;
    } let i = u.children.get("*"); if (i) {
        let o = this.traverseBySegments(e, i, r + 1);
        if (o)
            return o;
    } return u.children.get("**"); }
    createEmptyRouteTreeNode() { return { children: new Map }; }
}, rs = 10, ns = /\/(\*\*)$/, Du = new RegExp("(?<!\\\\):([^/]+)", "g"), ss = new Set([301, 302, 303, 307, 308]);
function is(t) { return Be(this, null, function* () { try {
    let { metadata: e, currentRoutePath: u, route: r, compiler: n, parentInjector: s, serverConfigRouteTree: i, entryPointToBrowserMapping: o, invokeGetPrerenderParams: d, includePrerenderFallbackRoutes: f } = t, { redirectTo: a, loadChildren: l, loadComponent: c, children: p, \u0275entryName: h } = r;
    if (h && c && as(h, o, e), e.renderMode === j.Prerender ? yield* le(Uo(i, typeof a == "string" ? a : void 0, e, s, d, f)) : a !== void 0 ? e.status && !ss.has(e.status) ? yield { error: `The '${e.status}' status code is not a valid redirect response code. Please use one of the following redirect response codes: ${[...ss.values()].join(", ")}.` } : typeof a == "string" ? yield U(_({}, e), { redirectTo: Bu(e.route, a) }) : yield e : yield e, p?.length && (yield* le(Fu(U(_({}, t), { routes: p, parentRoute: u, parentPreloads: e.preload })))), l) {
        h && as(h, o, e);
        let b = r.providers ? vo(r.providers, s.get(Ao), `Route: ${r.path}`) : s, g = yield new yt(qo(r, n, b).toPromise());
        if (g) {
            let { routes: m, injector: x = b } = g;
            yield* le(Fu(U(_({}, t), { routes: m, parentInjector: x, parentRoute: u, parentPreloads: e.preload })));
        }
    }
}
catch (e) {
    yield { error: `Error in handleRoute for '${t.currentRoutePath}': ${e.message}` };
} }); }
function Fu(t) { return Be(this, null, function* () { let { routes: e, parentPreloads: u, parentRoute: r, serverConfigRouteTree: n } = t; for (let s of e) {
    let { matcher: i, path: o = i ? "**" : "" } = s, d = ee(r, o);
    if (i && n) {
        let a = [];
        for (let l of n.traverse())
            l.route.startsWith(d) && a.push(l);
        if (!a.length) {
            let l = n.match(d);
            l && a.push(l);
        }
        for (let l of a) {
            if (l.presentInClientRouter = !0, l.renderMode === j.Prerender) {
                yield { error: `The route '${ye(d)}' is set for prerendering but has a defined matcher. Routes with matchers cannot use prerendering. Please specify a different 'renderMode'.` };
                continue;
            }
            yield* le(is(U(_({}, t), { currentRoutePath: d, route: s, metadata: U(_({}, l), { preload: u, route: l.route, presentInClientRouter: void 0 }) })));
        }
        a.length || (yield { error: `The route '${ye(d)}' has a defined matcher but does not match any route in the server routing configuration. Please ensure this route is added to the server routing configuration.` });
        continue;
    }
    let f;
    if (n) {
        if (f = n.match(d), !f) {
            yield { error: `The '${ye(d)}' route does not match any route defined in the server routing configuration. Please ensure this route is added to the server routing configuration.` };
            continue;
        }
        f.presentInClientRouter = !0;
    }
    yield* le(is(U(_({}, t), { metadata: U(_({ renderMode: j.Prerender }, f), { preload: u, route: o === "" ? _u(d) : d, presentInClientRouter: void 0 }), currentRoutePath: d, route: s })));
} }); }
function as(t, e, u) { let r = u.preload ?? []; if (!e || r.length >= rs)
    return; let n = e[t]; if (!n?.length)
    return; let s = new Set(r); for (let i of n)
    if (s.add(i), s.size === rs)
        break; u.preload = Array.from(s); }
function Uo(t, e, u, r, n, s) { return Be(this, null, function* () { if (u.renderMode !== j.Prerender)
    throw new Error("'handleSSGRoute' was called for a route which rendering mode is not prerender."); let l = u, { route: i, fallback: o } = l, d = ae(l, ["route", "fallback"]), f = "getPrerenderParams" in d ? d.getPrerenderParams : void 0; "getPrerenderParams" in d && delete d.getPrerenderParams, e !== void 0 && (d.redirectTo = Bu(i, e)); let a = ns.test(i); if (a && !f || !a && !Du.test(i)) {
    yield U(_({}, d), { route: i });
    return;
} if (n) {
    if (!f) {
        yield { error: `The '${ye(i)}' route uses prerendering and includes parameters, but 'getPrerenderParams' is missing. Please define 'getPrerenderParams' function for this route in your server routing configuration or specify a different 'renderMode'.` };
        return;
    }
    if (t) {
        let p = a ? i : ee(i, "**"), h = t.match(p);
        h && h.renderMode === j.Prerender && !("getPrerenderParams" in h) && t.insert(p, U(_({}, h), { presentInClientRouter: !0, getPrerenderParams: f }));
    }
    let c = yield new yt(Eo(r, () => f()));
    try {
        for (let p of c) {
            let h = Vo(p, i), b = i.replace(Du, h).replace(ns, h);
            yield U(_({}, d), { route: b, redirectTo: e === void 0 ? void 0 : Bu(b, e) });
        }
    }
    catch (p) {
        yield { error: `${p.message}` };
        return;
    }
} s && (o !== Mu.None || !n) && (yield U(_({}, d), { route: i, renderMode: o === Mu.Client ? j.Client : j.Server })); }); }
function Vo(t, e) { return u => { let r = u.slice(1), n = t[r]; if (typeof n != "string")
    throw new Error(`The 'getPrerenderParams' function defined for the '${ye(e)}' route returned a non-string value for parameter '${r}'. Please make sure the 'getPrerenderParams' function returns values for all parameters specified in this route.`); return r === "**" ? `/${n}` : n; }; }
function Bu(t, e) { if (e[0] === "/")
    return e; let u = t.replace(Du, "*").split("/"); return u.pop(), ee(...u, e); }
function zo({ routes: t, appShellRoute: e }) { let u = [...t]; e !== void 0 && u.unshift({ path: e, renderMode: j.Prerender }); let r = new Me, n = []; for (let s of u) {
    let i = s, { path: o } = i, d = ae(i, ["path"]);
    if (o[0] === "/") {
        n.push(`Invalid '${o}' route configuration: the path cannot start with a slash.`);
        continue;
    }
    if ("getPrerenderParams" in d && (o.includes("/*/") || o.endsWith("/*"))) {
        n.push(`Invalid '${o}' route configuration: 'getPrerenderParams' cannot be used with a '*' route.`);
        continue;
    }
    r.insert(o, d);
} return { serverConfigRouteTree: r, errors: n }; }
function jo(t, e, u, r = !1, n = !0, s = void 0) { return B(this, null, function* () { let { protocol: i, host: o } = u, d = ps([{ provide: bs, useValue: { document: e, url: `${i}//${o}/` } }, { provide: Hu, useFactory: () => new pt }, { provide: wo, useValue: !1 }]); try {
    let p;
    vs(t) ? p = (yield d.bootstrapModule(t)).injector.get(ds) : p = yield t({ platformRef: d });
    let h = p.injector, b = h.get(ms);
    b.navigationTransitions.afterPreactivation()?.next?.(), yield p.whenStable();
    let g = [], m = h.get(gs, null, { optional: !0 }) ?? h.get(xs).getBaseHrefFromDOM(), { pathname: x } = new URL(m, "http://localhost"), y = h.get(So), R = h.get(Wu, null, { optional: !0 }), C;
    if (R) {
        let w = zo(R);
        C = w.serverConfigRouteTree, g.push(...w.errors);
    }
    if (g.length)
        return { baseHref: x, routes: [], errors: g };
    let v = [];
    if (b.config.length) {
        let w = Fu({ routes: b.config, compiler: y, parentInjector: h, parentRoute: "", serverConfigRouteTree: C, invokeGetPrerenderParams: r, includePrerenderFallbackRoutes: n, entryPointToBrowserMapping: s }), S = new Set;
        try {
            for (var f = Yu(w), a, l, c; a = !(l = yield f.next()).done; a = !1) {
                let T = l.value;
                if ("error" in T) {
                    g.push(T.error);
                    continue;
                }
                let A = T.route;
                S.has(A) || (v.push(T), S.add(A));
            }
        }
        catch {
            c = [l];
        }
        finally {
            try {
                a && (l = f.return) && (yield l.call(f));
            }
            finally {
                if (c)
                    throw c[0];
            }
        }
        if (yield new Promise(T => setTimeout(T, 0)), C)
            for (let { route: T, presentInClientRouter: A } of C.traverse())
                A || T.endsWith("/**") || g.push(`The '${ye(T)}' server route does not match any routes defined in the Angular routing configuration (typically provided as a part of the 'provideRouter' call). Please make sure that the mentioned server route is present in the Angular routing configuration.`);
    }
    else {
        let w = C?.match("") ?? { route: "", renderMode: j.Prerender };
        v.push(U(_({}, w), { route: "" }));
    }
    return { baseHref: x, routes: v, errors: g, appShellRoute: R?.appShellRoute };
}
finally {
    d.destroy();
} }); }
function Ho(t) { let { url: e, manifest: u = ys(), invokeGetPrerenderParams: r = !1, includePrerenderFallbackRoutes: n = !0, signal: s } = t; function i() { return B(this, null, function* () { let o = new Me, d = yield new ht(u).getIndexServerHtml().text(), f = yield u.bootstrap(), { baseHref: a, appShellRoute: l, routes: c, errors: p } = yield jo(f, d, e, r, n, u.entryPointToBrowserMapping); for (let h of c) {
    let b = h, { route: g } = b, m = ae(b, ["route"]);
    m.redirectTo !== void 0 && (m.redirectTo = ee(a, m.redirectTo));
    for (let [y, R] of Object.entries(m))
        R === void 0 && delete m[y];
    let x = ee(a, g);
    o.insert(x, m);
} return { appShellRoute: l, routeTree: o, errors: p }; }); } return s ? As(i(), s, "Routes extraction") : i(); }
var bt = class {
    store = new Map;
    run(e, u) { return B(this, null, function* () { let r = this.store.get(e); switch (e) {
        case "html:transform:pre": {
            if (!r)
                return u.html;
            let n = _({}, u);
            for (let s of r)
                n.html = yield s(n);
            return n.html;
        }
        default: throw new Error(`Running hook "${e}" is not supported.`);
    } }); }
    on(e, u) { let r = this.store.get(e); r ? r.push(u) : this.store.set(e, [u]); }
    has(e) { return !!this.store.get(e)?.length; }
}, $u = class t {
    routeTree;
    constructor(e) { this.routeTree = e; }
    static #e;
    static from(e, u) {
        if (e.routes) {
            let r = Me.fromObject(e.routes);
            return Promise.resolve(new t(r));
        }
        return t.#e ??= Ho({ url: u, manifest: e }).then(({ routeTree: r, errors: n }) => {
            if (n.length > 0)
                throw new Error(`Error(s) occurred while extracting routes:
` + n.map(s => `- ${s}`).join(`
`));
            return new t(r);
        }).finally(() => { t.#e = void 0; }), t.#e;
    }
    match(e) { let { pathname: u } = Ss(e); return u = Bo(u), u = decodeURIComponent(u), this.routeTree.match(u); }
};
function Wo(t) { return B(this, null, function* () { let e = new TextEncoder().encode(t), u = yield crypto.subtle.digest("SHA-256", e), r = []; for (let n of new Uint8Array(u))
    r.push(n.toString(16).padStart(2, "0")); return r.join(""); }); }
var os = /^this\.media=["'](.*)["'];?$/, Es = "ngCspMedia", cs = `(() => {
  const CSP_MEDIA_ATTR = '${Es}';
  const documentElement = document.documentElement;

  // Listener for load events on link tags.
  const listener = (e) => {
    const target = e.target;
    if (
      !target ||
      target.tagName !== 'LINK' ||
      !target.hasAttribute(CSP_MEDIA_ATTR)
    ) {
      return;
    }

    target.media = target.getAttribute(CSP_MEDIA_ATTR);
    target.removeAttribute(CSP_MEDIA_ATTR);

    if (!document.head.querySelector(\`link[\${CSP_MEDIA_ATTR}]\`)) {
      documentElement.removeEventListener('load', listener);
    }
  };

  documentElement.addEventListener('load', listener, true);
})();`, Uu = class extends ut {
}, Vu = class t extends Uu {
    readFile;
    outputPath;
    addedCspScriptsDocuments = new WeakSet;
    documentNonces = new WeakMap;
    constructor(e, u) { super({ logger: { warn: r => console.warn(r), error: r => console.error(r), info: () => { } }, logLevel: "warn", path: u, publicPath: void 0, compress: !1, pruneSource: !1, reduceInlineStyles: !1, mergeStylesheets: !1, preload: "media", noscriptFallback: !0, inlineFonts: !0 }), this.readFile = e, this.outputPath = u; }
    embedLinkedStylesheet(e, u) { return B(this, null, function* () { if (e.getAttribute("media") === "print" && e.next?.name === "noscript") {
        let s = e.getAttribute("onload")?.match(os);
        s && (e.removeAttribute("onload"), e.setAttribute("media", s[1]), e?.next?.remove());
    } let r = yield Ju(t.prototype, this, "embedLinkedStylesheet").call(this, e, u), n = this.findCspNonce(u); if (n) {
        let s = e.getAttribute("onload")?.match(os);
        s && (e.removeAttribute("onload"), e.setAttribute(Es, s[1]), this.conditionallyInsertCspLoadingScript(u, n, e)), u.head.children.forEach(i => { i.tagName === "style" && !i.hasAttribute("nonce") && i.setAttribute("nonce", n); });
    } return r; }); }
    findCspNonce(e) { if (this.documentNonces.has(e))
        return this.documentNonces.get(e); let u = e.querySelector("[ngCspNonce], [ngcspnonce]"), r = u?.getAttribute("ngCspNonce") || u?.getAttribute("ngcspnonce") || null; return this.documentNonces.set(e, r), r; }
    conditionallyInsertCspLoadingScript(e, u, r) { if (this.addedCspScriptsDocuments.has(e))
        return; if (e.head.textContent.includes(cs)) {
        this.addedCspScriptsDocuments.add(e);
        return;
    } let n = e.createElement("script"); n.setAttribute("nonce", u), n.textContent = cs, e.head.insertBefore(n, r), this.addedCspScriptsDocuments.add(e); }
}, zu = class {
    capacity;
    cache = new Map;
    head;
    tail;
    constructor(e) { this.capacity = e; }
    get(e) { let u = this.cache.get(e); if (u)
        return this.moveToHead(u), u.value; }
    put(e, u) { let r = this.cache.get(e); if (r) {
        r.value = u, this.moveToHead(r);
        return;
    } let n = { key: e, value: u, prev: void 0, next: void 0 }; if (this.cache.set(e, n), this.addToHead(n), this.cache.size > this.capacity) {
        let s = this.removeTail();
        s && this.cache.delete(s.key);
    } }
    addToHead(e) { e.next = this.head, e.prev = void 0, this.head && (this.head.prev = e), this.head = e, this.tail || (this.tail = e); }
    removeNode(e) { e.prev ? e.prev.next = e.next : this.head = e.next, e.next ? e.next.prev = e.prev : this.tail = e.prev; }
    moveToHead(e) { this.removeNode(e), this.addToHead(e); }
    removeTail() { let e = this.tail; return e && this.removeNode(e), e; }
}, Go = 50, Qo = { [j.Prerender]: "ssg", [j.Server]: "ssr", [j.Client]: "" }, ju = class {
    options;
    allowStaticRouteRender;
    hooks;
    constructor(e = {}) { this.options = e, this.allowStaticRouteRender = this.options.allowStaticRouteRender ?? !1, this.hooks = e.hooks ?? new bt, this.manifest.inlineCriticalCss && (this.inlineCriticalCssProcessor = new Vu(u => { let r = u.split("/").pop() ?? u; return this.assets.getServerAsset(r).text(); })); }
    manifest = ys();
    assets = new ht(this.manifest);
    router;
    inlineCriticalCssProcessor;
    boostrap;
    textDecoder = new TextEncoder;
    criticalCssLRUCache = new zu(Go);
    handle(e, u) { return B(this, null, function* () { let r = new URL(e.url); this.router ??= yield $u.from(this.manifest, r); let n = this.router.match(r); if (!n)
        return null; let { redirectTo: s, status: i, renderMode: o } = n; if (s !== void 0)
        return ls(ee(e.headers.get("X-Forwarded-Prefix") ?? "", Do(s, r.pathname)), i); if (o === j.Prerender) {
        let d = yield this.handleServe(e, n);
        if (d)
            return d;
    } return As(this.handleRendering(e, n, u), e.signal, `Request for: ${e.url}`); }); }
    handleServe(e, u) { return B(this, null, function* () { let { headers: r, renderMode: n } = u; if (n !== j.Prerender)
        return null; let { method: s } = e; if (s !== "GET" && s !== "HEAD")
        return null; let i = this.buildServerAssetPathFromRequest(e), { manifest: { locale: o }, assets: d } = this; if (!d.hasServerAsset(i))
        return null; let { text: f, hash: a, size: l } = d.getServerAsset(i), c = `"${a}"`; return e.headers.get("if-none-match") === c ? new Response(void 0, { status: 304, statusText: "Not Modified" }) : new Response(yield f(), { headers: _(_({ "Content-Length": l.toString(), ETag: c, "Content-Type": "text/html;charset=UTF-8" }, o !== void 0 ? { "Content-Language": o } : {}), r) }); }); }
    handleRendering(e, u, r) { return B(this, null, function* () { let { renderMode: n, headers: s, status: i, preload: o } = u; if (!this.allowStaticRouteRender && n === j.Prerender)
        return null; let d = new URL(e.url), f = [], { manifest: { bootstrap: a, locale: l }, assets: c } = this, p = { status: i, headers: new Headers(_(_({ "Content-Type": "text/html;charset=UTF-8" }, l !== void 0 ? { "Content-Language": l } : {}), s)) }; if (n === j.Server)
        f.push({ provide: hs, useValue: e }, { provide: Ro, useValue: r }, { provide: To, useValue: p });
    else if (n === j.Client) {
        let m = yield this.assets.getServerAsset("index.csr.html").text();
        return m = yield this.runTransformsOnHtml(m, d, o), new Response(m, p);
    } l !== void 0 && f.push({ provide: Co, useValue: l }), this.boostrap ??= yield a(); let h = yield c.getIndexServerHtml().text(); h = yield this.runTransformsOnHtml(h, d, o); let b = yield $o(h, this.boostrap, d, f, Qo[n]); if (b.hasNavigationError)
        return null; if (b.redirectTo)
        return ls(b.redirectTo, i); if (n === j.Prerender) {
        let m = yield b.content(), x = yield this.inlineCriticalCss(m, d);
        return new Response(x, p);
    } let g = new ReadableStream({ start: m => B(this, null, function* () { let x = yield b.content(), y = yield this.inlineCriticalCssWithCache(x, d); m.enqueue(y), m.close(); }) }); return new Response(g, p); }); }
    inlineCriticalCss(e, u) { return B(this, null, function* () { let { inlineCriticalCssProcessor: r } = this; if (!r)
        return e; try {
        return yield r.process(e);
    }
    catch (n) {
        return console.error(`An error occurred while inlining critical CSS for: ${u}.`, n), e;
    } }); }
    inlineCriticalCssWithCache(e, u) { return B(this, null, function* () { let { inlineCriticalCssProcessor: r, criticalCssLRUCache: n, textDecoder: s } = this; if (!r)
        return s.encode(e); let i = u.toString(), o = n.get(i), d = yield Wo(e); if (o?.shaOfContentPreInlinedCss === d)
        return o.contentWithCriticialCSS; let f = yield this.inlineCriticalCss(e, u), a = s.encode(f); return n.put(i, { shaOfContentPreInlinedCss: d, contentWithCriticialCSS: a }), a; }); }
    buildServerAssetPathFromRequest(e) { let { pathname: u } = new URL(e.url); u.endsWith("/index.html") || (u = ee(u, "index.html")); let { baseHref: r } = this.manifest; return r.length > 1 && u.startsWith(r) && (u = u.slice(r.length)), ye(u); }
    runTransformsOnHtml(e, u, r) { return B(this, null, function* () { return this.hooks.has("html:transform:pre") && (e = yield this.hooks.run("html:transform:pre", { html: e, url: u })), r?.length && (e = Xo(e, r)), e; }); }
    serveClientSidePage() { return B(this, null, function* () { let { manifest: { locale: e }, assets: u } = this, r = yield u.getServerAsset("index.csr.html").text(); return new Response(r, { headers: new Headers(_({ "Content-Type": "text/html;charset=UTF-8" }, e !== void 0 ? { "Content-Language": e } : {})) }); }); }
}, Rs;
function h0(t) { return Rs ??= new ju(t); }
function p0() { Rs = void 0; }
function Xo(t, e) {
    let u = t.lastIndexOf("</body>");
    return u === -1 ? t : [t.slice(0, u), ...e.map(r => `<link rel="modulepreload" href="${r}">`), t.slice(u)].join(`
`);
}
function ls(t, e = 302) { return new Response(null, { status: e, headers: { Location: t } }); }
function Zo(t, e) { let { pathname: u } = t, r = e.length; u[r] === "/" && r++; let n = u.indexOf("/", r); return n === -1 && (n = u.length), u.slice(r, n); }
function Jo(t) { if (t === "*")
    return new Map([["*", 1]]); let e = t.split(",").map(u => { let [r, n] = u.split(";", 2).map(i => i.trim()), s = n?.startsWith("q=") ? parseFloat(n.slice(2)) : void 0; return (typeof s != "number" || isNaN(s) || s < 0 || s > 1) && (s = 1), [r, s]; }).sort(([u, r], [n, s]) => s - r); return new Map(e); }
function Yo(t, e) { if (e.length < 2)
    return e[0]; let u = Jo(t); if (u.size === 0 || u.size === 1 && u.has("*"))
    return e[0]; let r = new Map; for (let i of e)
    r.set(fs(i), i); let n, s = new Set; for (let [i, o] of u) {
    let d = fs(i);
    if (o === 0) {
        s.add(d);
        continue;
    }
    if (r.has(d))
        return r.get(d);
    if (n !== void 0)
        continue;
    let [f] = d.split("-", 1);
    for (let a of r.keys())
        if (a.startsWith(f)) {
            n = r.get(a);
            break;
        }
} if (n !== void 0)
    return n; for (let [i, o] of r)
    if (!s.has(i))
        return o; }
function fs(t) { return t.toLowerCase(); }
var b0 = (() => {
    class t {
        static \u0275allowStaticRouteRender = !1;
        static \u0275hooks = new bt;
        manifest = _o();
        allowedHosts;
        supportedLocales = Object.keys(this.manifest.supportedLocales);
        entryPointsCache = new Map;
        constructor(u) { this.allowedHosts = new Set([...u?.allowedHosts ?? [], ...this.manifest.allowedHosts]); }
        handle(u, r) { return B(this, null, function* () { let n = this.allowedHosts; try {
            Ku(u, n);
        }
        catch (d) {
            return this.handleValidationError(d, u);
        } let { request: s, onError: i } = er(u, n), o = yield this.getAngularServerAppForRequest(s); return o ? Promise.race([i.then(d => this.handleValidationError(d, s)), o.handle(s, r)]) : this.supportedLocales.length > 1 ? this.redirectBasedOnAcceptLanguage(u) : null; }); }
        redirectBasedOnAcceptLanguage(u) { let { basePath: r, supportedLocales: n } = this.manifest, { pathname: s } = new URL(u.url); if (s !== r)
            return null; let i = Yo(u.headers.get("Accept-Language") || "*", this.supportedLocales); if (i) {
            let o = n[i];
            if (o !== void 0)
                return new Response(null, { status: 302, headers: { Location: ee(s, o), Vary: "Accept-Language" } });
        } return null; }
        getAngularServerAppForRequest(u) { return B(this, null, function* () { let r = new URL(u.url), n = yield this.getEntryPointExportsForUrl(r); if (!n)
            return null; let s = n.\u0275getOrCreateAngularServerApp; return s({ allowStaticRouteRender: t.\u0275allowStaticRouteRender, hooks: t.\u0275hooks }); }); }
        getEntryPointExports(u) { let r = this.entryPointsCache.get(u); if (r)
            return r; let { entryPoints: n } = this.manifest, s = n[u]; if (!s)
            return; let i = s(); return this.entryPointsCache.set(u, i), i; }
        getEntryPointExportsForUrl(u) { let { basePath: r, supportedLocales: n } = this.manifest; if (this.supportedLocales.length === 1)
            return this.getEntryPointExports(n[this.supportedLocales[0]]); let s = Zo(u, r); return this.getEntryPointExports(s) ?? this.getEntryPointExports(""); }
        handleValidationError(u, r) {
            return B(this, null, function* () {
                let n = this.allowedHosts.size > 0, s = u.message;
                return console.error(`ERROR: Bad Request ("${r.url}").
` + s + (n ? "" : `
Falling back to client side rendering. This will become a 400 Bad Request in a future major version.`) + `

For more information, see https://angular.dev/best-practices/security#preventing-server-side-request-forgery-ssrf`), n ? new Response(s, { status: 400, statusText: "Bad Request", headers: { "Content-Type": "text/plain" } }) : (yield this.getAngularServerAppForRequest(r))?.serveClientSidePage() ?? null;
            });
        }
    }
    return t;
})();
function m0(t) { return t.__ng_request_handler__ = !0, t; }
export { b0 as AngularAppEngine, Mu as PrerenderFallback, j as RenderMode, m0 as createRequestHandler, d0 as provideServerRendering, f0 as withAppShell, l0 as withRoutes, Vu as \u0275InlineCriticalCssProcessor, p0 as \u0275destroyAngularServerApp, Ho as \u0275extractRoutesAndCreateRouteTree, h0 as \u0275getOrCreateAngularServerApp, jo as \u0275getRoutesFromAngularRouterConfig, c0 as \u0275setAngularAppEngineManifest, o0 as \u0275setAngularAppManifest };
