import { factorialNumber } from './factorialNumber';

/**
* Test Suite
*/
describe('factorialNumber()', () => {
  it('returns factorial of number param', () => {
      const num = 5;
      const result = factorialNumber(num);

      expect(result).toBe(120);
  });

  it('will throw error if the integer is not passed', () => {
    expect(() => factorialNumber()).toThrowError('Provide an integer to find the factorial');
  });

  it('will throw error if the integer is not a number', () => {
    expect(() => factorialNumber('test5')).toThrowError('Provide a valid integer');
  });

  it('will throw error if number is null', () => {
    expect(() => factorialNumber(null)).toThrowError('Provide a valid integer');
  });
});