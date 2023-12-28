const container = document.querySelector(".grid-container");

function createGrid(gridSize = 16) {
  for (let i = 0; i < (gridSize * gridSize); i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.cssText = `width: ${600/gridSize}px; height: ${600/gridSize}px`;
    container.appendChild(cell);
  }
}

createGrid();

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = "black";
  })
});