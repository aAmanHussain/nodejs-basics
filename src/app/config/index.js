const applicationConfig = require('./application.config');
const dbConfig = require('./db.config');
const miscellaneousConfig = require('./miscellaneous.config');

module.exports = {
  ...applicationConfig,
  ...dbConfig,
  ...miscellaneousConfig
};
