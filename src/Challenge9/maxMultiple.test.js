import { maxMultiple } from './maxMultiple';

/**
* Test Suite
*/
describe('maxMultiple()', () => {
  it('returns largest integer up to boundary', () => {
      const divisor = 3;
      const bound = 10;
      const result = maxMultiple(divisor, bound);

      expect(result).toBe(9);
  });

  it('will throw error if the divisor is empty', () => {
    expect(() => maxMultiple()).toThrowError('Divisor can not be empty');
  });

  it('will throw error if the bound is empty', () => {
    expect(() => maxMultiple(18)).toThrowError('Bound can not be empty');
  });

  it('will throw error if divisor is 0', () => {
    expect(() => maxMultiple(0, 100)).toThrowError('Value should be a number & greater than 0');
  });

  it('will throw error if bound is 0', () => {
    expect(() => maxMultiple(18, 0)).toThrowError('Value should be a number & greater than 0');
  });

  it('result is less than bound', () => {
    expect(maxMultiple(18, 100)).toBeLessThan(100);
  });

  it('result is less than or equal to bound', () => {
    expect(maxMultiple(2, 100)).toBeLessThanOrEqual(100);
  });
});