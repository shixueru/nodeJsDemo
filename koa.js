const koa = require('koa');

const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new koa();

/**
 * 
 */
// app.use(async ctx => {
//     ctx.body = 'hello sxr';
// });
// app.listen(3000);

/**
 * await next()
 */
// app.use(async (ctx, next) => {
//     await next();
//     const rt = ctx.response.get('X-Response-Time');
//     console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });
// // X-Response-Time
// app.use(async (ctx, next) => {
//     const start = Date.now();
//     // 原因是koa把很多async函数组成一个处理链，每个async函数都可以做一些自己的事情，然后用await next()来调用下一个async函数。我们把每个async函数称为middleware，这些middleware可以组合起来，完成很多有用的功能
//     await next();
//     const ms = Date.now() - start;
//     ctx.set('X-Response-Time', `${ms}ms`);
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>hello sxr!</h1>';
// })

/**
 * koa-router
 */
app.use(async (ctx, next) => {
    console.log(`process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
})
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>hello ${name}</h1>`;
})
router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;
})
router.post('/signin', async (ctx, next) => {
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});
app.use(bodyParser());
app.use(router.routes());



app.listen(4000);
console.log('server running at localhost:4000');