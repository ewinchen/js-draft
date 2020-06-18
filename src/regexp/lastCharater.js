/* var myRe = /[a-zA-Z]/g;
var str = 'BPC40P134095-122';
var myArray;
var lastCharater;
while ((myArray = myRe.exec(str)) !== null) {
  var msg = 'Found ' + myArray[0] + '. ';
  msg += 'Next match starts at ' + myRe.lastIndex;
  console.log(msg);
  lastCharater = myArray[0];
} */

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

function getLastEngLetter(string) {
  let reg = /[a-zA-Z]/g;
  let result;
  let lastEngLetter;
  while ((result = reg.exec(string)) !== null) {
    lastEngLetter = result[0];
  }
  return lastEngLetter;
}

console.log(getLastEngLetter('BPC40P134095-1A2AAAzxvrhdasafd2'))