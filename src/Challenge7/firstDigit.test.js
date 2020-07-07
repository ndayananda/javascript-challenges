import { firstDigit } from './firstDigit';

/**
* Test Suite
*/
describe('firstDigit()', () => {
  it('return the first digit in a string', () => {
      const str = "var_qwO_2_Int3";
      const result = firstDigit(str);

      expect(result).toBe('2');
  });

  it('return digit not found if there is no digit', () => {
    const str = "var_qw-rts-sdfO-asd";
    const result = firstDigit(str);

    expect(result).toBe('No digit found');
  });

  it('will throw an error if the string in not provided', () => {
    expect(() => firstDigit()).toThrowError('Provide a string to find the digit');
  });
});