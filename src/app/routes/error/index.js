const { HttpStatus } = require('./../../models');

const handler = async (req, res) => {
  let response = null;
  const [, , , status] = req.url.split('/');
  response = {
    status: Number(status) || HttpStatus.BAD_REQUEST,
    result: null,
    message: `Route not found`
  };

  return response;
};

module.exports = {
  handler
};
