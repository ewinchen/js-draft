function* hw() {
  yield 'hello';
  yield 'world';
  yield 'extra';

  console.log('xxx' + (yield));
  return 'ending';
}

let p = hw();
console.log(p.next());
console.log(p.next());
console.log(p.next());
console.log(p.next());
// console.log(p.next());

// function* dataConsumer() {
//   console.log('Started');
//   console.log(`1. ${yield}`);
//   console.log(`2. ${yield}`);
//   return 'result';
// }

// let genObj = dataConsumer();
// genObj.next();
// // Started
// genObj.next('a')
// // 1. a
// genObj.next('b')
// // 2. b