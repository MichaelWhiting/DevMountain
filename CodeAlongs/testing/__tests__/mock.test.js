import { jest } from "@jest/globals";

jest.unstable_mockModule('axios', () => {
    return {
        default: {
            get: jest.fn().mockResolvedValue({
                data: [{ id: 1 }, { id: 2 }]
            })
        }
    }
})

const { axiosMock } = await import("../mock.js");

describe('test my axiosMock function', () => { 
    test('test axiosMock to find use id 1', async () => {
        let result = await axiosMock(1);
        expect(result[0]).toEqual({ id: 1 } );
    })
 })