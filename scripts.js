const cellSize = 40;
const cellSpacing = 3;
const startX = 120;
const startY = 40;
const matrix = [];

const restart = new Reset(10, 60, "red", "Reset");

function clickHandler() {
  restart.onClick();
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].onClick();
  }
}
function draw() {
  if (restart) {
    restart.draw();
    for (let i = 0; i < matrix.length; i++) {
      matrix[i].draw();
    }
  }
}

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.mouseClicked(clickHandler);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cellX = startX + i * (cellSize + cellSpacing);
      const cellY = startY + j * (cellSize + cellSpacing);
      matrix.push(new Cell(cellX, cellY, cellSize, "brown"));
    }
  }

  let player1Input = new Input("Player1", 0, 10, 100);
  let player2Input = new Input("Player2", 0, 35, 100);
}
