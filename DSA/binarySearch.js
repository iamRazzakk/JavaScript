const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 50, 65, 68, 69];

const binarySearch = (arr, first, last, target) => {
  for (let index = 0; index < arr.length; index++) {
    const mid = Math.floor((first + last) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) last = mid - 1;
    else first = mid + 1;
  }
  return -1;
};

console.log(
  `Binary index number ${binarySearch(arr, 0, arr.length - 1, 10)} index`
);
