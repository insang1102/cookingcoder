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

while (candidates.length > 0) {
  var value = Math.floor(Math.random() * candidates.length);
}
