// https://www.codewars.com/kata/5659c6d896bc135c4c00021e

'use strict'

Array.prototype.moveForward = function (index) {
    let copy = Array.from(this);

    let elementRemoved = copy.splice(index, 1)[0];
    copy.splice(--index, 0, elementRemoved);
    return copy;
}

function IsLess(result, original) {
    if (result[0] === '0') return false;

    original = Number(original.join(''));
    result = Number(result.join(''));

    return (result < original);
}

// 8453
function nextSmaller(number) {
    let digits = [...number.toString()];

    for (let i = digits.length - 1; i > 0; i--) {
        let result = digits.moveForward(i);
        if (IsLess(result, digits)) {
            return Number(result.join(''));
        }
    }

    return -1
}