const ball = document.querySelector(".ball");
const cont = document.querySelector(".container");
const ship = document.querySelector(".ship");

const grid = document.querySelector(".grid");

const blockWidth = 100;
const blockHeight = 20;

class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    this.topLeft = [xAxis, yAxis + blockHeight];
  }
}
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

const addBlocks = () => {
  for (let i = 0; i < 15; i++) {
    const block = document.createElement("div");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    block.classList.add("block");
    grid.appendChild(block);
  }
};

addBlocks();

const Xend = window.innerWidth;
const Yend = window.innerHeight;
let shipCordinate = null;
// console.log(Xend, Yend);

let i = 30,
  j = 30,
  a = 3,
  b = 3;

const interval = setInterval(ballMove, 10);

function ballMove() {
  ball.style.transform = `translate(${i}px,${j}px)`;
  i += a;
  j += b;
  if (i >= Xend - 20 || i <= 20) a = -a;
  if (j <= 20) b = -b;
  //   console.log(i);
  if (j >= Yend) {
    clearInterval(interval);
    setTimeout("location.reload(true);", 50);
  }
  if (
    shipCordinate &&
    i >= shipCordinate.x - 10 &&
    i <= shipCordinate.x + 110 &&
    shipCordinate.y <= j + 33
  )
    b = -b;
}

cont.addEventListener("mousemove", function (e) {
  shipCordinate = ship.getBoundingClientRect();
  ship.style.left = `${e.clientX - 50}px`;
});
