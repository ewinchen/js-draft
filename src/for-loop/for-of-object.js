const obj = {
  a: 1,
  b: '2',
  c: [3, 4],
  d: true
}

for (const o of Object.keys(obj)) {
  console.log(o);
  console.log(obj[o])
}