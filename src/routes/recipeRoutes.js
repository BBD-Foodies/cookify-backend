const express = require('express');
const {
    addRecipes,
    getRecipesByFilters,
    getGroupedRecipes,
    searchRecipe,
    getRecipeById,
    deleteRecipeById
} = require('../Controllers/recipeController');
const { recipeQueryValidators, validateObjectId } = require('../utils/validationUtils');
const setPagination = require('../Middleware/pagination');
const router = express.Router();


router.get('/search', setPagination, searchRecipe);

router.get('/group', getGroupedRecipes);

router.get('/:id', validateObjectId, getRecipeById);

router.delete('/:id', validateObjectId, deleteRecipeById);

router.post('/', recipeQueryValidators(), addRecipes);

router.get('/', setPagination, getRecipesByFilters);

module.exports = router;
