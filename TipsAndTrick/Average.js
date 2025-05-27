// Input Samples	Output Samples
// 5.0
// 7.1

// MEDIA = 6.43182

// 0.0
// 7.1

// MEDIA = 4.84091

// 10.0
// 10.0

// MEDIA = 10.00000

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = "5.0\n7.1";
var lines = input.split("\n");
const number = parseFloat(lines[0])
const numberTwo = parseFloat(lines[1])
const total = (number * 3.5 + numberTwo* 7.5)/(3.5+7.5)
const result = +total.toFixed(5)
console.log(result)