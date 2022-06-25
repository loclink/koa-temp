const Router = require('koa-router');
const homeRouter = Router({ prefix: '/home' });
const { verifyHomeParams } = require('../middleware/home.middleware');
const { homeInfo } = require('../controller/home.controller');
homeRouter.get('/', verifyHomeParams, homeInfo);
homeRouter.post('/', verifyHomeParams, homeInfo)
module.exports = homeRouter;
