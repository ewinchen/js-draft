const arr = [0, 1, 2, 3, 4]

// arr.forEach((value, index, array) => {
//   array.splice(index, 1)
// })

const arr2 = [2, 3, 5]


const reduce = (arr) => {
  arr.forEach((val, index) => {
    if (arr2.indexOf(val) === -1) {
      arr.splice(index, 1);
      reduce(arr)
    }
  })
}

// reduce(arr);

function reduce2(source, target) {
  source.forEach((val, idx) => {
    if (target.indexOf(val) === -1) {
      source.splice(idx, 1);
      reduce2(source, target);
    }
  });
}

reduce2(arr, arr2)


console.log(arr)