// https://www.codewars.com/kata/52a382ee44408cea2500074c/train/javascript

'use strict'


// NOTA METTERE A POSTO I -1 DEGLI INDICI!
function determinant(matrix) {
    // if (m.length === 1) return m[0];

    let rows = matrix.length; //
    let first_row = matrix[0]; // [a, b]

    let result = 0;
    for (let [item, index] of first_row) {
        let currentMinor = minor(index, matrix);
        result += item * sign(index) * determinant(currentMinor);
    }
    return result;
}


let sign = (index) => index % 2 === 0 ? 1 : -1;

let minor = function (index, matrix) {
    matrix.shift();
    for(let row of matrix){
        row.splice(index, 1);
    }
    return matrix;
}

//m1 = [ [4, 6], [3,8]]
//m5 = [[2,4,2],[3,1,1],[1,2,0]]

// For the 1x1 case, [ [a] ]
// |a|

// For the 2x2 case, [ [a, b], [c, d] ]
// |a  b|
// |c  d|


// For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or
// |a b c|
// |d e f|
// |g h i|