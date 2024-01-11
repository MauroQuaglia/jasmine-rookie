Array.range = function (start, count) {
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push(start + i);
    }
    return result;
}