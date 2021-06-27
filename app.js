const ball = document.querySelector(".ball");
const cont = document.querySelector(".lion");
const ship = document.querySelector(".ship");
const blocks = document.querySelectorAll(".block");

let validBlocks = [];

console.log(blocks);

blocks.forEach((block)=>{
  validBlocks.push({
    "x1":block.getBoundingClientRect().x,
    "y1":block.getBoundingClientRect().y,
    "x2":block.getBoundingClientRect().width,
    "y2":block.getBoundingClientRect().height,
    "element":block,
  })
})

validBlocks.splice(validBlocks.length-1,1);

// validBlocks.forEach(block=>{
//   const el = document.createElement("div");
//   el.style.background="black";
//   el.style.position = "absolute";
//   el.style.left = `${block.x1}px`;
//   el.style.top = `${block.y1}px`;
//   el.style.width = `${block.x2}px`;
//   el.style.height = `${block.y2}px`;
//   console.log(el);

//   document.body.appendChild(el);
// })

console.log(validBlocks)

const Xend = window.innerWidth;
const Yend = window.innerHeight;
let shipCordinate = null;
// console.log(Xend, Yend);

let i = 30,
  j = 30,
  a = 3,
  b = -3;

const interval = setInterval(ballMove, 1);

function ballMove() {
  ball.style.transform = `translate(${i}px,${j}px)`;

  i += a;
  j += b;

  if (i >= Xend - 20 || i <= 20) a = -a;
  if (j <= 20) b = -b;

  if (j >= Yend) {
    b=-b;
    // clearInterval(interval);
    // setTimeout("location.reload(true);", 50);
  }
  if (
    shipCordinate &&
    i >= shipCordinate.x - 10 &&
    i <= shipCordinate.x + 110 &&
    shipCordinate.y <= j + 33
  )
    b = -b;

    if(!validBlocks.length){
      window.alert("i");
      clearInterval(interval);
    }
 
    validBlocks.map((block,index)=>{
      if(i>=block.x1 && i<=block.x2+block.x1 && j>=block.y1 && j<=block.y2+block.y1 )
        {
          block.element.style.backgroundColor = "rgba(0,0,0,0)";
          b = -b;
          a=-a
          validBlocks.splice(index,1);
          console.log(validBlocks.length)
        }
    })

    
}

document.body.addEventListener("mousemove", function (e) {
  shipCordinate = ship.getBoundingClientRect();
  ship.style.left = `${e.clientX - 50}px`;
});

