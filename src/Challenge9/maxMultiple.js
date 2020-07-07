/**
 * Challenge 9 - Max Multiple
 * Given a divisor and a bound, find the largest integer N such that:
 * 1> N is divisible by divisor.
 * 2> N is less than or equal to bound.
 * 3> N is greater than 0.
 * It is guaranteed that such a number exists.
 *
 * Example:
 * For divisor = 3 and bound = 10, the output should be maxMultiple(divisor, bound) = 9.
 * The largest integer divisible by 3 and not larger than 10 is 9.
 */

const divisorInvalid = () => {throw new Error('Divisor can not be empty')};
const boundInvalid = () => {throw new Error('Bound can not be empty')};

export const maxMultiple = (divisor = divisorInvalid(), bound = boundInvalid()) => {
  if(!divisor || !bound) throw new Error('Value should be a number & greater than 0');

  return bound - bound % divisor;
};
