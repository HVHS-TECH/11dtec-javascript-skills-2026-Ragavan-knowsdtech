console.log("t16_arrays_continued.js");
console.log("Task 16 - Arrays 2: Shopping List");

/****************************
Variables
****************************/
const ITEM_FIELD = document.getElementById("itemField");
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/****************************
Array
****************************/
let shoppingList = []; 

/****************************
Functions
****************************/

function addItem() {
  let newItem = ITEM_FIELD.value;

 
  if (newItem !== "") {
   
    shoppingList.push(newItem);

   
    OUTPUT.innerHTML = "You have added " + newItem + " to the list";

   
    ITEM_FIELD.value = ""; 
  }
}

function displayList() {

  OUTPUT.innerHTML = "";


  OUTPUT.innerHTML += "These are the items on your shopping list:<br>";

  for (let i = 0; i < shoppingList.length; i++) {
    OUTPUT.innerHTML += "- " + shoppingList[i] + "<br>";
  }
}