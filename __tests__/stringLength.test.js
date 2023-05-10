const stringLength = require('../js/stringLength');

describe('Task 1', () => {
  test('"Hi" should be 2', () => {
    expect(stringLength('Hi')).toBe(2);
  });

  test('Empty string should return an error', () => {
    expect(() => stringLength('')).toThrow(
      'Input string must be at least 1 character long.',
    );
  });

  test('Sting longer than 10 chars should return an error', () => {
    expect(() => stringLength('This string is too long')).toThrow(
      'Input string must not be longer than 10 characters.',
    );
  });
});
