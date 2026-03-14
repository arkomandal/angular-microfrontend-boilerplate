import { map } from "@nf-internal/chunk-NJRJCSP3";
import "@nf-internal/chunk-KZ4KTAEI";
import "@nf-internal/chunk-M5X7A4V7";
import { Observable, createErrorClass } from "@nf-internal/chunk-PA6ZQ4YT";
import "@nf-internal/chunk-WXPTAMPH";
// node_modules/rxjs/dist/esm/internal/ajax/getXHRResponse.js
function getXHRResponse(xhr) {
    switch (xhr.responseType) {
        case "json": {
            if ("response" in xhr) {
                return xhr.response;
            }
            else {
                const ieXHR = xhr;
                return JSON.parse(ieXHR.responseText);
            }
        }
        case "document":
            return xhr.responseXML;
        case "text":
        default: {
            if ("response" in xhr) {
                return xhr.response;
            }
            else {
                const ieXHR = xhr;
                return ieXHR.responseText;
            }
        }
    }
}
// node_modules/rxjs/dist/esm/internal/ajax/AjaxResponse.js
var AjaxResponse = class {
    constructor(originalEvent, xhr, request, type = "download_load") {
        this.originalEvent = originalEvent;
        this.xhr = xhr;
        this.request = request;
        this.type = type;
        const { status, responseType } = xhr;
        this.status = status !== null && status !== void 0 ? status : 0;
        this.responseType = responseType !== null && responseType !== void 0 ? responseType : "";
        const allHeaders = xhr.getAllResponseHeaders();
        this.responseHeaders = allHeaders ? allHeaders.split("\n").reduce((headers, line) => {
            const index = line.indexOf(": ");
            headers[line.slice(0, index)] = line.slice(index + 2);
            return headers;
        }, {}) : {};
        this.response = getXHRResponse(xhr);
        const { loaded, total } = originalEvent;
        this.loaded = loaded;
        this.total = total;
    }
};
// node_modules/rxjs/dist/esm/internal/ajax/errors.js
var AjaxError = createErrorClass((_super) => function AjaxErrorImpl(message, xhr, request) {
    this.message = message;
    this.name = "AjaxError";
    this.xhr = xhr;
    this.request = request;
    this.status = xhr.status;
    this.responseType = xhr.responseType;
    let response;
    try {
        response = getXHRResponse(xhr);
    }
    catch (err) {
        response = xhr.responseText;
    }
    this.response = response;
});
var AjaxTimeoutError = (() => {
    function AjaxTimeoutErrorImpl(xhr, request) {
        AjaxError.call(this, "ajax timeout", xhr, request);
        this.name = "AjaxTimeoutError";
        return this;
    }
    AjaxTimeoutErrorImpl.prototype = Object.create(AjaxError.prototype);
    return AjaxTimeoutErrorImpl;
})();
// node_modules/rxjs/dist/esm/internal/ajax/ajax.js
function ajaxGet(url, headers) {
    return ajax({ method: "GET", url, headers });
}
function ajaxPost(url, body, headers) {
    return ajax({ method: "POST", url, body, headers });
}
function ajaxDelete(url, headers) {
    return ajax({ method: "DELETE", url, headers });
}
function ajaxPut(url, body, headers) {
    return ajax({ method: "PUT", url, body, headers });
}
function ajaxPatch(url, body, headers) {
    return ajax({ method: "PATCH", url, body, headers });
}
var mapResponse = map((x) => x.response);
function ajaxGetJSON(url, headers) {
    return mapResponse(ajax({
        method: "GET",
        url,
        headers
    }));
}
var ajax = (() => {
    const create = (urlOrConfig) => {
        const config = typeof urlOrConfig === "string" ? {
            url: urlOrConfig
        } : urlOrConfig;
        return fromAjax(config);
    };
    create.get = ajaxGet;
    create.post = ajaxPost;
    create.delete = ajaxDelete;
    create.put = ajaxPut;
    create.patch = ajaxPatch;
    create.getJSON = ajaxGetJSON;
    return create;
})();
var UPLOAD = "upload";
var DOWNLOAD = "download";
var LOADSTART = "loadstart";
var PROGRESS = "progress";
var LOAD = "load";
function fromAjax(init) {
    return new Observable((destination) => {
        var _a, _b;
        const config = Object.assign({ async: true, crossDomain: false, withCredentials: false, method: "GET", timeout: 0, responseType: "json" }, init);
        const { queryParams, body: configuredBody, headers: configuredHeaders } = config;
        let url = config.url;
        if (!url) {
            throw new TypeError("url is required");
        }
        if (queryParams) {
            let searchParams;
            if (url.includes("?")) {
                const parts = url.split("?");
                if (2 < parts.length) {
                    throw new TypeError("invalid url");
                }
                searchParams = new URLSearchParams(parts[1]);
                new URLSearchParams(queryParams).forEach((value, key) => searchParams.set(key, value));
                url = parts[0] + "?" + searchParams;
            }
            else {
                searchParams = new URLSearchParams(queryParams);
                url = url + "?" + searchParams;
            }
        }
        const headers = {};
        if (configuredHeaders) {
            for (const key in configuredHeaders) {
                if (configuredHeaders.hasOwnProperty(key)) {
                    headers[key.toLowerCase()] = configuredHeaders[key];
                }
            }
        }
        const crossDomain = config.crossDomain;
        if (!crossDomain && !("x-requested-with" in headers)) {
            headers["x-requested-with"] = "XMLHttpRequest";
        }
        const { withCredentials, xsrfCookieName, xsrfHeaderName } = config;
        if ((withCredentials || !crossDomain) && xsrfCookieName && xsrfHeaderName) {
            const xsrfCookie = (_b = (_a = document === null || document === void 0 ? void 0 : document.cookie.match(new RegExp(`(^|;\\s*)(${xsrfCookieName})=([^;]*)`))) === null || _a === void 0 ? void 0 : _a.pop()) !== null && _b !== void 0 ? _b : "";
            if (xsrfCookie) {
                headers[xsrfHeaderName] = xsrfCookie;
            }
        }
        const body = extractContentTypeAndMaybeSerializeBody(configuredBody, headers);
        const _request = Object.assign(Object.assign({}, config), {
            url,
            headers,
            body
        });
        let xhr;
        xhr = init.createXHR ? init.createXHR() : new XMLHttpRequest();
        {
            const { progressSubscriber, includeDownloadProgress = false, includeUploadProgress = false } = init;
            const addErrorEvent = (type, errorFactory) => {
                xhr.addEventListener(type, () => {
                    var _a2;
                    const error = errorFactory();
                    (_a2 = progressSubscriber === null || progressSubscriber === void 0 ? void 0 : progressSubscriber.error) === null || _a2 === void 0 ? void 0 : _a2.call(progressSubscriber, error);
                    destination.error(error);
                });
            };
            addErrorEvent("timeout", () => new AjaxTimeoutError(xhr, _request));
            addErrorEvent("abort", () => new AjaxError("aborted", xhr, _request));
            const createResponse = (direction, event) => new AjaxResponse(event, xhr, _request, `${direction}_${event.type}`);
            const addProgressEvent = (target, type, direction) => {
                target.addEventListener(type, (event) => {
                    destination.next(createResponse(direction, event));
                });
            };
            if (includeUploadProgress) {
                [LOADSTART, PROGRESS, LOAD].forEach((type) => addProgressEvent(xhr.upload, type, UPLOAD));
            }
            if (progressSubscriber) {
                [LOADSTART, PROGRESS].forEach((type) => xhr.upload.addEventListener(type, (e) => {
                    var _a2;
                    return (_a2 = progressSubscriber === null || progressSubscriber === void 0 ? void 0 : progressSubscriber.next) === null || _a2 === void 0 ? void 0 : _a2.call(progressSubscriber, e);
                }));
            }
            if (includeDownloadProgress) {
                [LOADSTART, PROGRESS].forEach((type) => addProgressEvent(xhr, type, DOWNLOAD));
            }
            const emitError = (status) => {
                const msg = "ajax error" + (status ? " " + status : "");
                destination.error(new AjaxError(msg, xhr, _request));
            };
            xhr.addEventListener("error", (e) => {
                var _a2;
                (_a2 = progressSubscriber === null || progressSubscriber === void 0 ? void 0 : progressSubscriber.error) === null || _a2 === void 0 ? void 0 : _a2.call(progressSubscriber, e);
                emitError();
            });
            xhr.addEventListener(LOAD, (event) => {
                var _a2, _b2;
                const { status } = xhr;
                if (status < 400) {
                    (_a2 = progressSubscriber === null || progressSubscriber === void 0 ? void 0 : progressSubscriber.complete) === null || _a2 === void 0 ? void 0 : _a2.call(progressSubscriber);
                    let response;
                    try {
                        response = createResponse(DOWNLOAD, event);
                    }
                    catch (err) {
                        destination.error(err);
                        return;
                    }
                    destination.next(response);
                    destination.complete();
                }
                else {
                    (_b2 = progressSubscriber === null || progressSubscriber === void 0 ? void 0 : progressSubscriber.error) === null || _b2 === void 0 ? void 0 : _b2.call(progressSubscriber, event);
                    emitError(status);
                }
            });
        }
        const { user, method, async } = _request;
        if (user) {
            xhr.open(method, url, async, user, _request.password);
        }
        else {
            xhr.open(method, url, async);
        }
        if (async) {
            xhr.timeout = _request.timeout;
            xhr.responseType = _request.responseType;
        }
        if ("withCredentials" in xhr) {
            xhr.withCredentials = _request.withCredentials;
        }
        for (const key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
        if (body) {
            xhr.send(body);
        }
        else {
            xhr.send();
        }
        return () => {
            if (xhr && xhr.readyState !== 4) {
                xhr.abort();
            }
        };
    });
}
function extractContentTypeAndMaybeSerializeBody(body, headers) {
    var _a;
    if (!body || typeof body === "string" || isFormData(body) || isURLSearchParams(body) || isArrayBuffer(body) || isFile(body) || isBlob(body) || isReadableStream(body)) {
        return body;
    }
    if (isArrayBufferView(body)) {
        return body.buffer;
    }
    if (typeof body === "object") {
        headers["content-type"] = (_a = headers["content-type"]) !== null && _a !== void 0 ? _a : "application/json;charset=utf-8";
        return JSON.stringify(body);
    }
    throw new TypeError("Unknown body type");
}
var _toString = Object.prototype.toString;
function toStringCheck(obj, name) {
    return _toString.call(obj) === `[object ${name}]`;
}
function isArrayBuffer(body) {
    return toStringCheck(body, "ArrayBuffer");
}
function isFile(body) {
    return toStringCheck(body, "File");
}
function isBlob(body) {
    return toStringCheck(body, "Blob");
}
function isArrayBufferView(body) {
    return typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(body);
}
function isFormData(body) {
    return typeof FormData !== "undefined" && body instanceof FormData;
}
function isURLSearchParams(body) {
    return typeof URLSearchParams !== "undefined" && body instanceof URLSearchParams;
}
function isReadableStream(body) {
    return typeof ReadableStream !== "undefined" && body instanceof ReadableStream;
}
export { AjaxError, AjaxResponse, AjaxTimeoutError, ajax };
//# sourceMappingURL=rxjs_ajax.ljcHde57Rd-dev.js.map
