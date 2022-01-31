document.title = "DOM struktura";

// Pretraga elementa po 'id' - getElementByID
var paragrapf = document.getElementById("p_2");
console.log(paragrapf.textContent);

//   pretraga elementa po nazivu klase 'class', getElementsByClassName
var paragraphClass = document.getElementsByClassName("myClass");
console.log("Broj elemenata po klasi je", paragraphClass.length);

// selektovanje lementa na osnovu naziva taga - getElementsByTagName
var items = document.getElementsByTagName("li");
console.log("Broj elemenata sa tagom 'li' je", items.length);

// selektovanje elemenata koriscenjem CSS selektora -querySelector
var item = document.querySelector("#myId_2");
console.log(item.innerHTML);
// 'querySelector' uvek vraca samo prvi element koji zadovoljava prosledjeni CSS kriterijum
var oneMoreItem = document.querySelector("li");
console.log(oneMoreItem.innerHTML);

// selektovanje elemenata koriscenjem CSS selektora - querySelectorAll
// on selektuje sve elemente koji zadovoljava uslov naved u zagradi
var oneMoreItem_2 = document.querySelectorAll("li");
console.log(oneMoreItem_2.length);

// IZMENE NA HTML elementima

// innerHTML
// innerHTML - rukovanje tekstualnim sadrzajem, cita ili upisuje novi sadrzaj
var paragrapf_3 = document.getElementById("p_3");
console.log("Sadrzaj treceg paragrafa pre izmene je:", paragrapf_3.innerHTML);
// odajemo sada novi tekst
paragrapf_3.innerHTML =
  "U prmeru je kreirano nekoliko HTML dokumenata koji poseduju definisane vrednosti 'id'.";

// dodavanje teksta direkno u listu i u 'li' element
console.log(document.getElementById("myId_1").innerHTML); //ovde samo citamo i ispisujemo u kozolu tekst pre promene
// ubacujemo novi teksta
document.getElementById("myId_1").innerHTML = "Prvi clan order liste.";

// CItanje vrednosti Atributa
// vrlo jednostavno navodjenjem naziva atributa kao svostva objekta
var attr = document.getElementById("p_3");
console.log(attr.id, attr.className, ", To su vrednosi atributa.");

// Postavljanje vrednosti atributa
// 'setAttribute(imeAtributa, vrednost)'
// ona ne samo da menja vec moze i da kreira atribut ako na postoji
function noviAtribut() {
  var noviButton = document.getElementById("first-name");
  noviButton.setAttribute("type", "button");
}

// RUKOVANJE STILIZACIJOM
// da bi se promenila stilizacija nad nekim elementom
// preko JS moze se dodati inline stilizacija
// primer
var par = document.getElementById("p_3");
par.style.color = "blue";

// stilizacija se moze promeniti dodavanjem i uklanjanjem classa nad elementima
// primer
document.getElementById("myId_1").classList.add("crveniTekst");
// ili ovako preko promenljive
var par_2 = document.getElementById("p_2");
par_2.classList.add("yellowTekst");
// uklanjanje klase
par_2.classList.remove("yellowTekst");

// DODAVANJE I BRISANJE elemenata

// prvo ide kreiranje elementa
var noviPragraf = document.createElement("p");
// sada dodajemo tekst paragrafu
var tekstParagrafa = document.createTextNode(
  "Ovo je dinamicki kreiran tekst u paragrafu"
);
// sada tekst dodajemo u paragraf sa appendChild metodom
noviPragraf.appendChild(tekstParagrafa);
// onda se dodaje u stranicu ovaj paragraf sa tekstom
document.body.appendChild(noviPragraf);
// sada je ovaj paragraf dodat na kraj stranice
// da bi smo ga smestili na zeljeno mesto koristi se metoda insertBefore()
// insertBefore(noviClan, stariClan) prima dva parametra
var stariParagraf = document.getElementById("p_3");
document.body.insertBefore(noviPragraf, stariParagraf);
//  stilizovaceom ovaj noviParagraf u zelena slova da se bolje vidi promena
noviPragraf.style.color = "green";
noviPragraf.style.fontSize = "32px";
// dodacemo mu i klasu za stilizaciju
noviPragraf.classList.add("sivaPozadina");

// Uklanjanje elemenata metodom - removeChild()
var list = document.getElementById("orderList_1");
list.removeChild(list.children[1]);

// Zamena elemenata metodom - replaceChild(newChild, olsChild)

// kreira se novi naslov lekcije
var noviNaslovLekcije = document.createElement("h1");
var noviTekstNaslova = document.createTextNode(
  "Rukovanje DOM strukturom uz pomoc JavaScript-a"
);
noviNaslovLekcije.appendChild(noviTekstNaslova);
// uzimamo referencu starog naslova
var stariNaslovLekcije = document.getElementById("naslovLekcije");
// sada se menjaju naslovi
document.body.replaceChild(noviNaslovLekcije, stariNaslovLekcije);

