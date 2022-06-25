const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const autoRegisterRouter = require('../router');
const handleError = require('../error/handle-error');

const app = new Koa();

app.use(bodyParser());
autoRegisterRouter(app);
app.on('error', handleError);

module.exports = app;
