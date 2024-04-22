export function calculateVAT(amount: number, rate: number): number {
  return amount * (rate / 100);
}
