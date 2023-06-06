const cellSize = 40;
const cellSpacing = 8;
const startX = 120;
const startY = 40;
const matrix = [];

const restart = new Reset(10, 60, "red", "Reset");
var player1 = new Player(332, 60, 30, "blue");
var player2 = new Player(332, 444, 30, "green");

function clickHandler() {
  restart.onClick();
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].onClick();
  }
  player1.onClick();
  player2.onClick();
}
function draw() {
  if (restart) {
    restart.draw();

    for (let i = 0; i < matrix.length; i++) {
      matrix[i].draw();
    }
  }
  player1.draw();
  player2.draw();
  fill("blue");
  text(`Player 1: ${player1Input.value()} `, 350, 25);
  fill("green");
  text(`Player 2: ${player2Input.value()} `, 350, 500);
}

let player1Input;
let player2Input;

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

  player1Input = createInput();
  player1Input.position(5, 10);
  player1Input.input(updatePlayer1Input);
  player1Input.size(110);

  player2Input = createInput();
  player2Input.position(5, 35);
  player2Input.input(updatePlayer2Input);
  player2Input.size(110);
}
function updatePlayer1Input() {}

function updatePlayer2Input() {}
