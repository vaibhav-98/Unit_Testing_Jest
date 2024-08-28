// setup and cleaning methods

const mathOperations = require("../calculator");

// 2 -> before each and after each
//2 -> before All  and after All

describe("Calculator Test", () => {
    var inp1 = 0;
    var inp2 = 0;

    beforeAll( () => {
        console.log("beforeAll Called");
        
    });

    afterAll( () => {
        console.log("afterAll Called");
    });

    beforeEach( () => {

        console.log("beforeEach called");
        inp1 = 1;
        inp2 = 2;
    });

    afterEach( () => {
        console.log("afterEach called");
        
    });

    test('add', () => {
        var res = mathOperations.sum(inp1,inp2);
        expect(res).toBe(3);
    })

    test('sub', () => {
        var res = mathOperations.diff(inp1,inp2);
        expect(res).toBe(-1);
    })
})