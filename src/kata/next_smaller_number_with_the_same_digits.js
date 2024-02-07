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
    let results = [];

    for (let j = digitsLength; j > 0; j--) {
        let result = Array.from(digits);

        for (let i = 1; i <= j; i++) {
            result = result.moveForward(j - i + 1);
            let first = result.slice(0, j - i);
            let digit = result[j - i];
            let second = result.slice(j - i + 1);

            let r = first.concat(digit).concat(second.sort().reverse());
            if (IsLess(r, digits)) {
                results.push(Number(r.join('')));
            }
        }
    }

    if (results.length === 0) {
        return -1;
    } else {
        return results.sort().pop();
    }
}