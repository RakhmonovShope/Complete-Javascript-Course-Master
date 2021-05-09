'use strict';
// const Jonas = {
//   name: 'Jonas',
//   familyName: 'Schmedmant',
//   age: 23,
//   friends: ['Rustam', 'Bekzod', 'Azim', 'Shohzod', 'Akbar'],
// };

// const ShoPe = Object.assign({}, Jonas);

// ShoPe.age = 26;

// ShoPe.friends[3] = 'Botir';
// console.log(ShoPe, Jonas);

// const arr = [1, 2, 3, 4, 5];

// let [a, b] = arr;

// [b, a] = [a, b];
// console.log(a, b);

let a = 111;
let b = 222;
const obj = {
  a: 1,
  b: 2,
  c: 4,
};

// let { a, b } = obj;
// console.log(a, b);

({ b, a } = obj);

console.log(a, b);
