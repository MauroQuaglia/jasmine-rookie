describe('Matrix determinant', function () {
    describe('minor', function () {
        it('should return minor for a 3 x 3 matrix with index 0', function () {
            let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], index = 0;
            expect(minor(index, matrix)).toEqual([[5, 6], [8, 9]])
        });

        it('should return minor for a 3 x 3 matrix with index 1', function () {
            let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], index = 1;
            expect(minor(index, matrix)).toEqual([[4, 6], [7, 9]])
        });

        it('should return minor for a 3 x 3 matrix with index 2', function () {
            let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], index = 2;
            expect(minor(index, matrix)).toEqual([[4, 5], [7, 8]])
        });
    });
});