// const arr = ['12', '34', '56'];
const arr = [];
console.log(arr)
console.log(JSON.stringify(arr))

const arrStr = JSON.stringify(arr);
const arrRes = arrStr.substring(1, arrStr.length-1)
console.log(arrRes)


