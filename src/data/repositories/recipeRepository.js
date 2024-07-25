const { pagination } = require('../../Services/PaginationService');
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

const searchRecipes = async (searchQuery, req) => {
    return pagination(
        Recipe.find(
            { $text: { $search: searchQuery } },
            { score: { $meta: "textScore" } }
        ).sort({
            score: { $meta: "textScore" }
        }), 
        req
    );
};

const deleteRecipe = async (id, userName) => {
    const recipe = await Recipe.findOne({ _id: id });
    if (!recipe) {
        return 'not_found';
    }
    if (recipe.AuthorName !== userName) {
        return 'unauthorized';
    }

    const result = await Recipe.findByIdAndDelete(id);
    return (result) ? 'success' : 'error'
};

const findByFilters = (filters, req) => {
    const query = {};
    Object.keys(filters).forEach(key => {
        const values = filters[key].split(','); // handle arrays of values 
        values.forEach(value => {
            if (value) {
                if (key.endsWith('_lt') || key.endsWith('_gt')) {
                    const field = key.slice(0, -3);
                    const operator = key.endsWith('_lt') ? '$lt' : '$gt';
                    query[field] = { [operator]: value };
                } else if (key.endsWith('!')) {
                    const field = key.slice(0, -1);
                    addQueryCondition(query, field, '$nin', value);
                } else {
                    addQueryCondition(query, key, '$in', value);
                }
            }
        });
    });
    return pagination(Recipe.find(query), req)
};

const addQueryCondition = (query, field, operator, value) => {
    if (!query[field]) query[field] = {};
    if (!query[field][operator]) query[field][operator] = [];
    query[field][operator].push(value);
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
    groupByAttribute,
    deleteRecipe
};
