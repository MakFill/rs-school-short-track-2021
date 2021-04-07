/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr1 = names.slice();
  const arr2 = [];
  const newArr = [];

  function findTwins(arr, t) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === t) {
        num++;
      }
    }
    return num;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      arr2.push(arr1[i]);
    } else {
      arr2.push(`${arr1[i]}(${findTwins(newArr, arr1[i])})`);
      newArr.push(`${arr1[i]}(${findTwins(newArr, arr1[i])})`);
    }
    newArr.push(arr1[i]);
  }

  return arr2;
}

module.exports = renameFiles;
