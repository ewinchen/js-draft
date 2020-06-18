const fs = require('fs');
const data = require('./data.json');

let str = '';
data.sort((a, b) => {
  let valueA = a.value.toUpperCase();
  let valueB = b.value.toUpperCase();
  if (valueA < valueB) {
    return -1;
  }
  if (valueA > valueB) {
    return 1;
  }
  return 0;
})
data.forEach(item => {
  str = str.concat(`<option value="${item.value}">${item.value}</option>\r\n`)
});
console.log(str);
fs.writeFileSync('./result.txt', str);