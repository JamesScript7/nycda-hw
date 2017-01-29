//1.

//VARIABLES: Are containers that hold value.
//How to declare them:
var x;
var y, z;
//Assigning value:
x = 10;

//You can reassign the same variable:
x = 5;


//DEBUGGING(alerts, comments, the console):
/*
alert(); gives you a popup box with whatever
you put into the ().
*/

alert("Is everything ok?");

/*
single-line and multi-line comments are notes
that you can use as a helpful reference as I've
been using thus far.
*/

//single-line
/*
multi-line
*/


/*
console.log(); lets you see whatever that's
plugged in the () and outputs it into the
console window.
*/

console.log("Lets check out the value of x: " + x);


// DIFFERENT DATA TYPES:
//Primitive value/data types: string, number, boolean, null, undefined, symbol

//Primary Data Types:
//Strings, Numbers, Boolean.
var string = "strings1234";
var number = 1234;
var bool = true;
// if it has a decimal point then is it a float
var floaty = 123.4;

//Composite Data Types:
var array = ["arrays", 2, true, false];
var object = { "key": "value"};

//Special Data Types:
var specialData = [NaN, undefined, null];
// NaN = result of an operation that cannot produce a normal result. (It is a property of the global object)
//	It is a returned value when Math functions fail
//	Also returned when a function trying to parse a number fails
//	Use: isNaN() to determine wether a value is NaN.

// undefined = property of a global object. (It is a variable in global scope)
//	a variable that has not been assigned a value becomes type of undefined
//	a method or statement will return undefined if var that is being evaluated isn't assigned a value
//	a function will return undefined if a value was not returned

// null = a primitive value
//	represents intentional absence of any object value
//	use === to avoid type-conversion

// Symbol!? (new in ECMAScript 6)


//ARRAYS:
//Contain values in [] with index keys
//Fun fact: JS sees them as an object
var arr = [1,2,3,4,5];

arr[0];
//value will be "1"

arr[0] = "one";
//to reassign values. you will get: arr = ["one", 2, 3, 4, 5];


//TESTING:
//

// .valueOf() returns primitive value
// .typeof() return value is a string of object or primitive
// inspect the browser and use dev tools.


//LOGIC:
/* &&: both values must be true in order for
expression to evaluate to true.
You can put a false first to "short circuit"
evaluations.
*/
if (false && true) {
	console.log(false);
}

/* ||: only one value needs to be true for
an expression to evaluate to true.
You can put a true statement first to
"short circuit" evaluations.
*/
if (true || false) {
	console.log(true);
}

/*
Expressions that can be converted to false:
null;
NaN;
0;
'';
undefined
*/


//FUNCTIONS:

//block of code that is executed when invoked
//function declarations are hoisted up to the top!
//anonymous functions are not hoisted to the top!

//you can self-invoke a function:
//you can't self-invoke a function declaration...
//(*enterfunction*)();
//(function () {
//	var x = "hello!";
//})();

//make an anonymous function:
// function() {}





//2. Write 3 different functions and return on console.

function addFive(x) {
	console.log(x + 5);
}
addFive(5);


var divideTen = function(y) {
	console.log(Math.round(y / 10));
};

divideTen(32);


(function(a,b) {
	return a - b;
})(10,5);




//3. Four problems:
// 1.
var problemOne = {
	"x": 5,
	"y": 20,
	"addNum": function(a,b) {
		console.log(a + b);
	},
	"str1": "James",
	"str2": "Kim",
	"addStr": function(a,b) {
		console.log(a + " " + b);
	}
};

// 2.
var multiArr = [["tigers", "lions", "panthers"],["wolves", "foxes", "hyenas"],["cats", "dogs", "fishes", "hamsters"]];
//for tiger:
console.log(multiArr[0][0]);
//for hamsters:
console.log(multiArr[2][3]);

//3.
var problemThree = "variablevariable";

if (problemThree.length < 10) {
	alert("The variable is less than ten!");
} else {
	console.log("Your variable, " + problemThree + " was greater than 10!");
}

//5.
var problemFive1 = "string";
var problemFive2 = "stwing";

if (problemFive1 === problemFive2) {
	console.log("They match!");
} else {
	console.log("They don't match");
}

//6.
nameCheck("James");

function nameCheck(name) {
	console.log("You've entered: " + name);
}

function mysteryCheck() {
	console.log("You've entered: " + name);
}

mysteryCheck();




























