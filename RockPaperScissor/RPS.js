var coordinate = 0; // the longer and more specific names are, the better
var RPS = {
  // This is 'dictionary',, 1:N is possible as well like Korean English property,,
  rock: "0",
  scissor: "-142px",
  paper: "-284px",
};

console.log(Object.entries(RPS));
function computerChoice(coordinate) {
  return Object.entries(RPS).find(function (v) {
    return v[1] === coordinate;
  })[0];
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
    console.log(myChoice, RPS2[coordinate]);
  });
});
