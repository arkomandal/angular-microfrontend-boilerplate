import { cloneRequestAndPatchHeaders, validateRequest } from "@nf-internal/chunk-KLBD2CNF";
import { __async, __asyncGenerator, __await, __forAwait, __objRest, __spreadProps, __spreadValues, __superGet, __yieldStar } from "@nf-internal/chunk-3QVZCVE3";
// node_modules/@angular/ssr/fesm2022/ssr.mjs
import { \u0275Console as _Console, ApplicationRef, REQUEST, InjectionToken, provideEnvironmentInitializer, inject, makeEnvironmentProviders, \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP as _ENABLE_ROOT_COMPONENT_BOOTSTRAP, Compiler, createEnvironmentInjector, EnvironmentInjector, runInInjectionContext, \u0275resetCompiledComponents as _resetCompiledComponents, REQUEST_CONTEXT, RESPONSE_INIT, LOCALE_ID } from "@angular/core";
import { platformServer, INITIAL_CONFIG, \u0275SERVER_CONTEXT as _SERVER_CONTEXT, \u0275renderInternal as _renderInternal, provideServerRendering as provideServerRendering$1 } from "@angular/platform-server";
import { ActivatedRoute, Router, ROUTES, \u0275loadChildren as _loadChildren } from "@angular/router";
import { APP_BASE_HREF, PlatformLocation } from "@angular/common";
// node_modules/@angular/ssr/third_party/beasties/index.js
function createNotImplementedError(name) {
    throw new Error(`[unenv] ${name} is not implemented yet!`);
}
function notImplemented(name) {
    const fn = () => {
        throw createNotImplementedError(name);
    };
    return Object.assign(fn, { __unenv__: true });
}
var access = notImplemented("fs.access");
var copyFile = notImplemented("fs.copyFile");
var cp = notImplemented("fs.cp");
var open = notImplemented("fs.open");
var opendir = notImplemented("fs.opendir");
var rename = notImplemented("fs.rename");
var truncate = notImplemented("fs.truncate");
var rm = notImplemented("fs.rm");
var rmdir = notImplemented("fs.rmdir");
var mkdir = notImplemented("fs.mkdir");
var readdir = notImplemented("fs.readdir");
var readlink = notImplemented("fs.readlink");
var symlink = notImplemented("fs.symlink");
var lstat = notImplemented("fs.lstat");
var stat = notImplemented("fs.stat");
var link = notImplemented("fs.link");
var unlink = notImplemented("fs.unlink");
var chmod = notImplemented("fs.chmod");
var lchmod = notImplemented("fs.lchmod");
var lchown = notImplemented("fs.lchown");
var chown = notImplemented("fs.chown");
var utimes = notImplemented("fs.utimes");
var lutimes = notImplemented("fs.lutimes");
var realpath = notImplemented("fs.realpath");
var mkdtemp = notImplemented("fs.mkdtemp");
var writeFile$1 = notImplemented("fs.writeFile");
var appendFile = notImplemented("fs.appendFile");
var readFile$1 = notImplemented("fs.readFile");
notImplemented("fs.watch");
var statfs = notImplemented("fs.statfs");
function notImplementedAsync(name) {
    const fn = notImplemented(name);
    fn.__promisify__ = () => notImplemented(name + ".__promisify__");
    fn.native = fn;
    return fn;
}
function callbackify(fn) {
    const fnc = function (...args) {
        const cb = args.pop();
        fn().catch((error) => cb(error)).then((val) => cb(void 0, val));
    };
    fnc.__promisify__ = fn;
    fnc.native = fnc;
    return fnc;
}
callbackify(access);
callbackify(appendFile);
callbackify(chown);
callbackify(chmod);
callbackify(copyFile);
callbackify(cp);
callbackify(lchown);
callbackify(lchmod);
callbackify(link);
callbackify(lstat);
callbackify(lutimes);
callbackify(mkdir);
callbackify(mkdtemp);
callbackify(realpath);
callbackify(open);
callbackify(opendir);
callbackify(readdir);
var readFile = callbackify(readFile$1);
callbackify(readlink);
callbackify(rename);
callbackify(rm);
callbackify(rmdir);
callbackify(stat);
callbackify(symlink);
callbackify(truncate);
callbackify(unlink);
callbackify(utimes);
var writeFile = callbackify(writeFile$1);
callbackify(statfs);
notImplementedAsync("fs.close");
notImplementedAsync("fs.createReadStream");
notImplementedAsync("fs.createWriteStream");
notImplementedAsync("fs.exists");
notImplementedAsync("fs.fchown");
notImplementedAsync("fs.fchmod");
notImplementedAsync("fs.fdatasync");
notImplementedAsync("fs.fstat");
notImplementedAsync("fs.fsync");
notImplementedAsync("fs.ftruncate");
notImplementedAsync("fs.futimes");
notImplementedAsync("fs.lstatSync");
notImplementedAsync("fs.read");
notImplementedAsync("fs.readv");
notImplementedAsync("fs.realpathSync");
notImplementedAsync("fs.statSync");
notImplementedAsync("fs.unwatchFile");
notImplementedAsync("fs.watch");
notImplementedAsync("fs.watchFile");
notImplementedAsync("fs.write");
notImplementedAsync("fs.writev");
notImplementedAsync("fs._toUnixTimestamp");
notImplementedAsync("fs.openAsBlob");
notImplemented("fs.appendFileSync");
notImplemented("fs.accessSync");
notImplemented("fs.chownSync");
notImplemented("fs.chmodSync");
notImplemented("fs.closeSync");
notImplemented("fs.copyFileSync");
notImplemented("fs.cpSync");
notImplemented("fs.fchownSync");
notImplemented("fs.fchmodSync");
notImplemented("fs.fdatasyncSync");
notImplemented("fs.fstatSync");
notImplemented("fs.fsyncSync");
notImplemented("fs.ftruncateSync");
notImplemented("fs.futimesSync");
notImplemented("fs.lchownSync");
notImplemented("fs.lchmodSync");
notImplemented("fs.linkSync");
notImplemented("fs.lutimesSync");
notImplemented("fs.mkdirSync");
notImplemented("fs.mkdtempSync");
notImplemented("fs.openSync");
notImplemented("fs.opendirSync");
notImplemented("fs.readdirSync");
notImplemented("fs.readSync");
notImplemented("fs.readvSync");
notImplemented("fs.readFileSync");
notImplemented("fs.readlinkSync");
notImplemented("fs.renameSync");
notImplemented("fs.rmSync");
notImplemented("fs.rmdirSync");
notImplemented("fs.symlinkSync");
notImplemented("fs.truncateSync");
notImplemented("fs.unlinkSync");
notImplemented("fs.utimesSync");
notImplemented("fs.writeFileSync");
notImplemented("fs.writeSync");
notImplemented("fs.writevSync");
notImplemented("fs.statfsSync");
var _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input2 = "") {
    if (!input2) {
        return input2;
    }
    return input2.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
var _UNC_REGEX = /^[/\\]{2}/;
var _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
var _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
var _ROOT_FOLDER_RE = /^\/([A-Za-z]:)?$/;
var sep = "/";
var delimiter = ":";
var normalize = function (path2) {
    if (path2.length === 0) {
        return ".";
    }
    path2 = normalizeWindowsPath(path2);
    const isUNCPath = path2.match(_UNC_REGEX);
    const isPathAbsolute = isAbsolute(path2);
    const trailingSeparator = path2[path2.length - 1] === "/";
    path2 = normalizeString(path2, !isPathAbsolute);
    if (path2.length === 0) {
        if (isPathAbsolute) {
            return "/";
        }
        return trailingSeparator ? "./" : ".";
    }
    if (trailingSeparator) {
        path2 += "/";
    }
    if (_DRIVE_LETTER_RE.test(path2)) {
        path2 += "/";
    }
    if (isUNCPath) {
        if (!isPathAbsolute) {
            return `//./${path2}`;
        }
        return `//${path2}`;
    }
    return isPathAbsolute && !isAbsolute(path2) ? `/${path2}` : path2;
};
var join = function (...arguments_) {
    if (arguments_.length === 0) {
        return ".";
    }
    let joined;
    for (const argument of arguments_) {
        if (argument && argument.length > 0) {
            if (joined === void 0) {
                joined = argument;
            }
            else {
                joined += `/${argument}`;
            }
        }
    }
    if (joined === void 0) {
        return ".";
    }
    return normalize(joined.replace(/\/\/+/g, "/"));
};
function cwd() {
    if (typeof process !== "undefined" && typeof process.cwd === "function") {
        return process.cwd().replace(/\\/g, "/");
    }
    return "/";
}
var resolve = function (...arguments_) {
    arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
    let resolvedPath = "";
    let resolvedAbsolute = false;
    for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
        const path2 = index >= 0 ? arguments_[index] : cwd();
        if (!path2 || path2.length === 0) {
            continue;
        }
        resolvedPath = `${path2}/${resolvedPath}`;
        resolvedAbsolute = isAbsolute(path2);
    }
    resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
    if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
        return `/${resolvedPath}`;
    }
    return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path2, allowAboveRoot) {
    let res = "";
    let lastSegmentLength = 0;
    let lastSlash = -1;
    let dots = 0;
    let char = null;
    for (let index = 0; index <= path2.length; ++index) {
        if (index < path2.length) {
            char = path2[index];
        }
        else if (char === "/") {
            break;
        }
        else {
            char = "/";
        }
        if (char === "/") {
            if (lastSlash === index - 1 || dots === 1)
                ;
            else if (dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
                    if (res.length > 2) {
                        const lastSlashIndex = res.lastIndexOf("/");
                        if (lastSlashIndex === -1) {
                            res = "";
                            lastSegmentLength = 0;
                        }
                        else {
                            res = res.slice(0, lastSlashIndex);
                            lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                        }
                        lastSlash = index;
                        dots = 0;
                        continue;
                    }
                    else if (res.length > 0) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = index;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    res += res.length > 0 ? "/.." : "..";
                    lastSegmentLength = 2;
                }
            }
            else {
                if (res.length > 0) {
                    res += `/${path2.slice(lastSlash + 1, index)}`;
                }
                else {
                    res = path2.slice(lastSlash + 1, index);
                }
                lastSegmentLength = index - lastSlash - 1;
            }
            lastSlash = index;
            dots = 0;
        }
        else if (char === "." && dots !== -1) {
            ++dots;
        }
        else {
            dots = -1;
        }
    }
    return res;
}
var isAbsolute = function (p) {
    return _IS_ABSOLUTE_RE.test(p);
};
var toNamespacedPath = function (p) {
    return normalizeWindowsPath(p);
};
var _EXTNAME_RE = /.(\.[^./]+)$/;
var extname = function (p) {
    const match = _EXTNAME_RE.exec(normalizeWindowsPath(p));
    return match && match[1] || "";
};
var relative = function (from, to) {
    const _from = resolve(from).replace(_ROOT_FOLDER_RE, "$1").split("/");
    const _to = resolve(to).replace(_ROOT_FOLDER_RE, "$1").split("/");
    if (_to[0][1] === ":" && _from[0][1] === ":" && _from[0] !== _to[0]) {
        return _to.join("/");
    }
    const _fromCopy = [..._from];
    for (const segment of _fromCopy) {
        if (_to[0] !== segment) {
            break;
        }
        _from.shift();
        _to.shift();
    }
    return [..._from.map(() => ".."), ..._to].join("/");
};
var dirname = function (p) {
    const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
    if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
        segments[0] += "/";
    }
    return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};
var format = function (p) {
    const segments = [p.root, p.dir, p.base ?? p.name + p.ext].filter(Boolean);
    return normalizeWindowsPath(p.root ? resolve(...segments) : segments.join("/"));
};
var basename = function (p, extension) {
    const lastSegment = normalizeWindowsPath(p).split("/").pop();
    return extension && lastSegment.endsWith(extension) ? lastSegment.slice(0, -extension.length) : lastSegment;
};
var parse$3 = function (p) {
    const root2 = normalizeWindowsPath(p).split("/").shift() || "/";
    const base = basename(p);
    const extension = extname(base);
    return {
        root: root2,
        dir: dirname(p),
        base,
        ext: extension,
        name: base.slice(0, base.length - extension.length)
    };
};
var path = {
    __proto__: null,
    basename,
    delimiter,
    dirname,
    extname,
    format,
    isAbsolute,
    join,
    normalize,
    normalizeString,
    parse: parse$3,
    relative,
    resolve,
    sep,
    toNamespacedPath
};
var _path = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    basename,
    default: path,
    delimiter,
    dirname,
    extname,
    format,
    isAbsolute,
    join,
    normalize,
    normalizeString,
    parse: parse$3,
    relative,
    resolve,
    sep,
    toNamespacedPath
});
var _pathModule = __spreadProps(__spreadValues({}, _path), {
    platform: "posix",
    posix: void 0,
    win32: void 0
});
_pathModule.posix = _pathModule;
_pathModule.win32 = _pathModule;
function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
    if (Object.prototype.hasOwnProperty.call(n, "__esModule"))
        return n;
    var f = n.default;
    if (typeof f == "function") {
        var a = function a2() {
            var isInstance = false;
            try {
                isInstance = this instanceof a2;
            }
            catch {
            }
            if (isInstance) {
                return Reflect.construct(f, arguments, this.constructor);
            }
            return f.apply(this, arguments);
        };
        a.prototype = f.prototype;
    }
    else
        a = {};
    Object.defineProperty(a, "__esModule", { value: true });
    Object.keys(n).forEach(function (k) {
        var d = Object.getOwnPropertyDescriptor(n, k);
        Object.defineProperty(a, k, d.get ? d : {
            enumerable: true,
            get: function () {
                return n[k];
            }
        });
    });
    return a;
}
var picocolors_browser = { exports: {} };
var hasRequiredPicocolors_browser;
function requirePicocolors_browser() {
    if (hasRequiredPicocolors_browser)
        return picocolors_browser.exports;
    hasRequiredPicocolors_browser = 1;
    var x = String;
    var create = function () {
        return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x, blackBright: x, redBright: x, greenBright: x, yellowBright: x, blueBright: x, magentaBright: x, cyanBright: x, whiteBright: x, bgBlackBright: x, bgRedBright: x, bgGreenBright: x, bgYellowBright: x, bgBlueBright: x, bgMagentaBright: x, bgCyanBright: x, bgWhiteBright: x };
    };
    picocolors_browser.exports = create();
    picocolors_browser.exports.createColors = create;
    return picocolors_browser.exports;
}
var _nodeResolve_empty = {};
var _nodeResolve_empty$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    default: _nodeResolve_empty
});
var require$$2 = /* @__PURE__ */ getAugmentedNamespace(_nodeResolve_empty$1);
var cssSyntaxError;
var hasRequiredCssSyntaxError;
function requireCssSyntaxError() {
    if (hasRequiredCssSyntaxError)
        return cssSyntaxError;
    hasRequiredCssSyntaxError = 1;
    let pico = /* @__PURE__ */ requirePicocolors_browser();
    let terminalHighlight = require$$2;
    class CssSyntaxError extends Error {
        constructor(message, line, column, source, file, plugin) {
            super(message);
            this.name = "CssSyntaxError";
            this.reason = message;
            if (file) {
                this.file = file;
            }
            if (source) {
                this.source = source;
            }
            if (plugin) {
                this.plugin = plugin;
            }
            if (typeof line !== "undefined" && typeof column !== "undefined") {
                if (typeof line === "number") {
                    this.line = line;
                    this.column = column;
                }
                else {
                    this.line = line.line;
                    this.column = line.column;
                    this.endLine = column.line;
                    this.endColumn = column.column;
                }
            }
            this.setMessage();
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, CssSyntaxError);
            }
        }
        setMessage() {
            this.message = this.plugin ? this.plugin + ": " : "";
            this.message += this.file ? this.file : "<css input>";
            if (typeof this.line !== "undefined") {
                this.message += ":" + this.line + ":" + this.column;
            }
            this.message += ": " + this.reason;
        }
        showSourceCode(color) {
            if (!this.source)
                return "";
            let css = this.source;
            if (color == null)
                color = pico.isColorSupported;
            let aside = (text) => text;
            let mark = (text) => text;
            let highlight = (text) => text;
            if (color) {
                let { bold, gray, red } = pico.createColors(true);
                mark = (text) => bold(red(text));
                aside = (text) => gray(text);
                if (terminalHighlight) {
                    highlight = (text) => terminalHighlight(text);
                }
            }
            let lines = css.split(/\r?\n/);
            let start = Math.max(this.line - 3, 0);
            let end = Math.min(this.line + 2, lines.length);
            let maxWidth = String(end).length;
            return lines.slice(start, end).map((line, index) => {
                let number = start + 1 + index;
                let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
                if (number === this.line) {
                    if (line.length > 160) {
                        let padding = 20;
                        let subLineStart = Math.max(0, this.column - padding);
                        let subLineEnd = Math.max(this.column + padding, this.endColumn + padding);
                        let subLine = line.slice(subLineStart, subLineEnd);
                        let spacing2 = aside(gutter.replace(/\d/g, " ")) + line.slice(0, Math.min(this.column - 1, padding - 1)).replace(/[^\t]/g, " ");
                        return mark(">") + aside(gutter) + highlight(subLine) + "\n " + spacing2 + mark("^");
                    }
                    let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                    return mark(">") + aside(gutter) + highlight(line) + "\n " + spacing + mark("^");
                }
                return " " + aside(gutter) + highlight(line);
            }).join("\n");
        }
        toString() {
            let code = this.showSourceCode();
            if (code) {
                code = "\n\n" + code + "\n";
            }
            return this.name + ": " + this.message + code;
        }
    }
    cssSyntaxError = CssSyntaxError;
    CssSyntaxError.default = CssSyntaxError;
    return cssSyntaxError;
}
var stringifier;
var hasRequiredStringifier;
function requireStringifier() {
    if (hasRequiredStringifier)
        return stringifier;
    hasRequiredStringifier = 1;
    const DEFAULT_RAW = {
        after: "\n",
        beforeClose: "\n",
        beforeComment: "\n",
        beforeDecl: "\n",
        beforeOpen: " ",
        beforeRule: "\n",
        colon: ": ",
        commentLeft: " ",
        commentRight: " ",
        emptyBody: "",
        indent: "    ",
        semicolon: false
    };
    function capitalize(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    class Stringifier {
        constructor(builder) {
            this.builder = builder;
        }
        atrule(node2, semicolon) {
            let name = "@" + node2.name;
            let params = node2.params ? this.rawValue(node2, "params") : "";
            if (typeof node2.raws.afterName !== "undefined") {
                name += node2.raws.afterName;
            }
            else if (params) {
                name += " ";
            }
            if (node2.nodes) {
                this.block(node2, name + params);
            }
            else {
                let end = (node2.raws.between || "") + (semicolon ? ";" : "");
                this.builder(name + params + end, node2);
            }
        }
        beforeAfter(node2, detect) {
            let value;
            if (node2.type === "decl") {
                value = this.raw(node2, null, "beforeDecl");
            }
            else if (node2.type === "comment") {
                value = this.raw(node2, null, "beforeComment");
            }
            else if (detect === "before") {
                value = this.raw(node2, null, "beforeRule");
            }
            else {
                value = this.raw(node2, null, "beforeClose");
            }
            let buf = node2.parent;
            let depth = 0;
            while (buf && buf.type !== "root") {
                depth += 1;
                buf = buf.parent;
            }
            if (value.includes("\n")) {
                let indent = this.raw(node2, null, "indent");
                if (indent.length) {
                    for (let step = 0; step < depth; step++)
                        value += indent;
                }
            }
            return value;
        }
        block(node2, start) {
            let between = this.raw(node2, "between", "beforeOpen");
            this.builder(start + between + "{", node2, "start");
            let after;
            if (node2.nodes && node2.nodes.length) {
                this.body(node2);
                after = this.raw(node2, "after");
            }
            else {
                after = this.raw(node2, "after", "emptyBody");
            }
            if (after)
                this.builder(after);
            this.builder("}", node2, "end");
        }
        body(node2) {
            let last = node2.nodes.length - 1;
            while (last > 0) {
                if (node2.nodes[last].type !== "comment")
                    break;
                last -= 1;
            }
            let semicolon = this.raw(node2, "semicolon");
            for (let i = 0; i < node2.nodes.length; i++) {
                let child = node2.nodes[i];
                let before = this.raw(child, "before");
                if (before)
                    this.builder(before);
                this.stringify(child, last !== i || semicolon);
            }
        }
        comment(node2) {
            let left = this.raw(node2, "left", "commentLeft");
            let right = this.raw(node2, "right", "commentRight");
            this.builder("/*" + left + node2.text + right + "*/", node2);
        }
        decl(node2, semicolon) {
            let between = this.raw(node2, "between", "colon");
            let string = node2.prop + between + this.rawValue(node2, "value");
            if (node2.important) {
                string += node2.raws.important || " !important";
            }
            if (semicolon)
                string += ";";
            this.builder(string, node2);
        }
        document(node2) {
            this.body(node2);
        }
        raw(node2, own, detect) {
            let value;
            if (!detect)
                detect = own;
            if (own) {
                value = node2.raws[own];
                if (typeof value !== "undefined")
                    return value;
            }
            let parent = node2.parent;
            if (detect === "before") {
                if (!parent || parent.type === "root" && parent.first === node2) {
                    return "";
                }
                if (parent && parent.type === "document") {
                    return "";
                }
            }
            if (!parent)
                return DEFAULT_RAW[detect];
            let root2 = node2.root();
            if (!root2.rawCache)
                root2.rawCache = {};
            if (typeof root2.rawCache[detect] !== "undefined") {
                return root2.rawCache[detect];
            }
            if (detect === "before" || detect === "after") {
                return this.beforeAfter(node2, detect);
            }
            else {
                let method = "raw" + capitalize(detect);
                if (this[method]) {
                    value = this[method](root2, node2);
                }
                else {
                    root2.walk((i) => {
                        value = i.raws[own];
                        if (typeof value !== "undefined")
                            return false;
                    });
                }
            }
            if (typeof value === "undefined")
                value = DEFAULT_RAW[detect];
            root2.rawCache[detect] = value;
            return value;
        }
        rawBeforeClose(root2) {
            let value;
            root2.walk((i) => {
                if (i.nodes && i.nodes.length > 0) {
                    if (typeof i.raws.after !== "undefined") {
                        value = i.raws.after;
                        if (value.includes("\n")) {
                            value = value.replace(/[^\n]+$/, "");
                        }
                        return false;
                    }
                }
            });
            if (value)
                value = value.replace(/\S/g, "");
            return value;
        }
        rawBeforeComment(root2, node2) {
            let value;
            root2.walkComments((i) => {
                if (typeof i.raws.before !== "undefined") {
                    value = i.raws.before;
                    if (value.includes("\n")) {
                        value = value.replace(/[^\n]+$/, "");
                    }
                    return false;
                }
            });
            if (typeof value === "undefined") {
                value = this.raw(node2, null, "beforeDecl");
            }
            else if (value) {
                value = value.replace(/\S/g, "");
            }
            return value;
        }
        rawBeforeDecl(root2, node2) {
            let value;
            root2.walkDecls((i) => {
                if (typeof i.raws.before !== "undefined") {
                    value = i.raws.before;
                    if (value.includes("\n")) {
                        value = value.replace(/[^\n]+$/, "");
                    }
                    return false;
                }
            });
            if (typeof value === "undefined") {
                value = this.raw(node2, null, "beforeRule");
            }
            else if (value) {
                value = value.replace(/\S/g, "");
            }
            return value;
        }
        rawBeforeOpen(root2) {
            let value;
            root2.walk((i) => {
                if (i.type !== "decl") {
                    value = i.raws.between;
                    if (typeof value !== "undefined")
                        return false;
                }
            });
            return value;
        }
        rawBeforeRule(root2) {
            let value;
            root2.walk((i) => {
                if (i.nodes && (i.parent !== root2 || root2.first !== i)) {
                    if (typeof i.raws.before !== "undefined") {
                        value = i.raws.before;
                        if (value.includes("\n")) {
                            value = value.replace(/[^\n]+$/, "");
                        }
                        return false;
                    }
                }
            });
            if (value)
                value = value.replace(/\S/g, "");
            return value;
        }
        rawColon(root2) {
            let value;
            root2.walkDecls((i) => {
                if (typeof i.raws.between !== "undefined") {
                    value = i.raws.between.replace(/[^\s:]/g, "");
                    return false;
                }
            });
            return value;
        }
        rawEmptyBody(root2) {
            let value;
            root2.walk((i) => {
                if (i.nodes && i.nodes.length === 0) {
                    value = i.raws.after;
                    if (typeof value !== "undefined")
                        return false;
                }
            });
            return value;
        }
        rawIndent(root2) {
            if (root2.raws.indent)
                return root2.raws.indent;
            let value;
            root2.walk((i) => {
                let p = i.parent;
                if (p && p !== root2 && p.parent && p.parent === root2) {
                    if (typeof i.raws.before !== "undefined") {
                        let parts = i.raws.before.split("\n");
                        value = parts[parts.length - 1];
                        value = value.replace(/\S/g, "");
                        return false;
                    }
                }
            });
            return value;
        }
        rawSemicolon(root2) {
            let value;
            root2.walk((i) => {
                if (i.nodes && i.nodes.length && i.last.type === "decl") {
                    value = i.raws.semicolon;
                    if (typeof value !== "undefined")
                        return false;
                }
            });
            return value;
        }
        rawValue(node2, prop) {
            let value = node2[prop];
            let raw = node2.raws[prop];
            if (raw && raw.value === value) {
                return raw.raw;
            }
            return value;
        }
        root(node2) {
            this.body(node2);
            if (node2.raws.after)
                this.builder(node2.raws.after);
        }
        rule(node2) {
            this.block(node2, this.rawValue(node2, "selector"));
            if (node2.raws.ownSemicolon) {
                this.builder(node2.raws.ownSemicolon, node2, "end");
            }
        }
        stringify(node2, semicolon) {
            if (!this[node2.type]) {
                throw new Error("Unknown AST node type " + node2.type + ". Maybe you need to change PostCSS stringifier.");
            }
            this[node2.type](node2, semicolon);
        }
    }
    stringifier = Stringifier;
    Stringifier.default = Stringifier;
    return stringifier;
}
var stringify_1;
var hasRequiredStringify;
function requireStringify() {
    if (hasRequiredStringify)
        return stringify_1;
    hasRequiredStringify = 1;
    let Stringifier = requireStringifier();
    function stringify2(node2, builder) {
        let str = new Stringifier(builder);
        str.stringify(node2);
    }
    stringify_1 = stringify2;
    stringify2.default = stringify2;
    return stringify_1;
}
var symbols = {};
var hasRequiredSymbols;
function requireSymbols() {
    if (hasRequiredSymbols)
        return symbols;
    hasRequiredSymbols = 1;
    symbols.isClean = Symbol("isClean");
    symbols.my = Symbol("my");
    return symbols;
}
var node;
var hasRequiredNode$1;
function requireNode$1() {
    if (hasRequiredNode$1)
        return node;
    hasRequiredNode$1 = 1;
    let CssSyntaxError = requireCssSyntaxError();
    let Stringifier = requireStringifier();
    let stringify2 = requireStringify();
    let { isClean, my } = requireSymbols();
    function cloneNode2(obj, parent) {
        let cloned = new obj.constructor();
        for (let i in obj) {
            if (!Object.prototype.hasOwnProperty.call(obj, i)) {
                continue;
            }
            if (i === "proxyCache")
                continue;
            let value = obj[i];
            let type = typeof value;
            if (i === "parent" && type === "object") {
                if (parent)
                    cloned[i] = parent;
            }
            else if (i === "source") {
                cloned[i] = value;
            }
            else if (Array.isArray(value)) {
                cloned[i] = value.map((j) => cloneNode2(j, cloned));
            }
            else {
                if (type === "object" && value !== null)
                    value = cloneNode2(value);
                cloned[i] = value;
            }
        }
        return cloned;
    }
    function sourceOffset(inputCSS, position) {
        if (position && typeof position.offset !== "undefined") {
            return position.offset;
        }
        let column = 1;
        let line = 1;
        let offset = 0;
        for (let i = 0; i < inputCSS.length; i++) {
            if (line === position.line && column === position.column) {
                offset = i;
                break;
            }
            if (inputCSS[i] === "\n") {
                column = 1;
                line += 1;
            }
            else {
                column += 1;
            }
        }
        return offset;
    }
    class Node2 {
        get proxyOf() {
            return this;
        }
        constructor(defaults = {}) {
            this.raws = {};
            this[isClean] = false;
            this[my] = true;
            for (let name in defaults) {
                if (name === "nodes") {
                    this.nodes = [];
                    for (let node2 of defaults[name]) {
                        if (typeof node2.clone === "function") {
                            this.append(node2.clone());
                        }
                        else {
                            this.append(node2);
                        }
                    }
                }
                else {
                    this[name] = defaults[name];
                }
            }
        }
        addToError(error) {
            error.postcssNode = this;
            if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
                let s = this.source;
                error.stack = error.stack.replace(/\n\s{4}at /, `$&${s.input.from}:${s.start.line}:${s.start.column}$&`);
            }
            return error;
        }
        after(add) {
            this.parent.insertAfter(this, add);
            return this;
        }
        assign(overrides = {}) {
            for (let name in overrides) {
                this[name] = overrides[name];
            }
            return this;
        }
        before(add) {
            this.parent.insertBefore(this, add);
            return this;
        }
        cleanRaws(keepBetween) {
            delete this.raws.before;
            delete this.raws.after;
            if (!keepBetween)
                delete this.raws.between;
        }
        clone(overrides = {}) {
            let cloned = cloneNode2(this);
            for (let name in overrides) {
                cloned[name] = overrides[name];
            }
            return cloned;
        }
        cloneAfter(overrides = {}) {
            let cloned = this.clone(overrides);
            this.parent.insertAfter(this, cloned);
            return cloned;
        }
        cloneBefore(overrides = {}) {
            let cloned = this.clone(overrides);
            this.parent.insertBefore(this, cloned);
            return cloned;
        }
        error(message, opts = {}) {
            if (this.source) {
                let { end, start } = this.rangeBy(opts);
                return this.source.input.error(message, { column: start.column, line: start.line }, { column: end.column, line: end.line }, opts);
            }
            return new CssSyntaxError(message);
        }
        getProxyProcessor() {
            return {
                get(node2, prop) {
                    if (prop === "proxyOf") {
                        return node2;
                    }
                    else if (prop === "root") {
                        return () => node2.root().toProxy();
                    }
                    else {
                        return node2[prop];
                    }
                },
                set(node2, prop, value) {
                    if (node2[prop] === value)
                        return true;
                    node2[prop] = value;
                    if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || /* c8 ignore next */
                        prop === "text") {
                        node2.markDirty();
                    }
                    return true;
                }
            };
        }
        /* c8 ignore next 3 */
        markClean() {
            this[isClean] = true;
        }
        markDirty() {
            if (this[isClean]) {
                this[isClean] = false;
                let next = this;
                while (next = next.parent) {
                    next[isClean] = false;
                }
            }
        }
        next() {
            if (!this.parent)
                return void 0;
            let index = this.parent.index(this);
            return this.parent.nodes[index + 1];
        }
        positionBy(opts = {}) {
            let pos = this.source.start;
            if (opts.index) {
                pos = this.positionInside(opts.index);
            }
            else if (opts.word) {
                let inputString = "document" in this.source.input ? this.source.input.document : this.source.input.css;
                let stringRepresentation = inputString.slice(sourceOffset(inputString, this.source.start), sourceOffset(inputString, this.source.end));
                let index = stringRepresentation.indexOf(opts.word);
                if (index !== -1)
                    pos = this.positionInside(index);
            }
            return pos;
        }
        positionInside(index) {
            let column = this.source.start.column;
            let line = this.source.start.line;
            let inputString = "document" in this.source.input ? this.source.input.document : this.source.input.css;
            let offset = sourceOffset(inputString, this.source.start);
            let end = offset + index;
            for (let i = offset; i < end; i++) {
                if (inputString[i] === "\n") {
                    column = 1;
                    line += 1;
                }
                else {
                    column += 1;
                }
            }
            return { column, line, offset: end };
        }
        prev() {
            if (!this.parent)
                return void 0;
            let index = this.parent.index(this);
            return this.parent.nodes[index - 1];
        }
        rangeBy(opts = {}) {
            let inputString = "document" in this.source.input ? this.source.input.document : this.source.input.css;
            let start = {
                column: this.source.start.column,
                line: this.source.start.line,
                offset: sourceOffset(inputString, this.source.start)
            };
            let end = this.source.end ? {
                column: this.source.end.column + 1,
                line: this.source.end.line,
                offset: typeof this.source.end.offset === "number" ? (
                // `source.end.offset` is exclusive, so we don't need to add 1
                this.source.end.offset) : (
                // Since line/column in this.source.end is inclusive,
                // the `sourceOffset(... , this.source.end)` returns an inclusive offset.
                // So, we add 1 to convert it to exclusive.
                sourceOffset(inputString, this.source.end) + 1)
            } : {
                column: start.column + 1,
                line: start.line,
                offset: start.offset + 1
            };
            if (opts.word) {
                let stringRepresentation = inputString.slice(sourceOffset(inputString, this.source.start), sourceOffset(inputString, this.source.end));
                let index = stringRepresentation.indexOf(opts.word);
                if (index !== -1) {
                    start = this.positionInside(index);
                    end = this.positionInside(index + opts.word.length);
                }
            }
            else {
                if (opts.start) {
                    start = {
                        column: opts.start.column,
                        line: opts.start.line,
                        offset: sourceOffset(inputString, opts.start)
                    };
                }
                else if (opts.index) {
                    start = this.positionInside(opts.index);
                }
                if (opts.end) {
                    end = {
                        column: opts.end.column,
                        line: opts.end.line,
                        offset: sourceOffset(inputString, opts.end)
                    };
                }
                else if (typeof opts.endIndex === "number") {
                    end = this.positionInside(opts.endIndex);
                }
                else if (opts.index) {
                    end = this.positionInside(opts.index + 1);
                }
            }
            if (end.line < start.line || end.line === start.line && end.column <= start.column) {
                end = {
                    column: start.column + 1,
                    line: start.line,
                    offset: start.offset + 1
                };
            }
            return { end, start };
        }
        raw(prop, defaultType) {
            let str = new Stringifier();
            return str.raw(this, prop, defaultType);
        }
        remove() {
            if (this.parent) {
                this.parent.removeChild(this);
            }
            this.parent = void 0;
            return this;
        }
        replaceWith(...nodes) {
            if (this.parent) {
                let bookmark = this;
                let foundSelf = false;
                for (let node2 of nodes) {
                    if (node2 === this) {
                        foundSelf = true;
                    }
                    else if (foundSelf) {
                        this.parent.insertAfter(bookmark, node2);
                        bookmark = node2;
                    }
                    else {
                        this.parent.insertBefore(bookmark, node2);
                    }
                }
                if (!foundSelf) {
                    this.remove();
                }
            }
            return this;
        }
        root() {
            let result2 = this;
            while (result2.parent && result2.parent.type !== "document") {
                result2 = result2.parent;
            }
            return result2;
        }
        toJSON(_, inputs) {
            let fixed = {};
            let emitInputs = inputs == null;
            inputs = inputs || /* @__PURE__ */ new Map();
            let inputsNextIndex = 0;
            for (let name in this) {
                if (!Object.prototype.hasOwnProperty.call(this, name)) {
                    continue;
                }
                if (name === "parent" || name === "proxyCache")
                    continue;
                let value = this[name];
                if (Array.isArray(value)) {
                    fixed[name] = value.map((i) => {
                        if (typeof i === "object" && i.toJSON) {
                            return i.toJSON(null, inputs);
                        }
                        else {
                            return i;
                        }
                    });
                }
                else if (typeof value === "object" && value.toJSON) {
                    fixed[name] = value.toJSON(null, inputs);
                }
                else if (name === "source") {
                    if (value == null)
                        continue;
                    let inputId = inputs.get(value.input);
                    if (inputId == null) {
                        inputId = inputsNextIndex;
                        inputs.set(value.input, inputsNextIndex);
                        inputsNextIndex++;
                    }
                    fixed[name] = {
                        end: value.end,
                        inputId,
                        start: value.start
                    };
                }
                else {
                    fixed[name] = value;
                }
            }
            if (emitInputs) {
                fixed.inputs = [...inputs.keys()].map((input2) => input2.toJSON());
            }
            return fixed;
        }
        toProxy() {
            if (!this.proxyCache) {
                this.proxyCache = new Proxy(this, this.getProxyProcessor());
            }
            return this.proxyCache;
        }
        toString(stringifier2 = stringify2) {
            if (stringifier2.stringify)
                stringifier2 = stringifier2.stringify;
            let result2 = "";
            stringifier2(this, (i) => {
                result2 += i;
            });
            return result2;
        }
        warn(result2, text, opts = {}) {
            let data = { node: this };
            for (let i in opts)
                data[i] = opts[i];
            return result2.warn(text, data);
        }
    }
    node = Node2;
    Node2.default = Node2;
    return node;
}
var comment;
var hasRequiredComment;
function requireComment() {
    if (hasRequiredComment)
        return comment;
    hasRequiredComment = 1;
    let Node2 = requireNode$1();
    class Comment2 extends Node2 {
        constructor(defaults) {
            super(defaults);
            this.type = "comment";
        }
    }
    comment = Comment2;
    Comment2.default = Comment2;
    return comment;
}
var declaration;
var hasRequiredDeclaration;
function requireDeclaration() {
    if (hasRequiredDeclaration)
        return declaration;
    hasRequiredDeclaration = 1;
    let Node2 = requireNode$1();
    class Declaration extends Node2 {
        get variable() {
            return this.prop.startsWith("--") || this.prop[0] === "$";
        }
        constructor(defaults) {
            if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") {
                defaults = __spreadProps(__spreadValues({}, defaults), { value: String(defaults.value) });
            }
            super(defaults);
            this.type = "decl";
        }
    }
    declaration = Declaration;
    Declaration.default = Declaration;
    return declaration;
}
var container;
var hasRequiredContainer$1;
function requireContainer$1() {
    if (hasRequiredContainer$1)
        return container;
    hasRequiredContainer$1 = 1;
    let Comment2 = requireComment();
    let Declaration = requireDeclaration();
    let Node2 = requireNode$1();
    let { isClean, my } = requireSymbols();
    let AtRule, parse2, Root2, Rule;
    function cleanSource(nodes) {
        return nodes.map((i) => {
            if (i.nodes)
                i.nodes = cleanSource(i.nodes);
            delete i.source;
            return i;
        });
    }
    function markTreeDirty(node2) {
        node2[isClean] = false;
        if (node2.proxyOf.nodes) {
            for (let i of node2.proxyOf.nodes) {
                markTreeDirty(i);
            }
        }
    }
    class Container2 extends Node2 {
        get first() {
            if (!this.proxyOf.nodes)
                return void 0;
            return this.proxyOf.nodes[0];
        }
        get last() {
            if (!this.proxyOf.nodes)
                return void 0;
            return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
        }
        append(...children) {
            for (let child of children) {
                let nodes = this.normalize(child, this.last);
                for (let node2 of nodes)
                    this.proxyOf.nodes.push(node2);
            }
            this.markDirty();
            return this;
        }
        cleanRaws(keepBetween) {
            super.cleanRaws(keepBetween);
            if (this.nodes) {
                for (let node2 of this.nodes)
                    node2.cleanRaws(keepBetween);
            }
        }
        each(callback) {
            if (!this.proxyOf.nodes)
                return void 0;
            let iterator = this.getIterator();
            let index, result2;
            while (this.indexes[iterator] < this.proxyOf.nodes.length) {
                index = this.indexes[iterator];
                result2 = callback(this.proxyOf.nodes[index], index);
                if (result2 === false)
                    break;
                this.indexes[iterator] += 1;
            }
            delete this.indexes[iterator];
            return result2;
        }
        every(condition) {
            return this.nodes.every(condition);
        }
        getIterator() {
            if (!this.lastEach)
                this.lastEach = 0;
            if (!this.indexes)
                this.indexes = {};
            this.lastEach += 1;
            let iterator = this.lastEach;
            this.indexes[iterator] = 0;
            return iterator;
        }
        getProxyProcessor() {
            return {
                get(node2, prop) {
                    if (prop === "proxyOf") {
                        return node2;
                    }
                    else if (!node2[prop]) {
                        return node2[prop];
                    }
                    else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) {
                        return (...args) => {
                            return node2[prop](...args.map((i) => {
                                if (typeof i === "function") {
                                    return (child, index) => i(child.toProxy(), index);
                                }
                                else {
                                    return i;
                                }
                            }));
                        };
                    }
                    else if (prop === "every" || prop === "some") {
                        return (cb) => {
                            return node2[prop]((child, ...other) => cb(child.toProxy(), ...other));
                        };
                    }
                    else if (prop === "root") {
                        return () => node2.root().toProxy();
                    }
                    else if (prop === "nodes") {
                        return node2.nodes.map((i) => i.toProxy());
                    }
                    else if (prop === "first" || prop === "last") {
                        return node2[prop].toProxy();
                    }
                    else {
                        return node2[prop];
                    }
                },
                set(node2, prop, value) {
                    if (node2[prop] === value)
                        return true;
                    node2[prop] = value;
                    if (prop === "name" || prop === "params" || prop === "selector") {
                        node2.markDirty();
                    }
                    return true;
                }
            };
        }
        index(child) {
            if (typeof child === "number")
                return child;
            if (child.proxyOf)
                child = child.proxyOf;
            return this.proxyOf.nodes.indexOf(child);
        }
        insertAfter(exist, add) {
            let existIndex = this.index(exist);
            let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
            existIndex = this.index(exist);
            for (let node2 of nodes)
                this.proxyOf.nodes.splice(existIndex + 1, 0, node2);
            let index;
            for (let id in this.indexes) {
                index = this.indexes[id];
                if (existIndex < index) {
                    this.indexes[id] = index + nodes.length;
                }
            }
            this.markDirty();
            return this;
        }
        insertBefore(exist, add) {
            let existIndex = this.index(exist);
            let type = existIndex === 0 ? "prepend" : false;
            let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
            existIndex = this.index(exist);
            for (let node2 of nodes)
                this.proxyOf.nodes.splice(existIndex, 0, node2);
            let index;
            for (let id in this.indexes) {
                index = this.indexes[id];
                if (existIndex <= index) {
                    this.indexes[id] = index + nodes.length;
                }
            }
            this.markDirty();
            return this;
        }
        normalize(nodes, sample) {
            if (typeof nodes === "string") {
                nodes = cleanSource(parse2(nodes).nodes);
            }
            else if (typeof nodes === "undefined") {
                nodes = [];
            }
            else if (Array.isArray(nodes)) {
                nodes = nodes.slice(0);
                for (let i of nodes) {
                    if (i.parent)
                        i.parent.removeChild(i, "ignore");
                }
            }
            else if (nodes.type === "root" && this.type !== "document") {
                nodes = nodes.nodes.slice(0);
                for (let i of nodes) {
                    if (i.parent)
                        i.parent.removeChild(i, "ignore");
                }
            }
            else if (nodes.type) {
                nodes = [nodes];
            }
            else if (nodes.prop) {
                if (typeof nodes.value === "undefined") {
                    throw new Error("Value field is missed in node creation");
                }
                else if (typeof nodes.value !== "string") {
                    nodes.value = String(nodes.value);
                }
                nodes = [new Declaration(nodes)];
            }
            else if (nodes.selector || nodes.selectors) {
                nodes = [new Rule(nodes)];
            }
            else if (nodes.name) {
                nodes = [new AtRule(nodes)];
            }
            else if (nodes.text) {
                nodes = [new Comment2(nodes)];
            }
            else {
                throw new Error("Unknown node type in node creation");
            }
            let processed = nodes.map((i) => {
                if (!i[my])
                    Container2.rebuild(i);
                i = i.proxyOf;
                if (i.parent)
                    i.parent.removeChild(i);
                if (i[isClean])
                    markTreeDirty(i);
                if (!i.raws)
                    i.raws = {};
                if (typeof i.raws.before === "undefined") {
                    if (sample && typeof sample.raws.before !== "undefined") {
                        i.raws.before = sample.raws.before.replace(/\S/g, "");
                    }
                }
                i.parent = this.proxyOf;
                return i;
            });
            return processed;
        }
        prepend(...children) {
            children = children.reverse();
            for (let child of children) {
                let nodes = this.normalize(child, this.first, "prepend").reverse();
                for (let node2 of nodes)
                    this.proxyOf.nodes.unshift(node2);
                for (let id in this.indexes) {
                    this.indexes[id] = this.indexes[id] + nodes.length;
                }
            }
            this.markDirty();
            return this;
        }
        push(child) {
            child.parent = this;
            this.proxyOf.nodes.push(child);
            return this;
        }
        removeAll() {
            for (let node2 of this.proxyOf.nodes)
                node2.parent = void 0;
            this.proxyOf.nodes = [];
            this.markDirty();
            return this;
        }
        removeChild(child) {
            child = this.index(child);
            this.proxyOf.nodes[child].parent = void 0;
            this.proxyOf.nodes.splice(child, 1);
            let index;
            for (let id in this.indexes) {
                index = this.indexes[id];
                if (index >= child) {
                    this.indexes[id] = index - 1;
                }
            }
            this.markDirty();
            return this;
        }
        replaceValues(pattern, opts, callback) {
            if (!callback) {
                callback = opts;
                opts = {};
            }
            this.walkDecls((decl) => {
                if (opts.props && !opts.props.includes(decl.prop))
                    return;
                if (opts.fast && !decl.value.includes(opts.fast))
                    return;
                decl.value = decl.value.replace(pattern, callback);
            });
            this.markDirty();
            return this;
        }
        some(condition) {
            return this.nodes.some(condition);
        }
        walk(callback) {
            return this.each((child, i) => {
                let result2;
                try {
                    result2 = callback(child, i);
                }
                catch (e) {
                    throw child.addToError(e);
                }
                if (result2 !== false && child.walk) {
                    result2 = child.walk(callback);
                }
                return result2;
            });
        }
        walkAtRules(name, callback) {
            if (!callback) {
                callback = name;
                return this.walk((child, i) => {
                    if (child.type === "atrule") {
                        return callback(child, i);
                    }
                });
            }
            if (name instanceof RegExp) {
                return this.walk((child, i) => {
                    if (child.type === "atrule" && name.test(child.name)) {
                        return callback(child, i);
                    }
                });
            }
            return this.walk((child, i) => {
                if (child.type === "atrule" && child.name === name) {
                    return callback(child, i);
                }
            });
        }
        walkComments(callback) {
            return this.walk((child, i) => {
                if (child.type === "comment") {
                    return callback(child, i);
                }
            });
        }
        walkDecls(prop, callback) {
            if (!callback) {
                callback = prop;
                return this.walk((child, i) => {
                    if (child.type === "decl") {
                        return callback(child, i);
                    }
                });
            }
            if (prop instanceof RegExp) {
                return this.walk((child, i) => {
                    if (child.type === "decl" && prop.test(child.prop)) {
                        return callback(child, i);
                    }
                });
            }
            return this.walk((child, i) => {
                if (child.type === "decl" && child.prop === prop) {
                    return callback(child, i);
                }
            });
        }
        walkRules(selector, callback) {
            if (!callback) {
                callback = selector;
                return this.walk((child, i) => {
                    if (child.type === "rule") {
                        return callback(child, i);
                    }
                });
            }
            if (selector instanceof RegExp) {
                return this.walk((child, i) => {
                    if (child.type === "rule" && selector.test(child.selector)) {
                        return callback(child, i);
                    }
                });
            }
            return this.walk((child, i) => {
                if (child.type === "rule" && child.selector === selector) {
                    return callback(child, i);
                }
            });
        }
    }
    Container2.registerParse = (dependant) => {
        parse2 = dependant;
    };
    Container2.registerRule = (dependant) => {
        Rule = dependant;
    };
    Container2.registerAtRule = (dependant) => {
        AtRule = dependant;
    };
    Container2.registerRoot = (dependant) => {
        Root2 = dependant;
    };
    container = Container2;
    Container2.default = Container2;
    Container2.rebuild = (node2) => {
        if (node2.type === "atrule") {
            Object.setPrototypeOf(node2, AtRule.prototype);
        }
        else if (node2.type === "rule") {
            Object.setPrototypeOf(node2, Rule.prototype);
        }
        else if (node2.type === "decl") {
            Object.setPrototypeOf(node2, Declaration.prototype);
        }
        else if (node2.type === "comment") {
            Object.setPrototypeOf(node2, Comment2.prototype);
        }
        else if (node2.type === "root") {
            Object.setPrototypeOf(node2, Root2.prototype);
        }
        node2[my] = true;
        if (node2.nodes) {
            node2.nodes.forEach((child) => {
                Container2.rebuild(child);
            });
        }
    };
    return container;
}
var atRule;
var hasRequiredAtRule;
function requireAtRule() {
    if (hasRequiredAtRule)
        return atRule;
    hasRequiredAtRule = 1;
    let Container2 = requireContainer$1();
    class AtRule extends Container2 {
        constructor(defaults) {
            super(defaults);
            this.type = "atrule";
        }
        append(...children) {
            if (!this.proxyOf.nodes)
                this.nodes = [];
            return super.append(...children);
        }
        prepend(...children) {
            if (!this.proxyOf.nodes)
                this.nodes = [];
            return super.prepend(...children);
        }
    }
    atRule = AtRule;
    AtRule.default = AtRule;
    Container2.registerAtRule(AtRule);
    return atRule;
}
var document;
var hasRequiredDocument;
function requireDocument() {
    if (hasRequiredDocument)
        return document;
    hasRequiredDocument = 1;
    let Container2 = requireContainer$1();
    let LazyResult, Processor;
    class Document2 extends Container2 {
        constructor(defaults) {
            super(__spreadValues({ type: "document" }, defaults));
            if (!this.nodes) {
                this.nodes = [];
            }
        }
        toResult(opts = {}) {
            let lazy = new LazyResult(new Processor(), this, opts);
            return lazy.stringify();
        }
    }
    Document2.registerLazyResult = (dependant) => {
        LazyResult = dependant;
    };
    Document2.registerProcessor = (dependant) => {
        Processor = dependant;
    };
    document = Document2;
    Document2.default = Document2;
    return document;
}
var nonSecure;
var hasRequiredNonSecure;
function requireNonSecure() {
    if (hasRequiredNonSecure)
        return nonSecure;
    hasRequiredNonSecure = 1;
    let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
    let customAlphabet = (alphabet, defaultSize = 21) => {
        return (size = defaultSize) => {
            let id = "";
            let i = size | 0;
            while (i--) {
                id += alphabet[Math.random() * alphabet.length | 0];
            }
            return id;
        };
    };
    let nanoid = (size = 21) => {
        let id = "";
        let i = size | 0;
        while (i--) {
            id += urlAlphabet[Math.random() * 64 | 0];
        }
        return id;
    };
    nonSecure = { nanoid, customAlphabet };
    return nonSecure;
}
var previousMap;
var hasRequiredPreviousMap;
function requirePreviousMap() {
    if (hasRequiredPreviousMap)
        return previousMap;
    hasRequiredPreviousMap = 1;
    let { existsSync, readFileSync } = require$$2;
    let { dirname: dirname2, join: join2 } = require$$2;
    let { SourceMapConsumer, SourceMapGenerator } = require$$2;
    function fromBase64(str) {
        if (Buffer) {
            return Buffer.from(str, "base64").toString();
        }
        else {
            return window.atob(str);
        }
    }
    class PreviousMap {
        constructor(css, opts) {
            if (opts.map === false)
                return;
            this.loadAnnotation(css);
            this.inline = this.startWith(this.annotation, "data:");
            let prev = opts.map ? opts.map.prev : void 0;
            let text = this.loadMap(opts.from, prev);
            if (!this.mapFile && opts.from) {
                this.mapFile = opts.from;
            }
            if (this.mapFile)
                this.root = dirname2(this.mapFile);
            if (text)
                this.text = text;
        }
        consumer() {
            if (!this.consumerCache) {
                this.consumerCache = new SourceMapConsumer(this.text);
            }
            return this.consumerCache;
        }
        decodeInline(text) {
            let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
            let baseUri = /^data:application\/json;base64,/;
            let charsetUri = /^data:application\/json;charset=utf-?8,/;
            let uri = /^data:application\/json,/;
            let uriMatch = text.match(charsetUri) || text.match(uri);
            if (uriMatch) {
                return decodeURIComponent(text.substr(uriMatch[0].length));
            }
            let baseUriMatch = text.match(baseCharsetUri) || text.match(baseUri);
            if (baseUriMatch) {
                return fromBase64(text.substr(baseUriMatch[0].length));
            }
            let encoding = text.match(/data:application\/json;([^,]+),/)[1];
            throw new Error("Unsupported source map encoding " + encoding);
        }
        getAnnotationURL(sourceMapString) {
            return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
        }
        isMap(map) {
            if (typeof map !== "object")
                return false;
            return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
        }
        loadAnnotation(css) {
            let comments = css.match(/\/\*\s*# sourceMappingURL=/g);
            if (!comments)
                return;
            let start = css.lastIndexOf(comments.pop());
            let end = css.indexOf("*/", start);
            if (start > -1 && end > -1) {
                this.annotation = this.getAnnotationURL(css.substring(start, end));
            }
        }
        loadFile(path2) {
            this.root = dirname2(path2);
            if (existsSync(path2)) {
                this.mapFile = path2;
                return readFileSync(path2, "utf-8").toString().trim();
            }
        }
        loadMap(file, prev) {
            if (prev === false)
                return false;
            if (prev) {
                if (typeof prev === "string") {
                    return prev;
                }
                else if (typeof prev === "function") {
                    let prevPath = prev(file);
                    if (prevPath) {
                        let map = this.loadFile(prevPath);
                        if (!map) {
                            throw new Error("Unable to load previous source map: " + prevPath.toString());
                        }
                        return map;
                    }
                }
                else if (prev instanceof SourceMapConsumer) {
                    return SourceMapGenerator.fromSourceMap(prev).toString();
                }
                else if (prev instanceof SourceMapGenerator) {
                    return prev.toString();
                }
                else if (this.isMap(prev)) {
                    return JSON.stringify(prev);
                }
                else {
                    throw new Error("Unsupported previous source map format: " + prev.toString());
                }
            }
            else if (this.inline) {
                return this.decodeInline(this.annotation);
            }
            else if (this.annotation) {
                let map = this.annotation;
                if (file)
                    map = join2(dirname2(file), map);
                return this.loadFile(map);
            }
        }
        startWith(string, start) {
            if (!string)
                return false;
            return string.substr(0, start.length) === start;
        }
        withContent() {
            return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
        }
    }
    previousMap = PreviousMap;
    PreviousMap.default = PreviousMap;
    return previousMap;
}
var input;
var hasRequiredInput;
function requireInput() {
    if (hasRequiredInput)
        return input;
    hasRequiredInput = 1;
    let { nanoid } = /* @__PURE__ */ requireNonSecure();
    let { isAbsolute: isAbsolute2, resolve: resolve2 } = require$$2;
    let { SourceMapConsumer, SourceMapGenerator } = require$$2;
    let { fileURLToPath, pathToFileURL } = require$$2;
    let CssSyntaxError = requireCssSyntaxError();
    let PreviousMap = requirePreviousMap();
    let terminalHighlight = require$$2;
    let lineToIndexCache = Symbol("lineToIndexCache");
    let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
    let pathAvailable = Boolean(resolve2 && isAbsolute2);
    function getLineToIndex(input2) {
        if (input2[lineToIndexCache])
            return input2[lineToIndexCache];
        let lines = input2.css.split("\n");
        let lineToIndex = new Array(lines.length);
        let prevIndex = 0;
        for (let i = 0, l = lines.length; i < l; i++) {
            lineToIndex[i] = prevIndex;
            prevIndex += lines[i].length + 1;
        }
        input2[lineToIndexCache] = lineToIndex;
        return lineToIndex;
    }
    class Input {
        get from() {
            return this.file || this.id;
        }
        constructor(css, opts = {}) {
            if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) {
                throw new Error(`PostCSS received ${css} instead of CSS string`);
            }
            this.css = css.toString();
            if (this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE") {
                this.hasBOM = true;
                this.css = this.css.slice(1);
            }
            else {
                this.hasBOM = false;
            }
            this.document = this.css;
            if (opts.document)
                this.document = opts.document.toString();
            if (opts.from) {
                if (!pathAvailable || /^\w+:\/\//.test(opts.from) || isAbsolute2(opts.from)) {
                    this.file = opts.from;
                }
                else {
                    this.file = resolve2(opts.from);
                }
            }
            if (pathAvailable && sourceMapAvailable) {
                let map = new PreviousMap(this.css, opts);
                if (map.text) {
                    this.map = map;
                    let file = map.consumer().file;
                    if (!this.file && file)
                        this.file = this.mapResolve(file);
                }
            }
            if (!this.file) {
                this.id = "<input css " + nanoid(6) + ">";
            }
            if (this.map)
                this.map.file = this.from;
        }
        error(message, line, column, opts = {}) {
            let endColumn, endLine, endOffset, offset, result2;
            if (line && typeof line === "object") {
                let start = line;
                let end = column;
                if (typeof start.offset === "number") {
                    offset = start.offset;
                    let pos = this.fromOffset(offset);
                    line = pos.line;
                    column = pos.col;
                }
                else {
                    line = start.line;
                    column = start.column;
                    offset = this.fromLineAndColumn(line, column);
                }
                if (typeof end.offset === "number") {
                    endOffset = end.offset;
                    let pos = this.fromOffset(endOffset);
                    endLine = pos.line;
                    endColumn = pos.col;
                }
                else {
                    endLine = end.line;
                    endColumn = end.column;
                    endOffset = this.fromLineAndColumn(end.line, end.column);
                }
            }
            else if (!column) {
                offset = line;
                let pos = this.fromOffset(offset);
                line = pos.line;
                column = pos.col;
            }
            else {
                offset = this.fromLineAndColumn(line, column);
            }
            let origin = this.origin(line, column, endLine, endColumn);
            if (origin) {
                result2 = new CssSyntaxError(message, origin.endLine === void 0 ? origin.line : { column: origin.column, line: origin.line }, origin.endLine === void 0 ? origin.column : { column: origin.endColumn, line: origin.endLine }, origin.source, origin.file, opts.plugin);
            }
            else {
                result2 = new CssSyntaxError(message, endLine === void 0 ? line : { column, line }, endLine === void 0 ? column : { column: endColumn, line: endLine }, this.css, this.file, opts.plugin);
            }
            result2.input = { column, endColumn, endLine, endOffset, line, offset, source: this.css };
            if (this.file) {
                if (pathToFileURL) {
                    result2.input.url = pathToFileURL(this.file).toString();
                }
                result2.input.file = this.file;
            }
            return result2;
        }
        fromLineAndColumn(line, column) {
            let lineToIndex = getLineToIndex(this);
            let index = lineToIndex[line - 1];
            return index + column - 1;
        }
        fromOffset(offset) {
            let lineToIndex = getLineToIndex(this);
            let lastLine = lineToIndex[lineToIndex.length - 1];
            let min = 0;
            if (offset >= lastLine) {
                min = lineToIndex.length - 1;
            }
            else {
                let max = lineToIndex.length - 2;
                let mid;
                while (min < max) {
                    mid = min + (max - min >> 1);
                    if (offset < lineToIndex[mid]) {
                        max = mid - 1;
                    }
                    else if (offset >= lineToIndex[mid + 1]) {
                        min = mid + 1;
                    }
                    else {
                        min = mid;
                        break;
                    }
                }
            }
            return {
                col: offset - lineToIndex[min] + 1,
                line: min + 1
            };
        }
        mapResolve(file) {
            if (/^\w+:\/\//.test(file)) {
                return file;
            }
            return resolve2(this.map.consumer().sourceRoot || this.map.root || ".", file);
        }
        origin(line, column, endLine, endColumn) {
            if (!this.map)
                return false;
            let consumer = this.map.consumer();
            let from = consumer.originalPositionFor({ column, line });
            if (!from.source)
                return false;
            let to;
            if (typeof endLine === "number") {
                to = consumer.originalPositionFor({ column: endColumn, line: endLine });
            }
            let fromUrl;
            if (isAbsolute2(from.source)) {
                fromUrl = pathToFileURL(from.source);
            }
            else {
                fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL(this.map.mapFile));
            }
            let result2 = {
                column: from.column,
                endColumn: to && to.column,
                endLine: to && to.line,
                line: from.line,
                url: fromUrl.toString()
            };
            if (fromUrl.protocol === "file:") {
                if (fileURLToPath) {
                    result2.file = fileURLToPath(fromUrl);
                }
                else {
                    throw new Error(`file: protocol is not available in this PostCSS build`);
                }
            }
            let source = consumer.sourceContentFor(from.source);
            if (source)
                result2.source = source;
            return result2;
        }
        toJSON() {
            let json = {};
            for (let name of ["hasBOM", "css", "file", "id"]) {
                if (this[name] != null) {
                    json[name] = this[name];
                }
            }
            if (this.map) {
                json.map = __spreadValues({}, this.map);
                if (json.map.consumerCache) {
                    json.map.consumerCache = void 0;
                }
            }
            return json;
        }
    }
    input = Input;
    Input.default = Input;
    if (terminalHighlight && terminalHighlight.registerInput) {
        terminalHighlight.registerInput(Input);
    }
    return input;
}
var root;
var hasRequiredRoot;
function requireRoot() {
    if (hasRequiredRoot)
        return root;
    hasRequiredRoot = 1;
    let Container2 = requireContainer$1();
    let LazyResult, Processor;
    class Root2 extends Container2 {
        constructor(defaults) {
            super(defaults);
            this.type = "root";
            if (!this.nodes)
                this.nodes = [];
        }
        normalize(child, sample, type) {
            let nodes = super.normalize(child);
            if (sample) {
                if (type === "prepend") {
                    if (this.nodes.length > 1) {
                        sample.raws.before = this.nodes[1].raws.before;
                    }
                    else {
                        delete sample.raws.before;
                    }
                }
                else if (this.first !== sample) {
                    for (let node2 of nodes) {
                        node2.raws.before = sample.raws.before;
                    }
                }
            }
            return nodes;
        }
        removeChild(child, ignore) {
            let index = this.index(child);
            if (!ignore && index === 0 && this.nodes.length > 1) {
                this.nodes[1].raws.before = this.nodes[index].raws.before;
            }
            return super.removeChild(child);
        }
        toResult(opts = {}) {
            let lazy = new LazyResult(new Processor(), this, opts);
            return lazy.stringify();
        }
    }
    Root2.registerLazyResult = (dependant) => {
        LazyResult = dependant;
    };
    Root2.registerProcessor = (dependant) => {
        Processor = dependant;
    };
    root = Root2;
    Root2.default = Root2;
    Container2.registerRoot(Root2);
    return root;
}
var list_1;
var hasRequiredList;
function requireList() {
    if (hasRequiredList)
        return list_1;
    hasRequiredList = 1;
    let list = {
        comma(string) {
            return list.split(string, [","], true);
        },
        space(string) {
            let spaces = [" ", "\n", "	"];
            return list.split(string, spaces);
        },
        split(string, separators, last) {
            let array = [];
            let current = "";
            let split = false;
            let func = 0;
            let inQuote = false;
            let prevQuote = "";
            let escape = false;
            for (let letter of string) {
                if (escape) {
                    escape = false;
                }
                else if (letter === "\\") {
                    escape = true;
                }
                else if (inQuote) {
                    if (letter === prevQuote) {
                        inQuote = false;
                    }
                }
                else if (letter === '"' || letter === "'") {
                    inQuote = true;
                    prevQuote = letter;
                }
                else if (letter === "(") {
                    func += 1;
                }
                else if (letter === ")") {
                    if (func > 0)
                        func -= 1;
                }
                else if (func === 0) {
                    if (separators.includes(letter))
                        split = true;
                }
                if (split) {
                    if (current !== "")
                        array.push(current.trim());
                    current = "";
                    split = false;
                }
                else {
                    current += letter;
                }
            }
            if (last || current !== "")
                array.push(current.trim());
            return array;
        }
    };
    list_1 = list;
    list.default = list;
    return list_1;
}
var rule;
var hasRequiredRule;
function requireRule() {
    if (hasRequiredRule)
        return rule;
    hasRequiredRule = 1;
    let Container2 = requireContainer$1();
    let list = requireList();
    class Rule extends Container2 {
        get selectors() {
            return list.comma(this.selector);
        }
        set selectors(values) {
            let match = this.selector ? this.selector.match(/,\s*/) : null;
            let sep2 = match ? match[0] : "," + this.raw("between", "beforeOpen");
            this.selector = values.join(sep2);
        }
        constructor(defaults) {
            super(defaults);
            this.type = "rule";
            if (!this.nodes)
                this.nodes = [];
        }
    }
    rule = Rule;
    Rule.default = Rule;
    Container2.registerRule(Rule);
    return rule;
}
var fromJSON_1;
var hasRequiredFromJSON;
function requireFromJSON() {
    if (hasRequiredFromJSON)
        return fromJSON_1;
    hasRequiredFromJSON = 1;
    let AtRule = requireAtRule();
    let Comment2 = requireComment();
    let Declaration = requireDeclaration();
    let Input = requireInput();
    let PreviousMap = requirePreviousMap();
    let Root2 = requireRoot();
    let Rule = requireRule();
    function fromJSON(json, inputs) {
        if (Array.isArray(json))
            return json.map((n) => fromJSON(n));
        let _a2 = json, { inputs: ownInputs } = _a2, defaults = __objRest(_a2, ["inputs"]);
        if (ownInputs) {
            inputs = [];
            for (let input2 of ownInputs) {
                let inputHydrated = __spreadProps(__spreadValues({}, input2), { __proto__: Input.prototype });
                if (inputHydrated.map) {
                    inputHydrated.map = __spreadProps(__spreadValues({}, inputHydrated.map), {
                        __proto__: PreviousMap.prototype
                    });
                }
                inputs.push(inputHydrated);
            }
        }
        if (defaults.nodes) {
            defaults.nodes = json.nodes.map((n) => fromJSON(n, inputs));
        }
        if (defaults.source) {
            let _b = defaults.source, { inputId } = _b, source = __objRest(_b, ["inputId"]);
            defaults.source = source;
            if (inputId != null) {
                defaults.source.input = inputs[inputId];
            }
        }
        if (defaults.type === "root") {
            return new Root2(defaults);
        }
        else if (defaults.type === "decl") {
            return new Declaration(defaults);
        }
        else if (defaults.type === "rule") {
            return new Rule(defaults);
        }
        else if (defaults.type === "comment") {
            return new Comment2(defaults);
        }
        else if (defaults.type === "atrule") {
            return new AtRule(defaults);
        }
        else {
            throw new Error("Unknown node type: " + json.type);
        }
    }
    fromJSON_1 = fromJSON;
    fromJSON.default = fromJSON;
    return fromJSON_1;
}
var mapGenerator;
var hasRequiredMapGenerator;
function requireMapGenerator() {
    if (hasRequiredMapGenerator)
        return mapGenerator;
    hasRequiredMapGenerator = 1;
    let { dirname: dirname2, relative: relative2, resolve: resolve2, sep: sep2 } = require$$2;
    let { SourceMapConsumer, SourceMapGenerator } = require$$2;
    let { pathToFileURL } = require$$2;
    let Input = requireInput();
    let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
    let pathAvailable = Boolean(dirname2 && resolve2 && relative2 && sep2);
    class MapGenerator {
        constructor(stringify2, root2, opts, cssString) {
            this.stringify = stringify2;
            this.mapOpts = opts.map || {};
            this.root = root2;
            this.opts = opts;
            this.css = cssString;
            this.originalCSS = cssString;
            this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
            this.memoizedFileURLs = /* @__PURE__ */ new Map();
            this.memoizedPaths = /* @__PURE__ */ new Map();
            this.memoizedURLs = /* @__PURE__ */ new Map();
        }
        addAnnotation() {
            let content;
            if (this.isInline()) {
                content = "data:application/json;base64," + this.toBase64(this.map.toString());
            }
            else if (typeof this.mapOpts.annotation === "string") {
                content = this.mapOpts.annotation;
            }
            else if (typeof this.mapOpts.annotation === "function") {
                content = this.mapOpts.annotation(this.opts.to, this.root);
            }
            else {
                content = this.outputFile() + ".map";
            }
            let eol = "\n";
            if (this.css.includes("\r\n"))
                eol = "\r\n";
            this.css += eol + "/*# sourceMappingURL=" + content + " */";
        }
        applyPrevMaps() {
            for (let prev of this.previous()) {
                let from = this.toUrl(this.path(prev.file));
                let root2 = prev.root || dirname2(prev.file);
                let map;
                if (this.mapOpts.sourcesContent === false) {
                    map = new SourceMapConsumer(prev.text);
                    if (map.sourcesContent) {
                        map.sourcesContent = null;
                    }
                }
                else {
                    map = prev.consumer();
                }
                this.map.applySourceMap(map, from, this.toUrl(this.path(root2)));
            }
        }
        clearAnnotation() {
            if (this.mapOpts.annotation === false)
                return;
            if (this.root) {
                let node2;
                for (let i = this.root.nodes.length - 1; i >= 0; i--) {
                    node2 = this.root.nodes[i];
                    if (node2.type !== "comment")
                        continue;
                    if (node2.text.startsWith("# sourceMappingURL=")) {
                        this.root.removeChild(i);
                    }
                }
            }
            else if (this.css) {
                this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, "");
            }
        }
        generate() {
            this.clearAnnotation();
            if (pathAvailable && sourceMapAvailable && this.isMap()) {
                return this.generateMap();
            }
            else {
                let result2 = "";
                this.stringify(this.root, (i) => {
                    result2 += i;
                });
                return [result2];
            }
        }
        generateMap() {
            if (this.root) {
                this.generateString();
            }
            else if (this.previous().length === 1) {
                let prev = this.previous()[0].consumer();
                prev.file = this.outputFile();
                this.map = SourceMapGenerator.fromSourceMap(prev, {
                    ignoreInvalidMapping: true
                });
            }
            else {
                this.map = new SourceMapGenerator({
                    file: this.outputFile(),
                    ignoreInvalidMapping: true
                });
                this.map.addMapping({
                    generated: { column: 0, line: 1 },
                    original: { column: 0, line: 1 },
                    source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
                });
            }
            if (this.isSourcesContent())
                this.setSourcesContent();
            if (this.root && this.previous().length > 0)
                this.applyPrevMaps();
            if (this.isAnnotation())
                this.addAnnotation();
            if (this.isInline()) {
                return [this.css];
            }
            else {
                return [this.css, this.map];
            }
        }
        generateString() {
            this.css = "";
            this.map = new SourceMapGenerator({
                file: this.outputFile(),
                ignoreInvalidMapping: true
            });
            let line = 1;
            let column = 1;
            let noSource = "<no source>";
            let mapping = {
                generated: { column: 0, line: 0 },
                original: { column: 0, line: 0 },
                source: ""
            };
            let last, lines;
            this.stringify(this.root, (str, node2, type) => {
                this.css += str;
                if (node2 && type !== "end") {
                    mapping.generated.line = line;
                    mapping.generated.column = column - 1;
                    if (node2.source && node2.source.start) {
                        mapping.source = this.sourcePath(node2);
                        mapping.original.line = node2.source.start.line;
                        mapping.original.column = node2.source.start.column - 1;
                        this.map.addMapping(mapping);
                    }
                    else {
                        mapping.source = noSource;
                        mapping.original.line = 1;
                        mapping.original.column = 0;
                        this.map.addMapping(mapping);
                    }
                }
                lines = str.match(/\n/g);
                if (lines) {
                    line += lines.length;
                    last = str.lastIndexOf("\n");
                    column = str.length - last;
                }
                else {
                    column += str.length;
                }
                if (node2 && type !== "start") {
                    let p = node2.parent || { raws: {} };
                    let childless = node2.type === "decl" || node2.type === "atrule" && !node2.nodes;
                    if (!childless || node2 !== p.last || p.raws.semicolon) {
                        if (node2.source && node2.source.end) {
                            mapping.source = this.sourcePath(node2);
                            mapping.original.line = node2.source.end.line;
                            mapping.original.column = node2.source.end.column - 1;
                            mapping.generated.line = line;
                            mapping.generated.column = column - 2;
                            this.map.addMapping(mapping);
                        }
                        else {
                            mapping.source = noSource;
                            mapping.original.line = 1;
                            mapping.original.column = 0;
                            mapping.generated.line = line;
                            mapping.generated.column = column - 1;
                            this.map.addMapping(mapping);
                        }
                    }
                }
            });
        }
        isAnnotation() {
            if (this.isInline()) {
                return true;
            }
            if (typeof this.mapOpts.annotation !== "undefined") {
                return this.mapOpts.annotation;
            }
            if (this.previous().length) {
                return this.previous().some((i) => i.annotation);
            }
            return true;
        }
        isInline() {
            if (typeof this.mapOpts.inline !== "undefined") {
                return this.mapOpts.inline;
            }
            let annotation = this.mapOpts.annotation;
            if (typeof annotation !== "undefined" && annotation !== true) {
                return false;
            }
            if (this.previous().length) {
                return this.previous().some((i) => i.inline);
            }
            return true;
        }
        isMap() {
            if (typeof this.opts.map !== "undefined") {
                return !!this.opts.map;
            }
            return this.previous().length > 0;
        }
        isSourcesContent() {
            if (typeof this.mapOpts.sourcesContent !== "undefined") {
                return this.mapOpts.sourcesContent;
            }
            if (this.previous().length) {
                return this.previous().some((i) => i.withContent());
            }
            return true;
        }
        outputFile() {
            if (this.opts.to) {
                return this.path(this.opts.to);
            }
            else if (this.opts.from) {
                return this.path(this.opts.from);
            }
            else {
                return "to.css";
            }
        }
        path(file) {
            if (this.mapOpts.absolute)
                return file;
            if (file.charCodeAt(0) === 60)
                return file;
            if (/^\w+:\/\//.test(file))
                return file;
            let cached = this.memoizedPaths.get(file);
            if (cached)
                return cached;
            let from = this.opts.to ? dirname2(this.opts.to) : ".";
            if (typeof this.mapOpts.annotation === "string") {
                from = dirname2(resolve2(from, this.mapOpts.annotation));
            }
            let path2 = relative2(from, file);
            this.memoizedPaths.set(file, path2);
            return path2;
        }
        previous() {
            if (!this.previousMaps) {
                this.previousMaps = [];
                if (this.root) {
                    this.root.walk((node2) => {
                        if (node2.source && node2.source.input.map) {
                            let map = node2.source.input.map;
                            if (!this.previousMaps.includes(map)) {
                                this.previousMaps.push(map);
                            }
                        }
                    });
                }
                else {
                    let input2 = new Input(this.originalCSS, this.opts);
                    if (input2.map)
                        this.previousMaps.push(input2.map);
                }
            }
            return this.previousMaps;
        }
        setSourcesContent() {
            let already = {};
            if (this.root) {
                this.root.walk((node2) => {
                    if (node2.source) {
                        let from = node2.source.input.from;
                        if (from && !already[from]) {
                            already[from] = true;
                            let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
                            this.map.setSourceContent(fromUrl, node2.source.input.css);
                        }
                    }
                });
            }
            else if (this.css) {
                let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
                this.map.setSourceContent(from, this.css);
            }
        }
        sourcePath(node2) {
            if (this.mapOpts.from) {
                return this.toUrl(this.mapOpts.from);
            }
            else if (this.usesFileUrls) {
                return this.toFileUrl(node2.source.input.from);
            }
            else {
                return this.toUrl(this.path(node2.source.input.from));
            }
        }
        toBase64(str) {
            if (Buffer) {
                return Buffer.from(str).toString("base64");
            }
            else {
                return window.btoa(unescape(encodeURIComponent(str)));
            }
        }
        toFileUrl(path2) {
            let cached = this.memoizedFileURLs.get(path2);
            if (cached)
                return cached;
            if (pathToFileURL) {
                let fileURL = pathToFileURL(path2).toString();
                this.memoizedFileURLs.set(path2, fileURL);
                return fileURL;
            }
            else {
                throw new Error("`map.absolute` option is not available in this PostCSS build");
            }
        }
        toUrl(path2) {
            let cached = this.memoizedURLs.get(path2);
            if (cached)
                return cached;
            if (sep2 === "\\") {
                path2 = path2.replace(/\\/g, "/");
            }
            let url = encodeURI(path2).replace(/[#?]/g, encodeURIComponent);
            this.memoizedURLs.set(path2, url);
            return url;
        }
    }
    mapGenerator = MapGenerator;
    return mapGenerator;
}
var tokenize;
var hasRequiredTokenize;
function requireTokenize() {
    if (hasRequiredTokenize)
        return tokenize;
    hasRequiredTokenize = 1;
    const SINGLE_QUOTE = "'".charCodeAt(0);
    const DOUBLE_QUOTE = '"'.charCodeAt(0);
    const BACKSLASH = "\\".charCodeAt(0);
    const SLASH = "/".charCodeAt(0);
    const NEWLINE = "\n".charCodeAt(0);
    const SPACE = " ".charCodeAt(0);
    const FEED = "\f".charCodeAt(0);
    const TAB = "	".charCodeAt(0);
    const CR = "\r".charCodeAt(0);
    const OPEN_SQUARE = "[".charCodeAt(0);
    const CLOSE_SQUARE = "]".charCodeAt(0);
    const OPEN_PARENTHESES = "(".charCodeAt(0);
    const CLOSE_PARENTHESES = ")".charCodeAt(0);
    const OPEN_CURLY = "{".charCodeAt(0);
    const CLOSE_CURLY = "}".charCodeAt(0);
    const SEMICOLON = ";".charCodeAt(0);
    const ASTERISK = "*".charCodeAt(0);
    const COLON = ":".charCodeAt(0);
    const AT = "@".charCodeAt(0);
    const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
    const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
    const RE_BAD_BRACKET = /.[\r\n"'(/\\]/;
    const RE_HEX_ESCAPE = /[\da-f]/i;
    tokenize = function tokenizer(input2, options = {}) {
        let css = input2.css.valueOf();
        let ignore = options.ignoreErrors;
        let code, content, escape, next, quote;
        let currentToken, escaped, escapePos, n, prev;
        let length = css.length;
        let pos = 0;
        let buffer = [];
        let returned = [];
        function position() {
            return pos;
        }
        function unclosed(what) {
            throw input2.error("Unclosed " + what, pos);
        }
        function endOfFile() {
            return returned.length === 0 && pos >= length;
        }
        function nextToken(opts) {
            if (returned.length)
                return returned.pop();
            if (pos >= length)
                return;
            let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
            code = css.charCodeAt(pos);
            switch (code) {
                case NEWLINE:
                case SPACE:
                case TAB:
                case CR:
                case FEED: {
                    next = pos;
                    do {
                        next += 1;
                        code = css.charCodeAt(next);
                    } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
                    currentToken = ["space", css.slice(pos, next)];
                    pos = next - 1;
                    break;
                }
                case OPEN_SQUARE:
                case CLOSE_SQUARE:
                case OPEN_CURLY:
                case CLOSE_CURLY:
                case COLON:
                case SEMICOLON:
                case CLOSE_PARENTHESES: {
                    let controlChar = String.fromCharCode(code);
                    currentToken = [controlChar, controlChar, pos];
                    break;
                }
                case OPEN_PARENTHESES: {
                    prev = buffer.length ? buffer.pop()[1] : "";
                    n = css.charCodeAt(pos + 1);
                    if (prev === "url" && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
                        next = pos;
                        do {
                            escaped = false;
                            next = css.indexOf(")", next + 1);
                            if (next === -1) {
                                if (ignore || ignoreUnclosed) {
                                    next = pos;
                                    break;
                                }
                                else {
                                    unclosed("bracket");
                                }
                            }
                            escapePos = next;
                            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
                                escapePos -= 1;
                                escaped = !escaped;
                            }
                        } while (escaped);
                        currentToken = ["brackets", css.slice(pos, next + 1), pos, next];
                        pos = next;
                    }
                    else {
                        next = css.indexOf(")", pos + 1);
                        content = css.slice(pos, next + 1);
                        if (next === -1 || RE_BAD_BRACKET.test(content)) {
                            currentToken = ["(", "(", pos];
                        }
                        else {
                            currentToken = ["brackets", content, pos, next];
                            pos = next;
                        }
                    }
                    break;
                }
                case SINGLE_QUOTE:
                case DOUBLE_QUOTE: {
                    quote = code === SINGLE_QUOTE ? "'" : '"';
                    next = pos;
                    do {
                        escaped = false;
                        next = css.indexOf(quote, next + 1);
                        if (next === -1) {
                            if (ignore || ignoreUnclosed) {
                                next = pos + 1;
                                break;
                            }
                            else {
                                unclosed("string");
                            }
                        }
                        escapePos = next;
                        while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
                            escapePos -= 1;
                            escaped = !escaped;
                        }
                    } while (escaped);
                    currentToken = ["string", css.slice(pos, next + 1), pos, next];
                    pos = next;
                    break;
                }
                case AT: {
                    RE_AT_END.lastIndex = pos + 1;
                    RE_AT_END.test(css);
                    if (RE_AT_END.lastIndex === 0) {
                        next = css.length - 1;
                    }
                    else {
                        next = RE_AT_END.lastIndex - 2;
                    }
                    currentToken = ["at-word", css.slice(pos, next + 1), pos, next];
                    pos = next;
                    break;
                }
                case BACKSLASH: {
                    next = pos;
                    escape = true;
                    while (css.charCodeAt(next + 1) === BACKSLASH) {
                        next += 1;
                        escape = !escape;
                    }
                    code = css.charCodeAt(next + 1);
                    if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
                        next += 1;
                        if (RE_HEX_ESCAPE.test(css.charAt(next))) {
                            while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
                                next += 1;
                            }
                            if (css.charCodeAt(next + 1) === SPACE) {
                                next += 1;
                            }
                        }
                    }
                    currentToken = ["word", css.slice(pos, next + 1), pos, next];
                    pos = next;
                    break;
                }
                default: {
                    if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
                        next = css.indexOf("*/", pos + 2) + 1;
                        if (next === 0) {
                            if (ignore || ignoreUnclosed) {
                                next = css.length;
                            }
                            else {
                                unclosed("comment");
                            }
                        }
                        currentToken = ["comment", css.slice(pos, next + 1), pos, next];
                        pos = next;
                    }
                    else {
                        RE_WORD_END.lastIndex = pos + 1;
                        RE_WORD_END.test(css);
                        if (RE_WORD_END.lastIndex === 0) {
                            next = css.length - 1;
                        }
                        else {
                            next = RE_WORD_END.lastIndex - 2;
                        }
                        currentToken = ["word", css.slice(pos, next + 1), pos, next];
                        buffer.push(currentToken);
                        pos = next;
                    }
                    break;
                }
            }
            pos++;
            return currentToken;
        }
        function back(token) {
            returned.push(token);
        }
        return {
            back,
            endOfFile,
            nextToken,
            position
        };
    };
    return tokenize;
}
var parser;
var hasRequiredParser;
function requireParser() {
    if (hasRequiredParser)
        return parser;
    hasRequiredParser = 1;
    let AtRule = requireAtRule();
    let Comment2 = requireComment();
    let Declaration = requireDeclaration();
    let Root2 = requireRoot();
    let Rule = requireRule();
    let tokenizer = requireTokenize();
    const SAFE_COMMENT_NEIGHBOR = {
        empty: true,
        space: true
    };
    function findLastWithPosition(tokens) {
        for (let i = tokens.length - 1; i >= 0; i--) {
            let token = tokens[i];
            let pos = token[3] || token[2];
            if (pos)
                return pos;
        }
    }
    class Parser2 {
        constructor(input2) {
            this.input = input2;
            this.root = new Root2();
            this.current = this.root;
            this.spaces = "";
            this.semicolon = false;
            this.createTokenizer();
            this.root.source = { input: input2, start: { column: 1, line: 1, offset: 0 } };
        }
        atrule(token) {
            let node2 = new AtRule();
            node2.name = token[1].slice(1);
            if (node2.name === "") {
                this.unnamedAtrule(node2, token);
            }
            this.init(node2, token[2]);
            let type;
            let prev;
            let shift;
            let last = false;
            let open2 = false;
            let params = [];
            let brackets = [];
            while (!this.tokenizer.endOfFile()) {
                token = this.tokenizer.nextToken();
                type = token[0];
                if (type === "(" || type === "[") {
                    brackets.push(type === "(" ? ")" : "]");
                }
                else if (type === "{" && brackets.length > 0) {
                    brackets.push("}");
                }
                else if (type === brackets[brackets.length - 1]) {
                    brackets.pop();
                }
                if (brackets.length === 0) {
                    if (type === ";") {
                        node2.source.end = this.getPosition(token[2]);
                        node2.source.end.offset++;
                        this.semicolon = true;
                        break;
                    }
                    else if (type === "{") {
                        open2 = true;
                        break;
                    }
                    else if (type === "}") {
                        if (params.length > 0) {
                            shift = params.length - 1;
                            prev = params[shift];
                            while (prev && prev[0] === "space") {
                                prev = params[--shift];
                            }
                            if (prev) {
                                node2.source.end = this.getPosition(prev[3] || prev[2]);
                                node2.source.end.offset++;
                            }
                        }
                        this.end(token);
                        break;
                    }
                    else {
                        params.push(token);
                    }
                }
                else {
                    params.push(token);
                }
                if (this.tokenizer.endOfFile()) {
                    last = true;
                    break;
                }
            }
            node2.raws.between = this.spacesAndCommentsFromEnd(params);
            if (params.length) {
                node2.raws.afterName = this.spacesAndCommentsFromStart(params);
                this.raw(node2, "params", params);
                if (last) {
                    token = params[params.length - 1];
                    node2.source.end = this.getPosition(token[3] || token[2]);
                    node2.source.end.offset++;
                    this.spaces = node2.raws.between;
                    node2.raws.between = "";
                }
            }
            else {
                node2.raws.afterName = "";
                node2.params = "";
            }
            if (open2) {
                node2.nodes = [];
                this.current = node2;
            }
        }
        checkMissedSemicolon(tokens) {
            let colon = this.colon(tokens);
            if (colon === false)
                return;
            let founded = 0;
            let token;
            for (let j = colon - 1; j >= 0; j--) {
                token = tokens[j];
                if (token[0] !== "space") {
                    founded += 1;
                    if (founded === 2)
                        break;
                }
            }
            throw this.input.error("Missed semicolon", token[0] === "word" ? token[3] + 1 : token[2]);
        }
        colon(tokens) {
            let brackets = 0;
            let prev, token, type;
            for (let [i, element] of tokens.entries()) {
                token = element;
                type = token[0];
                if (type === "(") {
                    brackets += 1;
                }
                if (type === ")") {
                    brackets -= 1;
                }
                if (brackets === 0 && type === ":") {
                    if (!prev) {
                        this.doubleColon(token);
                    }
                    else if (prev[0] === "word" && prev[1] === "progid") {
                        continue;
                    }
                    else {
                        return i;
                    }
                }
                prev = token;
            }
            return false;
        }
        comment(token) {
            let node2 = new Comment2();
            this.init(node2, token[2]);
            node2.source.end = this.getPosition(token[3] || token[2]);
            node2.source.end.offset++;
            let text = token[1].slice(2, -2);
            if (/^\s*$/.test(text)) {
                node2.text = "";
                node2.raws.left = text;
                node2.raws.right = "";
            }
            else {
                let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
                node2.text = match[2];
                node2.raws.left = match[1];
                node2.raws.right = match[3];
            }
        }
        createTokenizer() {
            this.tokenizer = tokenizer(this.input);
        }
        decl(tokens, customProperty) {
            let node2 = new Declaration();
            this.init(node2, tokens[0][2]);
            let last = tokens[tokens.length - 1];
            if (last[0] === ";") {
                this.semicolon = true;
                tokens.pop();
            }
            node2.source.end = this.getPosition(last[3] || last[2] || findLastWithPosition(tokens));
            node2.source.end.offset++;
            while (tokens[0][0] !== "word") {
                if (tokens.length === 1)
                    this.unknownWord(tokens);
                node2.raws.before += tokens.shift()[1];
            }
            node2.source.start = this.getPosition(tokens[0][2]);
            node2.prop = "";
            while (tokens.length) {
                let type = tokens[0][0];
                if (type === ":" || type === "space" || type === "comment") {
                    break;
                }
                node2.prop += tokens.shift()[1];
            }
            node2.raws.between = "";
            let token;
            while (tokens.length) {
                token = tokens.shift();
                if (token[0] === ":") {
                    node2.raws.between += token[1];
                    break;
                }
                else {
                    if (token[0] === "word" && /\w/.test(token[1])) {
                        this.unknownWord([token]);
                    }
                    node2.raws.between += token[1];
                }
            }
            if (node2.prop[0] === "_" || node2.prop[0] === "*") {
                node2.raws.before += node2.prop[0];
                node2.prop = node2.prop.slice(1);
            }
            let firstSpaces = [];
            let next;
            while (tokens.length) {
                next = tokens[0][0];
                if (next !== "space" && next !== "comment")
                    break;
                firstSpaces.push(tokens.shift());
            }
            this.precheckMissedSemicolon(tokens);
            for (let i = tokens.length - 1; i >= 0; i--) {
                token = tokens[i];
                if (token[1].toLowerCase() === "!important") {
                    node2.important = true;
                    let string = this.stringFrom(tokens, i);
                    string = this.spacesFromEnd(tokens) + string;
                    if (string !== " !important")
                        node2.raws.important = string;
                    break;
                }
                else if (token[1].toLowerCase() === "important") {
                    let cache = tokens.slice(0);
                    let str = "";
                    for (let j = i; j > 0; j--) {
                        let type = cache[j][0];
                        if (str.trim().startsWith("!") && type !== "space") {
                            break;
                        }
                        str = cache.pop()[1] + str;
                    }
                    if (str.trim().startsWith("!")) {
                        node2.important = true;
                        node2.raws.important = str;
                        tokens = cache;
                    }
                }
                if (token[0] !== "space" && token[0] !== "comment") {
                    break;
                }
            }
            let hasWord = tokens.some((i) => i[0] !== "space" && i[0] !== "comment");
            if (hasWord) {
                node2.raws.between += firstSpaces.map((i) => i[1]).join("");
                firstSpaces = [];
            }
            this.raw(node2, "value", firstSpaces.concat(tokens), customProperty);
            if (node2.value.includes(":") && !customProperty) {
                this.checkMissedSemicolon(tokens);
            }
        }
        doubleColon(token) {
            throw this.input.error("Double colon", { offset: token[2] }, { offset: token[2] + token[1].length });
        }
        emptyRule(token) {
            let node2 = new Rule();
            this.init(node2, token[2]);
            node2.selector = "";
            node2.raws.between = "";
            this.current = node2;
        }
        end(token) {
            if (this.current.nodes && this.current.nodes.length) {
                this.current.raws.semicolon = this.semicolon;
            }
            this.semicolon = false;
            this.current.raws.after = (this.current.raws.after || "") + this.spaces;
            this.spaces = "";
            if (this.current.parent) {
                this.current.source.end = this.getPosition(token[2]);
                this.current.source.end.offset++;
                this.current = this.current.parent;
            }
            else {
                this.unexpectedClose(token);
            }
        }
        endFile() {
            if (this.current.parent)
                this.unclosedBlock();
            if (this.current.nodes && this.current.nodes.length) {
                this.current.raws.semicolon = this.semicolon;
            }
            this.current.raws.after = (this.current.raws.after || "") + this.spaces;
            this.root.source.end = this.getPosition(this.tokenizer.position());
        }
        freeSemicolon(token) {
            this.spaces += token[1];
            if (this.current.nodes) {
                let prev = this.current.nodes[this.current.nodes.length - 1];
                if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
                    prev.raws.ownSemicolon = this.spaces;
                    this.spaces = "";
                    prev.source.end = this.getPosition(token[2]);
                    prev.source.end.offset += prev.raws.ownSemicolon.length;
                }
            }
        }
        // Helpers
        getPosition(offset) {
            let pos = this.input.fromOffset(offset);
            return {
                column: pos.col,
                line: pos.line,
                offset
            };
        }
        init(node2, offset) {
            this.current.push(node2);
            node2.source = {
                input: this.input,
                start: this.getPosition(offset)
            };
            node2.raws.before = this.spaces;
            this.spaces = "";
            if (node2.type !== "comment")
                this.semicolon = false;
        }
        other(start) {
            let end = false;
            let type = null;
            let colon = false;
            let bracket = null;
            let brackets = [];
            let customProperty = start[1].startsWith("--");
            let tokens = [];
            let token = start;
            while (token) {
                type = token[0];
                tokens.push(token);
                if (type === "(" || type === "[") {
                    if (!bracket)
                        bracket = token;
                    brackets.push(type === "(" ? ")" : "]");
                }
                else if (customProperty && colon && type === "{") {
                    if (!bracket)
                        bracket = token;
                    brackets.push("}");
                }
                else if (brackets.length === 0) {
                    if (type === ";") {
                        if (colon) {
                            this.decl(tokens, customProperty);
                            return;
                        }
                        else {
                            break;
                        }
                    }
                    else if (type === "{") {
                        this.rule(tokens);
                        return;
                    }
                    else if (type === "}") {
                        this.tokenizer.back(tokens.pop());
                        end = true;
                        break;
                    }
                    else if (type === ":") {
                        colon = true;
                    }
                }
                else if (type === brackets[brackets.length - 1]) {
                    brackets.pop();
                    if (brackets.length === 0)
                        bracket = null;
                }
                token = this.tokenizer.nextToken();
            }
            if (this.tokenizer.endOfFile())
                end = true;
            if (brackets.length > 0)
                this.unclosedBracket(bracket);
            if (end && colon) {
                if (!customProperty) {
                    while (tokens.length) {
                        token = tokens[tokens.length - 1][0];
                        if (token !== "space" && token !== "comment")
                            break;
                        this.tokenizer.back(tokens.pop());
                    }
                }
                this.decl(tokens, customProperty);
            }
            else {
                this.unknownWord(tokens);
            }
        }
        parse() {
            let token;
            while (!this.tokenizer.endOfFile()) {
                token = this.tokenizer.nextToken();
                switch (token[0]) {
                    case "space":
                        this.spaces += token[1];
                        break;
                    case ";":
                        this.freeSemicolon(token);
                        break;
                    case "}":
                        this.end(token);
                        break;
                    case "comment":
                        this.comment(token);
                        break;
                    case "at-word":
                        this.atrule(token);
                        break;
                    case "{":
                        this.emptyRule(token);
                        break;
                    default:
                        this.other(token);
                        break;
                }
            }
            this.endFile();
        }
        precheckMissedSemicolon() {
        }
        raw(node2, prop, tokens, customProperty) {
            let token, type;
            let length = tokens.length;
            let value = "";
            let clean = true;
            let next, prev;
            for (let i = 0; i < length; i += 1) {
                token = tokens[i];
                type = token[0];
                if (type === "space" && i === length - 1 && !customProperty) {
                    clean = false;
                }
                else if (type === "comment") {
                    prev = tokens[i - 1] ? tokens[i - 1][0] : "empty";
                    next = tokens[i + 1] ? tokens[i + 1][0] : "empty";
                    if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
                        if (value.slice(-1) === ",") {
                            clean = false;
                        }
                        else {
                            value += token[1];
                        }
                    }
                    else {
                        clean = false;
                    }
                }
                else {
                    value += token[1];
                }
            }
            if (!clean) {
                let raw = tokens.reduce((all, i) => all + i[1], "");
                node2.raws[prop] = { raw, value };
            }
            node2[prop] = value;
        }
        rule(tokens) {
            tokens.pop();
            let node2 = new Rule();
            this.init(node2, tokens[0][2]);
            node2.raws.between = this.spacesAndCommentsFromEnd(tokens);
            this.raw(node2, "selector", tokens);
            this.current = node2;
        }
        spacesAndCommentsFromEnd(tokens) {
            let lastTokenType;
            let spaces = "";
            while (tokens.length) {
                lastTokenType = tokens[tokens.length - 1][0];
                if (lastTokenType !== "space" && lastTokenType !== "comment")
                    break;
                spaces = tokens.pop()[1] + spaces;
            }
            return spaces;
        }
        // Errors
        spacesAndCommentsFromStart(tokens) {
            let next;
            let spaces = "";
            while (tokens.length) {
                next = tokens[0][0];
                if (next !== "space" && next !== "comment")
                    break;
                spaces += tokens.shift()[1];
            }
            return spaces;
        }
        spacesFromEnd(tokens) {
            let lastTokenType;
            let spaces = "";
            while (tokens.length) {
                lastTokenType = tokens[tokens.length - 1][0];
                if (lastTokenType !== "space")
                    break;
                spaces = tokens.pop()[1] + spaces;
            }
            return spaces;
        }
        stringFrom(tokens, from) {
            let result2 = "";
            for (let i = from; i < tokens.length; i++) {
                result2 += tokens[i][1];
            }
            tokens.splice(from, tokens.length - from);
            return result2;
        }
        unclosedBlock() {
            let pos = this.current.source.start;
            throw this.input.error("Unclosed block", pos.line, pos.column);
        }
        unclosedBracket(bracket) {
            throw this.input.error("Unclosed bracket", { offset: bracket[2] }, { offset: bracket[2] + 1 });
        }
        unexpectedClose(token) {
            throw this.input.error("Unexpected }", { offset: token[2] }, { offset: token[2] + 1 });
        }
        unknownWord(tokens) {
            throw this.input.error("Unknown word " + tokens[0][1], { offset: tokens[0][2] }, { offset: tokens[0][2] + tokens[0][1].length });
        }
        unnamedAtrule(node2, token) {
            throw this.input.error("At-rule without name", { offset: token[2] }, { offset: token[2] + token[1].length });
        }
    }
    parser = Parser2;
    return parser;
}
var parse_1;
var hasRequiredParse;
function requireParse() {
    if (hasRequiredParse)
        return parse_1;
    hasRequiredParse = 1;
    let Container2 = requireContainer$1();
    let Input = requireInput();
    let Parser2 = requireParser();
    function parse2(css, opts) {
        let input2 = new Input(css, opts);
        let parser2 = new Parser2(input2);
        try {
            parser2.parse();
        }
        catch (e) {
            if (process.env.NODE_ENV !== "production") {
                if (e.name === "CssSyntaxError" && opts && opts.from) {
                    if (/\.scss$/i.test(opts.from)) {
                        e.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
                    }
                    else if (/\.sass/i.test(opts.from)) {
                        e.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
                    }
                    else if (/\.less$/i.test(opts.from)) {
                        e.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
                    }
                }
            }
            throw e;
        }
        return parser2.root;
    }
    parse_1 = parse2;
    parse2.default = parse2;
    Container2.registerParse(parse2);
    return parse_1;
}
var warning;
var hasRequiredWarning;
function requireWarning() {
    if (hasRequiredWarning)
        return warning;
    hasRequiredWarning = 1;
    class Warning {
        constructor(text, opts = {}) {
            this.type = "warning";
            this.text = text;
            if (opts.node && opts.node.source) {
                let range = opts.node.rangeBy(opts);
                this.line = range.start.line;
                this.column = range.start.column;
                this.endLine = range.end.line;
                this.endColumn = range.end.column;
            }
            for (let opt in opts)
                this[opt] = opts[opt];
        }
        toString() {
            if (this.node) {
                return this.node.error(this.text, {
                    index: this.index,
                    plugin: this.plugin,
                    word: this.word
                }).message;
            }
            if (this.plugin) {
                return this.plugin + ": " + this.text;
            }
            return this.text;
        }
    }
    warning = Warning;
    Warning.default = Warning;
    return warning;
}
var result;
var hasRequiredResult;
function requireResult() {
    if (hasRequiredResult)
        return result;
    hasRequiredResult = 1;
    let Warning = requireWarning();
    class Result {
        get content() {
            return this.css;
        }
        constructor(processor2, root2, opts) {
            this.processor = processor2;
            this.messages = [];
            this.root = root2;
            this.opts = opts;
            this.css = "";
            this.map = void 0;
        }
        toString() {
            return this.css;
        }
        warn(text, opts = {}) {
            if (!opts.plugin) {
                if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
                    opts.plugin = this.lastPlugin.postcssPlugin;
                }
            }
            let warning2 = new Warning(text, opts);
            this.messages.push(warning2);
            return warning2;
        }
        warnings() {
            return this.messages.filter((i) => i.type === "warning");
        }
    }
    result = Result;
    Result.default = Result;
    return result;
}
var warnOnce;
var hasRequiredWarnOnce;
function requireWarnOnce() {
    if (hasRequiredWarnOnce)
        return warnOnce;
    hasRequiredWarnOnce = 1;
    let printed = {};
    warnOnce = function warnOnce2(message) {
        if (printed[message])
            return;
        printed[message] = true;
        if (typeof console !== "undefined" && console.warn) {
            console.warn(message);
        }
    };
    return warnOnce;
}
var lazyResult;
var hasRequiredLazyResult;
function requireLazyResult() {
    if (hasRequiredLazyResult)
        return lazyResult;
    hasRequiredLazyResult = 1;
    let Container2 = requireContainer$1();
    let Document2 = requireDocument();
    let MapGenerator = requireMapGenerator();
    let parse2 = requireParse();
    let Result = requireResult();
    let Root2 = requireRoot();
    let stringify2 = requireStringify();
    let { isClean, my } = requireSymbols();
    let warnOnce2 = requireWarnOnce();
    const TYPE_TO_CLASS_NAME = {
        atrule: "AtRule",
        comment: "Comment",
        decl: "Declaration",
        document: "Document",
        root: "Root",
        rule: "Rule"
    };
    const PLUGIN_PROPS = {
        AtRule: true,
        AtRuleExit: true,
        Comment: true,
        CommentExit: true,
        Declaration: true,
        DeclarationExit: true,
        Document: true,
        DocumentExit: true,
        Once: true,
        OnceExit: true,
        postcssPlugin: true,
        prepare: true,
        Root: true,
        RootExit: true,
        Rule: true,
        RuleExit: true
    };
    const NOT_VISITORS = {
        Once: true,
        postcssPlugin: true,
        prepare: true
    };
    const CHILDREN = 0;
    function isPromise(obj) {
        return typeof obj === "object" && typeof obj.then === "function";
    }
    function getEvents(node2) {
        let key = false;
        let type = TYPE_TO_CLASS_NAME[node2.type];
        if (node2.type === "decl") {
            key = node2.prop.toLowerCase();
        }
        else if (node2.type === "atrule") {
            key = node2.name.toLowerCase();
        }
        if (key && node2.append) {
            return [
                type,
                type + "-" + key,
                CHILDREN,
                type + "Exit",
                type + "Exit-" + key
            ];
        }
        else if (key) {
            return [type, type + "-" + key, type + "Exit", type + "Exit-" + key];
        }
        else if (node2.append) {
            return [type, CHILDREN, type + "Exit"];
        }
        else {
            return [type, type + "Exit"];
        }
    }
    function toStack(node2) {
        let events;
        if (node2.type === "document") {
            events = ["Document", CHILDREN, "DocumentExit"];
        }
        else if (node2.type === "root") {
            events = ["Root", CHILDREN, "RootExit"];
        }
        else {
            events = getEvents(node2);
        }
        return {
            eventIndex: 0,
            events,
            iterator: 0,
            node: node2,
            visitorIndex: 0,
            visitors: []
        };
    }
    function cleanMarks(node2) {
        node2[isClean] = false;
        if (node2.nodes)
            node2.nodes.forEach((i) => cleanMarks(i));
        return node2;
    }
    let postcss2 = {};
    class LazyResult {
        get content() {
            return this.stringify().content;
        }
        get css() {
            return this.stringify().css;
        }
        get map() {
            return this.stringify().map;
        }
        get messages() {
            return this.sync().messages;
        }
        get opts() {
            return this.result.opts;
        }
        get processor() {
            return this.result.processor;
        }
        get root() {
            return this.sync().root;
        }
        get [Symbol.toStringTag]() {
            return "LazyResult";
        }
        constructor(processor2, css, opts) {
            this.stringified = false;
            this.processed = false;
            let root2;
            if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) {
                root2 = cleanMarks(css);
            }
            else if (css instanceof LazyResult || css instanceof Result) {
                root2 = cleanMarks(css.root);
                if (css.map) {
                    if (typeof opts.map === "undefined")
                        opts.map = {};
                    if (!opts.map.inline)
                        opts.map.inline = false;
                    opts.map.prev = css.map;
                }
            }
            else {
                let parser2 = parse2;
                if (opts.syntax)
                    parser2 = opts.syntax.parse;
                if (opts.parser)
                    parser2 = opts.parser;
                if (parser2.parse)
                    parser2 = parser2.parse;
                try {
                    root2 = parser2(css, opts);
                }
                catch (error) {
                    this.processed = true;
                    this.error = error;
                }
                if (root2 && !root2[my]) {
                    Container2.rebuild(root2);
                }
            }
            this.result = new Result(processor2, root2, opts);
            this.helpers = __spreadProps(__spreadValues({}, postcss2), { postcss: postcss2, result: this.result });
            this.plugins = this.processor.plugins.map((plugin) => {
                if (typeof plugin === "object" && plugin.prepare) {
                    return __spreadValues(__spreadValues({}, plugin), plugin.prepare(this.result));
                }
                else {
                    return plugin;
                }
            });
        }
        async() {
            if (this.error)
                return Promise.reject(this.error);
            if (this.processed)
                return Promise.resolve(this.result);
            if (!this.processing) {
                this.processing = this.runAsync();
            }
            return this.processing;
        }
        catch(onRejected) {
            return this.async().catch(onRejected);
        }
        finally(onFinally) {
            return this.async().then(onFinally, onFinally);
        }
        getAsyncError() {
            throw new Error("Use process(css).then(cb) to work with async plugins");
        }
        handleError(error, node2) {
            let plugin = this.result.lastPlugin;
            try {
                if (node2)
                    node2.addToError(error);
                this.error = error;
                if (error.name === "CssSyntaxError" && !error.plugin) {
                    error.plugin = plugin.postcssPlugin;
                    error.setMessage();
                }
                else if (plugin.postcssVersion) {
                    if (process.env.NODE_ENV !== "production") {
                        let pluginName = plugin.postcssPlugin;
                        let pluginVer = plugin.postcssVersion;
                        let runtimeVer = this.result.processor.version;
                        let a = pluginVer.split(".");
                        let b = runtimeVer.split(".");
                        if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
                            console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below.");
                        }
                    }
                }
            }
            catch (err) {
                if (console && console.error)
                    console.error(err);
            }
            return error;
        }
        prepareVisitors() {
            this.listeners = {};
            let add = (plugin, type, cb) => {
                if (!this.listeners[type])
                    this.listeners[type] = [];
                this.listeners[type].push([plugin, cb]);
            };
            for (let plugin of this.plugins) {
                if (typeof plugin === "object") {
                    for (let event in plugin) {
                        if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
                            throw new Error(`Unknown event ${event} in ${plugin.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                        }
                        if (!NOT_VISITORS[event]) {
                            if (typeof plugin[event] === "object") {
                                for (let filter2 in plugin[event]) {
                                    if (filter2 === "*") {
                                        add(plugin, event, plugin[event][filter2]);
                                    }
                                    else {
                                        add(plugin, event + "-" + filter2.toLowerCase(), plugin[event][filter2]);
                                    }
                                }
                            }
                            else if (typeof plugin[event] === "function") {
                                add(plugin, event, plugin[event]);
                            }
                        }
                    }
                }
            }
            this.hasListener = Object.keys(this.listeners).length > 0;
        }
        runAsync() {
            return __async(this, null, function* () {
                this.plugin = 0;
                for (let i = 0; i < this.plugins.length; i++) {
                    let plugin = this.plugins[i];
                    let promise = this.runOnRoot(plugin);
                    if (isPromise(promise)) {
                        try {
                            yield promise;
                        }
                        catch (error) {
                            throw this.handleError(error);
                        }
                    }
                }
                this.prepareVisitors();
                if (this.hasListener) {
                    let root2 = this.result.root;
                    while (!root2[isClean]) {
                        root2[isClean] = true;
                        let stack = [toStack(root2)];
                        while (stack.length > 0) {
                            let promise = this.visitTick(stack);
                            if (isPromise(promise)) {
                                try {
                                    yield promise;
                                }
                                catch (e) {
                                    let node2 = stack[stack.length - 1].node;
                                    throw this.handleError(e, node2);
                                }
                            }
                        }
                    }
                    if (this.listeners.OnceExit) {
                        for (let [plugin, visitor] of this.listeners.OnceExit) {
                            this.result.lastPlugin = plugin;
                            try {
                                if (root2.type === "document") {
                                    let roots = root2.nodes.map((subRoot) => visitor(subRoot, this.helpers));
                                    yield Promise.all(roots);
                                }
                                else {
                                    yield visitor(root2, this.helpers);
                                }
                            }
                            catch (e) {
                                throw this.handleError(e);
                            }
                        }
                    }
                }
                this.processed = true;
                return this.stringify();
            });
        }
        runOnRoot(plugin) {
            this.result.lastPlugin = plugin;
            try {
                if (typeof plugin === "object" && plugin.Once) {
                    if (this.result.root.type === "document") {
                        let roots = this.result.root.nodes.map((root2) => plugin.Once(root2, this.helpers));
                        if (isPromise(roots[0])) {
                            return Promise.all(roots);
                        }
                        return roots;
                    }
                    return plugin.Once(this.result.root, this.helpers);
                }
                else if (typeof plugin === "function") {
                    return plugin(this.result.root, this.result);
                }
            }
            catch (error) {
                throw this.handleError(error);
            }
        }
        stringify() {
            if (this.error)
                throw this.error;
            if (this.stringified)
                return this.result;
            this.stringified = true;
            this.sync();
            let opts = this.result.opts;
            let str = stringify2;
            if (opts.syntax)
                str = opts.syntax.stringify;
            if (opts.stringifier)
                str = opts.stringifier;
            if (str.stringify)
                str = str.stringify;
            let map = new MapGenerator(str, this.result.root, this.result.opts);
            let data = map.generate();
            this.result.css = data[0];
            this.result.map = data[1];
            return this.result;
        }
        sync() {
            if (this.error)
                throw this.error;
            if (this.processed)
                return this.result;
            this.processed = true;
            if (this.processing) {
                throw this.getAsyncError();
            }
            for (let plugin of this.plugins) {
                let promise = this.runOnRoot(plugin);
                if (isPromise(promise)) {
                    throw this.getAsyncError();
                }
            }
            this.prepareVisitors();
            if (this.hasListener) {
                let root2 = this.result.root;
                while (!root2[isClean]) {
                    root2[isClean] = true;
                    this.walkSync(root2);
                }
                if (this.listeners.OnceExit) {
                    if (root2.type === "document") {
                        for (let subRoot of root2.nodes) {
                            this.visitSync(this.listeners.OnceExit, subRoot);
                        }
                    }
                    else {
                        this.visitSync(this.listeners.OnceExit, root2);
                    }
                }
            }
            return this.result;
        }
        then(onFulfilled, onRejected) {
            if (process.env.NODE_ENV !== "production") {
                if (!("from" in this.opts)) {
                    warnOnce2("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
                }
            }
            return this.async().then(onFulfilled, onRejected);
        }
        toString() {
            return this.css;
        }
        visitSync(visitors, node2) {
            for (let [plugin, visitor] of visitors) {
                this.result.lastPlugin = plugin;
                let promise;
                try {
                    promise = visitor(node2, this.helpers);
                }
                catch (e) {
                    throw this.handleError(e, node2.proxyOf);
                }
                if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
                    return true;
                }
                if (isPromise(promise)) {
                    throw this.getAsyncError();
                }
            }
        }
        visitTick(stack) {
            let visit = stack[stack.length - 1];
            let { node: node2, visitors } = visit;
            if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
                stack.pop();
                return;
            }
            if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
                let [plugin, visitor] = visitors[visit.visitorIndex];
                visit.visitorIndex += 1;
                if (visit.visitorIndex === visitors.length) {
                    visit.visitors = [];
                    visit.visitorIndex = 0;
                }
                this.result.lastPlugin = plugin;
                try {
                    return visitor(node2.toProxy(), this.helpers);
                }
                catch (e) {
                    throw this.handleError(e, node2);
                }
            }
            if (visit.iterator !== 0) {
                let iterator = visit.iterator;
                let child;
                while (child = node2.nodes[node2.indexes[iterator]]) {
                    node2.indexes[iterator] += 1;
                    if (!child[isClean]) {
                        child[isClean] = true;
                        stack.push(toStack(child));
                        return;
                    }
                }
                visit.iterator = 0;
                delete node2.indexes[iterator];
            }
            let events = visit.events;
            while (visit.eventIndex < events.length) {
                let event = events[visit.eventIndex];
                visit.eventIndex += 1;
                if (event === CHILDREN) {
                    if (node2.nodes && node2.nodes.length) {
                        node2[isClean] = true;
                        visit.iterator = node2.getIterator();
                    }
                    return;
                }
                else if (this.listeners[event]) {
                    visit.visitors = this.listeners[event];
                    return;
                }
            }
            stack.pop();
        }
        walkSync(node2) {
            node2[isClean] = true;
            let events = getEvents(node2);
            for (let event of events) {
                if (event === CHILDREN) {
                    if (node2.nodes) {
                        node2.each((child) => {
                            if (!child[isClean])
                                this.walkSync(child);
                        });
                    }
                }
                else {
                    let visitors = this.listeners[event];
                    if (visitors) {
                        if (this.visitSync(visitors, node2.toProxy()))
                            return;
                    }
                }
            }
        }
        warnings() {
            return this.sync().warnings();
        }
    }
    LazyResult.registerPostcss = (dependant) => {
        postcss2 = dependant;
    };
    lazyResult = LazyResult;
    LazyResult.default = LazyResult;
    Root2.registerLazyResult(LazyResult);
    Document2.registerLazyResult(LazyResult);
    return lazyResult;
}
var noWorkResult;
var hasRequiredNoWorkResult;
function requireNoWorkResult() {
    if (hasRequiredNoWorkResult)
        return noWorkResult;
    hasRequiredNoWorkResult = 1;
    let MapGenerator = requireMapGenerator();
    let parse2 = requireParse();
    const Result = requireResult();
    let stringify2 = requireStringify();
    let warnOnce2 = requireWarnOnce();
    class NoWorkResult {
        get content() {
            return this.result.css;
        }
        get css() {
            return this.result.css;
        }
        get map() {
            return this.result.map;
        }
        get messages() {
            return [];
        }
        get opts() {
            return this.result.opts;
        }
        get processor() {
            return this.result.processor;
        }
        get root() {
            if (this._root) {
                return this._root;
            }
            let root2;
            let parser2 = parse2;
            try {
                root2 = parser2(this._css, this._opts);
            }
            catch (error) {
                this.error = error;
            }
            if (this.error) {
                throw this.error;
            }
            else {
                this._root = root2;
                return root2;
            }
        }
        get [Symbol.toStringTag]() {
            return "NoWorkResult";
        }
        constructor(processor2, css, opts) {
            css = css.toString();
            this.stringified = false;
            this._processor = processor2;
            this._css = css;
            this._opts = opts;
            this._map = void 0;
            let root2;
            let str = stringify2;
            this.result = new Result(this._processor, root2, this._opts);
            this.result.css = css;
            let self = this;
            Object.defineProperty(this.result, "root", {
                get() {
                    return self.root;
                }
            });
            let map = new MapGenerator(str, root2, this._opts, css);
            if (map.isMap()) {
                let [generatedCSS, generatedMap] = map.generate();
                if (generatedCSS) {
                    this.result.css = generatedCSS;
                }
                if (generatedMap) {
                    this.result.map = generatedMap;
                }
            }
            else {
                map.clearAnnotation();
                this.result.css = map.css;
            }
        }
        async() {
            if (this.error)
                return Promise.reject(this.error);
            return Promise.resolve(this.result);
        }
        catch(onRejected) {
            return this.async().catch(onRejected);
        }
        finally(onFinally) {
            return this.async().then(onFinally, onFinally);
        }
        sync() {
            if (this.error)
                throw this.error;
            return this.result;
        }
        then(onFulfilled, onRejected) {
            if (process.env.NODE_ENV !== "production") {
                if (!("from" in this._opts)) {
                    warnOnce2("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
                }
            }
            return this.async().then(onFulfilled, onRejected);
        }
        toString() {
            return this._css;
        }
        warnings() {
            return [];
        }
    }
    noWorkResult = NoWorkResult;
    NoWorkResult.default = NoWorkResult;
    return noWorkResult;
}
var processor;
var hasRequiredProcessor;
function requireProcessor() {
    if (hasRequiredProcessor)
        return processor;
    hasRequiredProcessor = 1;
    let Document2 = requireDocument();
    let LazyResult = requireLazyResult();
    let NoWorkResult = requireNoWorkResult();
    let Root2 = requireRoot();
    class Processor {
        constructor(plugins = []) {
            this.version = "8.5.6";
            this.plugins = this.normalize(plugins);
        }
        normalize(plugins) {
            let normalized = [];
            for (let i of plugins) {
                if (i.postcss === true) {
                    i = i();
                }
                else if (i.postcss) {
                    i = i.postcss;
                }
                if (typeof i === "object" && Array.isArray(i.plugins)) {
                    normalized = normalized.concat(i.plugins);
                }
                else if (typeof i === "object" && i.postcssPlugin) {
                    normalized.push(i);
                }
                else if (typeof i === "function") {
                    normalized.push(i);
                }
                else if (typeof i === "object" && (i.parse || i.stringify)) {
                    if (process.env.NODE_ENV !== "production") {
                        throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
                    }
                }
                else {
                    throw new Error(i + " is not a PostCSS plugin");
                }
            }
            return normalized;
        }
        process(css, opts = {}) {
            if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) {
                return new NoWorkResult(this, css, opts);
            }
            else {
                return new LazyResult(this, css, opts);
            }
        }
        use(plugin) {
            this.plugins = this.plugins.concat(this.normalize([plugin]));
            return this;
        }
    }
    processor = Processor;
    Processor.default = Processor;
    Root2.registerProcessor(Processor);
    Document2.registerProcessor(Processor);
    return processor;
}
var postcss_1;
var hasRequiredPostcss;
function requirePostcss() {
    if (hasRequiredPostcss)
        return postcss_1;
    hasRequiredPostcss = 1;
    let AtRule = requireAtRule();
    let Comment2 = requireComment();
    let Container2 = requireContainer$1();
    let CssSyntaxError = requireCssSyntaxError();
    let Declaration = requireDeclaration();
    let Document2 = requireDocument();
    let fromJSON = requireFromJSON();
    let Input = requireInput();
    let LazyResult = requireLazyResult();
    let list = requireList();
    let Node2 = requireNode$1();
    let parse2 = requireParse();
    let Processor = requireProcessor();
    let Result = requireResult();
    let Root2 = requireRoot();
    let Rule = requireRule();
    let stringify2 = requireStringify();
    let Warning = requireWarning();
    function postcss2(...plugins) {
        if (plugins.length === 1 && Array.isArray(plugins[0])) {
            plugins = plugins[0];
        }
        return new Processor(plugins);
    }
    postcss2.plugin = function plugin(name, initializer) {
        let warningPrinted = false;
        function creator(...args) {
            if (console && console.warn && !warningPrinted) {
                warningPrinted = true;
                console.warn(name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration");
                if (process.env.LANG && process.env.LANG.startsWith("cn")) {
                    console.warn(name + ": \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226");
                }
            }
            let transformer = initializer(...args);
            transformer.postcssPlugin = name;
            transformer.postcssVersion = new Processor().version;
            return transformer;
        }
        let cache;
        Object.defineProperty(creator, "postcss", {
            get() {
                if (!cache)
                    cache = creator();
                return cache;
            }
        });
        creator.process = function (css, processOpts, pluginOpts) {
            return postcss2([creator(pluginOpts)]).process(css, processOpts);
        };
        return creator;
    };
    postcss2.stringify = stringify2;
    postcss2.parse = parse2;
    postcss2.fromJSON = fromJSON;
    postcss2.list = list;
    postcss2.comment = (defaults) => new Comment2(defaults);
    postcss2.atRule = (defaults) => new AtRule(defaults);
    postcss2.decl = (defaults) => new Declaration(defaults);
    postcss2.rule = (defaults) => new Rule(defaults);
    postcss2.root = (defaults) => new Root2(defaults);
    postcss2.document = (defaults) => new Document2(defaults);
    postcss2.CssSyntaxError = CssSyntaxError;
    postcss2.Declaration = Declaration;
    postcss2.Container = Container2;
    postcss2.Processor = Processor;
    postcss2.Document = Document2;
    postcss2.Comment = Comment2;
    postcss2.Warning = Warning;
    postcss2.AtRule = AtRule;
    postcss2.Result = Result;
    postcss2.Input = Input;
    postcss2.Rule = Rule;
    postcss2.Root = Root2;
    postcss2.Node = Node2;
    LazyResult.registerPostcss(postcss2);
    postcss_1 = postcss2;
    postcss2.default = postcss2;
    return postcss_1;
}
var postcssExports = requirePostcss();
var postcss = /* @__PURE__ */ getDefaultExportFromCjs(postcssExports);
var stringify = postcss.stringify;
postcss.fromJSON;
postcss.plugin;
var parse$2 = postcss.parse;
postcss.list;
postcss.document;
postcss.comment;
postcss.atRule;
postcss.rule;
postcss.decl;
postcss.root;
postcss.CssSyntaxError;
postcss.Declaration;
postcss.Container;
postcss.Processor;
postcss.Document;
postcss.Comment;
postcss.Warning;
postcss.AtRule;
postcss.Result;
postcss.Input;
postcss.Rule;
postcss.Root;
postcss.Node;
var dist = {};
var Container = {};
var Node$1 = {};
var hasRequiredNode;
function requireNode() {
    if (hasRequiredNode)
        return Node$1;
    hasRequiredNode = 1;
    Object.defineProperty(Node$1, "__esModule", {
        value: true
    });
    function Node2(opts) {
        this.after = opts.after;
        this.before = opts.before;
        this.type = opts.type;
        this.value = opts.value;
        this.sourceIndex = opts.sourceIndex;
    }
    Node$1.default = Node2;
    return Node$1;
}
var hasRequiredContainer;
function requireContainer() {
    if (hasRequiredContainer)
        return Container;
    hasRequiredContainer = 1;
    Object.defineProperty(Container, "__esModule", {
        value: true
    });
    var _Node = requireNode();
    var _Node2 = _interopRequireDefault(_Node);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function Container$1(opts) {
        var _this = this;
        this.constructor(opts);
        this.nodes = opts.nodes;
        if (this.after === void 0) {
            this.after = this.nodes.length > 0 ? this.nodes[this.nodes.length - 1].after : "";
        }
        if (this.before === void 0) {
            this.before = this.nodes.length > 0 ? this.nodes[0].before : "";
        }
        if (this.sourceIndex === void 0) {
            this.sourceIndex = this.before.length;
        }
        this.nodes.forEach(function (node2) {
            node2.parent = _this;
        });
    }
    Container$1.prototype = Object.create(_Node2.default.prototype);
    Container$1.constructor = _Node2.default;
    Container$1.prototype.walk = function walk(filter2, cb) {
        var hasFilter = typeof filter2 === "string" || filter2 instanceof RegExp;
        var callback = hasFilter ? cb : filter2;
        var filterReg = typeof filter2 === "string" ? new RegExp(filter2) : filter2;
        for (var i = 0; i < this.nodes.length; i++) {
            var node2 = this.nodes[i];
            var filtered = hasFilter ? filterReg.test(node2.type) : true;
            if (filtered && callback && callback(node2, i, this.nodes) === false) {
                return false;
            }
            if (node2.nodes && node2.walk(filter2, cb) === false) {
                return false;
            }
        }
        return true;
    };
    Container$1.prototype.each = function each() {
        var cb = arguments.length <= 0 || arguments[0] === void 0 ? function () {
        } : arguments[0];
        for (var i = 0; i < this.nodes.length; i++) {
            var node2 = this.nodes[i];
            if (cb(node2, i, this.nodes) === false) {
                return false;
            }
        }
        return true;
    };
    Container.default = Container$1;
    return Container;
}
var parsers = {};
var hasRequiredParsers;
function requireParsers() {
    if (hasRequiredParsers)
        return parsers;
    hasRequiredParsers = 1;
    Object.defineProperty(parsers, "__esModule", {
        value: true
    });
    parsers.parseMediaFeature = parseMediaFeature;
    parsers.parseMediaQuery = parseMediaQuery;
    parsers.parseMediaList = parseMediaList;
    var _Node = requireNode();
    var _Node2 = _interopRequireDefault(_Node);
    var _Container = requireContainer();
    var _Container2 = _interopRequireDefault(_Container);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function parseMediaFeature(string) {
        var index = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1];
        var modesEntered = [{
                mode: "normal",
                character: null
            }];
        var result2 = [];
        var lastModeIndex = 0;
        var mediaFeature = "";
        var colon = null;
        var mediaFeatureValue = null;
        var indexLocal = index;
        var stringNormalized = string;
        if (string[0] === "(" && string[string.length - 1] === ")") {
            stringNormalized = string.substring(1, string.length - 1);
            indexLocal++;
        }
        for (var i = 0; i < stringNormalized.length; i++) {
            var character = stringNormalized[i];
            if (character === "'" || character === '"') {
                if (modesEntered[lastModeIndex].isCalculationEnabled === true) {
                    modesEntered.push({
                        mode: "string",
                        isCalculationEnabled: false,
                        character
                    });
                    lastModeIndex++;
                }
                else if (modesEntered[lastModeIndex].mode === "string" && modesEntered[lastModeIndex].character === character && stringNormalized[i - 1] !== "\\") {
                    modesEntered.pop();
                    lastModeIndex--;
                }
            }
            if (character === "{") {
                modesEntered.push({
                    mode: "interpolation",
                    isCalculationEnabled: true
                });
                lastModeIndex++;
            }
            else if (character === "}") {
                modesEntered.pop();
                lastModeIndex--;
            }
            if (modesEntered[lastModeIndex].mode === "normal" && character === ":") {
                var mediaFeatureValueStr = stringNormalized.substring(i + 1);
                mediaFeatureValue = {
                    type: "value",
                    before: /^(\s*)/.exec(mediaFeatureValueStr)[1],
                    after: /(\s*)$/.exec(mediaFeatureValueStr)[1],
                    value: mediaFeatureValueStr.trim()
                };
                mediaFeatureValue.sourceIndex = mediaFeatureValue.before.length + i + 1 + indexLocal;
                colon = {
                    type: "colon",
                    sourceIndex: i + indexLocal,
                    after: mediaFeatureValue.before,
                    value: ":"
                };
                break;
            }
            mediaFeature += character;
        }
        mediaFeature = {
            type: "media-feature",
            before: /^(\s*)/.exec(mediaFeature)[1],
            after: /(\s*)$/.exec(mediaFeature)[1],
            value: mediaFeature.trim()
        };
        mediaFeature.sourceIndex = mediaFeature.before.length + indexLocal;
        result2.push(mediaFeature);
        if (colon !== null) {
            colon.before = mediaFeature.after;
            result2.push(colon);
        }
        if (mediaFeatureValue !== null) {
            result2.push(mediaFeatureValue);
        }
        return result2;
    }
    function parseMediaQuery(string) {
        var index = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1];
        var result2 = [];
        var localLevel = 0;
        var insideSomeValue = false;
        var node2 = void 0;
        function resetNode() {
            return {
                before: "",
                after: "",
                value: ""
            };
        }
        node2 = resetNode();
        for (var i = 0; i < string.length; i++) {
            var character = string[i];
            if (!insideSomeValue) {
                if (character.search(/\s/) !== -1) {
                    node2.before += character;
                }
                else {
                    if (character === "(") {
                        node2.type = "media-feature-expression";
                        localLevel++;
                    }
                    node2.value = character;
                    node2.sourceIndex = index + i;
                    insideSomeValue = true;
                }
            }
            else {
                node2.value += character;
                if (character === "{" || character === "(") {
                    localLevel++;
                }
                if (character === ")" || character === "}") {
                    localLevel--;
                }
            }
            if (insideSomeValue && localLevel === 0 && (character === ")" || i === string.length - 1 || string[i + 1].search(/\s/) !== -1)) {
                if (["not", "only", "and"].indexOf(node2.value) !== -1) {
                    node2.type = "keyword";
                }
                if (node2.type === "media-feature-expression") {
                    node2.nodes = parseMediaFeature(node2.value, node2.sourceIndex);
                }
                result2.push(Array.isArray(node2.nodes) ? new _Container2.default(node2) : new _Node2.default(node2));
                node2 = resetNode();
                insideSomeValue = false;
            }
        }
        for (var _i = 0; _i < result2.length; _i++) {
            node2 = result2[_i];
            if (_i > 0) {
                result2[_i - 1].after = node2.before;
            }
            if (node2.type === void 0) {
                if (_i > 0) {
                    if (result2[_i - 1].type === "media-feature-expression") {
                        node2.type = "keyword";
                        continue;
                    }
                    if (result2[_i - 1].value === "not" || result2[_i - 1].value === "only") {
                        node2.type = "media-type";
                        continue;
                    }
                    if (result2[_i - 1].value === "and") {
                        node2.type = "media-feature-expression";
                        continue;
                    }
                    if (result2[_i - 1].type === "media-type") {
                        if (!result2[_i + 1]) {
                            node2.type = "media-feature-expression";
                        }
                        else {
                            node2.type = result2[_i + 1].type === "media-feature-expression" ? "keyword" : "media-feature-expression";
                        }
                    }
                }
                if (_i === 0) {
                    if (!result2[_i + 1]) {
                        node2.type = "media-type";
                        continue;
                    }
                    if (result2[_i + 1] && (result2[_i + 1].type === "media-feature-expression" || result2[_i + 1].type === "keyword")) {
                        node2.type = "media-type";
                        continue;
                    }
                    if (result2[_i + 2]) {
                        if (result2[_i + 2].type === "media-feature-expression") {
                            node2.type = "media-type";
                            result2[_i + 1].type = "keyword";
                            continue;
                        }
                        if (result2[_i + 2].type === "keyword") {
                            node2.type = "keyword";
                            result2[_i + 1].type = "media-type";
                            continue;
                        }
                    }
                    if (result2[_i + 3]) {
                        if (result2[_i + 3].type === "media-feature-expression") {
                            node2.type = "keyword";
                            result2[_i + 1].type = "media-type";
                            result2[_i + 2].type = "keyword";
                            continue;
                        }
                    }
                }
            }
        }
        return result2;
    }
    function parseMediaList(string) {
        var result2 = [];
        var interimIndex = 0;
        var levelLocal = 0;
        var doesHaveUrl = /^(\s*)url\s*\(/.exec(string);
        if (doesHaveUrl !== null) {
            var i = doesHaveUrl[0].length;
            var parenthesesLv = 1;
            while (parenthesesLv > 0) {
                var character = string[i];
                if (character === "(") {
                    parenthesesLv++;
                }
                if (character === ")") {
                    parenthesesLv--;
                }
                i++;
            }
            result2.unshift(new _Node2.default({
                type: "url",
                value: string.substring(0, i).trim(),
                sourceIndex: doesHaveUrl[1].length,
                before: doesHaveUrl[1],
                after: /^(\s*)/.exec(string.substring(i))[1]
            }));
            interimIndex = i;
        }
        for (var _i2 = interimIndex; _i2 < string.length; _i2++) {
            var _character = string[_i2];
            if (_character === "(") {
                levelLocal++;
            }
            if (_character === ")") {
                levelLocal--;
            }
            if (levelLocal === 0 && _character === ",") {
                var _mediaQueryString = string.substring(interimIndex, _i2);
                var _spaceBefore = /^(\s*)/.exec(_mediaQueryString)[1];
                result2.push(new _Container2.default({
                    type: "media-query",
                    value: _mediaQueryString.trim(),
                    sourceIndex: interimIndex + _spaceBefore.length,
                    nodes: parseMediaQuery(_mediaQueryString, interimIndex),
                    before: _spaceBefore,
                    after: /(\s*)$/.exec(_mediaQueryString)[1]
                }));
                interimIndex = _i2 + 1;
            }
        }
        var mediaQueryString = string.substring(interimIndex);
        var spaceBefore = /^(\s*)/.exec(mediaQueryString)[1];
        result2.push(new _Container2.default({
            type: "media-query",
            value: mediaQueryString.trim(),
            sourceIndex: interimIndex + spaceBefore.length,
            nodes: parseMediaQuery(mediaQueryString, interimIndex),
            before: spaceBefore,
            after: /(\s*)$/.exec(mediaQueryString)[1]
        }));
        return result2;
    }
    return parsers;
}
var hasRequiredDist;
function requireDist() {
    if (hasRequiredDist)
        return dist;
    hasRequiredDist = 1;
    Object.defineProperty(dist, "__esModule", {
        value: true
    });
    dist.default = parseMedia;
    var _Container = requireContainer();
    var _Container2 = _interopRequireDefault(_Container);
    var _parsers = requireParsers();
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function parseMedia(value) {
        return new _Container2.default({
            nodes: (0, _parsers.parseMediaList)(value),
            type: "media-query-list",
            value: value.trim()
        });
    }
    return dist;
}
var distExports = requireDist();
var mediaParser = /* @__PURE__ */ getDefaultExportFromCjs(distExports);
var boolbase$1;
var hasRequiredBoolbase;
function requireBoolbase() {
    if (hasRequiredBoolbase)
        return boolbase$1;
    hasRequiredBoolbase = 1;
    boolbase$1 = {
        trueFunc: function trueFunc() {
            return true;
        },
        falseFunc: function falseFunc() {
            return false;
        }
    };
    return boolbase$1;
}
var boolbaseExports = requireBoolbase();
var boolbase = /* @__PURE__ */ getDefaultExportFromCjs(boolbaseExports);
var SelectorType;
(function (SelectorType2) {
    SelectorType2["Attribute"] = "attribute";
    SelectorType2["Pseudo"] = "pseudo";
    SelectorType2["PseudoElement"] = "pseudo-element";
    SelectorType2["Tag"] = "tag";
    SelectorType2["Universal"] = "universal";
    SelectorType2["Adjacent"] = "adjacent";
    SelectorType2["Child"] = "child";
    SelectorType2["Descendant"] = "descendant";
    SelectorType2["Parent"] = "parent";
    SelectorType2["Sibling"] = "sibling";
    SelectorType2["ColumnCombinator"] = "column-combinator";
})(SelectorType || (SelectorType = {}));
var AttributeAction;
(function (AttributeAction2) {
    AttributeAction2["Any"] = "any";
    AttributeAction2["Element"] = "element";
    AttributeAction2["End"] = "end";
    AttributeAction2["Equals"] = "equals";
    AttributeAction2["Exists"] = "exists";
    AttributeAction2["Hyphen"] = "hyphen";
    AttributeAction2["Not"] = "not";
    AttributeAction2["Start"] = "start";
})(AttributeAction || (AttributeAction = {}));
var reName = /^[^#\\]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\u00B0-\uFFFF-])+/;
var reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
var CharCode;
(function (CharCode2) {
    CharCode2[CharCode2["LeftParenthesis"] = 40] = "LeftParenthesis";
    CharCode2[CharCode2["RightParenthesis"] = 41] = "RightParenthesis";
    CharCode2[CharCode2["LeftSquareBracket"] = 91] = "LeftSquareBracket";
    CharCode2[CharCode2["RightSquareBracket"] = 93] = "RightSquareBracket";
    CharCode2[CharCode2["Comma"] = 44] = "Comma";
    CharCode2[CharCode2["Period"] = 46] = "Period";
    CharCode2[CharCode2["Colon"] = 58] = "Colon";
    CharCode2[CharCode2["SingleQuote"] = 39] = "SingleQuote";
    CharCode2[CharCode2["DoubleQuote"] = 34] = "DoubleQuote";
    CharCode2[CharCode2["Plus"] = 43] = "Plus";
    CharCode2[CharCode2["Tilde"] = 126] = "Tilde";
    CharCode2[CharCode2["QuestionMark"] = 63] = "QuestionMark";
    CharCode2[CharCode2["ExclamationMark"] = 33] = "ExclamationMark";
    CharCode2[CharCode2["Slash"] = 47] = "Slash";
    CharCode2[CharCode2["Equal"] = 61] = "Equal";
    CharCode2[CharCode2["Dollar"] = 36] = "Dollar";
    CharCode2[CharCode2["Pipe"] = 124] = "Pipe";
    CharCode2[CharCode2["Circumflex"] = 94] = "Circumflex";
    CharCode2[CharCode2["Asterisk"] = 42] = "Asterisk";
    CharCode2[CharCode2["GreaterThan"] = 62] = "GreaterThan";
    CharCode2[CharCode2["LessThan"] = 60] = "LessThan";
    CharCode2[CharCode2["Hash"] = 35] = "Hash";
    CharCode2[CharCode2["LowerI"] = 105] = "LowerI";
    CharCode2[CharCode2["LowerS"] = 115] = "LowerS";
    CharCode2[CharCode2["BackSlash"] = 92] = "BackSlash";
    CharCode2[CharCode2["Space"] = 32] = "Space";
    CharCode2[CharCode2["Tab"] = 9] = "Tab";
    CharCode2[CharCode2["NewLine"] = 10] = "NewLine";
    CharCode2[CharCode2["FormFeed"] = 12] = "FormFeed";
    CharCode2[CharCode2["CarriageReturn"] = 13] = "CarriageReturn";
})(CharCode || (CharCode = {}));
var actionTypes = /* @__PURE__ */ new Map([
    [CharCode.Tilde, AttributeAction.Element],
    [CharCode.Circumflex, AttributeAction.Start],
    [CharCode.Dollar, AttributeAction.End],
    [CharCode.Asterisk, AttributeAction.Any],
    [CharCode.ExclamationMark, AttributeAction.Not],
    [CharCode.Pipe, AttributeAction.Hyphen]
]);
var unpackPseudos = /* @__PURE__ */ new Set([
    "has",
    "not",
    "matches",
    "is",
    "where",
    "host",
    "host-context"
]);
var pseudosToPseudoElements = /* @__PURE__ */ new Set([
    "before",
    "after",
    "first-line",
    "first-letter"
]);
function isTraversal$1(selector) {
    switch (selector.type) {
        case SelectorType.Adjacent:
        case SelectorType.Child:
        case SelectorType.Descendant:
        case SelectorType.Parent:
        case SelectorType.Sibling:
        case SelectorType.ColumnCombinator: {
            return true;
        }
        default: {
            return false;
        }
    }
}
var stripQuotesFromPseudos = /* @__PURE__ */ new Set(["contains", "icontains"]);
function funescape(_, escaped, escapedWhitespace) {
    const high = Number.parseInt(escaped, 16) - 65536;
    return high !== high || escapedWhitespace ? escaped : high < 0 ? (
    // BMP codepoint
    String.fromCharCode(high + 65536)) : (
    // Supplemental Plane codepoint (surrogate pair)
    String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320));
}
function unescapeCSS(cssString) {
    return cssString.replace(reEscape, funescape);
}
function isQuote(c) {
    return c === CharCode.SingleQuote || c === CharCode.DoubleQuote;
}
function isWhitespace$1(c) {
    return c === CharCode.Space || c === CharCode.Tab || c === CharCode.NewLine || c === CharCode.FormFeed || c === CharCode.CarriageReturn;
}
function parse$1(selector) {
    const subselects2 = [];
    const endIndex = parseSelector(subselects2, `${selector}`, 0);
    if (endIndex < selector.length) {
        throw new Error(`Unmatched selector: ${selector.slice(endIndex)}`);
    }
    return subselects2;
}
function parseSelector(subselects2, selector, selectorIndex) {
    let tokens = [];
    function getName2(offset) {
        const match = selector.slice(selectorIndex + offset).match(reName);
        if (!match) {
            throw new Error(`Expected name, found ${selector.slice(selectorIndex)}`);
        }
        const [name] = match;
        selectorIndex += offset + name.length;
        return unescapeCSS(name);
    }
    function stripWhitespace(offset) {
        selectorIndex += offset;
        while (selectorIndex < selector.length && isWhitespace$1(selector.charCodeAt(selectorIndex))) {
            selectorIndex++;
        }
    }
    function readValueWithParenthesis() {
        selectorIndex += 1;
        const start = selectorIndex;
        for (let counter = 1; selectorIndex < selector.length; selectorIndex++) {
            switch (selector.charCodeAt(selectorIndex)) {
                case CharCode.BackSlash: {
                    selectorIndex += 1;
                    break;
                }
                case CharCode.LeftParenthesis: {
                    counter += 1;
                    break;
                }
                case CharCode.RightParenthesis: {
                    counter -= 1;
                    if (counter === 0) {
                        return unescapeCSS(selector.slice(start, selectorIndex++));
                    }
                    break;
                }
            }
        }
        throw new Error("Parenthesis not matched");
    }
    function ensureNotTraversal() {
        if (tokens.length > 0 && isTraversal$1(tokens[tokens.length - 1])) {
            throw new Error("Did not expect successive traversals.");
        }
    }
    function addTraversal(type) {
        if (tokens.length > 0 && tokens[tokens.length - 1].type === SelectorType.Descendant) {
            tokens[tokens.length - 1].type = type;
            return;
        }
        ensureNotTraversal();
        tokens.push({ type });
    }
    function addSpecialAttribute(name, action) {
        tokens.push({
            type: SelectorType.Attribute,
            name,
            action,
            value: getName2(1),
            namespace: null,
            ignoreCase: "quirks"
        });
    }
    function finalizeSubselector() {
        if (tokens.length > 0 && tokens[tokens.length - 1].type === SelectorType.Descendant) {
            tokens.pop();
        }
        if (tokens.length === 0) {
            throw new Error("Empty sub-selector");
        }
        subselects2.push(tokens);
    }
    stripWhitespace(0);
    if (selector.length === selectorIndex) {
        return selectorIndex;
    }
    loop: while (selectorIndex < selector.length) {
        const firstChar = selector.charCodeAt(selectorIndex);
        switch (firstChar) {
            // Whitespace
            case CharCode.Space:
            case CharCode.Tab:
            case CharCode.NewLine:
            case CharCode.FormFeed:
            case CharCode.CarriageReturn: {
                if (tokens.length === 0 || tokens[0].type !== SelectorType.Descendant) {
                    ensureNotTraversal();
                    tokens.push({ type: SelectorType.Descendant });
                }
                stripWhitespace(1);
                break;
            }
            // Traversals
            case CharCode.GreaterThan: {
                addTraversal(SelectorType.Child);
                stripWhitespace(1);
                break;
            }
            case CharCode.LessThan: {
                addTraversal(SelectorType.Parent);
                stripWhitespace(1);
                break;
            }
            case CharCode.Tilde: {
                addTraversal(SelectorType.Sibling);
                stripWhitespace(1);
                break;
            }
            case CharCode.Plus: {
                addTraversal(SelectorType.Adjacent);
                stripWhitespace(1);
                break;
            }
            // Special attribute selectors: .class, #id
            case CharCode.Period: {
                addSpecialAttribute("class", AttributeAction.Element);
                break;
            }
            case CharCode.Hash: {
                addSpecialAttribute("id", AttributeAction.Equals);
                break;
            }
            case CharCode.LeftSquareBracket: {
                stripWhitespace(1);
                let name;
                let namespace = null;
                if (selector.charCodeAt(selectorIndex) === CharCode.Pipe) {
                    name = getName2(1);
                }
                else if (selector.startsWith("*|", selectorIndex)) {
                    namespace = "*";
                    name = getName2(2);
                }
                else {
                    name = getName2(0);
                    if (selector.charCodeAt(selectorIndex) === CharCode.Pipe && selector.charCodeAt(selectorIndex + 1) !== CharCode.Equal) {
                        namespace = name;
                        name = getName2(1);
                    }
                }
                stripWhitespace(0);
                let action = AttributeAction.Exists;
                const possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                if (possibleAction) {
                    action = possibleAction;
                    if (selector.charCodeAt(selectorIndex + 1) !== CharCode.Equal) {
                        throw new Error("Expected `=`");
                    }
                    stripWhitespace(2);
                }
                else if (selector.charCodeAt(selectorIndex) === CharCode.Equal) {
                    action = AttributeAction.Equals;
                    stripWhitespace(1);
                }
                let value = "";
                let ignoreCase = null;
                if (action !== "exists") {
                    if (isQuote(selector.charCodeAt(selectorIndex))) {
                        const quote = selector.charCodeAt(selectorIndex);
                        selectorIndex += 1;
                        const sectionStart = selectorIndex;
                        while (selectorIndex < selector.length && selector.charCodeAt(selectorIndex) !== quote) {
                            selectorIndex += // Skip next character if it is escaped
                                selector.charCodeAt(selectorIndex) === CharCode.BackSlash ? 2 : 1;
                        }
                        if (selector.charCodeAt(selectorIndex) !== quote) {
                            throw new Error("Attribute value didn't end");
                        }
                        value = unescapeCSS(selector.slice(sectionStart, selectorIndex));
                        selectorIndex += 1;
                    }
                    else {
                        const valueStart = selectorIndex;
                        while (selectorIndex < selector.length && !isWhitespace$1(selector.charCodeAt(selectorIndex)) && selector.charCodeAt(selectorIndex) !== CharCode.RightSquareBracket) {
                            selectorIndex += // Skip next character if it is escaped
                                selector.charCodeAt(selectorIndex) === CharCode.BackSlash ? 2 : 1;
                        }
                        value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                    }
                    stripWhitespace(0);
                    switch (selector.charCodeAt(selectorIndex) | 32) {
                        // If the forceIgnore flag is set (either `i` or `s`), use that value
                        case CharCode.LowerI: {
                            ignoreCase = true;
                            stripWhitespace(1);
                            break;
                        }
                        case CharCode.LowerS: {
                            ignoreCase = false;
                            stripWhitespace(1);
                            break;
                        }
                    }
                }
                if (selector.charCodeAt(selectorIndex) !== CharCode.RightSquareBracket) {
                    throw new Error("Attribute selector didn't terminate");
                }
                selectorIndex += 1;
                const attributeSelector = {
                    type: SelectorType.Attribute,
                    name,
                    action,
                    value,
                    namespace,
                    ignoreCase
                };
                tokens.push(attributeSelector);
                break;
            }
            case CharCode.Colon: {
                if (selector.charCodeAt(selectorIndex + 1) === CharCode.Colon) {
                    tokens.push({
                        type: SelectorType.PseudoElement,
                        name: getName2(2).toLowerCase(),
                        data: selector.charCodeAt(selectorIndex) === CharCode.LeftParenthesis ? readValueWithParenthesis() : null
                    });
                    break;
                }
                const name = getName2(1).toLowerCase();
                if (pseudosToPseudoElements.has(name)) {
                    tokens.push({
                        type: SelectorType.PseudoElement,
                        name,
                        data: null
                    });
                    break;
                }
                let data = null;
                if (selector.charCodeAt(selectorIndex) === CharCode.LeftParenthesis) {
                    if (unpackPseudos.has(name)) {
                        if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                            throw new Error(`Pseudo-selector ${name} cannot be quoted`);
                        }
                        data = [];
                        selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                        if (selector.charCodeAt(selectorIndex) !== CharCode.RightParenthesis) {
                            throw new Error(`Missing closing parenthesis in :${name} (${selector})`);
                        }
                        selectorIndex += 1;
                    }
                    else {
                        data = readValueWithParenthesis();
                        if (stripQuotesFromPseudos.has(name)) {
                            const quot = data.charCodeAt(0);
                            if (quot === data.charCodeAt(data.length - 1) && isQuote(quot)) {
                                data = data.slice(1, -1);
                            }
                        }
                        data = unescapeCSS(data);
                    }
                }
                tokens.push({ type: SelectorType.Pseudo, name, data });
                break;
            }
            case CharCode.Comma: {
                finalizeSubselector();
                tokens = [];
                stripWhitespace(1);
                break;
            }
            default: {
                if (selector.startsWith("/*", selectorIndex)) {
                    const endIndex = selector.indexOf("*/", selectorIndex + 2);
                    if (endIndex < 0) {
                        throw new Error("Comment was not terminated");
                    }
                    selectorIndex = endIndex + 2;
                    if (tokens.length === 0) {
                        stripWhitespace(0);
                    }
                    break;
                }
                let namespace = null;
                let name;
                if (firstChar === CharCode.Asterisk) {
                    selectorIndex += 1;
                    name = "*";
                }
                else if (firstChar === CharCode.Pipe) {
                    name = "";
                    if (selector.charCodeAt(selectorIndex + 1) === CharCode.Pipe) {
                        addTraversal(SelectorType.ColumnCombinator);
                        stripWhitespace(2);
                        break;
                    }
                }
                else if (reName.test(selector.slice(selectorIndex))) {
                    name = getName2(0);
                }
                else {
                    break loop;
                }
                if (selector.charCodeAt(selectorIndex) === CharCode.Pipe && selector.charCodeAt(selectorIndex + 1) !== CharCode.Pipe) {
                    namespace = name;
                    if (selector.charCodeAt(selectorIndex + 1) === CharCode.Asterisk) {
                        name = "*";
                        selectorIndex += 2;
                    }
                    else {
                        name = getName2(1);
                    }
                }
                tokens.push(name === "*" ? { type: SelectorType.Universal, namespace } : { type: SelectorType.Tag, name, namespace });
            }
        }
    }
    finalizeSubselector();
    return selectorIndex;
}
var ElementType;
(function (ElementType2) {
    ElementType2["Root"] = "root";
    ElementType2["Text"] = "text";
    ElementType2["Directive"] = "directive";
    ElementType2["Comment"] = "comment";
    ElementType2["Script"] = "script";
    ElementType2["Style"] = "style";
    ElementType2["Tag"] = "tag";
    ElementType2["CDATA"] = "cdata";
    ElementType2["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
function isTag$1(elem) {
    return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
}
var Root = ElementType.Root;
var Text$1 = ElementType.Text;
var Directive = ElementType.Directive;
var Comment$1 = ElementType.Comment;
var Script = ElementType.Script;
var Style = ElementType.Style;
var Tag = ElementType.Tag;
var CDATA$1 = ElementType.CDATA;
var Doctype = ElementType.Doctype;
var Node = class {
    constructor() {
        this.parent = null;
        this.prev = null;
        this.next = null;
        this.startIndex = null;
        this.endIndex = null;
    }
    // Read-write aliases for properties
    /**
     * Same as {@link parent}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get parentNode() {
        return this.parent;
    }
    set parentNode(parent) {
        this.parent = parent;
    }
    /**
     * Same as {@link prev}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get previousSibling() {
        return this.prev;
    }
    set previousSibling(prev) {
        this.prev = prev;
    }
    /**
     * Same as {@link next}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get nextSibling() {
        return this.next;
    }
    set nextSibling(next) {
        this.next = next;
    }
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    cloneNode(recursive = false) {
        return cloneNode(this, recursive);
    }
};
var DataNode = class extends Node {
    /**
     * @param data The content of the data node
     */
    constructor(data) {
        super();
        this.data = data;
    }
    /**
     * Same as {@link data}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get nodeValue() {
        return this.data;
    }
    set nodeValue(data) {
        this.data = data;
    }
};
var Text = class extends DataNode {
    constructor() {
        super(...arguments);
        this.type = ElementType.Text;
    }
    get nodeType() {
        return 3;
    }
};
var Comment = class extends DataNode {
    constructor() {
        super(...arguments);
        this.type = ElementType.Comment;
    }
    get nodeType() {
        return 8;
    }
};
var ProcessingInstruction = class extends DataNode {
    constructor(name, data) {
        super(data);
        this.name = name;
        this.type = ElementType.Directive;
    }
    get nodeType() {
        return 1;
    }
};
var NodeWithChildren = class extends Node {
    /**
     * @param children Children of the node. Only certain node types can have children.
     */
    constructor(children) {
        super();
        this.children = children;
    }
    // Aliases
    /** First child of the node. */
    get firstChild() {
        var _a2;
        return (_a2 = this.children[0]) !== null && _a2 !== void 0 ? _a2 : null;
    }
    /** Last child of the node. */
    get lastChild() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    }
    /**
     * Same as {@link children}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get childNodes() {
        return this.children;
    }
    set childNodes(children) {
        this.children = children;
    }
};
var CDATA = class extends NodeWithChildren {
    constructor() {
        super(...arguments);
        this.type = ElementType.CDATA;
    }
    get nodeType() {
        return 4;
    }
};
var Document = class extends NodeWithChildren {
    constructor() {
        super(...arguments);
        this.type = ElementType.Root;
    }
    get nodeType() {
        return 9;
    }
};
var Element = class extends NodeWithChildren {
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    constructor(name, attribs, children = [], type = name === "script" ? ElementType.Script : name === "style" ? ElementType.Style : ElementType.Tag) {
        super(children);
        this.name = name;
        this.attribs = attribs;
        this.type = type;
    }
    get nodeType() {
        return 1;
    }
    // DOM Level 1 aliases
    /**
     * Same as {@link name}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get tagName() {
        return this.name;
    }
    set tagName(name) {
        this.name = name;
    }
    get attributes() {
        return Object.keys(this.attribs).map((name) => {
            var _a2, _b;
            return {
                name,
                value: this.attribs[name],
                namespace: (_a2 = this["x-attribsNamespace"]) === null || _a2 === void 0 ? void 0 : _a2[name],
                prefix: (_b = this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
            };
        });
    }
};
function isTag(node2) {
    return isTag$1(node2);
}
function isCDATA(node2) {
    return node2.type === ElementType.CDATA;
}
function isText(node2) {
    return node2.type === ElementType.Text;
}
function isComment(node2) {
    return node2.type === ElementType.Comment;
}
function isDirective(node2) {
    return node2.type === ElementType.Directive;
}
function isDocument(node2) {
    return node2.type === ElementType.Root;
}
function hasChildren(node2) {
    return Object.prototype.hasOwnProperty.call(node2, "children");
}
function cloneNode(node2, recursive = false) {
    let result2;
    if (isText(node2)) {
        result2 = new Text(node2.data);
    }
    else if (isComment(node2)) {
        result2 = new Comment(node2.data);
    }
    else if (isTag(node2)) {
        const children = recursive ? cloneChildren(node2.children) : [];
        const clone = new Element(node2.name, __spreadValues({}, node2.attribs), children);
        children.forEach((child) => child.parent = clone);
        if (node2.namespace != null) {
            clone.namespace = node2.namespace;
        }
        if (node2["x-attribsNamespace"]) {
            clone["x-attribsNamespace"] = __spreadValues({}, node2["x-attribsNamespace"]);
        }
        if (node2["x-attribsPrefix"]) {
            clone["x-attribsPrefix"] = __spreadValues({}, node2["x-attribsPrefix"]);
        }
        result2 = clone;
    }
    else if (isCDATA(node2)) {
        const children = recursive ? cloneChildren(node2.children) : [];
        const clone = new CDATA(children);
        children.forEach((child) => child.parent = clone);
        result2 = clone;
    }
    else if (isDocument(node2)) {
        const children = recursive ? cloneChildren(node2.children) : [];
        const clone = new Document(children);
        children.forEach((child) => child.parent = clone);
        if (node2["x-mode"]) {
            clone["x-mode"] = node2["x-mode"];
        }
        result2 = clone;
    }
    else if (isDirective(node2)) {
        const instruction = new ProcessingInstruction(node2.name, node2.data);
        if (node2["x-name"] != null) {
            instruction["x-name"] = node2["x-name"];
            instruction["x-publicId"] = node2["x-publicId"];
            instruction["x-systemId"] = node2["x-systemId"];
        }
        result2 = instruction;
    }
    else {
        throw new Error(`Not implemented yet: ${node2.type}`);
    }
    result2.startIndex = node2.startIndex;
    result2.endIndex = node2.endIndex;
    if (node2.sourceCodeLocation != null) {
        result2.sourceCodeLocation = node2.sourceCodeLocation;
    }
    return result2;
}
function cloneChildren(childs) {
    const children = childs.map((child) => cloneNode(child, true));
    for (let i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}
var defaultOpts = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
};
var DomHandler = class {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    constructor(callback, options, elementCB) {
        this.dom = [];
        this.root = new Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = void 0;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    onparserinit(parser2) {
        this.parser = parser2;
    }
    // Resets the handler back to starting state
    onreset() {
        this.dom = [];
        this.root = new Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
    }
    // Signals the handler that parsing is done
    onend() {
        if (this.done)
            return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    }
    onerror(error) {
        this.handleCallback(error);
    }
    onclosetag() {
        this.lastNode = null;
        const elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
            this.elementCB(elem);
    }
    onopentag(name, attribs) {
        const type = this.options.xmlMode ? ElementType.Tag : void 0;
        const element = new Element(name, attribs, void 0, type);
        this.addNode(element);
        this.tagStack.push(element);
    }
    ontext(data) {
        const { lastNode } = this;
        if (lastNode && lastNode.type === ElementType.Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        }
        else {
            const node2 = new Text(data);
            this.addNode(node2);
            this.lastNode = node2;
        }
    }
    oncomment(data) {
        if (this.lastNode && this.lastNode.type === ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        const node2 = new Comment(data);
        this.addNode(node2);
        this.lastNode = node2;
    }
    oncommentend() {
        this.lastNode = null;
    }
    oncdatastart() {
        const text = new Text("");
        const node2 = new CDATA([text]);
        this.addNode(node2);
        text.parent = node2;
        this.lastNode = text;
    }
    oncdataend() {
        this.lastNode = null;
    }
    onprocessinginstruction(name, data) {
        const node2 = new ProcessingInstruction(name, data);
        this.addNode(node2);
    }
    handleCallback(error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        }
        else if (error) {
            throw error;
        }
    }
    addNode(node2) {
        const parent = this.tagStack[this.tagStack.length - 1];
        const previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node2.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node2.endIndex = this.parser.endIndex;
        }
        parent.children.push(node2);
        if (previousSibling) {
            node2.prev = previousSibling;
            previousSibling.next = node2;
        }
        node2.parent = parent;
        this.lastNode = null;
    }
};
var xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
var xmlCodeMap = /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"]
]);
var getCodePoint = (
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null ? (str, index) => str.codePointAt(index) : (
// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
(c, index) => (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index)));
function encodeXML(str) {
    let ret = "";
    let lastIdx = 0;
    let match;
    while ((match = xmlReplacer.exec(str)) !== null) {
        const i = match.index;
        const char = str.charCodeAt(i);
        const next = xmlCodeMap.get(char);
        if (next !== void 0) {
            ret += str.substring(lastIdx, i) + next;
            lastIdx = i + 1;
        }
        else {
            ret += `${str.substring(lastIdx, i)}&#x${getCodePoint(str, i).toString(16)};`;
            lastIdx = xmlReplacer.lastIndex += Number((char & 64512) === 55296);
        }
    }
    return ret + str.substr(lastIdx);
}
function getEscaper(regex, map) {
    return function escape(data) {
        let match;
        let lastIdx = 0;
        let result2 = "";
        while (match = regex.exec(data)) {
            if (lastIdx !== match.index) {
                result2 += data.substring(lastIdx, match.index);
            }
            result2 += map.get(match[0].charCodeAt(0));
            lastIdx = match.index + 1;
        }
        return result2 + data.substring(lastIdx);
    };
}
var escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"]
]));
var escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"]
]));
var elementNames = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath"
].map((val) => [val.toLowerCase(), val]));
var attributeNames = new Map([
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan"
].map((val) => [val.toLowerCase(), val]));
var unencodedElements = /* @__PURE__ */ new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript"
]);
function replaceQuotes(value) {
    return value.replace(/"/g, "&quot;");
}
function formatAttributes(attributes, opts) {
    var _a2;
    if (!attributes)
        return;
    const encode = ((_a2 = opts.encodeEntities) !== null && _a2 !== void 0 ? _a2 : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML : escapeAttribute;
    return Object.keys(attributes).map((key) => {
        var _a3, _b;
        const value = (_a3 = attributes[key]) !== null && _a3 !== void 0 ? _a3 : "";
        if (opts.xmlMode === "foreign") {
            key = (_b = attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
        }
        return `${key}="${encode(value)}"`;
    }).join(" ");
}
var singleTag = /* @__PURE__ */ new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]);
function render(node2, options = {}) {
    const nodes = "length" in node2 ? node2 : [node2];
    let output = "";
    for (let i = 0; i < nodes.length; i++) {
        output += renderNode(nodes[i], options);
    }
    return output;
}
function renderNode(node2, options) {
    switch (node2.type) {
        case Root:
            return render(node2.children, options);
        // @ts-expect-error We don't use `Doctype` yet
        case Doctype:
        case Directive:
            return renderDirective(node2);
        case Comment$1:
            return renderComment(node2);
        case CDATA$1:
            return renderCdata(node2);
        case Script:
        case Style:
        case Tag:
            return renderTag(node2, options);
        case Text$1:
            return renderText(node2, options);
    }
}
var foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title"
]);
var foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
function renderTag(elem, opts) {
    var _a2;
    if (opts.xmlMode === "foreign") {
        elem.name = (_a2 = elementNames.get(elem.name)) !== null && _a2 !== void 0 ? _a2 : elem.name;
        if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = __spreadProps(__spreadValues({}, opts), { xmlMode: false });
        }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = __spreadProps(__spreadValues({}, opts), { xmlMode: "foreign" });
    }
    let tag = `<${elem.name}`;
    const attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
        tag += ` ${attribs}`;
    }
    if (elem.children.length === 0 && (opts.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    opts.selfClosingTags !== false) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    opts.selfClosingTags && singleTag.has(elem.name)))) {
        if (!opts.xmlMode)
            tag += " ";
        tag += "/>";
    }
    else {
        tag += ">";
        if (elem.children.length > 0) {
            tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += `</${elem.name}>`;
        }
    }
    return tag;
}
function renderDirective(elem) {
    return `<${elem.data}>`;
}
function renderText(elem, opts) {
    var _a2;
    let data = elem.data || "";
    if (((_a2 = opts.encodeEntities) !== null && _a2 !== void 0 ? _a2 : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
        data = opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML(data) : escapeText(data);
    }
    return data;
}
function renderCdata(elem) {
    return `<![CDATA[${elem.children[0].data}]]>`;
}
function renderComment(elem) {
    return `<!--${elem.data}-->`;
}
function getOuterHTML(node2, options) {
    return render(node2, options);
}
function getInnerHTML(node2, options) {
    return hasChildren(node2) ? node2.children.map((node3) => getOuterHTML(node3, options)).join("") : "";
}
function getText(node2) {
    if (Array.isArray(node2))
        return node2.map(getText).join("");
    if (isTag(node2))
        return node2.name === "br" ? "\n" : getText(node2.children);
    if (isCDATA(node2))
        return getText(node2.children);
    if (isText(node2))
        return node2.data;
    return "";
}
function textContent(node2) {
    if (Array.isArray(node2))
        return node2.map(textContent).join("");
    if (hasChildren(node2) && !isComment(node2)) {
        return textContent(node2.children);
    }
    if (isText(node2))
        return node2.data;
    return "";
}
function innerText(node2) {
    if (Array.isArray(node2))
        return node2.map(innerText).join("");
    if (hasChildren(node2) && (node2.type === ElementType.Tag || isCDATA(node2))) {
        return innerText(node2.children);
    }
    if (isText(node2))
        return node2.data;
    return "";
}
function getChildren(elem) {
    return hasChildren(elem) ? elem.children : [];
}
function getParent(elem) {
    return elem.parent || null;
}
function getSiblings(elem) {
    const parent = getParent(elem);
    if (parent != null)
        return getChildren(parent);
    const siblings = [elem];
    let { prev, next } = elem;
    while (prev != null) {
        siblings.unshift(prev);
        ({ prev } = prev);
    }
    while (next != null) {
        siblings.push(next);
        ({ next } = next);
    }
    return siblings;
}
function getAttributeValue(elem, name) {
    var _a2;
    return (_a2 = elem.attribs) === null || _a2 === void 0 ? void 0 : _a2[name];
}
function hasAttrib(elem, name) {
    return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
}
function getName(elem) {
    return elem.name;
}
function nextElementSibling(elem) {
    let { next } = elem;
    while (next !== null && !isTag(next))
        ({ next } = next);
    return next;
}
function prevElementSibling(elem) {
    let { prev } = elem;
    while (prev !== null && !isTag(prev))
        ({ prev } = prev);
    return prev;
}
function removeElement(elem) {
    if (elem.prev)
        elem.prev.next = elem.next;
    if (elem.next)
        elem.next.prev = elem.prev;
    if (elem.parent) {
        const childs = elem.parent.children;
        const childsIndex = childs.lastIndexOf(elem);
        if (childsIndex >= 0) {
            childs.splice(childsIndex, 1);
        }
    }
    elem.next = null;
    elem.prev = null;
    elem.parent = null;
}
function replaceElement(elem, replacement) {
    const prev = replacement.prev = elem.prev;
    if (prev) {
        prev.next = replacement;
    }
    const next = replacement.next = elem.next;
    if (next) {
        next.prev = replacement;
    }
    const parent = replacement.parent = elem.parent;
    if (parent) {
        const childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
        elem.parent = null;
    }
}
function appendChild(parent, child) {
    removeElement(child);
    child.next = null;
    child.parent = parent;
    if (parent.children.push(child) > 1) {
        const sibling = parent.children[parent.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
    }
    else {
        child.prev = null;
    }
}
function append(elem, next) {
    removeElement(next);
    const { parent } = elem;
    const currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
        currNext.prev = next;
        if (parent) {
            const childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
    }
    else if (parent) {
        parent.children.push(next);
    }
}
function prependChild(parent, child) {
    removeElement(child);
    child.parent = parent;
    child.prev = null;
    if (parent.children.unshift(child) !== 1) {
        const sibling = parent.children[1];
        sibling.prev = child;
        child.next = sibling;
    }
    else {
        child.next = null;
    }
}
function prepend(elem, prev) {
    removeElement(prev);
    const { parent } = elem;
    if (parent) {
        const childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) {
        elem.prev.next = prev;
    }
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
}
function filter(test, node2, recurse = true, limit = Infinity) {
    return find(test, Array.isArray(node2) ? node2 : [node2], recurse, limit);
}
function find(test, nodes, recurse, limit) {
    const result2 = [];
    const nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
    const indexStack = [0];
    for (;;) {
        if (indexStack[0] >= nodeStack[0].length) {
            if (indexStack.length === 1) {
                return result2;
            }
            nodeStack.shift();
            indexStack.shift();
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if (test(elem)) {
            result2.push(elem);
            if (--limit <= 0)
                return result2;
        }
        if (recurse && hasChildren(elem) && elem.children.length > 0) {
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}
function findOneChild(test, nodes) {
    return nodes.find(test);
}
function findOne$1(test, nodes, recurse = true) {
    const searchedNodes = Array.isArray(nodes) ? nodes : [nodes];
    for (let i = 0; i < searchedNodes.length; i++) {
        const node2 = searchedNodes[i];
        if (isTag(node2) && test(node2)) {
            return node2;
        }
        if (recurse && hasChildren(node2) && node2.children.length > 0) {
            const found = findOne$1(test, node2.children, true);
            if (found)
                return found;
        }
    }
    return null;
}
function existsOne(test, nodes) {
    return (Array.isArray(nodes) ? nodes : [nodes]).some((node2) => isTag(node2) && test(node2) || hasChildren(node2) && existsOne(test, node2.children));
}
function findAll$1(test, nodes) {
    const result2 = [];
    const nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
    const indexStack = [0];
    for (;;) {
        if (indexStack[0] >= nodeStack[0].length) {
            if (nodeStack.length === 1) {
                return result2;
            }
            nodeStack.shift();
            indexStack.shift();
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if (isTag(elem) && test(elem))
            result2.push(elem);
        if (hasChildren(elem) && elem.children.length > 0) {
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}
var Checks = {
    tag_name(name) {
        if (typeof name === "function") {
            return (elem) => isTag(elem) && name(elem.name);
        }
        else if (name === "*") {
            return isTag;
        }
        return (elem) => isTag(elem) && elem.name === name;
    },
    tag_type(type) {
        if (typeof type === "function") {
            return (elem) => type(elem.type);
        }
        return (elem) => elem.type === type;
    },
    tag_contains(data) {
        if (typeof data === "function") {
            return (elem) => isText(elem) && data(elem.data);
        }
        return (elem) => isText(elem) && elem.data === data;
    }
};
function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
        return (elem) => isTag(elem) && value(elem.attribs[attrib]);
    }
    return (elem) => isTag(elem) && elem.attribs[attrib] === value;
}
function combineFuncs(a, b) {
    return (elem) => a(elem) || b(elem);
}
function compileTest(options) {
    const funcs = Object.keys(options).map((key) => {
        const value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
function testElement(options, node2) {
    const test = compileTest(options);
    return test ? test(node2) : true;
}
function getElements(options, nodes, recurse, limit = Infinity) {
    const test = compileTest(options);
    return test ? filter(test, nodes, recurse, limit) : [];
}
function getElementById(id, nodes, recurse = true) {
    if (!Array.isArray(nodes))
        nodes = [nodes];
    return findOne$1(getAttribCheck("id", id), nodes, recurse);
}
function getElementsByTagName(tagName, nodes, recurse = true, limit = Infinity) {
    return filter(Checks["tag_name"](tagName), nodes, recurse, limit);
}
function getElementsByClassName(className, nodes, recurse = true, limit = Infinity) {
    return filter(getAttribCheck("class", className), nodes, recurse, limit);
}
function getElementsByTagType(type, nodes, recurse = true, limit = Infinity) {
    return filter(Checks["tag_type"](type), nodes, recurse, limit);
}
function removeSubsets(nodes) {
    let idx = nodes.length;
    while (--idx >= 0) {
        const node2 = nodes[idx];
        if (idx > 0 && nodes.lastIndexOf(node2, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
        }
        for (let ancestor = node2.parent; ancestor; ancestor = ancestor.parent) {
            if (nodes.includes(ancestor)) {
                nodes.splice(idx, 1);
                break;
            }
        }
    }
    return nodes;
}
var DocumentPosition;
(function (DocumentPosition2) {
    DocumentPosition2[DocumentPosition2["DISCONNECTED"] = 1] = "DISCONNECTED";
    DocumentPosition2[DocumentPosition2["PRECEDING"] = 2] = "PRECEDING";
    DocumentPosition2[DocumentPosition2["FOLLOWING"] = 4] = "FOLLOWING";
    DocumentPosition2[DocumentPosition2["CONTAINS"] = 8] = "CONTAINS";
    DocumentPosition2[DocumentPosition2["CONTAINED_BY"] = 16] = "CONTAINED_BY";
})(DocumentPosition || (DocumentPosition = {}));
function compareDocumentPosition(nodeA, nodeB) {
    const aParents = [];
    const bParents = [];
    if (nodeA === nodeB) {
        return 0;
    }
    let current = hasChildren(nodeA) ? nodeA : nodeA.parent;
    while (current) {
        aParents.unshift(current);
        current = current.parent;
    }
    current = hasChildren(nodeB) ? nodeB : nodeB.parent;
    while (current) {
        bParents.unshift(current);
        current = current.parent;
    }
    const maxIdx = Math.min(aParents.length, bParents.length);
    let idx = 0;
    while (idx < maxIdx && aParents[idx] === bParents[idx]) {
        idx++;
    }
    if (idx === 0) {
        return DocumentPosition.DISCONNECTED;
    }
    const sharedParent = aParents[idx - 1];
    const siblings = sharedParent.children;
    const aSibling = aParents[idx];
    const bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
            return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
        }
        return DocumentPosition.FOLLOWING;
    }
    if (sharedParent === nodeA) {
        return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
    }
    return DocumentPosition.PRECEDING;
}
function uniqueSort(nodes) {
    nodes = nodes.filter((node2, i, arr) => !arr.includes(node2, i + 1));
    nodes.sort((a, b) => {
        const relative2 = compareDocumentPosition(a, b);
        if (relative2 & DocumentPosition.PRECEDING) {
            return -1;
        }
        else if (relative2 & DocumentPosition.FOLLOWING) {
            return 1;
        }
        return 0;
    });
    return nodes;
}
function getFeed(doc) {
    const feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
}
function getAtomFeed(feedRoot) {
    var _a2;
    const childs = feedRoot.children;
    const feed = {
        type: "atom",
        items: getElementsByTagName("entry", childs).map((item) => {
            var _a3;
            const { children } = item;
            const entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            const href2 = (_a3 = getOneElement("link", children)) === null || _a3 === void 0 ? void 0 : _a3.attribs["href"];
            if (href2) {
                entry.link = href2;
            }
            const description = fetch("summary", children) || fetch("content", children);
            if (description) {
                entry.description = description;
            }
            const pubDate = fetch("updated", children);
            if (pubDate) {
                entry.pubDate = new Date(pubDate);
            }
            return entry;
        })
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    const href = (_a2 = getOneElement("link", childs)) === null || _a2 === void 0 ? void 0 : _a2.attribs["href"];
    if (href) {
        feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    const updated = fetch("updated", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
function getRssFeed(feedRoot) {
    var _a2, _b;
    const childs = (_b = (_a2 = getOneElement("channel", feedRoot.children)) === null || _a2 === void 0 ? void 0 : _a2.children) !== null && _b !== void 0 ? _b : [];
    const feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: getElementsByTagName("item", feedRoot.children).map((item) => {
            const { children } = item;
            const entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            const pubDate = fetch("pubDate", children) || fetch("dc:date", children);
            if (pubDate)
                entry.pubDate = new Date(pubDate);
            return entry;
        })
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    const updated = fetch("lastBuildDate", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
var MEDIA_KEYS_STRING = ["url", "type", "lang"];
var MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width"
];
function getMediaElements(where) {
    return getElementsByTagName("media:content", where).map((elem) => {
        const { attribs } = elem;
        const media = {
            medium: attribs["medium"],
            isDefault: !!attribs["isDefault"]
        };
        for (const attrib of MEDIA_KEYS_STRING) {
            if (attribs[attrib]) {
                media[attrib] = attribs[attrib];
            }
        }
        for (const attrib of MEDIA_KEYS_INT) {
            if (attribs[attrib]) {
                media[attrib] = parseInt(attribs[attrib], 10);
            }
        }
        if (attribs["expression"]) {
            media.expression = attribs["expression"];
        }
        return media;
    });
}
function getOneElement(tagName, node2) {
    return getElementsByTagName(tagName, node2, true, 1)[0];
}
function fetch(tagName, where, recurse = false) {
    return textContent(getElementsByTagName(tagName, where, recurse, 1)).trim();
}
function addConditionally(obj, prop, tagName, where, recurse = false) {
    const val = fetch(tagName, where, recurse);
    if (val)
        obj[prop] = val;
}
function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}
var DomUtils = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    get DocumentPosition() {
        return DocumentPosition;
    },
    append,
    appendChild,
    compareDocumentPosition,
    existsOne,
    filter,
    find,
    findAll: findAll$1,
    findOne: findOne$1,
    findOneChild,
    getAttributeValue,
    getChildren,
    getElementById,
    getElements,
    getElementsByClassName,
    getElementsByTagName,
    getElementsByTagType,
    getFeed,
    getInnerHTML,
    getName,
    getOuterHTML,
    getParent,
    getSiblings,
    getText,
    hasAttrib,
    hasChildren,
    innerText,
    isCDATA,
    isComment,
    isDocument,
    isTag,
    isText,
    nextElementSibling,
    prepend,
    prependChild,
    prevElementSibling,
    removeElement,
    removeSubsets,
    replaceElement,
    testElement,
    textContent,
    uniqueSort
});
var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
function escapeRegex(value) {
    return value.replace(reChars, "\\$&");
}
var caseInsensitiveAttributes = /* @__PURE__ */ new Set([
    "accept",
    "accept-charset",
    "align",
    "alink",
    "axis",
    "bgcolor",
    "charset",
    "checked",
    "clear",
    "codetype",
    "color",
    "compact",
    "declare",
    "defer",
    "dir",
    "direction",
    "disabled",
    "enctype",
    "face",
    "frame",
    "hreflang",
    "http-equiv",
    "lang",
    "language",
    "link",
    "media",
    "method",
    "multiple",
    "nohref",
    "noresize",
    "noshade",
    "nowrap",
    "readonly",
    "rel",
    "rev",
    "rules",
    "scope",
    "scrolling",
    "selected",
    "shape",
    "target",
    "text",
    "type",
    "valign",
    "valuetype",
    "vlink"
]);
function shouldIgnoreCase(selector, options) {
    return typeof selector.ignoreCase === "boolean" ? selector.ignoreCase : selector.ignoreCase === "quirks" ? !!options.quirksMode : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
}
var attributeRules = {
    equals(next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem) => {
                const attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.length === value.length && attr.toLowerCase() === value && next(elem);
            };
        }
        return (elem) => adapter.getAttributeValue(elem, name) === value && next(elem);
    },
    hyphen(next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = value.length;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function hyphenIC(elem) {
                const attr = adapter.getAttributeValue(elem, name);
                return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
        }
        return function hyphen(elem) {
            const attr = adapter.getAttributeValue(elem, name);
            return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len) === value && next(elem);
        };
    },
    element(next, data, options) {
        const { adapter } = options;
        const { name, value } = data;
        if (/\s/.test(value)) {
            return boolbaseExports.falseFunc;
        }
        const regex = new RegExp(`(?:^|\\s)${escapeRegex(value)}(?:$|\\s)`, shouldIgnoreCase(data, options) ? "i" : "");
        return function element(elem) {
            const attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
        };
    },
    exists(next, { name }, { adapter }) {
        return (elem) => adapter.hasAttrib(elem, name) && next(elem);
    },
    start(next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = value.length;
        if (len === 0) {
            return boolbaseExports.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem) => {
                const attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.length >= len && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
        }
        return (elem) => !!adapter.getAttributeValue(elem, name)?.startsWith(value) && next(elem);
    },
    end(next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = -value.length;
        if (len === 0) {
            return boolbaseExports.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem) => adapter.getAttributeValue(elem, name)?.substr(len).toLowerCase() === value && next(elem);
        }
        return (elem) => !!adapter.getAttributeValue(elem, name)?.endsWith(value) && next(elem);
    },
    any(next, data, options) {
        const { adapter } = options;
        const { name, value } = data;
        if (value === "") {
            return boolbaseExports.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            const regex = new RegExp(escapeRegex(value), "i");
            return function anyIC(elem) {
                const attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
            };
        }
        return (elem) => !!adapter.getAttributeValue(elem, name)?.includes(value) && next(elem);
    },
    not(next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        if (value === "") {
            return (elem) => !!adapter.getAttributeValue(elem, name) && next(elem);
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem) => {
                const attr = adapter.getAttributeValue(elem, name);
                return (attr == null || attr.length !== value.length || attr.toLowerCase() !== value) && next(elem);
            };
        }
        return (elem) => adapter.getAttributeValue(elem, name) !== value && next(elem);
    }
};
function findAll(query, elems, options) {
    const { adapter, xmlMode = false } = options;
    const result2 = [];
    const nodeStack = [elems];
    const indexStack = [0];
    for (;;) {
        if (indexStack[0] >= nodeStack[0].length) {
            if (nodeStack.length === 1) {
                return result2;
            }
            nodeStack.shift();
            indexStack.shift();
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if (!adapter.isTag(elem)) {
            continue;
        }
        if (query(elem)) {
            result2.push(elem);
        }
        if (xmlMode || adapter.getName(elem) !== "template") {
            const children = adapter.getChildren(elem);
            if (children.length > 0) {
                nodeStack.unshift(children);
                indexStack.unshift(0);
            }
        }
    }
}
function findOne(query, elems, options) {
    const { adapter, xmlMode = false } = options;
    const nodeStack = [elems];
    const indexStack = [0];
    for (;;) {
        if (indexStack[0] >= nodeStack[0].length) {
            if (nodeStack.length === 1) {
                return null;
            }
            nodeStack.shift();
            indexStack.shift();
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if (!adapter.isTag(elem)) {
            continue;
        }
        if (query(elem)) {
            return elem;
        }
        if (xmlMode || adapter.getName(elem) !== "template") {
            const children = adapter.getChildren(elem);
            if (children.length > 0) {
                nodeStack.unshift(children);
                indexStack.unshift(0);
            }
        }
    }
}
function getNextSiblings(elem, adapter) {
    const siblings = adapter.getSiblings(elem);
    if (siblings.length <= 1) {
        return [];
    }
    const elemIndex = siblings.indexOf(elem);
    if (elemIndex < 0 || elemIndex === siblings.length - 1) {
        return [];
    }
    return siblings.slice(elemIndex + 1).filter(adapter.isTag);
}
function getElementParent(node2, adapter) {
    const parent = adapter.getParent(node2);
    return parent != null && adapter.isTag(parent) ? parent : null;
}
var textControl = "input:is([type=text i],[type=search i],[type=url i],[type=tel i],[type=email i],[type=password i],[type=date i],[type=month i],[type=week i],[type=time i],[type=datetime-local i],[type=number i])";
var aliases = {
    // Links
    "any-link": ":is(a, area, link)[href]",
    link: ":any-link:not(:visited)",
    // Forms
    // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
    disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
    enabled: ":not(:disabled)",
    checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], :selected)",
    required: ":is(input, select, textarea)[required]",
    optional: ":is(input, select, textarea):not([required])",
    "read-only": `[readonly]:is(textarea, ${textControl})`,
    "read-write": `:not([readonly]):is(textarea, ${textControl})`,
    // JQuery extensions
    /**
     * `:selected` matches option elements that have the `selected` attribute,
     * or are the first option element in a select element that does not have
     * the `multiple` attribute and does not have any option elements with the
     * `selected` attribute.
     *
     * @see https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
     */
    selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
    checkbox: "[type=checkbox]",
    file: "[type=file]",
    password: "[type=password]",
    radio: "[type=radio]",
    reset: "[type=reset]",
    image: "[type=image]",
    submit: "[type=submit]",
    parent: ":not(:empty)",
    header: ":is(h1, h2, h3, h4, h5, h6)",
    button: ":is(button, input[type=button])",
    input: ":is(input, textarea, select, button)",
    text: "input:is(:not([type!='']), [type=text])"
};
var whitespace = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]);
var ZERO = "0".charCodeAt(0);
var NINE = "9".charCodeAt(0);
function parse(formula) {
    formula = formula.trim().toLowerCase();
    if (formula === "even") {
        return [2, 0];
    }
    else if (formula === "odd") {
        return [2, 1];
    }
    let idx = 0;
    let a = 0;
    let sign = readSign();
    let number = readNumber();
    if (idx < formula.length && formula.charAt(idx) === "n") {
        idx++;
        a = sign * (number !== null && number !== void 0 ? number : 1);
        skipWhitespace();
        if (idx < formula.length) {
            sign = readSign();
            skipWhitespace();
            number = readNumber();
        }
        else {
            sign = number = 0;
        }
    }
    if (number === null || idx < formula.length) {
        throw new Error(`n-th rule couldn't be parsed ('${formula}')`);
    }
    return [a, sign * number];
    function readSign() {
        if (formula.charAt(idx) === "-") {
            idx++;
            return -1;
        }
        if (formula.charAt(idx) === "+") {
            idx++;
        }
        return 1;
    }
    function readNumber() {
        const start = idx;
        let value = 0;
        while (idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE) {
            value = value * 10 + (formula.charCodeAt(idx) - ZERO);
            idx++;
        }
        return idx === start ? null : value;
    }
    function skipWhitespace() {
        while (idx < formula.length && whitespace.has(formula.charCodeAt(idx))) {
            idx++;
        }
    }
}
function compile(parsed) {
    const a = parsed[0];
    const b = parsed[1] - 1;
    if (b < 0 && a <= 0)
        return boolbase.falseFunc;
    if (a === -1)
        return (index) => index <= b;
    if (a === 0)
        return (index) => index === b;
    if (a === 1)
        return b < 0 ? boolbase.trueFunc : (index) => index >= b;
    const absA = Math.abs(a);
    const bMod = (b % absA + absA) % absA;
    return a > 1 ? (index) => index >= b && index % absA === bMod : (index) => index <= b && index % absA === bMod;
}
function nthCheck(formula) {
    return compile(parse(formula));
}
function cacheParentResults(next, { adapter, cacheResults }, matches) {
    if (cacheResults === false || typeof WeakMap === "undefined") {
        return (elem) => next(elem) && matches(elem);
    }
    const resultCache = /* @__PURE__ */ new WeakMap();
    function addResultToCache(elem) {
        const result2 = matches(elem);
        resultCache.set(elem, result2);
        return result2;
    }
    return function cachedMatcher(elem) {
        if (!next(elem)) {
            return false;
        }
        if (resultCache.has(elem)) {
            return resultCache.get(elem);
        }
        let node2 = elem;
        do {
            const parent = getElementParent(node2, adapter);
            if (parent === null) {
                return addResultToCache(elem);
            }
            node2 = parent;
        } while (!resultCache.has(node2));
        return resultCache.get(node2) && addResultToCache(elem);
    };
}
var filters = {
    contains(next, text, options) {
        const { getText: getText2 } = options.adapter;
        return cacheParentResults(next, options, (elem) => getText2(elem).includes(text));
    },
    icontains(next, text, options) {
        const itext = text.toLowerCase();
        const { getText: getText2 } = options.adapter;
        return cacheParentResults(next, options, (elem) => getText2(elem).toLowerCase().includes(itext));
    },
    // Location specific methods
    "nth-child"(next, rule2, { adapter, equals }) {
        const func = nthCheck(rule2);
        if (func === boolbaseExports.falseFunc) {
            return boolbaseExports.falseFunc;
        }
        if (func === boolbaseExports.trueFunc) {
            return (elem) => getElementParent(elem, adapter) !== null && next(elem);
        }
        return function nthChild(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for (let i = 0; i < siblings.length; i++) {
                if (equals(elem, siblings[i])) {
                    break;
                }
                if (adapter.isTag(siblings[i])) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-child"(next, rule2, { adapter, equals }) {
        const func = nthCheck(rule2);
        if (func === boolbaseExports.falseFunc) {
            return boolbaseExports.falseFunc;
        }
        if (func === boolbaseExports.trueFunc) {
            return (elem) => getElementParent(elem, adapter) !== null && next(elem);
        }
        return function nthLastChild(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for (let i = siblings.length - 1; i >= 0; i--) {
                if (equals(elem, siblings[i])) {
                    break;
                }
                if (adapter.isTag(siblings[i])) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-of-type"(next, rule2, { adapter, equals }) {
        const func = nthCheck(rule2);
        if (func === boolbaseExports.falseFunc) {
            return boolbaseExports.falseFunc;
        }
        if (func === boolbaseExports.trueFunc) {
            return (elem) => getElementParent(elem, adapter) !== null && next(elem);
        }
        return function nthOfType(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for (let i = 0; i < siblings.length; i++) {
                const currentSibling = siblings[i];
                if (equals(elem, currentSibling)) {
                    break;
                }
                if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-of-type"(next, rule2, { adapter, equals }) {
        const func = nthCheck(rule2);
        if (func === boolbaseExports.falseFunc) {
            return boolbaseExports.falseFunc;
        }
        if (func === boolbaseExports.trueFunc) {
            return (elem) => getElementParent(elem, adapter) !== null && next(elem);
        }
        return function nthLastOfType(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for (let i = siblings.length - 1; i >= 0; i--) {
                const currentSibling = siblings[i];
                if (equals(elem, currentSibling)) {
                    break;
                }
                if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    // TODO determine the actual root element
    root(next, _rule, { adapter }) {
        return (elem) => getElementParent(elem, adapter) === null && next(elem);
    },
    scope(next, rule2, options, context) {
        const { equals } = options;
        if (!context || context.length === 0) {
            return filters["root"](next, rule2, options);
        }
        if (context.length === 1) {
            return (elem) => equals(context[0], elem) && next(elem);
        }
        return (elem) => context.includes(elem) && next(elem);
    },
    hover: dynamicStatePseudo("isHovered"),
    visited: dynamicStatePseudo("isVisited"),
    active: dynamicStatePseudo("isActive")
};
function dynamicStatePseudo(name) {
    return function dynamicPseudo(next, _rule, { adapter }) {
        const func = adapter[name];
        if (typeof func !== "function") {
            return boolbaseExports.falseFunc;
        }
        return function active(elem) {
            return func(elem) && next(elem);
        };
    };
}
var isDocumentWhiteSpace = /^[ \t\r\n]*$/;
var pseudos = {
    empty(elem, { adapter }) {
        const children = adapter.getChildren(elem);
        return (
        // First, make sure the tag does not have any element children.
        children.every((elem2) => !adapter.isTag(elem2)) && // Then, check that the text content is only whitespace.
            children.every((elem2) => (
            // FIXME: `getText` call is potentially expensive.
            isDocumentWhiteSpace.test(adapter.getText(elem2)))));
    },
    "first-child"(elem, { adapter, equals }) {
        if (adapter.prevElementSibling) {
            return adapter.prevElementSibling(elem) == null;
        }
        const firstChild = adapter.getSiblings(elem).find((elem2) => adapter.isTag(elem2));
        return firstChild != null && equals(elem, firstChild);
    },
    "last-child"(elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        for (let i = siblings.length - 1; i >= 0; i--) {
            if (equals(elem, siblings[i])) {
                return true;
            }
            if (adapter.isTag(siblings[i])) {
                break;
            }
        }
        return false;
    },
    "first-of-type"(elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        const elemName = adapter.getName(elem);
        for (let i = 0; i < siblings.length; i++) {
            const currentSibling = siblings[i];
            if (equals(elem, currentSibling)) {
                return true;
            }
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
                break;
            }
        }
        return false;
    },
    "last-of-type"(elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        const elemName = adapter.getName(elem);
        for (let i = siblings.length - 1; i >= 0; i--) {
            const currentSibling = siblings[i];
            if (equals(elem, currentSibling)) {
                return true;
            }
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
                break;
            }
        }
        return false;
    },
    "only-of-type"(elem, { adapter, equals }) {
        const elemName = adapter.getName(elem);
        return adapter.getSiblings(elem).every((sibling) => equals(elem, sibling) || !adapter.isTag(sibling) || adapter.getName(sibling) !== elemName);
    },
    "only-child"(elem, { adapter, equals }) {
        return adapter.getSiblings(elem).every((sibling) => equals(elem, sibling) || !adapter.isTag(sibling));
    }
};
function verifyPseudoArgs(func, name, subselect, argIndex) {
    if (subselect === null) {
        if (func.length > argIndex) {
            throw new Error(`Pseudo-class :${name} requires an argument`);
        }
    }
    else if (func.length === argIndex) {
        throw new Error(`Pseudo-class :${name} doesn't have any arguments`);
    }
}
function isTraversal(token) {
    return token.type === "_flexibleDescendant" || isTraversal$1(token);
}
function sortRules(arr) {
    const ratings = arr.map(getQuality);
    for (let i = 1; i < arr.length; i++) {
        const procNew = ratings[i];
        if (procNew < 0) {
            continue;
        }
        for (let j = i; j > 0 && procNew < ratings[j - 1]; j--) {
            const token = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = token;
            ratings[j] = ratings[j - 1];
            ratings[j - 1] = procNew;
        }
    }
}
function getAttributeQuality(token) {
    switch (token.action) {
        case AttributeAction.Exists: {
            return 10;
        }
        case AttributeAction.Equals: {
            return token.name === "id" ? 9 : 8;
        }
        case AttributeAction.Not: {
            return 7;
        }
        case AttributeAction.Start: {
            return 6;
        }
        case AttributeAction.End: {
            return 6;
        }
        case AttributeAction.Any: {
            return 5;
        }
        case AttributeAction.Hyphen: {
            return 4;
        }
        case AttributeAction.Element: {
            return 3;
        }
    }
}
function getQuality(token) {
    switch (token.type) {
        case SelectorType.Universal: {
            return 50;
        }
        case SelectorType.Tag: {
            return 30;
        }
        case SelectorType.Attribute: {
            return Math.floor(getAttributeQuality(token) / // `ignoreCase` adds some overhead, half the result if applicable.
                (token.ignoreCase ? 2 : 1));
        }
        case SelectorType.Pseudo: {
            return !token.data ? 3 : token.name === "has" || token.name === "contains" || token.name === "icontains" ? (
            // Expensive in any case — run as late as possible.
            0) : Array.isArray(token.data) ? (
            // Eg. `:is`, `:not`
            Math.max(
            // If we have traversals, try to avoid executing this selector
            0, Math.min(...token.data.map((d) => Math.min(...d.map(getQuality)))))) : 2;
        }
        default: {
            return -1;
        }
    }
}
function includesScopePseudo(t) {
    return t.type === SelectorType.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some((data) => data.some(includesScopePseudo)));
}
var PLACEHOLDER_ELEMENT = {};
function hasDependsOnCurrentElement(selector) {
    return selector.some((sel) => sel.length > 0 && (isTraversal(sel[0]) || sel.some(includesScopePseudo)));
}
function copyOptions(options) {
    return {
        xmlMode: !!options.xmlMode,
        lowerCaseAttributeNames: !!options.lowerCaseAttributeNames,
        lowerCaseTags: !!options.lowerCaseTags,
        quirksMode: !!options.quirksMode,
        cacheResults: !!options.cacheResults,
        pseudos: options.pseudos,
        adapter: options.adapter,
        equals: options.equals
    };
}
var is = (next, token, options, context, compileToken2) => {
    const func = compileToken2(token, copyOptions(options), context);
    return func === boolbaseExports.trueFunc ? next : func === boolbaseExports.falseFunc ? boolbaseExports.falseFunc : (elem) => func(elem) && next(elem);
};
var subselects = {
    is,
    /**
     * `:matches` and `:where` are aliases for `:is`.
     */
    matches: is,
    where: is,
    not(next, token, options, context, compileToken2) {
        const func = compileToken2(token, copyOptions(options), context);
        return func === boolbaseExports.falseFunc ? next : func === boolbaseExports.trueFunc ? boolbaseExports.falseFunc : (elem) => !func(elem) && next(elem);
    },
    has(next, subselect, options, _context, compileToken2) {
        const { adapter } = options;
        const opts = copyOptions(options);
        opts.relativeSelector = true;
        const context = subselect.some((s) => s.some(isTraversal)) ? (
        // Used as a placeholder. Will be replaced with the actual element.
        [PLACEHOLDER_ELEMENT]) : void 0;
        const skipCache = hasDependsOnCurrentElement(subselect);
        const compiled = compileToken2(subselect, opts, context);
        if (compiled === boolbaseExports.falseFunc) {
            return boolbaseExports.falseFunc;
        }
        if (context && compiled !== boolbaseExports.trueFunc) {
            return skipCache ? (elem) => {
                if (!next(elem)) {
                    return false;
                }
                context[0] = elem;
                const childs = adapter.getChildren(elem);
                return findOne(compiled, compiled.shouldTestNextSiblings ? [
                    ...childs,
                    ...getNextSiblings(elem, adapter)
                ] : childs, options) !== null;
            } : cacheParentResults(next, options, (elem) => {
                context[0] = elem;
                return findOne(compiled, adapter.getChildren(elem), options) !== null;
            });
        }
        const hasOne = (elem) => findOne(compiled, adapter.getChildren(elem), options) !== null;
        return skipCache ? (elem) => next(elem) && hasOne(elem) : cacheParentResults(next, options, hasOne);
    }
};
function compilePseudoSelector(next, selector, options, context, compileToken2) {
    const { name, data } = selector;
    if (Array.isArray(data)) {
        if (!(name in subselects)) {
            throw new Error(`Unknown pseudo-class :${name}(${data})`);
        }
        return subselects[name](next, data, options, context, compileToken2);
    }
    const userPseudo = options.pseudos?.[name];
    const stringPseudo = typeof userPseudo === "string" ? userPseudo : aliases[name];
    if (typeof stringPseudo === "string") {
        if (data != null) {
            throw new Error(`Pseudo ${name} doesn't have any arguments`);
        }
        const alias = parse$1(stringPseudo);
        return subselects["is"](next, alias, options, context, compileToken2);
    }
    if (typeof userPseudo === "function") {
        verifyPseudoArgs(userPseudo, name, data, 1);
        return (elem) => userPseudo(elem, data) && next(elem);
    }
    if (name in filters) {
        return filters[name](next, data, options, context);
    }
    if (name in pseudos) {
        const pseudo = pseudos[name];
        verifyPseudoArgs(pseudo, name, data, 2);
        return (elem) => pseudo(elem, options, data) && next(elem);
    }
    throw new Error(`Unknown pseudo-class :${name}`);
}
function compileGeneralSelector(next, selector, options, context, compileToken2, hasExpensiveSubselector) {
    const { adapter, equals, cacheResults } = options;
    switch (selector.type) {
        case SelectorType.PseudoElement: {
            throw new Error("Pseudo-elements are not supported by css-select");
        }
        case SelectorType.ColumnCombinator: {
            throw new Error("Column combinators are not yet supported by css-select");
        }
        case SelectorType.Attribute: {
            if (selector.namespace != null) {
                throw new Error("Namespaced attributes are not yet supported by css-select");
            }
            if (!options.xmlMode || options.lowerCaseAttributeNames) {
                selector.name = selector.name.toLowerCase();
            }
            return attributeRules[selector.action](next, selector, options);
        }
        case SelectorType.Pseudo: {
            return compilePseudoSelector(next, selector, options, context, compileToken2);
        }
        // Tags
        case SelectorType.Tag: {
            if (selector.namespace != null) {
                throw new Error("Namespaced tag names are not yet supported by css-select");
            }
            let { name } = selector;
            if (!options.xmlMode || options.lowerCaseTags) {
                name = name.toLowerCase();
            }
            return function tag(elem) {
                return adapter.getName(elem) === name && next(elem);
            };
        }
        // Traversal
        case SelectorType.Descendant: {
            if (!hasExpensiveSubselector || cacheResults === false || typeof WeakMap === "undefined") {
                return function descendant(elem) {
                    let current = elem;
                    while (current = getElementParent(current, adapter)) {
                        if (next(current)) {
                            return true;
                        }
                    }
                    return false;
                };
            }
            const resultCache = /* @__PURE__ */ new WeakMap();
            return function cachedDescendant(elem) {
                let current = elem;
                let result2;
                while (current = getElementParent(current, adapter)) {
                    const cached = resultCache.get(current);
                    if (cached === void 0) {
                        result2 ?? (result2 = { matches: false });
                        result2.matches = next(current);
                        resultCache.set(current, result2);
                        if (result2.matches) {
                            return true;
                        }
                    }
                    else {
                        if (result2) {
                            result2.matches = cached.matches;
                        }
                        return cached.matches;
                    }
                }
                return false;
            };
        }
        case "_flexibleDescendant": {
            return function flexibleDescendant(elem) {
                let current = elem;
                do {
                    if (next(current)) {
                        return true;
                    }
                    current = getElementParent(current, adapter);
                } while (current);
                return false;
            };
        }
        case SelectorType.Parent: {
            return function parent(elem) {
                return adapter.getChildren(elem).some((elem2) => adapter.isTag(elem2) && next(elem2));
            };
        }
        case SelectorType.Child: {
            return function child(elem) {
                const parent = getElementParent(elem, adapter);
                return parent !== null && next(parent);
            };
        }
        case SelectorType.Sibling: {
            return function sibling(elem) {
                const siblings = adapter.getSiblings(elem);
                for (let i = 0; i < siblings.length; i++) {
                    const currentSibling = siblings[i];
                    if (equals(elem, currentSibling)) {
                        break;
                    }
                    if (adapter.isTag(currentSibling) && next(currentSibling)) {
                        return true;
                    }
                }
                return false;
            };
        }
        case SelectorType.Adjacent: {
            if (adapter.prevElementSibling) {
                return function adjacent(elem) {
                    const previous = adapter.prevElementSibling(elem);
                    return previous != null && next(previous);
                };
            }
            return function adjacent(elem) {
                const siblings = adapter.getSiblings(elem);
                let lastElement;
                for (let i = 0; i < siblings.length; i++) {
                    const currentSibling = siblings[i];
                    if (equals(elem, currentSibling)) {
                        break;
                    }
                    if (adapter.isTag(currentSibling)) {
                        lastElement = currentSibling;
                    }
                }
                return !!lastElement && next(lastElement);
            };
        }
        case SelectorType.Universal: {
            if (selector.namespace != null && selector.namespace !== "*") {
                throw new Error("Namespaced universal selectors are not yet supported by css-select");
            }
            return next;
        }
    }
}
var DESCENDANT_TOKEN = { type: SelectorType.Descendant };
var FLEXIBLE_DESCENDANT_TOKEN = {
    type: "_flexibleDescendant"
};
var SCOPE_TOKEN = {
    type: SelectorType.Pseudo,
    name: "scope",
    data: null
};
function absolutize(token, { adapter }, context) {
    const hasContext = !!context?.every((e) => e === PLACEHOLDER_ELEMENT || adapter.isTag(e) && getElementParent(e, adapter) !== null);
    for (const t of token) {
        if (t.length > 0 && isTraversal(t[0]) && t[0].type !== SelectorType.Descendant)
            ;
        else if (hasContext && !t.some(includesScopePseudo)) {
            t.unshift(DESCENDANT_TOKEN);
        }
        else {
            continue;
        }
        t.unshift(SCOPE_TOKEN);
    }
}
function compileToken(token, options, ctx) {
    token.forEach(sortRules);
    const { context = ctx, rootFunc = boolbaseExports.trueFunc } = options;
    const isArrayContext = Array.isArray(context);
    const finalContext = context && (Array.isArray(context) ? context : [context]);
    if (options.relativeSelector !== false) {
        absolutize(token, options, finalContext);
    }
    else if (token.some((t) => t.length > 0 && isTraversal(t[0]))) {
        throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    }
    let shouldTestNextSiblings = false;
    let query = boolbaseExports.falseFunc;
    combineLoop: for (const rules of token) {
        if (rules.length >= 2) {
            const [first, second] = rules;
            if (first.type !== SelectorType.Pseudo || first.name !== "scope")
                ;
            else if (isArrayContext && second.type === SelectorType.Descendant) {
                rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
            }
            else if (second.type === SelectorType.Adjacent || second.type === SelectorType.Sibling) {
                shouldTestNextSiblings = true;
            }
        }
        let next = rootFunc;
        let hasExpensiveSubselector = false;
        for (const rule2 of rules) {
            next = compileGeneralSelector(next, rule2, options, finalContext, compileToken, hasExpensiveSubselector);
            const quality = getQuality(rule2);
            if (quality === 0) {
                hasExpensiveSubselector = true;
            }
            if (next === boolbaseExports.falseFunc) {
                continue combineLoop;
            }
        }
        if (next === rootFunc) {
            return rootFunc;
        }
        query = query === boolbaseExports.falseFunc ? next : or(query, next);
    }
    query.shouldTestNextSiblings = shouldTestNextSiblings;
    return query;
}
function or(a, b) {
    return (elem) => a(elem) || b(elem);
}
var defaultEquals = (a, b) => a === b;
var defaultOptions = {
    adapter: DomUtils,
    equals: defaultEquals
};
function convertOptionFormats(options) {
    const opts = options ?? defaultOptions;
    opts.adapter ?? (opts.adapter = DomUtils);
    opts.equals ?? (opts.equals = opts.adapter?.equals ?? defaultEquals);
    return opts;
}
function _compileUnsafe(selector, options, context) {
    return _compileToken(typeof selector === "string" ? parse$1(selector) : selector, options, context);
}
function _compileToken(selector, options, context) {
    return compileToken(selector, convertOptionFormats(options), context);
}
function getSelectorFunc(searchFunc) {
    return function select(query, elements, options) {
        const opts = convertOptionFormats(options);
        if (typeof query !== "function") {
            query = _compileUnsafe(query, opts, elements);
        }
        const filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
        return searchFunc(query, filteredElements, opts);
    };
}
function prepareContext(elems, adapter, shouldTestNextSiblings = false) {
    if (shouldTestNextSiblings) {
        elems = appendNextSiblings(elems, adapter);
    }
    return Array.isArray(elems) ? adapter.removeSubsets(elems) : adapter.getChildren(elems);
}
function appendNextSiblings(elem, adapter) {
    const elems = Array.isArray(elem) ? elem.slice(0) : [elem];
    const elemsLength = elems.length;
    for (let i = 0; i < elemsLength; i++) {
        const nextSiblings = getNextSiblings(elems[i], adapter);
        elems.push(...nextSiblings);
    }
    return elems;
}
var selectAll = getSelectorFunc((query, elems, options) => query === boolbaseExports.falseFunc || !elems || elems.length === 0 ? [] : findAll(query, elems, options));
var selectOne = getSelectorFunc((query, elems, options) => query === boolbaseExports.falseFunc || !elems || elems.length === 0 ? null : findOne(query, elems, options));
var htmlDecodeTree = /* @__PURE__ */ new Uint16Array(
// prettier-ignore
/* @__PURE__ */ '\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map((c) => c.charCodeAt(0)));
var xmlDecodeTree = /* @__PURE__ */ new Uint16Array(
// prettier-ignore
/* @__PURE__ */ "\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map((c) => c.charCodeAt(0)));
var _a;
var decodeMap = /* @__PURE__ */ new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376]
]);
var fromCodePoint = (
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, n/no-unsupported-features/es-builtins
(_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function (codePoint) {
    let output = "";
    if (codePoint > 65535) {
        codePoint -= 65536;
        output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
    }
    output += String.fromCharCode(codePoint);
    return output;
});
function replaceCodePoint(codePoint) {
    var _a2;
    if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        return 65533;
    }
    return (_a2 = decodeMap.get(codePoint)) !== null && _a2 !== void 0 ? _a2 : codePoint;
}
var CharCodes$1;
(function (CharCodes2) {
    CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
    CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
    CharCodes2[CharCodes2["EQUALS"] = 61] = "EQUALS";
    CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
    CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
    CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
    CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
    CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
    CharCodes2[CharCodes2["LOWER_Z"] = 122] = "LOWER_Z";
    CharCodes2[CharCodes2["UPPER_A"] = 65] = "UPPER_A";
    CharCodes2[CharCodes2["UPPER_F"] = 70] = "UPPER_F";
    CharCodes2[CharCodes2["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes$1 || (CharCodes$1 = {}));
var TO_LOWER_BIT = 32;
var BinTrieFlags;
(function (BinTrieFlags2) {
    BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
    BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
    BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code) {
    return code >= CharCodes$1.ZERO && code <= CharCodes$1.NINE;
}
function isHexadecimalCharacter(code) {
    return code >= CharCodes$1.UPPER_A && code <= CharCodes$1.UPPER_F || code >= CharCodes$1.LOWER_A && code <= CharCodes$1.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
    return code >= CharCodes$1.UPPER_A && code <= CharCodes$1.UPPER_Z || code >= CharCodes$1.LOWER_A && code <= CharCodes$1.LOWER_Z || isNumber(code);
}
function isEntityInAttributeInvalidEnd(code) {
    return code === CharCodes$1.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function (EntityDecoderState2) {
    EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
    EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
    EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
    EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
    EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function (DecodingMode2) {
    DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
    DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
    DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
var EntityDecoder = class {
    constructor(decodeTree, emitCodePoint, errors) {
        this.decodeTree = decodeTree;
        this.emitCodePoint = emitCodePoint;
        this.errors = errors;
        this.state = EntityDecoderState.EntityStart;
        this.consumed = 1;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.decodeMode = DecodingMode.Strict;
    }
    /** Resets the instance to make it reusable. */
    startEntity(decodeMode) {
        this.decodeMode = decodeMode;
        this.state = EntityDecoderState.EntityStart;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.consumed = 1;
    }
    /**
     * Write an entity to the decoder. This can be called multiple times with partial entities.
     * If the entity is incomplete, the decoder will return -1.
     *
     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
     * entity is incomplete, and resume when the next string is written.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    write(input2, offset) {
        switch (this.state) {
            case EntityDecoderState.EntityStart: {
                if (input2.charCodeAt(offset) === CharCodes$1.NUM) {
                    this.state = EntityDecoderState.NumericStart;
                    this.consumed += 1;
                    return this.stateNumericStart(input2, offset + 1);
                }
                this.state = EntityDecoderState.NamedEntity;
                return this.stateNamedEntity(input2, offset);
            }
            case EntityDecoderState.NumericStart: {
                return this.stateNumericStart(input2, offset);
            }
            case EntityDecoderState.NumericDecimal: {
                return this.stateNumericDecimal(input2, offset);
            }
            case EntityDecoderState.NumericHex: {
                return this.stateNumericHex(input2, offset);
            }
            case EntityDecoderState.NamedEntity: {
                return this.stateNamedEntity(input2, offset);
            }
        }
    }
    /**
     * Switches between the numeric decimal and hexadecimal states.
     *
     * Equivalent to the `Numeric character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNumericStart(input2, offset) {
        if (offset >= input2.length) {
            return -1;
        }
        if ((input2.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes$1.LOWER_X) {
            this.state = EntityDecoderState.NumericHex;
            this.consumed += 1;
            return this.stateNumericHex(input2, offset + 1);
        }
        this.state = EntityDecoderState.NumericDecimal;
        return this.stateNumericDecimal(input2, offset);
    }
    addToNumericResult(input2, start, end, base) {
        if (start !== end) {
            const digitCount = end - start;
            this.result = this.result * Math.pow(base, digitCount) + Number.parseInt(input2.substr(start, digitCount), base);
            this.consumed += digitCount;
        }
    }
    /**
     * Parses a hexadecimal numeric entity.
     *
     * Equivalent to the `Hexademical character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNumericHex(input2, offset) {
        const startIndex = offset;
        while (offset < input2.length) {
            const char = input2.charCodeAt(offset);
            if (isNumber(char) || isHexadecimalCharacter(char)) {
                offset += 1;
            }
            else {
                this.addToNumericResult(input2, startIndex, offset, 16);
                return this.emitNumericEntity(char, 3);
            }
        }
        this.addToNumericResult(input2, startIndex, offset, 16);
        return -1;
    }
    /**
     * Parses a decimal numeric entity.
     *
     * Equivalent to the `Decimal character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNumericDecimal(input2, offset) {
        const startIndex = offset;
        while (offset < input2.length) {
            const char = input2.charCodeAt(offset);
            if (isNumber(char)) {
                offset += 1;
            }
            else {
                this.addToNumericResult(input2, startIndex, offset, 10);
                return this.emitNumericEntity(char, 2);
            }
        }
        this.addToNumericResult(input2, startIndex, offset, 10);
        return -1;
    }
    /**
     * Validate and emit a numeric entity.
     *
     * Implements the logic from the `Hexademical character reference start
     * state` and `Numeric character reference end state` in the HTML spec.
     *
     * @param lastCp The last code point of the entity. Used to see if the
     *               entity was terminated with a semicolon.
     * @param expectedLength The minimum number of characters that should be
     *                       consumed. Used to validate that at least one digit
     *                       was consumed.
     * @returns The number of characters that were consumed.
     */
    emitNumericEntity(lastCp, expectedLength) {
        var _a2;
        if (this.consumed <= expectedLength) {
            (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
        }
        if (lastCp === CharCodes$1.SEMI) {
            this.consumed += 1;
        }
        else if (this.decodeMode === DecodingMode.Strict) {
            return 0;
        }
        this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
        if (this.errors) {
            if (lastCp !== CharCodes$1.SEMI) {
                this.errors.missingSemicolonAfterCharacterReference();
            }
            this.errors.validateNumericCharacterReference(this.result);
        }
        return this.consumed;
    }
    /**
     * Parses a named entity.
     *
     * Equivalent to the `Named character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNamedEntity(input2, offset) {
        const { decodeTree } = this;
        let current = decodeTree[this.treeIndex];
        let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        for (; offset < input2.length; offset++, this.excess++) {
            const char = input2.charCodeAt(offset);
            this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
            if (this.treeIndex < 0) {
                return this.result === 0 || // If we are parsing an attribute
                    this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
                        (valueLength === 0 || // And there should be no invalid characters.
                            isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
            }
            current = decodeTree[this.treeIndex];
            valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
            if (valueLength !== 0) {
                if (char === CharCodes$1.SEMI) {
                    return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
                }
                if (this.decodeMode !== DecodingMode.Strict) {
                    this.result = this.treeIndex;
                    this.consumed += this.excess;
                    this.excess = 0;
                }
            }
        }
        return -1;
    }
    /**
     * Emit a named entity that was not terminated with a semicolon.
     *
     * @returns The number of characters consumed.
     */
    emitNotTerminatedNamedEntity() {
        var _a2;
        const { result: result2, decodeTree } = this;
        const valueLength = (decodeTree[result2] & BinTrieFlags.VALUE_LENGTH) >> 14;
        this.emitNamedEntityData(result2, valueLength, this.consumed);
        (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.missingSemicolonAfterCharacterReference();
        return this.consumed;
    }
    /**
     * Emit a named entity.
     *
     * @param result The index of the entity in the decode tree.
     * @param valueLength The number of bytes in the entity.
     * @param consumed The number of characters consumed.
     *
     * @returns The number of characters consumed.
     */
    emitNamedEntityData(result2, valueLength, consumed) {
        const { decodeTree } = this;
        this.emitCodePoint(valueLength === 1 ? decodeTree[result2] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result2 + 1], consumed);
        if (valueLength === 3) {
            this.emitCodePoint(decodeTree[result2 + 2], consumed);
        }
        return consumed;
    }
    /**
     * Signal to the parser that the end of the input was reached.
     *
     * Remaining data will be emitted and relevant errors will be produced.
     *
     * @returns The number of characters consumed.
     */
    end() {
        var _a2;
        switch (this.state) {
            case EntityDecoderState.NamedEntity: {
                return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
            }
            // Otherwise, emit a numeric entity if we have one.
            case EntityDecoderState.NumericDecimal: {
                return this.emitNumericEntity(0, 2);
            }
            case EntityDecoderState.NumericHex: {
                return this.emitNumericEntity(0, 3);
            }
            case EntityDecoderState.NumericStart: {
                (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.absenceOfDigitsInNumericCharacterReference(this.consumed);
                return 0;
            }
            case EntityDecoderState.EntityStart: {
                return 0;
            }
        }
    }
};
function determineBranch(decodeTree, current, nodeIndex, char) {
    const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
    const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
    if (branchCount === 0) {
        return jumpOffset !== 0 && char === jumpOffset ? nodeIndex : -1;
    }
    if (jumpOffset) {
        const value = char - jumpOffset;
        return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIndex + value] - 1;
    }
    let lo = nodeIndex;
    let hi = lo + branchCount - 1;
    while (lo <= hi) {
        const mid = lo + hi >>> 1;
        const midValue = decodeTree[mid];
        if (midValue < char) {
            lo = mid + 1;
        }
        else if (midValue > char) {
            hi = mid - 1;
        }
        else {
            return decodeTree[mid + branchCount];
        }
    }
    return -1;
}
var CharCodes;
(function (CharCodes2) {
    CharCodes2[CharCodes2["Tab"] = 9] = "Tab";
    CharCodes2[CharCodes2["NewLine"] = 10] = "NewLine";
    CharCodes2[CharCodes2["FormFeed"] = 12] = "FormFeed";
    CharCodes2[CharCodes2["CarriageReturn"] = 13] = "CarriageReturn";
    CharCodes2[CharCodes2["Space"] = 32] = "Space";
    CharCodes2[CharCodes2["ExclamationMark"] = 33] = "ExclamationMark";
    CharCodes2[CharCodes2["Number"] = 35] = "Number";
    CharCodes2[CharCodes2["Amp"] = 38] = "Amp";
    CharCodes2[CharCodes2["SingleQuote"] = 39] = "SingleQuote";
    CharCodes2[CharCodes2["DoubleQuote"] = 34] = "DoubleQuote";
    CharCodes2[CharCodes2["Dash"] = 45] = "Dash";
    CharCodes2[CharCodes2["Slash"] = 47] = "Slash";
    CharCodes2[CharCodes2["Zero"] = 48] = "Zero";
    CharCodes2[CharCodes2["Nine"] = 57] = "Nine";
    CharCodes2[CharCodes2["Semi"] = 59] = "Semi";
    CharCodes2[CharCodes2["Lt"] = 60] = "Lt";
    CharCodes2[CharCodes2["Eq"] = 61] = "Eq";
    CharCodes2[CharCodes2["Gt"] = 62] = "Gt";
    CharCodes2[CharCodes2["Questionmark"] = 63] = "Questionmark";
    CharCodes2[CharCodes2["UpperA"] = 65] = "UpperA";
    CharCodes2[CharCodes2["LowerA"] = 97] = "LowerA";
    CharCodes2[CharCodes2["UpperF"] = 70] = "UpperF";
    CharCodes2[CharCodes2["LowerF"] = 102] = "LowerF";
    CharCodes2[CharCodes2["UpperZ"] = 90] = "UpperZ";
    CharCodes2[CharCodes2["LowerZ"] = 122] = "LowerZ";
    CharCodes2[CharCodes2["LowerX"] = 120] = "LowerX";
    CharCodes2[CharCodes2["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(CharCodes || (CharCodes = {}));
var State;
(function (State2) {
    State2[State2["Text"] = 1] = "Text";
    State2[State2["BeforeTagName"] = 2] = "BeforeTagName";
    State2[State2["InTagName"] = 3] = "InTagName";
    State2[State2["InSelfClosingTag"] = 4] = "InSelfClosingTag";
    State2[State2["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
    State2[State2["InClosingTagName"] = 6] = "InClosingTagName";
    State2[State2["AfterClosingTagName"] = 7] = "AfterClosingTagName";
    State2[State2["BeforeAttributeName"] = 8] = "BeforeAttributeName";
    State2[State2["InAttributeName"] = 9] = "InAttributeName";
    State2[State2["AfterAttributeName"] = 10] = "AfterAttributeName";
    State2[State2["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
    State2[State2["InAttributeValueDq"] = 12] = "InAttributeValueDq";
    State2[State2["InAttributeValueSq"] = 13] = "InAttributeValueSq";
    State2[State2["InAttributeValueNq"] = 14] = "InAttributeValueNq";
    State2[State2["BeforeDeclaration"] = 15] = "BeforeDeclaration";
    State2[State2["InDeclaration"] = 16] = "InDeclaration";
    State2[State2["InProcessingInstruction"] = 17] = "InProcessingInstruction";
    State2[State2["BeforeComment"] = 18] = "BeforeComment";
    State2[State2["CDATASequence"] = 19] = "CDATASequence";
    State2[State2["InSpecialComment"] = 20] = "InSpecialComment";
    State2[State2["InCommentLike"] = 21] = "InCommentLike";
    State2[State2["BeforeSpecialS"] = 22] = "BeforeSpecialS";
    State2[State2["BeforeSpecialT"] = 23] = "BeforeSpecialT";
    State2[State2["SpecialStartSequence"] = 24] = "SpecialStartSequence";
    State2[State2["InSpecialTag"] = 25] = "InSpecialTag";
    State2[State2["InEntity"] = 26] = "InEntity";
})(State || (State = {}));
function isWhitespace(c) {
    return c === CharCodes.Space || c === CharCodes.NewLine || c === CharCodes.Tab || c === CharCodes.FormFeed || c === CharCodes.CarriageReturn;
}
function isEndOfTagSection(c) {
    return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace(c);
}
function isASCIIAlpha(c) {
    return c >= CharCodes.LowerA && c <= CharCodes.LowerZ || c >= CharCodes.UpperA && c <= CharCodes.UpperZ;
}
var QuoteType;
(function (QuoteType2) {
    QuoteType2[QuoteType2["NoValue"] = 0] = "NoValue";
    QuoteType2[QuoteType2["Unquoted"] = 1] = "Unquoted";
    QuoteType2[QuoteType2["Single"] = 2] = "Single";
    QuoteType2[QuoteType2["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
var Sequences = {
    Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
    // CDATA[
    CdataEnd: new Uint8Array([93, 93, 62]),
    // ]]>
    CommentEnd: new Uint8Array([45, 45, 62]),
    // `-->`
    ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
    // `</script`
    StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
    // `</style`
    TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
    // `</title`
    TextareaEnd: new Uint8Array([
        60,
        47,
        116,
        101,
        120,
        116,
        97,
        114,
        101,
        97
    ]),
    // `</textarea`
    XmpEnd: new Uint8Array([60, 47, 120, 109, 112])
    // `</xmp`
};
var Tokenizer = class {
    constructor({ xmlMode = false, decodeEntities = true }, cbs) {
        this.cbs = cbs;
        this.state = State.Text;
        this.buffer = "";
        this.sectionStart = 0;
        this.index = 0;
        this.entityStart = 0;
        this.baseState = State.Text;
        this.isSpecial = false;
        this.running = true;
        this.offset = 0;
        this.currentSequence = void 0;
        this.sequenceIndex = 0;
        this.xmlMode = xmlMode;
        this.decodeEntities = decodeEntities;
        this.entityDecoder = new EntityDecoder(xmlMode ? xmlDecodeTree : htmlDecodeTree, (cp2, consumed) => this.emitCodePoint(cp2, consumed));
    }
    reset() {
        this.state = State.Text;
        this.buffer = "";
        this.sectionStart = 0;
        this.index = 0;
        this.baseState = State.Text;
        this.currentSequence = void 0;
        this.running = true;
        this.offset = 0;
    }
    write(chunk) {
        this.offset += this.buffer.length;
        this.buffer = chunk;
        this.parse();
    }
    end() {
        if (this.running)
            this.finish();
    }
    pause() {
        this.running = false;
    }
    resume() {
        this.running = true;
        if (this.index < this.buffer.length + this.offset) {
            this.parse();
        }
    }
    stateText(c) {
        if (c === CharCodes.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes.Lt)) {
            if (this.index > this.sectionStart) {
                this.cbs.ontext(this.sectionStart, this.index);
            }
            this.state = State.BeforeTagName;
            this.sectionStart = this.index;
        }
        else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
        }
    }
    stateSpecialStartSequence(c) {
        const isEnd = this.sequenceIndex === this.currentSequence.length;
        const isMatch = isEnd ? (
        // If we are at the end of the sequence, make sure the tag name has ended
        isEndOfTagSection(c)) : (
        // Otherwise, do a case-insensitive comparison
        (c | 32) === this.currentSequence[this.sequenceIndex]);
        if (!isMatch) {
            this.isSpecial = false;
        }
        else if (!isEnd) {
            this.sequenceIndex++;
            return;
        }
        this.sequenceIndex = 0;
        this.state = State.InTagName;
        this.stateInTagName(c);
    }
    /** Look for an end tag. For <title> tags, also decode entities. */
    stateInSpecialTag(c) {
        if (this.sequenceIndex === this.currentSequence.length) {
            if (c === CharCodes.Gt || isWhitespace(c)) {
                const endOfText = this.index - this.currentSequence.length;
                if (this.sectionStart < endOfText) {
                    const actualIndex = this.index;
                    this.index = endOfText;
                    this.cbs.ontext(this.sectionStart, endOfText);
                    this.index = actualIndex;
                }
                this.isSpecial = false;
                this.sectionStart = endOfText + 2;
                this.stateInClosingTagName(c);
                return;
            }
            this.sequenceIndex = 0;
        }
        if ((c | 32) === this.currentSequence[this.sequenceIndex]) {
            this.sequenceIndex += 1;
        }
        else if (this.sequenceIndex === 0) {
            if (this.currentSequence === Sequences.TitleEnd) {
                if (this.decodeEntities && c === CharCodes.Amp) {
                    this.startEntity();
                }
            }
            else if (this.fastForwardTo(CharCodes.Lt)) {
                this.sequenceIndex = 1;
            }
        }
        else {
            this.sequenceIndex = Number(c === CharCodes.Lt);
        }
    }
    stateCDATASequence(c) {
        if (c === Sequences.Cdata[this.sequenceIndex]) {
            if (++this.sequenceIndex === Sequences.Cdata.length) {
                this.state = State.InCommentLike;
                this.currentSequence = Sequences.CdataEnd;
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
            }
        }
        else {
            this.sequenceIndex = 0;
            this.state = State.InDeclaration;
            this.stateInDeclaration(c);
        }
    }
    /**
     * When we wait for one specific character, we can speed things up
     * by skipping through the buffer until we find it.
     *
     * @returns Whether the character was found.
     */
    fastForwardTo(c) {
        while (++this.index < this.buffer.length + this.offset) {
            if (this.buffer.charCodeAt(this.index - this.offset) === c) {
                return true;
            }
        }
        this.index = this.buffer.length + this.offset - 1;
        return false;
    }
    /**
     * Comments and CDATA end with `-->` and `]]>`.
     *
     * Their common qualities are:
     * - Their end sequences have a distinct character they start with.
     * - That character is then repeated, so we have to check multiple repeats.
     * - All characters but the start character of the sequence can be skipped.
     */
    stateInCommentLike(c) {
        if (c === this.currentSequence[this.sequenceIndex]) {
            if (++this.sequenceIndex === this.currentSequence.length) {
                if (this.currentSequence === Sequences.CdataEnd) {
                    this.cbs.oncdata(this.sectionStart, this.index, 2);
                }
                else {
                    this.cbs.oncomment(this.sectionStart, this.index, 2);
                }
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
                this.state = State.Text;
            }
        }
        else if (this.sequenceIndex === 0) {
            if (this.fastForwardTo(this.currentSequence[0])) {
                this.sequenceIndex = 1;
            }
        }
        else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
            this.sequenceIndex = 0;
        }
    }
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     */
    isTagStartChar(c) {
        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
    }
    startSpecial(sequence, offset) {
        this.isSpecial = true;
        this.currentSequence = sequence;
        this.sequenceIndex = offset;
        this.state = State.SpecialStartSequence;
    }
    stateBeforeTagName(c) {
        if (c === CharCodes.ExclamationMark) {
            this.state = State.BeforeDeclaration;
            this.sectionStart = this.index + 1;
        }
        else if (c === CharCodes.Questionmark) {
            this.state = State.InProcessingInstruction;
            this.sectionStart = this.index + 1;
        }
        else if (this.isTagStartChar(c)) {
            const lower = c | 32;
            this.sectionStart = this.index;
            if (this.xmlMode) {
                this.state = State.InTagName;
            }
            else if (lower === Sequences.ScriptEnd[2]) {
                this.state = State.BeforeSpecialS;
            }
            else if (lower === Sequences.TitleEnd[2] || lower === Sequences.XmpEnd[2]) {
                this.state = State.BeforeSpecialT;
            }
            else {
                this.state = State.InTagName;
            }
        }
        else if (c === CharCodes.Slash) {
            this.state = State.BeforeClosingTagName;
        }
        else {
            this.state = State.Text;
            this.stateText(c);
        }
    }
    stateInTagName(c) {
        if (isEndOfTagSection(c)) {
            this.cbs.onopentagname(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateBeforeClosingTagName(c) {
        if (isWhitespace(c))
            ;
        else if (c === CharCodes.Gt) {
            this.state = State.Text;
        }
        else {
            this.state = this.isTagStartChar(c) ? State.InClosingTagName : State.InSpecialComment;
            this.sectionStart = this.index;
        }
    }
    stateInClosingTagName(c) {
        if (c === CharCodes.Gt || isWhitespace(c)) {
            this.cbs.onclosetag(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.AfterClosingTagName;
            this.stateAfterClosingTagName(c);
        }
    }
    stateAfterClosingTagName(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeAttributeName(c) {
        if (c === CharCodes.Gt) {
            this.cbs.onopentagend(this.index);
            if (this.isSpecial) {
                this.state = State.InSpecialTag;
                this.sequenceIndex = 0;
            }
            else {
                this.state = State.Text;
            }
            this.sectionStart = this.index + 1;
        }
        else if (c === CharCodes.Slash) {
            this.state = State.InSelfClosingTag;
        }
        else if (!isWhitespace(c)) {
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateInSelfClosingTag(c) {
        if (c === CharCodes.Gt) {
            this.cbs.onselfclosingtag(this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
            this.isSpecial = false;
        }
        else if (!isWhitespace(c)) {
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateInAttributeName(c) {
        if (c === CharCodes.Eq || isEndOfTagSection(c)) {
            this.cbs.onattribname(this.sectionStart, this.index);
            this.sectionStart = this.index;
            this.state = State.AfterAttributeName;
            this.stateAfterAttributeName(c);
        }
    }
    stateAfterAttributeName(c) {
        if (c === CharCodes.Eq) {
            this.state = State.BeforeAttributeValue;
        }
        else if (c === CharCodes.Slash || c === CharCodes.Gt) {
            this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
            this.sectionStart = -1;
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
        else if (!isWhitespace(c)) {
            this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateBeforeAttributeValue(c) {
        if (c === CharCodes.DoubleQuote) {
            this.state = State.InAttributeValueDq;
            this.sectionStart = this.index + 1;
        }
        else if (c === CharCodes.SingleQuote) {
            this.state = State.InAttributeValueSq;
            this.sectionStart = this.index + 1;
        }
        else if (!isWhitespace(c)) {
            this.sectionStart = this.index;
            this.state = State.InAttributeValueNq;
            this.stateInAttributeValueNoQuotes(c);
        }
    }
    handleInAttributeValue(c, quote) {
        if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(quote === CharCodes.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index + 1);
            this.state = State.BeforeAttributeName;
        }
        else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
        }
    }
    stateInAttributeValueDoubleQuotes(c) {
        this.handleInAttributeValue(c, CharCodes.DoubleQuote);
    }
    stateInAttributeValueSingleQuotes(c) {
        this.handleInAttributeValue(c, CharCodes.SingleQuote);
    }
    stateInAttributeValueNoQuotes(c) {
        if (isWhitespace(c) || c === CharCodes.Gt) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(QuoteType.Unquoted, this.index);
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
        else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
        }
    }
    stateBeforeDeclaration(c) {
        if (c === CharCodes.OpeningSquareBracket) {
            this.state = State.CDATASequence;
            this.sequenceIndex = 0;
        }
        else {
            this.state = c === CharCodes.Dash ? State.BeforeComment : State.InDeclaration;
        }
    }
    stateInDeclaration(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.ondeclaration(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateInProcessingInstruction(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.onprocessinginstruction(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeComment(c) {
        if (c === CharCodes.Dash) {
            this.state = State.InCommentLike;
            this.currentSequence = Sequences.CommentEnd;
            this.sequenceIndex = 2;
            this.sectionStart = this.index + 1;
        }
        else {
            this.state = State.InDeclaration;
        }
    }
    stateInSpecialComment(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.oncomment(this.sectionStart, this.index, 0);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeSpecialS(c) {
        const lower = c | 32;
        if (lower === Sequences.ScriptEnd[3]) {
            this.startSpecial(Sequences.ScriptEnd, 4);
        }
        else if (lower === Sequences.StyleEnd[3]) {
            this.startSpecial(Sequences.StyleEnd, 4);
        }
        else {
            this.state = State.InTagName;
            this.stateInTagName(c);
        }
    }
    stateBeforeSpecialT(c) {
        const lower = c | 32;
        switch (lower) {
            case Sequences.TitleEnd[3]: {
                this.startSpecial(Sequences.TitleEnd, 4);
                break;
            }
            case Sequences.TextareaEnd[3]: {
                this.startSpecial(Sequences.TextareaEnd, 4);
                break;
            }
            case Sequences.XmpEnd[3]: {
                this.startSpecial(Sequences.XmpEnd, 4);
                break;
            }
            default: {
                this.state = State.InTagName;
                this.stateInTagName(c);
            }
        }
    }
    startEntity() {
        this.baseState = this.state;
        this.state = State.InEntity;
        this.entityStart = this.index;
        this.entityDecoder.startEntity(this.xmlMode ? DecodingMode.Strict : this.baseState === State.Text || this.baseState === State.InSpecialTag ? DecodingMode.Legacy : DecodingMode.Attribute);
    }
    stateInEntity() {
        const length = this.entityDecoder.write(this.buffer, this.index - this.offset);
        if (length >= 0) {
            this.state = this.baseState;
            if (length === 0) {
                this.index = this.entityStart;
            }
        }
        else {
            this.index = this.offset + this.buffer.length - 1;
        }
    }
    /**
     * Remove data that has already been consumed from the buffer.
     */
    cleanup() {
        if (this.running && this.sectionStart !== this.index) {
            if (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
                this.cbs.ontext(this.sectionStart, this.index);
                this.sectionStart = this.index;
            }
            else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
                this.cbs.onattribdata(this.sectionStart, this.index);
                this.sectionStart = this.index;
            }
        }
    }
    shouldContinue() {
        return this.index < this.buffer.length + this.offset && this.running;
    }
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */
    parse() {
        while (this.shouldContinue()) {
            const c = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
                case State.Text: {
                    this.stateText(c);
                    break;
                }
                case State.SpecialStartSequence: {
                    this.stateSpecialStartSequence(c);
                    break;
                }
                case State.InSpecialTag: {
                    this.stateInSpecialTag(c);
                    break;
                }
                case State.CDATASequence: {
                    this.stateCDATASequence(c);
                    break;
                }
                case State.InAttributeValueDq: {
                    this.stateInAttributeValueDoubleQuotes(c);
                    break;
                }
                case State.InAttributeName: {
                    this.stateInAttributeName(c);
                    break;
                }
                case State.InCommentLike: {
                    this.stateInCommentLike(c);
                    break;
                }
                case State.InSpecialComment: {
                    this.stateInSpecialComment(c);
                    break;
                }
                case State.BeforeAttributeName: {
                    this.stateBeforeAttributeName(c);
                    break;
                }
                case State.InTagName: {
                    this.stateInTagName(c);
                    break;
                }
                case State.InClosingTagName: {
                    this.stateInClosingTagName(c);
                    break;
                }
                case State.BeforeTagName: {
                    this.stateBeforeTagName(c);
                    break;
                }
                case State.AfterAttributeName: {
                    this.stateAfterAttributeName(c);
                    break;
                }
                case State.InAttributeValueSq: {
                    this.stateInAttributeValueSingleQuotes(c);
                    break;
                }
                case State.BeforeAttributeValue: {
                    this.stateBeforeAttributeValue(c);
                    break;
                }
                case State.BeforeClosingTagName: {
                    this.stateBeforeClosingTagName(c);
                    break;
                }
                case State.AfterClosingTagName: {
                    this.stateAfterClosingTagName(c);
                    break;
                }
                case State.BeforeSpecialS: {
                    this.stateBeforeSpecialS(c);
                    break;
                }
                case State.BeforeSpecialT: {
                    this.stateBeforeSpecialT(c);
                    break;
                }
                case State.InAttributeValueNq: {
                    this.stateInAttributeValueNoQuotes(c);
                    break;
                }
                case State.InSelfClosingTag: {
                    this.stateInSelfClosingTag(c);
                    break;
                }
                case State.InDeclaration: {
                    this.stateInDeclaration(c);
                    break;
                }
                case State.BeforeDeclaration: {
                    this.stateBeforeDeclaration(c);
                    break;
                }
                case State.BeforeComment: {
                    this.stateBeforeComment(c);
                    break;
                }
                case State.InProcessingInstruction: {
                    this.stateInProcessingInstruction(c);
                    break;
                }
                case State.InEntity: {
                    this.stateInEntity();
                    break;
                }
            }
            this.index++;
        }
        this.cleanup();
    }
    finish() {
        if (this.state === State.InEntity) {
            this.entityDecoder.end();
            this.state = this.baseState;
        }
        this.handleTrailingData();
        this.cbs.onend();
    }
    /** Handle any trailing data. */
    handleTrailingData() {
        const endIndex = this.buffer.length + this.offset;
        if (this.sectionStart >= endIndex) {
            return;
        }
        if (this.state === State.InCommentLike) {
            if (this.currentSequence === Sequences.CdataEnd) {
                this.cbs.oncdata(this.sectionStart, endIndex, 0);
            }
            else {
                this.cbs.oncomment(this.sectionStart, endIndex, 0);
            }
        }
        else if (this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName)
            ;
        else {
            this.cbs.ontext(this.sectionStart, endIndex);
        }
    }
    emitCodePoint(cp2, consumed) {
        if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
            if (this.sectionStart < this.entityStart) {
                this.cbs.onattribdata(this.sectionStart, this.entityStart);
            }
            this.sectionStart = this.entityStart + consumed;
            this.index = this.sectionStart - 1;
            this.cbs.onattribentity(cp2);
        }
        else {
            if (this.sectionStart < this.entityStart) {
                this.cbs.ontext(this.sectionStart, this.entityStart);
            }
            this.sectionStart = this.entityStart + consumed;
            this.index = this.sectionStart - 1;
            this.cbs.ontextentity(cp2, this.sectionStart);
        }
    }
};
var formTags = /* @__PURE__ */ new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea"
]);
var pTag = /* @__PURE__ */ new Set(["p"]);
var tableSectionTags = /* @__PURE__ */ new Set(["thead", "tbody"]);
var ddtTags = /* @__PURE__ */ new Set(["dd", "dt"]);
var rtpTags = /* @__PURE__ */ new Set(["rt", "rp"]);
var openImpliesClose = /* @__PURE__ */ new Map([
    ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
    ["th", /* @__PURE__ */ new Set(["th"])],
    ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
    ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
    ["li", /* @__PURE__ */ new Set(["li"])],
    ["p", pTag],
    ["h1", pTag],
    ["h2", pTag],
    ["h3", pTag],
    ["h4", pTag],
    ["h5", pTag],
    ["h6", pTag],
    ["select", formTags],
    ["input", formTags],
    ["output", formTags],
    ["button", formTags],
    ["datalist", formTags],
    ["textarea", formTags],
    ["option", /* @__PURE__ */ new Set(["option"])],
    ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
    ["dd", ddtTags],
    ["dt", ddtTags],
    ["address", pTag],
    ["article", pTag],
    ["aside", pTag],
    ["blockquote", pTag],
    ["details", pTag],
    ["div", pTag],
    ["dl", pTag],
    ["fieldset", pTag],
    ["figcaption", pTag],
    ["figure", pTag],
    ["footer", pTag],
    ["form", pTag],
    ["header", pTag],
    ["hr", pTag],
    ["main", pTag],
    ["nav", pTag],
    ["ol", pTag],
    ["pre", pTag],
    ["section", pTag],
    ["table", pTag],
    ["ul", pTag],
    ["rt", rtpTags],
    ["rp", rtpTags],
    ["tbody", tableSectionTags],
    ["tfoot", tableSectionTags]
]);
var voidElements = /* @__PURE__ */ new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]);
var foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]);
var htmlIntegrationElements = /* @__PURE__ */ new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title"
]);
var reNameEnd = /\s|\//;
var Parser = class {
    constructor(cbs, options = {}) {
        var _a2, _b, _c, _d, _e, _f;
        this.options = options;
        this.startIndex = 0;
        this.endIndex = 0;
        this.openTagStart = 0;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.buffers = [];
        this.bufferOffset = 0;
        this.writeIndex = 0;
        this.ended = false;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.htmlMode = !this.options.xmlMode;
        this.lowerCaseTagNames = (_a2 = options.lowerCaseTags) !== null && _a2 !== void 0 ? _a2 : this.htmlMode;
        this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : this.htmlMode;
        this.recognizeSelfClosing = (_c = options.recognizeSelfClosing) !== null && _c !== void 0 ? _c : !this.htmlMode;
        this.tokenizer = new ((_d = options.Tokenizer) !== null && _d !== void 0 ? _d : Tokenizer)(this.options, this);
        this.foreignContext = [!this.htmlMode];
        (_f = (_e = this.cbs).onparserinit) === null || _f === void 0 ? void 0 : _f.call(_e, this);
    }
    // Tokenizer event handlers
    /** @internal */
    ontext(start, endIndex) {
        var _a2, _b;
        const data = this.getSlice(start, endIndex);
        this.endIndex = endIndex - 1;
        (_b = (_a2 = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a2, data);
        this.startIndex = endIndex;
    }
    /** @internal */
    ontextentity(cp2, endIndex) {
        var _a2, _b;
        this.endIndex = endIndex - 1;
        (_b = (_a2 = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a2, fromCodePoint(cp2));
        this.startIndex = endIndex;
    }
    /**
     * Checks if the current tag is a void element. Override this if you want
     * to specify your own additional void elements.
     */
    isVoidElement(name) {
        return this.htmlMode && voidElements.has(name);
    }
    /** @internal */
    onopentagname(start, endIndex) {
        this.endIndex = endIndex;
        let name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        this.emitOpenTag(name);
    }
    emitOpenTag(name) {
        var _a2, _b, _c, _d;
        this.openTagStart = this.startIndex;
        this.tagname = name;
        const impliesClose = this.htmlMode && openImpliesClose.get(name);
        if (impliesClose) {
            while (this.stack.length > 0 && impliesClose.has(this.stack[0])) {
                const element = this.stack.shift();
                (_b = (_a2 = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a2, element, true);
            }
        }
        if (!this.isVoidElement(name)) {
            this.stack.unshift(name);
            if (this.htmlMode) {
                if (foreignContextElements.has(name)) {
                    this.foreignContext.unshift(true);
                }
                else if (htmlIntegrationElements.has(name)) {
                    this.foreignContext.unshift(false);
                }
            }
        }
        (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
        if (this.cbs.onopentag)
            this.attribs = {};
    }
    endOpenTag(isImplied) {
        var _a2, _b;
        this.startIndex = this.openTagStart;
        if (this.attribs) {
            (_b = (_a2 = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a2, this.tagname, this.attribs, isImplied);
            this.attribs = null;
        }
        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
            this.cbs.onclosetag(this.tagname, true);
        }
        this.tagname = "";
    }
    /** @internal */
    onopentagend(endIndex) {
        this.endIndex = endIndex;
        this.endOpenTag(false);
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onclosetag(start, endIndex) {
        var _a2, _b, _c, _d, _e, _f, _g, _h;
        this.endIndex = endIndex;
        let name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        if (this.htmlMode && (foreignContextElements.has(name) || htmlIntegrationElements.has(name))) {
            this.foreignContext.shift();
        }
        if (!this.isVoidElement(name)) {
            const pos = this.stack.indexOf(name);
            if (pos !== -1) {
                for (let index = 0; index <= pos; index++) {
                    const element = this.stack.shift();
                    (_b = (_a2 = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a2, element, index !== pos);
                }
            }
            else if (this.htmlMode && name === "p") {
                this.emitOpenTag("p");
                this.closeCurrentTag(true);
            }
        }
        else if (this.htmlMode && name === "br") {
            (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, "br");
            (_f = (_e = this.cbs).onopentag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", {}, true);
            (_h = (_g = this.cbs).onclosetag) === null || _h === void 0 ? void 0 : _h.call(_g, "br", false);
        }
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onselfclosingtag(endIndex) {
        this.endIndex = endIndex;
        if (this.recognizeSelfClosing || this.foreignContext[0]) {
            this.closeCurrentTag(false);
            this.startIndex = endIndex + 1;
        }
        else {
            this.onopentagend(endIndex);
        }
    }
    closeCurrentTag(isOpenImplied) {
        var _a2, _b;
        const name = this.tagname;
        this.endOpenTag(isOpenImplied);
        if (this.stack[0] === name) {
            (_b = (_a2 = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a2, name, !isOpenImplied);
            this.stack.shift();
        }
    }
    /** @internal */
    onattribname(start, endIndex) {
        this.startIndex = start;
        const name = this.getSlice(start, endIndex);
        this.attribname = this.lowerCaseAttributeNames ? name.toLowerCase() : name;
    }
    /** @internal */
    onattribdata(start, endIndex) {
        this.attribvalue += this.getSlice(start, endIndex);
    }
    /** @internal */
    onattribentity(cp2) {
        this.attribvalue += fromCodePoint(cp2);
    }
    /** @internal */
    onattribend(quote, endIndex) {
        var _a2, _b;
        this.endIndex = endIndex;
        (_b = (_a2 = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a2, this.attribname, this.attribvalue, quote === QuoteType.Double ? '"' : quote === QuoteType.Single ? "'" : quote === QuoteType.NoValue ? void 0 : null);
        if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribvalue = "";
    }
    getInstructionName(value) {
        const index = value.search(reNameEnd);
        let name = index < 0 ? value : value.substr(0, index);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        return name;
    }
    /** @internal */
    ondeclaration(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`!${name}`, `!${value}`);
        }
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onprocessinginstruction(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`?${name}`, `?${value}`);
        }
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    oncomment(start, endIndex, offset) {
        var _a2, _b, _c, _d;
        this.endIndex = endIndex;
        (_b = (_a2 = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a2, this.getSlice(start, endIndex - offset));
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    oncdata(start, endIndex, offset) {
        var _a2, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex - offset);
        if (!this.htmlMode || this.options.recognizeCDATA) {
            (_b = (_a2 = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a2);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
        }
        else {
            (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, `[CDATA[${value}]]`);
            (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
        }
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onend() {
        var _a2, _b;
        if (this.cbs.onclosetag) {
            this.endIndex = this.startIndex;
            for (let index = 0; index < this.stack.length; index++) {
                this.cbs.onclosetag(this.stack[index], true);
            }
        }
        (_b = (_a2 = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a2);
    }
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */
    reset() {
        var _a2, _b, _c, _d;
        (_b = (_a2 = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a2);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack.length = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
        this.buffers.length = 0;
        this.foreignContext.length = 0;
        this.foreignContext.unshift(!this.htmlMode);
        this.bufferOffset = 0;
        this.writeIndex = 0;
        this.ended = false;
    }
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */
    parseComplete(data) {
        this.reset();
        this.end(data);
    }
    getSlice(start, end) {
        while (start - this.bufferOffset >= this.buffers[0].length) {
            this.shiftBuffer();
        }
        let slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
        while (end - this.bufferOffset > this.buffers[0].length) {
            this.shiftBuffer();
            slice += this.buffers[0].slice(0, end - this.bufferOffset);
        }
        return slice;
    }
    shiftBuffer() {
        this.bufferOffset += this.buffers[0].length;
        this.writeIndex--;
        this.buffers.shift();
    }
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */
    write(chunk) {
        var _a2, _b;
        if (this.ended) {
            (_b = (_a2 = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a2, new Error(".write() after done!"));
            return;
        }
        this.buffers.push(chunk);
        if (this.tokenizer.running) {
            this.tokenizer.write(chunk);
            this.writeIndex++;
        }
    }
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */
    end(chunk) {
        var _a2, _b;
        if (this.ended) {
            (_b = (_a2 = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a2, new Error(".end() after done!"));
            return;
        }
        if (chunk)
            this.write(chunk);
        this.ended = true;
        this.tokenizer.end();
    }
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */
    pause() {
        this.tokenizer.pause();
    }
    /**
     * Resumes parsing after `pause` was called.
     */
    resume() {
        this.tokenizer.resume();
        while (this.tokenizer.running && this.writeIndex < this.buffers.length) {
            this.tokenizer.write(this.buffers[this.writeIndex++]);
        }
        if (this.ended)
            this.tokenizer.end();
    }
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */
    parseChunk(chunk) {
        this.write(chunk);
    }
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */
    done(chunk) {
        this.end(chunk);
    }
};
function parseDocument(data, options) {
    const handler = new DomHandler(void 0, options);
    new Parser(handler, options).end(data);
    return handler.root;
}
var picocolors_browserExports = /* @__PURE__ */ requirePicocolors_browser();
var pc = /* @__PURE__ */ getDefaultExportFromCjs(picocolors_browserExports);
function parseStylesheet(stylesheet) {
    return parse$2(stylesheet);
}
function serializeStylesheet(ast, options) {
    const cssParts = [];
    stringify(ast, (result2, node2, type) => {
        if (node2?.type === "decl" && node2.value.includes("</style>")) {
            return;
        }
        if (!options.compress) {
            cssParts.push(result2);
            return;
        }
        if (node2?.type === "comment")
            return;
        if (node2?.type === "decl") {
            const prefix = node2.prop + node2.raws.between;
            cssParts.push(result2.replace(prefix, prefix.trim()));
            return;
        }
        if (type === "start") {
            if (node2?.type === "rule" && node2.selectors) {
                if (node2.selectors.length === 1) {
                    cssParts.push(node2.selectors[0] ?? "", "{");
                }
                else {
                    cssParts.push(node2.selectors.join(","), "{");
                }
            }
            else {
                cssParts.push(result2.trim());
            }
            return;
        }
        if (type === "end" && result2 === "}" && node2?.raws?.semicolon) {
            const lastItemIdx = cssParts.length - 2;
            if (lastItemIdx >= 0 && cssParts[lastItemIdx]) {
                cssParts[lastItemIdx] = cssParts[lastItemIdx].slice(0, -1);
            }
        }
        cssParts.push(result2.trim());
    });
    return cssParts.join("");
}
function markOnly(predicate) {
    return (rule2) => {
        const sel = "selectors" in rule2 ? rule2.selectors : void 0;
        if (predicate(rule2) === false) {
            rule2.$$remove = true;
        }
        if ("selectors" in rule2) {
            rule2.$$markedSelectors = rule2.selectors;
            rule2.selectors = sel;
        }
        if (rule2._other) {
            rule2._other.$$markedSelectors = rule2._other.selectors;
        }
    };
}
function applyMarkedSelectors(rule2) {
    if (rule2.$$markedSelectors) {
        rule2.selectors = rule2.$$markedSelectors;
    }
    if (rule2._other) {
        applyMarkedSelectors(rule2._other);
    }
}
function walkStyleRules(node2, iterator) {
    if (!("nodes" in node2)) {
        return;
    }
    node2.nodes = node2.nodes?.filter((rule2) => {
        if (hasNestedRules(rule2)) {
            walkStyleRules(rule2, iterator);
        }
        rule2._other = void 0;
        rule2.filterSelectors = filterSelectors;
        return iterator(rule2) !== false;
    });
}
function walkStyleRulesWithReverseMirror(node2, node22, iterator) {
    if (!node22)
        return walkStyleRules(node2, iterator);
    [node2.nodes, node22.nodes] = splitFilter(node2.nodes, node22.nodes, (rule2, index, _rules, rules2) => {
        const rule22 = rules2?.[index];
        if (hasNestedRules(rule2)) {
            walkStyleRulesWithReverseMirror(rule2, rule22, iterator);
        }
        rule2._other = rule22;
        rule2.filterSelectors = filterSelectors;
        return iterator(rule2) !== false;
    });
}
function hasNestedRules(rule2) {
    return "nodes" in rule2 && !!rule2.nodes?.length && (!("name" in rule2) || rule2.name !== "keyframes" && rule2.name !== "-webkit-keyframes") && rule2.nodes.some((n) => n.type === "rule" || n.type === "atrule");
}
function splitFilter(a, b, predicate) {
    const aOut = [];
    const bOut = [];
    for (let index = 0; index < a.length; index++) {
        const item = a[index];
        if (predicate(item, index, a, b)) {
            aOut.push(item);
        }
        else {
            bOut.push(item);
        }
    }
    return [aOut, bOut];
}
function filterSelectors(predicate) {
    if (this._other) {
        const [a, b] = splitFilter(this.selectors, this._other.selectors, predicate);
        this.selectors = a;
        this._other.selectors = b;
    }
    else {
        this.selectors = this.selectors.filter(predicate);
    }
}
var MEDIA_TYPES = /* @__PURE__ */ new Set(["all", "print", "screen", "speech"]);
var MEDIA_KEYWORDS = /* @__PURE__ */ new Set(["and", "not", ","]);
var MEDIA_FEATURES = new Set([
    "width",
    "aspect-ratio",
    "color",
    "color-index",
    "grid",
    "height",
    "monochrome",
    "orientation",
    "resolution",
    "scan"
].flatMap((feature) => [feature, `min-${feature}`, `max-${feature}`]));
function validateMediaType(node2) {
    const { type: nodeType, value: nodeValue } = node2;
    if (nodeType === "media-type") {
        return MEDIA_TYPES.has(nodeValue);
    }
    else if (nodeType === "keyword") {
        return MEDIA_KEYWORDS.has(nodeValue);
    }
    else if (nodeType === "media-feature") {
        return MEDIA_FEATURES.has(nodeValue);
    }
}
function validateMediaQuery(query) {
    const mediaParserFn = "default" in mediaParser ? mediaParser.default : mediaParser;
    const mediaTree = mediaParserFn(query);
    const nodeTypes = /* @__PURE__ */ new Set(["media-type", "keyword", "media-feature"]);
    const stack = [mediaTree];
    while (stack.length > 0) {
        const node2 = stack.pop();
        if (nodeTypes.has(node2.type) && !validateMediaType(node2)) {
            return false;
        }
        if (node2.nodes) {
            stack.push(...node2.nodes);
        }
    }
    return true;
}
var classCache = null;
var idCache = null;
function buildCache(container2) {
    classCache = /* @__PURE__ */ new Set();
    idCache = /* @__PURE__ */ new Set();
    const queue = [container2];
    while (queue.length) {
        const node2 = queue.shift();
        if (node2.hasAttribute?.("class")) {
            const classList = node2.getAttribute("class").trim().split(" ");
            classList.forEach((cls) => {
                classCache.add(cls);
            });
        }
        if (node2.hasAttribute?.("id")) {
            const id = node2.getAttribute("id").trim();
            idCache.add(id);
        }
        if ("children" in node2) {
            queue.push(...node2.children.filter((child) => child.type === "tag"));
        }
    }
}
function createDocument(html) {
    const document2 = parseDocument(html, { decodeEntities: false });
    extendDocument(document2);
    extendElement(Element.prototype);
    let beastiesContainer = document2.querySelector("[data-beasties-container]");
    if (!beastiesContainer) {
        document2.documentElement?.setAttribute("data-beasties-container", "");
        beastiesContainer = document2.documentElement || document2;
    }
    document2.beastiesContainer = beastiesContainer;
    buildCache(beastiesContainer);
    return document2;
}
function serializeDocument(document2) {
    return render(document2, { decodeEntities: false });
}
var extended = false;
function extendElement(element) {
    if (extended) {
        return;
    }
    extended = true;
    Object.defineProperties(element, {
        nodeName: {
            get() {
                return this.tagName.toUpperCase();
            }
        },
        id: {
            get() {
                return this.getAttribute("id");
            },
            set(value) {
                this.setAttribute("id", value);
            }
        },
        className: {
            get() {
                return this.getAttribute("class");
            },
            set(value) {
                this.setAttribute("class", value);
            }
        },
        insertBefore: {
            value(child, referenceNode) {
                if (!referenceNode)
                    return this.appendChild(child);
                prepend(referenceNode, child);
                return child;
            }
        },
        appendChild: {
            value(child) {
                appendChild(this, child);
                return child;
            }
        },
        removeChild: {
            value(child) {
                removeElement(child);
            }
        },
        remove: {
            value() {
                removeElement(this);
            }
        },
        textContent: {
            get() {
                return getText(this);
            },
            set(text) {
                this.children = [];
                appendChild(this, new Text(text));
            }
        },
        setAttribute: {
            value(name, value) {
                if (this.attribs == null)
                    this.attribs = {};
                if (value == null)
                    value = "";
                this.attribs[name] = value;
            }
        },
        removeAttribute: {
            value(name) {
                if (this.attribs != null) {
                    delete this.attribs[name];
                }
            }
        },
        getAttribute: {
            value(name) {
                return this.attribs != null && this.attribs[name];
            }
        },
        hasAttribute: {
            value(name) {
                return this.attribs != null && this.attribs[name] != null;
            }
        },
        getAttributeNode: {
            value(name) {
                const value = this.getAttribute(name);
                if (value != null)
                    return { specified: true, value };
            }
        },
        exists: {
            value(sel) {
                return cachedQuerySelector(sel, this);
            }
        },
        querySelector: {
            value(sel) {
                return selectOne(sel, this);
            }
        },
        querySelectorAll: {
            value(sel) {
                return selectAll(sel, this);
            }
        }
    });
}
function extendDocument(document2) {
    Object.defineProperties(document2, {
        // document is just an Element in htmlparser2, giving it a nodeType of ELEMENT_NODE.
        // TODO: verify if these are needed for css-select
        nodeType: {
            get() {
                return 9;
            }
        },
        contentType: {
            get() {
                return "text/html";
            }
        },
        nodeName: {
            get() {
                return "#document";
            }
        },
        documentElement: {
            get() {
                return this.children.find((child) => "tagName" in child && String(child.tagName).toLowerCase() === "html");
            }
        },
        head: {
            get() {
                return this.querySelector("head");
            }
        },
        body: {
            get() {
                return this.querySelector("body");
            }
        },
        createElement: {
            value(name) {
                return new Element(name, {});
            }
        },
        createTextNode: {
            value(text) {
                return new Text(text);
            }
        },
        exists: {
            value(sel) {
                return cachedQuerySelector(sel, this);
            }
        },
        querySelector: {
            value(sel) {
                return selectOne(sel, this);
            }
        },
        querySelectorAll: {
            value(sel) {
                if (sel === ":root") {
                    return this;
                }
                return selectAll(sel, this);
            }
        }
    });
}
var selectorTokensCache = /* @__PURE__ */ new Map();
function cachedQuerySelector(sel, node2) {
    let selectorTokens = selectorTokensCache.get(sel);
    if (selectorTokens === void 0) {
        selectorTokens = parseRelevantSelectors(sel);
        selectorTokensCache.set(sel, selectorTokens);
    }
    if (selectorTokens) {
        for (const token of selectorTokens) {
            if (token.name === "class") {
                return classCache.has(token.value);
            }
            if (token.name === "id") {
                return idCache.has(token.value);
            }
        }
    }
    return !!selectOne(sel, node2);
}
function parseRelevantSelectors(sel) {
    const tokens = parse$1(sel);
    const relevantTokens = [];
    for (let i = 0; i < tokens.length; i++) {
        const tokenGroup = tokens[i];
        if (tokenGroup?.length !== 1) {
            continue;
        }
        const token = tokenGroup[0];
        if (token?.type === "attribute" && (token.name === "class" || token.name === "id")) {
            relevantTokens.push(token);
        }
    }
    return relevantTokens.length > 0 ? relevantTokens : null;
}
var LOG_LEVELS = ["trace", "debug", "info", "warn", "error", "silent"];
var defaultLogger = {
    trace(msg) {
        console.trace(msg);
    },
    debug(msg) {
        console.debug(msg);
    },
    warn(msg) {
        console.warn(pc.yellow(msg));
    },
    error(msg) {
        console.error(pc.bold(pc.red(msg)));
    },
    info(msg) {
        console.info(pc.bold(pc.blue(msg)));
    },
    silent() {
    }
};
function createLogger(logLevel) {
    const logLevelIdx = LOG_LEVELS.indexOf(logLevel);
    return LOG_LEVELS.reduce((logger, type, index) => {
        if (index >= logLevelIdx) {
            logger[type] = defaultLogger[type];
        }
        else {
            logger[type] = defaultLogger.silent;
        }
        return logger;
    }, {});
}
function isSubpath(basePath, currentPath) {
    return !_pathModule.relative(basePath, currentPath).startsWith("..");
}
var removePseudoClassesAndElementsPattern = new RegExp("(?<!\\\\)::?[a-z-]+(?:\\(.+\\))?", "gi");
var implicitUniversalPattern = /([>+~])\s*(?!\1)([>+~])/g;
var emptyCombinatorPattern = /([>+~])\s*(?=\1|$)/g;
var removeTrailingCommasPattern = /\(\s*,|,\s*\)/g;
var Beasties = class {
    #selectorCache = /* @__PURE__ */ new Map();
    options;
    logger;
    fs;
    constructor(options = {}) {
        this.options = Object.assign({
            logLevel: "info",
            path: "",
            publicPath: "",
            reduceInlineStyles: true,
            pruneSource: false,
            additionalStylesheets: [],
            allowRules: []
        }, options);
        this.logger = this.options.logger || createLogger(this.options.logLevel);
    }
    /**
     * Read the contents of a file from the specified filesystem or disk
     */
    readFile(filename) {
        const fs = this.fs;
        return new Promise((resolve2, reject) => {
            const callback = (err, data) => {
                if (err)
                    reject(err);
                else
                    resolve2(data.toString());
            };
            if (fs && fs.readFile) {
                fs.readFile(filename, callback);
            }
            else {
                readFile(filename, "utf-8", callback);
            }
        });
    }
    /**
     * Write content to a file
     */
    writeFile(filename, data) {
        const fs = this.fs;
        return new Promise((resolve2, reject) => {
            const callback = (err) => {
                if (err)
                    reject(err);
                else
                    resolve2();
            };
            if (fs && fs.writeFile) {
                fs.writeFile(filename, data, callback);
            }
            else {
                writeFile(filename, data, callback);
            }
        });
    }
    /**
     * Apply critical CSS processing to the html
     */
    process(html) {
        return __async(this, null, function* () {
            const start = Date.now();
            const document2 = createDocument(html);
            if (this.options.additionalStylesheets.length > 0) {
                yield this.embedAdditionalStylesheet(document2);
            }
            if (this.options.external !== false) {
                const externalSheets = [...document2.querySelectorAll('link[rel="stylesheet"]')];
                yield Promise.all(externalSheets.map((link2) => this.embedLinkedStylesheet(link2, document2)));
            }
            const styles = this.getAffectedStyleTags(document2);
            for (const style of styles) {
                this.processStyle(style, document2);
            }
            if (this.options.mergeStylesheets !== false && styles.length !== 0) {
                this.mergeStylesheets(document2);
            }
            const output = serializeDocument(document2);
            const end = Date.now();
            this.logger.info?.(`Time ${end - start}ms`);
            return output;
        });
    }
    /**
     * Get the style tags that need processing
     */
    getAffectedStyleTags(document2) {
        const styles = [...document2.querySelectorAll("style")];
        if (this.options.reduceInlineStyles === false) {
            return styles.filter((style) => style.$$external);
        }
        return styles;
    }
    mergeStylesheets(document2) {
        const styles = this.getAffectedStyleTags(document2);
        if (styles.length === 0) {
            this.logger.warn?.("Merging inline stylesheets into a single <style> tag skipped, no inline stylesheets to merge");
            return;
        }
        const first = styles[0];
        let sheet = first.textContent;
        for (let i = 1; i < styles.length; i++) {
            const node2 = styles[i];
            sheet += node2.textContent;
            node2.remove();
        }
        first.textContent = sheet;
    }
    /**
     * Given href, find the corresponding CSS asset
     */
    getCssAsset(href, _style) {
        return __async(this, null, function* () {
            const outputPath = this.options.path;
            const publicPath = this.options.publicPath;
            let normalizedPath = href.replace(/^\//, "");
            const pathPrefix = `${(publicPath || "").replace(/(^\/|\/$)/g, "")}/`;
            if (normalizedPath.startsWith(pathPrefix)) {
                normalizedPath = normalizedPath.substring(pathPrefix.length).replace(/^\//, "");
            }
            if (/^https?:\/\//.test(normalizedPath) || href.startsWith("//")) {
                return void 0;
            }
            const filename = _pathModule.resolve(outputPath, normalizedPath);
            if (!isSubpath(outputPath, filename)) {
                return void 0;
            }
            let sheet;
            try {
                sheet = yield this.readFile(filename);
            }
            catch {
                this.logger.warn?.(`Unable to locate stylesheet: ${filename}`);
            }
            return sheet;
        });
    }
    checkInlineThreshold(link2, style, sheet) {
        if (this.options.inlineThreshold && sheet.length < this.options.inlineThreshold) {
            const href = style.$$name;
            style.$$reduce = false;
            this.logger.info?.(`\x1B[32mInlined all of ${href} (${sheet.length} was below the threshold of ${this.options.inlineThreshold})\x1B[39m`);
            link2.remove();
            return true;
        }
        return false;
    }
    /**
     * Inline the stylesheets from options.additionalStylesheets (assuming it passes `options.filter`)
     */
    embedAdditionalStylesheet(document2) {
        return __async(this, null, function* () {
            const styleSheetsIncluded = [];
            const sources = yield Promise.all(this.options.additionalStylesheets.map((cssFile) => {
                if (styleSheetsIncluded.includes(cssFile)) {
                    return [];
                }
                styleSheetsIncluded.push(cssFile);
                const style = document2.createElement("style");
                style.$$external = true;
                return this.getCssAsset(cssFile, style).then((sheet) => [sheet, style]);
            }));
            for (const [sheet, style] of sources) {
                if (sheet) {
                    style.textContent = sheet;
                    document2.head.appendChild(style);
                }
            }
        });
    }
    /**
     * Inline the target stylesheet referred to by a <link rel="stylesheet"> (assuming it passes `options.filter`)
     */
    embedLinkedStylesheet(link2, document2) {
        return __async(this, null, function* () {
            const href = link2.getAttribute("href");
            if (!href?.endsWith(".css")) {
                return void 0;
            }
            const style = document2.createElement("style");
            style.$$external = true;
            const sheet = yield this.getCssAsset(href, style);
            if (!sheet) {
                return;
            }
            style.textContent = sheet;
            style.$$name = href;
            style.$$links = [link2];
            link2.parentNode?.insertBefore(style, link2);
            if (this.checkInlineThreshold(link2, style, sheet)) {
                return;
            }
            let media = link2.getAttribute("media");
            if (media && !validateMediaQuery(media)) {
                media = void 0;
            }
            const preloadMode = this.options.preload;
            let cssLoaderPreamble = "function $loadcss(u,m,l){(l=document.createElement('link')).rel='stylesheet';l.href=u;document.head.appendChild(l)}";
            const lazy = preloadMode === "js-lazy";
            if (lazy) {
                cssLoaderPreamble = cssLoaderPreamble.replace("l.href", "l.media='print';l.onload=function(){l.media=m};l.href");
            }
            if (preloadMode === false)
                return;
            let noscriptFallback = false;
            let updateLinkToPreload = false;
            const noscriptLink = link2.cloneNode(false);
            if (preloadMode === "body") {
                document2.body.appendChild(link2);
            }
            else {
                if (preloadMode === "js" || preloadMode === "js-lazy") {
                    const script = document2.createElement("script");
                    script.setAttribute("data-href", href);
                    script.setAttribute("data-media", media || "all");
                    const js = `${cssLoaderPreamble}$loadcss(document.currentScript.dataset.href,document.currentScript.dataset.media)`;
                    script.textContent = js;
                    link2.parentNode.insertBefore(script, link2.nextSibling);
                    style.$$links.push(script);
                    cssLoaderPreamble = "";
                    noscriptFallback = true;
                    updateLinkToPreload = true;
                }
                else if (preloadMode === "media") {
                    link2.setAttribute("media", "print");
                    link2.setAttribute("onload", `this.media='${media || "all"}'`);
                    noscriptFallback = true;
                }
                else if (preloadMode === "swap-high") {
                    link2.setAttribute("rel", "alternate stylesheet preload");
                    link2.setAttribute("title", "styles");
                    link2.setAttribute("onload", `this.title='';this.rel='stylesheet'`);
                    noscriptFallback = true;
                }
                else if (preloadMode === "swap-low") {
                    link2.setAttribute("rel", "alternate stylesheet");
                    link2.setAttribute("title", "styles");
                    link2.setAttribute("onload", `this.title='';this.rel='stylesheet'`);
                    noscriptFallback = true;
                }
                else if (preloadMode === "swap") {
                    link2.setAttribute("onload", "this.rel='stylesheet'");
                    updateLinkToPreload = true;
                    noscriptFallback = true;
                }
                else {
                    const bodyLink = link2.cloneNode(false);
                    bodyLink.removeAttribute("id");
                    document2.body.appendChild(bodyLink);
                    style.$$links.push(bodyLink);
                    updateLinkToPreload = true;
                }
            }
            if (this.options.noscriptFallback !== false && noscriptFallback && !href.includes("</noscript>")) {
                const noscript = document2.createElement("noscript");
                noscriptLink.removeAttribute("id");
                noscript.appendChild(noscriptLink);
                link2.parentNode.insertBefore(noscript, link2.nextSibling);
                style.$$links.push(noscript);
            }
            if (updateLinkToPreload) {
                link2.setAttribute("rel", "preload");
                link2.setAttribute("as", "style");
            }
        });
    }
    /**
     * Prune the source CSS files
     */
    pruneSource(style, before, sheetInverse) {
        const minSize = this.options.minimumExternalSize;
        const name = style.$$name;
        const shouldInline = minSize && sheetInverse.length < minSize;
        if (shouldInline) {
            this.logger.info?.(`\x1B[32mInlined all of ${name} (non-critical external stylesheet would have been ${sheetInverse.length}b, which was below the threshold of ${minSize})\x1B[39m`);
        }
        if (shouldInline || !sheetInverse) {
            style.textContent = before;
            if (style.$$links) {
                for (const link2 of style.$$links) {
                    const parent = link2.parentNode;
                    parent?.removeChild(link2);
                }
            }
        }
        return !!shouldInline;
    }
    /**
     * Parse the stylesheet within a <style> element, then reduce it to contain only rules used by the document.
     */
    processStyle(style, document2) {
        if (style.$$reduce === false)
            return;
        const name = style.$$name ? style.$$name.replace(/^\//, "") : "inline CSS";
        const options = this.options;
        const beastiesContainer = document2.beastiesContainer;
        let keyframesMode = options.keyframes ?? "critical";
        if (keyframesMode === true)
            keyframesMode = "all";
        if (keyframesMode === false)
            keyframesMode = "none";
        let sheet = style.textContent;
        const before = sheet;
        if (!sheet)
            return;
        const ast = parseStylesheet(sheet);
        const astInverse = options.pruneSource ? parseStylesheet(sheet) : null;
        let criticalFonts = "";
        const failedSelectors = [];
        const criticalKeyframeNames = /* @__PURE__ */ new Set();
        let includeNext = false;
        let includeAll = false;
        let excludeNext = false;
        let excludeAll = false;
        const shouldPreloadFonts = options.fonts === true || options.preloadFonts === true;
        const shouldInlineFonts = options.fonts !== false && options.inlineFonts === true;
        walkStyleRules(ast, markOnly((rule2) => {
            if (rule2.type === "comment") {
                const beastiesComment = rule2.text.match(new RegExp("^(?<!! )beasties:(.*)"));
                const command = beastiesComment && beastiesComment[1];
                if (command) {
                    switch (command) {
                        case "include":
                            includeNext = true;
                            break;
                        case "exclude":
                            excludeNext = true;
                            break;
                        case "include start":
                            includeAll = true;
                            break;
                        case "include end":
                            includeAll = false;
                            break;
                        case "exclude start":
                            excludeAll = true;
                            break;
                        case "exclude end":
                            excludeAll = false;
                            break;
                    }
                }
            }
            if (rule2.type === "rule") {
                if (includeNext) {
                    includeNext = false;
                    return true;
                }
                if (excludeNext) {
                    excludeNext = false;
                    return false;
                }
                if (includeAll) {
                    return true;
                }
                if (excludeAll) {
                    return false;
                }
                rule2.filterSelectors?.((sel) => {
                    const isAllowedRule = options.allowRules.some((exp) => {
                        if (exp instanceof RegExp) {
                            return exp.test(sel);
                        }
                        return exp === sel;
                    });
                    if (isAllowedRule)
                        return true;
                    if (sel === ":root" || sel === "html" || sel === "body" || sel[0] === ":" && /^::?(?:before|after)$/.test(sel)) {
                        return true;
                    }
                    sel = this.normalizeCssSelector(sel);
                    if (!sel)
                        return false;
                    try {
                        return beastiesContainer.exists(sel);
                    }
                    catch (e) {
                        failedSelectors.push(`${sel} -> ${e.message || e.toString()}`);
                        return false;
                    }
                });
                if (!rule2.selector) {
                    return false;
                }
                if (rule2.nodes) {
                    for (const decl of rule2.nodes) {
                        if (!("prop" in decl)) {
                            continue;
                        }
                        if (shouldInlineFonts && /\bfont(?:-family)?\b/i.test(decl.prop)) {
                            criticalFonts += ` ${decl.value}`;
                        }
                        if (decl.prop === "animation" || decl.prop === "animation-name") {
                            for (const name2 of decl.value.split(/\s+/)) {
                                const nameTrimmed = name2.trim();
                                if (nameTrimmed)
                                    criticalKeyframeNames.add(nameTrimmed);
                            }
                        }
                    }
                }
            }
            if (rule2.type === "atrule" && (rule2.name === "font-face" || rule2.name === "layer"))
                return;
            const hasRemainingRules = ("nodes" in rule2 && rule2.nodes?.some((rule22) => !rule22.$$remove)) ?? true;
            return hasRemainingRules;
        }));
        if (failedSelectors.length !== 0) {
            this.logger.warn?.(`${failedSelectors.length} rules skipped due to selector errors:
  ${failedSelectors.join("\n  ")}`);
        }
        const preloadedFonts = /* @__PURE__ */ new Set();
        walkStyleRulesWithReverseMirror(ast, astInverse, (rule2) => {
            if (rule2.$$remove === true)
                return false;
            if ("selectors" in rule2) {
                applyMarkedSelectors(rule2);
            }
            if (rule2.type === "atrule" && rule2.name === "keyframes") {
                if (keyframesMode === "none")
                    return false;
                if (keyframesMode === "all")
                    return true;
                return criticalKeyframeNames.has(rule2.params);
            }
            if (rule2.type === "atrule" && rule2.name === "font-face") {
                let family, src;
                if (rule2.nodes) {
                    for (const decl of rule2.nodes) {
                        if (!("prop" in decl)) {
                            continue;
                        }
                        if (decl.prop === "src") {
                            src = (decl.value.match(/url\s*\(\s*(['"]?)(.+?)\1\s*\)/) || [])[2];
                        }
                        else if (decl.prop === "font-family") {
                            family = decl.value;
                        }
                    }
                    if (src && shouldPreloadFonts && !preloadedFonts.has(src)) {
                        preloadedFonts.add(src);
                        const preload = document2.createElement("link");
                        preload.setAttribute("rel", "preload");
                        preload.setAttribute("as", "font");
                        preload.setAttribute("crossorigin", "anonymous");
                        preload.setAttribute("href", src.trim());
                        document2.head.appendChild(preload);
                    }
                }
                if (!shouldInlineFonts || !family || !src || !criticalFonts.includes(family)) {
                    return false;
                }
            }
        });
        sheet = serializeStylesheet(ast, {
            compress: this.options.compress !== false
        });
        if (sheet.trim().length === 0) {
            if (style.parentNode) {
                style.remove();
            }
            return;
        }
        let afterText = "";
        let styleInlinedCompletely = false;
        if (options.pruneSource) {
            const sheetInverse = serializeStylesheet(astInverse, {
                compress: this.options.compress !== false
            });
            styleInlinedCompletely = this.pruneSource(style, before, sheetInverse);
            if (styleInlinedCompletely) {
                const percent2 = sheetInverse.length / before.length * 100;
                afterText = `, reducing non-inlined size ${percent2 | 0}% to ${formatSize(sheetInverse.length)}`;
            }
            const cssFilePath = _pathModule.resolve(this.options.path, name);
            this.writeFile(cssFilePath, sheetInverse).then(() => this.logger.info?.(`${name} was successfully updated`)).catch((err) => this.logger.error?.(err));
        }
        if (!styleInlinedCompletely) {
            style.textContent = sheet;
        }
        const percent = sheet.length / before.length * 100 | 0;
        this.logger.info?.(`\x1B[32mInlined ${formatSize(sheet.length)} (${percent}% of original ${formatSize(before.length)}) of ${name}${afterText}.\x1B[39m`);
    }
    normalizeCssSelector(sel) {
        let normalizedSelector = this.#selectorCache.get(sel);
        if (normalizedSelector !== void 0) {
            return normalizedSelector;
        }
        normalizedSelector = sel.replace(removePseudoClassesAndElementsPattern, "").replace(removeTrailingCommasPattern, (match) => match.includes("(") ? "(" : ")").replace(implicitUniversalPattern, "$1 * $2").replace(emptyCombinatorPattern, "$1 *").trim();
        this.#selectorCache.set(sel, normalizedSelector);
        return normalizedSelector;
    }
};
function formatSize(size) {
    if (size <= 0) {
        return "0 bytes";
    }
    const abbreviations = ["bytes", "kB", "MB", "GB"];
    const index = Math.floor(Math.log(size) / Math.log(1024));
    const roundedSize = size / 1024 ** index;
    const fractionDigits = index === 0 ? 0 : 2;
    return `${roundedSize.toFixed(fractionDigits)} ${abbreviations[index]}`;
}
// node_modules/@angular/ssr/fesm2022/ssr.mjs
var ServerAssets = class {
    manifest;
    /**
     * Creates an instance of ServerAsset.
     *
     * @param manifest - The manifest containing the server assets.
     */
    constructor(manifest) {
        this.manifest = manifest;
    }
    /**
     * Retrieves the content of a server-side asset using its path.
     *
     * @param path - The path to the server asset within the manifest.
     * @returns The server asset associated with the provided path, as a `ServerAsset` object.
     * @throws Error - Throws an error if the asset does not exist.
     */
    getServerAsset(path2) {
        const asset = this.manifest.assets[path2];
        if (!asset) {
            throw new Error(`Server asset '${path2}' does not exist.`);
        }
        return asset;
    }
    /**
     * Checks if a specific server-side asset exists.
     *
     * @param path - The path to the server asset.
     * @returns A boolean indicating whether the asset exists.
     */
    hasServerAsset(path2) {
        return !!this.manifest.assets[path2];
    }
    /**
     * Retrieves the asset for 'index.server.html'.
     *
     * @returns The `ServerAsset` object for 'index.server.html'.
     * @throws Error - Throws an error if 'index.server.html' does not exist.
     */
    getIndexServerHtml() {
        return this.getServerAsset("index.server.html");
    }
};
var IGNORED_LOGS = /* @__PURE__ */ new Set(["Angular is running in development mode."]);
var Console = class extends _Console {
    /**
     * Logs a message to the console if it is not in the set of ignored messages.
     *
     * @param message - The message to log to the console.
     *
     * This method overrides the `log` method of the `ɵConsole` class. It checks if the
     * message is in the `IGNORED_LOGS` set. If it is not, it delegates the logging to
     * the parent class's `log` method. Otherwise, the message is suppressed.
     */
    log(message) {
        if (!IGNORED_LOGS.has(message)) {
            super.log(message);
        }
    }
};
var angularAppManifest;
function setAngularAppManifest(manifest) {
    angularAppManifest = manifest;
}
function getAngularAppManifest() {
    if (!angularAppManifest) {
        throw new Error(`Angular app manifest is not set. Please ensure you are using the '@angular/build:application' builder to build your server application.`);
    }
    return angularAppManifest;
}
var angularAppEngineManifest;
function setAngularAppEngineManifest(manifest) {
    angularAppEngineManifest = manifest;
}
function getAngularAppEngineManifest() {
    if (!angularAppEngineManifest) {
        throw new Error(`Angular app engine manifest is not set. Please ensure you are using the '@angular/build:application' builder to build your server application.`);
    }
    return angularAppEngineManifest;
}
function stripTrailingSlash(url) {
    return url.length > 1 && url[url.length - 1] === "/" ? url.slice(0, -1) : url;
}
function stripLeadingSlash(url) {
    return url.length > 1 && url[0] === "/" ? url.slice(1) : url;
}
function addLeadingSlash(url) {
    return url[0] === "/" ? url : `/${url}`;
}
function addTrailingSlash(url) {
    return url[url.length - 1] === "/" ? url : `${url}/`;
}
function joinUrlParts(...parts) {
    const normalizedParts = [];
    for (const part of parts) {
        if (part === "") {
            continue;
        }
        let start = 0;
        let end = part.length;
        while (start < end && part[start] === "/") {
            start++;
        }
        while (end > start && part[end - 1] === "/") {
            end--;
        }
        if (start < end) {
            normalizedParts.push(part.slice(start, end));
        }
    }
    return addLeadingSlash(normalizedParts.join("/"));
}
function stripIndexHtmlFromURL(url) {
    if (url.pathname.endsWith("/index.html")) {
        const modifiedURL = new URL(url);
        modifiedURL.pathname = modifiedURL.pathname.slice(0, 
        /** '/index.html'.length */
        -11);
        return modifiedURL;
    }
    return url;
}
function buildPathWithParams(toPath, fromPath) {
    if (toPath[0] !== "/") {
        throw new Error(`Invalid toPath: The string must start with a '/'. Received: '${toPath}'`);
    }
    if (fromPath[0] !== "/") {
        throw new Error(`Invalid fromPath: The string must start with a '/'. Received: '${fromPath}'`);
    }
    if (!toPath.includes("/*")) {
        return toPath;
    }
    const fromPathParts = fromPath.split("/");
    const toPathParts = toPath.split("/");
    const resolvedParts = toPathParts.map((part, index) => toPathParts[index] === "*" ? fromPathParts[index] : part);
    return joinUrlParts(...resolvedParts);
}
var MATRIX_PARAMS_REGEX = /;[^/]+/g;
function stripMatrixParams(pathname) {
    return pathname.includes(";") ? pathname.replace(MATRIX_PARAMS_REGEX, "") : pathname;
}
function renderAngular(html, bootstrap, url, platformProviders, serverContext) {
    return __async(this, null, function* () {
        const urlToRender = stripIndexHtmlFromURL(url);
        const platformRef = platformServer([
            {
                provide: INITIAL_CONFIG,
                useValue: {
                    url: urlToRender.href,
                    document: html
                }
            },
            {
                provide: _SERVER_CONTEXT,
                useValue: serverContext
            },
            {
                // An Angular Console Provider that does not print a set of predefined logs.
                provide: _Console,
                // Using `useClass` would necessitate decorating `Console` with `@Injectable`,
                // which would require switching from `ts_library` to `ng_module`. This change
                // would also necessitate various patches of `@angular/bazel` to support ESM.
                useFactory: () => new Console()
            },
            ...platformProviders
        ]);
        let redirectTo;
        let hasNavigationError = true;
        try {
            let applicationRef;
            if (isNgModule(bootstrap)) {
                const moduleRef = yield platformRef.bootstrapModule(bootstrap);
                applicationRef = moduleRef.injector.get(ApplicationRef);
            }
            else {
                applicationRef = yield bootstrap({ platformRef });
            }
            yield applicationRef.whenStable();
            const envInjector = applicationRef.injector;
            const routerIsProvided = !!envInjector.get(ActivatedRoute, null);
            const router = envInjector.get(Router);
            const lastSuccessfulNavigation = router.lastSuccessfulNavigation;
            if (!routerIsProvided) {
                hasNavigationError = false;
            }
            else if (lastSuccessfulNavigation?.finalUrl) {
                hasNavigationError = false;
                const requestPrefix = envInjector.get(APP_BASE_HREF, null, { optional: true }) ?? envInjector.get(REQUEST, null, { optional: true })?.headers.get("X-Forwarded-Prefix");
                const { pathname, search, hash } = envInjector.get(PlatformLocation);
                const finalUrl = constructDecodedUrl({ pathname, search, hash }, requestPrefix);
                const urlToRenderString = constructDecodedUrl(urlToRender, requestPrefix);
                if (urlToRenderString !== finalUrl) {
                    redirectTo = [pathname, search, hash].join("");
                }
            }
            return {
                hasNavigationError,
                redirectTo,
                content: () => new Promise((resolve2, reject) => {
                    setTimeout(() => {
                        _renderInternal(platformRef, applicationRef).then(resolve2).catch(reject).finally(() => void asyncDestroyPlatform(platformRef));
                    }, 0);
                })
            };
        }
        catch (error) {
            yield asyncDestroyPlatform(platformRef);
            throw error;
        }
        finally {
            if (hasNavigationError || redirectTo) {
                void asyncDestroyPlatform(platformRef);
            }
        }
    });
}
function isNgModule(value) {
    return "\u0275mod" in value;
}
function asyncDestroyPlatform(platformRef) {
    return new Promise((resolve2) => {
        setTimeout(() => {
            if (!platformRef.destroyed) {
                platformRef.destroy();
            }
            resolve2();
        }, 0);
    });
}
function constructDecodedUrl(url, prefix) {
    const { pathname, hash, search } = url;
    const urlParts = [];
    if (prefix && !addTrailingSlash(pathname).startsWith(addTrailingSlash(prefix))) {
        urlParts.push(joinUrlParts(prefix, pathname));
    }
    else {
        urlParts.push(stripTrailingSlash(pathname));
    }
    urlParts.push(search, hash);
    return decodeURIComponent(urlParts.join(""));
}
function promiseWithAbort(promise, signal, errorMessagePrefix) {
    return new Promise((resolve2, reject) => {
        const abortHandler = () => {
            reject(new DOMException(`${errorMessagePrefix} was aborted.
${signal.reason}`, "AbortError"));
        };
        if (signal.aborted) {
            abortHandler();
            return;
        }
        signal.addEventListener("abort", abortHandler, { once: true });
        promise.then(resolve2).catch(reject).finally(() => {
            signal.removeEventListener("abort", abortHandler);
        });
    });
}
var APP_SHELL_ROUTE = "ng-app-shell";
var ServerRenderingFeatureKind;
(function (ServerRenderingFeatureKind2) {
    ServerRenderingFeatureKind2[ServerRenderingFeatureKind2["AppShell"] = 0] = "AppShell";
    ServerRenderingFeatureKind2[ServerRenderingFeatureKind2["ServerRoutes"] = 1] = "ServerRoutes";
})(ServerRenderingFeatureKind || (ServerRenderingFeatureKind = {}));
var RenderMode;
(function (RenderMode2) {
    RenderMode2[RenderMode2["Server"] = 0] = "Server";
    RenderMode2[RenderMode2["Client"] = 1] = "Client";
    RenderMode2[RenderMode2["Prerender"] = 2] = "Prerender";
})(RenderMode || (RenderMode = {}));
var PrerenderFallback;
(function (PrerenderFallback2) {
    PrerenderFallback2[PrerenderFallback2["Server"] = 0] = "Server";
    PrerenderFallback2[PrerenderFallback2["Client"] = 1] = "Client";
    PrerenderFallback2[PrerenderFallback2["None"] = 2] = "None";
})(PrerenderFallback || (PrerenderFallback = {}));
var SERVER_ROUTES_CONFIG = new InjectionToken("SERVER_ROUTES_CONFIG");
function withRoutes(routes) {
    const config = { routes };
    return {
        \u0275kind: ServerRenderingFeatureKind.ServerRoutes,
        \u0275providers: [
            {
                provide: SERVER_ROUTES_CONFIG,
                useValue: config
            }
        ]
    };
}
function withAppShell(component) {
    const routeConfig = {
        path: APP_SHELL_ROUTE
    };
    if ("\u0275cmp" in component) {
        routeConfig.component = component;
    }
    else {
        routeConfig.loadComponent = component;
    }
    return {
        \u0275kind: ServerRenderingFeatureKind.AppShell,
        \u0275providers: [
            {
                provide: ROUTES,
                useValue: routeConfig,
                multi: true
            },
            provideEnvironmentInitializer(() => {
                const config = inject(SERVER_ROUTES_CONFIG);
                config.appShellRoute = APP_SHELL_ROUTE;
            })
        ]
    };
}
function provideServerRendering(...features) {
    let hasAppShell = false;
    let hasServerRoutes = false;
    const providers = [provideServerRendering$1()];
    for (const { \u0275kind, \u0275providers } of features) {
        hasAppShell ||= \u0275kind === ServerRenderingFeatureKind.AppShell;
        hasServerRoutes ||= \u0275kind === ServerRenderingFeatureKind.ServerRoutes;
        providers.push(...\u0275providers);
    }
    if (!hasServerRoutes && hasAppShell) {
        throw new Error(`Configuration error: found 'withAppShell()' without 'withRoutes()' in the same call to 'provideServerRendering()'.The 'withAppShell()' function requires 'withRoutes()' to be used.`);
    }
    return makeEnvironmentProviders(providers);
}
var RouteTree = class _RouteTree {
    /**
     * The root node of the route tree.
     * All routes are stored and accessed relative to this root node.
     */
    root = this.createEmptyRouteTreeNode();
    /**
     * Inserts a new route into the route tree.
     * The route is broken down into segments, and each segment is added to the tree.
     * Parameterized segments (e.g., :id) are normalized to wildcards (*) for matching purposes.
     *
     * @param route - The route path to insert into the tree.
     * @param metadata - Metadata associated with the route, excluding the route path itself.
     */
    insert(route, metadata) {
        let node2 = this.root;
        const segments = this.getPathSegments(route);
        const normalizedSegments = [];
        for (const segment of segments) {
            const normalizedSegment = segment[0] === ":" ? "*" : segment;
            let childNode = node2.children.get(normalizedSegment);
            if (!childNode) {
                childNode = this.createEmptyRouteTreeNode();
                node2.children.set(normalizedSegment, childNode);
            }
            node2 = childNode;
            normalizedSegments.push(normalizedSegment);
        }
        node2.metadata = __spreadProps(__spreadValues({}, metadata), {
            route: addLeadingSlash(normalizedSegments.join("/"))
        });
    }
    /**
     * Matches a given route against the route tree and returns the best matching route's metadata.
     * The best match is determined by the lowest insertion index, meaning the earliest defined route
     * takes precedence.
     *
     * @param route - The route path to match against the route tree.
     * @returns The metadata of the best matching route or `undefined` if no match is found.
     */
    match(route) {
        const segments = this.getPathSegments(route);
        return this.traverseBySegments(segments)?.metadata;
    }
    /**
     * Converts the route tree into a serialized format representation.
     * This method converts the route tree into an array of metadata objects that describe the structure of the tree.
     * The array represents the routes in a nested manner where each entry includes the route and its associated metadata.
     *
     * @returns An array of `RouteTreeNodeMetadata` objects representing the route tree structure.
     *          Each object includes the `route` and associated metadata of a route.
     */
    toObject() {
        return Array.from(this.traverse());
    }
    /**
     * Constructs a `RouteTree` from an object representation.
     * This method is used to recreate a `RouteTree` instance from an array of metadata objects.
     * The array should be in the format produced by `toObject`, allowing for the reconstruction of the route tree
     * with the same routes and metadata.
     *
     * @param value - An array of `RouteTreeNodeMetadata` objects that represent the serialized format of the route tree.
     *                Each object should include a `route` and its associated metadata.
     * @returns A new `RouteTree` instance constructed from the provided metadata objects.
     */
    static fromObject(value) {
        const tree = new _RouteTree();
        for (const _a2 of value) {
            const _b = _a2, { route } = _b, metadata = __objRest(_b, ["route"]);
            tree.insert(route, metadata);
        }
        return tree;
    }
    /**
     * A generator function that recursively traverses the route tree and yields the metadata of each node.
     * This allows for easy and efficient iteration over all nodes in the tree.
     *
     * @param node - The current node to start the traversal from. Defaults to the root node of the tree.
     */
    *traverse(node2 = this.root) {
        if (node2.metadata) {
            yield node2.metadata;
        }
        for (const childNode of node2.children.values()) {
            yield* __yieldStar(this.traverse(childNode));
        }
    }
    /**
     * Extracts the path segments from a given route string.
     *
     * @param route - The route string from which to extract segments.
     * @returns An array of path segments.
     */
    getPathSegments(route) {
        return route.split("/").filter(Boolean);
    }
    /**
     * Recursively traverses the route tree from a given node, attempting to match the remaining route segments.
     * If the node is a leaf node (no more segments to match) and contains metadata, the node is yielded.
     *
     * This function prioritizes exact segment matches first, followed by wildcard matches (`*`),
     * and finally deep wildcard matches (`**`) that consume all segments.
     *
     * @param segments - The array of route path segments to match against the route tree.
     * @param node - The current node in the route tree to start traversal from. Defaults to the root node.
     * @param currentIndex - The index of the segment in `remainingSegments` currently being matched.
     * Defaults to `0` (the first segment).
     *
     * @returns The node that best matches the remaining segments or `undefined` if no match is found.
     */
    traverseBySegments(segments, node2 = this.root, currentIndex = 0) {
        if (currentIndex >= segments.length) {
            return node2.metadata ? node2 : node2.children.get("**");
        }
        if (!node2.children.size) {
            return void 0;
        }
        const segment = segments[currentIndex];
        const exactMatch = node2.children.get(segment);
        if (exactMatch) {
            const match = this.traverseBySegments(segments, exactMatch, currentIndex + 1);
            if (match) {
                return match;
            }
        }
        const wildcardMatch = node2.children.get("*");
        if (wildcardMatch) {
            const match = this.traverseBySegments(segments, wildcardMatch, currentIndex + 1);
            if (match) {
                return match;
            }
        }
        return node2.children.get("**");
    }
    /**
     * Creates an empty route tree node.
     * This helper function is used during the tree construction.
     *
     * @returns A new, empty route tree node.
     */
    createEmptyRouteTreeNode() {
        return {
            children: /* @__PURE__ */ new Map()
        };
    }
};
var MODULE_PRELOAD_MAX = 10;
var CATCH_ALL_REGEXP = /\/(\*\*)$/;
var URL_PARAMETER_REGEXP = new RegExp("(?<!\\\\):([^/]+)", "g");
var VALID_REDIRECT_RESPONSE_CODES = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function handleRoute(options) {
    return __asyncGenerator(this, null, function* () {
        try {
            const { metadata, currentRoutePath, route, compiler, parentInjector, serverConfigRouteTree, entryPointToBrowserMapping, invokeGetPrerenderParams, includePrerenderFallbackRoutes } = options;
            const { redirectTo, loadChildren, loadComponent, children, \u0275entryName } = route;
            if (\u0275entryName && loadComponent) {
                appendPreloadToMetadata(\u0275entryName, entryPointToBrowserMapping, metadata);
            }
            if (metadata.renderMode === RenderMode.Prerender) {
                yield* __yieldStar(handleSSGRoute(serverConfigRouteTree, typeof redirectTo === "string" ? redirectTo : void 0, metadata, parentInjector, invokeGetPrerenderParams, includePrerenderFallbackRoutes));
            }
            else if (redirectTo !== void 0) {
                if (metadata.status && !VALID_REDIRECT_RESPONSE_CODES.has(metadata.status)) {
                    yield {
                        error: `The '${metadata.status}' status code is not a valid redirect response code. Please use one of the following redirect response codes: ${[...VALID_REDIRECT_RESPONSE_CODES.values()].join(", ")}.`
                    };
                }
                else if (typeof redirectTo === "string") {
                    yield __spreadProps(__spreadValues({}, metadata), {
                        redirectTo: resolveRedirectTo(metadata.route, redirectTo)
                    });
                }
                else {
                    yield metadata;
                }
            }
            else {
                yield metadata;
            }
            if (children?.length) {
                yield* __yieldStar(traverseRoutesConfig(__spreadProps(__spreadValues({}, options), {
                    routes: children,
                    parentRoute: currentRoutePath,
                    parentPreloads: metadata.preload
                })));
            }
            if (loadChildren) {
                if (\u0275entryName) {
                    appendPreloadToMetadata(\u0275entryName, entryPointToBrowserMapping, metadata);
                }
                const routeInjector = route.providers ? createEnvironmentInjector(route.providers, parentInjector.get(EnvironmentInjector), `Route: ${route.path}`) : parentInjector;
                const loadedChildRoutes = yield new __await(_loadChildren(route, compiler, routeInjector).toPromise());
                if (loadedChildRoutes) {
                    const { routes: childRoutes, injector = routeInjector } = loadedChildRoutes;
                    yield* __yieldStar(traverseRoutesConfig(__spreadProps(__spreadValues({}, options), {
                        routes: childRoutes,
                        parentInjector: injector,
                        parentRoute: currentRoutePath,
                        parentPreloads: metadata.preload
                    })));
                }
            }
        }
        catch (error) {
            yield {
                error: `Error in handleRoute for '${options.currentRoutePath}': ${error.message}`
            };
        }
    });
}
function traverseRoutesConfig(options) {
    return __asyncGenerator(this, null, function* () {
        const { routes: routeConfigs, parentPreloads, parentRoute, serverConfigRouteTree } = options;
        for (const route of routeConfigs) {
            const { matcher, path: path2 = matcher ? "**" : "" } = route;
            const currentRoutePath = joinUrlParts(parentRoute, path2);
            if (matcher && serverConfigRouteTree) {
                const matches = [];
                for (const matchedMetaData2 of serverConfigRouteTree.traverse()) {
                    if (matchedMetaData2.route.startsWith(currentRoutePath)) {
                        matches.push(matchedMetaData2);
                    }
                }
                if (!matches.length) {
                    const matchedMetaData2 = serverConfigRouteTree.match(currentRoutePath);
                    if (matchedMetaData2) {
                        matches.push(matchedMetaData2);
                    }
                }
                for (const matchedMetaData2 of matches) {
                    matchedMetaData2.presentInClientRouter = true;
                    if (matchedMetaData2.renderMode === RenderMode.Prerender) {
                        yield {
                            error: `The route '${stripLeadingSlash(currentRoutePath)}' is set for prerendering but has a defined matcher. Routes with matchers cannot use prerendering. Please specify a different 'renderMode'.`
                        };
                        continue;
                    }
                    yield* __yieldStar(handleRoute(__spreadProps(__spreadValues({}, options), {
                        currentRoutePath,
                        route,
                        metadata: __spreadProps(__spreadValues({}, matchedMetaData2), {
                            preload: parentPreloads,
                            route: matchedMetaData2.route,
                            presentInClientRouter: void 0
                        })
                    })));
                }
                if (!matches.length) {
                    yield {
                        error: `The route '${stripLeadingSlash(currentRoutePath)}' has a defined matcher but does not match any route in the server routing configuration. Please ensure this route is added to the server routing configuration.`
                    };
                }
                continue;
            }
            let matchedMetaData;
            if (serverConfigRouteTree) {
                matchedMetaData = serverConfigRouteTree.match(currentRoutePath);
                if (!matchedMetaData) {
                    yield {
                        error: `The '${stripLeadingSlash(currentRoutePath)}' route does not match any route defined in the server routing configuration. Please ensure this route is added to the server routing configuration.`
                    };
                    continue;
                }
                matchedMetaData.presentInClientRouter = true;
            }
            yield* __yieldStar(handleRoute(__spreadProps(__spreadValues({}, options), {
                metadata: __spreadProps(__spreadValues({
                    renderMode: RenderMode.Prerender
                }, matchedMetaData), {
                    preload: parentPreloads,
                    // Match Angular router behavior
                    // ['one', 'two', ''] -> 'one/two/'
                    // ['one', 'two', 'three'] -> 'one/two/three'
                    route: path2 === "" ? addTrailingSlash(currentRoutePath) : currentRoutePath,
                    presentInClientRouter: void 0
                }),
                currentRoutePath,
                route
            })));
        }
    });
}
function appendPreloadToMetadata(entryName, entryPointToBrowserMapping, metadata) {
    const existingPreloads = metadata.preload ?? [];
    if (!entryPointToBrowserMapping || existingPreloads.length >= MODULE_PRELOAD_MAX) {
        return;
    }
    const preload = entryPointToBrowserMapping[entryName];
    if (!preload?.length) {
        return;
    }
    const combinedPreloads = new Set(existingPreloads);
    for (const href of preload) {
        combinedPreloads.add(href);
        if (combinedPreloads.size === MODULE_PRELOAD_MAX) {
            break;
        }
    }
    metadata.preload = Array.from(combinedPreloads);
}
function handleSSGRoute(serverConfigRouteTree, redirectTo, metadata, parentInjector, invokeGetPrerenderParams, includePrerenderFallbackRoutes) {
    return __asyncGenerator(this, null, function* () {
        if (metadata.renderMode !== RenderMode.Prerender) {
            throw new Error(`'handleSSGRoute' was called for a route which rendering mode is not prerender.`);
        }
        const _a2 = metadata, { route: currentRoutePath, fallback } = _a2, meta = __objRest(_a2, ["route", "fallback"]);
        const getPrerenderParams = "getPrerenderParams" in meta ? meta.getPrerenderParams : void 0;
        if ("getPrerenderParams" in meta) {
            delete meta["getPrerenderParams"];
        }
        if (redirectTo !== void 0) {
            meta.redirectTo = resolveRedirectTo(currentRoutePath, redirectTo);
        }
        const isCatchAllRoute = CATCH_ALL_REGEXP.test(currentRoutePath);
        if (isCatchAllRoute && !getPrerenderParams || !isCatchAllRoute && !URL_PARAMETER_REGEXP.test(currentRoutePath)) {
            yield __spreadProps(__spreadValues({}, meta), {
                route: currentRoutePath
            });
            return;
        }
        if (invokeGetPrerenderParams) {
            if (!getPrerenderParams) {
                yield {
                    error: `The '${stripLeadingSlash(currentRoutePath)}' route uses prerendering and includes parameters, but 'getPrerenderParams' is missing. Please define 'getPrerenderParams' function for this route in your server routing configuration or specify a different 'renderMode'.`
                };
                return;
            }
            if (serverConfigRouteTree) {
                const catchAllRoutePath = isCatchAllRoute ? currentRoutePath : joinUrlParts(currentRoutePath, "**");
                const match = serverConfigRouteTree.match(catchAllRoutePath);
                if (match && match.renderMode === RenderMode.Prerender && !("getPrerenderParams" in match)) {
                    serverConfigRouteTree.insert(catchAllRoutePath, __spreadProps(__spreadValues({}, match), {
                        presentInClientRouter: true,
                        getPrerenderParams
                    }));
                }
            }
            const parameters = yield new __await(runInInjectionContext(parentInjector, () => getPrerenderParams()));
            try {
                for (const params of parameters) {
                    const replacer = handlePrerenderParamsReplacement(params, currentRoutePath);
                    const routeWithResolvedParams = currentRoutePath.replace(URL_PARAMETER_REGEXP, replacer).replace(CATCH_ALL_REGEXP, replacer);
                    yield __spreadProps(__spreadValues({}, meta), {
                        route: routeWithResolvedParams,
                        redirectTo: redirectTo === void 0 ? void 0 : resolveRedirectTo(routeWithResolvedParams, redirectTo)
                    });
                }
            }
            catch (error) {
                yield { error: `${error.message}` };
                return;
            }
        }
        if (includePrerenderFallbackRoutes && (fallback !== PrerenderFallback.None || !invokeGetPrerenderParams)) {
            yield __spreadProps(__spreadValues({}, meta), {
                route: currentRoutePath,
                renderMode: fallback === PrerenderFallback.Client ? RenderMode.Client : RenderMode.Server
            });
        }
    });
}
function handlePrerenderParamsReplacement(params, currentRoutePath) {
    return (match) => {
        const parameterName = match.slice(1);
        const value = params[parameterName];
        if (typeof value !== "string") {
            throw new Error(`The 'getPrerenderParams' function defined for the '${stripLeadingSlash(currentRoutePath)}' route returned a non-string value for parameter '${parameterName}'. Please make sure the 'getPrerenderParams' function returns values for all parameters specified in this route.`);
        }
        return parameterName === "**" ? `/${value}` : value;
    };
}
function resolveRedirectTo(routePath, redirectTo) {
    if (redirectTo[0] === "/") {
        return redirectTo;
    }
    const segments = routePath.replace(URL_PARAMETER_REGEXP, "*").split("/");
    segments.pop();
    return joinUrlParts(...segments, redirectTo);
}
function buildServerConfigRouteTree({ routes, appShellRoute }) {
    const serverRoutes = [...routes];
    if (appShellRoute !== void 0) {
        serverRoutes.unshift({
            path: appShellRoute,
            renderMode: RenderMode.Prerender
        });
    }
    const serverConfigRouteTree = new RouteTree();
    const errors = [];
    for (const _a2 of serverRoutes) {
        const _b = _a2, { path: path2 } = _b, metadata = __objRest(_b, ["path"]);
        if (path2[0] === "/") {
            errors.push(`Invalid '${path2}' route configuration: the path cannot start with a slash.`);
            continue;
        }
        if ("getPrerenderParams" in metadata && (path2.includes("/*/") || path2.endsWith("/*"))) {
            errors.push(`Invalid '${path2}' route configuration: 'getPrerenderParams' cannot be used with a '*' route.`);
            continue;
        }
        serverConfigRouteTree.insert(path2, metadata);
    }
    return { serverConfigRouteTree, errors };
}
function getRoutesFromAngularRouterConfig(bootstrap, document2, url, invokeGetPrerenderParams = false, includePrerenderFallbackRoutes = true, entryPointToBrowserMapping = void 0) {
    return __async(this, null, function* () {
        const { protocol, host } = url;
        const platformRef = platformServer([
            {
                provide: INITIAL_CONFIG,
                useValue: { document: document2, url: `${protocol}//${host}/` }
            },
            {
                // An Angular Console Provider that does not print a set of predefined logs.
                provide: _Console,
                // Using `useClass` would necessitate decorating `Console` with `@Injectable`,
                // which would require switching from `ts_library` to `ng_module`. This change
                // would also necessitate various patches of `@angular/bazel` to support ESM.
                useFactory: () => new Console()
            },
            {
                provide: _ENABLE_ROOT_COMPONENT_BOOTSTRAP,
                useValue: false
            }
        ]);
        try {
            let applicationRef;
            if (isNgModule(bootstrap)) {
                const moduleRef = yield platformRef.bootstrapModule(bootstrap);
                applicationRef = moduleRef.injector.get(ApplicationRef);
            }
            else {
                applicationRef = yield bootstrap({ platformRef });
            }
            const injector = applicationRef.injector;
            const router = injector.get(Router);
            router.navigationTransitions.afterPreactivation()?.next?.();
            yield applicationRef.whenStable();
            const errors = [];
            const rawBaseHref = injector.get(APP_BASE_HREF, null, { optional: true }) ?? injector.get(PlatformLocation).getBaseHrefFromDOM();
            const { pathname: baseHref } = new URL(rawBaseHref, "http://localhost");
            const compiler = injector.get(Compiler);
            const serverRoutesConfig = injector.get(SERVER_ROUTES_CONFIG, null, { optional: true });
            let serverConfigRouteTree;
            if (serverRoutesConfig) {
                const result2 = buildServerConfigRouteTree(serverRoutesConfig);
                serverConfigRouteTree = result2.serverConfigRouteTree;
                errors.push(...result2.errors);
            }
            if (errors.length) {
                return {
                    baseHref,
                    routes: [],
                    errors
                };
            }
            const routesResults = [];
            if (router.config.length) {
                const traverseRoutes = traverseRoutesConfig({
                    routes: router.config,
                    compiler,
                    parentInjector: injector,
                    parentRoute: "",
                    serverConfigRouteTree,
                    invokeGetPrerenderParams,
                    includePrerenderFallbackRoutes,
                    entryPointToBrowserMapping
                });
                const seenRoutes = /* @__PURE__ */ new Set();
                try {
                    for (var iter = __forAwait(traverseRoutes), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
                        const routeMetadata = temp.value;
                        if ("error" in routeMetadata) {
                            errors.push(routeMetadata.error);
                            continue;
                        }
                        const routePath = routeMetadata.route;
                        if (!seenRoutes.has(routePath)) {
                            routesResults.push(routeMetadata);
                            seenRoutes.add(routePath);
                        }
                    }
                }
                catch (temp) {
                    error = [temp];
                }
                finally {
                    try {
                        more && (temp = iter.return) && (yield temp.call(iter));
                    }
                    finally {
                        if (error)
                            throw error[0];
                    }
                }
                yield new Promise((resolve2) => setTimeout(resolve2, 0));
                if (serverConfigRouteTree) {
                    for (const { route, presentInClientRouter } of serverConfigRouteTree.traverse()) {
                        if (presentInClientRouter || route.endsWith("/**")) {
                            continue;
                        }
                        errors.push(`The '${stripLeadingSlash(route)}' server route does not match any routes defined in the Angular routing configuration (typically provided as a part of the 'provideRouter' call). Please make sure that the mentioned server route is present in the Angular routing configuration.`);
                    }
                }
            }
            else {
                const rootRouteMetadata = serverConfigRouteTree?.match("") ?? {
                    route: "",
                    renderMode: RenderMode.Prerender
                };
                routesResults.push(__spreadProps(__spreadValues({}, rootRouteMetadata), {
                    // Matched route might be `/*` or `/**`, which would make Angular serve all routes rather than just `/`.
                    // So we limit to just `/` for the empty app router case.
                    route: ""
                }));
            }
            return {
                baseHref,
                routes: routesResults,
                errors,
                appShellRoute: serverRoutesConfig?.appShellRoute
            };
        }
        finally {
            platformRef.destroy();
        }
    });
}
function extractRoutesAndCreateRouteTree(options) {
    const { url, manifest = getAngularAppManifest(), invokeGetPrerenderParams = false, includePrerenderFallbackRoutes = true, signal } = options;
    function extract() {
        return __async(this, null, function* () {
            const routeTree = new RouteTree();
            const document2 = yield new ServerAssets(manifest).getIndexServerHtml().text();
            const bootstrap = yield manifest.bootstrap();
            const { baseHref, appShellRoute, routes, errors } = yield getRoutesFromAngularRouterConfig(bootstrap, document2, url, invokeGetPrerenderParams, includePrerenderFallbackRoutes, manifest.entryPointToBrowserMapping);
            for (const _a2 of routes) {
                const _b = _a2, { route } = _b, metadata = __objRest(_b, ["route"]);
                if (metadata.redirectTo !== void 0) {
                    metadata.redirectTo = joinUrlParts(baseHref, metadata.redirectTo);
                }
                for (const [key, value] of Object.entries(metadata)) {
                    if (value === void 0) {
                        delete metadata[key];
                    }
                }
                const fullRoute = joinUrlParts(baseHref, route);
                routeTree.insert(fullRoute, metadata);
            }
            return {
                appShellRoute,
                routeTree,
                errors
            };
        });
    }
    return signal ? promiseWithAbort(extract(), signal, "Routes extraction") : extract();
}
var Hooks = class {
    /**
     * A map of hook names to arrays of hook functions.
     * Each hook name can have multiple associated functions, which are executed in sequence.
     */
    store = /* @__PURE__ */ new Map();
    /**
     * Executes all hooks associated with the specified name, passing the given argument to each hook function.
     * The hooks are invoked sequentially, and the argument may be modified by each hook.
     *
     * @template Hook - The type of the hook name. It should be one of the keys of `HooksMapping`.
     * @param name - The name of the hook whose functions will be executed.
     * @param context - The input value to be passed to each hook function. The value is mutated by each hook function.
     * @returns A promise that resolves once all hook functions have been executed.
     *
     * @example
     * ```typescript
     * const hooks = new Hooks();
     * hooks.on('html:transform:pre', async (ctx) => {
     *   ctx.html = ctx.html.replace(/foo/g, 'bar');
     *   return ctx.html;
     * });
     * const result = await hooks.run('html:transform:pre', { html: '<div>foo</div>' });
     * console.log(result); // '<div>bar</div>'
     * ```
     * @internal
     */
    run(name, context) {
        return __async(this, null, function* () {
            const hooks = this.store.get(name);
            switch (name) {
                case "html:transform:pre": {
                    if (!hooks) {
                        return context.html;
                    }
                    const ctx = __spreadValues({}, context);
                    for (const hook of hooks) {
                        ctx.html = yield hook(ctx);
                    }
                    return ctx.html;
                }
                default:
                    throw new Error(`Running hook "${name}" is not supported.`);
            }
        });
    }
    /**
     * Registers a new hook function under the specified hook name.
     * This function should be a function that takes an argument of type `T` and returns a `string` or `Promise<string>`.
     *
     * @template Hook - The type of the hook name. It should be one of the keys of `HooksMapping`.
     * @param name - The name of the hook under which the function will be registered.
     * @param handler - A function to be executed when the hook is triggered. The handler will be called with an argument
     *                  that may be modified by the hook functions.
     *
     * @remarks
     * - If there are existing handlers registered under the given hook name, the new handler will be added to the list.
     * - If no handlers are registered under the given hook name, a new list will be created with the handler as its first element.
     *
     * @example
     * ```typescript
     * hooks.on('html:transform:pre', async (ctx) => {
     *   return ctx.html.replace(/foo/g, 'bar');
     * });
     * ```
     */
    on(name, handler) {
        const hooks = this.store.get(name);
        if (hooks) {
            hooks.push(handler);
        }
        else {
            this.store.set(name, [handler]);
        }
    }
    /**
     * Checks if there are any hooks registered under the specified name.
     *
     * @param name - The name of the hook to check.
     * @returns `true` if there are hooks registered under the specified name, otherwise `false`.
     */
    has(name) {
        return !!this.store.get(name)?.length;
    }
};
var ServerRouter = class _ServerRouter {
    routeTree;
    /**
     * Creates an instance of the `ServerRouter`.
     *
     * @param routeTree - An instance of `RouteTree` that holds the routing information.
     * The `RouteTree` is used to match request URLs to the appropriate route metadata.
     */
    constructor(routeTree) {
        this.routeTree = routeTree;
    }
    /**
     * Static property to track the ongoing build promise.
     */
    static #extractionPromise;
    /**
     * Creates or retrieves a `ServerRouter` instance based on the provided manifest and URL.
     *
     * If the manifest contains pre-built routes, a new `ServerRouter` is immediately created.
     * Otherwise, it builds the router by extracting routes from the Angular configuration
     * asynchronously. This method ensures that concurrent builds are prevented by re-using
     * the same promise.
     *
     * @param manifest - An instance of `AngularAppManifest` that contains the route information.
     * @param url - The URL for server-side rendering. The URL is needed to configure `ServerPlatformLocation`.
     * This is necessary to ensure that API requests for relative paths succeed, which is crucial for correct route extraction.
     * [Reference](https://github.com/angular/angular/blob/d608b857c689d17a7ffa33bbb510301014d24a17/packages/platform-server/src/location.ts#L51)
     * @returns A promise resolving to a `ServerRouter` instance.
     */
    static from(manifest, url) {
        if (manifest.routes) {
            const routeTree = RouteTree.fromObject(manifest.routes);
            return Promise.resolve(new _ServerRouter(routeTree));
        }
        _ServerRouter.#extractionPromise ??= extractRoutesAndCreateRouteTree({ url, manifest }).then(({ routeTree, errors }) => {
            if (errors.length > 0) {
                throw new Error("Error(s) occurred while extracting routes:\n" + errors.map((error) => `- ${error}`).join("\n"));
            }
            return new _ServerRouter(routeTree);
        }).finally(() => {
            _ServerRouter.#extractionPromise = void 0;
        });
        return _ServerRouter.#extractionPromise;
    }
    /**
     * Matches a request URL against the route tree to retrieve route metadata.
     *
     * This method strips 'index.html' from the URL if it is present and then attempts
     * to find a match in the route tree. If a match is found, it returns the associated
     * route metadata; otherwise, it returns `undefined`.
     *
     * @param url - The URL to be matched against the route tree.
     * @returns The metadata for the matched route or `undefined` if no match is found.
     */
    match(url) {
        let { pathname } = stripIndexHtmlFromURL(url);
        pathname = stripMatrixParams(pathname);
        pathname = decodeURIComponent(pathname);
        return this.routeTree.match(pathname);
    }
};
function sha256(data) {
    return __async(this, null, function* () {
        const encodedData = new TextEncoder().encode(data);
        const hashBuffer = yield crypto.subtle.digest("SHA-256", encodedData);
        const hashParts = [];
        for (const h of new Uint8Array(hashBuffer)) {
            hashParts.push(h.toString(16).padStart(2, "0"));
        }
        return hashParts.join("");
    });
}
var MEDIA_SET_HANDLER_PATTERN = /^this\.media=["'](.*)["'];?$/;
var CSP_MEDIA_ATTR = "ngCspMedia";
var LINK_LOAD_SCRIPT_CONTENT = /* @__PURE__ */ (() => `(() => {
  const CSP_MEDIA_ATTR = '${CSP_MEDIA_ATTR}';
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
})();`)();
var BeastiesBase = class extends Beasties {
};
var InlineCriticalCssProcessor = class _InlineCriticalCssProcessor extends BeastiesBase {
    readFile;
    outputPath;
    addedCspScriptsDocuments = /* @__PURE__ */ new WeakSet();
    documentNonces = /* @__PURE__ */ new WeakMap();
    constructor(readFile2, outputPath) {
        super({
            logger: {
                // eslint-disable-next-line no-console
                warn: (s) => console.warn(s),
                // eslint-disable-next-line no-console
                error: (s) => console.error(s),
                info: () => {
                }
            },
            logLevel: "warn",
            path: outputPath,
            publicPath: void 0,
            compress: false,
            pruneSource: false,
            reduceInlineStyles: false,
            mergeStylesheets: false,
            // Note: if `preload` changes to anything other than `media`, the logic in
            // `embedLinkedStylesheet` will have to be updated.
            preload: "media",
            noscriptFallback: true,
            inlineFonts: true
        });
        this.readFile = readFile2;
        this.outputPath = outputPath;
    }
    /**
     * Override of the Beasties `embedLinkedStylesheet` method
     * that makes it work with Angular's CSP APIs.
     */
    embedLinkedStylesheet(link2, document2) {
        return __async(this, null, function* () {
            if (link2.getAttribute("media") === "print" && link2.next?.name === "noscript") {
                const media = link2.getAttribute("onload")?.match(MEDIA_SET_HANDLER_PATTERN);
                if (media) {
                    link2.removeAttribute("onload");
                    link2.setAttribute("media", media[1]);
                    link2?.next?.remove();
                }
            }
            const returnValue = yield __superGet(_InlineCriticalCssProcessor.prototype, this, "embedLinkedStylesheet").call(this, link2, document2);
            const cspNonce = this.findCspNonce(document2);
            if (cspNonce) {
                const beastiesMedia = link2.getAttribute("onload")?.match(MEDIA_SET_HANDLER_PATTERN);
                if (beastiesMedia) {
                    link2.removeAttribute("onload");
                    link2.setAttribute(CSP_MEDIA_ATTR, beastiesMedia[1]);
                    this.conditionallyInsertCspLoadingScript(document2, cspNonce, link2);
                }
                document2.head.children.forEach((child) => {
                    if (child.tagName === "style" && !child.hasAttribute("nonce")) {
                        child.setAttribute("nonce", cspNonce);
                    }
                });
            }
            return returnValue;
        });
    }
    /**
     * Finds the CSP nonce for a specific document.
     */
    findCspNonce(document2) {
        if (this.documentNonces.has(document2)) {
            return this.documentNonces.get(document2);
        }
        const nonceElement = document2.querySelector("[ngCspNonce], [ngcspnonce]");
        const cspNonce = nonceElement?.getAttribute("ngCspNonce") || nonceElement?.getAttribute("ngcspnonce") || null;
        this.documentNonces.set(document2, cspNonce);
        return cspNonce;
    }
    /**
     * Inserts the `script` tag that swaps the critical CSS at runtime,
     * if one hasn't been inserted into the document already.
     */
    conditionallyInsertCspLoadingScript(document2, nonce, link2) {
        if (this.addedCspScriptsDocuments.has(document2)) {
            return;
        }
        if (document2.head.textContent.includes(LINK_LOAD_SCRIPT_CONTENT)) {
            this.addedCspScriptsDocuments.add(document2);
            return;
        }
        const script = document2.createElement("script");
        script.setAttribute("nonce", nonce);
        script.textContent = LINK_LOAD_SCRIPT_CONTENT;
        document2.head.insertBefore(script, link2);
        this.addedCspScriptsDocuments.add(document2);
    }
};
var LRUCache = class {
    /**
     * The maximum number of items the cache can hold.
     */
    capacity;
    /**
     * Internal storage for the cache, mapping keys to their associated nodes in the linked list.
     */
    cache = /* @__PURE__ */ new Map();
    /**
     * Head of the doubly linked list, representing the most recently used item.
     */
    head;
    /**
     * Tail of the doubly linked list, representing the least recently used item.
     */
    tail;
    /**
     * Creates a new LRUCache instance.
     * @param capacity The maximum number of items the cache can hold.
     */
    constructor(capacity) {
        this.capacity = capacity;
    }
    /**
     * Gets the value associated with the given key.
     * @param key The key to retrieve the value for.
     * @returns The value associated with the key, or undefined if the key is not found.
     */
    get(key) {
        const node2 = this.cache.get(key);
        if (node2) {
            this.moveToHead(node2);
            return node2.value;
        }
        return void 0;
    }
    /**
     * Puts a key-value pair into the cache.
     * If the key already exists, the value is updated.
     * If the cache is full, the least recently used item is evicted.
     * @param key The key to insert or update.
     * @param value The value to associate with the key.
     */
    put(key, value) {
        const cachedNode = this.cache.get(key);
        if (cachedNode) {
            cachedNode.value = value;
            this.moveToHead(cachedNode);
            return;
        }
        const newNode = { key, value, prev: void 0, next: void 0 };
        this.cache.set(key, newNode);
        this.addToHead(newNode);
        if (this.cache.size > this.capacity) {
            const tail = this.removeTail();
            if (tail) {
                this.cache.delete(tail.key);
            }
        }
    }
    /**
     * Adds a node to the head of the linked list.
     * @param node The node to add.
     */
    addToHead(node2) {
        node2.next = this.head;
        node2.prev = void 0;
        if (this.head) {
            this.head.prev = node2;
        }
        this.head = node2;
        if (!this.tail) {
            this.tail = node2;
        }
    }
    /**
     * Removes a node from the linked list.
     * @param node The node to remove.
     */
    removeNode(node2) {
        if (node2.prev) {
            node2.prev.next = node2.next;
        }
        else {
            this.head = node2.next;
        }
        if (node2.next) {
            node2.next.prev = node2.prev;
        }
        else {
            this.tail = node2.prev;
        }
    }
    /**
     * Moves a node to the head of the linked list.
     * @param node The node to move.
     */
    moveToHead(node2) {
        this.removeNode(node2);
        this.addToHead(node2);
    }
    /**
     * Removes the tail node from the linked list.
     * @returns The removed tail node, or undefined if the list is empty.
     */
    removeTail() {
        const node2 = this.tail;
        if (node2) {
            this.removeNode(node2);
        }
        return node2;
    }
};
var MAX_INLINE_CSS_CACHE_ENTRIES = 50;
var SERVER_CONTEXT_VALUE = {
    [RenderMode.Prerender]: "ssg",
    [RenderMode.Server]: "ssr",
    [RenderMode.Client]: ""
};
var AngularServerApp = class {
    options;
    /**
     * Whether prerendered routes should be rendered on demand or served directly.
     *
     * @see {@link AngularServerAppOptions.allowStaticRouteRender} for more details.
     */
    allowStaticRouteRender;
    /**
     * Hooks for extending or modifying server behavior.
     *
     * @see {@link AngularServerAppOptions.hooks} for more details.
     */
    hooks;
    /**
     * Constructs an instance of `AngularServerApp`.
     *
     * @param options Optional configuration options for the server application.
     */
    constructor(options = {}) {
        this.options = options;
        this.allowStaticRouteRender = this.options.allowStaticRouteRender ?? false;
        this.hooks = options.hooks ?? new Hooks();
        if (this.manifest.inlineCriticalCss) {
            this.inlineCriticalCssProcessor = new InlineCriticalCssProcessor((path2) => {
                const fileName = path2.split("/").pop() ?? path2;
                return this.assets.getServerAsset(fileName).text();
            });
        }
    }
    /**
     * The manifest associated with this server application.
     */
    manifest = getAngularAppManifest();
    /**
     * An instance of ServerAsset that handles server-side asset.
     */
    assets = new ServerAssets(this.manifest);
    /**
     * The router instance used for route matching and handling.
     */
    router;
    /**
     * The `inlineCriticalCssProcessor` is responsible for handling critical CSS inlining.
     */
    inlineCriticalCssProcessor;
    /**
     * The bootstrap mechanism for the server application.
     */
    boostrap;
    /**
     * Decorder used to convert a string to a Uint8Array.
     */
    textDecoder = new TextEncoder();
    /**
     * A cache that stores critical CSS to avoid re-processing for every request, improving performance.
     * This cache uses a Least Recently Used (LRU) eviction policy.
     *
     * @see {@link MAX_INLINE_CSS_CACHE_ENTRIES} for the maximum number of entries this cache can hold.
     */
    criticalCssLRUCache = new LRUCache(MAX_INLINE_CSS_CACHE_ENTRIES);
    /**
     * Handles an incoming HTTP request by serving prerendered content, performing server-side rendering,
     * or delivering a static file for client-side rendered routes based on the `RenderMode` setting.
     *
     * @param request - The HTTP request to handle.
     * @param requestContext - Optional context for rendering, such as metadata associated with the request.
     * @returns A promise that resolves to the resulting HTTP response object, or `null` if no matching Angular route is found.
     *
     * @remarks A request to `https://www.example.com/page/index.html` will serve or render the Angular route
     * corresponding to `https://www.example.com/page`.
     */
    handle(request, requestContext) {
        return __async(this, null, function* () {
            const url = new URL(request.url);
            this.router ??= yield ServerRouter.from(this.manifest, url);
            const matchedRoute = this.router.match(url);
            if (!matchedRoute) {
                return null;
            }
            const { redirectTo, status, renderMode } = matchedRoute;
            if (redirectTo !== void 0) {
                return createRedirectResponse(joinUrlParts(request.headers.get("X-Forwarded-Prefix") ?? "", buildPathWithParams(redirectTo, url.pathname)), status);
            }
            if (renderMode === RenderMode.Prerender) {
                const response = yield this.handleServe(request, matchedRoute);
                if (response) {
                    return response;
                }
            }
            return promiseWithAbort(this.handleRendering(request, matchedRoute, requestContext), request.signal, `Request for: ${request.url}`);
        });
    }
    /**
     * Handles serving a prerendered static asset if available for the matched route.
     *
     * This method only supports `GET` and `HEAD` requests.
     *
     * @param request - The incoming HTTP request for serving a static page.
     * @param matchedRoute - The metadata of the matched route for rendering.
     * @returns A promise that resolves to a `Response` object if the prerendered page is found, or `null`.
     */
    handleServe(request, matchedRoute) {
        return __async(this, null, function* () {
            const { headers, renderMode } = matchedRoute;
            if (renderMode !== RenderMode.Prerender) {
                return null;
            }
            const { method } = request;
            if (method !== "GET" && method !== "HEAD") {
                return null;
            }
            const assetPath = this.buildServerAssetPathFromRequest(request);
            const { manifest: { locale }, assets } = this;
            if (!assets.hasServerAsset(assetPath)) {
                return null;
            }
            const { text, hash, size } = assets.getServerAsset(assetPath);
            const etag = `"${hash}"`;
            return request.headers.get("if-none-match") === etag ? new Response(void 0, { status: 304, statusText: "Not Modified" }) : new Response(yield text(), {
                headers: __spreadValues(__spreadValues({
                    "Content-Length": size.toString(),
                    "ETag": etag,
                    "Content-Type": "text/html;charset=UTF-8"
                }, locale !== void 0 ? { "Content-Language": locale } : {}), headers)
            });
        });
    }
    /**
     * Handles the server-side rendering process for the given HTTP request.
     * This method matches the request URL to a route and performs rendering if a matching route is found.
     *
     * @param request - The incoming HTTP request to be processed.
     * @param matchedRoute - The metadata of the matched route for rendering.
     * @param requestContext - Optional additional context for rendering, such as request metadata.
     *
     * @returns A promise that resolves to the rendered response, or null if no matching route is found.
     */
    handleRendering(request, matchedRoute, requestContext) {
        return __async(this, null, function* () {
            const { renderMode, headers, status, preload } = matchedRoute;
            if (!this.allowStaticRouteRender && renderMode === RenderMode.Prerender) {
                return null;
            }
            const url = new URL(request.url);
            const platformProviders = [];
            const { manifest: { bootstrap, locale }, assets } = this;
            const responseInit = {
                status,
                headers: new Headers(__spreadValues(__spreadValues({
                    "Content-Type": "text/html;charset=UTF-8"
                }, locale !== void 0 ? { "Content-Language": locale } : {}), headers))
            };
            if (renderMode === RenderMode.Server) {
                platformProviders.push({
                    provide: REQUEST,
                    useValue: request
                }, {
                    provide: REQUEST_CONTEXT,
                    useValue: requestContext
                }, {
                    provide: RESPONSE_INIT,
                    useValue: responseInit
                });
            }
            else if (renderMode === RenderMode.Client) {
                let html2 = yield this.assets.getServerAsset("index.csr.html").text();
                html2 = yield this.runTransformsOnHtml(html2, url, preload);
                return new Response(html2, responseInit);
            }
            if (locale !== void 0) {
                platformProviders.push({
                    provide: LOCALE_ID,
                    useValue: locale
                });
            }
            this.boostrap ??= yield bootstrap();
            let html = yield assets.getIndexServerHtml().text();
            html = yield this.runTransformsOnHtml(html, url, preload);
            const result2 = yield renderAngular(html, this.boostrap, url, platformProviders, SERVER_CONTEXT_VALUE[renderMode]);
            if (result2.hasNavigationError) {
                return null;
            }
            if (result2.redirectTo) {
                return createRedirectResponse(result2.redirectTo, status);
            }
            if (renderMode === RenderMode.Prerender) {
                const renderedHtml = yield result2.content();
                const finalHtml = yield this.inlineCriticalCss(renderedHtml, url);
                return new Response(finalHtml, responseInit);
            }
            const stream = new ReadableStream({
                start: (controller) => __async(this, null, function* () {
                    const renderedHtml = yield result2.content();
                    const finalHtml = yield this.inlineCriticalCssWithCache(renderedHtml, url);
                    controller.enqueue(finalHtml);
                    controller.close();
                })
            });
            return new Response(stream, responseInit);
        });
    }
    /**
     * Inlines critical CSS into the given HTML content.
     *
     * @param html The HTML content to process.
     * @param url The URL associated with the request, for logging purposes.
     * @returns A promise that resolves to the HTML with inlined critical CSS.
     */
    inlineCriticalCss(html, url) {
        return __async(this, null, function* () {
            const { inlineCriticalCssProcessor } = this;
            if (!inlineCriticalCssProcessor) {
                return html;
            }
            try {
                return yield inlineCriticalCssProcessor.process(html);
            }
            catch (error) {
                console.error(`An error occurred while inlining critical CSS for: ${url}.`, error);
                return html;
            }
        });
    }
    /**
     * Inlines critical CSS into the given HTML content.
     * This method uses a cache to avoid reprocessing the same HTML content multiple times.
     *
     * @param html The HTML content to process.
     * @param url The URL associated with the request, for logging purposes.
     * @returns A promise that resolves to the HTML with inlined critical CSS.
     */
    inlineCriticalCssWithCache(html, url) {
        return __async(this, null, function* () {
            const { inlineCriticalCssProcessor, criticalCssLRUCache, textDecoder } = this;
            if (!inlineCriticalCssProcessor) {
                return textDecoder.encode(html);
            }
            const cacheKey = url.toString();
            const cached = criticalCssLRUCache.get(cacheKey);
            const shaOfContentPreInlinedCss = yield sha256(html);
            if (cached?.shaOfContentPreInlinedCss === shaOfContentPreInlinedCss) {
                return cached.contentWithCriticialCSS;
            }
            const processedHtml = yield this.inlineCriticalCss(html, url);
            const finalHtml = textDecoder.encode(processedHtml);
            criticalCssLRUCache.put(cacheKey, {
                shaOfContentPreInlinedCss,
                contentWithCriticialCSS: finalHtml
            });
            return finalHtml;
        });
    }
    /**
     * Constructs the asset path on the server based on the provided HTTP request.
     *
     * This method processes the incoming request URL to derive a path corresponding
     * to the requested asset. It ensures the path points to the correct file (e.g.,
     * `index.html`) and removes any base href if it is not part of the asset path.
     *
     * @param request - The incoming HTTP request object.
     * @returns The server-relative asset path derived from the request.
     */
    buildServerAssetPathFromRequest(request) {
        let { pathname: assetPath } = new URL(request.url);
        if (!assetPath.endsWith("/index.html")) {
            assetPath = joinUrlParts(assetPath, "index.html");
        }
        const { baseHref } = this.manifest;
        if (baseHref.length > 1 && assetPath.startsWith(baseHref)) {
            assetPath = assetPath.slice(baseHref.length);
        }
        return stripLeadingSlash(assetPath);
    }
    /**
     * Runs the registered transform hooks on the given HTML content.
     *
     * @param html - The raw HTML content to be transformed.
     * @param url - The URL associated with the HTML content, used for context during transformations.
     * @param preload - An array of URLs representing the JavaScript resources to preload.
     * @returns A promise that resolves to the transformed HTML string.
     */
    runTransformsOnHtml(html, url, preload) {
        return __async(this, null, function* () {
            if (this.hooks.has("html:transform:pre")) {
                html = yield this.hooks.run("html:transform:pre", { html, url });
            }
            if (preload?.length) {
                html = appendPreloadHintsToHtml(html, preload);
            }
            return html;
        });
    }
    /**
     * Serves the client-side version of the application.
     * TODO(alanagius): Remove this method in version 22.
     * @internal
     */
    serveClientSidePage() {
        return __async(this, null, function* () {
            const { manifest: { locale }, assets } = this;
            const html = yield assets.getServerAsset("index.csr.html").text();
            return new Response(html, {
                headers: new Headers(__spreadValues({
                    "Content-Type": "text/html;charset=UTF-8"
                }, locale !== void 0 ? { "Content-Language": locale } : {}))
            });
        });
    }
};
var angularServerApp;
function getOrCreateAngularServerApp(options) {
    return angularServerApp ??= new AngularServerApp(options);
}
function destroyAngularServerApp() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
        _resetCompiledComponents();
    }
    angularServerApp = void 0;
}
function appendPreloadHintsToHtml(html, preload) {
    const bodyCloseIdx = html.lastIndexOf("</body>");
    if (bodyCloseIdx === -1) {
        return html;
    }
    return [
        html.slice(0, bodyCloseIdx),
        ...preload.map((val) => `<link rel="modulepreload" href="${val}">`),
        html.slice(bodyCloseIdx)
    ].join("\n");
}
function createRedirectResponse(location, status = 302) {
    return new Response(null, {
        status,
        headers: {
            "Location": location
        }
    });
}
function getPotentialLocaleIdFromUrl(url, basePath) {
    const { pathname } = url;
    let start = basePath.length;
    if (pathname[start] === "/") {
        start++;
    }
    let end = pathname.indexOf("/", start);
    if (end === -1) {
        end = pathname.length;
    }
    return pathname.slice(start, end);
}
function parseLanguageHeader(header) {
    if (header === "*") {
        return /* @__PURE__ */ new Map([["*", 1]]);
    }
    const parsedValues = header.split(",").map((item) => {
        const [locale, qualityValue] = item.split(";", 2).map((v) => v.trim());
        let quality = qualityValue?.startsWith("q=") ? parseFloat(qualityValue.slice(2)) : void 0;
        if (typeof quality !== "number" || isNaN(quality) || quality < 0 || quality > 1) {
            quality = 1;
        }
        return [locale, quality];
    }).sort(([_localeA, qualityA], [_localeB, qualityB]) => qualityB - qualityA);
    return new Map(parsedValues);
}
function getPreferredLocale(header, supportedLocales) {
    if (supportedLocales.length < 2) {
        return supportedLocales[0];
    }
    const parsedLocales = parseLanguageHeader(header);
    if (parsedLocales.size === 0 || parsedLocales.size === 1 && parsedLocales.has("*")) {
        return supportedLocales[0];
    }
    const normalizedSupportedLocales = /* @__PURE__ */ new Map();
    for (const locale of supportedLocales) {
        normalizedSupportedLocales.set(normalizeLocale(locale), locale);
    }
    let bestMatch;
    const qualityZeroNormalizedLocales = /* @__PURE__ */ new Set();
    for (const [locale, quality] of parsedLocales) {
        const normalizedLocale = normalizeLocale(locale);
        if (quality === 0) {
            qualityZeroNormalizedLocales.add(normalizedLocale);
            continue;
        }
        if (normalizedSupportedLocales.has(normalizedLocale)) {
            return normalizedSupportedLocales.get(normalizedLocale);
        }
        if (bestMatch !== void 0) {
            continue;
        }
        const [languagePrefix] = normalizedLocale.split("-", 1);
        for (const supportedLocale of normalizedSupportedLocales.keys()) {
            if (supportedLocale.startsWith(languagePrefix)) {
                bestMatch = normalizedSupportedLocales.get(supportedLocale);
                break;
            }
        }
    }
    if (bestMatch !== void 0) {
        return bestMatch;
    }
    for (const [normalizedLocale, locale] of normalizedSupportedLocales) {
        if (!qualityZeroNormalizedLocales.has(normalizedLocale)) {
            return locale;
        }
    }
}
function normalizeLocale(locale) {
    return locale.toLowerCase();
}
var AngularAppEngine = class _AngularAppEngine {
    /**
     * A flag to enable or disable the rendering of prerendered routes.
     *
     * Typically used during development to avoid prerendering all routes ahead of time,
     * allowing them to be rendered on the fly as requested.
     *
     * @private
     */
    static \u0275allowStaticRouteRender = false;
    /**
     * Hooks for extending or modifying the behavior of the server application.
     * These hooks are used by the Angular CLI when running the development server and
     * provide extensibility points for the application lifecycle.
     *
     * @private
     */
    static \u0275hooks = /* @__PURE__ */ new Hooks();
    /**
     * The manifest for the server application.
     */
    manifest = getAngularAppEngineManifest();
    /**
     * A set of allowed hostnames for the server application.
     */
    allowedHosts;
    /**
     * A map of supported locales from the server application's manifest.
     */
    supportedLocales = Object.keys(this.manifest.supportedLocales);
    /**
     * A cache that holds entry points, keyed by their potential locale string.
     */
    entryPointsCache = /* @__PURE__ */ new Map();
    /**
     * Creates a new instance of the Angular server application engine.
     * @param options Options for the Angular server application engine.
     */
    constructor(options) {
        this.allowedHosts = /* @__PURE__ */ new Set([...options?.allowedHosts ?? [], ...this.manifest.allowedHosts]);
    }
    /**
     * Handles an incoming HTTP request by serving prerendered content, performing server-side rendering,
     * or delivering a static file for client-side rendered routes based on the `RenderMode` setting.
     *
     * @param request - The HTTP request to handle.
     * @param requestContext - Optional context for rendering, such as metadata associated with the request.
     * @returns A promise that resolves to the resulting HTTP response object, or `null` if no matching Angular route is found.
     *
     * @remarks A request to `https://www.example.com/page/index.html` will serve or render the Angular route
     * corresponding to `https://www.example.com/page`.
     *
     * @remarks
     * To prevent potential Server-Side Request Forgery (SSRF), this function verifies the hostname
     * of the `request.url` against a list of authorized hosts.
     * If the hostname is not recognized and `allowedHosts` is not empty, a Client-Side Rendered (CSR) version of the
     * page is returned otherwise a 400 Bad Request is returned.
     * Resolution:
     * Authorize your hostname by configuring `allowedHosts` in `angular.json` in:
     * `projects.[project-name].architect.build.options.security.allowedHosts`.
     * Alternatively, you pass it directly through the configuration options of `AngularAppEngine`.
     *
     * For more information see: https://angular.dev/best-practices/security#preventing-server-side-request-forgery-ssrf
     */
    handle(request, requestContext) {
        return __async(this, null, function* () {
            const allowedHost = this.allowedHosts;
            try {
                validateRequest(request, allowedHost);
            }
            catch (error) {
                return this.handleValidationError(error, request);
            }
            const { request: securedRequest, onError: onHeaderValidationError } = cloneRequestAndPatchHeaders(request, allowedHost);
            const serverApp = yield this.getAngularServerAppForRequest(securedRequest);
            if (serverApp) {
                return Promise.race([
                    onHeaderValidationError.then((error) => this.handleValidationError(error, securedRequest)),
                    serverApp.handle(securedRequest, requestContext)
                ]);
            }
            if (this.supportedLocales.length > 1) {
                return this.redirectBasedOnAcceptLanguage(request);
            }
            return null;
        });
    }
    /**
     * Handles requests for the base path when i18n is enabled.
     * Redirects the user to a locale-specific path based on the `Accept-Language` header.
     *
     * @param request The incoming request.
     * @returns A `Response` object with a 302 redirect, or `null` if i18n is not enabled
     *          or the request is not for the base path.
     */
    redirectBasedOnAcceptLanguage(request) {
        const { basePath, supportedLocales } = this.manifest;
        const { pathname } = new URL(request.url);
        if (pathname !== basePath) {
            return null;
        }
        const preferredLocale = getPreferredLocale(request.headers.get("Accept-Language") || "*", this.supportedLocales);
        if (preferredLocale) {
            const subPath = supportedLocales[preferredLocale];
            if (subPath !== void 0) {
                return new Response(null, {
                    status: 302,
                    // Use a 302 redirect as language preference may change.
                    headers: {
                        "Location": joinUrlParts(pathname, subPath),
                        "Vary": "Accept-Language"
                    }
                });
            }
        }
        return null;
    }
    /**
     * Retrieves the Angular server application instance for a given request.
     *
     * This method checks if the request URL corresponds to an Angular application entry point.
     * If so, it initializes or retrieves an instance of the Angular server application for that entry point.
     * Requests that resemble file requests (except for `/index.html`) are skipped.
     *
     * @param request - The incoming HTTP request object.
     * @returns A promise that resolves to an `AngularServerApp` instance if a valid entry point is found,
     * or `null` if no entry point matches the request URL.
     */
    getAngularServerAppForRequest(request) {
        return __async(this, null, function* () {
            const url = new URL(request.url);
            const entryPoint = yield this.getEntryPointExportsForUrl(url);
            if (!entryPoint) {
                return null;
            }
            const \u0275getOrCreateAngularServerApp = entryPoint.\u0275getOrCreateAngularServerApp;
            const serverApp = \u0275getOrCreateAngularServerApp({
                allowStaticRouteRender: _AngularAppEngine.\u0275allowStaticRouteRender,
                hooks: _AngularAppEngine.\u0275hooks
            });
            return serverApp;
        });
    }
    /**
     * Retrieves the exports for a specific entry point, caching the result.
     *
     * @param potentialLocale - The locale string used to find the corresponding entry point.
     * @returns A promise that resolves to the entry point exports or `undefined` if not found.
     */
    getEntryPointExports(potentialLocale) {
        const cachedEntryPoint = this.entryPointsCache.get(potentialLocale);
        if (cachedEntryPoint) {
            return cachedEntryPoint;
        }
        const { entryPoints } = this.manifest;
        const entryPoint = entryPoints[potentialLocale];
        if (!entryPoint) {
            return void 0;
        }
        const entryPointExports = entryPoint();
        this.entryPointsCache.set(potentialLocale, entryPointExports);
        return entryPointExports;
    }
    /**
     * Retrieves the entry point for a given URL by determining the locale and mapping it to
     * the appropriate application bundle.
     *
     * This method determines the appropriate entry point and locale for rendering the application by examining the URL.
     * If there is only one entry point available, it is returned regardless of the URL.
     * Otherwise, the method extracts a potential locale identifier from the URL and looks up the corresponding entry point.
     *
     * @param url - The URL of the request.
     * @returns A promise that resolves to the entry point exports or `undefined` if not found.
     */
    getEntryPointExportsForUrl(url) {
        const { basePath, supportedLocales } = this.manifest;
        if (this.supportedLocales.length === 1) {
            return this.getEntryPointExports(supportedLocales[this.supportedLocales[0]]);
        }
        const potentialLocale = getPotentialLocaleIdFromUrl(url, basePath);
        return this.getEntryPointExports(potentialLocale) ?? this.getEntryPointExports("");
    }
    /**
     * Handles validation errors by logging the error and returning an appropriate response.
     *
     * @param error - The validation error to handle.
     * @param request - The HTTP request that caused the validation error.
     * @returns A promise that resolves to a `Response` object with a 400 status code if allowed hosts are configured,
     * or `null` if allowed hosts are not configured (in which case the request is served client-side).
     */
    handleValidationError(error, request) {
        return __async(this, null, function* () {
            const isAllowedHostConfigured = this.allowedHosts.size > 0;
            const errorMessage = error.message;
            console.error(`ERROR: Bad Request ("${request.url}").
` + errorMessage + (isAllowedHostConfigured ? "" : "\nFalling back to client side rendering. This will become a 400 Bad Request in a future major version.") + "\n\nFor more information, see https://angular.dev/best-practices/security#preventing-server-side-request-forgery-ssrf");
            if (isAllowedHostConfigured) {
                return new Response(errorMessage, {
                    status: 400,
                    statusText: "Bad Request",
                    headers: { "Content-Type": "text/plain" }
                });
            }
            const serverApp = yield this.getAngularServerAppForRequest(request);
            return serverApp?.serveClientSidePage() ?? null;
        });
    }
};
function createRequestHandler(handler) {
    handler["__ng_request_handler__"] = true;
    return handler;
}
export { AngularAppEngine, PrerenderFallback, RenderMode, createRequestHandler, provideServerRendering, withAppShell, withRoutes, InlineCriticalCssProcessor as \u0275InlineCriticalCssProcessor, destroyAngularServerApp as \u0275destroyAngularServerApp, extractRoutesAndCreateRouteTree as \u0275extractRoutesAndCreateRouteTree, getOrCreateAngularServerApp as \u0275getOrCreateAngularServerApp, getRoutesFromAngularRouterConfig as \u0275getRoutesFromAngularRouterConfig, setAngularAppEngineManifest as \u0275setAngularAppEngineManifest, setAngularAppManifest as \u0275setAngularAppManifest };
//# sourceMappingURL=_angular_ssr.nJnMwNEupe-dev.js.map
