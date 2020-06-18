let param = 'AO1';

console.log(/\d/.exec(param).input);

console.log(param.substring(0, /\d/.exec(param).index))