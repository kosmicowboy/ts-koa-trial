import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParser from 'koa-bodyparser'
import db = require('./db/connections')
import * as video from './video'
import { Video } from './models'

const PORT = 3000

const app = new Koa()
const router = new Router()

app.use(bodyParser()) // Must be before router.routes()
app.use(router.routes())

router.get('/videos', async ctx => {
  const videos = await video.getVideos(db)
  ctx.body = videos
})

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

module.exports = server
