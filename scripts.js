const cellSize = 40;
const cellSpacing = 8;
const startX = 120;
const startY = 40;
var player1X = 332;
var player1Y = 60;
var player2X = 332;
var player2Y = 444;

const matrix = [];
var player1 = [];
var player2 = [];

const restart = new Reset(10, 60, "red", "Reset");
const newGame = new Reset(10, 320, "orange", "NewGame");

var gameMode = "";

function clickHandler() {
  if (gameMode === "") {
    if (mouseX > 200 && mouseX < 400) {
      if (mouseY > 200 && mouseY < 300) {
        gameMode = "human-human";
        startGame();
      } else if (mouseY > 350 && mouseY < 450) {
        gameMode = "human-computer";
        startGame();
      }
    }
  } else {
    restart.onClick();
    for (let i = 0; i < matrix.length; i++) {
      matrix[i].onClick();
    }
    if (player1[0].positionY >= startY + 8 * (cellSize + cellSpacing))
      newGame.onClick();
    if (player2[0].positionY <= startY + cellSize / 2) newGame.onClick();
  }
}

function draw() {
  clear();
  if (gameMode === "") {
    drawPreGame();
  } else {
    if (restart) {
      restart.draw();

      for (let i = 0; i < matrix.length; i++) {
        matrix[i].draw();
      }
      player1[0].draw();
      player2[0].draw();
    }

    fill("blue");
    text(`Player 1: ${player1Input.value()} `, 350, 25);
    fill("green");
    text(`Player 2: ${player2Input.value()} `, 350, 500);

    if (player1[0].positionY >= startY + 8 * (cellSize + cellSpacing)) {
      fill("blue");
      text(`Player 1 wins!`, 60, 300);
      newGame.draw();
    }
    if (player2[0].positionY <= startY + cellSize / 2) {
      fill("green");
      text(`Player 2 wins!`, 60, 300);
      newGame.draw();
    }
  }
}

function drawPreGame() {
  background(bg);
  fill("#5dbbf5");
  rect(200, 250, 200, 50); // Human-Human mode button
  rect(200, 350, 200, 50); // Human-Computer mode button

  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Select Game Mode", 300, 325);
  textSize(18);
  text("Human-Human", 300, 275);
  text("Human-Computer", 300, 375);
}

function startGame() {
  player1Input = createInput();
  player1Input.position(5, 10);
  player1Input.input(updatePlayer1Input);
  player1Input.size(110);

  player2Input = createInput();
  player2Input.position(5, 35);
  player2Input.input(updatePlayer2Input);
  player2Input.size(110);

  player1.push(new Player(player1X, player1Y, 30, "blue"));
  player2.push(new Player(player2X, player2Y, 30, "green"));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cellX = startX + i * (cellSize + cellSpacing);
      const cellY = startY + j * (cellSize + cellSpacing);
      matrix.push(new Cell(cellX, cellY, cellSize, "brown"));
    }
  }
}

function updatePlayer1Input() {}

function updatePlayer2Input() {}

function setup() {
  bg = loadImage("preGameBg.png");
  let cnv = createCanvas(600, 600);
  cnv.mouseClicked(clickHandler);
}
