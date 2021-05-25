"use strict";
const myNote = document.querySelector(".myNote");
const addNoteBtn = document.querySelector("#addNoteBtn");
const topDiv = document.querySelector(".topDiv");
const botDiv = document.querySelector(".botDiv");

addNoteBtn.addEventListener("click", function () {
  let note = myNote.value;
  let title = note.split(" ");
  let newNoteH3 = document.createElement("h3");
  let newNote = document.createElement("section");
  let newNotePara = document.createElement("p");
  newNotePara.className = "hidden";
  newNotePara.innerHTML = `${note} <br> <button class="closeNoteBtn">&times;</button>`;
  newNoteH3.innerHTML = `${title[0]}`;
  newNote.innerHTML = `<button class="openNoteBtn">View: ${title[0]}</button>`;
  newNote.appendChild(newNotePara);
  botDiv.appendChild(newNoteH3);
  botDiv.appendChild(newNote);

  const openNote = function () {
    newNotePara.classList.remove("hidden");
    document.querySelector(".openNoteBtn").addEventListener("click", openNote);
  };

  const closeNote = function () {
    newNotePara.classList.add("hidden");
    document
      .querySelector(".closeNoteBtn")
      .addEventListener("click", closeNote);
  };

  openNote();
  closeNote();

  // clear text box after add note is clicked.
  document.querySelector(".myNote").value = "";
});
