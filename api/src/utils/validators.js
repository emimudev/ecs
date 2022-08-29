/**
 * Checks if an object has a null or undefined property.
 * Returns true if props does not have properties or
 * has one or more properties null or undefined, otherwise returns false
 * @param {any[]} props
 */
function hasEmpty(props) {
  if (Object.values(props).length === 0) {
    return true
  }
  for (const it of props) {
    if (it === null || it === undefined) {
      return true
    }
  }
  return false
}

module.exports = {
  hasEmpty
}
