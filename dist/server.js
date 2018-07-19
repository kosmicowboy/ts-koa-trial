"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const PORT = 3000;
// app.use(ctx => {
//   ctx.body = {
//     status: 'success',
//     message: 'Hello, world!'
//   }
// })~
const router = new Router();
app.use(router.routes());
router.get('/', ctx => {
    ctx.body = {
        status: 'success',
        message: 'testing'
    };
});
const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
module.exports = server;
//# sourceMappingURL=server.js.map