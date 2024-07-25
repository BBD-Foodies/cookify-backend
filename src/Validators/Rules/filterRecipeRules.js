const { query } = require('express-validator');

const { 
    FILTER_BY_FIELDS,
    MEAL_TYPE_ENUMS,
    MEASUREMENT_ENUMS, 
    DIETARY_REQUIREMENT_ENUMS 
} = require('../Config/enums');

const filterRecipeValidationRules = () => [
    query('*').custom((value, { path }) => {
        const baseField = path.replace(/_[lg]t$/, '').replace(/!$/, '');
        if (!FILTER_BY_FIELDS.includes(baseField)) {
            throw new Error(`Invalid filter parameter: ${path}`);
        }
        return true;
    }),

    query('MealType').optional().isIn(MEAL_TYPE_ENUMS)
        .withMessage(`Invalid meal type. Must be one of: ${MEAL_TYPE_ENUMS.join(', ')}`),

    query('Ingredients.*.measurement').optional().isIn(MEASUREMENT_ENUMS)
        .withMessage(`Invalid measurement unit. Must be one of: ${MEASUREMENT_ENUMS.join(', ')}`),
    
    query('RecipeName').optional().isString().trim().escape(),

    query('DietaryRequirements').optional().custom((value) => {
        let requirements;
        if (typeof value === 'string') {
          requirements = value.split(',').map(item => item.trim());
        } else if (Array.isArray(value)) {
          requirements = value.flatMap(item => item.split(',').map(subItem => subItem.trim()));
        } else {
          requirements = [value];
        }
        return requirements.every(req => DIETARY_REQUIREMENT_ENUMS.includes(req));
      }).withMessage(`Invalid dietary requirement. Must be one of: ${DIETARY_REQUIREMENT_ENUMS.join(', ')}`),

    query('ServingSize').optional().isInt({ min: 1 })
        .withMessage('Serving size must be a positive integer'),
    query('ServingSize_gt').optional().isInt({ min: 0 })
        .withMessage('ServingSize_gt must be a non-negative integer'),
    query('ServingSize_lt').optional().isInt({ min: 2 })
        .withMessage('ServingSize_lt must be an integer greater than 1'),

    query('PrepTimeMin').optional().isInt({ min: 0 })
        .withMessage('Minimum prep time must be a non-negative integer'),
    query('PrepTimeMin_gt').optional().isInt({ min: 0 })
        .withMessage('PrepTimeMin_gt must be a non-negative integer'),
    query('PrepTimeMin_lt').optional().isInt({ min: 1 })
        .withMessage('PrepTimeMin_lt must be a positive integer'),

    query('PrepTimeMax').optional().isInt({ min: 0 })
        .withMessage('Maximum prep time must be a non-negative integer'),
    query('PrepTimeMax_gt').optional().isInt({ min: 0 })
        .withMessage('PrepTimeMax_gt must be a non-negative integer'),
    query('PrepTimeMax_lt').optional().isInt({ min: 1 })
        .withMessage('PrepTimeMax_lt must be a positive integer'),

    query('RecipeName').optional().isString().trim().escape(),

    query('Categories').optional().isString().trim().escape(),

    query('RequiredCookware').optional().isString().trim().escape(),

    query('*').custom((value, { path }) => {
        if (path.endsWith('_gt') || path.endsWith('_lt')) {
            const baseField = path.replace(/_[lg]t$/, '');
            if (['ServingSize', 'PrepTimeMin', 'PrepTimeMax'].includes(baseField)) {
                if (isNaN(value)) {
                    throw new Error(`${path} must be a number`);
                }
            }
        }
        return true;
    })
];


module.exports = {
    filterRecipeValidationRules
}