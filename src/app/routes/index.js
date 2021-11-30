const { HttpStatus } = require('../models');
const { loggerService } = require('../services');

const { handler: projectsHandler } = require('./projects');
const { handler: usersHandler } = require('./users');
const { handler: errorHandler } = require('./error');

const requestHandler = async (req, res) => {
  let response = null;
  try {
    switch (true) {
      case !req.url.startsWith('/api'):
        response = {
          status: HttpStatus.NOT_FOUND,
          result: null,
          message: `Route doesn't exist`
        };
        break;
      case req.url.includes('users-service'):
        response = await usersHandler(req, res);
        break;
      case req.url.includes('projects-service'):
        response = await projectsHandler(req, res);
        break;
      default:
        response = await errorHandler(req, res);
    }
  } catch (ex) {
    const { status, message } = ex;
    response = {
      status: status || HttpStatus.BAD_GATEWAY,
      result: null,
      message: message || `Something went wrong`
    };
  } finally {
    loggerService.generateLog(response);
    res.writeHead(response.status, { 'Content-type': 'application/json' });
    return res.end(JSON.stringify(response));
  }
};

module.exports = {
  requestHandler
};
