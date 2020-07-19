var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

body.style.background =
  "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

css.textContent = body.style.background + ";";

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function randomNumber() {
  return Math.floor(Math.random() * 255 + 1);
}

function randomGradient() {
  body.style.background =
    "linear-gradient(to right, rgb(" +
    randomNumber() +
    "," +
    randomNumber() +
    "," +
    randomNumber() +
    "), rgb(" +
    randomNumber() +
    "," +
    randomNumber() +
    ", " +
    randomNumber() +
    "))";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomGradient);
