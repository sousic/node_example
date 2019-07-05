module.exports.Setup = function(router) {
    router.get('/sub', (ctx, next) => {
        ctx.body = '서브 페이지 입니다.';
    });
}