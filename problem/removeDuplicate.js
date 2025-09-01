// remove duplicate value
// const removeDuplicateValue = (data) => {
//   let seen = {};
//   let duplicate = [];
//   for (let i = 0; i < data.length; i++) {
//     let val = data[i];
//     if (!seen[val]) {
//       seen[val] = true;
//       duplicate.push(val);
//     }
//   }
//   return duplicate
// };

const removeDuplicateValue = (input) => {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    if (i === 0 || input[i] !== input[i - 1]) {
      result.push(input[i]);
    }
  }
  return result;
};

const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicateValue(input));
