import { add, multiply } from "../math.js";
// import { jest } from "@jest/globals";

describe('Testing the add function', () => { 
    test('testing add function 2 + 2 = 4', () => { 
        expect(add(2, 2)).toBe(4);
     })

     test('testing add function 2 + 3 !== 6', () => {
        expect(add(2, 3)).not.toBe(6);
     })
});

describe('Testing the multiply function', () => { 
    test('testing multiply function 3 * 2 = 6', () => {
        expect(multiply(3, 2)).toBe(6);
    })
    test('testing multiply function 3 * 2 != 7', () => {
        expect(multiply(3, 2)).not.toBe(7);
    })
 })