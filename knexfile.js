// Update with your config settings.
const path = require('path')

const BASE_PATH = path.join(__dirname, 'src', 'db')


module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'kgd',
      // password: '',
      database: 'ts_koa_trial'
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
}
