describe('Adding useful functional functionality to javascript arrays', function () {

    describe('Array range function', function () {
        it('should range from positive value', function () {
            expect(Array.range(1, 3)).toEqual([1, 2, 3]);
        });

        it('should range from negative value', function () {
            expect(Array.range(-1, 1)).toEqual([-1]);
            expect(Array.range(-3, 5)).toEqual([-3, -2, -1, 0, 1]);
        });

        it('should return empty array', function () {
            expect(Array.range(0, 0)).toEqual([]);
            expect(Array.range(1, 0)).toEqual([]);
        });
    });

    describe('Array sum function', function () {
        it('should sum empty array', function () {
            expect([].sum()).toEqual(0);
        });

        it('should sum negative numbers', function () {
            expect([-2, -1, -5].sum()).toEqual(-8);
        });

        it('should sum numbers', function () {
            expect([-3, -2, -1, 0, 1, 2, 3].sum()).toEqual(0);
        });
    });

});