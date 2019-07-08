const koa = require('koa');
//const hbs = require('koa-views-handlebars');
const hbs = require('koa-hbs');
const views = require('koa-views');
const path = require('path');
const serve = require('koa-static');
const app = new koa();

app.use(serve('./client/'));

//handlebars confog
app.use(hbs.middleware({
    viewPath:path.resolve(__dirname, '../client/views'),
    partialsPath:path.resolve(__dirname, '../client/views/partials/'),
    layoutsPath:path.resolve(__dirname, '../client/views/partials/'),
    defaultLayout:'layout',
}));

//router 처리 분류
require('../server/router_inits')(app);

app.listen(3000, () => {
    console.log('koa server is listening to port 3000');
});

app.on('error', function(err) {
    if(process.env.NODE_ENV != 'test') {
        console.log('send error %s to th cloud', err.message);
        console.log(err);
    }
});