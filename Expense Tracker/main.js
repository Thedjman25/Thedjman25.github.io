"use strict";
//create my constants
const xName = document.querySelector(".xName");
const xDate = document.querySelector(".xDate");
const xAmt = document.querySelector(".xAmt");
const addX = document.querySelector(".addX");
const table = document.querySelector("#xTable");

//event listener to submituser data to table
addX.addEventListener("click", function () {
  //get the values of the textboxes
  let nameOfExpense = xName.value;
  let dateOfExpense = xDate.value;
  let costOfExpense = xAmt.value;

  //create the html crap
  let newRow = document.createElement("tr");
  let nameData = document.createElement("td");
  let dateData = document.createElement("td");
  let amtData = document.createElement("td");
  let delX = document.createElement("button");
  let btnText = document.createTextNode("Remove Expense");

  //append the value to the table data
  nameData.innerHTML = `${nameOfExpense}`;
  dateData.innerHTML = `${dateOfExpense}`;
  amtData.innerHTML = `$${costOfExpense}`;

  //appending the data to the table
  delX.appendChild(btnText);
  newRow.appendChild(nameData);
  newRow.appendChild(dateData);
  newRow.appendChild(amtData);
  table.appendChild(newRow);
  table.appendChild(delX);

  delX.addEventListener("click", function () {
    table.removeChild(newRow);
    table.removeChild(delX);
  });

  //clear the text box after submit is clicked
  document.querySelector(".xName").value = "";
  document.querySelector(".xDate").value = "";
  document.querySelector(".xAmt").value = "";
});
