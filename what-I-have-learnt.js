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

















