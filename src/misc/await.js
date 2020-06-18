const good = function (time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      console.log('hello', time)
      resolve(time)
    }, 3000);
  });
};

const bad = function (time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      reject(new Error('oops: ' + time))
    }, 3000);
  });
};

const aa = async () => {
  console.log('a begin -----')
  try {
    await good(1);
    await bad(1);
    await good(2);
  } catch (err) {
    console.log(err)
  }
  
  return 'fantasy';
  console.log('a end -----')
}

// aa().then(val => console.log('final',val));

const ab = async () => {
  console.log('b beigin ----')
  
  try {
    const [a, b] = await Promise.all([good(1), good(2)])
    await good(3);
    console.log(a,b);
  } catch (err) {
    console.log(err)
  }

  return 'fantasy'
  console.log('b end -----')
}

ab().then(val => console.log('final', val))