// vezba, kreiranje novog podnaslova, inline stilizacija, i zamena u jednoj liniji

document.body.replaceChild(
  document
    .createElement("h2")
    .appendChild(
      document.createTextNode("Podnaslovi lekcija JavaScript treninga")
    ),
  document.getElementById("podnaslov")
);

// //////////////////////////////////
// VEZBE SA VIDEO TUTORIJALA

// pristup elementu preko 'ID'
var tekst_1 = document.getElementById("tekst_1");
tekst_1.style.color = "blue";

// pristup elementima preko CLASS
var tekstovi = document.getElementsByClassName("some_class");
// u promenljivoj 'tekstovi' sada imamo reference na sve elemente koji imaju klasu 'some_class'
// da bi smo izvrsili neku promenu nad njima moramo proci kroz petlju
// tri nacina petlji za prolazak kroz niz referenci
for (var i = 0; i < tekstovi.length; i++) {
  tekstovi[i].style.color = "green";
}
// ili for ... of
for (const iterator of tekstovi) {
  iterator.style.color = "pink";
}
// for ... in
for (const key in tekstovi) {
  if (Object.hasOwnProperty.call(tekstovi, key)) {
    const element = tekstovi[key];
    element.style.color = "red";
  }
}

// pristup elementima preko TAG imena
// kreiramo listi i menjamo boju elementima liste
var items = document.getElementsByTagName("li");
// for petlja za prolaz kroz elemente
for (let i = 0; i < items.length; i++) {
  const element = items[i];
  element.style.color = "blue";
  element.style.fontSize = "24px";
}
// for ... of petlja
for (const item of items) {
  item.style.color = "red";
}

// for ... in
for (const key in items) {
  if (Object.hasOwnProperty.call(items, key)) {
    const element = items[key];
    element.style.color = "purple";
    // element.style.fontSize = "24px";
    // font-size ne moram da def jer je vec
    // kroz for petlju def.
  }
}
// ralicite for petlje su navedene kao primer vezbe

// Selektovanje elemenata preko CSS selektora
// pomocu - querySelector(), ili querySelectorAll()

// querySelector() - selektuje samo prvi element
var item_1 = document.querySelector("ul li");
// selektovali smo sve 'li' elemente u 'ul'
item_1.style.color = "blue";

// querySelectorAll() - selektuje sve elemente
// mora se proci kroz niz sa nekom od for petlji
// izabrali smo forEach - petlju
var items_1 = document.querySelectorAll("ul li");
items_1.forEach((element) => {
  element.style.color = "green";
});

// Promena elmenata, dodavanje vrednosti, atributa ...
var tekst_1 = document.getElementById("tekst_1");
// promena teksta sa propertijem ili svojstvom 'innerHTML'
tekst_1.innerHTML = "Novi tekst paragrafa";

// citanje vrednosti atributa nekom elementu
// isti ovaj paragraf
console.log("ID ovog elementa je:", tekst_1.id);

// postavljanje vrednosti atributa nekom HTML elementu
// koristimo setAttribute(atribut, vrednost);
var ime = document.getElementById("in_1");
ime.setAttribute("type", "button");

// stilizacija elemenata
// do sada smo koristili inline stilizaciju
// cesta je sada praksa da se stilizacija preko JS
// vrsi takosto se dodaju klase na elemente koje imaju odredjenu stilizaciju

tekst_1.classList.add("sivaPozadina"); //referencu vec imamo

// DODAVANJE I BRISANJE ELEMENATA

// KREIRAMO novi paragraf
var noviParagraph = document.createElement("p");
// dodajemo sadrzaj
var sadrzajParagrafa = document.createTextNode(
  "Novi dinamicki sadrzaj paragrafa."
);
// dodajemo ovaj sadzaj paragrafu i on se dodaje kao i svaki element
noviParagraph.appendChild(sadrzajParagrafa);
// sada dodajemo paragraf sa sadrzajem na stranicu
document.body.appendChild(noviParagraph);

// UKLANJAMO neki element
// ako zelimo da uklonimo jednu od stavki iz liste
var lista = document.getElementById("ul_1");
// uklanjamo samo jedan 'li' koriscenjem svojstva 'children[2]'
// 'children[]' je kolekcija svih potmaka jednog elementa
lista.removeChild(lista.children[2]);
// da uklonimo celu listu
//     document.body.removeChild(lista);

//  ZAMENA ELEMENTA nekim DRUGIIM
// replaceChild(noviElement, stariElement);

// iskoristicemo vec kreirani dinamicki paragraf da ubacimo na mesto paragrafa id=tekst_1
var paragrafTekst3 = document.getElementById("tekst_3");
// posto element nije direktno u body mora ovako

// var divArea = document.getElementById("div_1");
// divArea.replaceChild(noviParagraph, paragrafTekst3);

document.getElementById("div_1").replaceChild(noviParagraph, paragrafTekst3);
// ovo bi radilo da je stari paragraf van div u body
// document.body.replaceChild(noviParagraph, paragrafTekst3);
