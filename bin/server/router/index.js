module.exports.Setup = function(router) {
    router.get('/', (ctx, next) => {
        ctx.body = '루트 페이지 입니다.';
    });
}