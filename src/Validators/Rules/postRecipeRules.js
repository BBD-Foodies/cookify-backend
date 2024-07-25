const { body } = require('express-validator');
const { MEAL_TYPE_ENUMS, MEASUREMENT_ENUMS, DIETARY_REQUIREMENT_ENUMS } = require('../Config/enums');

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
    body('DietaryRequirements').optional()
        .isIn(DIETARY_REQUIREMENT_ENUMS).withMessage('Invalid dietary requirement'),
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

module.exports = { postRecipeValidationRules }