// remove false value from arrar
const arr = [0, 1, false, 2, '', 3, null, 'hello', undefined, true];

const truthyValue = arr.filter(Boolean)
console.log(truthyValue)