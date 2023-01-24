module.exports = {
  sum: (a, b) => {
    
    if (process.env.SOME_VAR !== 'teste' || process.env.SOME_VAR2 !== 'teste') throw new Error('Missing env var')
    return  a + b
  }
}
