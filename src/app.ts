import { Context } from 'koa'
const Koa = require('koa');
const app = new Koa();
import { customHello } from './CustomHello'

app.use(async (ctx: Context) => {
  if (ctx.query.name) {
    await customHello(ctx)
  } else {
    ctx.body = 'Hello Koa';
  }
});

app.listen(3000);