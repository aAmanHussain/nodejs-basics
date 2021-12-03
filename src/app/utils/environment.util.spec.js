const { initEnvironment } = require('./environment.util');

describe('initEnvironment', () => {
  beforeAll(() => {});

  beforeEach(() => {});

  it('should add PORT to the env', async () => {
    initEnvironment();
    expect(process.env.PORT).toBeTruthy();
  });

  it('should add HOSTNAME to the env', async () => {
    initEnvironment();
    expect(process.env.HOSTNAME).toBeTruthy();
  });

  it('should throw an exception if env is not present', async () => {
    try {
      delete process.env;
      initEnvironment();
    } catch (ex) {
      expect(ex.message).not.toBeNull();
    }
  });
});
