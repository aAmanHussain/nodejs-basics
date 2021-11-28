const HttpStatus = {
  OK: 200,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  BAD_GATEWAY: 503
};

const HttpMethods = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

module.exports = {
  HttpStatus,
  HttpMethods
};
