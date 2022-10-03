const { sum } = require('./index')
const dotenv = require('dotenv')

describe('Sum of two numbers', () => {
  it('should be able to sum', () => {
    dotenv.config({ path: process.cwd() + '.env' })
    expect(sum(2, 2)).toBe(4)
  })
})
