const container = document.querySelector(".grid-container");
const changeGridButton = document.getElementById("changeSize");
changeGridButton.addEventListener("click", changeGrid);
let fillColor = "";
const colorInput = document.querySelectorAll("[name=color-options]");
colorInput.forEach((color) => {
  color.addEventListener("click", () => {
    fillColor = color.value;
  })
});

function createGrid(gridSize = 16) {
  for (let i = 0; i < (gridSize * gridSize); i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.cssText = `width: ${100 / gridSize}%; height: ${100 / gridSize}%`;
    container.appendChild(cell);
  }
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      switch (fillColor) {
        case "rainbow":
          cell.style.backgroundColor = `hsl(${Math.round(Math.random() * 360)}, 50%, 70%)`;
          break;

        default:
          cell.style.backgroundColor = "#000000";
          break;
      }
    })
  });
}

function changeGrid() {
  let gridSize = prompt("Enter number of squares you want in a row (up to 100)");
  if (gridSize === null) { return; } // exit function without erasing existing sketch if user clicks cancel
  gridSize = Math.abs(parseInt(gridSize)); // convert user input to positive integer
  
  // exit function without erasing existing sketch if user enters invalid input
  if (gridSize > 100 || isNaN(gridSize)) {
    alert("Please enter a number up to 100");
    return;
  }
  
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  createGrid(gridSize);
}

createGrid();