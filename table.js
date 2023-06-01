let clickNumber = 0;
class Cell {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.hasWall = false;
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
        clickNumber++;
      } else {
        this.color = "green";
        clickNumber++;
      }
    }
  }
}
