// EVENTS

// Dogadjaj kao svojstvo

// primer gde imamo dva dogadjaja na 'onclick'
// izvrsice se samo zadnji definisan event
// jer ima obicno svojstvo i moze imati jednu vrednost
// vezba 1
var dugme = document.getElementById("button_2");
dugme.onclick = prikazPoruke;
dugme.onclick = prikazDrugePoruke;
function prikazPoruke() {
  alert("Hvala za klik !!!");
}
function prikazDrugePoruke() {
  alert("Prikaz Druge poruke !!!");
}
// vezba 2
var button_3 = document.getElementById("button_3");
button_3.onclick = function () {
  alert("Pozdrav svima !!! Hvala");
};

// addEventListener - registrovanje odredjenog event handler-a za odredjeni event
// ima mogucnost visestruke pretplate
var button_4 = document.getElementById("button_4");
button_4.addEventListener("click", prvaPoruka);
button_4.addEventListener("click", drugaPoruka);
// poruke ce se ispisati jedna za drugom
function prvaPoruka() {
  alert("Pozdrav prvi put");
}
function drugaPoruka() {
  alert("Pozdrav drugi put");
}

// Objekat dogadjaja

// ovde 'e' prihvata vrednost tastera sa tastature koji posle ispisujemo u konzoli
document.addEventListener("keydown", logKey);
function logKey(e) {
  console.log(e.key);
  //   dodao kod da se ispisuje porka u zavisnosti na unos
  // 'key', svojstvo ili properti prihvata karaktere sa tastature
  if (e.key == "Y") {
    alert("pritisnuli ste 'Y'");
  }
  if (e.key == "N") {
    alert("Pritisnuli ste 'N'");
  } else {
    alert("Pritisnuli ste taster: '" + e.key + "'");
  }
}

// Otkazivanje dogadjaja
var link_1 = document.getElementById("link_1");
link_1.addEventListener("click", sprecavanjeDogadjaja);
// 'preventDefault()' - metodom dolazi do sprecavanje dogadjaja
// ova metoda sprecava defaultno ponasanje dogadjaja
function sprecavanjeDogadjaja(e) {
  e.preventDefault();
  console.log("Defoltni dogadjaj je sprecen.");
}

// PROPAGIRANJE DOGADJAJA
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

// hvatanje u 'capturing faza' je sa 'true' kao trecim parametrom u addEventListener metodu
// propagira se od najviseg do najnizeg elementa (1,2,3)

// hvatanje u 'bubbling faza' je sa 'false' kao trecim parametrom
// propagira se od najnizeg do najviseg (3,2,1)
div1.addEventListener("click", eventHandler, true);
div2.addEventListener("click", eventHandler, true);
div3.addEventListener("click", eventHandler, true);

function eventHandler(e) {
  console.log("Klik iz diva:", this.id);

  // dodatno
  alert("Kliknuli ste div: " + this.id);
}
