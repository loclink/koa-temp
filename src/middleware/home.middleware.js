const { errorTypes } = require('../error/error-types');
class HomeMiddleware {
  async verifyHomeParams(ctx, next) {
    console.log(`
      You have sent "${ctx.request.method}" request.
      url: "${ctx.request.url}"
    `);
    if (parseInt(ctx.request.query.id) !== 1 && ctx.request.method === 'GET') {
      const error = new Error(errorTypes.CONTENT_DOES_NOT_EXIST);
      return ctx.app.emit('error', error, ctx);
    }
    await next();
  }
}

module.exports = new HomeMiddleware();
