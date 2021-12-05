const { ProjectEntity } = require('./projects');
const { UserEntity } = require('./users');

module.exports = {
  projectEntity: new ProjectEntity(),
  userEntity: new UserEntity()
};
