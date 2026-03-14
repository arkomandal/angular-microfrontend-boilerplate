import { BlockScrollStrategy, CdkConnectedOverlay, CdkOverlayOrigin, CloseScrollStrategy, ConnectedOverlayPositionChange, ConnectionPositionPair, FlexibleConnectedPositionStrategy, GlobalPositionStrategy, NoopScrollStrategy, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayModule, OverlayOutsideClickDispatcher, OverlayPositionBuilder, OverlayRef, RepositionScrollStrategy, STANDARD_DROPDOWN_ADJACENT_POSITIONS, STANDARD_DROPDOWN_BELOW_POSITIONS, ScrollStrategyOptions, ScrollingVisibility, createBlockScrollStrategy, createCloseScrollStrategy, createFlexibleConnectedPositionStrategy, createGlobalPositionStrategy, createNoopScrollStrategy, createOverlayRef, createRepositionScrollStrategy, validateHorizontalPosition, validateVerticalPosition } from "@nf-internal/chunk-KN5HOZMH";
import "@nf-internal/chunk-SWBBLCJO";
import "@nf-internal/chunk-RNYUCYEO";
import "@nf-internal/chunk-RLOP7IVB";
import { CdkFixedSizeVirtualScroll, CdkScrollable, CdkScrollableModule, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableElement, CdkVirtualScrollableWindow, ScrollDispatcher, ViewportRuler } from "@nf-internal/chunk-LLIBQE7U";
import "@nf-internal/chunk-PSY7FISX";
import "@nf-internal/chunk-FE42P4QJ";
import "@nf-internal/chunk-5MYPNHIQ";
import "@nf-internal/chunk-CW4NLAXQ";
import "@nf-internal/chunk-ZYGAQD4B";
import "@nf-internal/chunk-ADVBEMXY";
import "@nf-internal/chunk-CLGTVECU";
import "@nf-internal/chunk-KSPW4LU3";
import "@nf-internal/chunk-WYINW7RH";
import "@nf-internal/chunk-4ECZME2J";
import "@nf-internal/chunk-URG5APGO";
import { Dir } from "@nf-internal/chunk-SK4UPIA3";
import "@nf-internal/chunk-SK4UB4LE";
import "@nf-internal/chunk-WXPTAMPH";
// node_modules/@angular/cdk/fesm2022/overlay.mjs
import * as i0 from "@angular/core";
import { inject, RendererFactory2, Injectable } from "@angular/core";
import "@angular/common";
import "rxjs";
import "rxjs/operators";
var FullscreenOverlayContainer = class _FullscreenOverlayContainer extends OverlayContainer {
    _renderer = inject(RendererFactory2).createRenderer(null, null);
    _fullScreenEventName;
    _cleanupFullScreenListener;
    constructor() {
        super();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._cleanupFullScreenListener?.();
    }
    _createContainer() {
        const eventName = this._getEventName();
        super._createContainer();
        this._adjustParentForFullscreenChange();
        if (eventName) {
            this._cleanupFullScreenListener?.();
            this._cleanupFullScreenListener = this._renderer.listen("document", eventName, () => {
                this._adjustParentForFullscreenChange();
            });
        }
    }
    _adjustParentForFullscreenChange() {
        if (this._containerElement) {
            const fullscreenElement = this.getFullscreenElement();
            const parent = fullscreenElement || this._document.body;
            parent.appendChild(this._containerElement);
        }
    }
    _getEventName() {
        if (!this._fullScreenEventName) {
            const _document = this._document;
            if (_document.fullscreenEnabled) {
                this._fullScreenEventName = "fullscreenchange";
            }
            else if (_document.webkitFullscreenEnabled) {
                this._fullScreenEventName = "webkitfullscreenchange";
            }
            else if (_document.mozFullScreenEnabled) {
                this._fullScreenEventName = "mozfullscreenchange";
            }
            else if (_document.msFullscreenEnabled) {
                this._fullScreenEventName = "MSFullscreenChange";
            }
        }
        return this._fullScreenEventName;
    }
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     */
    getFullscreenElement() {
        const _document = this._document;
        return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
    }
    static \u0275fac = function FullscreenOverlayContainer_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _FullscreenOverlayContainer)();
    };
    static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
        token: _FullscreenOverlayContainer,
        factory: _FullscreenOverlayContainer.\u0275fac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(FullscreenOverlayContainer, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
export { BlockScrollStrategy, CdkConnectedOverlay, CdkOverlayOrigin, CdkScrollable, CloseScrollStrategy, ConnectedOverlayPositionChange, ConnectionPositionPair, FlexibleConnectedPositionStrategy, FullscreenOverlayContainer, GlobalPositionStrategy, NoopScrollStrategy, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayModule, OverlayOutsideClickDispatcher, OverlayPositionBuilder, OverlayRef, RepositionScrollStrategy, STANDARD_DROPDOWN_ADJACENT_POSITIONS, STANDARD_DROPDOWN_BELOW_POSITIONS, ScrollDispatcher, ScrollStrategyOptions, ScrollingVisibility, ViewportRuler, createBlockScrollStrategy, createCloseScrollStrategy, createFlexibleConnectedPositionStrategy, createGlobalPositionStrategy, createNoopScrollStrategy, createOverlayRef, createRepositionScrollStrategy, validateHorizontalPosition, validateVerticalPosition, CdkFixedSizeVirtualScroll as \u0275\u0275CdkFixedSizeVirtualScroll, CdkScrollableModule as \u0275\u0275CdkScrollableModule, CdkVirtualForOf as \u0275\u0275CdkVirtualForOf, CdkVirtualScrollViewport as \u0275\u0275CdkVirtualScrollViewport, CdkVirtualScrollableElement as \u0275\u0275CdkVirtualScrollableElement, CdkVirtualScrollableWindow as \u0275\u0275CdkVirtualScrollableWindow, Dir as \u0275\u0275Dir };
//# sourceMappingURL=_angular_cdk_overlay.Ig6dB18WBE-dev.js.map
