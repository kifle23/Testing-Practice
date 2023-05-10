const Calculator = require('../js/calculator.js');

describe('Add method', () => {
  test('test 4 + 3 should be 7', () => {
    const calculator = new Calculator(4, 3);
    const sum = calculator.add();
    expect(sum).toBe(7);
  });

  test('test 5 add 10 should be 15', () => {
    const calculator = new Calculator(5, 10);
    const sum = calculator.add();
    expect(sum).toBe(15);
  });
});

describe('subtract method', () => {
  test('test 7 - 3 should be 4', () => {
    const calculator = new Calculator(7, 3);
    const subtract = calculator.subtract();
    expect(subtract).toBe(4);
  });

  test('test 5 - 7 should be -2', () => {
    const calculator = new Calculator(5, 7);
    const subtract = calculator.subtract();
    expect(subtract).toBe(-2);
  });
});

describe('divide method', () => {
  test('test 10 / 5 should be 2', () => {
    const calculator = new Calculator(10, 5);
    const divide = calculator.divide();
    expect(divide).toBe(2);
  });

  test('test 0 / 2 should be 0', () => {
    const calculator = new Calculator(0, 2);
    const divide = calculator.divide();
    expect(divide).toBe(0);
  });

  test('test 2 / 0 should be infinity', () => {
    const calculator = new Calculator(2, 0);
    expect(() => calculator.divide()).toThrow(
      'Undefined, cannot divide by zero',
    );
  });
});
