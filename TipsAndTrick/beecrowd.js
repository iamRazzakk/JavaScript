// Input Samples	Output Samples
// 5.0
// 6.0
// 7.0

// MEDIA = 6.3

// ! Problem- 1: take avarage number
var input = "5.0\n6.0\n7.0";
var lines = input.split("\n");
const number = parseFloat(lines[0])
const numberTwo = parseFloat(lines[1])
const numberThree = parseFloat(lines[2])


const result = (number * 2 + numberTwo * 3 + numberThree * 5 ) / (2 + 3 + 5)
console.log(result.toFixed(1))



// ! Read four integer values named A, B, C and D. Calculate and print the difference of product A and B by the product of C and D (A * B - C * D).


var input = "5.0\n6.0\n7.0\n8.0";
var lines = input.split("\n");
const number = parseFloat(lines[0])
const numberTwo = parseFloat(lines[1])
const numberThree = parseFloat(lines[2])
const numberFour = parseFloat(lines[3])


const result = (number * numberTwo)-(numberThree * numberFour)
console.log(`DIFERENCA = ${result}`)