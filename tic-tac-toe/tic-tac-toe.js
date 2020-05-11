var BODY = document.body;
var TABLE = document.createElement("table");
var spaces = [];
var rows = [];
var turn = "X";
var result = document.createElement("div");

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
    // if it is a blank
    console.log("This is a blank");
    spaces[rowNum][spaceNum].textContent = turn;
    // are all three spaces filled with?
    var full = false;
    // horizontal line check
    if (
      spaces[rowNum][0].textContent === turn &&
      spaces[rowNum][1].textContent === turn && // There was a spelling mistake which was lowercase of 'C' in content
      spaces[rowNum][2].textContent === turn
    ) {
      full = true;
    }
    // vertical line check
    if (
      spaces[0][spaceNum].textContent === turn &&
      spaces[1][spaceNum].textContent === turn &&
      spaces[2][spaceNum].textContent === turn
    ) {
      full = true;
    }
    // diagonal line check
    if (rowNum - spaceNum === 0 || Math.abs(rowNum - spaceNum) === 2) {
      if (
        (spaces[0][0].textContent === turn &&
          spaces[1][1].textContent === turn &&
          spaces[2][2].textContent === turn) || // if you want to make 2 IF, use '||' !!!!!!
        (spaces[0][2].textContent === turn &&
          spaces[1][1].textContent === turn &&
          spaces[2][0].textContent === turn)
      ) {
        full = true;
      }
    }

    // if full
    if (full) {
      result.textContent = turn + " won this game!";
      // reload
      turn = "X";
      spaces.forEach(function (row) {
        row.forEach(function (space) {
          space.textContent = "";
        });
      });
    } else {
      // if not full
      if (turn === "X") {
        turn = "O";
      } else {
        turn = "X";
      }
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
BODY.appendChild(result); // the function to represent what it is
console.log("rows", rows, "spaces", spaces);

// Reducing the number of nested loop proves your skills
