const { ProjectEntity } = require('./');

describe('ProjectEntity', () => {
  let projectEntity;

  beforeEach(() => {
    projectEntity = new ProjectEntity();
  });
  it('find', () => {
    expect(projectEntity.find).toBeTruthy();
  });
  it('insert', () => {
    expect(projectEntity.insert).toBeTruthy();
  });
  it('insertMany', () => {
    expect(projectEntity.insertMany).toBeTruthy();
  });

  it('update', () => {
    expect(projectEntity.update).toBeTruthy();
  });

  it('updateMany', () => {
    expect(projectEntity.updateMany).toBeTruthy();
  });

  it('delete', () => {
    expect(projectEntity.delete).toBeTruthy();
  });

  it('deleteMany', () => {
    expect(projectEntity.deleteMany).toBeTruthy();
  });

  it('aggregate', () => {
    expect(projectEntity.aggregate).toBeTruthy();
  });
});
