const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../utils/prisma');

const loginUser = async username => {
  try {
    const dbRes = await prisma.user.findUnique({ where: { username } });

    return dbRes;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = { loginUser };
