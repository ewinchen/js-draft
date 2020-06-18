// const pRes = new Promise((resolve, reject) => {
//   console.log('pRes is called')
//   resolve(new Error('error'))
//   throw new Error('before resolve');
// })
// const pRej = new Promise((resolve, reject) => {
//   reject(new Error('reject error'))
// })

// pRes.catch(err => console.log(err));

// pRej.catch(res => console.log(res))

function fpres(status) {
  return new Promise((resolve, reject) => {
    if (status) {
      resolve('success')
    } else {
      reject(new Error('custom error'))
    }
  })
}

// const cfpres = () => new Promise((resolve, reject) => {
//   console.log('pRes is called')
//   resolve(new Error('error'))
//   throw new Error('before resolve');
// })

// fpres().then(res => console.log(res))
// fpres(false).then(res => {
//   throw new Error('ref failed')
// })
// .catch(err => {
//    throw new Error('catch and throw error')
// })
// .then(res => console.log(res))
// .catch(err => console.log(err))


// ---------------------------
const getPromise = () => fpres(true).then(res => {
  console.log('false, in here?');
  throw new Error('123')
})
// .catch(err => {
//   return err;
  //  return Promise.reject(err)
// })
.then(res => console.log(111))
// .catch(err => console.log(err))


// ---------------------------------
// Promise.all([fpres(true), fpres(true)]).then(res => console.log(res))

getPromise().then(res => console.log(res)).catch(err => console.log(err));