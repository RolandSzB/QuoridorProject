class Player {
  constructor(positionX, positionY, size, color) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.size = size;
    this.color = color;
  }
  draw() {
    fill(this.color);
    circle(this.positionX, this.positionY, this.size);
  }
}

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

    if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2) {
      player1X = x1 + cellSize / 2;
      player1Y = y1 + cellSize / 2;
      player1[0].draw();
    }

    if (
      mouseX > x1 &&
      mouseX < x2 &&
      mouseY > y2 &&
      mouseY < y2 + cellSpacing
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
      mouseX > x2 &&
      mouseX < x2 + cellSpacing &&
      mouseY > y1 &&
      mouseY < y2
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
