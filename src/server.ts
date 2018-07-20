import * as Koa from 'koa'
import * as Router from 'koa-router'
import db = require('./db/connections')
import * as video from './video'

const app = new Koa()
const PORT = 3000

// app.use(ctx => {
//   ctx.body = {
//     status: 'success',
//     message: 'Hello, world!'
//   }
// })~

const router = new Router()

app.use(router.routes())

router.get('/', ctx => {
  ctx.body = {
    status: 'success',
    message: 'testing'
  }
})

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

module.exports = server
