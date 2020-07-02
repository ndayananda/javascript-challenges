import { allLongestStrings } from "./longestString";

/**
 * Test Suite
 */
describe("allLongestStrings()", () => {
  it("returns all longest strings", () => {
    const strings = ["aba", "aa", "ad", "vcd", "aba", "a"];
    const result = allLongestStrings(strings);

    expect(result).toEqual(["aba", "vcd", "aba"]);
  });
});
