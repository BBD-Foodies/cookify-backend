const express = require('express');
const {
    updateRecipe,
    addRecipes,
    getRecipesByFilters,
    getGroupedRecipes,
    searchRecipe,
    getRecipeById,
    deleteRecipeById,
    getVideoLink,
    getRecipeIconAi,
} = require('../Controllers/recipeController');
getVideoLink
const { postRecipeValidators, updateRecipeValidators, validateObjectId, filterRecipeValidators, groupByValidators } = require("../Middleware/validatorMiddleware");
const setPagination = require('../Middleware/pagination');
const router = express.Router();


router.get('/search', setPagination, searchRecipe);

router.get('/video', getVideoLink);

router.get('/icon', getRecipeIconAi);

router.get('/group', groupByValidators, getGroupedRecipes);

router.post('/', postRecipeValidators, addRecipes);

router.get('/', setPagination, filterRecipeValidators, getRecipesByFilters);

router.get('/:id', validateObjectId, getRecipeById);

router.delete('/:id', validateObjectId, deleteRecipeById);

router.patch('/:id', validateObjectId, updateRecipeValidators, updateRecipe);

module.exports = router;
