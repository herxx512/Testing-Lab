let myFunctions = require('./functions')

test('Return two test', () => {
    expect(myFunctions.returnTwo()).toBe(2)
});

test('Greeting test', () => {
    expect(myFunctions.greeting('James')).toBe('Hello, James.')
});

test('Add test', () => {
    expect(myFunctions.add(1,2)).toBe(3)
});

describe('Challenge', () => {
    test('Add', () => {
        expect(myFunctions.add(25,50)).toBe(75)
    });

    test('Subtract', () => {
        expect(myFunctions.subtract(40,10)).toBe(30)
    });

    test('Multiply', () => {
        expect(myFunctions.multiply(7,11)).toBe(77)
    });

    test('Divide', () => {
        expect(myFunctions.divide(64,8)).toBe(8)
    });
})