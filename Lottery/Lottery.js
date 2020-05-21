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

var bonus = shuffle[shuffle.length - 1];
var pickedNum = shuffle.slice(0, 6).sort(function (p, c) {
  return p - c; // if 'p -c' is greater than 0, then order is changed
}); // if you want descending order, replace to 'c - p'

console.log("pickedNum", pickedNum, "bonusNum", bonus);

var result = document.querySelector("#result");

function ballColoring(number, result) {
  var ball = document.createElement("div");
  ball.textContent = number;
  ball.style.display = "inline-block";
  ball.style.border = "1px solid black";
  ball.style.borderRadius = "50%";
  ball.style.textAlign = "center";
  ball.style.width = "20px";
  ball.style.height = "20px";
  ball.style.marginRight = "5px";
  ball.style.fontSize = "14px";
  ball.className = "ballID" + number;
  var backgroundColor;
  if (number <= 10) {
    backgroundColor = "red";
  } else if (number <= 20) {
    backgroundColor = "orange";
  } else if (number <= 30) {
    backgroundColor = "yellow";
  } else if (number <= 40) {
    backgroundColor = "blue";
  } else {
    backgroundColor = "green";
  }
  ball.style.background = backgroundColor;
  result.appendChild(ball);
}

setTimeout(function asynchronousCallbackFunction() {
  ballColoring(pickedNum[0], result);
}, 1000); // millisecond

setTimeout(function asynchronousCallbackFunction() {
  ballColoring(pickedNum[1], result);
}, 2000); // millisecond

setTimeout(function asynchronousCallbackFunction() {
  ballColoring(pickedNum[2], result);
}, 3000); // millisecond

setTimeout(function asynchronousCallbackFunction() {
  ballColoring(pickedNum[3], result);
}, 4000); // millisecond

setTimeout(function asynchronousCallbackFunction() {
  ballColoring(pickedNum[4], result);
}, 5000); // millisecond

setTimeout(function asynchronousCallbackFunction() {
  ballColoring(pickedNum[5], result);
}, 6000); // millisecond

setTimeout(function asynchronousCallbackFunction() {
  var Space = document.querySelector(".bonus");
  ballColoring(bonus, Space);
}, 7000); // millisecond
