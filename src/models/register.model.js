const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../utils/prisma');

const registerUser = async (username, hash) => {
  console.log(username, hash);
  try {
    const dbRes = await prisma.user.create({
      data: {
        username,
        password: hash,
      },
    });

    return dbRes;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = { registerUser };
