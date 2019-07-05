const koa = require('koa');
const hbs = require('koa-views-handlebars');
const views = require('koa-views');
const path = require('path');
const app = new koa();

//handlebars confog
app.use(views(
    path.resolve(__dirname, '../client/views'), {
        map : {
            hbs : 'handlebars',
        },
        extension : 'hbs',
        options: {
            partials: {
                Head: './partials/head',
                Header: './partials/header',
            }
        },
    },
));

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