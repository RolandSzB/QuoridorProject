class Table {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.cellSize = this.size / 9;
  }

  draw() {
    fill("brown");
    stroke(250);
    strokeWeight(3);
    rect(this.x, this.y, this.size, this.size);

    for (let i = 1; i < 9; i++) {
      let x = this.x + i * this.cellSize;
      let y = this.y + i * this.cellSize;
      line(x, this.y, x, this.y + this.size);
      line(this.x, y, this.x + this.size, y);
    }
  }
  onClick() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.cellSize &&
      mouseY > this.y &&
      mouseY < this.y + this.cellSize
    )
      console.log("Aici");
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
      if (this.#text == "Reset") console.log("Aici");
  }
}

const restart = new Reset(10, 60, "red", "Reset");
const table = new Table(130, 20, 400);

function clickHandler() {
  restart.onClick();
  table.onClick();
}
function draw() {
  if (restart) {
    restart.draw();
    table.draw();
  }
}
function setup() {
  let cnv = createCanvas(600, 600);
  cnv.mouseClicked(clickHandler);

  let player1Input = new Input("Player1", 0, 0, 100);
  let player2Input = new Input("Player2", 0, 30, 100);
}
