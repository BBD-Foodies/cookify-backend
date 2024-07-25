const { query } = require('express-validator');
const { GROUP_BY_FIELDS } = require('../Config/enums');

const groupByValidationRules = () => [
    query('attribute').exists().withMessage('Grouping attribute is required')
                     .isIn(GROUP_BY_FIELDS).withMessage('Invalid grouping attribute')
];

module.exports = {
    groupByValidationRules
}