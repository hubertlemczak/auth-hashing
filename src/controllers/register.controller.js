const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const model = require('../models/register.model');

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Missing fields in request body' });
  }

  bcrypt.hash(password, 10, async (err, hash) => {
    if (hash) {
      const dbRes = await model.registerUser(username, hash);
      if (dbRes) {
        res.status(201).json({ user: dbRes });
      } else {
        res.status(500).json({ error: 'Something went wrong' });
      }
    }
  });
};

module.exports = { registerUser };
