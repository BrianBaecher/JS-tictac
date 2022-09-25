const square1 = document.getElementById("1");
const square2 = document.getElementById("2");
const square3 = document.getElementById("3");
const square4 = document.getElementById("4");
const square5 = document.getElementById("5");
const square6 = document.getElementById("6");
const square7 = document.getElementById("7");
const square8 = document.getElementById("8");
const square9 = document.getElementById("9");
const xWinCount = document.getElementById("xWinCount");
const oWinCount = document.getElementById("oWinCount");
const drawCount = document.getElementById("drawCount");
const startButton = document.getElementById("button");
const turn = document.getElementById("turn");
const overlay = document.getElementById("overlay");
turn.textContent = "Current move and match results are shown here (after you hit start)"

function bork() {
  console.log("bork");
}

startButton.addEventListener("click", gameStart);

var xArray = [];
var oArray = [];
var xWins = 0;
var oWins = 0;
var draws = 0;


function timeOut() {
  setTimeout(() => {
    resetBoard();
  }, 1000);
}

function addXListener() {
  square1.addEventListener("click", xMove);
  square2.addEventListener("click", xMove);
  square3.addEventListener("click", xMove);
  square4.addEventListener("click", xMove);
  square5.addEventListener("click", xMove);
  square6.addEventListener("click", xMove);
  square7.addEventListener("click", xMove);
  square8.addEventListener("click", xMove);
  square9.addEventListener("click", xMove);
}

function removeXListener() {
  square1.removeEventListener("click", xMove);
  square2.removeEventListener("click", xMove);
  square3.removeEventListener("click", xMove);
  square4.removeEventListener("click", xMove);
  square5.removeEventListener("click", xMove);
  square6.removeEventListener("click", xMove);
  square7.removeEventListener("click", xMove);
  square8.removeEventListener("click", xMove);
  square9.removeEventListener("click", xMove);
}

function addOListener() {
  square1.addEventListener("click", oMove);
  square2.addEventListener("click", oMove);
  square3.addEventListener("click", oMove);
  square4.addEventListener("click", oMove);
  square5.addEventListener("click", oMove);
  square6.addEventListener("click", oMove);
  square7.addEventListener("click", oMove);
  square8.addEventListener("click", oMove);
  square9.addEventListener("click", oMove);
}

function removeOListener() {
  square1.removeEventListener("click", oMove);
  square2.removeEventListener("click", oMove);
  square3.removeEventListener("click", oMove);
  square4.removeEventListener("click", oMove);
  square5.removeEventListener("click", oMove);
  square6.removeEventListener("click", oMove);
  square7.removeEventListener("click", oMove);
  square8.removeEventListener("click", oMove);
  square9.removeEventListener("click", oMove);
}

function checkWin(arr) {
  if (
    (arr.includes("1") && arr.includes("2") && arr.includes("3")) ||
    (arr.includes("1") && arr.includes("4") && arr.includes("7")) ||
    (arr.includes("1") && arr.includes("5") && arr.includes("9")) ||
    (arr.includes("4") && arr.includes("5") && arr.includes("6")) ||
    (arr.includes("7") && arr.includes("8") && arr.includes("9")) ||
    (arr.includes("2") && arr.includes("5") && arr.includes("8")) ||
    (arr.includes("3") && arr.includes("5") && arr.includes("7")) ||
    (arr.includes("3") && arr.includes("6") && arr.includes("9"))
  ) {
    return 1;
  } else if (xArray.length + oArray.length >= 9) {
    return 2;
  }
}

function xMove(x) {
  if (x.target.textContent === "") {
    xArray.push(x.target.id);
    console.log(x.target.id);
    x.target.textContent = "X";
    console.log(xArray);
    removeXListener();
    checkWin(xArray);
    if (checkWin(xArray) === 1) {
      removeOListener();
      xWins++;
      xWinCount.textContent = xWins.toString();
      console.log(xWinCount);
      gameRunning = false;
      timeOut();
      turn.textContent = "X WINS (click start to play again)";
    } else if (checkWin(oArray) === 2) {
      draws++;
      drawCount.textContent = draws.toString();
      turn.textContent = "DRAW (click start to play again)"
      timeOut();
    } else {
      turn.textContent = "O's turn";
      addOListener();
    }
  } else if (x.target.textContent === "O") {
    alert("You can't do that!");
  } else if (x.target.textContent === "X") {
    alert("You already made that move!");
  }
}

function oMove(x) {
  if (x.target.textContent === "") {
    oArray.push(x.target.id);
    x.target.textContent = "O";
    removeOListener();
    checkWin(oArray);
    if (checkWin(oArray) === 1) {
      oWins++;
      oWinCount.textContent = oWins.toString();
      console.log(oWinCount);
      gameRunning = false;
      timeOut();
      turn.textContent = "O WINS (click start to play again)"
    } else if (checkWin(oArray) === 2) {
      draws++;
      drawCount.textContent = draws.toString();
      turn.textContent = "DRAW (click start to play again)"
    } else {
      turn.textContent = "X's turn";
      addXListener();
    }
  } else if (x.target.textContent === "X") {
    alert("You can't do that!");
  } else if (x.target.textContent === "O") {
    alert("You already made that move!");
  }
}

function resetBoard() {
  //this function is within timeOut so don't call it on its own
  xArray = [];
  oArray = [];
  square1.textContent = "";
  square2.textContent = "";
  square3.textContent = "";
  square4.textContent = "";
  square5.textContent = "";
  square6.textContent = "";
  square7.textContent = "";
  square8.textContent = "";
  square9.textContent = "";
}

function checkDraw(xArr, oArr) {
  if (xArr.length + oArr.length >= 9) {
    alert("draw");
  }
}

function gameStart() {
  turn.textContent = "X's turn";
  addXListener();
}
