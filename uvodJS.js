window.alert("Java Script je super");
// za promenu boje naslova u tekstu, poziva se u uvodJS.html
// document.getElementById("button").addEventListener("click", styleText);
var counter = 0;
function styleText() {
  counter++;
  if (counter % 2 == 1) {
    document.getElementById("text").style.color = "blue";
  } else {
    document.getElementById("text").style.color = "red";
  }
}
