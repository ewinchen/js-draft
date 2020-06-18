const a = [1, 2, 2, 3, 4, 5];

const b = [1, 3, 5, 7, 9];

a.forEach((ia, idx) => {
  console.log(idx);
  if(b.indexOf(ia) === -1) {
    a.splice(idx, 1)
    console.log('delete', idx)
  }

})

console.log(a);

