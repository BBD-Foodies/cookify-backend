
const express = require('express');
const router = express.Router();
const { authAndReturnJWT } = require('../Services/JWTService.js');
const axios = require('axios');

exports.githubCallback = async (req, res) => {
    const { code } = req.query;

    console.log(code);

    if (!code) {
        return res.status(400).send('No code provided');
    }

    try {
        const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code: code
        }, {
            headers: {
                Accept: 'application/json'
            }
        });
        // console.log(JSON.stringify(process.env.GITHUB_CLIENT_ID));
        // console.log(JSON.stringify(process.env.GITHUB_CLIENT_SECRET));
        console.log(tokenResponse);

        const accessToken = tokenResponse.data.access_token;
        const userData = await authAndReturnJWT(accessToken);

        res.status(200).send({ message: "Authenticated successfully", accessToken: userData.jwt });
    } catch (error) {
        console.error('Error in OAuth callback:', error);
        res.status(400).send('Authentication failed, invalid code given.');
    }
};

exports.validateToken = (req, res) => {
    res.json({ valid: true, user: { userName: req.userName } });
};

exports.devAuth = async (request, result) => {
    const requestToken = request.header('Authorization');
    try {
        const userData = await authAndReturnJWT(requestToken);
         result.json(userData);
    } catch (error) {
        result.status(400).send(error.message);
    }
};