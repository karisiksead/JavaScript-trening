// Event handler kada se ucita stranica

// savet je da uvek kada JS kod operise sadrzajem stranice,
// pisemo unutar ovakvog event handlera window.onload
// da bi osigurali da cemo rukovoditi elementima koji stvarno postoje na stranici
window.onload = function () {
  var button = document.getElementById("getBtn");
  button.addEventListener("click", function () {
    console.log("Kliknuo si getBtn");
    document.getElementById("contentContainer").innerHTML = "Ovde ide tekst";

    // kada se klikne kreirace se objekat
    // ovaj kreirani objekat 'XMLHttpRequest' je osnovni objekat u JS
    // i koristi se za slanje zahteva serveru direktno iz JS koda
    var xhttp = new XMLHttpRequest();
    // sada se salje asihroni zahtev serveru
    // provera podatka, kada su podaci stigli
    xhttp.onreadystatechange = function () {
      // proveravamo konekciju
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("contentContainer").innerHTML =
          xhttp.responseText;
      } else {
        document.getElementById("contentContainer").innerHTML =
          "Ne vidim dokument";
      }
    };
    //   slanje zahteva serveru na adresi
    xhttp.open("GET", "plain_text.txt", true);
    xhttp.send();
  });
  // JSON podaci
  var buttonJSON = document.getElementById("getBtnJson");
  buttonJSON.addEventListener("click", function () {
    var xhttpJson = new XMLHttpRequest();

    xhttpJson.onreadystatechange = function () {
      if (xhttpJson.readyState == 4 && xhttpJson.status == 200) {
        //   konvertovanje JSON-a u JS objekat
        var jsonPerson = JSON.parse(xhttpJson.responseText);
        document.getElementById("contentContainer_2").innerHTML =
          "First name " +
          jsonPerson.firstname +
          "<br>" +
          "Last name " +
          jsonPerson.lastname +
          "<br>" +
          "Boja kose " +
          jsonPerson.hairColor;
      }
    };
    xhttpJson.open("GET", "content.json", true);
    xhttpJson.send();
  });
  // UPISIVANJE PODATAKA U BAZY
  var sendButton = document.getElementById("sendBtn");

  sendButton.addEventListener("click", function () {
    // kreiramo JS objekat
    var person = {
      firstName: "Sead",
      lastName: "Karisik",
      hairColor: "smedja",
      eyeColor: "braon",
    };

    var jsonPersonAdd = JSON.stringify(person);
    console.log("Person u JSON formatu je: " + jsonPersonAdd);
  });
};
