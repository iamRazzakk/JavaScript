// Define a single dimensional array
const singleArray = [1, 2, 3, [4,5],[6,7,8,9,10,11]];
const array = singleArray.flat()
console.log(array)
// Define a multi dimensional array
const multiArray = [
    1,2,3,
    [4, 5],
    [6, 7, [8, 9]]
];

// when array show like that [6, 7, [8, 9]] i mean nested array if you use Infinity it's return an flat array
const arr = multiArray.flat(Infinity)
console.log(arr)