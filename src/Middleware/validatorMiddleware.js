const { validationResult } = require('express-validator');
const { updateRecipeValidationRules, postRecipeValidationRules, filterRecipeValidationRules, groupByValidationRules, searchValidationRules } = require('../Validators/index.js');
const mongoose = require('mongoose');

const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "Invalid recipe ID format" });
    }
    next();
};

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Validation failed",
            errors: errors.array({ onlyFirstError: true })
        });
    }
    next();
};

const postRecipeValidators = [
    ...postRecipeValidationRules(),
    handleValidationErrors
];

const updateRecipeValidators = [
    ...updateRecipeValidationRules(),
    handleValidationErrors
];

const searchRecipeValidators = [
    ...searchValidationRules(),
    handleValidationErrors
]


const filterRecipeValidators = [
    ...filterRecipeValidationRules(),
    handleValidationErrors
];

const groupByValidators = [
    ...groupByValidationRules(),
    handleValidationErrors
];

module.exports = {
    groupByValidators,
    filterRecipeValidators,
    postRecipeValidators,
    updateRecipeValidators,
    searchRecipeValidators,
    validateObjectId

};
