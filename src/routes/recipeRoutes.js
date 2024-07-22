const express = require('express');
const {
    addRecipes,
    getRecipesByFilters,
    getGroupedRecipes,
    searchRecipe,
    getRecipeById
} = require('../Controllers/recipeController');
const { recipeQueryValidators, validateObjectId } = require('../utils/validationUtils');
const verifyToken = require("../middleware/authMiddleware");
const router = express.Router();


router.get('/search', searchRecipe);

router.get('/group', getGroupedRecipes);

router.get('/:id', validateObjectId, getRecipeById);

router.post('/', verifyToken, recipeQueryValidators(), addRecipes);

router.get('/', getRecipesByFilters);

module.exports = router;
