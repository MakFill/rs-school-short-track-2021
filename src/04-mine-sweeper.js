/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const m = matrix;
  const newM = [];

  for (let i = 0; i < m.length; i++) {
    const arrM = [];
    for (let k = 0; k < m[i].length; k++) {
      arrM.push(0);
    }
    newM.push(arrM);
  }

  for (let i = 0; i < m.length; i++) {
    for (let k = 0; k < m[i].length; k++) {
      if (k < m[i].length && m[i][k + 1] === true) {
        newM[i][k]++;
      }
      if (k > 0 && m[i][k - 1] === true) {
        newM[i][k]++;
      }
      if (i > 0 && m[i - 1][k] === true) {
        newM[i][k]++;
      }
      if (i < m.length - 1 && m[i + 1][k] === true) {
        newM[i][k]++;
      }
      if (i < m.length - 1 && k < m[i].length - 1 && m[i + 1][k + 1] === true) {
        newM[i][k]++;
      }
      if (i < m.length - 1 && k > 0 && m[i + 1][k - 1] === true) {
        newM[i][k]++;
      }
      if (i > 0 && k < m[i].length - 1 && m[i - 1][k + 1] === true) {
        newM[i][k]++;
      }
      if (i > 0 && k > 0 && m[i - 1][k - 1] === true) {
        newM[i][k]++;
      }
    }
  }
  return newM;
}

module.exports = minesweeper;
