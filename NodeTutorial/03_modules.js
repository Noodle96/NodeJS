const names = require('./04_names');

// the same name as the function or variable in the module
const {pedri} = require('./04_names');

// the name function can be anything, but it is a good practice to use the same name as the function
const sayHi = require('./05_utils');

// console.log(names);
// console.log(sayHi);

sayHi("Roman");
sayHi(names.jorge);
sayHi(names.elias);
sayHi(Pedri);
