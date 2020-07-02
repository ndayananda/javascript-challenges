import { add } from "./add";

/**
 * Test Suite
 */
describe("add()", () => {
  it("adds two numbers", () => {
    const num1 = 1;
    const num2 = 2;
    const result = add(num1, num2);

    expect(result).toBe(3);
  });

  it("adds any ammount of numbers", () => {
    const num1 = 1;
    const num2 = 2;
    const num3 = 3;
    const result = add(num1, num2, num3);

    expect(result).toBe(6);
  });
});
