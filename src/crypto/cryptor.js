const crypto = require('crypto');

function aesEncrypt(data, key) {
const cipher = crypto.createCipher('aes192', key);
let encrypted = cipher.update(data, 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);
return encrypted;
}


function aesDecrypt(encrypted, key) {
  const decipher = crypto.createDecipher('aes192', key);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  console.log(decrypted);
  console.log('');
}


// aesDecrypt(aesEncrypt('192.168.7.60', 'rro'), 'rro');
// aesDecrypt(aesEncrypt('master', 'rro'), 'rro');
// aesDecrypt(aesEncrypt('webwriter', 'rro'), 'rro');
// aesDecrypt(aesEncrypt('192168760', 'rro'), 'rro');
// aesDecrypt(aesEncrypt('192.168.27.133/epps', 'rro'), 'rro');
// aesDecrypt(aesEncrypt('ESCMUSER', 'rro'), 'rro');
// aesDecrypt(aesEncrypt('es#8u2er', 'rro'), 'rro');
// aesDecrypt(aesEncrypt('192.168.7.106:1521/scm2', 'rro'), 'rro');
// aesDecrypt(aesEncrypt('escmreader', 'rro'), 'rro');
// aesDecrypt(aesEncrypt('imtkotw', 'rro'), 'rro');


// aesDecrypt(aesEncrypt('esq-mssql-std-dm.cogfagymhkon.ap-southeast-2.rds.amazonaws.com', 'rro'), 'rro');
// aesDecrypt(aesEncrypt('ESQ_DATA', 'rro'), 'rro');
// aesDecrypt(aesEncrypt('GEKPE', 'rro'), 'rro');
// aesDecrypt(aesEncrypt('G39laf3kf', 'rro'), 'rro');


// aesDecrypt(aesEncrypt('10.12.2.140', 'rro'), 'rro');

aesDecrypt(aesEncrypt('192.168.7.139', 'rro'), 'rro');
aesDecrypt(aesEncrypt('gewem', 'rro'), 'rro');
aesDecrypt(aesEncrypt('emsreader', 'rro'), 'rro');
aesDecrypt(aesEncrypt('Dki124#1*d3', 'rro'), 'rro');

