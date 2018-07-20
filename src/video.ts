import * as knex from 'knex'

export interface Video {
  id?: number,
  guid: string
}

export const getVideos = (db: knex) => {
  return db.select('*').from('videos')
}

export const getVideo = (db: knex, id: number) => {
  return db.select('*').where({ id }).from('videos')
}

export const insertVideo = (db: knex, video: Video) => {
  return db.insert(video).into('videos')
}
