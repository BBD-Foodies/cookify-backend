const MEAL_TYPE_ENUMS = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Brunch'];
const MEASUREMENT_ENUMS = ['g', 'tbsp', 'tsp', 'ml', 'cup', 'whole', 'handful', 'pinch'];

const VALID_FIELDS = ['RecipeName', 'Categories', 'Allergens', 'DietaryRequirements', 'MealType', 'Ingredients', 'ServingSize', 'RequiredCookware' ];

const GROUP_BY_FIELDS = ['MealType', 'Categories', 'Allergens', 'DietaryRequirements'];

module.exports = {
    GROUP_BY_FIELDS,
    MEAL_TYPE_ENUMS,
    MEASUREMENT_ENUMS,
    VALID_FIELDS
};
