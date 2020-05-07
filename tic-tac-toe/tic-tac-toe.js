var BODY = document.body;
var TABLE = document.createElement("table");
var spaces = [];
var rows = [];
var turn = "X";

var asynchronousCallback = function (event) {
  console.log(event.target); // space
  console.log(event.target.parentNode); // row
  console.log(event.target.parentNode.parentNode); // table
  // e.target === cliked child
  // e.target.parentNode === cliked child's parent tag
  var rowNum = rows.indexOf(event.target.parentNode);
  console.log("rowNum", rowNum);
  var spaceNum = spaces[rowNum].indexOf(event.target); // [rowNum] must be contained otherwise that space can't recognise itself and it just shows '-1' which means "I'm lost"
  console.log("spaceNum", spaceNum);

  if (spaces[rowNum][spaceNum].textContent !== "") {
    // is the space already filled with?
    console.log("This is not a blank");
  } else {
    console.log("This is a blank");
    spaces[rowNum][spaceNum].textContent = turn;
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  }
};

for (var i = 1; i <= 3; i += 1) {
  var row = document.createElement("tr");
  rows.push(row);
  spaces.push([]);
  for (var j = 1; j <= 3; j += 1) {
    var space = document.createElement("td");
    space.addEventListener("click", asynchronousCallback);
    spaces[i - 1].push(space);
    row.appendChild(space);
  }
  TABLE.appendChild(row);
}
BODY.appendChild(TABLE);
console.log("rows", rows, "spaces", spaces);
