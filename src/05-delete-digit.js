/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  const num = n.toString().split('');
  for (let i = 0; i < num.length; i++) {
    arr.push(num.slice());
    arr[i].splice(i, 1);
    arr[i] = +arr[i].join('');
  }

  return arr.sort((a, b) => a - b)[arr.length - 1];
}

module.exports = deleteDigit;
