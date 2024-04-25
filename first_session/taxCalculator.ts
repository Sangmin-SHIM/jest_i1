export function calculateVAT(amount: number, rate: number): number {
  if (amount < 0) {
    console.log("Amount is negative, it's an error from the caller.");
    throw new Error("Amount is negative");
  }

  return amount * (rate / 100);
}

export function calculateTotal(amount: number, rate: number): number {
  return amount + calculateVAT(amount, rate);
}
