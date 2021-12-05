const { UserEntity } = require('./');

describe('UserEntity', () => {
  let userEntity;

  beforeEach(() => {
    userEntity = new UserEntity();
  });
  it('find', () => {
    expect(userEntity.find).toBeTruthy();
  });
  it('insert', () => {
    expect(userEntity.insert).toBeTruthy();
  });
  it('insertMany', () => {
    expect(userEntity.insertMany).toBeTruthy();
  });

  it('update', () => {
    expect(userEntity.update).toBeTruthy();
  });

  it('updateMany', () => {
    expect(userEntity.updateMany).toBeTruthy();
  });

  it('delete', () => {
    expect(userEntity.delete).toBeTruthy();
  });

  it('deleteMany', () => {
    expect(userEntity.deleteMany).toBeTruthy();
  });

  it('aggregate', () => {
    expect(userEntity.aggregate).toBeTruthy();
  });
});
