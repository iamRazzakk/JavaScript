// Time Complexity
// ----------------
// * O(1) complexity: constant time complexity, no matter how large the input is
// * O(n) complexity: linear time complexity, scales linearly with the input size
// * O(n^2) complexity: quadratic time complexity, scales exponentially with the input size

// Example 1: O(1) complexity
const OOneComplexity = (n) => {
  // performs the same operation regardless of the input size
  return (n * (n + 5)) / 2;
};
console.log("O(1)");
console.time("O(1) Time");
OOneComplexity(1000);
console.timeEnd("O(1) Time");
const res = [1, 2, 3, 4, 5];
// Example 2: O(n) complexity
const ONComplexity = (n) => {
  // performs a linear number of operations based on the input size
  for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
  }
};
console.log("O(n)");
console.time("O(n) Time");
ONComplexity(res);
console.timeEnd("O(n) Time");

// Example 3: O(n^2) complexity
const ON2Complexity = (n) => {
  // performs a quadratic number of operations based on the input size
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      console.log(n[i], n[j]);
    }
  }
};
console.log("O(n^2)");
console.time("O(n^2) Time");
ON2Complexity(res);
console.timeEnd("O(n^2) Time");
