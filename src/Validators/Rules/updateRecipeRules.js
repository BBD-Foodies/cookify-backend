const { body } = require('express-validator');
const { MEAL_TYPE_ENUMS, MEASUREMENT_ENUMS, UPDATE_ALLOWED_FIELDS, DIETARY_REQUIREMENT_ENUMS } = require('../Config/enums');


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
    body('DietaryRequirements').optional()
    .isIn(DIETARY_REQUIREMENT_ENUMS).withMessage('Invalid dietary requirement'),
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

module.exports = {
    updateRecipeValidationRules
}