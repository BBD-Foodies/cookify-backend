const { query } = require('express-validator');
const { MEAL_TYPE_ENUMS, MEASUREMENT_ENUMS, VALID_FIELDS, DIETARY_REQUIREMENT_ENUMS } = require('../Config/enums');

const filterRecipeValidationRules = () => [
    query('*').custom((value, { path }) => {
        if (!VALID_FIELDS.includes(path.replace(/_[lg]t$/, '').replace(/!$/, ''))) {
            throw new Error(`Invalid filter parameter: ${path}`);
        }
        return true;
    }),
    query('MealType').optional().isIn(MEAL_TYPE_ENUMS),
    query('Ingredients.*.measurement').optional().isIn(MEASUREMENT_ENUMS),
    query('DietaryRequirements').optional().isIn(DIETARY_REQUIREMENT_ENUMS)


];

module.exports = {
    filterRecipeValidationRules
}