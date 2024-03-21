//Write a function to reverse a given string in JavaScript.
const myFunction = (string) => {
  console.log(string);
  return string.split("").reverse().join("");
};
const myString = "My Name Is Md Abdur Razzak";
const reverseString = myFunction(myString);
console.log(reverseString);