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
        const values = filters[key].split(','); // handle arrays of values 
        values.forEach(value => {
            if (value) {
                if (key.endsWith('_lt') || key.endsWith('_gt')) {
                    const field = key.slice(0, -3);
                    const operator = key.endsWith('_lt') ? '$lt' : '$gt';
                    query[field] = { [operator]: value };
                } else if (key === 'Allergens') {
                    if (!query[key]) query[key] = { '$nin': [] };
                    query[key]['$nin'].push(value);
                } else {
                    if (!query[key]) query[key] = { '$all': [] };
                    query[key]['$all'].push(value);
                }
            }
        });
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
