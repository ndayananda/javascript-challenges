/**
 * Challenge 2 - Find All Longest Strings
 * Given an array of string, return another array containing all the longest strings
 *
 * Eaxample:
 * For inputArray=["aba", "aa", "ad", "vcd", "aba", "a"]
 * the output should be all longest strings ["aba", "vcd", "aba"]
 */
export const allLongestStrings = arr => {
  return arr.reduce(
    (acc, curr) =>
      curr.length > acc[0].length
        ? [curr]
        : curr.length === acc[0].length
        ? [...acc, curr]
        : acc,
    [""]
  );
};
