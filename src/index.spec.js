const { sum } = require('./index')

describe('Sum of two numbers', () => {
  it('should be able to sum', () => {
    console.log({
      env: process.env
    })
    expect(sum(2, 2)).toBe(4)
  })
})
