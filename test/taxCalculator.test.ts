import { calculateVAT } from "../taxCalculator";

describe("calculateVAT", () => {
  test("calculates 20% VAT correctly", () => {
    expect(calculateVAT(100, 20)).toBe(20);
  });

  test("calculates 5% VAT on a different amount correctly", () => {
    expect(calculateVAT(200, 5)).toBe(10);
  });

  test("returns 0 when the VAT rate is 0", () => {
    expect(calculateVAT(100, 0)).toBe(0);
  });

  test("handles negative amounts correctly", () => {
    // laissé à titre d'exercice !
  });
});
