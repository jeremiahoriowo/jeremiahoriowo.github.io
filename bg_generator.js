var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

/* Another event listener is "input" */
function bodystyling() {
    body.style.background = 
    "linear-gradient(to right, "
     + color1.value + ", "
      + color2.value +")";
      css.textContent = body.style.background + ";"; 
}
color1.addEventListener("input", bodystyling);

color2.addEventListener("input", bodystyling);


// Or using "oninput " attribute in the input tag 