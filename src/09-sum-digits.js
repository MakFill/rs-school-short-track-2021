/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {
  const num = n.toString();
  if (num.length === 1) {
    return +num;
  }
  let acc = 0;
  for (let i = 0; i < num.length; i++) {
    acc += +num[i];
  }
  if (acc < 10) {
    return acc;
  }
  return getSumOfDigits(acc);
}

module.exports = getSumOfDigits;
