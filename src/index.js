// Comment
module.exports = {
  sum: (a, b) => {
    if (process.env.SOME_VAR !== 'teste') throw new Error('Missing env var')
    return  a + b
  }
}
