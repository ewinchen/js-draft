const err = new Error('Oops')

err.abc = {a: 1232}

console.log(JSON.stringify(err.message));
console.log(JSON.stringify(err));