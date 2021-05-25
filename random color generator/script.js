"use strict";
//will need an event listener for my button that when clicked will run a function to change the background color style on my webpage.

//create my button variable (actually didn't need it still good for practice.)
const colorBtn = document.querySelector(".changeColor");

//now my eventlistener

document.body.addEventListener("click", function () {
  //if button is pressed change background color
  //create variable for random color
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = randomColor;
});
