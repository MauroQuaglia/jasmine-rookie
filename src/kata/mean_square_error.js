// https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript

'use strict'

let solution = function (firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) return undefined;

    let commonLength = firstArray.length, total = 0;
    for (let i = 0; i < commonLength; i++) {
        total += (secondArray[i] - firstArray[i]) ** 2;
    }

    return total / commonLength;
}