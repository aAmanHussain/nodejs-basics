const { genSalt, hash, compare } = require('bcryptjs');

const getHash = async value => {
  try {
    if (!value) {
      throw new Error();
    }
    const salt = await genSalt(process.env.SALT_ROUNDS);
    const hashedValue = await hash(value, salt);

    return hashedValue;
  } catch (error) {
    throw new Error(error);
  }
};

const compareHash = async (value, hash) => {
  try {
    if (!value || !hash) {
      throw new Error();
    }
    const result = await compare(value, hash);

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getHash,
  compareHash
};
