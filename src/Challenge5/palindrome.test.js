import { caseInsensitivePalindrome } from "./palindrome";

/**
 * Test Suite
 */
describe("caseInsensitivePalindrome()", () => {
  it("returns true for a case insensitive palindrome", () => {
    const str = "AaBaa";
    const result = caseInsensitivePalindrome(str);

    expect(result).toBe(true);
  });

  it("returns false when not a case insensitive palindrome", () => {
    const str = "abac";
    const result = caseInsensitivePalindrome(str);

    expect(result).toBe(false);
  });
});
