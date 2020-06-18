const util = require('util')
 
let a ={
  b: undefined,
  c: {
    b: undefined,
    x: 123
  }
}
console.log(a);
console.log(util.inspect(a, false, null, true))

console.log(JSON.stringify(a))

console.log(Date().toString());

let a = {
  header: {
    fSRNo: 'FSRK18A0100065',
    undefined: undefined
  }

}

console.log(a);
console.log(Object.prototype.toString.call(a));
console.log(JSON.stringify(a));
console.log(JSON.stringify(a, (k, v) => v === undefined ? '' : v))