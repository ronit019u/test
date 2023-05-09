const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require('./project');
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


describe('reverseString', () => {
    test('reverses the string', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
    })
    test('workds with empty string', () => {
        expect(reverseString('')).toBe('');
    })
         });


         describe('calculator', () => {
            test("A calculator object that contains functions for the basic operations: ADD", () => {
                expect(calculator.add(1,3)).toBe(4);
            });
            
            test("A calculator object that contains functions for the basic operations: SUBTRACT", () => {
                expect(calculator.subtract(2,1)).toBe(1);
            });
            
            test("A calculator object that contains functions for the basic operations: MULTIPLY", () => {
                expect(calculator.multiply(2,3)).toBe(6);
            });
            
            test("A calculator object that contains functions for the basic operations: DIVIDE", () => {
                expect(calculator.divide(10,2)).toBe(5);
            })
            });

            describe('caesarCipher', () => {
                test('caesar case', () => {
                    expect(caesarCipher('hello world', 3)).toBe('khoor zruog')
                })
                test('wraps z to a', () => {
                    expect(caesarCipher('z', 1)).toBe('a');
                })
                test('keep the same case of all the letters', () => {
                    expect(caesarCipher('Hello', 3)).toBe('Khoor');
                })
                test('keep the punctuation', () => {
                    expect(caesarCipher('Hello!?', 3)).toBe('Khoor!?');
                })
            })

            describe('analyzeArray', () => {
                test('average, minimum, maximum and length of the array', () => {
                    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
                        average: 4,
                        min: 1,
                        max: 8,
                        length: 6
                    });
                })
                test('anaalyze negative array', () => {
                    expect(analyzeArray([1, 0, -1])).toEqual({
                        average: 0,
                        min: -1,
                        max: 1,
                        length: 3
                    })
                })
            })