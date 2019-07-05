const koa = require('koa');
const app = new koa();

//router 처리 분류
require('./server/router_inits')(app);

app.listen(3000, () => {
    console.log('koa server is listening to port 3000');
});