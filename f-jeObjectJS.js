// prost primer racunanja povrsine pravougaonika
var x = 5;
var y = 6;
area = x * y;
console.log(area);

// definisanje f-je za racunanje pravougaonika
function calculateRectArea(a, b) {
  return a * b;
}
var result = calculateRectArea(8, 9);
console.log("Povrsina je:", result);

// prosti tipovi i prosledjivanje po vrednosti
var a = 7;
var b = 9;
function calculateRectArea2(a, b) {
  var result = a * b;
  a = 30; // ovde se nece promeniti vrednost jer je u f-ju prosledjena vrednost po vrednosti. Ispisuje br 7 na izlazu
  return result;
}
var result2 = calculateRectArea2(a, b);
console.log("Rezltat 2 je:", result2);
console.log("a=", a);

// Prosledjivanje objektnog tipa podataka u f-ji. Npr.niz podataka
function calculateRectAreaObject(theObject) {
  var result = theObject[0] * theObject[1];
  theObject[0] = 30; // vrednost ce se promeniti jer se podaci salju po referenci
  return result;
}
// sada se definise niz sa podacima o stranicama pravougaonika
var dimensionRect = [5, 10];
// pozivanje f-je
var result3 = calculateRectAreaObject(dimensionRect);
console.log("Povrsina treceg pravougaonika je:", result3);
console.log("Promenjena vrednost prve stranice na:", dimensionRect[0]);
console.log(
  "Novoizracunata povrsina je:",
  calculateRectAreaObject(dimensionRect)
);

// Anonimne f-je

// cesta primena anonimne f-je je omogucavanje prosledjivanja jedne f-je drugoj
// ovde je kreirana anonimna f-ja (nema ime), i koja prima jedan parametar
// ta je f-ja smestena u promenljivu 'a' i preko te promenljive se i poziva
// promenljiva 'a' sluzi kao identifikator anonimne f-je
var a = function (b) {
  return b * b;
};
// poziv anonimne f-je
console.log(a(5));

// Primer 2, kreiramo f-ju koja ce kasnije prilikom njenog poziva kao drugiparametar imati anonimnu f-ju
function uradiNesto(a, b) {
  if (a == 13) {
    b(a);
  }
}
uradiNesto(13, function (num) {
  console.log(num + " nije dozvoljen");
});

// Samopozivajuce f-je

// f-je koje se aktiviraju automtski kada izvrsavanje koda dodje do njih
// nije potrebno eksplicitno pozivanje istih
(function () {
  console.log("Ispisi nesto");
})();

// primer 2

(function () {
  console.log(a(5));
})();

// Function Scope
// primer 1
function myfunction() {
  var v = 5;
}
// promenljiva 'v' se nece ispisati jer nije vidljiva van f-je
console.log(v);

// primer 2
var v = 9;
function myFunction2() {
  console.log(v);
}
// pozivanjem f-je ispisace se jer je 'v' sada globalna promenljiva
myFunction2();

// ako ne deklarisemo vec samo inicijalizujemo promenljivu u f-ji ona ce tada postati i globalna
function myFunction3() {
  n = 4;
}
// tek sada kada pozovemo f-ju ona ce biti vidljiva
myFunction3();
console.log(n);

// Funkcija unutar funkcije

// primer 1
function razlikaKvadrata(a, b) {
  function kvadrat(x) {
    return x * x;
  }
  var razlika = kvadrat(a) - kvadrat(b);
  return razlika;
}

console.log("Razlika kvadrata je:", razlikaKvadrata(5, 4));
// ne moze pozvati f-ja iz f-je jer je nevidljiva i privatna console.log(kvadrat(6));. Nesto ovako dalo bi gresku

// Closure f-je

// ovakve f-je nam omogucavaju da lokalne promenljive ucinimo globalnim i dostupnim izvan f-je
function iteracije() {
  var counter = 0;
  return counter++;
}
// counter++; ovako se ne moze pozvati jer je nevidljiva van f-je

// Primer kada je vidljiva sa closure f-jom
function iteracije2() {
  var counter = 0;
  function inkrement() {
    return counter++;
  }
  return inkrement;
}
// pozivanjem itercije2() vise puta se vidi da je promenljiva counter dostupna van i da joj se povecava vrednost
// dodeljuje se globalnoj promenljivoj
var inkrementOdSpolja = iteracije2();

console.log(inkrementOdSpolja());
console.log(inkrementOdSpolja());
console.log(inkrementOdSpolja());
console.log(inkrementOdSpolja());
console.log(inkrementOdSpolja());

// Podizanje f-je na pocetak dokumenta

// JS parser podize na pocetak sve deklaracije promenljivih i funkcija
// zato je moguce pozvati neku f-ju koju mozemo i kasnije deklarisati
// ne vazi za promenljive koje su inicijalizovane

// primer
console.log(m); // daje undefind jer je inicijalizovana
var m = "kasnija deklaracija i inicijalizacija promenljice";

// primer kako pozivamo f-ju koja je posle deklarisana
console.log("Kvadrad broja je:", stepenFunkcija(5));

function stepenFunkcija(a) {
  return a * a;
}
