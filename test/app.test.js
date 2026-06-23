const add = require('../app');

test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('adds 10 + 5 to equal 15', () => {
    expect(add(10, 5)).toBe(15);
});
