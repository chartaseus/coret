const container = document.querySelector(".grid-container");
const changeGridButton = document.getElementById("changeSize");
changeGridButton.addEventListener("click", changeGrid);

function createGrid(gridSize = 16) {
  for (let i = 0; i < (gridSize * gridSize); i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.cssText = `width: ${600 / gridSize}px; height: ${600 / gridSize}px`;
    container.appendChild(cell);
  }
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = "black";
    })
  });
}

function changeGrid() {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  let gridSize = parseInt(prompt("Enter number of squares you want in a row (up to 100)"));
  createGrid(gridSize);
}

createGrid();