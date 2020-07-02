/**
 * Challenge 11
 * Write a function that, given an array of N integers,
 * returns the smallest positive integer (greater than 0) that does not occur in array.
 *
 * Example,
 * given A = [1, 3, 6, 4, 1, 2], the function should return 5.
 * Given A = [1, 2, 3], the function should return 4.
 * Given A = [−1, −3], the function should return 1.
 *
 * Write an efficient algorithm for the following assumptions:
 * N is an integer within the range [1..100,000];
 * each element of array A is an integer within the range [−1,000,000..1,000,000]
 */

export const findSmallestPositiveInteger = arr => {
  arr.sort((a, b) => a - b);
  return arr.reduce((acc, curr) => (acc === curr ? acc + 1 : acc), 1);
};
