describe('The observed pin', function () {
    describe('multiplication', function () {
        it('should multiply empty array', function () {
            expect(multiplication([''], [''])).toEqual(jasmine.arrayWithExactContents(['']));
            expect(multiplication([''], ['1'])).toEqual(jasmine.arrayWithExactContents(['1']));
            expect(multiplication([''], ['1', '2'])).toEqual(jasmine.arrayWithExactContents(['1', '2']));
            expect(multiplication(['1'], [''])).toEqual(jasmine.arrayWithExactContents(['1']));
        });

        it('should multiply simple array', function () {
            expect(multiplication(['1'], ['2'])).toEqual(jasmine.arrayWithExactContents(['12']));
            expect(multiplication(['1', '2'], ['3'])).toEqual(jasmine.arrayWithExactContents(['13', '23']));
            expect(multiplication(['1'], ['2', '3'])).toEqual(jasmine.arrayWithExactContents(['12', '13']));
        });

        it('should multiply array with more values', function () {
            expect(multiplication(['1', '2'], ['3', '4'])).toEqual(jasmine.arrayWithExactContents(['13', '14', '23', '24']));
        });
    });

    describe('getPINs', function () {
        it('should return possible pin for one digit', function () {
            //expect(getPINs('0')).toEqual(jasmine.arrayWithExactContents(['09']));
        });
    });
});