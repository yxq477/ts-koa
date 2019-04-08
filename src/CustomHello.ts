import { Context, Response } from 'koa';
export const customHello = async (ctx: Context) => {
  ctx.body = `hello ${ctx.query.name}`
}