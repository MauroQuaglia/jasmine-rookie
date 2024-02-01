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
            expect(less(['1'], ['1'])).toBeFalse();
            expect(less(['1'], ['2'])).toBeTrue();
        });

        it('two digits', function () {
            expect(less(['1', '1'], ['1', '1'])).toBeFalse();
            expect(less(['1', '3'], ['2', '4'])).toBeTrue();
        });

        it('zero', function () {
            expect(less(['0', '1'], ['1', '0'])).toBeFalse();
        });


    });

});

