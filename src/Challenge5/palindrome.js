/**
 * Challenge 5 - Case Insensitive Palindrome
 * Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.
 *
 * Example •
 * For inputString = "AaBaa", the output should be isCaselnsensitivePalindrome(inputString) = true.
 * "aabaa" is a palindrome as well as "AABAA", "aaBaa", etc •
 * For inputString = "abac", the output should be isCaselnsensitivePalindrome(inputString) = false.
 * All the strings which can be obtained via changing case of some group of letters, i.e. "abac", "Abac", "aBAc" and 13 more, are not palindromes.
 */

export const caseInsensitivePalindrome = str =>
  str.toLowerCase() ===
  [...str]
    .reverse()
    .join("")
    .toLowerCase();
