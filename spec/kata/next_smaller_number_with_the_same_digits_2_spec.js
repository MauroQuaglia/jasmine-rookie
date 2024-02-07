describe('Next Smaller Number With The Same Digits 2', function () {

    describe('nextSmaller2', function () {
        it('one digit', function () {
            expect(nextSmaller2(1)).toEqual(-1);
            expect(nextSmaller2(9)).toEqual(-1);
        });

        it('two digits', function () {
            expect(nextSmaller2(10)).toEqual(-1);
            expect(nextSmaller2(11)).toEqual(-1);
            expect(nextSmaller2(12)).toEqual(-1);

            expect(nextSmaller2(20)).toEqual(-1);
            expect(nextSmaller2(21)).toEqual(12);
            expect(nextSmaller2(22)).toEqual(-1);

            expect(nextSmaller2(31)).toEqual(13);
            expect(nextSmaller2(32)).toEqual(23);
            expect(nextSmaller2(33)).toEqual(-1);
        });

        it('acceptance', function () {
            expect(nextSmaller2(8453)).toEqual(8435);
            expect(nextSmaller2(907)).toEqual(790);
            expect(nextSmaller2(531)).toEqual(513);
            expect(nextSmaller2(513)).toEqual(351);
            expect(nextSmaller2(315)).toEqual(153);
            expect(nextSmaller2(135)).toEqual(-1);
            expect(nextSmaller2(2071)).toEqual(2017);
            expect(nextSmaller2(1027)).toEqual(-1);
            expect(nextSmaller2(414)).toEqual(144);
        });
    });

});

