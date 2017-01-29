


var userInput = prompt("Pick any number and I will find the triangle number for it!");
var sumNum = 0;
var num = parseInt(userInput);

if (isNaN(userInput)) {
	console.log(userInput + " wasn't a number. Lets try that again.");
	alert(userInput + " wasn't a number. Lets try that again.");
} else {
	while ( num > 0 ) {
	sumNum += num;
	num--;
}
	alert("The Triangle Number for " + userInput + " is: " + sumNum);
	console.log("The Triangle Number for " + userInput + " is: " + sumNum);
}