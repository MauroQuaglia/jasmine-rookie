describe('range extraction', function () {

    it('should return empty string', function () {
        expect(compatter([])).toEqual('');
    });

    it('should return trivial string', function () {
        expect(compatter([1])).toEqual('1');
    });

    it('should return all values', function () {
        expect(compatter([1, 2])).toEqual('1,2');
    });

    it('should return compact values', function () {
        expect(compatter([1, 2, 3])).toEqual('1-3');
    });

    it('should return compact values complex', function () {
        expect(compatter([1, 2, 3, 5, 7, 8, 9])).toEqual('1-3,5,7-9');
    });

    it('should return acceptance test right', function () {
        expect(compatter([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])).toEqual('-10--8,-6,-3-1,3-5,7-11,14,15,17-20');
    });


});