abstract class KrediBase {
    constructor() {
        
    }

    kaydet():void{
        console.log("Kaydedildi");
    }

    abstract hesapla():void;
}

class TuketiciKredi extends KrediBase{
    constructor(){
        super();
    }

    hesapla(): void {
        console.log("Tuketici Kredisine göre hesap yapıldı.")
    }

}

class MortgageKredi extends KrediBase{
    constructor(){
        super();
    }

    hesapla(): void {
        console.log("Konut Kredisine göre hesap yapıldı.")
    }

    baskaBirOperasyon(){

    }
}

let tuketiciKredisi = new TuketiciKredi();
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();

let mortgageKredi = new MortgageKredi();
mortgageKredi.hesapla();
mortgageKredi.kaydet();

let kredi : KrediBase
kredi = new TuketiciKredi()
kredi = new MortgageKredi()
