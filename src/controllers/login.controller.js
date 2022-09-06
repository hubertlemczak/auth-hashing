const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const model = require('../models/login.model');

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Missing fields in request body' });
  }

  const dbRes = await model.loginUser(username);

  if (!dbRes) {
    return res.status(404).json({ error: 'User not Found' });
  }

  bcrypt.compare(password, dbRes.password, async (err, result) => {
    if (result) {
      const token = jwt.sign(
        { user: { id: dbRes.id, name: dbRes.username } },
        process.env.JWT_SECRET
      );
      res.status(201).json({ token });
    } else {
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
};

module.exports = { loginUser };
