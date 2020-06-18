const util = require('util')
let arr = [1, 2, 3, 4];
arr = ''
arr = {
  a: "1",
  b: "2"
}


console.log('origin', util.inspect(arr, true, null, true))
console.log('stringify', util.inspect(JSON.stringify(arr), true, null, true))
console.log('stringify x2', util.inspect(JSON.stringify(JSON.stringify(arr)), true, null, true))
console.log('parse x1 stringif x2', util.inspect(JSON.parse(JSON.stringify(JSON.stringify(arr))), true, null, true))
console.log('parse x2 stringif x2', util.inspect(JSON.parse(JSON.parse(JSON.stringify(JSON.stringify(arr)))), true, null, true))
console.log('stringify x3', util.inspect(JSON.stringify(JSON.stringify(JSON.stringify(arr))), true, null, true))
console.log('parse', util.inspect(JSON.parse(JSON.stringify(arr)), true, null, true))

console.log(typeof arr);
console.log(typeof util.inspect(JSON.stringify(arr), true, null, true))
// JSON.parse(arr)
console.log(arr.toString())
console.log({}.toString());
console.log(''.length);

let oStr = new String(123)
console.log(util.inspect(oStr, true, null, true));
