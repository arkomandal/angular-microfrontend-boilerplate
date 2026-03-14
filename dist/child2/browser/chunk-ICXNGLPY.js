import { a as n } from "@nf-internal/chunk-4TJQB64Q";
function o(t) { return n(t?.lift); }
function l(t) { return r => { if (o(r))
    return r.lift(function (i) { try {
        return t(i, this);
    }
    catch (e) {
        this.error(e);
    } }); throw new TypeError("Unable to lift unknown Observable type"); }; }
export { o as a, l as b };
