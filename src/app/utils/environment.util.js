const {
  PORT,
  HOSTNAME,
  SQL_HOST,
  SQL_PORT,
  SQL_DB_NAME,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DB_NAME,
  SALT_ROUNDS,
  SECRET
} = require('../config');

const initEnvironment = () => {
  try {
    process.env['PORT'] = process.env['PORT'] || PORT;
    process.env['HOSTNAME'] = process.env['HOSTNAME'] || HOSTNAME;
    process.env['SQL_HOST'] = process.env['SQL_HOST'] || SQL_HOST;
    process.env['SQL_PORT'] = process.env['SQL_PORT'] || SQL_PORT;
    process.env['SQL_DB_NAME'] = process.env['SQL_DB_NAME'] || SQL_DB_NAME;
    process.env['MONGO_HOST'] = process.env['MONGO_HOST'] || MONGO_HOST;
    process.env['MONGO_PORT'] = process.env['MONGO_PORT'] || MONGO_PORT;
    process.env['MONGO_DB_NAME'] =
      process.env['MONGO_DB_NAME'] || MONGO_DB_NAME;
    process.env['SALT_ROUNDS'] = process.env['SALT_ROUNDS'] || SALT_ROUNDS;
    process.env['SECRET'] = process.env['SECRET'] || SECRET;
  } catch (ex) {
    throw new Error(`Environment initialization failed`);
  }
};

module.exports = {
  initEnvironment
};
