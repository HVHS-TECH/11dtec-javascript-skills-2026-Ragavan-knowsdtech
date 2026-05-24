console.log("t10_input_from_HTML.js");
console.log("Hello World");

/****************************
Variables
****************************/
let name = "Ragavan";
let age = 15;
let year = 2026;
let money = 10;

const NAME_FIELD = document.getElementById("nameField");
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/****************************
Main code
****************************/
OUTPUT.innerHTML = "<h3>Hello World</h3>";
OUTPUT.innerHTML += "<h3>Cheese Burger</h3>";
OUTPUT.innerHTML += "<h3>NOT GOOD</h3>";
OUTPUT.innerHTML += "<h3>BADABABACHING I'm Not Lov'in It</h3>";

OUTPUT.innerHTML +=
  "<h3>Hello " + name +
  ". You are " + age +
  ". The year is " + year +
  ". You have $" + money +
  ". You spend half your money, now you have $" + (money / 2) +
  ". Then you get $3, now you have $" + ((money / 2) + 3) +
  ".</h3>";

OUTPUT.innerHTML += '<button onclick="start()">START</button>';

console.log("Hello " + name);
console.log("You are " + age);
console.log("The year is " + year);
console.log("You have $" + money);

console.log("You spend half of your money, now you have $" + (money / 2));

money = (money / 2) + 3;

console.log("Then you get $3, now you have $" + money);

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
  OUTPUT.innerHTML += "<p>Hello " + userName + "!</p>";
}

/****************************
Function calls
****************************/
welcome();
writeLine();

displayProduct("Mc Medium", 4);
displayProduct("Mc Large", 3);
displayProduct("Mc XL", 2.50);