/**
 * Checks if an array has a null or undefined element.
 * Returns true if array is empty or has any element null or undefined, otherwise returns false
 * @param {any[]} props
 */
function hasEmpty(props) {
  if (props.length === 0) {
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
