const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "hello koa2";
});

app.listen(3000);

console.log("服务器开启: http://localhost:3000/");
