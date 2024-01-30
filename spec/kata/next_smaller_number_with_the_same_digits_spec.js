describe('Next Smaller Number With The Same Digits', function () {

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
            expect(nextSmaller(521)).toEqual(512);
            expect(nextSmaller(531)).toEqual(513);
            expect(nextSmaller(541)).toEqual(514);
            expect(nextSmaller(591)).toEqual(519);
            expect(nextSmaller(2071)).toEqual(2017);
        });
    });

});

