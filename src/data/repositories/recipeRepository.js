const Recipe = require('../models/Recipe');

const addRecipe = async (recipeData) => {
    try {
        const recipe = new Recipe(recipeData);
        await recipe.save();
        return recipe;
    } catch (error) {
        throw error;
    }
};

const findRecipeById = async (recipeId) => {
    try {
        return await Recipe.findById(recipeId);
    } catch (error) {
        throw new Error(error.message);
    }
};

const searchRecipes = async (searchQuery) => {
    return Recipe.find(
        { $text: { $search: searchQuery } },
        { score: { $meta: "textScore" } }
    ).sort({
        score: { $meta: "textScore" }
    });
};

const findByFilters = (filters) => {
    const query = {};
    Object.keys(filters).forEach(key => {
        if (filters[key]) {
            query[key] = filters[key];
        }
    });
    return Recipe.find(query);
};

const groupByAttribute = (attribute) => {
    return Recipe.aggregate([
        {
            $group: {
                _id: `$${attribute}`,
                count: { $sum: 1 },
                recipes: {
                    $push: {
                        id: "$_id",
                        name: "$RecipeName"
                    }
                }
            }
        },
        { $sort: { count: -1 } }
    ]);
};



module.exports = {
    findRecipeById,
    searchRecipes,
    addRecipe,
    findByFilters,
    groupByAttribute
};
