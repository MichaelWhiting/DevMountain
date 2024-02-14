import nameCheck from "../codeChallenge.js";

describe('test nameCheck', () => {
    let arr = ['cameron', 'jesse', 'michael'];
    test('test that nameCheck return true with included', () => { 
        expect(nameCheck(arr, 'jesse')).toBeTruthy();
     })

    test('test that nameCheck return false for not included names', () => { 
        expect(nameCheck(arr, 'gerald')).toBeFalsy();
     })
 })