const err = new Error('hello');
err.message =  err.message + 'ok';
console.log(err.message)