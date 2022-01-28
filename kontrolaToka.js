// USLOVNO IZVRSAVANJE

// if ... else
var speed = 20;
if (speed < 10) {
  console.log("Previse je sporo");
} else if (speed <= 80) {
  console.log("Brzina je regularna");
} else if (speed < 100) {
  console.log("Previse je brzo");
} else {
  console.log("Nekorektna brzina");
}

// switch ... case
switch (speed) {
  case 10:
    console.log("Brzina je 10km/h");
    break;
  case 20:
    console.log("Brzina je 20km/h");
    break;
  default:
    console.log("Krecete se preko 20km/h.");
    break;
}

switch (true) {
  case speed < 20:
    console.log("Krecete se presporo");
    break;
  case speed >= 20 && speed <= 100:
    console.log("Krecete se regularnom brzinom od", speed + "km/h");
    break;
  default:
    console.log("Krecete se preko 100km/h. Prekoracili ste ogranicenje.");
    break;
}

// Ternarni operator

var x = 10;
var y;
if (x == 10) {
  y = x;
} else {
  y = 150;
}
// console.log("X =", x);
// console.log("Y =", y);

// isto ovo gore kroz Ternarni operator
var y = x == 10 ? x : 150;

console.log("X =", x);
console.log("Y =", y);

// PETLJE
// for - petlja
for (let i = 0; i < 5; i++) {
  console.log("Hello");
}

var cityArray = ["Beograd", "Novi Pazar", "Nis"];
for (let i = 0; i < cityArray.length; i++) {
  console.log(cityArray[i]);
}

// for...in - petlja. Petlja za prolazak kroz nizove. Dizajnirana je za prolazak kroz objekte
console.log("Prolazak kroz niz sa for..in");
for (const city in cityArray) {
  console.log(cityArray[city]);
}

// for...of petlja najprikladnija za prolazak kroz niz
console.log("Prolazak kroz niz sa for...of");
for (const city of cityArray) {
  console.log(city);
}

// while petlja
var x = 1;
while (x < 5) {
  console.log("Dan u sedmici", x);
  x++;
}

// do ... while - petlja se izvrsava makar jednom bez obzira na uslov
// x je vec ima vrednost 5 jer uvecan u prethodnoj petlji i do ... while ce se izvrsiti 'makar jednom'
console.log("Sada ide do ... while petlja");
do {
  console.log("Dan u sedmici", x);
  x++;
} while (x < 8);

// break i continue, u petljama.
// break prekida i izlazi iz petlje,
// continue prekida iteraciju i prelazi na sledecu
console.log("break i continue");
for (var i = 0; i <= 10; i++) {
  if (i >= 5 && i <= 8) {
    // continue;
    break;
  }
  console.log("Korak:", i);
}
console.log("Vrednost brojaca posle petlej:", i);

// Proba da se sa for ... in petljom prodje kroz objekat
var car = {
  make: "VW",
  type: "limuzina",
  model: "Golf 4",
};
for (const item in car) {
  console.log(item + ": " + car[item]);
}

// Isto proba sa for ... of
// console.log("PROLAZAK SA for ... of");
// for (const item of car) {
//   console.log(item);
// }

//OBRADA IZUZETKA try ... catch
try {
  console.log("Variabla b je:" + b);
} catch (error) {
  console.log("Error name: " + error.name); // osnovna svostva greske su name i message (ime i poruka)
  console.log("Error message: " + error.message);
} finally {
  console.log("Ova poruka se uvek izvrsava !!!"); // svojstvo koje se uvek izvrsava
}
console.log("Hello !!!");

// console.log("Varijabla b je: " + b); // Ovaj kod izaziva gresku da b nije definisano

// samostalno izbacivanje izuzetka koriscenjem naredbe 'throw'
var x = 5;
var y = 0;
var z;
try {
  if (y === 0) {
    throw Error("Deljenje sa nulom nije dozvoljeno");
  } else {
    z = x / y;
  }
} catch (error) {
  console.log("Ime geske je: " + error.name);
  console.log("Poruka greske " + error.message);
}
