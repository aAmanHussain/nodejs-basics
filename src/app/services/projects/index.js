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
        message: `Project details fetched successfully for ID: ${id}`
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
      const result = {
        id: Date.now(),
        ...project
      };
      return {
        status: HttpStatus.OK,
        result,
        message: `Project created successfully with ID: ${result.id}`
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
        message: `Project details updated successfully for ID: ${id}`
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
        message: `Project deleted successfully for ID: ${id}`
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
