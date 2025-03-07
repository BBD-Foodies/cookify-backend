const MEAL_TYPE_ENUMS = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Brunch', 'Beverage'];

const MEASUREMENT_ENUMS = ['g', 'tbsp', 'tsp', 'ml', 'cup', 'whole', 'handful', 'pinch'];

const DIETARY_REQUIREMENT_ENUMS = ["Vegetarian", "Vegan", "Halal", "Kosher", "Pescatarian"];

const VALID_FIELDS = ['RecipeName', 'Categories', 'Allergens', 'DietaryRequirements', 'MealType', 'Ingredients', 'ServingSize', 'RequiredCookware', "currentPage", "perPage" ];

const GROUP_BY_FIELDS = ['MealType', 'Categories', 'Allergens', 'DietaryRequirements'];

const FILTER_BY_FIELDS = ['RecipeName', 'Categories', 'Allergens', 'DietaryRequirements', 'MealType', 'Ingredients', 'ServingSize', 'RequiredCookware', 'Steps', 'PrepTimeMax', 'PrepTimeMin'];

const UPDATE_ALLOWED_FIELDS = ['RecipeName', 'Categories', 'Allergens', 'DietaryRequirements', 'MealType', 'Ingredients', 'ServingSize', 'RequiredCookware', 'Steps', 'PrepTimeMax', 'PrepTimeMin'];

module.exports = {
    FILTER_BY_FIELDS,
    UPDATE_ALLOWED_FIELDS,
    GROUP_BY_FIELDS,
    MEAL_TYPE_ENUMS,
    MEASUREMENT_ENUMS,
    DIETARY_REQUIREMENT_ENUMS,
    VALID_FIELDS
};
