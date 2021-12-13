var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, katSayisi) {
        this._odaSayisi = odaSayisi;
        this._pencereSayisi = pencereSayisi;
        this._kat = katSayisi;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this._kat + "katlı evde yemek yiyildi.");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
ev.yemekYe();
