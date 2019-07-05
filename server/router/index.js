module.exports.Setup = function(router) {
    // router.get('/', (ctx, next) => {
    //     ctx.body = '루트 페이지 입니다.';
    // });
    router.get('/', function *() {
        yield this.render('index', 
            {title:'test'},
            {body:'첫 페이지닷!!!'}
            );
    });
}