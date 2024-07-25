const { addRecipe, findByFilters, groupByAttribute, searchRecipes, findRecipeById, updateRecipeById, deleteRecipe } = require('../data/repositories/recipeRepository');

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
        const hasNext = recipes.total > req.currentPage * req.perPage;

        if (!recipes.data.length) {
            return res.status(404).send({ message: 'No recipes found matching your criteria.' });
        }

        res.json({
            hasNext,
            data: recipes.data, 
        });
    } catch (err) {
        console.error("Server Error:", err);
        res.status(500).send({ message: "Error retrieving recipes", error: err.message });
    }
};

const getRecipesByFilters = async (req, res) => {
    try {
        const filters = req.query;
        const recipes = await findByFilters(filters, req);
        const hasNext = recipes.total > req.currentPage * req.perPage;
        res.json({ message: "Recipes retrieved successfully", hasNext, data: recipes.data });
    } catch (error) {
        return res.status(500).json({ message: "Error retrieving recipes", error: error.message });
    }
};

const getGroupedRecipes = async (req, res) => {
    try {
        const { attribute } = req.query;
        const recipes = await groupByAttribute(attribute);
        if (recipes.length == 0) {
            return res.status(200).json({ message: "No recipes fitting your requirements were found.", data: [] });
        }
        res.json({message: "Recipes retrieved successfully", data: recipes});
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
