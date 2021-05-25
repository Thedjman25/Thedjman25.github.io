"use strict";
// Will begin by listing the variables i will need for the project. (need to reference: buttons, imgs, score, overlays, etc ).
const newGameBtn = document.querySelector(".newGame");
const quitGameBtn = document.querySelector(".quitGame");
const openHintBtn = document.querySelector(".openHintBtn");
const closeHintBtn = document.querySelector(".closeHintBtn");
const imgHolder = document.querySelector(".celebPic"); // references container of main img
const score = document.querySelector(".score");
const hintModal = document.querySelector(".hintModal");
let currentPic = document.querySelector(".randPic"); // references img tag within the div
const randParagraph = document.querySelector(".randPara");
let billBtn = document.querySelector(".celebBtn");
let denzelBtn = document.querySelector(".celebBtn2");
let malcolmBtn = document.querySelector(".celebBtn3");
// Just getting my thoughts together here:

//will create the array for my images and an array for the source of the images
const srcArray = [
  "http://127.0.0.1:8080/bill-gates.jpg",
  "http://127.0.0.1:8080/denzel.jpg",
  "http://127.0.0.1:8080/malcolmx.jpg",
];
//starting to create the new game function; each new game click will give the buttons a different value
const newGmFn = function () {
  //assign img tag a src randomly from srcArray.
  let ranSrc = srcArray[Math.round(Math.random() * (srcArray.length - 1))];
  //img tag current src is populated with random src from srcArray
  currentPic.src = ranSrc;
};
//eventlistener to perform newGmFn when new game button is clicked.
newGameBtn.addEventListener("click", newGmFn);
//create functions to open hint button with correct fun facts once hint button is clicked
const openHint = function () {
  //divElement.classlist.remove(hidden)
  hintModal.classList.remove("hidden");
  openHintBtn.addEventListener("click", openHint);
  //Now i am going to work on the hint button functionality. The hint button should display facts about the indivisidual in the random pic that shows up.depending on the current celebrity the correct hint will be displayed for that celebrity.
  if (currentPic.src === "http://127.0.0.1:8080/bill-gates.jpg") {
    randParagraph.innerHTML =
      "Held the #1 spot on Forbes’ list of the world’s billionaires for 18 out of the past 23 years. Is co1or blind. He wrote his first computer program as a teenager in at Lakeside School.";
  } else if (currentPic.src === "http://127.0.0.1:8080/denzel.jpg") {
    randParagraph.innerHTML =
      "Named after his father, who was named after the Doctor who delivered him. named People Magazine’s “Sexiest Man Alive” in 1996. at various points he considered medicine, law, politics and even journalism.";
  } else if (currentPic.src === "http://127.0.0.1:8080/malcolmx.jpg") {
    randParagraph.innerHTML =
      "He moved around constantly as a youth. He tied to memorizing the dictionary and improve his penmanship by copying entire pages. Worked with red fox at JIMMY’S CHICKEN SHACK.";
  }
};
//closes the hint modal
const closeHint = function () {
  hintModal.classList.add("hidden");
  closeHintBtn.addEventListener("click", closeHint);
};

//determine whether the user got
const gotRight = function () {
  alert("Correct-O-Mundo You Win!!!");
  currentPic.classList.remove("hidden");
};

billBtn.addEventListener("click", function () {
  if (billBtn.value == currentPic.src) {
    gotRight();
  } else {
    alert("Wrong! Try again Loser!");
  }
});
denzelBtn.addEventListener("click", function () {
  if (denzelBtn.value == currentPic.src) {
    gotRight();
  } else {
    alert("Wrong! Try again Loser!");
  }
});
malcolmBtn.addEventListener("click", function () {
  if (malcolmBtn.value == currentPic.src) {
    gotRight();
  } else {
    alert("Wrong! Try again Loser!");
  }
});
//the start over button will simply refresh the page at this point.
quitGameBtn.addEventListener("click", function () {
  location.reload();
});
//calling the functions
openHint();
closeHint();
