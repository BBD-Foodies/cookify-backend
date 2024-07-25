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
    const regex = new RegExp(searchQuery, 'i');
    const query = {
        $or: [
            { RecipeName: { $regex: regex } },
            { Categories: { $regex: regex } },
            { Allergens: { $regex: regex } },
            { DietaryRequirements: { $regex: regex } },
            { RequiredCookware: { $regex: regex } },
            { 'Steps.instruction': { $regex: regex } },
            { 'Ingredients.name': { $regex: regex } }
        ]
    };

    const total = await Recipe.countDocuments(query);
    const data = await pagination(Recipe.find(query), req);

    return {total, data};
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

const updateRecipeById = async (id, updateData, userName) => {
    const recipe = await Recipe.findOne({ _id: id });
    if (!recipe) {
        return { status: 'not_found', data: null };
    }
    if (recipe.AuthorName !== userName) {
        return { status: 'unauthorized', data: null };
    }

    Object.assign(recipe, updateData);
    const savedRecipe = await recipe.save();
    return { status: 'success', data: savedRecipe };
};


const findByFilters = async (filters, req) => {
    const query = {};

    Object.keys(filters).forEach(key => {
        let values = filters[key];

        if (typeof values === 'string') {
            values = values.split(',');
        }

        values.forEach(value => {
            if (!value) return;

            // Handle Ingredients fields
            if (key.startsWith('Ingredients')) {
                key = key.endsWith('!') ? 'Ingredients.name!' : 'Ingredients.name';
            }

            // Handle comparison operators
            if (key.endsWith('_lt') || key.endsWith('_gt')) {
                const field = key.slice(0, -3);
                const operator = key.endsWith('_lt') ? '$lt' : '$gt';
                if (!query[field]) query[field] = {};
                query[field][operator] = Number(value);
            } else if (key.endsWith('!')) {
                const field = key.slice(0, -1);
                if (!query[field]) query[field] = {};
                query[field].$nin = query[field].$nin || [];
                query[field].$nin.push(value);
            } else {
                const field = key;
                if (isNaN(Number(value))) {
                    // Apply regex for string fields
                    const regex = new RegExp(`^${value}$`, 'i');
                    query[field] = { $regex: regex };
                } else {
                    // Direct assignment for numeric fields
                    query[field] = Number(value);
                }
            }
        });
    });

    return {
        total: await Recipe.countDocuments(query),
        data: await pagination(Recipe.find(query), req)
    };
};

const addQueryCondition = (query, field, operator, value, isArray = false) => {
    if (!query[field]) {
        query[field] = {};
    }
    if (isArray) {
        if (!query[field][operator]) {
            query[field][operator] = [];
        }
        query[field][operator].push(value);
    } else {
        query[field][operator] = value;
    }
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
    updateRecipeById,
    findRecipeById,
    searchRecipes,
    addRecipe,
    findByFilters,
    groupByAttribute,
    deleteRecipe
};
