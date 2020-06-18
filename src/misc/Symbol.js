// var it = makeIterator(['a', 'b'],'dsf');

// console.log(it.next()); // { value: "a", done: false }
// console.log(it.next()); // { value: "a", done: false }
// console.log(it.next()); // { value: "a", done: false }
// it.next() // { value: "b", done: false }
// it.next() // { value: undefined, done: true }

// function makeIterator(array) {
//   var nextIndex = 0;
//   console.log(arguments)
//   return {
//     next: function() {
//       console.log(nextIndex);
//       return nextIndex < array.length ?
//         {value: array[nextIndex++], done: false} :
//         {value: undefined, done: true};
//     }
//   };
// }

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

console.log(iter.next()) // { value: 'a', done: false }
console.log(iter.next()) // { value: 'a', done: false }
console.log(iter.next()) // { value: 'a', done: false }
console.log(iter.next()) // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }