// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

'use strict'

const MORSE_CODE = new Map([
    ['....', 'H'],
    ['.', 'E'],
    ['-.--', 'Y'],
    ['.---', 'J'],
    ['..-', 'U'],
    ['-..', 'D']
])

let decodeMorse = function (morseCode) {
    return morseCode.split('   ').reduce((sentence, word) => (sentence + ' ' + word.split(' ').map(letter => MORSE_CODE.get(letter)).join('').trim()), '');
}
