//1.  ________________remove falsy value from the array_____________________________________
const miscellaneous = [
  "🍎",
  false,
  "🍊",
  NaN,
  0,
  undefined,
  "🌶️",
  null,
  "",
  "🥭",
];
const fruits = miscellaneous.filter(Boolean);
console.log(fruits);
// explanation
// Boolean is a callback i mean when i filter it than its check first one is Boolean or not
// then its go in second same condition
// javaScript have two value 1.true 2.False

// 2.____________________________________Convert any value in Boolean__________________
const name = "Md Abdur Razzak";
const number = 10;
const nothing = "";
console.log(!!name);
// First of all name is a string.when i need convert in boolean than use !! it.
console.log(number);
console.log(!number);
console.log(!!number);
console.log(!!0);
console.log(!!undefined);
// when i just console number than its show just 10.
// when i use just one ! then its show me false.its means its not a number thats why.
// and last when i use !! in number than its show true.
// 0 is a falsy value thats why show it false
// Same undefined is a falsy value
// Some falsy value list
// 1) false
// 2) 0, -0, 0n
// 3) null
// 4) undefined
// 5) NaN
// 6) "", '', `` // empty string
console.log(!!nothing);
// if i use !! than its convert in Boolean

// Sort form is
console.log(Boolean("MD Abdur Razzak"));

// 3. ______________________________resize any array_____________________________________

const animals = ["🐕", "🐒", "🦊", "🐅"];
animals.length = 3;
console.log(animals);

// 4.____________________________________How to flattern a multi-dimensional array__________________
const emoji = ["🥰", ["😄", "😃"], "😉", ["🥲", "😑"]];
console.log(emoji.flat());
// But there have an problem if its have on under 3/4 array than its not work
// This time we need to use
const Emoji2 = ["🥰", ["😄", "😃", ["🥲", "😑", ["😄", "😃"]]], "😉"];
console.log(Emoji2.flat(Infinity));

// 5.____________________________________Replace all occurrence of a string__________________
const replaceFrameWork =
  "React is a JS framework & this framework is the most popular front-end framework right now";
const react = replaceFrameWork.replace(/framework/g, "library");
console.log(react);

// 6.________________________________Long value with variable name smartly__________________
const library1 = "jQuery";
const library2 = "React";
// Not recommended
console.log(`library1 - ${library1}`);
console.log(`library2 - ${library2}`);

// This is the sort cut method and best (recommendeddddddddddddddddddddddddddddddddddddd)
console.log({ library1 });
console.log({ library2 });


// 7.________________________________Know performance of a task__________________
const startTime = performance.now();

for (let i = 0; i <= 50; i++) {
  console.log(i);
}

const endTime = performance.now()
const performanceTime = endTime - startTime
console.log(`loop look ${performanceTime} milliseconds to finish`);