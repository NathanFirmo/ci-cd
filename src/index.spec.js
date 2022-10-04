const { sum } = require('./index')
const dotenv = require('dotenv')
const { execSync } = require('child_process')

describe('Sum of two numbers', () => {
  it('should be able to sum', () => {
    dotenv.config({ path: process.cwd() + '/.env' })
    expect(sum(2, 2)).toBe(4)
  })

  it('should be able to connect with database', () => {
    execSync(
      `MYSQL_PWD=mysqlroot mysql --host=127.0.0.1 --port=3346 -u root -e "SELECT 1"`
    )
  })
})
