const { userService } = require('./../../services');
const { HttpMethods, HttpStatus } = require('./../../models');
const { authenticateRequest } = require('../../utils');

const handler = async (req, res) => {
  let response = null;
  try {
    const [, , , id] = req.url.split('/');
    switch (req.method) {
      case HttpMethods.GET:
        response = id ? userService.get(id) : userService.getAll(req.query);
        break;
      case HttpMethods.POST:
        req = await authenticateRequest(req, res);
        response = userService.post(req.body);
        break;
      case HttpMethods.PATCH:
        response = userService.patch(id);
        break;
      case HttpMethods.DELETE:
        response = userService.delete(id);
        break;
      default:
        response = {
          status: HttpStatus.BAD_REQUEST,
          result: null,
          message: `Method not supported`
        };
    }
  } catch ({ status, message }) {
    response = {
      status: status || HttpStatus.BAD_GATEWAY,
      result: null,
      message: message || `Something went wrong`
    };
  } finally {
    return response;
  }
};

module.exports = {
  handler
};
