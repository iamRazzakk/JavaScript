const isAnagram = (str1, str2) => {
  if (!str1.length === str2.length) return;
  let counter = {};
  for (const letter of str1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }
  for (const items of str2) {
    if (!counter[items]) return false; 
    counter[items]--;
  }
  return true
};
const res = isAnagram("HELLO", "OLLEH");
console.log(res);
