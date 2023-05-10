const capitalize = require('../js/capitalize.js');

describe('task4', () => {
  test('Capitalise the first char of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
});
