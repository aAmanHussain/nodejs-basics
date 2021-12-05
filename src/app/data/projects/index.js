const { ProjectStatus } = require('../../models');
const { getUniqueId } = require('../../utils');

class Project {
  _id = null;
  title = null;
  createdAt = null;
  updatedAt = null;
  createdBy = null;
  status = null;
  statusHistory = [];

  constructor({ title, createdBy, status = ProjectStatus.new }) {
    this._id = getUniqueId();
    this.title = title;
    this.createdAt = Date.now();
    this.updatedAt = null;
    this.createdBy = createdBy;
    this.status = status;
    this.statusHistory = [{ status, userName: createdBy }];
  }

  getDetails = () => {
    return {
      _id: this._id,
      title: this.title,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      createdBy: this.createdBy,
      status: this.status,
      statusHistory: this.statusHistory
    };
  };

  updateStatusHistory = ({ status, userName }) => {
    this.statusHistory.push({ status, userName });
    return this.statusHistory;
  };
}

module.exports = {
  Project
};
