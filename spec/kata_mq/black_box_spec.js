describe('Black box', function () {
    it('Not a Number', function () {
        expect(blackBox('a')).toEqual('a')
        expect(blackBox(true)).toBeTrue();
        expect(blackBox(false)).toBeFalse();
        expect(blackBox(-1)).toEqual(-1);
        expect(blackBox(0)).toEqual(0);
        expect(blackBox(1.5)).toEqual(1.5);
        expect(blackBox(NaN)).toBeNaN();
        expect(blackBox(Infinity)).toBePositiveInfinity();
        expect(blackBox(-Infinity)).toBeNegativeInfinity();
    });

    it('Trivial', function () {
        expect(blackBox(1)).toEqual(1);
        expect(blackBox(2)).toEqual(1);
    });

    it('Miscellanea', function () {
        expect(blackBox(3)).toEqual(2);
        expect(blackBox(5)).toEqual(3);
        expect(blackBox(7)).toEqual(4);
        expect(blackBox(9)).toEqual(5);
    });
});


/*
it("Trivial", function () {
    assert.Equal(blackBox(1), 1);
    assert.Equal(blackBox(2), 1);
});

it("Miscellanea", function () {
    assert.Equal(blackBox(3), 2);
    assert.Equal(blackBox(5), 3);
    assert.Equal(blackBox(7), 4);
    assert.Equal(blackBox(9), 5);
});
*/
