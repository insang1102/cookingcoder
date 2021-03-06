// Core of Coding is REUSE

// push : add in front of something
// unshift : add behind something
// shift : pick first one
// pop : pick last one

// Property is accessible with big brackets or dot

// Object { function, array }
// Number, String, null, undefined, Boolean
// Object { property, method(containing function) }
var BODY = document.body;
var numberCandidates;
var numberArray;

function pickingNumbers() {
  numberCandidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numberArray = [];
  for (var i = 0; i < 4; i += 1) {
    var pickedNum = numberCandidates.splice(
      Math.floor(Math.random() * (9 - i)),
      1
    )[0];
    numberArray.push(pickedNum);
  }
}

pickingNumbers();
console.log(numberArray);

var result = document.createElement("h1");
document.body.append(result);
var FORM = document.createElement("form");
document.body.append(form);
var textinput = document.createElement("input");
FORM.append(textinput);
textinput.type = "text";
textinput.maxLength = 4;
var click = document.createElement("button");
click.textContent = "enroll";
FORM.append(click);

// 문자.split(구분자) -> 배열
// 배열.join(구분자) -> 문자
// 배열.indexOf(값) -> 값의 위치를 알 수 있음
// 답변할 때 마다 기회가 몇 번 남았는지도 표시해볼 것.

var wrongNumbers = 0;
FORM.addEventListener("submit", function asynchronous(event) {
  // when you did enter // asynchronous : 비동기, synchronous : 동기
  event.preventDefault(); // 'submit' default is reloading so you need to use that function so that it can be ignored.
  var answer = textinput.value;
  if (answer === numberArray.join("")) {
    // If the answer is right
    result.textContent = "HOMERUN";
    textinput.value = "";
    textinput.focus();
    pickingNumbers();
    wrongNumbers = 0;
  } else {
    // If the answer is wrong
    var answerArray = answer.split("");
    var strike = 0;
    var ball = 0;
    wrongNumbers += 1;
    if (wrongNumbers > 10) {
      result.textcontent =
        "It was failure! The answer was " + numberArray.join("");
      textinput.value = "";
      textinput.focus();
      pickingNumbers();
      wrongNumbers = 0;
    } else {
      console.log("If the answer wrong", answerArray);
      for (var i = 0; i <= 3; i += 1) {
        if (Number(answerArray[i]) === numberARray[i]) {
          // To check if the location is same
          console.log("same location?");
          strike += 1;
        } else if (numberArray.indexOf(Number(answerArray[i])) > -1) {
          // To check if there are same numbers though the location is not same
          console.log("just same numbers?");
          ball += 1;
        }
      }
      result.textContent = strike + "strike" + ball + "ball!!";
      textinput.value = "";
      textinput.focus();
    }
  }
});
