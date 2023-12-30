const container = document.querySelector(".grid-container");

const gridSizeSlider = document.querySelector("#gridSize");
let gridSize = gridSizeSlider.valueAsNumber;
gridSizeSlider.addEventListener("input", changeGrid);

let fillColor = "";
const colorInput = document.querySelectorAll("[name=color-options]");
colorInput.forEach((color) => {
  color.addEventListener("click", () => {
    fillColor = color.value;
  })
});

function createGrid(gridSize) {
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

        case "eraser":
          cell.style.backgroundColor = "";
          break;

        default:
          cell.style.backgroundColor = "#000000";
          break;
      }
    })
  });
}

function changeGrid() {
  gridSize = gridSizeSlider.value;
  
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  createGrid(gridSize);
}

createGrid(gridSize);