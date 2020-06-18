const fs = require('fs')

const { EventEmitter } = require('events')

// const s = new Date().getSeconds();

// setTimeout(function () {
//   // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
//   console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
// }, 2000);

// while (true) {
//   if (new Date().getSeconds() - s >= 2) {
//     console.log("Good, looped for 2 seconds");
//     break;
//   }
// }
const customEvent = new EventEmitter();


function run(callback) {
  customEvent.on('go', callback);
  console.log('1 is called...')
  console.log('2 is called...')
  console.log('3 is called...')
  console.log('4 is called...')
  customEvent.emit('go', null, 'Hello, I am here');
  console.log('5 is called...')
}


run(function (err, res) {
  console.log(res)
})

// fs.readFile('./f.js', (err, data) => {
//   console.log(data.toString());
// })




