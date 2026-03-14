import { a } from "@nf-internal/chunk-WWJFM5W5";
import { a as h } from "@nf-internal/chunk-F64D2ISK";
import { QueryList as u, InjectionToken as d } from "@angular/core";
import { Subscription as I, isObservable as l, Subject as f, of as p } from "rxjs";
import { take as c } from "rxjs/operators";
var r = class {
    _activeItemIndex = -1;
    _activeItem = null;
    _shouldActivationFollowFocus = !1;
    _horizontalOrientation = "ltr";
    _skipPredicateFn = t => !1;
    _trackByFn = t => t;
    _items = [];
    _typeahead;
    _typeaheadSubscription = I.EMPTY;
    _hasInitialFocused = !1;
    _initializeFocus() { if (this._hasInitialFocused || this._items.length === 0)
        return; let t = 0; for (let i = 0; i < this._items.length; i++)
        if (!this._skipPredicateFn(this._items[i]) && !this._isItemDisabled(this._items[i])) {
            t = i;
            break;
        } let e = this._items[t]; e.makeFocusable ? (this._activeItem?.unfocus(), this._activeItemIndex = t, this._activeItem = e, this._typeahead?.setCurrentSelectedItemIndex(t), e.makeFocusable()) : this.focusItem(t), this._hasInitialFocused = !0; }
    constructor(t, e) { t instanceof u ? (this._items = t.toArray(), t.changes.subscribe(i => { this._items = i.toArray(), this._typeahead?.setItems(this._items), this._updateActiveItemIndex(this._items), this._initializeFocus(); })) : l(t) ? t.subscribe(i => { this._items = i, this._typeahead?.setItems(i), this._updateActiveItemIndex(i), this._initializeFocus(); }) : (this._items = t, this._initializeFocus()), typeof e.shouldActivationFollowFocus == "boolean" && (this._shouldActivationFollowFocus = e.shouldActivationFollowFocus), e.horizontalOrientation && (this._horizontalOrientation = e.horizontalOrientation), e.skipPredicate && (this._skipPredicateFn = e.skipPredicate), e.trackBy && (this._trackByFn = e.trackBy), typeof e.typeAheadDebounceInterval < "u" && this._setTypeAhead(e.typeAheadDebounceInterval); }
    change = new f;
    destroy() { this._typeaheadSubscription.unsubscribe(), this._typeahead?.destroy(), this.change.complete(); }
    onKeydown(t) { switch (t.key) {
        case "Tab": return;
        case "ArrowDown":
            this._focusNextItem();
            break;
        case "ArrowUp":
            this._focusPreviousItem();
            break;
        case "ArrowRight":
            this._horizontalOrientation === "rtl" ? this._collapseCurrentItem() : this._expandCurrentItem();
            break;
        case "ArrowLeft":
            this._horizontalOrientation === "rtl" ? this._expandCurrentItem() : this._collapseCurrentItem();
            break;
        case "Home":
            this._focusFirstItem();
            break;
        case "End":
            this._focusLastItem();
            break;
        case "Enter":
        case " ":
            this._activateCurrentItem();
            break;
        default:
            if (t.key === "*") {
                this._expandAllItemsAtCurrentItemLevel();
                break;
            }
            this._typeahead?.handleKey(t);
            return;
    } this._typeahead?.reset(), t.preventDefault(); }
    getActiveItemIndex() { return this._activeItemIndex; }
    getActiveItem() { return this._activeItem; }
    _focusFirstItem() { this.focusItem(this._findNextAvailableItemIndex(-1)); }
    _focusLastItem() { this.focusItem(this._findPreviousAvailableItemIndex(this._items.length)); }
    _focusNextItem() { this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex)); }
    _focusPreviousItem() { this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex)); }
    focusItem(t, e = {}) { e.emitChangeEvent ??= !0; let i = typeof t == "number" ? t : this._items.findIndex(m => this._trackByFn(m) === this._trackByFn(t)); if (i < 0 || i >= this._items.length)
        return; let s = this._items[i]; if (this._activeItem !== null && this._trackByFn(s) === this._trackByFn(this._activeItem))
        return; let _ = this._activeItem; this._activeItem = s ?? null, this._activeItemIndex = i, this._typeahead?.setCurrentSelectedItemIndex(i), this._activeItem?.focus(), _?.unfocus(), e.emitChangeEvent && this.change.next(this._activeItem), this._shouldActivationFollowFocus && this._activateCurrentItem(); }
    _updateActiveItemIndex(t) { let e = this._activeItem; if (!e)
        return; let i = t.findIndex(s => this._trackByFn(s) === this._trackByFn(e)); i > -1 && i !== this._activeItemIndex && (this._activeItemIndex = i, this._typeahead?.setCurrentSelectedItemIndex(i)); }
    _setTypeAhead(t) { this._typeahead = new h(this._items, { debounceInterval: typeof t == "number" ? t : void 0, skipPredicate: e => this._skipPredicateFn(e) }), this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(e => { this.focusItem(e); }); }
    _findNextAvailableItemIndex(t) { for (let e = t + 1; e < this._items.length; e++)
        if (!this._skipPredicateFn(this._items[e]))
            return e; return t; }
    _findPreviousAvailableItemIndex(t) { for (let e = t - 1; e >= 0; e--)
        if (!this._skipPredicateFn(this._items[e]))
            return e; return t; }
    _collapseCurrentItem() { if (this._activeItem)
        if (this._isCurrentItemExpanded())
            this._activeItem.collapse();
        else {
            let t = this._activeItem.getParent();
            if (!t || this._skipPredicateFn(t))
                return;
            this.focusItem(t);
        } }
    _expandCurrentItem() { this._activeItem && (this._isCurrentItemExpanded() ? a(this._activeItem.getChildren()).pipe(c(1)).subscribe(t => { let e = t.find(i => !this._skipPredicateFn(i)); e && this.focusItem(e); }) : this._activeItem.expand()); }
    _isCurrentItemExpanded() { return this._activeItem ? typeof this._activeItem.isExpanded == "boolean" ? this._activeItem.isExpanded : this._activeItem.isExpanded() : !1; }
    _isItemDisabled(t) { return typeof t.isDisabled == "boolean" ? t.isDisabled : t.isDisabled?.(); }
    _expandAllItemsAtCurrentItemLevel() { if (!this._activeItem)
        return; let t = this._activeItem.getParent(), e; t ? e = a(t.getChildren()) : e = p(this._items.filter(i => i.getParent() === null)), e.pipe(c(1)).subscribe(i => { for (let s of i)
        s.expand(); }); }
    _activateCurrentItem() { this._activeItem?.activate(); }
};
function o() { return (n, t) => new r(n, t); }
var v = new d("tree-key-manager", { providedIn: "root", factory: o }), A = { provide: v, useFactory: o };
export { r as a, o as b, v as c, A as d };
