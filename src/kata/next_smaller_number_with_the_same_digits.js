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

function nextSmaller(number) {
    let digits = [...number.toString()];
    let digitsLength = digits.length - 1;

    for (let j = digitsLength; j > 0; j--) {
        let result = Array.from(digits);

        for (let i = 1; i <= j; i++) {
            result = result.moveForward(j - i + 1);
            if (IsLess(result, digits)) {
                if (i === j) {
                    let firstDigit = result.shift();
                    return Number(firstDigit + result.sort().reverse().join(''));
                } else {
                    return Number(result.join(''));
                }
            }
        }
    }

    return -1
}