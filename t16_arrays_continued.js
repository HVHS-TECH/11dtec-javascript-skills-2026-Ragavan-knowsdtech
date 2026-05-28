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
let name = "Ragavan";
let age = 15;
let year = 2026;
let money = 10;
let chocolatePrice = 20;

/****************************
Array
****************************/

/****************************
Functions
****************************/
function calculateChange(_money, _price) {
  return _money - _price;
}


  OUTPUT.innerHTML = "";

  OUTPUT.innerHTML += "<h3>Hello " + name + "!</h3>";
  OUTPUT.innerHTML += "<p>You are " + age + " years old.</p>";
  OUTPUT.innerHTML += "<p>You have $" + money + ".</p>";
  OUTPUT.innerHTML += "<p>A chocolate bar costs $" + chocolatePrice + ".</p>";

  if (userMoney >= chocolatePrice) {
    let change = calculateChange(userMoney, chocolatePrice);

    OUTPUT.innerHTML += "<p>You CAN afford a chocolate bar.</p>";
    OUTPUT.innerHTML += "<p>You will get $" + change + " change.</p>";
  } else {
    OUTPUT.innerHTML += "<p>Sorry, you CAN'T afford a chocolate bar.</p>";
  }

  OUTPUT.innerHTML += "<p>" + chocolateMessages[chocolateLevel] + "</p>";


let classArray = [ "Milk", "Eggs", "Bananas"]
OUTPUT.innerHTML = "The third item is      " + classArray[3];
OUTPUT.innerHTML = "there are " + classArray.length + " items in the shop"

for(let i=0; i<classArray.length; i++){ OUTPUT.innerHTML += "item " + i + ": " +classArray[i]+"<br>"};
/****Adding MIlo button**************/
classArray.push("Milo")

/*Remove product***/
classArray.splice(3,1);

lebron();