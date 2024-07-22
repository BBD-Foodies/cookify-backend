const { query, validationResult } = require('express-validator');
const mongoose = require('mongoose');

const recipeQueryValidators = () => [
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

const validate = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errors.array();
    }
    return null;
};

const validateObjectId = (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid recipe ID format" });
    }
    next();
};

module.exports = {
    validateObjectId,
    recipeQueryValidators,
    validate
};
