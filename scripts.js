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

function clickHandler() {
  restart.onClick();
}
function draw() {
  if (restart) {
    restart.draw();
  }
}
function setup() {
  let cnv = createCanvas(500, 500);
  cnv.mouseClicked(clickHandler);

  let player1Input = new Input("Player1", 0, 0, 100);
  let player2Input = new Input("Player2", 0, 30, 100);
}
