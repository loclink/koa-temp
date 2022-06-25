const fs = require('fs');
const autoRegisterRouter = app => {
  if (!app) return;
  fs.readdirSync(__dirname)
    .filter(file => file !== 'index.js')
    .forEach(routerFile => {
      const router = require(`./${routerFile}`);
      app.use(router.routes());
      app.use(router.allowedMethods());
    });
};

module.exports = autoRegisterRouter;
