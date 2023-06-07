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
          player1[0].positionX = 332;
          player1[0].positionY = 60;
          player2[0].positionX = 332;
          player2[0].positionY = 444;
          matrix[i].hasVerticalWall = false;
          matrix[i].hasHorizontalWall = false;
          player1Input.value("");
          player2Input.value("");
        }
      }
  }
}
