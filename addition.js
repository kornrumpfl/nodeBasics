const arr = process.argv
let number1=+process.argv[2];
if(isNaN(number1)){
	console.log("Input 1 is not a number")
	number1=0
} else {
	
}
let number2=+process.argv[3];
if(isNaN(number2)){
	console.log("Input 2 is not a number")
	number2=0
}else{
	
}
result=number1+number2
console.log("The result is " + result)