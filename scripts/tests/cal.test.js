const addition = require("../cal");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
        test("should return error for empty field", () => {     
            expect(() => {
                addition();
            }).toThrow("You must provide a number");
        });
        test("should return error for donkey", () => {     
            expect(() => {
                addition("donkey");
            }).toThrow("You must provide a number");
        });
    });
    describe("Subtraction function", () => {
        
    });
    describe("Multiplication function", () => {
        
    });
    describe("Division function", () => {
        
    });
});