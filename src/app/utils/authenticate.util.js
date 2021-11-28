const authenticateRequest = async (req, res) => {
  try {
    if (req.headers && req.headers.token) {
      req = {
        ...req,
        user: JSON.parse(Buffer.from(req.headers.token, 'base64').toString())
      };
    }

    return req;
  } catch (ex) {
    throw new Error(ex.message);
  }
};

module.exports = {
  authenticateRequest
};
