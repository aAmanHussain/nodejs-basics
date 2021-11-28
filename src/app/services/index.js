const { ProjectService } = require('./projects');
const { UserService } = require('./users');
const { LoggerService } = require('./logger');

module.exports = {
  loggerService: new LoggerService(),
  projectService: new ProjectService(),
  userService: new UserService()
};
