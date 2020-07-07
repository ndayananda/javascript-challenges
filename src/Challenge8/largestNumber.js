/**
 * Challenge 8 - Find Largest Number
 * Return the largest number of n
 *
 * Example: For n = 2, the output should be largestNumber(n) = 99
 */

export const largestNumber = (num = 1) => [...Array(num).keys()].reduce(acc => parseInt(`9${acc}`), '');
