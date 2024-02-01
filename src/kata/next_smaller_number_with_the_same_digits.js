// https://www.codewars.com/kata/5659c6d896bc135c4c00021e

'use strict'

Array.prototype.moveForward = function (index) {
    let copy = Array.from(this);

    let elementRemoved = copy.splice(index, 1)[0];
    copy.splice(--index, 0, elementRemoved);
    return copy;
}

function less(result, original) {
    if (result[0] === '0') return false;

    original = Number(original.join(''));
    result = Number(result.join(''));

    return (result < original);
}

// 8453
function nextSmaller(number) {
    let digits = [...number.toString()];

    if (digits.length === 1)
        return -1;

    for (let i = digits.length - 1; i > 0; i--) {
        let result = digits.moveForward(i);

    }
}