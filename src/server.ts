import * as Koa from 'koa'
import * as Router from 'koa-router'
import db = require('./db/connections')
import * as video from './video'

const PORT = 3000

const app = new Koa()
const router = new Router()

app.use(router.routes())

router.get('/videos', async ctx => {
  const videos = await video.getVideos(db)
  ctx.body = videos
})

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

module.exports = server
