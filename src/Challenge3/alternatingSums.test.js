import { alternatingSums } from "./alternatingSums";

/**
 * Test Suite
 */
describe("alternatingSums()", () => {
  it("returns alternating sums of even and odd", () => {
    // arrange
    const nums = [50, 60, 60, 45, 70];

    // act
    const result = alternatingSums(nums);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual([180, 105]);
  });
});
