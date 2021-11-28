const { HttpStatus } = require('./../../models');

class ProjectService {
  getAll = async () => {
    try {
      return {
        status: HttpStatus.OK,
        result: [],
        message: `Projects fetched successfully`
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
        message: `Project details fetched successfully`
      };
    } catch ({ status, message }) {
      return {
        status: status || HttpStatus.BAD_GATEWAY,
        result: null,
        message: message || `Something went wrong`
      };
    }
  };
  post = async project => {
    try {
      return {
        status: HttpStatus.OK,
        result: {
          id: Symbol(),
          ...project
        },
        message: `Project created successfully`
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
        message: `Project details updated successfully`
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
        message: `Project deleted successfully`
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
  ProjectService
};
