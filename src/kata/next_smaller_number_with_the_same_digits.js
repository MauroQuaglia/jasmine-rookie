// https://www.codewars.com/kata/5659c6d896bc135c4c00021e

'use strict'

function nextSmaller(number) {
    let digits = [...number.toString()].sort();

    for (let i = 1; i <= number; i++) {
        let current = number - i;
        let currentDigits = [...current.toString()];
        if (same(digits, currentDigits)) {
            return current
        }
    }

    return -1;
}

function same(sortedArray, array) {
    if (sortedArray.length !== array.length) {
        return false
    }

    return sortedArray.join('') === array.sort().join('');
}

// 21 20 19 18

// 531