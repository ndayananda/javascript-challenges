import { largestNumber } from './largestNumber';

/**
* Test Suite
*/
describe('largestNumber()', () => {
  it('returns largest positive integer possible for digit count', () => {
      const num = 2;
      const result = largestNumber(num);

      expect(result).toBe(99);
  });

  it('returns largest positive integer possible for default number', () => {
    const result = largestNumber();
    expect(result).toBe(9);
  });
});