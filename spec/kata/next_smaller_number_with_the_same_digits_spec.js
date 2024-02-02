describe('Next Smaller Number With The Same Digits', function () {

    describe('moveForward', function () {
        it('trivial', function () {
            expect(['a'].moveForward(0)).toEqual(['a'])
        });

        it('switch', function () {
            expect(['a', 'b'].moveForward(1)).toEqual(['b', 'a'])
        });

        it('forward element', function () {
            expect(['a', 'b', 'c'].moveForward(2)).toEqual(['a', 'c', 'b'])
            expect(['a', 'c', 'b'].moveForward(1)).toEqual(['c', 'a', 'b'])
        });
    });

    describe('less', function () {
        it('trivial', function () {
            expect(IsLess(['1'], ['1'])).toBeFalse();
            expect(IsLess(['1'], ['2'])).toBeTrue();
        });

        it('two digits', function () {
            expect(IsLess(['1', '1'], ['1', '1'])).toBeFalse();
            expect(IsLess(['1', '3'], ['2', '4'])).toBeTrue();
        });

        it('zero', function () {
            expect(IsLess(['0', '1'], ['1', '0'])).toBeFalse();
        });


    });

    describe('nextSmaller', function () {
        it('one digit', function () {
            expect(nextSmaller(1)).toEqual(-1);
            expect(nextSmaller(9)).toEqual(-1);
        });

        it('two digits', function () {
            expect(nextSmaller(10)).toEqual(-1);
            expect(nextSmaller(11)).toEqual(-1);
            expect(nextSmaller(12)).toEqual(-1);

            expect(nextSmaller(20)).toEqual(-1);
            expect(nextSmaller(21)).toEqual(12);
            expect(nextSmaller(22)).toEqual(-1);

            expect(nextSmaller(31)).toEqual(13);
            expect(nextSmaller(32)).toEqual(23);
            expect(nextSmaller(33)).toEqual(-1);
        });

        it('acceptance', function () {
            expect(nextSmaller(8453)).toEqual(8435);
            expect(nextSmaller(907)).toEqual(790);
            expect(nextSmaller(531)).toEqual(513);
            expect(nextSmaller(513)).toEqual(351);
            expect(nextSmaller(315)).toEqual(153);
            expect(nextSmaller(135)).toEqual(-1);
            expect(nextSmaller(2071)).toEqual(2017);
            expect(nextSmaller(1027)).toEqual(-1);
            expect(nextSmaller(414)).toEqual(144);

            expect(nextSmaller(123456798)).toEqual(123456789);
            expect(nextSmaller(123456789)).toEqual(-1);
            expect(nextSmaller(1234567908)).toEqual(1234567890);
        });
    });

});

