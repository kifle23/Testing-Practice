const reverseString = require('../js/reverseString');

describe('Task 2', () => {
  test('reverseString should return reversed string', () => {
    expect(reverseString('Hello World!')).toBe('!dlroW olleH');
  });
});
