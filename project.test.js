const {capitalize} = require('./project');
describe('capitalize', () => {
    test('capitalizes the first character of the string', () => {
        expect(capitalize('hello world')).toBe('Hello world');
    })
    test("capitalize single character", () =>{
        expect(capitalize('a')).toBe('A');
    })
    test('workds with empty string', () => {
        expect(capitalize('')).toBe('');
    })
    test("does not change when first character already capitalize", () => {
        expect(capitalize('Hello')).toBe('Hello');
    })

});