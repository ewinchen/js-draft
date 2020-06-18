const util = require('util')
let add;
function outer() {
  let a = 1;
  function inner() {
    console.log(a);
  }
  add = function () { a += 1; console.log(a) }
  return inner;
}

// // add();
// console.log(1111111111);
outer();


// console.log(2222222222);

// add()


// console.log(333333333);

// outer()();



add()
add()
add()
add()
add()
add()
add()
console.log('-----------------------------------------------------');



let o = outer();

o();

// console.log(555555555);

add();

// console.log(66666666);

// o();

// const outer2 = {
//   b: function() {
//     console.log(this)
//   },
//   a:{
//     c: function() {
//       console.log(this)
//     }
//   }
// }


// console.log(777777777);

// outer2.a.c();


add()
add()
add()
add()
add()
add()
o();


console.log('------------------------------------------')
outer()();