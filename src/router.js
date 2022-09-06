const express = require('express');

const registerController = require('./controllers/register.controller');
const loginController = require('./controllers/login.controller');
const profileController = require('./controllers/profile.controller');

const router = express.Router();

router.post('/register', registerController.registerUser);

router.post('/login', loginController.loginUser);

router.get('/profile', profileController.getProfile);

module.exports = router;
