var coordinate = 0; // the longer and more specific names are, the better
var RPS = {
  // This is 'dictionary',, 1:N is possible as well like Korean English property,,
  ROCK: "0",
  SCISSOR: "-142px",
  PAPER: "-284px",
};

// console.log(Object.entries(RPS)); // refactoring is super vital,,
function computerChoice(coordinate) {
  return Object.entries(RPS).find(function (v) {
    // one-dimensional array === indexOf,, two-dimensional array === find, findIndex
    return v[1] === coordinate; // to find numbers which is coordinate!!
  })[0]; // to select 'ROCK, SCISSOR, PAPER', not numbers!!
}

var interval;
function intervalMaking() {
  interval = setInterval(function () {
    if (coordinate === RPS.ROCK) {
      coordinate = RPS.SCISSOR;
    } else if (coordinate === RPS.SCISSOR) {
      coordinate = RPS.PAPER;
    } else {
      coordinate = RPS.ROCK;
    }
    document.querySelector("#computer").style.background =
      "url(https://en.pimg.jp/023/182/267/1/23182267.jpg)" + coordinate + " 0";
  }, 100);
}

// interval = intervalMaking(); // in terms of cancelling interval repetition, save that in the new value so that new id could be replaced??

intervalMaking();

var scoreChart = {
  ROCK: 1,
  PAPER: 0,
  SCISSOR: -1,
};

document.querySelectorAll(".btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    clearInterval(interval);
    setTimeout(function () {
      intervalMaking();
    }, 1000);
    var myChoice = this.textContent;
    // console.log(myChoice, computerChoice(coordinate));
    var myScore = scoreChart[myChoice];
    var computerScore = scoreChart[computerChoice(coordinate)];
    var scoreDifference = myScore - computerScore;
    // the more you shorten codes, the better it would be in terms of hardcoding afterwards,,
    // as adding other new values, if you remove long codes, it doubtlessly stands for 'improving your programming' indeed
    if (scoreDifference === 0) {
      // check the 'myChoice' right name!! (it is ROCK, not ROCK)
      console.log("DRAW");
    } else if ([-1, 2].includes(socreDifference)) {
      // Array.includes === the '||" function could be shortened!!
      console.log("WIN!!");
    } else {
      console.log("LOSE.."); // let's try to make these repeated codes as shorter version ,, hints = to utilise 1, 0, -1 and find similar rules // BELOW!!
      // Plus, let's try to show the numbers of winning, losing and drawing on the page on my own
    }
  });
});

// myChoice\computerChoice(coordinate) // ROCK PAPER SCISSOR // ROCK 1 PAPER 0 SCISSOR -1
//                                   ROCK 1 1   1 0   1 -1
//                                  PAPER 0 1   0 0   0 -1
//                                SCISSOR -1 1  -1 0 -1 -1
//                                === draw,, myChoice - computerChoice(coorperate) = 0
//                                    win,,  myChoice - computerChoice(coorperate) = -1 || 2
//                                    lose,,  ,, = else
