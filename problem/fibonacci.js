const fib = (n) => {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  console.log(arr);
};

fib(10);

const anotherFib = (n) => {
  const arr = [0, 1];
  let i = 2;
  while (i <= n) {
    arr.push(arr[i - 1] + arr[i - 2]);
    i ++
  }
  console.log(arr);
};
anotherFib(10);


