// Example of a complex array with various false values
const complexArray = [
    0,
    1,
    false,
    true,
    null,
    undefined,
    NaN,
    '',
    'Hello',
    [],
    [0, false, ''],
    {},
    { key: 'value' },
    -1,
    42,
    'false',
    '0'
];
// ! it's just remove false can't remove falsy value
//     const arr = complexArray.filter(value => value !== false)
// console.log(arr)
    // const arr = complexArray.filter(Boolean)
    // console.log('Original Array:', arr);