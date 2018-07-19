"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require("knex");
const config = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'kgd',
        // password: '',
        database: 'ts_koa_trial'
    }
};
const db = knex(config);
// const message = { id: 1, message: 'Hey there' }
// function addMessage (message) {
//   return db('example').select('*')
// }
// const messages = db('example').insert({ id: 1, message: JSON.stringify(['Hey there']) }).returning('*').toString()
// console.log(messages)
// db('example').insert({ id: 1, message: 'Hey there' }).exec((err, result) => {
//   console.log('err ', err)
//   console.log('result ', result)
// })
// async function getAll() {
//   return db.select('*').from('exmaple')
// }
// (async function () {
//   const res = await getAll()
//   console.log('RESPONSE OF ALL THE THINGs ', res)
// })()
async function insertData() {
    // const result = await db('example').insert({ id: 2, message: JSON.stringify('Hey there') }).returning('*')
    const result = await db.select('*').from('example')
        .then((msg) => {
        console.log(msg);
    })
        .finally(() => {
        db.destroy();
    });
    return result;
}
const getVideos = () => {
    return db.select('*').from('videos');
};
const getVideo = (id) => {
    return db.select('*').where({ id }).from('videos');
};
const insertVideo = (video) => {
    return db.insert(video).into('videos');
};
//# sourceMappingURL=database.js.map