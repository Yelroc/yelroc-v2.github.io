/*
DATATYPES
*/

/**The two types of data are simple/primitive and complex
*
* Differences between simple and complex data types
*
* Simple data types have a fixed size in memory and are copied by value.
*
* Complex data types are indefinite in memory and are copied by reference.
*/

// Copy by Value - doesn't modify original data

var a = 5;
var b = a;
b = 7;
console.log(a);  // 5

// Copy by Reference = modifies original data

var c = [1, 2, 3, 4, 5];
var d = c;
d.push(6);
console.log(c);  // [1, 2, 3, 4, 5, 6]

// String Data Type - string of characters paired with ""

console.log('Datatype Study Guide'); // "Dataype Study Guide"

// Number Data Type - numerical value

console.log(25); // 25

// Boolean Data Type - true or false value

console.log(true); // true

// Null Data Type - represents an intentional abscense

var empty = null;
console.log(empty); // null

// Undefinded Data Type - when a something is not defined

var undie;
console.log(undie); // undefined

// NaN Data Type - property value representing Not a Number

var fruit = 'apple';
if (isNaN(fruit)) {
    console.log('This aint a number');  // true
}                                           

// Infinity - initial value of Number.POSITIVE_INFINITY.

console.log(Infinity); // Infinity
console.log(Infinity * 1); // Infinity

// -Infinity - initial value of Number.NEGATIVE_INFINITY.

var neg = (-1 / 0);
console.log(neg); // -Infinty

// Arrays - zero-indexed ordered list

var teamNumbers = [4, 11, 55, 3, 23, 30];
console.log(teamNumbers); // [4, 11, 55, 3, 23, 30]

// Objects - collection of data stored in key-value pairs

var teamPositions = {
    
    pointGuard: 'lebron',
    shootingGuard: 'michael',
    smallForward: 'durant',
    powerForward: 'dirk',
    center: 'shaquille',
    sixthMan: 'larry'
};

console.log(teamPositions); //object Object { pointGuard: lebron.... }

// Functions - a set code that we can call and run at any point

function nameOfFunction(paramter){ 
    paramter * paramter; //body of function  
}

nameOfFunction(5); // prints the result of the argument ran thru the body

// OR!!

var squared = (parameter) => {return parameter * parameter};
console.log(squared(5)); // 25


// Functions expressions are functions that are set to variables

var area = function(length, width) {
    return length * width;
};

console.log(area(3, 4));  // 12