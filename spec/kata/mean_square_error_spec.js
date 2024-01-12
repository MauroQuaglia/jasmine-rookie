describe('Mean square error', function () {
    it('Different length of arrays', function () {
        expect(solution([1], [1, 2])).toBeUndefined();
    });

    it('Same length of arrays', function () {
        expect(solution([1, 2, 3], [4, 5, 6])).toEqual(9);
        expect(solution([10, 20, 10, 2], [10, 25, 5, -2])).toEqual(16.5);
        expect(solution([0, -1], [-1, 0])).toEqual(1);
    });
});