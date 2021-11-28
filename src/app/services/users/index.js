const { HttpStatus } = require('./../../models');

class UserService {
  getAll = async () => {
    try {
      return {
        status: HttpStatus.OK,
        result: [],
        message: `Users fetched successfully`
      };
    } catch ({ status, message }) {
      return {
        status: status || HttpStatus.BAD_GATEWAY,
        result: null,
        message: message || `Something went wrong`
      };
    }
  };
  get = async id => {
    try {
      return {
        status: HttpStatus.OK,
        result: {
          id
        },
        message: `User details fetched successfully`
      };
    } catch ({ status, message }) {
      return {
        status: status || HttpStatus.BAD_GATEWAY,
        result: null,
        message: message || `Something went wrong`
      };
    }
  };
  post = async user => {
    try {
      return {
        status: HttpStatus.OK,
        result: {
          id: Symbol(),
          ...user
        },
        message: `User created successfully`
      };
    } catch ({ status, message }) {
      return {
        status: status || HttpStatus.BAD_GATEWAY,
        result: null,
        message: message || `Something went wrong`
      };
    }
  };
  patch = async id => {
    try {
      return {
        status: HttpStatus.OK,
        result: {
          id
        },
        message: `User details updated successfully`
      };
    } catch ({ status, message }) {
      return {
        status: status || HttpStatus.BAD_GATEWAY,
        result: null,
        message: message || `Something went wrong`
      };
    }
  };
  delete = async id => {
    try {
      return {
        status: HttpStatus.OK,
        result: {
          id
        },
        message: `User deleted successfully`
      };
    } catch ({ status, message }) {
      return {
        status: status || HttpStatus.BAD_GATEWAY,
        result: null,
        message: message || `Something went wrong`
      };
    }
  };
}

module.exports = {
  UserService
};
