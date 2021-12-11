function greeter(name: string) {
  return "Hello " + name;
}

let message = greeter("Barış");

console.log(message);

let number: number;
number = 10;
number = 10.4;

let city : string = "Adana";
city = "Ankara";
city = "Kocaeli";
//city = 10  // false

let isTrue : boolean = true
isTrue = true
isTrue = false

let numbers: number[] = [1,2,3,4]
let numbers2 : Array<number> = [1,2,3,4]

let array : [number,string] = [2,"İstanbul"]

enum Colors {Kirmizi=1,Siyah,Mavi}
let color : Colors = Colors.Kirmizi
