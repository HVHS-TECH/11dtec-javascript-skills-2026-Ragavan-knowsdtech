console.log("t05_JavaScript_and_HTML.js");
console.log("Hello World");

// Variables
let name = "Ragavan";
let age = 15;
let year = 2026;
let money = 10;

/****************************
Main code:
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
OUTPUT.innerHTML ="<h3>Hello World</h3>"
OUTPUT.innerHTML +="<h3>Cheese Burger</h3>"
OUTPUT.innerHTML +="<h3>NOT GOOD</h3>"
OUTPUT.innerHTML +="<h3>BADABABACHING I'm Not Lov'in It</h3>"
OUTPUT.innerHTML +="<h3>Hello </h3>" + name + " You are " + age + " The Year is " + year + " You have $ " + money "You spend half of your money, now you have $" + money / 2 + "Then you get $3, now you have $" +  money



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