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

  // Make sure the input isn't empty
  if (newItem !== "") {
    // Add the item to the end of the array
    shoppingList.push(newItem);

    // Display the confirmation message
    OUTPUT.innerHTML = "You have added " + newItem + " to the list";

    // Clear the input field for the next item
    ITEM_FIELD.value = ""; 
  }
}

function displayList() {
  // Clear the output area first
  OUTPUT.innerHTML = "";

  // Display the main message
  OUTPUT.innerHTML += "These are the items on your shopping list:<br>";

  // Loop through the array and print each item on a new line
  for (let i = 0; i < shoppingList.length; i++) {
    OUTPUT.innerHTML += "- " + shoppingList[i] + "<br>";
  }
}