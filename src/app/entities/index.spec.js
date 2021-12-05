const { projectEntity, userEntity } = require('./');
const { ProjectEntity } = require('./projects');
const { UserEntity } = require('./users');

fdescribe('entities barrel file', () => {
  describe('projectEntity', () => {
    it('should be instance of `ProjectEntity`', () => {
      const result = projectEntity instanceof ProjectEntity;
      expect(result).toEqual(true);
    });
  });

  describe('userEntity', () => {
    it('should be instance of `UserEntity`', () => {
      const result = userEntity instanceof UserEntity;
      expect(result).toEqual(true);
    });
  });
});
