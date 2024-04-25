export function formatAsUSD(number: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(number);
}

export function getAmountByType(type: string, audience: number): number {
  switch (type) {
    case "tragedy":
      if (audience > 30) {
        return 40000 + 1000 * (audience - 30);
      }
    case "comedy":
      let amount = 30000;
      if (audience > 20) {
        amount += 10000 + 500 * (audience - 20);
      }
      return amount + 300 * audience;
    default:
      throw new Error(`unknown type: ${type}`);
  }
}

export function getVolumnCredits(type: string, audience: number): number {
  let volumeCredits = Math.max(audience - 30, 0);
  if ("comedy" === type) volumeCredits += Math.floor(audience / 5);
  return volumeCredits;
}
