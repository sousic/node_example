const Router = require('koa-router');

module.exports = function(app) {    
    const router = new Router()
    require('./router/index').Setup(router);
    require('./router/sub').Setup(router);

    app.use(router.routes());
    app.use(router.allowedMethods());
};