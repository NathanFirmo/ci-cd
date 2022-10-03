const { sum } = require('./index')
import { config } from 'dotenv'

describe('Sum of two numbers', () => {
  it('should be able to sum', () => {
    config({ path: process.cwd() + '.env' })
    expect(sum(2, 2)).toBe(4)
  })
})
