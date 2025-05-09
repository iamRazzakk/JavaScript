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

console.log(max);
