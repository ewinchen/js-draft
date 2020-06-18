const arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 7, 8, 8, 8, 8, 9, 9];
const arrDistinct = Array.from(new Set(arr))
console.log(arr);
console.log(arrDistinct);

const [a, b, c, ...d] = arr

console.log(a);
console.log(d)


const _arr = [{ a: 1, b: 2 }, { a: 1, b: 2 }, { a: 2, b: '' }];

const _set = new Set(_arr.map(item => JSON.stringify(item)))
console.log(_set)
const _arrDistinct = Array.from(_set)
const __arrDistinct = _arrDistinct.map(item => JSON.parse(item))
console.log(__arrDistinct)

let orderLotsAny = [
  {
    lotNo: { value: 1 },
    destination: { value: 'TDC' },
    shipMode: { value: 'By Land' },
    deliveryDate: { value: '2018-12-31' }
  },
  {
    lotNo: { value: 1 },
    destination: { value: 'TDC' },
    shipMode: { value: 'By Land' },
    deliveryDate: { value: '2018-12-31' }
  },
  {
    lotNo: { value: 2 },
    destination: { value: '' },
    shipMode: { value: '' },
    deliveryDate: { value: '' }
  },
  {
    lotNo: { value: 2 },
    destination: { value: '' },
    shipMode: { value: '' },
    deliveryDate: { value: '' }
  },
  {
    lotNo: { value: 2 },
    destination: { value: '' },
    shipMode: { value: '' },
    deliveryDate: { value: '' }
  },
  {
    lotNo: { value: 3 },
    destination: { value: 'GEG' },
    shipMode: { value: 'By Sea' },
    deliveryDate: { value: '2019-01-01' }
  },
  {
    lotNo: { value: 3 },
    destination: { value: 'GEG' },
    shipMode: { value: 'By Sea' },
    deliveryDate: { value: '2019-01-01' }
  },
  {
    lotNo: { value: 3 },
    destination: { value: 'GEG' },
    shipMode: { value: 'By Sea' },
    deliveryDate: { value: '2019-01-01' }
  },
  {
    lotNo: { value: 1 },
    destination: { value: 'TDC' },
    shipMode: { value: 'By Land' },
    deliveryDate: { value: '2018-12-31' }
  },
  {
    lotNo: { value: 1 },
    destination: { value: 'TDC' },
    shipMode: { value: 'By Land' },
    deliveryDate: { value: '2018-12-31' }
  },

]

orderLotsAny = [];

let lotFieldsArray = orderLotsAny.map(orderLot => {
  return {
    lotNo: orderLot.lotNo.value,
    deliveryDate: orderLot.deliveryDate.value,
    destination: orderLot.destination.value,
    shipMode: orderLot.shipMode.value
  };
});
let lotSet = new Set(lotFieldsArray.map(item => JSON.stringify(item)));

let lotArray = Array.from(lotSet).map(item => JSON.parse(item));
console.log(lotArray);