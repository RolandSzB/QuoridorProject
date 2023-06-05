let clickNumber = 0;
class Cell {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.hasWall = false;
    this.hasPawn = 0;
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

    if (
      mouseX > x1 &&
      mouseX < x2 &&
      mouseY > y1 &&
      mouseY < y2 &&
      this.color == "brown"
    ) {
      if (clickNumber % 2 == 0) {
        this.color = "blue";
        console.log(x1, y1);

        // Set other cells with the same color to brown
        for (let i = 0; i < matrix.length; i++) {
          if (matrix[i] !== this && matrix[i].color === "blue") {
            matrix[i].color = "brown";
          }
        }

        clickNumber++;
      } else {
        this.color = "green";

        // Set other cells with the same color to brown
        for (let i = 0; i < matrix.length; i++) {
          if (matrix[i] !== this && matrix[i].color === "green") {
            matrix[i].color = "brown";
          }
        }

        clickNumber++;
      }
    }
  }
}
