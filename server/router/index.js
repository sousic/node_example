module.exports.Setup = function(router) {
    router.get('/', (ctx, next) => {
        return ctx.render('index', {
            title:'홈',
            msg:'여기는 홈페이지!!!'
        });
    });
}