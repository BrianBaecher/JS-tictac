const squares = document.querySelectorAll(".grid");



console.log("ree");

/*These arrays will start empty,
use them later on to check for a completed game
after pushing each x and o selection onto their respective arrays */
var xArray = [];
var oArray = [];

squares.forEach((x) => {
  x.addEventListener("click", (e) => {
    xArray.push(x.id);
    console.log(xArray);
    x.textContent = "X";
    squares.forEach((x) => {
      x.removeEventListener;
    });
  });
});

function xMove() {
  xArray.push(x.id);
  console.log(xArray);
  x.textContent = "X";
}

/*
function xMove() {
  squares.forEach((x) => {
    x.addEventListener("click", (e) => {
        xArray.push(x.id)
        console.log(xArray)
      x.textContent = "X";
      squares.forEach((x) => {
        x.removeEventListener
      })
    });
  });
}

function oMove() {
  squares.forEach((x) => {
    x.addEventListener("click", (e) => {
      x.textContent = "O";
      xMove();
    });
  });
}

oMove();
*/
