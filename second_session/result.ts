import statement from "./statement";
import invoices from "../constant/invoices.json";
import plays from "../constant/plays.json";

const result = statement(invoices[0], plays);

console.log(result);
