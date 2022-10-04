const { execSync } = require('child_process')

const waitForDb = async (currentTry = 5) => {
  if (currentTry === 0)
    throw new Error(
      'Database at 127.0.0.1:3346 is not healthy, for this reason this setup will teardown.'
    )
  try {
    console.log('Checking database healthy. Remaining tries:', currentTry--)
    execSync(
      `MYSQL_PWD=mysqlroot mysql --host=127.0.0.1 --port=3346 -u root -e "SELECT 1"`
    )
    console.log('Database is healthy')
  } catch {
    console.log('Waiting five seconds for database startup')
    await new Promise((res) => setTimeout(res, 5000))
    await waitForDb(currentTry)
  }
}

module.exports = async () => {
  await waitForDb()
}
