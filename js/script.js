const board = document.querySelector("#board");
const SQUARE_COUNT = 500;

for (let i = 0; i < SQUARE_COUNT; i++) {
  // Create 450 square element
  const square = document.createElement("div");
  // add class for square
  square.classList.add("square");
  //add color style if mouseover
  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  //remove color style if mouseleave
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  // add swaure element for board-element
  board.append(square);
}

function setColor(element) {
  // generate random color for sqare
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}
