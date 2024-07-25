const express = require('express');
const {
    updateRecipe,
    addRecipes,
    getRecipesByFilters,
    getGroupedRecipes,
    searchRecipe,
    getRecipeById,
    deleteRecipeById
} = require('../Controllers/recipeController');
const { postRecipeValidators, updateRecipeValidators, validateObjectId, filterRecipeValidators, groupByValidators, searchRecipeValidators } = require("../Middleware/validatorMiddleware");
const setPagination = require('../Middleware/pagination');
const router = express.Router();


router.get('/search', setPagination, searchRecipeValidators, searchRecipe);

router.get('/group', groupByValidators, getGroupedRecipes);

router.post('/', postRecipeValidators, addRecipes);

router.get('/', setPagination, filterRecipeValidators, getRecipesByFilters);

router.get('/:id', validateObjectId, getRecipeById);

router.delete('/:id', validateObjectId, deleteRecipeById);

router.patch('/:id', validateObjectId, updateRecipeValidators, updateRecipe);

module.exports = router;
