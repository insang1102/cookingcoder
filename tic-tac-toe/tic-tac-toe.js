var BODY = document.body;
var TABLE = document.createElement("table");
for (var i = 1; i <= 3; i += 1) {
  var row = document.createElement("tr");
  for (var j = 1; j <= 3; j += 1) {
    var space = document.createElement("td");
    row.appendChild(space);
  }
  TABLE.appendChild(row);
}
BODY.appendChild(TABLE);
