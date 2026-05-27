console.log("t16_arrays_continued.js");
console.log("Arrays");

/****************************
Variables
****************************/
const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");
const MONEY_FIELD = document.getElementById("moneyField");
const CHOCOLATE_FIELD = document.getElementById("chocolateField");
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/****************************
Array
****************************/
let chocolateMessages = [
  "You loathe chocolate",
  "Chocolate is meh",
  "Chocolate is pretty good",
  "Chocolate is the best thing EVER!!!!"
];

/****************************
Functions
****************************/
function calculateChange(_money, _price) {
  return _money - _price;
}

function lebron() {
  let userName = NAME_FIELD.value;
  let userAge = AGE_FIELD.value;
  let userMoney = Number(MONEY_FIELD.value);
  let chocolateLevel = Number(CHOCOLATE_FIELD.value);
  let chocolatePrice = 4;

  OUTPUT.innerHTML = "";

  OUTPUT.innerHTML += "<h3>Hello " + userName + "!</h3>";
  OUTPUT.innerHTML += "<p>You are " + userAge + " years old.</p>";
  OUTPUT.innerHTML += "<p>You have $" + userMoney + ".</p>";
  OUTPUT.innerHTML += "<p>A chocolate bar costs $" + chocolatePrice + ".</p>";

  if (userMoney >= chocolatePrice) {
    let change = calculateChange(userMoney, chocolatePrice);

    OUTPUT.innerHTML += "<p>You CAN afford a chocolate bar.</p>";
    OUTPUT.innerHTML += "<p>You will get $" + change + " change.</p>";
  } else {
    OUTPUT.innerHTML += "<p>Sorry, you CAN'T afford a chocolate bar.</p>";
  }

  OUTPUT.innerHTML += "<p>" + chocolateMessages[chocolateLevel] + "</p>";
}

let classArray = ["Milk", "eggs", "Bananas"]
OUTPUT.innerHTML = "The third item is" + classArray[3];
OUTPUT.innerHTML = "there are " + classArray.length + " items in the shop"

for(let i=0; i<classArray.length; i++){ OUTPUT.innerHTML += "item " + i + ": " +classArray[i]+"<br>"};