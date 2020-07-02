import { alternatingSums } from "./alternatingSums";

/**
 * Test Suite
 */
describe("alternatingSums()", () => {
  it("returns alternating sums of even and odd", () => {
    const nums = [50, 60, 60, 45, 70];
    const result = alternatingSums(nums);

    expect(result).toEqual([180, 105]);
  });
});
