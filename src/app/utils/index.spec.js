const {
  authenticateRequest,
  initEnvironment,
  transformRequest
} = require('./');
const {
  authenticateRequest: authenticateRequestUtil
} = require('./authenticate.util');
const { initEnvironment: initEnvironmentUtil } = require('./environment.util');
const { transformRequest: transformRequestUtil } = require('./request.util');

describe('util barrel file', () => {
  describe('authenticateRequest', () => {
    it('should be same function as `authenticateRequestUtil`', () => {
      expect(authenticateRequest).toBe(authenticateRequestUtil);
    });
  });

  describe('transformRequest', () => {
    it('should be same function as `transformRequestUtil`', () => {
      expect(transformRequest).toBe(transformRequestUtil);
    });
  });

  describe('initEnvironment', () => {
    it('should be same function as `initEnvironmentUtil`', () => {
      expect(initEnvironment).toBe(initEnvironmentUtil);
    });
  });
});
