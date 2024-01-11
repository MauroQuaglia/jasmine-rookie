describe("A suite", function () {
    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });
});

describe("A suite is just a function", function () {
    let in_a_suite_scope = true;

    it("should read variable", function () {
        expect(in_a_suite_scope).toBe(true);
        expect(in_a_suite_scope).toBeTrue();
        expect(in_a_suite_scope).toBeTruthy();
        expect(in_a_suite_scope).not.toBe(false);
        expect(in_a_suite_scope).not.toBeFalse();
        expect(in_a_suite_scope).not.toBeFalsy();
    });
});