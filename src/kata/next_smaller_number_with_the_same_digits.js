// https://www.codewars.com/kata/5659c6d896bc135c4c00021e
'use strict'

function nextSmaller(number) {
    let numberArray = [...number.toString()];
    let firstDigit = numberArray.shift();

    let digits



    if (numberArray.length === 1)
        return -1;

    let result = Number(numberArray.sort(customSort).join(''));

    return result;
    //return (result === number) ? -1 : result;
}

let customSort = function (a, b) {
    let [newA, newB] = [a, b];
    if (a + b === 1) {
        newA = b;
        newB = a;
    }

    if (newA < newB) {
        return -1;
    } else if (newA > newB) {
        return 1;
    }

    return 0;
}