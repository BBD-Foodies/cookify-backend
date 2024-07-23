const express = require('express');
const {
    addRecipes,
    getRecipesByFilters,
    getGroupedRecipes,
    searchRecipe,
    getRecipeById
} = require('../Controllers/recipeController');
const { recipeQueryValidators, validateObjectId } = require('../utils/validationUtils');
const setPagination = require('../Middleware/pagination');
const router = express.Router();


router.get('/search', setPagination, searchRecipe);

router.get('/group', getGroupedRecipes);

router.get('/:id', validateObjectId, getRecipeById);

router.post('/', recipeQueryValidators(), addRecipes);

router.get('/', setPagination, getRecipesByFilters);

module.exports = router;
