const express = require('express');
const LoginController = require ('../Controllers/LoginController.js')
const router = express.Router();

router.get('/login', LoginController.login);

module.exports = router;
