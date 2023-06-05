let clickNumber = 0;
class Cell {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.hasVerticalWall = false;
    this.hasHorizntalWall = false;
    this.hasPawn = 0;
  }

  draw() {
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
    if (this.hasVerticalWall) {
      fill("gray");
      rect(
        this.x + this.size,
        this.y + this.size / 2 - cellSpacing * 2 - 4,
        cellSpacing,
        cellSize + cellSpacing
      );
    }

    if (this.hasHorizontalWall) {
      fill("gray");
      rect(
        this.x + this.size / 2 - cellSpacing * 2 - 4,
        this.y + this.size,
        cellSize + cellSpacing,
        cellSpacing
      );
    }
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
        for (let i = 0; i < matrix.length; i++) {
          if (matrix[i] !== this && matrix[i].color === "blue") {
            matrix[i].color = "brown";
          }
        }

        clickNumber++;
      } else {
        this.color = "green";
        for (let i = 0; i < matrix.length; i++) {
          if (matrix[i] !== this && matrix[i].color === "green") {
            matrix[i].color = "brown";
          }
        }

        clickNumber++;
      }
    } else if (
      mouseX > x1 &&
      mouseX < x2 &&
      mouseY > y1 + this.size &&
      mouseY < y1 + 2 * this.size &&
      this.color == "brown"
    ) {
      let nextCell = matrix.find(
        (cell) =>
          cell.x === this.x + this.size + cellSpacing && cell.y === this.y
      );
      if (nextCell && nextCell.color === "brown") {
        this.hasHorizontalWall = true;
        nextCell.hasHorizontalWall = true;
      }
    } else if (
      mouseX > x1 + this.size &&
      mouseX < x1 + 2 * this.size &&
      mouseY > y1 &&
      mouseY < y2 &&
      this.color == "brown"
    ) {
      let nextCell = matrix.find(
        (cell) =>
          cell.x === this.x && cell.y === this.y + this.size + cellSpacing
      );
      if (nextCell && nextCell.color === "brown") {
        this.hasVerticalWall = true;
        nextCell.hasVerticalWall = true;
      }
    }
  }
}
