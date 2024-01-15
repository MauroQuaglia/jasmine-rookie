// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript

'use strict'

const POSSIBILITY = new Map([
    ['0', ['0', '8']],
    ['1', ['1', '2', '4']],
    ['2', ['1', '2', '3', '5']],
    ['3', ['2', '3', '6']],
    ['4', ['1', '4', '5', '7']],
    ['5', ['2', '4', '5', '6', '8']],
    ['6', ['3', '5', '6', '9']],
    ['7', ['4', '7', '8']],
    ['8', ['0', '5', '7', '8', '9']],
    ['9', ['6', '8', '9']]
]);

function getPINs(observed) {
    let result = [''];
    for (let digit of [...observed]) {
        result = multiplication(result, POSSIBILITY.get(digit));
    }
    return result;
}

let multiplication = function (a, b) {
    let result = [];
    a.forEach(function (x) {
        this.forEach(y => result.push(x + y))
    }, b);
    return result;
}