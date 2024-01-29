// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
'use strict'

function compatter(rest, result = '') {
    if (rest.length === 0) {
        if (result[result.length-1] === ',')
            return result.slice(0, -1);
        else
            return result;
    }

    let i = 0;
    while (rest[i + 1] === rest[i] + 1) i++;

    let [first, last] = [rest[0], rest[i]];
    switch (last - first) {
        case 0:
            result += `${first},`;
            break;
        case 1:
            result += `${first},${last},`;
            break;
        default:
            result += `${first}-${last},`;
    }

    rest.splice(0, i + 1);

    return compatter(rest, result);
}