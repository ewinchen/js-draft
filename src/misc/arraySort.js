let arr = [
  {
    name: 'Bovard',
    age: 15
  },
  {
    name: 'Alen',
    age: 12
  },
  {
    name: 'Cathe',
    age: 30
  },
  {
    name: 'Cathe',
    age: 11
  },
  {
    name: 'Cathe',
    age: 20
  },
  {
    name: 'Danel',
    age: 23
  },
  {
    name: 'Zita',
    age: 23
  },
  {
    name: 'Fiona',
    age: 23
  },
  {
    name: 'Eva',
    age: 28
  },
]

console.log(arr.sort((a, b) => {
  if (a.name < b.name || a.age < b.age) {
    return -1
  }
  if (a.name > b.name || a.age > b.age) {
    return 1
  }

}));

