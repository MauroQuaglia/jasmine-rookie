describe('Matrix determinant', function () {
    describe('minor', function () {
        it('should return minor for a 1 x 1 matrix with index 0', function () {
            let matrix = [[1]], index = 0;
            expect(minor(index, matrix)).toEqual([]);
        });

        it('should return minor for a 2 x 2 matrix with index 0', function () {
            let matrix = [[1, 2], [3, 4]], index = 0;
            expect(minor(index, matrix)).toEqual([[4]]);
        });

        it('should return minor for a 2 x 2 matrix with index 1', function () {
            let matrix = [[1, 2], [3, 4]], index = 1;
            expect(minor(index, matrix)).toEqual([[3]]);
        });

        it('should return minor for a 3 x 3 matrix with index 0', function () {
            let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], index = 0;
            expect(minor(index, matrix)).toEqual([[5, 6], [8, 9]]);
        });

        it('should return minor for a 3 x 3 matrix with index 1', function () {
            let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], index = 1;
            expect(minor(index, matrix)).toEqual([[4, 6], [7, 9]]);
        });

        it('should return minor for a 3 x 3 matrix with index 2', function () {
            let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], index = 2;
            expect(minor(index, matrix)).toEqual([[4, 5], [7, 8]]);
        });
    });

    describe('sign', function () {
        it('should return sign for indexes', function () {
            expect(sign(0)).toEqual(1);
            expect(sign(1)).toEqual(-1);
            expect(sign(2)).toEqual(1);
            expect(sign(3)).toEqual(-1);
        });
    });

    describe('determinant', function () {
        it('should return determinant for 1 x 1 matrix with 0 ', function () {
            let matrix = [[0]];
            expect(determinant(matrix)).toEqual(0);
        });

        it('should return determinant for 1 x 1 matrix without 0 ', function () {
            let matrix = [[1]];
            expect(determinant(matrix)).toEqual(1);
        });

        it('should return determinant for 2 x 2 matrix with 0 ', function () {
            let matrix = [[0, 2], [3, 4]];
            expect(determinant(matrix)).toEqual(-6);

            matrix = [[1, 0], [3, 4]];
            expect(determinant(matrix)).toEqual(4);

            matrix = [[1, 2], [0, 4]];
            expect(determinant(matrix)).toEqual(4);

            matrix = [[1, 2], [3, 0]];
            expect(determinant(matrix)).toEqual(-6);
        });

        it('should return determinant for 2 x 2 matrix without 0 ', function () {
            let matrix = [[1, 2], [3, 4]];
            expect(determinant(matrix)).toEqual(-2);
        });

    });
});