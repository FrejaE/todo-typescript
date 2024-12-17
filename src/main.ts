import "./style.scss";

const nav = document.getElementById("nav");

// Skapa iconer tll navbar

const toDoIconButton = document.createElement("button");
const toDoIcon = document.createElement("img");
toDoIcon.src = "../assets/img/todo.png";
toDoIcon.alt = "Knapp för att- göra- lista";
toDoIconButton.appendChild(toDoIcon);
nav?.appendChild(toDoIconButton);

const finishedIconButton = document.createElement("button");
const finishedIcon = document.createElement("img");
finishedIcon.src = "../assets/img/finished.png";
finishedIcon.alt = "Knapp för färdiga todos";
finishedIconButton.appendChild(finishedIcon);
nav?.appendChild(finishedIconButton);
finishedIconButton.classList.add("activeright");

// list sidan
toDoIconButton.addEventListener("click", () => {
  finishedIconButton.classList.add("activeright");
  toDoIconButton.classList.remove("activeleft");
  // createToDoHTML()
});
// avklarat sidan
finishedIconButton.addEventListener("click", () => {
  toDoIconButton.classList.add("activeleft");
  finishedIconButton.classList.remove("activeright");
  // createFinisehHTML()
});
