const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const routes= require('./routes.js');

const app = express();
const port = 5000;

// Load the Swagger document
const swaggerDocument = YAML.load('./swagger/swagger.yaml');

// Serve the Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
