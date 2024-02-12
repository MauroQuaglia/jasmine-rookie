// https://www.codewars.com/kata/53381a646068efc50100072c

'use strict'

Function.prototype.clone = function () {
    let functionString= this.toString().replace(/\n/g, '');
    let body = functionString.match(/{.*}/)[0].slice(1, -1);
    let params = functionString.match(/\(.*\)/)[0].slice(1, -1);

    return new Function(params, body);
};

// Function.prototype è il prototype che viene asseganto a tutte le funzioni. (Questo è quello che viene asseganto agli altri)
// Function.__proto__ è il prototype dell'oggetto Function. (Questo è il suo)