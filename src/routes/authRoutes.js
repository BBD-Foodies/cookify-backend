const express = require('express');
const LoginController = require ('../Controllers/LoginController.js')
const verifyToken = require('../Middleware/authMiddleware.js')
const router = express.Router();

//router.get('/login', LoginController.login);
router.get('/auth/login', LoginController.githubCallback);
router.get('/auth/validate', verifyToken, LoginController.validateToken);

module.exports = router;
