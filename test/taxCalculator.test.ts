import { calculateVAT } from "../taxCalculator";

describe("--- calculateVAT ---", () => {
  test("(1) calculates 20% VAT correctly", () => {
    expect(calculateVAT(100, 20)).toBe(20);
  });

  test("(2) calculates 5% VAT on a different amount correctly", () => {
    expect(calculateVAT(200, 5)).toBe(10);
  });

  test("(3) returns 0 when the VAT rate is 0", () => {
    expect(calculateVAT(100, 0)).toBe(0);
  });

  test("(4) handles negative amounts correctly", () => {
    expect(calculateVAT(-100, 20)).toBe(-20);
    expect(calculateVAT(-100, 20)).not.toBe(20);
  });
});
