var boody = document.body;
var word = document.createElement('div');
word.textContent = 'Insang';
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
    if (
        word.textContent[word.textContent.length - 1] === textinput.value[0]) {
        alert.textContent = 'GoodJob!';
        word.textContent = textinput.value;
        textinput.value = '';
        textinput.focus();
        } else {
        alert.textContent = 'TryAgain!';
        textinput.value = '';
        textinput.focus();
        }
    });

/*
 var word = 'Insang'

 while(true) {
     var answer = prompt(word);
     if (word[word.length - 1] === answer[0])
     alert('GoodJob!')
     word = answer;
 } else {
     alert('TryAgain!')
 }
 */
