const util = require('util')
let a = Symbol('1');
let b = Symbol('1');

console.log(a);
console.log(b);
console.log(a == b)
console.log(a.toString == b.toString)
console.log(util.inspect(a, true, null ,true))

let c = Symbol()

console.log(c)

const o = {
  a: 1,
  [Symbol()]: 2,
  [12]: 3,
  [true]: 4,
  [`asdf`]: 9999
}


console.log(JSON.stringify(o))
console.log(util.inspect(o, true, null, true))

console.log(o[12])
console.log(o['12'])
console.log(o[1])
console.log(o.true)
console.log(o.asdf)

let x;

// x[1] = 2;

console.log(x)

const arr = [1,2, 3]
// let a = {
//   ...o
// }

const arr1 = [...arr, 4]

console.log(arr1)