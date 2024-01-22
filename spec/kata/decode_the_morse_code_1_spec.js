describe('decodeMorse', function () {

    describe('single letter', function () {
        it('should morse to letter', function () {
            expect(decodeMorse('....')).toEqual('H');
            expect(decodeMorse('.')).toEqual('E');
            expect(decodeMorse('-.--')).toEqual('Y');
        });
    });

    describe('single word', function () {
        it('should morse to letter', function () {
            expect(decodeMorse('.... . -.--')).toEqual('HEY');
            expect(decodeMorse('-.-- . ....')).toEqual('YEH');
        });
    });

    describe('phrase', function () {
        it('should morse to letter', function () {
            expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toEqual('HEY JUDE');
        });
    });

});