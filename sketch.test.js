const { sum } = require('./sketch');

test('Add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})