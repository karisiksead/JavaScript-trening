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
}
var carSubaru = new car2("Subaru", "Legacy", 1560, "black");
var carFord = new car2("Ford", "Taurus", 1876, "blue");
var carPorshe = new car2("Porshe", "Panamera", 1963, "grey");

console.log(carPorshe);

// Konstruktorska F-ja se moze dodeliti nekoj promenljivoj
var Car = function (make, model, weight, color) {
  this.make = make;
  this.model = model;
  this.weight = weight;
  this.color = color;
};

// Metode
