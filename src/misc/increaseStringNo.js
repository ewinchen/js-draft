const s = '00001';

let res = s + 1;
console.log(res);

function increase(origin) {
  let v = parseInt(origin) + 1;
  let l = v.toString().length;
  let res;
  switch (l) {
    case 1:
      res = '0000' + v;
      break;
    case 2:
      res = '000' + v;
      break;
    case 3:
      res = '00' + v;
      break;
    case 4:
      res = '0' + v;
      break;
    case 5:
      res = v;
      break;

    default:
      break;
  }
  return res;
}


console.log(increase('00001'));
console.log(increase('00011'));
console.log(increase('01111'));
console.log(increase('11111'));
console.log(increase('111111'));

// console.log(res);

// console.log(parseInt(s));

// console.log(parseInt(s) + 1);