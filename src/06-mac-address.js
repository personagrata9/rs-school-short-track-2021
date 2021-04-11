/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (n.match(/[0-9A-F-]/g).length !== n.length) {
    return false;
  }
  // for (let pos = 2; pos + 3 < n.length; pos + 3) {
  //   if (n[pos] !== '-') {
  //     return false;
  //   }
  // }
  return true;
}

module.exports = isMAC48Address;
