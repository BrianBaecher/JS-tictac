const squares = document.querySelectorAll(".grid");

const charArray = [
  {
    name: "o",
    img: "o.png",
  },
  {
    name: "x",
    img: "x.png",
  },
];

console.log("ree");

/*These arrays will start empty,
use them later on to check for a completed game
after pushing each x and o selection onto their respective arrays */
var xArray = [];
var oArray = [];

function xMove(x) {
  squares.forEach((x) => {
    x.addEventListener("click", (e) => {
      console.log(e.target);
      x.textContent = "X";
      oMove();
    });
  });
}

function oMove(x) {
  squares.forEach((x) => {
    x.addEventListener("click", (e) => {
      console.log(e.target);
      x.textContent = "O";
      xMove();
    });
  });
}

oMove();
