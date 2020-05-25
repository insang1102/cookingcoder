var coordinate = 0; // the longer and more specific names are, the better
var RPS = {
  // This is 'dictionary',, 1:N is possible as well like Korean English property,,
  rock: "0",
  scissor: "-142px",
  paper: "-284px",
};

console.log(Object.entries(RPS)); // refactoring is super vital,,
function computerChoice(coordinate) {
  return Object.entries(RPS).find(function (v) {
    // one-dimensional array === indexOf,, two-dimensional array === find, findIndex
    return v[1] === coordinate; // to find numbers which is coordinate!!
  })[0]; // to select 'rock, scissor, paper', not numbers!!
}

setInterval(function () {
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

document.querySelectorAll(".btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var myChoice = this.textContent;
    console.log(myChoice, computerChoice(coordinate));
  });
});
