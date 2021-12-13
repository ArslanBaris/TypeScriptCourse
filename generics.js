function deger(x) {
    return x;
}
function deger2(x) {
    return x;
}
var sayi = deger(10);
console.log(sayi);
var sehir = deger2("Ankara");
console.log(sehir);
function deger3(x) {
    return x;
}
var sayi2 = deger3(10);
console.log(sayi2);
var sehir2 = deger3("Ankara");
console.log(sehir2);
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.fonksiyon = function (parameter) {
        return parameter;
    };
    return GenericClass;
}());
var sinif = new GenericClass();
sinif.fonksiyon("Ankara");
