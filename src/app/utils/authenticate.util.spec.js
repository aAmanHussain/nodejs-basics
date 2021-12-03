const { authenticateRequest } = require('./authenticate.util');

describe('authenticateRequest', () => {
  let req;
  let user;

  beforeAll(() => {
    user = {
      userId: 1001,
      fName: 'John',
      lName: 'Doe',
      username: 'john.doe'
    };
  });

  beforeEach(() => {
    req = {
      headers: {
        token: Buffer.from(JSON.stringify(user)).toString('base64')
      }
    };
  });

  it('should add user to the req', async () => {
    expect.assertions(1);
    const request = await authenticateRequest(req);
    expect(request.user).toBeDefined();
  });

  it('should match the userId of user and user property in req', async () => {
    expect.assertions(1);
    const request = await authenticateRequest(req);
    expect(request.user.userId).toBe(user.userId);
  });

  it('should throw error if req is not defined', async () => {
    expect.assertions(1);
    try {
      await authenticateRequest(null);
    } catch (ex) {
      expect(ex).toBeTruthy();
    }
  });

  it("should throw error message Cannot read property 'headers' of null", async () => {
    expect.assertions(1);
    try {
      await authenticateRequest(null);
    } catch ({ message }) {
      expect(message).toEqual(`Cannot read property 'headers' of null`);
    }
  });
});
