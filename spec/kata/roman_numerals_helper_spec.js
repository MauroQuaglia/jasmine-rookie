describe('Roman numerals helper', function () {

    describe('toRoman', function () {
        it('should convert decimal to roman', function () {
            expect(RomanNumerals.toRoman(1000)).toEqual('M');
            expect(RomanNumerals.toRoman(4)).toEqual('IV');
            expect(RomanNumerals.toRoman(1)).toEqual('I');
            expect(RomanNumerals.toRoman(1990)).toEqual('MCMXC');
            expect(RomanNumerals.toRoman(2008)).toEqual('MMVIII');
        });
    });

    describe('fromRoman', function () {
        it('should convert roman to decimal', function () {
            expect(RomanNumerals.fromRoman('XXI')).toEqual(21);
            expect(RomanNumerals.fromRoman('I')).toEqual(1);
            expect(RomanNumerals.fromRoman('IV')).toEqual(4);
            expect(RomanNumerals.fromRoman('MMVIII')).toEqual(2008);
            expect(RomanNumerals.fromRoman('MDCLXVI')).toEqual(1666);

        });
    });

});