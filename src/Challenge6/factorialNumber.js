/**
 * Challenge 6 - Factorial Number
 * Return the factorial of the provided integer.
 * If the integer is represented with the letter n,
 * a factorial is the product of all positive integers less than or equal to n.
 * Factorials are often represented with the shorthand notation n!
 *
 * Example: 5! = 1 * 2 * 3 *4* 5 = 120
 */

const isInvalid = () => {throw new Error('Provide an integer to find the factorial')}

export const factorialNumber = (num = isInvalid()) => {
  if(!num || (num && isNaN(num))) throw new Error('Provide a valid integer');

  return Array.from({length: num}, (value, index) => ++index).reduce((acc, curr) => acc * curr, 1);
};
