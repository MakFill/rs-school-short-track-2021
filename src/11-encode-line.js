/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] && str[i] === str[i + 1]) {
      counter++;
    } else {
      if (counter > 1) {
        newStr += counter + str[i];
      } else {
        newStr += str[i];
      }
      counter = 1;
    }
  }

  return newStr;
}

module.exports = encodeLine;
