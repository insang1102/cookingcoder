var coordinate = 0; // the longer and more specific names are, the better
var RPS = {
  // This is 'dictionary',, 1:N is possible as well like Korean English property,,
  rock: "0",
  scissor: "-142px",
  paper: "-284px",
};

// console.log(Object.entries(RPS)); // refactoring is super vital,,
function computerChoice(coordinate) {
  return Object.entries(RPS).find(function (v) {
    // one-dimensional array === indexOf,, two-dimensional array === find, findIndex
    return v[1] === coordinate; // to find numbers which is coordinate!!
  })[0]; // to select 'rock, scissor, paper', not numbers!!
}

var interval;
function intervalMaking() {
  interval = setInterval(function () {
    if (coordinate === RPS.rock) {
      coordinate = RPS.scissor;
    } else if (coordinate === RPS.scissor) {
      coordinate = RPS.paper;
    } else {
      coordinate = RPS.rock;
    }
    document.querySelector("#computer").style.background =
      "url(https://en.pimg.jp/023/182/267/1/23182267.jpg)" + coordinate + " 0";
  }, 100);
}

interval = intervalMaking(); // in terms of cancelling interval repetition, save that in the new value so that new id could be replaced??

document.querySelectorAll(".btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    clearInterval(interval);
    setTimeout(function () {
      intervalMaking();
    }, 1000);
    var myChoice = this.textContent;
    // console.log(myChoice, computerChoice(coordinate));
    if (myChoice === "ROCK") {
      // check the 'myChoice' right name!! (it is ROCK, not rock)
      if (computerChoice(coordinate) === "rock") {
        console.log("DRAW");
      } else if (computerChoice(coordinate) === "paper") {
        console.log("LOSE..");
      } else {
        console.log("WIN!!");
      }
    } else if (myChoice === "PAPER") {
      if (computerChoice(coordinate) === "ROCK") {
        console.log("WIN!!");
      } else if (computerChoice(coordinate) === "paper") {
        console.log("DRAW");
      } else {
        console.log("LOSE..");
      }
    } else if (myChoice === "SCISSOR") {
      if (computerChoice(coordinate) === "rock") {
        console.log("LOSE..");
      } else if (computerChoice(coordinate) === "paper") {
        console.log("WIN!!");
      } else {
        console.log("DRAW");
      } // let's try to make these repeated codes as shorter version ,, hints = to utilise 1, 0, -1 and find similar rules
      // Plus, let's try to show the numbers of winning, losing and drawing on the page on my own
    }
  });
});
