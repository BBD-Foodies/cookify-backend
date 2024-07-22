require('dotenv').config();
const mongoose = require('mongoose');
const AWS = require('aws-sdk');

const connectDatabase = async () => {
    let dbURI;
// mongodb://root:password@localhost:27017/foodiedb
    if (process.env.NODE_ENV === 'production') {
        const secretsManager = new AWS.SecretsManager({ region: 'eu-west-1' });
        try {
            const data = await secretsManager.getSecretValue({ SecretId: 'cookify-cluster-creds' }).promise();
            const secrets = JSON.parse(data.SecretString);
            console.log(secrets);
            dbURI = `mongodb://${secrets.username}:${secrets.password}` +
                    `@${secrets.host}:${secrets.port}/foodiedb?directConnection=true&serverSelectionTimeoutMS=2000&tls=true&tlsAllowInvalidHostnames=true&tlsCAFile=./global-bundle.pem&retryWrites=false
`;
        } catch (error) {
            console.error('Failed to retrieve secrets:', error);
            return false;
        }
    } else {
        dbURI = process.env.MONGODB_LOCAL_URI;
    }

    const connectWithRetry = async (retries = 5, delay = 5000) => {
        try {
            await mongoose.connect(dbURI);
            console.log('Database connected successfully.');
            return true;
        } catch (err) {
            if (retries === 0) {
                console.error('Database connection failed:', err);
                return false;
            }
            console.log(`Retrying to connect to the database... Attempts left: ${retries}`);
            setTimeout(() => connectWithRetry(retries - 1, delay * 2), delay);
        }
    };

    return connectWithRetry();
};

module.exports = connectDatabase;
