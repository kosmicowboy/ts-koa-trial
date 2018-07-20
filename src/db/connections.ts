const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile.js')[environment]

export = require('knex')(config)
