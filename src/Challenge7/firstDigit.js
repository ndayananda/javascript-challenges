/**
 * Challenge 7 - Find First Digit
 * Find the leftmost digit that occurs in a given string.
 *
 * Example
 * 1> For inputString = "var_1_Int", the output should be firstDigit(inputString) = '1';
 * 2> For inputString = "q2q-q", the output should be firstDigit(inputString) = '2';
 * 3> For inputString = "Oss", the output should be firstDigit(inputString) = '0'
 */

const isInvalid = () => {throw new Error('Provide a string to find the digit')}

export const firstDigit = (str = isInvalid()) => [...str].find(char => !isNaN(char)) || 'No digit found';
