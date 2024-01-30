// https://www.codewars.com/kata/5659c6d896bc135c4c00021e

'use strict'

function nextSmaller(number) {
    let digits = [...number.toString()].sort();
    let digitsCount = digits.length;

    for (let i = 1; i <= number; i++) {
        let current = number - i;
        let currentDigits = [...current.toString()];

        if (digitsCount !== currentDigits.length)
            return -1

        if (digits.join('') === currentDigits.sort().join(''))
            return current
    }

    return -1;
}