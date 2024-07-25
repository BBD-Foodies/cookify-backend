const { addRecipe, findByFilters, groupByAttribute, searchRecipes, findRecipeById, deleteRecipe } = require('../data/repositories/recipeRepository');
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

const deleteRecipeById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await deleteRecipe(id, req.userName);
        switch (result) {
            case 'success':
                return res.json({ message: "Recipe deleted successfully" });
            case 'not_found':
                return res.status(404).json({ message: 'Recipe not found' });
            case 'unauthorized':
                return res.status(403).json({ message: 'Unauthorized: You can only delete your own recipes' });
            default:
                return res.status(500).json({ message: "Error deleting the recipe" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting the recipe", error: error.message });
    }
};

const searchRecipe = async (req, res) => {
    try {
        const searchQuery = req.query.q;
        const recipes = await searchRecipes(searchQuery, req)

        if (!recipes.length) {
            return res.status(404).send({ message: 'No recipes found matching your criteria.' });
        }

        res.json(recipes);
    } catch (err) {
        console.error("Server Error:", err); 
        res.status(500).send({ message: "Error retrieving recipes", error: err.message }); 
    }
};

const getRecipesByFilters = async (req, res) => {
    const errors = validate(req);
    if (errors) {
        return res.status(400).json({ errors });
    }

    try {
        const filters = req.query;
        const recipes = await findByFilters(filters, req);
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getGroupedRecipes = async (req, res) => {
    const errors = validate(req);
    if (errors) {
        return res.status(400).json({ errors });
    }

    try {
        const { attribute } = req.query;
        const result = await groupByAttribute(attribute);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    deleteRecipeById,
    getRecipeById,
    searchRecipe,
    addRecipes,
    getRecipesByFilters,
    getGroupedRecipes
};
