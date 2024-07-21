
const express = require('express');
const router = express.Router();
const {authAndReturnJWT}= require('../Services/JWTService.js');

exports.login= async (request, result) => {
    const requestToken = request.header('Authorization');
    try {
        const userData = await authAndReturnJWT(requestToken);
         result.json(userData);
    } catch (error) {
        result.status(400).send(error.message);
    }
};
