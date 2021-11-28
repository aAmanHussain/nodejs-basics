const { parse } = require('url');

const getRequestQuery = req => {
  try {
    const { query } = parse(req.url, true);

    return query;
  } catch (ex) {
  } finally {
    return req;
  }
};

const transformRequest = async req => {
  try {
    const query = getRequestQuery(req);
    const requestPromise = new Promise((resolve, reject) => {
      try {
        let body = ``;
        req.on('data', part => {
          body += part;
        });
        req.on('end', () => {
          body = body ? JSON.parse(body) : null;
          resolve({ ...req, body, query });
        });
      } catch (ex) {
        return reject(req);
      }
    });

    return requestPromise;
  } catch (ex) {
    console.error(`Catch in Transform Request `, ex);
  }
};

module.exports = {
  transformRequest
};
