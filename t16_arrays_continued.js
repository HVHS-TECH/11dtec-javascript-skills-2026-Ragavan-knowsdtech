
console.log("t16_arrays_continued.js is loaded and running!");

let shoppingList = [];

//functions

function addItem() {

    let item = document.getElementById("itemInput").value;


   
    shoppingList.push(item);


  
    document.getElementById("confirmation").innerHTML =
    "You have added " + item + " to the list";


  
    document.getElementById("itemInput").value = "";

}



function displayList() {

    document.getElementById("confirmation").innerHTML =
    "These are the items on your shopping list:";


    let list = document.getElementById("list");


  
    list.innerHTML = "";


    for (let i = 0; i < shoppingList.length; i++) {

        list.innerHTML += "<li>" + shoppingList[i] + "</li>";

    }

}