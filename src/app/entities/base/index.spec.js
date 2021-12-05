const { BaseEntity } = require('./');

describe('BaseEntity', () => {
  let baseEntity;

  beforeEach(() => {
    baseEntity = new BaseEntity();
  });
  it('find', () => {
    expect(baseEntity.find).toBeTruthy();
  });
  it('insert', () => {
    expect(baseEntity.insert).toBeTruthy();
  });
  it('insertMany', () => {
    expect(baseEntity.insertMany).toBeTruthy();
  });

  it('update', () => {
    expect(baseEntity.update).toBeTruthy();
  });

  it('updateMany', () => {
    expect(baseEntity.updateMany).toBeTruthy();
  });

  it('delete', () => {
    expect(baseEntity.delete).toBeTruthy();
  });

  it('deleteMany', () => {
    expect(baseEntity.deleteMany).toBeTruthy();
  });

  it('aggregate', () => {
    expect(baseEntity.aggregate).toBeTruthy();
  });
});
