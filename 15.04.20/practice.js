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







