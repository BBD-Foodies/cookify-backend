
const express = require('express');
const router = express.Router();
const { authAndReturnJWT } = require('../Services/JWTService.js');
const axios = require('axios');

exports.githubCallback = async (req, res) => {
    const { code } = req.query.code;
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
