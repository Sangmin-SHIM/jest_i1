import { calculateVAT, calculateTotal } from "../first_session/taxCalculator";

describe("--- calculateVAT ---", () => {
  test("(1) calculates 20% VAT correctly", () => {
    expect(calculateVAT(100, 20)).toBe(20);
  });

  test("(2) calculates 5% VAT on a different amount correctly", () => {
    expect(calculateVAT(200, 5)).toBe(10);
    expect(calculateVAT(200, 10)).toBe(20);
  });

  test("(3) returns 0 when the VAT rate is 0", () => {
    expect(calculateVAT(100, 0)).toBe(0);
  });

  test("(4) handles negative amounts correctly. amount is negative", () => {
    expect(() => calculateVAT(-100, 20)).toThrow("Amount is negative");
  });
});

describe("--- calculateTotal ---", () => {
  test("(1) calculates total correctly", () => {
    expect(calculateTotal(100, 20)).toBe(120);
  });
});
