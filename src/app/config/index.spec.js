const {
  PORT,
  HOSTNAME,
  SQL_HOST,
  SQL_PORT,
  SQL_DB_NAME,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DB_NAME
} = require('./');

describe('config barrel file', () => {
  it('should be the same `PORT`', () => {
    expect(PORT).toEqual(8001);
  });

  it('should be the same `HOSTNAME`', () => {
    expect(HOSTNAME).toEqual(`127.0.0.1`);
  });

  it('should be the same `SQL_HOST`', () => {
    expect(SQL_HOST).toEqual(`127.0.0.1`);
  });

  it('should be the same `SQL_PORT`', () => {
    expect(SQL_PORT).toEqual(8083);
  });

  it('should be the same `SQL_DB_NAME`', () => {
    expect(SQL_DB_NAME).toEqual(`project-manager`);
  });

  it('should be the same `MONGO_HOST`', () => {
    expect(MONGO_HOST).toEqual(`127.0.0.1`);
  });

  it('should be the same `MONGO_PORT`', () => {
    expect(MONGO_PORT).toEqual(27017);
  });

  it('should be the same `MONGO_DB_NAME`', () => {
    expect(MONGO_DB_NAME).toEqual(`project-manager`);
  });
});
