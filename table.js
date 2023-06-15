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

  move(x, y) {
    this.positionX = x;
    this.positionY = y;
  }
}

let currentPlayer = 1;
let clickNumber = 0;

class Cell {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.hasVerticalWall = false;
    this.hasHorizontalWall = false;
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

    displayTurn();
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
      clickNumber % 2 == 0
    ) {
      var distanceX = Math.abs(player1[0].positionX - (x1 + cellSize / 2));
      var distanceY = Math.abs(player1[0].positionY - (y1 + cellSize / 2));
      if (
        (distanceX === cellSize + cellSpacing && distanceY === 0) ||
        (distanceX === 0 && distanceY === cellSize + cellSpacing)
      ) {
        player1[0].move(x1 + cellSize / 2, y1 + cellSize / 2);
        clickNumber++;
        currentPlayer = 2;
      }
    }
    if (
      mouseX > x1 &&
      mouseX < x2 &&
      mouseY > y1 &&
      mouseY < y2 &&
      clickNumber % 2 != 0
    ) {
      var distanceX = Math.abs(player2[0].positionX - (x1 + cellSize / 2));
      var distanceY = Math.abs(player2[0].positionY - (y1 + cellSize / 2));
      if (
        (distanceX === cellSize + cellSpacing && distanceY === 0) ||
        (distanceX === 0 && distanceY === cellSize + cellSpacing)
      ) {
        player2[0].move(x1 + cellSize / 2, y1 + cellSize / 2);
        clickNumber++;
        currentPlayer = 1;
      }
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
      if (nextCell) {
        this.hasHorizontalWall = true;
        nextCell.hasHorizontalWall = true;
      }
      clickNumber++;
      if (currentPlayer === 1) {
        currentPlayer = 2;
      } else {
        currentPlayer = 1;
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
      if (nextCell) {
        this.hasVerticalWall = true;
        nextCell.hasVerticalWall = true;
      }
      clickNumber++;
      if (currentPlayer === 1) {
        currentPlayer = 2;
      } else {
        currentPlayer = 1;
      }
    }
  }
}
function displayTurn() {
  if (currentPlayer === 1) {
    fill("blue");
    text("Player 1's Turn", 10, 250);
  } else {
    fill("green");
    text("Player 2's Turn", 10, 250);
  }
}
