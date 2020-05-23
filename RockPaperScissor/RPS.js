var computerChoice = 0; // the longer and more specific names are, the better
var RPS = {
  // This is 'dictionary',, 1:N is possible as well like Korean English property,,
  rock: "0",
  scissor: "-142px",
  paper: "-284px",
};

var RPS2 = {
  "0": "rock",
  "-142px": "scissor",
  "-284px": "paper",
};

setInterval(function () {
  if (computerChoice === RPS.rock) {
    computerChoice = RPS.scissor;
  } else if (computerChoice === RPS.scissor) {
    computerChoice = RPS.paper;
  } else {
    computerChoice = RPS.rock;
  }
  document.querySelector("#computer").style.background =
    "url(https://en.pimg.jp/023/182/267/1/23182267.jpg)" +
    computerChoice +
    " 0";
}, 100);

document.querySelectorAll(".btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var myChoice = this.textContent;
    console.log(myChoice, RPS2[computerChoice]);
  });
});
