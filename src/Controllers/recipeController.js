const { addRecipe, findByFilters, groupByAttribute, searchRecipes, findRecipeById, updateRecipeById } = require('../data/repositories/recipeRepository');
const { validate } = require('../utils/validationUtils');

const addRecipes = async (req, res) => {
    try {
        const authorName = req.userName;
        
        const recipeData = {
            ...req.body,
            AuthorName: authorName
        };

        const recipe = await addRecipe(recipeData);
        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getRecipeById = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const recipe = await findRecipeById(recipeId);

        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.json(recipe);
    } catch (err) {
        res.status(500).json({ message: "Error retrieving the recipe", error: err.message });
    }
};

const updateRecipe = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    const userName = req.userName;
    try {
        const result = await updateRecipeById(id, updateData, userName);
        switch (result.status) {
            case 'success':
                return res.json({ message: "Recipe updated successfully", data: result.data });
            case 'not_found':
                return res.status(404).json({ message: 'Recipe not found' });
            case 'unauthorized':
                return res.status(403).json({ message: 'Unauthorized: You can only update your own recipes' });
            default:
                return res.status(500).json({ message: 'Unknown error occurred' });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating the recipe", error: error.message });
    }
};

const deleteRecipeById = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const result = await Recipe.findByIdAndRemove(recipeId);

        if (!result) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Error deleting the recipe", error: error.message });
    }
};

const searchRecipe = async (req, res) => {
    try {
        const searchQuery = req.query.q;
        const recipes = await searchRecipes(searchQuery);

        if (!recipes.length) {
            return res.status(404).send({ message: 'No recipes found matching your criteria.' });
        }

        res.json(recipes);
    } catch (err) {
        console.error("Server Error:", err); 
        res.status(500).send({ message: "Error retrieving recipes", error: err.message }); 
    }
};

getRecipesByFilters = async (req, res) => {
    try {
        const filters = req.query;
        const recipes = await findByFilters(filters);
        res.json({ message: "Recipes retrieved successfully", data: recipes });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving recipes", error: error.message });
    }
};

const getGroupedRecipes = async (req, res) => {
    try {
        const { attribute } = req.query;
        const result = await groupByAttribute(attribute);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving grouped recipes", error: error.message });
    }
};

module.exports = {
    updateRecipe,
    deleteRecipeById,
    getRecipeById,
    searchRecipe,
    addRecipes,
    getRecipesByFilters,
    getGroupedRecipes
};
