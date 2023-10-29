// CommonJS - every file is a module by default
// Modules - This is an encapsulated code (Shares only minimum)

const names = require('./names');
const sayHi = require('./utils');
console.log(names); 

require('./mindGrenage');

sayHi('student')
sayHi(names.ntn)
sayHi(names.rdm)