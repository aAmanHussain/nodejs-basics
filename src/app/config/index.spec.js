const { PORT, HOSTNAME } = require('./');

describe('config barrel file', () => {
  it('should be the same `PORT`', () => {
    expect(PORT).toEqual(8001);
  });

  it('should be the same `HOSTNAME`', () => {
    expect(HOSTNAME).toEqual(`127.0.0.1`);
  });
});
