describe('Next Smaller Number With The Same Digits', function () {

    describe('same', function () {
        it('empty arrays', function () {
            expect(same([], [])).toBeTrue();
        });

        it('different arrays', function () {
            expect(same(['2'], ['1'])).toBeFalse();
        });

        it('same simple arrays', function () {
            expect(same(['1'], ['1'])).toBeTrue();
        });

        it('different length', function () {
            expect(same(['1', '1'], ['1'])).toBeFalse();
        });

        it('same arrays', function () {
            expect(same(['1', '2'], ['1', '2'])).toBeTrue();
            expect(same(['1', '2'], ['2', '1'])).toBeTrue();
        });
    });

    describe('nextSmaller', function () {
        it('single digit', function () {
            expect(nextSmaller(1)).toEqual(-1);
        });

        it('same digits', function () {
            expect(nextSmaller(11)).toEqual(-1);
        });

        it('not exist', function () {
            expect(nextSmaller(9)).toEqual(-1);
            expect(nextSmaller(111)).toEqual(-1);
            expect(nextSmaller(135)).toEqual(-1);
            expect(nextSmaller(1027)).toEqual(-1);
        });

        it('exists', function () {
            expect(nextSmaller(21)).toEqual(12);
            expect(nextSmaller(531)).toEqual(513);
            expect(nextSmaller(2071)).toEqual(2017);
        });
    });

});

