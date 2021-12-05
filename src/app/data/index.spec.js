const { ProjectStatus } = require('../models');
const { compareHash } = require('../utils');
const { Project, User } = require('./');
const { Project: ProjectClass } = require('./projects');
const { User: UserClass } = require('./users');

describe('data barrel file', () => {
  let payload;
  describe('Project', () => {
    let project;

    beforeEach(() => {
      payload = { title: 'Project 1', createdBy: 'john.doe' };
      project = new Project(payload);
    });

    it('should be instance of `Project`', () => {
      const result = project instanceof ProjectClass;
      expect(result).toEqual(true);
    });

    it('should have th same `createdBy`', () => {
      const { createdBy } = project.getDetails();
      expect(createdBy).toEqual(payload.createdBy);
    });

    it('should add to the `statusHistory`', () => {
      const statusHistory = project.updateStatusHistory({
        status: ProjectStatus.inProgress,
        userName: payload.createdBy
      });
      expect(statusHistory.length).toEqual(project.statusHistory.length);
    });
  });

  describe('User', () => {
    let user;

    beforeEach(() => {
      payload = {
        fName: 'John',
        mName: 'M',
        lName: 'Doe',
        userName: 'john.doe',
        password: '1234'
      };
      user = new User(payload);
    });

    it('should be instance of `User`', () => {
      const result = user instanceof UserClass;
      expect(result).toEqual(true);
    });

    it('should return true for password and hashed password', async () => {
      expect.assertions(1);
      const { password } = await user.getDetails();
      const result = await compareHash(payload.password, password);
      expect(result).toEqual(true);
    });

    it('should throw an exception', async () => {
      try {
        user = new User({ ...payload, password: null });
        await user.getDetails();
      } catch (ex) {
        expect(ex instanceof Error).toBe(true);
      }
    });
  });
});
