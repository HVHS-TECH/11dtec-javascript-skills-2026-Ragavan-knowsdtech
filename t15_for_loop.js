console.log("t15_for_loop.js");
console.log("For Loops");

/****************************
Variables
****************************/
const VERSE_FIELD = document.getElementById("verseField");
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/****************************
Functions
****************************/
function singSong() {
  let verses = Number(VERSE_FIELD.value);

  OUTPUT.innerHTML = "";

  for (let i = verses; i >= 1; i--) {

    if (i === 1) {
      OUTPUT.innerHTML += "<p>1 bottle of milk on the wall, 1 bottle of milk. Take one down, pass it around, no more bottles of milk on the wall.</p>";
    } else {
      OUTPUT.innerHTML += "<p>" + i + " bottles of milk on the wall, " + i + " bottles of milk. Take one down, pass it around, " + (i - 1) + " bottles of milk on the wall.</p>";
    }

  }
}