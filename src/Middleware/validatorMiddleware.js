const { validationResult } = require('express-validator');
const { recipeValidationRules, updateRecipeValidationRules, filterRecipeValidationRules } = require('../utils/validationUtils');
const mongoose = require('mongoose');

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Invalid format given. Please check your input." });
    }
    next();
};

// Middleware to validate recipe queries
const recipeQueryValidators = [
    ...recipeValidationRules(),
    handleValidationErrors
];

// Middleware to validate recipe updates
const updateRecipeValidators = [
    ...updateRecipeValidationRules(),
    handleValidationErrors
];

// Middleware to validate MongoDB ObjectId
const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "Invalid recipe ID format" });
    }
    next();
};

const filterRecipeValidators = [
    ...filterRecipeValidationRules(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: "Invalid filter format or values. Please check your input.", errors: errors.array({ onlyFirstError: true }) });
        }
        next();
    }
];

module.exports = {
    filterRecipeValidators,
    recipeQueryValidators,
    updateRecipeValidators,
    validateObjectId
};
