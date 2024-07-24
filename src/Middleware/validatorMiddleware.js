const { validationResult } = require('express-validator');
const { recipeValidationRules, updateRecipeValidationRules, filterRecipeValidationRules, groupByValidationRules } = require('../utils/validationUtils');
const mongoose = require('mongoose');

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Invalid format given. Please check your input." });
    }
    next();
};

const recipeQueryValidators = [
    ...recipeValidationRules(),
    handleValidationErrors
];

const updateRecipeValidators = [
    ...updateRecipeValidationRules(),
    handleValidationErrors
];

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

const groupByValidators = [
    ...groupByValidationRules(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: "Validation failed", errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    groupByValidators,
    filterRecipeValidators,
    recipeQueryValidators,
    updateRecipeValidators,
    validateObjectId
};
