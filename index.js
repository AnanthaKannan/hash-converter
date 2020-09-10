const { SHA256 } = require('./SHA256');
const { SHA1} = require('./SHA1');
const { MD5 } = require('./MD5');
const { MD2 } = require('./MD2')

module.exports = {
    SHA256, SHA1, MD5, MD2
}

// let res = SHA256('hello-world');
// console.log('SHA256', res);

// res = SHA1('hello-world');
// console.log('SHA1', res);

// res = MD5('hello-world');
// console.log('MD5', res);

// res = MD2('hello-world');
// console.log('MD2', res);