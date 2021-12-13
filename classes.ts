class Ev {
  private _odaSayisi: number;   // default Public
  _pencereSayisi: number;
  _kat: number;

  constructor(odaSayisi: number, pencereSayisi: number, katSayisi: number) {
        this._odaSayisi=odaSayisi;
        this._pencereSayisi=pencereSayisi;
        this._kat=katSayisi;
  }

  yemekYe() {
    console.log(this._kat+" katlı evde yemek yiyildi.");
  }
}

let ev = new Ev(3,4,5)
ev.yemekYe();


class Kisi{
    protected isim: string

    kaydet(){
        console.log("Kişi kaydedildi.");
    }
}

class Musteri extends Kisi{
    satisYap(){
        // this.isim
        console.log("Satış yapıldı.");
    }
}

class Personel extends Kisi{
    maasOde(){
        console.log("Maaş ödendi.");
    }
}

let musteri = new Musteri()
musteri.kaydet()
musteri.satisYap();

let personel = new Personel();
personel.kaydet()
personel.maasOde()