describe('Framed Reflection', function () {

    it('empty', function () {
        expect(mirror('')).toEqual('****\n*  *\n****')
    });

    it('char', function () {
        expect(mirror('a')).toEqual('*****\n* a *\n*****')
    });

    it('word', function () {
        expect(mirror('Codewars')).toEqual('************\n* srawedoC *\n************')
    });

    it('phrase', function () {
        expect(mirror('Hello World')).toEqual('*********\n* olleH *\n* dlroW *\n*********')
    });
});