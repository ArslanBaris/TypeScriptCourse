class Ev {
  _odaSayisi: number;
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
