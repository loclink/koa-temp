const { errorTypes } = require('./error-types');

const handleError = (error, ctx) => {
  let code, message;
  switch (error.message) {
    case errorTypes.CONTENT_DOES_NOT_EXIST:
      code = 400;
      message = '内容不存在';
      break;
    default:
      code = 500;
      message = 'Server Error';
      break;
  }
  ctx.body = {
    code,
    message,
  };
};
module.exports = handleError;
