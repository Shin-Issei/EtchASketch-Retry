/* 
    Here is how this thing is going to be built:
        1. We are going to use a function to append a set number of divs to grid container div
        2. Each of those child divs are going to be styled minimally as defined by the linked
        style sheet.
        3. There will be an onpage input field to get the user defined grid size.
*/

// TODO: Create references to manipulate the DOM and add the function that will add the divs to .container [X]
// TODO: Add the appropriate event listeners for the grid items to make them change color. Use the add.class method.[x]

const body = document.querySelector("body");
const div = document.querySelector(".container");
const btn = document.createElement("button");
const Btnclear = document.createElement("button");
Btnclear.textContent = "Clear";
btn.textContent = "Make New Grid  ";
body.appendChild(btn);
body.appendChild(Btnclear);
btn.addEventListener("click", makeGrid);
Btnclear.addEventListener("click", clear);

function Grid() {
  const newItem = document.createElement("div");
  newItem.addEventListener("mouseover", () => {
    newItem.classList.add("grid-hover");
  });
  div.appendChild(newItem);
}

function makeGrid(size) {
  size = Number(prompt("Type a grid size"));
  div.setAttribute(
    "style",
    `grid-template-columns: repeat(${size},1fr); 
    grid-template-rows: repeat(${size},1fr`
  );
  let i = 0;
  while (i < size * size) {
    Grid();
    i++;
  }
}

function clear() {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  makeGrid();
}
