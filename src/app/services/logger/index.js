const { HttpStatus, LogMessageType } = require('./../../models');
const { appendFile } = require('fs');
class LoggerService {
  dirname = `${__dirname}../../../../../logs/`;
  messageTypes = [
    LogMessageType.info,
    LogMessageType.warn,
    LogMessageType.error
  ];

  log = async (message, type) => {
    try {
      if (!this.messageTypes.includes(type)) {
        return;
      }
      const path = `${this.dirname}${type}.log`;
      appendFile(path, `${message}\n`, err => {
        if (err) {
          this.log(err, LogMessageType.error);
        }
      });
    } catch ({ status, message }) {
      return {
        status: status || HttpStatus.BAD_GATEWAY,
        result: null,
        message: message || `Something went wrong`
      };
    }
  };

  generateLog = async ({ status, result, message }) => {
    const errorStatus = [
      HttpStatus.BAD_GATEWAY,
      HttpStatus.BAD_REQUEST,
      HttpStatus.NOT_FOUND
    ];
    const infoStatus = [HttpStatus.OK];

    switch (true) {
      case errorStatus.includes(status): {
        this.log(message, LogMessageType.error);
        break;
      }
      case Array.isArray(result) && !result.length: {
        this.log(message, LogMessageType.warn);
        break;
      }
      case infoStatus.includes(status): {
        this.log(message, LogMessageType.info);
        break;
      }
    }
  };
}

module.exports = {
  LoggerService
};
