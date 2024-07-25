const { body, query } = require('express-validator');
const { MEAL_TYPE_ENUMS, MEASUREMENT_ENUMS, VALID_FIELDS, GROUP_BY_FIELDS, UPDATE_ALLOWED_FIELDS } = require('../data/config/enums');


const postRecipeValidationRules = () => [
    body('RecipeName').exists().withMessage('Recipe name is required')
        .isString().withMessage('Recipe name must be a string')
        .trim().escape(),
    body('Categories').exists().withMessage('Categories are required')
        .isArray().withMessage('Categories must be an array')
        .notEmpty().withMessage('Categories array cannot be empty'),
    body('Categories.*').isString().trim().escape(),
    body('MealType').exists().withMessage('Meal type is required')
        .isIn(MEAL_TYPE_ENUMS).withMessage('Invalid meal type'),
    body('Allergens').exists().withMessage('Allergens are required')
        .isArray().withMessage('Allergens must be an array'),
    body('Allergens.*').isString().trim().escape(),
    body('DietaryRequirements').exists().withMessage('Dietary requirements are required')
        .isArray().withMessage('Dietary requirements must be an array'),
    body('DietaryRequirements.*').isString().trim().escape(),
    body('ServingSize').exists().withMessage('Serving size is required')
        .isInt({ min: 1 }).withMessage('Serving size must be a positive integer'),
    body('PrepTimeMin').exists().withMessage('Minimum prep time is required')
        .isInt({ min: 0 }).withMessage('Minimum prep time must be a non-negative integer'),
    body('PrepTimeMax').exists().withMessage('Maximum prep time is required')
        .isInt({ min: 0 }).withMessage('Maximum prep time must be a non-negative integer'),
    body('Ingredients').exists().withMessage('Ingredients are required')
        .isArray().withMessage('Ingredients must be an array')
        .notEmpty().withMessage('Ingredients array cannot be empty'),
    body('Ingredients.*.name').exists().withMessage('Ingredient name is required')
        .isString().withMessage('Ingredient name must be a string')
        .trim().escape(),
    body('Ingredients.*.quantity').exists().withMessage('Ingredient quantity is required')
        .isFloat({ min: 0 }).withMessage('Ingredient quantity must be a non-negative number'),
    body('Ingredients.*.measurement').exists().withMessage('Ingredient measurement is required')
        .isIn(MEASUREMENT_ENUMS).withMessage('Invalid measurement unit'),
    body('RequiredCookware').exists().withMessage('Required cookware is required')
        .isArray().withMessage('Required cookware must be an array'),
    body('RequiredCookware.*').isString().trim().escape(),
    body('Steps').exists().withMessage('Steps are required')
        .isArray().withMessage('Steps must be an array')
        .notEmpty().withMessage('Steps array cannot be empty'),
    body('Steps.*.step').exists().withMessage('Step number is required')
        .isInt({ min: 1 }).withMessage('Step number must be a positive integer'),
    body('Steps.*.instruction').exists().withMessage('Step instruction is required')
        .isString().withMessage('Step instruction must be a string')
        .trim().escape(),
];

const updateRecipeValidationRules = () => [
    body('*').custom((value, { path }) => {
        if (!UPDATE_ALLOWED_FIELDS.includes(path)) {
            throw new Error(`Invalid update field: ${path}`);
        }
        return true;
    }),
    body('RecipeName').optional().isString().trim().escape(),
    body('Categories').optional().isArray().withMessage('Categories must be an array'),
    body('Categories.*').isString().trim().escape(),
    body('MealType').optional().isIn(MEAL_TYPE_ENUMS).withMessage('Invalid meal type'),
    body('Allergens').optional().isArray().withMessage('Allergens must be an array'),
    body('Allergens.*').isString().trim().escape(),
    body('DietaryRequirements').optional().isArray().withMessage('Dietary requirements must be an array'),
    body('DietaryRequirements.*').isString().trim().escape(),
    body('ServingSize').optional().isInt({ min: 1 }).withMessage('Serving size must be a positive integer'),
    body('PrepTime').optional().isInt({ min: 0 }).withMessage('Prep time must be a non-negative integer'),
    body('Ingredients').optional().isArray().withMessage('Ingredients must be an array'),
    body('Ingredients.*.name').isString().trim().escape(),
    body('Ingredients.*.quantity').isInt({ min: 1 }).withMessage('Ingredient quantity must be a non-negative number'),
    body('Ingredients.*.measurement').isIn(MEASUREMENT_ENUMS).withMessage('Invalid measurement unit'),
    body('Steps').optional().isArray().withMessage('Ingredients must be an array'),
    body('Steps.*.step').isInt({ min: 1 }).withMessage('Step number must be a non-negative number'),
    body('Steps.*.instruction').isString().trim().escape(),
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
    postRecipeValidationRules,
    updateRecipeValidationRules
};
