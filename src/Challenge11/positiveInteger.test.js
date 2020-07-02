import { findSmallestPositiveInteger } from "./positiveInteger";

/**
 * Test Suite
 */
describe("Find the smallest positive integer > 0 that does not occur in array.", () => {
  it("For the input [1, 3, 6, 4, 1, 2], output should be 5", () => {
    const arr = [1, 3, 6, 4, 1, 2];
    const result = findSmallestPositiveInteger(arr);

    expect(result).toBe(5);
  });

  it("For the input [1, 2, 3], output should be 4", () => {
    const arr = [1, 2, 3];
    const result = findSmallestPositiveInteger(arr);

    expect(result).toBe(4);
  });

  it("For the input [−1, −3], output should be 1", () => {
    const arr = [−1, −3];
    const result = findSmallestPositiveInteger(arr);

    expect(result).toBe(1);
  });

  it("For the input [-1, -7, -9, 6, -2, -2, -6, 7, 0, 3, -10, 2, 4, 5, -3, -1, 6, 3, 8, 0, 1, 1, -10, -9, -10], output should be 9", () => {
    const arr = [
      -1,
      -7,
      -9,
      6,
      -2,
      -2,
      -6,
      7,
      0,
      3,
      -10,
      2,
      4,
      5,
      -3,
      -1,
      6,
      3,
      8,
      0,
      1,
      1,
      -10,
      -9,
      -10
    ];
    const result = findSmallestPositiveInteger(arr);

    expect(result).toBe(9);
  });
});
