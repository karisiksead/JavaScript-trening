// Kreiranje objekta koriscenjem objektnog Literala

// objekti su skupovi vise vrednosti koje opisuju jedan pojam (objecat)
// ovde su parovi kljuceva i vrednosti
var car = { make: "Subaru", model: "Legacy", weight: 1560, color: "black" };

// Kreiranje objecta koriscenjem kljucne reci 'new'
var car1 = new Object();
car.make = "Subaru";
car.model = "Legaci";
car.weight = 1560;
car.color = "black";

// Kreiranje objecta koriscenjem objektnog Konstruktora

function car2(make, model, weght, color) {
  this.make = make;
  this.model = model;
  this.weght = weght;
  this.color = color;

  //   dodali smo metodu
  this.prodaja = function () {
    return "Auto marke " + this.make + ", model " + this.model + ", je prodat.";
  };
}
// kreirali smo objekte raznih marki
var carSubaru = new car2("Subaru", "Legacy", 1560, "black");
var carFord = new car2("Ford", "Taurus", 1876, "blue");
var carPorshe = new car2("Porshe", "Panamera", 1963, "grey");

// pozvali metodu koja je kreirana u objektnom konstruktoru posto smo prosledili podatke i kreirali objekte
console.log(carSubaru.prodaja());
console.log(carFord.prodaja());
console.log(carPorshe.prodaja());

// console.log(carPorshe);

// Konstruktorska F-ja se moze dodeliti nekoj promenljivoj
// Kreiramo i metodu da bi definisali ponasanje objekta
var Car = function (make, model, weight, color) {
  this.make = make;
  this.model = model;
  this.weight = weight;
  this.color = color;
};

// Metode
var Car2 = function (make, model, weight, color) {
  this.make = make;
  this.model = model;
  this.weight = weight;
  this.color = color;

  this.startEngine = function () {
    return (
      "Automobil proizvodjaca " +
      this.make +
      ", model " +
      this.model +
      ", boje " +
      this.color +
      " je startovao motor"
    );
  };
};

var carPorshe2 = new Car2("Porshe", "Panamera", 2021, "crna");
var carFord = new Car2("Ford", "Taurus", 1876, "blue");
console.log(carFord.startEngine());

// Prototipovi
var carPrototipe = function (make, model, weight, color) {
  this.make = make;
  this.model = model;
  this.weight = weight;
  this.color = color;
};
// ovde se definose prototip svih objekata koji ce biti kreirani kada se ova f-ja koristi kao konstruktorska
carPrototipe.prototype.startEnginePrototipe = function () {
  return (
    "Ovom automobilu marke " +
    this.make +
    ", boje " +
    this.color +
    " motor radi."
  );
};
// pozivamo sada ovu f-ju
var vw = new carPrototipe("VW", "Golf", 2005, "tamno plava");
console.log(vw.startEnginePrototipe());

// Nasledjivanje

// kreiramo konstrutorsku f-ju za Person (Osobu)
var Person = function (firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
};
Person.prototype.info = function () {
  return this.firstname + " " + this.lastname;
};

// sada kreiramo za Student-a
var Student = function (firstname, lastname, age, university) {
  Person.call(this, firstname, lastname, age);
  this.university = university;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.info = function () {
  return (
    this.firstname +
    " " +
    this.lastname +
    ", sa univerziteta " +
    this.university
  );
};

// Kreiramo objekat Student koji je nasledio Person i stampamo
var seadK = new Student("Sead", "Karisik", 45, "DUNP");
console.log(seadK.info());
