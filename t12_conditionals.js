console.log("t12_conditionals.js loaded");
console.log("Hello World");

/****************************
Variables
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/****************************
Function
****************************/
function lebron() {

  let userName = document.getElementById("nameField").value;
  let userAge = document.getElementById("ageField").value;
  let userMoney = Number(document.getElementById("moneyField").value);

  OUTPUT.innerHTML = "";

  OUTPUT.innerHTML += "<h3>Hello " + userName + "</h3>";
  OUTPUT.innerHTML += "<p>You are " + userAge + " years old.</p>";

  OUTPUT.innerHTML += "<p>A chocolate bar costs $4</p>";

  if (userMoney >= 4) {
    OUTPUT.innerHTML += "<p>You CAN afford a chocolate bar</p>";
  } else {
    OUTPUT.innerHTML += "<p>Sorry you CAN'T afford a chocolate bar</p>";
  }
}