console.log("t12_conditional_statements.js");
console.log("Hello World");

/****************************
Variables
****************************/
let name = "Ragavan";
let age = 15;
let year = 2026;
let money = 10;

const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");
const MONEY_FIELD = document.getElementById("moneyField");
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/****************************
Main code
****************************/
OUTPUT.innerHTML = "<h3>Hello World</h3>";

console.log("Hello " + name);
console.log("You are " + age);
console.log("The year is " + year);
console.log("You have $" + money);

/****************************
Functions
****************************/
function writeLine() {
  OUTPUT.innerHTML += "<p>Less Code Matters</p>";
}

function welcome() {
  OUTPUT.innerHTML += "<p>Welcome to the shop</p>";
}

function displayProduct(_name, _price) {
  OUTPUT.innerHTML += "<p>Price " + _name + ": $" + _price + " each</p>";
}

function start() {
  OUTPUT.innerHTML += "<p>Start button clicked</p>";
}

function lebron() {
  let userName = NAME_FIELD.value;
  let userAge = AGE_FIELD.value;
  let userMoney = Number(MONEY_FIELD.value);

  OUTPUT.innerHTML =
    "<h3>Hello " + userName + "!</h3>" +
    "<p>You are " + userAge + " years old.</p>" +
    "<p>You have $" + userMoney + " pocket money.</p>";

  OUTPUT.innerHTML += "<p>A chocolate bar costs $4</p>";

  if (userMoney >= 4) {
    OUTPUT.innerHTML += "<p>You CAN afford a chocolate bar</p>";
  } else {
    OUTPUT.innerHTML += "<p>Sorry you CAN'T afford a chocolate bar</p>";
  }
}

/****************************
Function calls
****************************/
welcome();
writeLine();

displayProduct("Mc Medium", 4);
displayProduct("Mc Large", 3);
displayProduct("Mc XL", 2.50);