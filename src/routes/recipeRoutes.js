const express = require('express');
const {
    updateRecipe,
    addRecipes,
    getRecipesByFilters,
    getGroupedRecipes,
    searchRecipe,
    getRecipeById
} = require('../Controllers/recipeController');
const { recipeQueryValidators, updateRecipeValidators, validateObjectId, filterRecipeValidators, groupByValidators } = require("../Middleware/validatorMiddleware");
const router = express.Router();


router.get('/search', searchRecipe);

router.get('/group', groupByValidators, getGroupedRecipes);

router.get('/:id', validateObjectId, getRecipeById);

router.post('/', recipeQueryValidators, addRecipes);

router.get('/', filterRecipeValidators, getRecipesByFilters);

router.patch('/:id', validateObjectId, updateRecipeValidators, updateRecipe);

module.exports = router;
