"use strict";
//creating variables for things i know i will need right off rip
//user text box
const textBox = document.querySelector("#userInput");
//submit button
const submitStuff = document.querySelector("#submit");
//div containers
const topDiv = document.querySelector("#items");
const bottomDiv = document.querySelector("#list");
//ordered list
const orderL = document.querySelector(".orderL");

submitStuff.addEventListener("click", function () {
  let toDoUser = textBox.value;
  //if the textbox is not empty the app will function
  if (toDoUser) {
    let tdLI = document.createElement("li");
    let tdText = document.createTextNode(toDoUser);
    let delItem = document.createElement("button");
    let text = document.createTextNode("Delete Item");
    // append the text "delete" to the button
    delItem.appendChild(text);
    //append the text to the li
    tdLI.appendChild(tdText);
    //append the list to the ol tag
    orderL.appendChild(tdLI);
    //append the delitem button to each li
    orderL.appendChild(delItem);
    //add an event listener for each item delete button to delete that specified item
    delItem.addEventListener("click", function () {
      orderL.removeChild(tdLI);
      orderL.removeChild(delItem);
    });
    //empty the text box after each submit button click
    document.querySelector("#userInput").value = "";
  } else {
    //if nothing is entered into the textbox the message below will alert
    alert("Enter something to do please.");
  }
});
