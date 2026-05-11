const output = document.getElementById("output");
let myVar = 0; // Use let for variables that change

function functionOne() {
  myVar = 1;
  output.innerHTML += `functionOne: ${myVar}<br>`;
}

function functionTwo() {
  myVar = 2; 
  output.innerHTML += `functionTwo: ${myVar}<br>`;
}

// Call functions 
output.innerHTML = `Start: ${myVar}<br>`;
functionOne();
functionTwo();
output.innerHTML += `end: ${myVar}<br>`; 
