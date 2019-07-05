const koa = require('koa');
const hbs = require('koa-views-handlebars');
const app = new koa();

//router 처리 분류
require('./server/router_inits')(app);

//handlebars confog
app.use(hbs(__dirname, {
    helperDirs: __dirname + '/helpers',
    partialDirs: __dirname + '/client/views',
    extensions:'hbs',
    debug:true
}));

app.listen(3000, () => {
    console.log('koa server is listening to port 3000');
});

app.on('error', function(err) {
    if(process.env.NODE_ENV != 'test') {
        console.log('send error %s to th cloud', err.message);
        console.log(err);
    }
});