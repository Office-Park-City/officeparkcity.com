const winston = require('winston');

global.logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: 'node.log' })
  ]
});

global.asyncMiddleware = (middleware_function) => (req, res, next) => {

  return Promise.resolve(middleware_function(req, res, next)).catch(next);
};
