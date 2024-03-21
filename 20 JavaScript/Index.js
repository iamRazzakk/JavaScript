//Write a function to reverse a given string in JavaScript.
const myFunction = (string) => {
  return string.split("").reverse().join("");
};
const stringFunction = "Md Abdur Razzak";
const reverseString = myFunction(stringFunction);
console.log(reverseString);

// Find The largest number of array
const largestNumber = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(largestNumber([1, 2, 3, 4, 9, 10, 15, 1, 0]));

// Another one
const largeNumber = (arr) => {
  return Math.max(...arr);
};
console.log(largeNumber([1, 2, 3, 4, 9, 10, 15, 1, 0]));
