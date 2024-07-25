const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const connectDatabase = require('./data/config/dbConfig');
const recipeRoutes = require('./routes/recipeRoutes');
const authRoutes = require('./routes/authRoutes');
const verifyToken = require( "./Middleware/authMiddleware");
const corsMiddleware = require("./Middleware/corsMiddleware");
const rateLimiterMiddleware = require('./Middleware/rateLimiterMiddleware');

const app = express();
let dbConnected = false;


connectDatabase().then((isConnected) => {
    dbConnected = isConnected;
}).catch(err => {
    console.error("Database connection attempt failed:", err);
});

const port = process.env.PORT || 5000;


app.use(express.json());

app.use(corsMiddleware);
app.use(rateLimiterMiddleware);


const swaggerDocument = YAML.load('./swagger/swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/health-check', verifyToken, (req, res) => {
    if (!dbConnected) {
        console.log(`Here's the name: ${req.userName}`)
        return res.status(500).send('Hello World! But DB is NOT connected.');
    }
    res.send('Hello World! DB is connected.');
});


app.get('/pingPong', (req, res) => {
    res.send('Pong');
});

app.use('/api',  authRoutes);

app.use('/api/recipes', verifyToken, recipeRoutes);


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
