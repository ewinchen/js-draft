const fs = require('fs')
const co = require('co')

const readFile = fileName => new Promise((resolve, reject) => {
  fs.readFile(fileName, (err, data) => {
    if (err) reject(err);
    resolve(data);
  })
})

// readFile('./sa.js').then(data => console.log(data.toString())).catch(err => console.log(err));


// const testGenerator = function* () {
//   var a = yield readFile('./a.js');
//   var b = yield readFile('./b.js');
//   console.log(a.toString());
//   console.log(b.toString());
// }

// co(testGenerator);

const testAsync = async function () {
  var a = await readFile('./a.js');
  var b = await readFile('./b.js');
  console.log(a.toString());
  console.log(b.toString());
  return 'xxxddd';
}

testAsync().then(res => console.log(res));
console.log('-----------------')

function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 5000);