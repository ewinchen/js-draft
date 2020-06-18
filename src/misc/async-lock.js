const AsyncLock = require('async-lock')
const lock = new AsyncLock();

const runPromise = () => {

  let array = [5000, 4000, 3000, 2000, 1000]

  let promiseArray = []

  array.forEach((val, index) => {
    promiseArray.push(new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${index}, ${val}`)
        resolve(index)
      }, val);
    }))
  })


  return Promise.all(promiseArray)

}

const runLockPromise = () => {

  let array = [5000, 4000, 3000, 2000, 1000]

  let promiseArray = []

  array.forEach((val, index) => {
    promiseArray.push(lock.acquire('async', () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(`${index}, ${val}`)
          resolve(index)
        }, val);
      })
    })
    )
  })


  return Promise.all(promiseArray)

}


runPromise().then(res => {
  console.log(res)
})

/* runLockPromise().then(res => {
  console.log(res)
})
 */