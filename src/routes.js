const express = require('express');
const router = express.Router();
const LoginController = require ('./Controllers/LoginController.js')
const verifyToken = require( "./Middleware/authMiddleware.js")
//const userController = require('./controllers/userController');

router.get('/', verifyToken, (req, res) => {
    res.send(`Hello ${req.userName}`);
});

router.get('/ping', (req, res) => {
    res.send('Pong');
});
router.get('/login', LoginController.login);

module.exports = router;