const applicationConfig = require('./application.config');
const dbConfig = require('./db.config');

module.exports = {
  ...applicationConfig,
  ...dbConfig
};
