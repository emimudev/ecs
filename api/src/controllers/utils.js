
function isDuplicated(error) {
  const { code } = error
  return error && code === 11000
}

module.exports = {
  isDuplicated
}
