// https://www.codewars.com/kata/5659c6d896bc135c4c00021e
'use strict'

function nextSmaller(number) {
    let numberArray = [...number.toString()];

    if (numberArray.length === 1)
        return -1;

    //number.sort((a,b) => ());

    return number;
}

let customSort = function (a, b) {
    let [newA, newB] = [a, b];
    if (a === 0 && b === 1) {
        newA = b;
        newB = a;
    }

    if (a === 1 && b === 0) {
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