const { projectService } = require('./../../services');
const { HttpMethods, HttpStatus } = require('./../../models');

const handler = async (req, res) => {
  let response = null;
  const [, , , id] = req.url.split('/');
  switch (req.method) {
    case HttpMethods.GET:
      response = id ? projectService.get(id) : projectService.getAll(req.query);
      break;
    case HttpMethods.POST:
      response = projectService.post(req.body);
      break;
    case HttpMethods.PATCH:
      response = projectService.patch(id);
      break;
    case HttpMethods.DELETE:
      response = projectService.delete(id);
      break;
    default:
      response = {
        status: HttpStatus.BAD_REQUEST,
        result: null,
        message: `Method not supported`
      };
  }
  return response;
};

module.exports = {
  handler
};
