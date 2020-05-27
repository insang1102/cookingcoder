// 1. Use strict
// added in ES 5
// use this for Vanila Javascript
"use strict";

// 2. Variable (r,w) read, write

// block scope {}, global scope,,
// var vs. let
// var has 2 downsizes
// first is that it can be executed even if that is in a specific scope like 'block scope'
// second is 'var hoisting' which stands for moving declaration from bottom to top,,
// The problematic point is to be able to be executed though they are in correct order like upside down
// Thus we've got to only remember 'let', not 'var'!!!

// IE is too outdated to utilise when it comes to developing!!
// If you must handle IE simultaeneously, grab BABEL whilst developing and lower spec,,

// 3. constant (r) read only

// use const whenever possible
// only use 'let' if variable needs to be changed
// lock the variable so that anyone can't control it

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS

// favor immutable data type always for a few reasons :
//  -security --> to prohibit hackers assault
//  -thread safety --> to prevent threads from being changed altogether which is dangerous
//  -human mistakes --> WE ARE HUMAN BEING

// 4. Variable types
// primitive, single item: number, string, boolean, undefined, NaN, null, symbols --> which can't be divided anymore --> small data
// object, box container --> possible to include multiple items --> big data
// function, first-class function --> controllable values, parameter, return type,,

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number >> special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
// These are vital in workplace a lot because they cause plenty of errors whilst developing if you skip and ignore in advance

// bigInt ( fairly new, do not use it yet)
const bigInt = 8371289758943835032490238901582375820n; // 'n' makes it recognise as 'bigInt'
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); // Let's be careful not to omit parentheses!!

// string

const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean

// false: 0, null, undefined, NaN,
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // .description is mandatory

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); so I made this as 'comment' // error --> type is set during runtime in javascript,, that's why TS is popped up
