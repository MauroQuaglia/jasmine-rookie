// https://www.codewars.com/kata/581331293788bc1702001fa6

'use strict'

function mirror(text) {
    let words = text.split(' ');
    let rowLength = Math.max(...words.map(x => x.length)) + 4;
    let frame = '*'.repeat(rowLength);
    let result = '';

    result += frame + "\n";
    for (let word of words) {
        let wordLength = word.length;
        result += `* ${[...word].reverse().join('')}${' '.repeat(rowLength - wordLength - 4)} *` + "\n";
    }
    result += frame;

    return result;
}