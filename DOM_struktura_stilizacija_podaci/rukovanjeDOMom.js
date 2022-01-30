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
