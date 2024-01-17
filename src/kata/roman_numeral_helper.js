// https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript

'use strict'

const DR = new Map([
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'],
    [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
]);

const RD = new Map([
    ['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]
]);

Number.prototype.divmod = function (n) {
    let quotient = Math.floor(this / n);
    let rest = this - (n * quotient);
    return [quotient, rest];
}

class RomanNumerals {
    static toRoman(number) {
        let result = '';
        for (let [decimal, roman] of DR) {
            let [quotient, rest] = number.divmod(decimal);
            result += roman.repeat(quotient);
            number = rest;
        }
        return result;
    }

    static fromRoman(string) {
        let romans = [...string]; // XVII

        let result = 0;
        for (let i = 0; i < romans.length - 1; i++) {
            let sign = Math.sign(
                RD.get(romans[i]) - RD.get(romans[i + 1])
            );
            if (sign >= 0) {
                result += RD.get(romans[i]);
            } else {
                result -= RD.get(romans[i]);
            }
        }
        result += RD.get(romans[romans.length - 1]);

        return result;
    }
}
