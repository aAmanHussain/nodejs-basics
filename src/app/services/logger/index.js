const { HttpStatus } = require('./../../models');
const { readFile } = require('fs');

class LoggerService {
  log = async message => {
    try {
    } catch ({ status, message }) {
      return {
        status: status || HttpStatus.BAD_GATEWAY,
        result: null,
        message: message || `Something went wrong`
      };
    }
  };
}

module.exports = {
  LoggerService
};
