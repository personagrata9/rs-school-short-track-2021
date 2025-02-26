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
  const res = [names[0]];
  if (names.length === 0) {
    return [];
  }
  for (let i = 1; i < names.length; i++) {
    let k;
    if (res.includes(names[i])) {
      const n = names.slice(0, i).filter((el) => el === names[i]).length;
      k = n > 0 ? n : 1;
      res.push([names[i], '(', k, ')'].join(''));
    } else {
      res.push(names[i]);
    }
  }
  return res;
}

module.exports = renameFiles;
