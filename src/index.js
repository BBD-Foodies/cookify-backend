const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();
const port = 3000;

// Load the Swagger document
const swaggerDocument = YAML.load('./swagger/swagger.yaml');

// Serve the Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/ping', (req, res) => {
    res.send('Pong');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
