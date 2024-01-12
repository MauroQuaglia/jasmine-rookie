// https://www.codewars.com/kata/52195c9bb576caf14200007f/train/javascript

'use strict'

Array.range = function (start, count) {
    let result = [];
    for (let i = start; i < start + count; i++) {
        result.push(i);
    }
    return result;
}

Array.prototype.sum = function () {
    return this.reduce((total, current) => total + current, 0);
}