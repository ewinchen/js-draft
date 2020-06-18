let a = {
  x: 1,
  y: 2,
  z: 'sdf'
}

let b = {...a}

console.log(b)

console.log(a.x==b.x)

let arr = [1123123123, '2123123123']

let [a1, b1, c1] = arr;

console.log(a1)