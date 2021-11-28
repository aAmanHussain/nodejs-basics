const { PORT, HOSTNAME } = require('../config');

const initEnvironment = () => {
  try {
    process.env['PORT'] = process.env['PORT'] || PORT;
    process.env['HOSTNAME'] = process.env['HOSTNAME'] || HOSTNAME;
  } catch (ex) {
    throw new Error(`Environment initialization failed`);
  }
};

module.exports = {
  initEnvironment
};
