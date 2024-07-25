const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    measurement: { type: String, enum: ['g', 'tbsp', 'tsp', 'ml', 'cup', 'whole', 'handful', 'pinch'], required: true }
});

const stepSchema = new mongoose.Schema({
    step: { type: Number, required: true },
    instruction: { type: String, required: true }
}); 

const recipeSchema = new mongoose.Schema({
    AuthorName: { type: String, required: true },
    RecipeName: { type: String, required: true },
    Ingredients: [ingredientSchema],
    ServingSize: { type: Number, required: true },
    PrepTimeMin: { type: Number, required: true },
    PrepTimeMax: { type: Number, required: true },
    Categories: [String],
    Allergens: [String],
    DietaryRequirements: [String],
    RequiredCookware: [String],
    MealType: { type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Brunch'], required: true },
    Steps: [stepSchema]
});

recipeSchema.index({
    RecipeName: 'text',
    Categories: 'text',
    Allergens: 'text',
    DietaryRequirements: 'text',
    RequiredCookware: 'text',
    'Steps.instruction': 'text',
    'Ingredients.name': 'text'
})

module.exports = mongoose.model('Recipe', recipeSchema);
