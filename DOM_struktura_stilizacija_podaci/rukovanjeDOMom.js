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
