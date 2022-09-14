const { sum } = require('./index')

describe('Sum of two numbers', () => {
  it('should be able to sum', () => {
    expect(sum(2, 2)).toBe(4)
  })
  it.todo('Add other tests')
})
