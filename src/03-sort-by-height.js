/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const res = [];
  const arrCutSort = arr.filter((a) => a !== -1).sort((a, b) => a - b);
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      res.push(arr[i]);
    } else {
      res.push(arrCutSort[j]);
      j++;
    }
  }
  return res;
}

module.exports = sortByHeight;
