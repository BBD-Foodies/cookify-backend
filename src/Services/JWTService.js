const jwt = require("jsonwebtoken");
const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

async function authAndReturnJWT(requestToken) {
    try {
        const userResponse = await fetch('https://api.github.com/user', {
            headers: {
                Authorization: 'token ' + requestToken
            }
        });
        const userData = await userResponse.json();
        if (userData.message) {
            throw new Error(`An error occurred with your GitHub authentication: ${userData.message}\nPlease login again`);
        }
        const token = generateToken(userData.login);
        return {
            name: userData.login,
            jwt: token
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}
function generateToken(userName,expiresIn = "15m") {
    let token = JWT_SECRET_KEY;
    return jwt.sign({
        userName: userName,
    }, token, { expiresIn: expiresIn });
}

module.exports = { authAndReturnJWT };