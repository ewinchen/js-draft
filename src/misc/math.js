// console.log(''/2)

let arr = [1,2,3];

let arr2 = arr.slice();

arr2[0] = 3;

console.log(arr2);
console.log(arr);

let arr3 = new Array(...arr)

arr3[0] = 322

console.log(arr3);