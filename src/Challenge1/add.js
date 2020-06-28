/**
 * Challenge 1
 * 1. Write a functions that returns sum of 2 numbers
 * 2. Write a function that returns sum of all the numbers regardless of the # of prarams
 *
 * Eaxample:
 * For param1 = 1, param2 = 2, the output should be add(param1, param2) = 3
 *
 */

export const add = (...args) => {
  return [...args].reduce((acc, curr) => acc + curr, 0);
};
