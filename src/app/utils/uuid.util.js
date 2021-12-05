const { v4: uuid } = require('uuid');

const getUniqueId = () => uuid();

module.exports = {
  getUniqueId
};
