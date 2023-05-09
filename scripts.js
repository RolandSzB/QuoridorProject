class Cell {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  draw() {
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
  }

  onClick() {
    let x1 = this.x;
    let y1 = this.y;
    let x2 = x1 + this.size;
    let y2 = y1 + this.size;

    if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2) {
      this.color = "black";
    }
  }
}

class Input {
  constructor(defaultValue, x, y, width) {
    this.input = createInput(defaultValue);
    this.input.position(x, y);
    this.input.size(width);
  }
}

class Reset {
  #color;
  #x;
  #y;
  #text;
  constructor(x, y, color, text) {
    this.#color = color;
    this.#x = x;
    this.#y = y;
    this.#text = text;
  }
  draw() {
    fill(this.#color);
    rect(this.#x, this.#y, 60, 30);
    textSize(16);
    fill("black");
    text(this.#text, this.#x + 7, this.#y + 20);
  }
  onClick() {
    if (
      mouseX > this.#x &&
      mouseX < this.#x + 50 &&
      mouseY > this.#y &&
      mouseY < this.#y + 30
    )
      if (this.#text == "Reset") {
        for (let i = 0; i < matrix.length; i++) {
          matrix[i].color = "brown";
        }
      }
  }
}

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

  let player1Input = new Input("Player1", 0, 0, 100);
  let player2Input = new Input("Player2", 0, 30, 100);
}
