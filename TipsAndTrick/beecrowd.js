// Input Samples	Output Samples
// 5.0
// 6.0
// 7.0

// MEDIA = 6.3

// ! Problem- 1: take avarage number
// var input = "5.0\n6.0\n7.0";
// var lines = input.split("\n");
// const number = parseFloat(lines[0])
// const numberTwo = parseFloat(lines[1])
// const numberThree = parseFloat(lines[2])


// const result = (number * 2 + numberTwo * 3 + numberThree * 5 ) / (2 + 3 + 5)
// console.log(result.toFixed(1))



// ! Read four integer values named A, B, C and D. Calculate and print the difference of product A and B by the product of C and D (A * B - C * D).


// var input = "5.0\n6.0\n7.0\n8.0";
// var lines = input.split("\n");
// const number = parseFloat(lines[0])
// const numberTwo = parseFloat(lines[1])
// const numberThree = parseFloat(lines[2])
// const numberFour = parseFloat(lines[3])


// const result = (number * numberTwo)-(numberThree * numberFour)
// console.log(`DIFERENCA = ${result}`)



// ! Problem 3

//TODO: Write a program that reads an employee's number, his/her worked hours number in a month and the amount he received per hour. Print the employee's number and salary that he/she will receive at end of the month, with two decimal places.

//Todo: Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.
//Todo: Don’t forget the space before and after the equal signal and after the U$.

// var input = "5.0\n100\n5.50";
// var lines = input.split("\n");
// const result = parseFloat(lines[1]) * parseFloat(lines[2])
// console.log(`NUMBER = ${lines[0]}`)
// console.log(`SALARY = U$ ${result.toFixed(2)}`)





//TODO: Make a program that reads a seller's name, his/her fixed salary and the sale's total made by himself/herself in the month (in money). Considering that this seller receives 15% over all products sold, write the final salary (total) of this seller at the end of the month , with two decimal places.
// - Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.

// - Don’t forget the blank spaces.

// Input
// The input file contains a text (employee's first name), and two double precision values, that are the seller's salary and the total value sold by him/her.

var input = "0.00\n700.00";
var lines = input.split("\n");
const totalCommition = parseFloat(lines[0]) * (15/100)
const finalResult = parseFloat(lines[1]) + totalCommition
const result = Number(finalResult.toFixed(2))
// console.log(result)
console.log(`TOTAL = R$ ${result}`)