const { getHash } = require('../../utils/hashing.util');

class User {
  _id = null;
  fName = null;
  mName = null;
  lName = null;
  userName = null;
  roles = [];
  password = null;
  constructor({ fName, mName, lName, userName, password }) {
    this.fName = fName;
    this.mName = mName;
    this.lName = lName;
    this.userName = userName;
    this.roles = [];
    this.password = password;
  }

  getDetails = async () => {
    await this.hashPassword(this.password);

    return {
      _id: this._id,
      fName: this.fName,
      mName: this.mName,
      lName: this.lName,
      userName: this.userName,
      password: this.password
    };
  };

  hashPassword = async password => {
    try {
      this.password = await getHash(password);
    } catch (ex) {
      throw new Error(ex);
    }
  };
}

module.exports = {
  User
};
