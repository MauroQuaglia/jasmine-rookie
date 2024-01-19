'use strict'

//Let n a positive integer.
// Can you discover the Black Box computation.

// You can add more tests...

let blackBox = function (n) {
    if (
        typeof (n) !== 'number' ||
        isNaN(n) ||
        !isFinite(n) ||
        !Number.isInteger(n) ||
        n <= 0) {
        return n;
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        switch (i % 2) {
            case 0:
                result += (n - i);
                break;
            case 1:
                result -= (n - i);
                break;
        }
    }
    return result;
}