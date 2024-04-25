import { statement } from "../second_session/statement";
import invoices from "../constant/invoices.json";
import plays from "../constant/plays.json";

const expectedOutput = `Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;

describe("--- statement ---", () => {
  test("(1) result", () => {
    const bicCoInvoice = invoices[0];
    const bicCoEmployees = plays;

    const result = statement(bicCoInvoice, bicCoEmployees);

    expect(result).toBe(expectedOutput);
  });
});
