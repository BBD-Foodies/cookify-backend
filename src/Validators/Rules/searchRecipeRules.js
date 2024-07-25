const { query } = require('express-validator');

const searchValidationRules = () => [
    query('q').exists().withMessage('Search query parameter "q" is required')
              .isString().withMessage('Search query parameter "q" must be a string')
              .notEmpty().withMessage('Search query parameter "q" cannot be empty')
];

module.exports = {
    searchValidationRules
};
