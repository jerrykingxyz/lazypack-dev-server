const Koa = require('koa');

const app = new Koa();

app.use(async function (ctx, next) {
  ctx.body = '123'
});

app.listen('3000', function () {
  console.log('lazypack dev server listen at 3000 port')
});
