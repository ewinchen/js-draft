let g = 0;

function createPromise(status) {
  return new Promise((resolve, reject) => {
    if (status === true) {
      g += 1;
      resolve(g += 1);
    }
    if (status === false) reject('error');
  })
}

function createPromiseInnerCallPromise() {
  return new Promise((resolve, reject) => {
    createPromise(true).then(res => console.log('inner', res))
  })
}

createPromiseInnerCallPromise()
createPromise(true)
createPromiseInnerCallPromise()

console.log(g)