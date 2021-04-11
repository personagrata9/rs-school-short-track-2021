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
  for (let pos = 0; pos < n.toString().length; pos++) {
    arr.push(+n.toString().replace(n.toString()[pos], ''));
  }
  return Math.max(...arr);
}

module.exports = deleteDigit;
