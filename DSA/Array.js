// let arr = []
// // let arr = new Array(5)
// arr.push(100)
// arr.push(90)
// console.log(arr[0]);

// arr.pop()

// arr[8] = 7
// console.log(arr);

//  what is array ?
// Ans: Array is linear DS which stores multiple value in a continuous manner

// linear means ------- one by one

let arr = [10, 20, 30, 40, 80, 50, 60];
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum);

let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

// console.log(max);

// TODO: Find the second largest number in an array
const anArray = [10, 43, 32, 56, 23];
// const secondLargestNumber = (arr) => {
//   const uniqueArray = Array.from(new Set(arr)); //*O(n)
//   // console.log("unique array", uniqueArray);
//   uniqueArray.sort((firstNumber, secondNumber) => {
//     //*O(nlogn)
//     return secondNumber - firstNumber;
//   });
//   if (uniqueArray.length >= 2) {
//     return uniqueArray[1];
//   } else {
//     return -1;
//   }
// };
// console.log(secondLargestNumber(anArray));

const secondLargestOptimized = (arr) => {
  if (arr.length < 2) {
    return console.error("It's not more than 2 word");
  }
  let firstNumber = Number.NEGATIVE_INFINITY;
  let secNumber = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    console.log("number", arr[i]);
    if (arr[i] > firstNumber) {
      console.log("First number", arr[i]);
      secNumber = firstNumber;
      console.log("sec number", secNumber);
      firstNumber = arr[i];
    } else if (arr[i] != firstNumber && arr[i] > secNumber) {
      secNumber = firstNumber;
    }
  }
  return secNumber;
};
console.log(secondLargestOptimized(anArray));
