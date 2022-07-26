var h3 = document.querySelector("h3");
var color1 = document.getElementById("cl1");
var color2 = document.getElementById("cl2");
var body = document.querySelector(".back")
function setgradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    h3.textContent = body.style.background;
}




color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);

