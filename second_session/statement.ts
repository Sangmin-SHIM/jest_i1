import { formatAsUSD, getAmountByType, getVolumnCredits } from "./utils";

export function statement(invoice: any, plays: any) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    let thisAmount = 0;

    thisAmount = getAmountByType(play.type, perf.audience);

    // add volume credits
    volumeCredits += getVolumnCredits(play.type, perf.audience);

    // print line for this order
    result += ` ${play.name}: ${formatAsUSD(thisAmount / 100)} (${
      perf.audience
    } seats)\n`;

    totalAmount += thisAmount;
  }

  result += `Amount owed is ${formatAsUSD(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;
}
