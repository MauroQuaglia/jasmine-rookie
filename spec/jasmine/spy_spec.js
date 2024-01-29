let spyOnTest = {
    sumNumber(a, b) {
        return a + b;
    },
    get name() {
        return 'Mauro';
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

describe('spyOnProperty', function () {
    it('should spyOnProperty a property', function () {
        spyOnProperty(spyOnTest, 'name').and.returnValue('Quaglia');

        expect(spyOnTest.name).toEqual('Quaglia');
    });
});

describe('spyOnAllFunctions', function () {
    it('should spyOnAllFunctions', function () {
        let spyOb = spyOnAllFunctions(spyOnTest, true)

        //expect(spyOnTest.name).toEqual('Quaglia');
    });
});
