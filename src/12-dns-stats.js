/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  domains.forEach((dom) => arr.push(dom.split('.').reverse()));
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    const newArr = [];
    let str = '';
    for (let k = 0; k < arr[i].length; k++) {
      str += `.${arr[i][k]}`;
      newArr.push(str);
    }
    arr2.push(newArr);
  }

  const arr3 = Array.from(new Set(arr2.flat()));

  const obj = {};

  arr3.forEach((a) => {
    obj[a] = 0;
  });

  for (let i = 0; i < arr2.length; i++) {
    for (let k = 0; k < arr2[i].length; k++) {
      obj[arr2[i][k]]++;
    }
  }

  return obj;
}

module.exports = getDNSStats;
