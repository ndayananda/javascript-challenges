import { arrayReplace } from "./arrayReplace";

/**
 * Test Suite
 */
describe("arrayReplace()", () => {
  it("returns an array of integers with all the occurrences of elemToReplace, replaced with substitutionElem.", () => {
    const array = [1, 2, 1];
    const elemToReplace = 1;
    const substitutionElem = 3;

    const result = arrayReplace(array, elemToReplace, substitutionElem);

    expect(result).toEqual([3, 2, 3]);
  });

  it("returns an array of strings with all the occurrences of elemToReplace, replaced with substitutionElem.", () => {
    const array = ["Jhon", "Jane Doe", "Jhon", "Jordi Doe", "john"];
    const elemToReplace = "Jhon";
    const substitutionElem = "Jhon Doe";

    const result = arrayReplace(array, elemToReplace, substitutionElem);

    expect(result).toEqual([
      "Jhon Doe",
      "Jane Doe",
      "Jhon Doe",
      "Jordi Doe",
      "john"
    ]);
  });
});
