const fs = require('fs');
const path = require('path');
const { cwd } = require('process');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const gen = function* () {
  console.log('123')
  const f1 = yield readFile(path.join(__dirname, './h.js'));
  const f2 = yield readFile(path.join(__dirname, './i.js'));
  console.log(f1.toString());
  console.log(f2.toString());
};

let run = gen();
// console.log(run.next());
run.next().value.then(data => {
  console.log(data)
  run.next().value.then(data => {
    console.log(data)
  })
})
