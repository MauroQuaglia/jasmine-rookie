describe('Function.prototype.clone', function () {


    it('should return function', function () {
        let f1 = function (a){
            return a+1;
        }
        expect(f1(1)).toEqual(2);

        let g1 = f1.clone();
        expect(g1(1)).toEqual(2);
    });


});