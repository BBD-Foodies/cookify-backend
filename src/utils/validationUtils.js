const { body, query } = require('express-validator');
const { MEAL_TYPE_ENUMS, MEASUREMENT_ENUMS, VALID_FIELDS, GROUP_BY_FIELDS } = require('../data/config/enums');


const recipeValidationRules = () => [
    query('recipeName').optional().isString().trim().escape(),
    query('categories').optional().isString().trim().escape(),
    query('mealType').optional().isString().trim().escape(),
    query('allergens').optional().isString().trim().escape(),
    query('dietaryRequirements').optional().isString().trim().escape(),
    query('servingSizeMin').optional().isNumeric(),
    query('servingSizeMax').optional().isNumeric(),
    query('prepTimeMin').optional().isNumeric(),
    query('prepTimeMax').optional().isNumeric(),
];

const updateRecipeValidationRules = () => [
    body('recipeName').optional().isString().trim().escape(),
    body('categories').optional().isString().trim().escape(),
    body('mealType').optional().isString().trim().escape(),
    body('allergens').optional().isString().trim().escape(),
    body('dietaryRequirements').optional().isString().trim().escape(),
    body('servingSize').optional().isNumeric(),
    body('prepTimeMin').optional().isNumeric(),
    body('prepTimeMax').optional().isNumeric(),
];

const filterRecipeValidationRules = () => [
    query('*').custom((value, { path }) => {
        if (!VALID_FIELDS.includes(path.replace(/_[lg]t$/, '').replace(/!$/, ''))) {
            throw new Error(`Invalid filter parameter: ${path}`);
        }
        return true;
    }),
    query('MealType').optional().isIn(MEAL_TYPE_ENUMS),
    query('Ingredients.*.measurement').optional().isIn(MEASUREMENT_ENUMS),

];


const groupByValidationRules = () => [
    query('attribute').exists().withMessage('Grouping attribute is required')
                     .isIn(GROUP_BY_FIELDS).withMessage('Invalid grouping attribute')
];

module.exports = {
    groupByValidationRules,
    filterRecipeValidationRules,
    recipeValidationRules,
    updateRecipeValidationRules
};
