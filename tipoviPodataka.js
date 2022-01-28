var x = 5;
console.log(typeof x, x);

var y = 0 / 0;
console.log(typeof y, y);

var z = NaN;
console.log(typeof z, z);

var a = 5 / 0;
console.log(typeof a, a);

var odgovor = "Odgovor na prvo 'pitanje'";
console.log(typeof odgovor, odgovor);

var op1 = 5 == 6;
console.log(typeof op1, op1);

var x = undefined;
console.log(typeof x, x);

var x = null;
console.log(typeof x, x);

// ovo gore su bili prosti tipovi podataka.
// sada cemo kreirati jedan OBJECAT koji predstavlja kontejner prostih podataka

var car = {
  make: "Volkswagen",
  model: "Golf 4",
  color: "Crna",
  kubikaza: "1968",
};

console.log(typeof car, car);

// NIZOVI !!!
// Specijalni tip objektnog podatka u JS je Array. Koristi se za kreiranje nizova.
var cars = ["Ford", "Audi", "Porshe", "Skoda", "VW", "Mercedes", "BMW"];
console.log(typeof cars, cars);

// niz se moze kreirati i ovako, zbog prakticnosti koristi se prvi primer
var cars = new Array(
  "Ford",
  "Audi",
  "Porshe",
  "Skoda",
  "VW",
  "Mercedes",
  "BMW"
);
console.log(typeof cars, cars);

// citanje pojedinacnih elemenata niza
console.log(cars[0]);
console.log(cars[2]);
console.log(cars[6]);

// Promena vrednosti u niz
cars[2] = "Zastava";
console.log(cars);

// Nizovi u JS su dinamičke prirode i nemaju fiksnu definisanu dužinu
// Lako se dodaju novi elementi
cars[7] = "MAZDA";
console.log(cars);

// Objecat Arrayposeduje set ugradjenihsvojstava i metoda za rad sa nizovima

// Citanje duzine niza
var duzina_niza = cars.length;
console.log("Duzina niza je", duzina_niza);

// sortiranje niza postizemo metodom sort:
cars.sort();
console.log(cars);

// Dodavanje elemenata nizu. Pored bazicnog dodavanja mozemo i sa metodama "push" i "unshift"
// push dodaje na kraj niza, a unshift na pocetak
// vracaju vrednost nove duzine niza
var duzinaNiza1 = cars.push("Bentli"); //dodaje  na kraj niza
var duzinaNiza2 = cars.unshift("Toyota"); //dodaje na pocetak niza
console.log(
  "Duzina niza prvi put je",
  duzinaNiza1,
  "...",
  "Drugi put duzina je",
  duzinaNiza2
);
console.log(cars);

// Uklanjanje elemenata iz niza. "pop" uklanja sa kraja, a "shift" sa pocetka.
// Vracaju vrednost uklonjenog elementa
var last = cars.pop();
console.log("Uklonjen je zadnji -", last, "- sa pop() matodom");
var first = cars.shift();
console.log("Uklonjen je prvi -", first, "- sa shift() metodom");
console.log("Sada je niz", cars);

// Prolazak kroz niz sa forEach metodom
// metoda firEach prihvata f-ju koja se poziva za svaki elelment
// koja cita element, njegov indeks i kompletan niz
cars.forEach(function (item, index, array) {
  console.log("Element:", item, "njegov indeks je", index);
});

// Citanje indeksa elementa u nizu
var pozicija = cars.indexOf("MAZDA");
console.log("Pozicija od Mazde je", pozicija);

// Konverzije
console.log("Zbir je", "5" + 3);
console.log("Zbir je", "5" - 3);

// Operatori dodeljivanja

var x = 5;
console.log(x);
var y = 3;
console.log(y);
var z = 10;
// x++ // x se uvecava za 1
// x--
// z = x + y
// y = x++;  // nije isto sto i ovo y = ++x;
// x = y;  //dodaje vrednost sa desne strane (y), levoj strani (x)
// x += y; // uvecava vrednost za vrednost desne strane (y) i dodeljuje je levoj promenljivoj (x)
// x += 3; // ovo je isto x = x + 3;
// x *= y;
// x /= y;
x %= y;
console.log(x);
var a = !(x < y && z > y);
console.log(a);

// Operatori porednjenja ==, ===, <, >, !=, !==, <=, >=, Vracaju boolean tip
// Logicki operatori && , ||, Boolean tip

// TERNARNIoperator
var godine = 10;
var poruka = godine < 18 ? "Maloletni ste" : "Punoletni ste";
console.log(poruka);

// String operatori
// + sabiranje ili kod stringova, 'konkatenacija'
