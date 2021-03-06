function deger(x: number): number {
  return x;
}

function deger2(x: string): string {
  return x;
}

let sayi = deger(10);
console.log(sayi);

let sehir = deger2("Ankara");
console.log(sehir);

function deger3<T>(x: T): T {
  return x;
}

let sayi2 = deger3<number>(10);
console.log(sayi2);

let sehir2 = deger3<string>("Ankara");
console.log(sehir2);

class GenericClass<T> {
  degisken: T;
  fonksiyon(parameter: T): T {
    return parameter;
  }
}

let sinif = new GenericClass<string>()
sinif.fonksiyon("Ankara")
