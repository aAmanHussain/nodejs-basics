const { HttpMethods } = require('./http-methods.enum');
const { HttpStatus } = require('./http-status.enum');
const { LogMessageType } = require('./log-message-type.enum');
const { Collections, Tables } = require('./database.enum');

module.exports = {
  HttpStatus,
  HttpMethods,
  LogMessageType,
  Collections,
  Tables
};
