console.log("t09_activate_via_button.js");
console.log("Hello World");

// Variables
let name = "Ragavan";
let age = 15;
let year = 2026;
let money = 10;

/****************************
Main code:
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

OUTPUT.innerHTML = "<h3>Hello World</h3>";
OUTPUT.innerHTML += "<h3>Cheese Burger</h3>";
OUTPUT.innerHTML += "<h3>NOT GOOD</h3>";
OUTPUT.innerHTML += "<h3>BADABABACHING I'm Not Lov'in It</h3>";

OUTPUT.innerHTML +=
  "<h3>Hello " + name +
  " You are " + age +
  " The Year is " + year +
  " You have $" + money +
  " You spend half of your money, now you have $" + (money / 2) +
  " Then you get $3, now you have $" + ((money / 2) + 3) +
  "</h3>";

/***** */
 // OUTPUT.innerHTML += '<button onClick="start()">START</button>';

console.log("Hello " + name);
console.log("You are " + age);
console.log("The year is " + year);
console.log("You have $" + money);

console.log("You spend half of your money, now you have $" + (money / 2));

money = (money / 2) + 3;

console.log("Then you get $3, now you have $" + money);

/****************************
Functions:
****************************/
function writeLine() {
    OUTPUT.innerHTML += "<p>Less Code Matters</p>";
}

function welcome() {
    OUTPUT.innerHTML += "<p>Welcome to the shop</p>";
}

function displayProduct(_name, _price) {
    OUTPUT.innerHTML += "<p>Price " + _name + ": $" + _price + " Each</p>";
}

function start() {
    OUTPUT.innerHTML += "<p>Start button clicked</p>";
}

// Function calls
welcome();
writeLine();

displayProduct("Mc Medium", 4);
displayProduct("Mc Large", 3);
displayProduct("Mc XL", 2.50);