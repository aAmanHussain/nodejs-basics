const { HttpMethods } = require('./http-methods.enum');
const { HttpStatus } = require('./http-status.enum');
const { LogMessageType } = require('./log-message-type.enum');
const { Collections, Tables } = require('./database.enum');
const { Roles } = require('./roles.enum');
const { ProjectStatus } = require('./project-status.enum');

module.exports = {
  HttpStatus,
  HttpMethods,
  LogMessageType,
  Collections,
  Tables,
  Roles,
  ProjectStatus
};
