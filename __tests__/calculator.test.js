const mathOperations = require('../calculator')

// describe -> collection of similar tests



describe("Calculator Tests", () => {

    test('adding 1 + 2 should return 3', () => {
            expect(mathOperations.sum(1, 2)).toBe(3);
            expect(mathOperations.sum(1, 4)).not.toBe(6);
            // toBe -> expected output
            // expect() -> actual output
    })

    test('subtract testing', () => {
        var result = mathOperations.diff(10,2);
        expect(result).toBe(8)
    })
})