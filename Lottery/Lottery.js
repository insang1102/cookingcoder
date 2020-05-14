// if nothing's in somewhere, it stands for 'undefined'
// empty === loop is impossible!

// FILL.forEach(function (element, index) {
//   FILL[index] = index + 1;
// });
// console.log(FILL);

// [undefined, undefined, undefined];
// [1, 2, 3]; --> map

// var candidates = Array(45);
// var FILL = candidates.fill();
// var MAP = FILL.map(function (element, index) {
//   return index + 1;
// });
// ||
// VV

var candidates = Array(45)
  .fill()
  .map(function (element, index) {
    return index + 1;
  });
console.log(candidates);

// for = if you know how many times you are supposed to use the loop
//       unless the criterion values are changed
// while = unless you know how many times you are supposed to use the loop
//        if the criterion values are changed
var shuffle = [];
while (candidates.length > 0) {
  var movingValue = candidates.splice(
    Math.floor(Math.random() * candidates.length),
    1
  )[0];
  shuffle.push(movingValue);
}
console.log(shuffle);

var pickedNum = shuffle.slice(0, 6).sort(function (p, c) {
  return p - c; // if 'p -c' is greater than 0, then order is changed
}); // if you want descending order, replace to 'c - p'
var bonusNum = shuffle[shuffle.length - 1];

console.log("pickedNum ", pickedNum, "bonusNum ", bonusNum);

var result = document.getElementById("result");

for (i = 0; i < pickedNum.length; i++) {
  var ball = document.createElement("div");
  ball.textContent = pickedNum[i];
  result.appendChild(ball);
}

var bonusSpace = document.getElementsByClassName("bonusResult")[0];
var bonusball = document.createElement("div");
bonusball.textContent = bonusNum;
bonusSpace.appendChild(bonusball);
