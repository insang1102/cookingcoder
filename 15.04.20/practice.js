var result = 0
while (result <= 10) {
    console.log(result + (result + 1));
    result = result + 1;
}

var result = 0
while (result <= 10) {
    console.log(result * (result + 1) / 2);
}

String(5)

function f(x, z) {
    return x + z + 5;
} // function is really helpful in terms of repetition.

IAmVeryHappy.length

var word = 'IAmVeryHappy';

word[0];

word.length;

var condition = 0; // 1
while (condition < 5) { // 2
    console.log('ILikeStrawberry') // 3
    condition = condition + 3; // 4
}
'ILikeFruit'

// for has three values, a starting value, an exit condition, an incrementor.

// If >>>> While >>>> for


var first = 'Insang';
while (true) {
    var answer = prompt(first);
    if (first[first.length - 1] === answer[0]) {
        // Right
        alert('GoodJob!');
        first = answer;
    } else {
        // Wrong
        alert('Again!')
    }
}


// an incrementor has a functionality as changing true to false. 

for (var star = 1; star <= 5; star += 1) {
    console.log('*'.repeat[star])
}

for (var Star = 5; Star >= 1; Star -= 1) {
    console.log('*'.repeat[Star])
}

for (var sTar = 10; sTar >= 2; sTar -= 2) {
    console.log('*'.repeat[sTar])
}

var a = 5;
var b = 7;

console.log(typeOf (a + b));

Math.round(7.8)

Math.round(7.4)

Math.floor(7.8)

Math.ceil(7.4)

Math.max(7, 6, 8, 9)

Math.PI

if (isNaN(a)) {
    console.log("that ain't even a number, thickie");
}   else {
    console.log("meaning of life is " + (a * b));
}

var a = 'apple'

if (isNaN(a)) {
    console.log("that ain't even a number, thickie");
}   else {
    console.log("meaning of life is " + (a * b));
}

// ! means negative

var myString = 'I\'m a "fun" string';

console.log(myString.indexOf("ninja"));

// if there is not the signified word, it says '-1'

console.log(myString.indexOf("string"));

// it lets me know the length of the rest until string

var string1 = "abc"
var string2 = "bcd"

console.log(string1 < string2)

// the reason of that result is based on ASCII, which is American Standard Code for Information Interchange.
// http://www.asciitable.com/


var str = "hello, world";

var str2 = str.slice(2,9); // from the start number to the end number

var tags = "meat,ham,salami,pork,beef,chicken"

var tagsArray = tags.split(",");

// multiplication table
while (true)
    var number1 = Math.floor(Math.random() * 9) + 1
    var nummer2 = Math.floor(Math.random() * 9) + 1
    var sum = number1 * number2
    var condition = true;
    while (condition) {
        var answer = prompt(String(number1) + 'multiply' + String(number2) + '?')
            if (sum === Number(answer)) {
                alert('Nice!');
                condition = false;
            } else {
                alert('hmmm..');
            }

    }


// window = browser

// document = page(tab)

window['document']

window.resizeTo(200,200)

window.resizeBy(200,200)

window.resizeTo(
    window.screen.availwidth / 2,
    window.screen.availHeight / 2
);

var newwindow = window.open()

alert('jfafjoa')

window.alert('anfjf')

// window is accessible from everywhere so it's 전역객체.

// 전역 변수는 전역 객체의 속성이 된다. (함수 바깥)

// var a = 'b';

// window.a; // 'b'

// 전역 변수와 함수 안의 변수가 다른 이유는 함수의 특수성 (함수스코프) 떄문이다.

// document = translator

console.dir(document)

// document object medel = DOM = Let HTML translate JavaScript.

var word = 'Insang'
while(true) {
    var answer = prompt(word);
    if (word[word.length - 1] === answer[0]) {
        alert('GoodJob')
        word = answer;
    } else {
        alert('AgainPlease')
    }
}

var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";
myCar.driver = function() { 
    console.log("now driving");
};

myCar.drive();

var myCar2 = {

    maxSpeed: 70,
    driver: "Net Ninja",
    driver: function(speed, time){
        console.log(spped * time);
    };

};

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);

//

var Car = function(maxSpeed, driver) {

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {
        console.log(speed * time);
    };
    this.logdriver = function() {
        console.log("driver name is " + this.driver);
    };
}

var myCar = new Car(70, "Ninja Man");
var myCar2 = new Car(40, "Humpty Dumpty");
var myCar3 = new Car(10, "Shaun");
var myCar4 = new Car(90, "James Bond");

myCar.drive(30,5);
myCar3.logdriver();

//

var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1994, 10, 1, 9, 30, 15);
var myFutureDate = new Date(2070, 10, 2, 9, 28, 10);

console.log(myPastDate);
console.log(myFutureDate);

var birthday = new Date(1994, 10, 11, 4, 5, 6);
var birthday2 = new Date(1994, 10, 11, 4, 5, 6);

//get the month of the date (0 - 11)
//console.log(birthday.getMonth());

//get the full year (YYYY)
//console.log(birthday.getFullYear());

//get the date of the month (1 - 31)
//console.log(birthday.getDate());

//get the day of the week (0 - 6)
//console.log(birthday.getDay());

//get the hour of the date (0 - 23)
//console.log(birthday.getHours());

//get the number of milliseconds since 1st Jan 1970
//console.log(birthday.getTime()); === quite a lot useful!

if(birthday === birthday2) {

    console.log("birthdays are equlal")

} else {

    console.log("birthdays are not equal")

} // the reason why it doesn't work in Javascript is because it considers them as 2 different objecets regardless of their same properties.


if(birthday.getTime() === birthday2.getTime()) {

    console.log("birthdays are equlal")

} else {

    console.log("birthdays are not equal")
} // these work appropriately.

//자바스크립트에서 비동기는 코드 상의 순서대로 실행되지 않는 코드를 의미.

/* DOM = Document Object Model // Object includes every single element like head, body, ul, p etc
   The DOM is Application Programming Interface
   Use the DOM when we interact with web pages
    -Add
    -Delete
    -Change
*/

document.getElementsByClassName('content');
var myContentDivs = document.getElementsByClassName('')
myContentDivs
var myH2 = myContentDivs[1].getElementsByTagName('h2');
myH2
myH2[0].innerHTML = 'YO NINJAS';
document.getElementById('page-title');

var myTitle = document.getElementById('page-title');
myTitle
myTitle.textContent;
myTitle.textContent = 'Hey! Watcha doing there!'