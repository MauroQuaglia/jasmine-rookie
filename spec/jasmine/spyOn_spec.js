let spyOnTest = {
    sumNumber(a, b) {
        return a + b;
    }
}

describe('spyOn', function () {
    it('should spyOn a method', function () {
        spyOn(spyOnTest, 'sumNumber').and.returnValue(0);

        expect(spyOnTest.sumNumber(1, 2)).toEqual(0);
    });

    it('should spyOn a method withArgs', function () {
        spyOn(spyOnTest, 'sumNumber').withArgs(2, 3).and.returnValue(0);

        expect(spyOnTest.sumNumber(2, 3)).toEqual(0);
    });
});
