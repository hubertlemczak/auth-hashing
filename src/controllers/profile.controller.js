const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getProfile = async (req, res) => {
  const token = req.get('authorization').split(' ')[1];

  const data = jwt.verify(token, process.env.JWT_SECRET);
  res.status(200).json({ data });
};

module.exports = { getProfile };
