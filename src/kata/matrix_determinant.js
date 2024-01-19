// https://www.codewars.com/kata/52a382ee44408cea2500074c/train/javascript

'use strict'

function determinant(matrix) {
    if (matrix.length === 1) return matrix[0][0];

    let result = 0;
    let first_row = matrix[0].entries()
    for (let [index, item] of first_row) {
        let currentMinor = minor(index, matrix);
        result += item * sign(index) * determinant(currentMinor);
    }
    return result;
}

let sign = (index) => index % 2 === 0 ? 1 : -1;

let minor = function (index, matrix) {
    let current_matrix = JSON.parse(JSON.stringify(matrix));

    current_matrix.shift();
    for (let row of current_matrix) {
        row.splice(index, 1);
    }
    return current_matrix;
}