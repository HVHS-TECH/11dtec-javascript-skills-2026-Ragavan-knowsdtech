// Header comments
console.log("t16_arrays_continued.js is loaded and running!");

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

  // Check if the input is not empty
  if (newItem !== "") {
    // 1. Add the item to the array
    shoppingList.push(newItem);

    // 2. Display the confirmation message
    OUTPUT.innerHTML = "<p>You have added <strong>" + newItem + "</strong> to the list.</p>";

    // 3. Clear the input box so it's ready for the next item
    ITEM_FIELD.value = ""; 
  } else {
    // If they click add without typing anything
    OUTPUT.innerHTML = "<p>Please type an item first!</p>";
  }
}

function displayList() {
  // Clear the output area
  OUTPUT.innerHTML = "";

  // Print the heading
  OUTPUT.innerHTML += "<p>These are the items on your shopping list:</p>";

  // Loop through the array and print each item
  for (let i = 0; i < shoppingList.length; i++) {
    OUTPUT.innerHTML += "<p>- " + shoppingList[i] + "</p>";
  }
}