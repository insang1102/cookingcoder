var number1 = Math.ceil(Math.random() * 9);
var number2 = Math.ceil(Math.random() * 9);
var result = number1 * number2;

var boody = document.body;
var word = document.createElement('div');
word.textContent = String(number1) + 'multiply' + String(number2) + '?';
document.body.append(word);
var foorm = document.createElement('form')
document.body.append(foorm)
var textinput = document.createElement('input');
foorm.append(textinput);
var enrollment = document.createElement('button');
enrollment.textContent = 'enroll';
foorm.append(enrollment);
var alert = document.createElement('div');
document.body.append(alert);


foorm.addEventListener('submit', function callback(event) {
    event.preventDefault();
    if (result === Number(textinput.value)) {
        alert.textContent = 'GoodJob!';
        number1 = Math.ceil(Math.random() * 9);
        number2 = Math.ceil(Math.random() * 9);
        result = number1 * number2;
        word.textContent = String(number1) + 'multiply' + String(number2) + '?';
        textinput.value = '';
        textinput.focus();
        } else {
        alert.textContent = 'TryAgain!';
        textinput.value = '';
        textinput.focus();
        }
    });

// var number1 = Math.ceil(Math.random() * 9);
// var number2 = Math.ceil(Math.random() * 9);
// var result = number1 * number2;
// var condition = true;
// while (condition) {
//     var answer = prompt(String(number1) + 'multiply' + String(number2) + '?');
//     if (result === Number(answer)) {
//         alert('Correct');
//         condition = false;
//     } else {
//         alert('Incorrect');
//     }

// }