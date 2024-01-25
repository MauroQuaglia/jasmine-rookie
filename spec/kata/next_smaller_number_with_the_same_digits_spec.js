describe('Next smaller number with the same digits', function () {

    it('customSort same digits', function () {
        expect(customSort(0, 0)).toEqual(0);
        expect(customSort(1, 1)).toEqual(0);
        expect(customSort(2, 2)).toEqual(0);
        expect(customSort(3, 3)).toEqual(0);
        expect(customSort(4, 4)).toEqual(0);
        expect(customSort(5, 5)).toEqual(0);
        expect(customSort(6, 6)).toEqual(0);
        expect(customSort(7, 7)).toEqual(0);
        expect(customSort(8, 8)).toEqual(0);
        expect(customSort(9, 9)).toEqual(0);
    });

    it('customSort when not 0 or 1', function () {
        expect(customSort(2, 3)).toEqual(-1);
        expect(customSort(3, 2)).toEqual(1);
    });

    it('customSort when 0', function () {
        expect(customSort(0, 1)).toEqual(1);
        expect(customSort(0, 2)).toEqual(-1);
        expect(customSort(0, 3)).toEqual(-1);
        expect(customSort(0, 4)).toEqual(-1);
        expect(customSort(0, 5)).toEqual(-1);
        expect(customSort(0, 6)).toEqual(-1);
        expect(customSort(0, 7)).toEqual(-1);
        expect(customSort(0, 8)).toEqual(-1);
        expect(customSort(0, 9)).toEqual(-1);

        expect(customSort(1, 0)).toEqual(-1);
        expect(customSort(2, 0)).toEqual(1);
        expect(customSort(3, 0)).toEqual(1);
        expect(customSort(4, 0)).toEqual(1);
        expect(customSort(5, 0)).toEqual(1);
        expect(customSort(6, 0)).toEqual(1);
        expect(customSort(7, 0)).toEqual(1);
        expect(customSort(8, 0)).toEqual(1);
        expect(customSort(9, 0)).toEqual(1);
    });



    it('One digits', function () {
        expect(nextSmaller(1)).toEqual(-1);
        expect(nextSmaller(9)).toEqual(-1);
    });
});