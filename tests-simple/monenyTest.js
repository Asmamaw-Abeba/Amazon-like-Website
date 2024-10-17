import { formatCurrency } from "../scripts/utils/moneny.js";

console.log('test suite: formatCurrency');
// basic test case
console.log('convert cents in to dollars');
if (formatCurrency(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('failed');
}

// Edge cases
console.log('works with 0');
if (formatCurrency(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('round up the nearest cent');
if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed');
}