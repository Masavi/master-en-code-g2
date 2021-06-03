const sum = require('./sum');

describe('calculator', () => {
    it('adds two positive numbers', () => {
        const positiveNum1 = 5;
        const positiveNum2 = 7;
        const result = sum(positiveNum1, positiveNum2);
        expect(result).toBe(positiveNum1 + positiveNum2);
    });
})
