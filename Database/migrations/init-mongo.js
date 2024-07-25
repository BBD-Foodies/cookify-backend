db = db.getSiblingDB('foodiedb');

db.recipes.drop();
db.recipes.insertMany([
    {
        AuthorName: "JustinBBD",
        RecipeName: "Spaghetti Bolognese",
        Ingredients: [
            { name: "Spaghetti", quantity: 200, measurement: "g" },
            { name: "Ground Beef", quantity: 300, measurement: "g" },
            { name: "Tomato Sauce", quantity: 200, measurement: "ml" },
            { name: "Onion", quantity: 1, measurement: "whole" }
        ],
        ServingSize: 4,
        PrepTimeMin: 10,
        PrepTimeMax: 20,
        Categories: ["Dinner"],
        Allergens: [],
        DietaryRequirements: [],
        RequiredCookware: ["Pot", "Pan"],
        MealType: "Dinner",
        Steps: [
            { step: 1, instruction: "Boil spaghetti as per package instructions." },
            { step: 2, instruction: "Sauté onions in a pan." },
            { step: 3, instruction: "Add ground beef and cook until browned." },
            { step: 4, instruction: "Add tomato sauce and simmer for 10 minutes." }
        ]
    },
    {
        AuthorName: "Amaxdevq",
        RecipeName: "Chicken Alfredo",
        Ingredients: [
            { name: "Pasta", quantity: 200, measurement: "g" },
            { name: "Chicken Breast", quantity: 2, measurement: "whole" },
            { name: "Cream", quantity: 200, measurement: "ml" },
            { name: "Parmesan Cheese", quantity: 50, measurement: "g" }
        ],
        ServingSize: 2,
        PrepTimeMin: 15,
        PrepTimeMax: 20,
        Categories: ["Dinner"],
        Allergens: ["Dairy"],
        DietaryRequirements: [],
        RequiredCookware: ["Pot", "Pan"],
        MealType: "Dinner",
        Steps: [
            { step: 1, instruction: "Cook pasta as per package instructions." },
            { step: 2, instruction: "Cook chicken breast in a pan and slice." },
            { step: 3, instruction: "Heat cream and Parmesan cheese in a pan." },
            { step: 4, instruction: "Combine pasta, chicken, and sauce." }
        ]
    },
    {
        AuthorName: "Thato-Tladi",
        RecipeName: "Vegetable Stir-Fry",
        Ingredients: [
            { name: "Broccoli", quantity: 200, measurement: "g" },
            { name: "Carrots", quantity: 150, measurement: "g" },
            { name: "Bell Peppers", quantity: 100, measurement: "g" },
            { name: "Soy Sauce", quantity: 2, measurement: "tbsp" }
        ],
        ServingSize: 3,
        PrepTimeMin: 10,
        PrepTimeMax: 15,
        Categories: ["Lunch", "Dinner"],
        Allergens: ["Soy"],
        DietaryRequirements: ["Vegetarian", "Vegan"],
        RequiredCookware: ["Wok", "Bowl"],
        MealType: "Dinner",
        Steps: [
            { step: 1, instruction: "Chop all vegetables." },
            { step: 2, instruction: "Heat oil in wok and add vegetables." },
            { step: 3, instruction: "Add soy sauce and stir-fry until vegetables are tender." }
        ]
    },
    {
        AuthorName: "tristanphips",
        RecipeName: "Beef Tacos",
        Ingredients: [
            { name: "Tortillas", quantity: 4, measurement: "whole" },
            { name: "Ground Beef", quantity: 200, measurement: "g" },
            { name: "Cheese", quantity: 50, measurement: "g" },
            { name: "Lettuce", quantity: 1, measurement: "whole" }
        ],
        ServingSize: 2,
        PrepTimeMin: 10,
        PrepTimeMax: 15,
        Categories: ["Lunch", "Dinner"],
        Allergens: ["Dairy"],
        DietaryRequirements: [],
        RequiredCookware: ["Pan", "Bowl"],
        MealType: "Lunch",
        Steps: [
            { step: 1, instruction: "Cook ground beef in pan." },
            { step: 2, instruction: "Heat tortillas in separate pan." },
            { step: 3, instruction: "Assemble tacos with beef, cheese, and lettuce." }
        ]
    },
    {
        AuthorName: "JustinBBD",
        RecipeName: "Mango Smoothie",
        Ingredients: [
            { name: "Mango", quantity: 1, measurement: "whole" },
            { name: "Yogurt", quantity: 200, measurement: "g" },
            { name: "Honey", quantity: 1, measurement: "tbsp" },
            { name: "Milk", quantity: 100, measurement: "ml" }
        ],
        ServingSize: 2,
        PrepTimeMin: 5,
        PrepTimeMax: 10,
        Categories: ["Snack", "Dessert"],
        Allergens: ["Dairy"],
        DietaryRequirements: [],
        RequiredCookware: ["Blender", "Bowl"],
        MealType: "Dessert",
        Steps: [
            { step: 1, instruction: "Peel and chop the mango." },
            { step: 2, instruction: "Blend mango, yogurt, honey, and milk until smooth." },
            { step: 3, instruction: "Serve chilled." }
        ]
    },
    {
        AuthorName: "Amaxdevq",
        RecipeName: "Quinoa Salad",
        Ingredients: [
            { name: "Quinoa", quantity: 200, measurement: "g" },
            { name: "Cherry Tomatoes", quantity: 100, measurement: "g" },
            { name: "Cucumber", quantity: 1, measurement: "whole" },
            { name: "Lemon Juice", quantity: 2, measurement: "tbsp" }
        ],
        ServingSize: 2,
        PrepTimeMin: 15,
        PrepTimeMax: 20,
        Categories: ["Lunch", "Dinner"],
        Allergens: [],
        DietaryRequirements: ["Vegetarian", "Vegan"],
        RequiredCookware: ["Bowl", "Pot"],
        MealType: "Dinner",
        Steps: [
            { step: 1, instruction: "Cook quinoa according to package instructions." },
            { step: 2, instruction: "Chop cherry tomatoes and cucumber." },
            { step: 3, instruction: "Mix quinoa, tomatoes, cucumber, and lemon juice in a bowl." }
        ]
    },
    {
        AuthorName: "KatlegoKungoane",
        RecipeName: "Apple Pie",
        Ingredients: [
            { name: "Apples", quantity: 4, measurement: "whole" },
            { name: "Sugar", quantity: 150, measurement: "g" },
            { name: "Flour", quantity: 300, measurement: "g" },
            { name: "Butter", quantity: 200, measurement: "g" }
        ],
        ServingSize: 6,
        PrepTimeMin: 20,
        PrepTimeMax: 30,
        Categories: ["Dessert"],
        Allergens: ["Gluten", "Dairy"],
        DietaryRequirements: [],
        RequiredCookware: ["Oven", "Bowl"],
        MealType: "Dessert",
        Steps: [
            { step: 1, instruction: "Preheat oven to 180°C (350°F)." },
            { step: 2, instruction: "Peel and slice apples." },
            { step: 3, instruction: "Mix apples with sugar." },
            { step: 4, instruction: "Prepare dough with flour and butter." },
            { step: 5, instruction: "Fill dough with apple mixture and bake." }
        ]
    },
    {
        AuthorName: "tristanphips",
        RecipeName: "Chicken Curry",
        Ingredients: [
            { name: "Chicken Breast", quantity: 2, measurement: "whole" },
            { name: "Curry Powder", quantity: 2, measurement: "tbsp" },
            { name: "Coconut Milk", quantity: 400, measurement: "ml" },
            { name: "Onion", quantity: 1, measurement: "whole" }
        ],
        ServingSize: 4,
        PrepTimeMin: 15,
        PrepTimeMax: 20,
        Categories: ["Dinner"],
        Allergens: [],
        DietaryRequirements: ["Halal"],
        RequiredCookware: ["Pot", "Pan"],
        MealType: "Dinner",
        Steps: [
            { step: 1, instruction: "Sauté onions in a pan." },
            { step: 2, instruction: "Add chicken and curry powder." },
            { step: 3, instruction: "Pour in coconut milk and simmer until chicken is cooked." }
        ]
    },
    {
        AuthorName: "JustinBBD",
        RecipeName: "Banana Bread",
        Ingredients: [
            { name: "Bananas", quantity: 3, measurement: "whole" },
            { name: "Flour", quantity: 250, measurement: "g" },
            { name: "Sugar", quantity: 150, measurement: "g" },
            { name: "Butter", quantity: 100, measurement: "g" }
        ],
        ServingSize: 6,
        PrepTimeMin: 15,
        PrepTimeMax: 20,
        Categories: ["Dessert", "Snack"],
        Allergens: ["Gluten", "Dairy"],
        DietaryRequirements: [],
        RequiredCookware: ["Oven", "Bowl"],
        MealType: "Dessert",
        Steps: [
            { step: 1, instruction: "Preheat oven to 180°C (350°F)." },
            { step: 2, instruction: "Mash bananas in a bowl." },
            { step: 3, instruction: "Mix in flour, sugar, and butter." },
            { step: 4, instruction: "Pour mixture into a loaf pan and bake." }
        ]
    },
    {
        AuthorName: "Amaxdevq",
        RecipeName: "Pumpkin Soup",
        Ingredients: [
            { name: "Pumpkin", quantity: 500, measurement: "g" },
            { name: "Onion", quantity: 1, measurement: "whole" },
            { name: "Vegetable Broth", quantity: 500, measurement: "ml" },
            { name: "Cream", quantity: 100, measurement: "ml" }
        ],
        ServingSize: 4,
        PrepTimeMin: 15,
        PrepTimeMax: 20,
        Categories: ["Lunch", "Dinner"],
        Allergens: ["Dairy"],
        DietaryRequirements: ["Vegetarian"],
        RequiredCookware: ["Pot", "Blender"],
        MealType: "Lunch",
        Steps: [
            { step: 1, instruction: "Chop pumpkin and onion." },
            { step: 2, instruction: "Sauté onion in a pot." },
            { step: 3, instruction: "Add pumpkin and vegetable broth, simmer until tender." },
            { step: 4, instruction: "Blend the soup until smooth, add cream and serve." }
        ]
    },
    {
        AuthorName: "KatlegoKungoane",
        RecipeName: "Blueberry Muffins",
        Ingredients: [
            { name: "Blueberries", quantity: 100, measurement: "g" },
            { name: "Flour", quantity: 250, measurement: "g" },
            { name: "Sugar", quantity: 100, measurement: "g" },
            { name: "Butter", quantity: 100, measurement: "g" }
        ],
        ServingSize: 6,
        PrepTimeMin: 15,
        PrepTimeMax: 20,
        Categories: ["Dessert", "Snack"],
        Allergens: ["Gluten", "Dairy"],
        DietaryRequirements: [],
        RequiredCookware: ["Oven", "Bowl"],
        MealType: "Dessert",
        Steps: [
            { step: 1, instruction: "Preheat oven to 180°C (350°F)." },
            { step: 2, instruction: "Mix flour, sugar, and butter." },
            { step: 3, instruction: "Fold in blueberries." },
            { step: 4, instruction: "Pour mixture into muffin tins and bake." }
        ]
    },
    {
        AuthorName: "tristanphips",
        RecipeName: "Veggie Burger",
        Ingredients: [
            { name: "Black Beans", quantity: 200, measurement: "g" },
            { name: "Onion", quantity: 1, measurement: "whole" },
            { name: "Breadcrumbs", quantity: 100, measurement: "g" },
            { name: "Egg", quantity: 1, measurement: "whole" }
        ],
        ServingSize: 4,
        PrepTimeMin: 15,
        PrepTimeMax: 20,
        Categories: ["Lunch", "Dinner"],
        Allergens: ["Eggs", "Gluten"],
        DietaryRequirements: ["Vegetarian"],
        RequiredCookware: ["Pan", "Bowl"],
        MealType: "Lunch",
        Steps: [
            { step: 1, instruction: "Mash black beans in a bowl." },
            { step: 2, instruction: "Chop and sauté onion." },
            { step: 3, instruction: "Mix beans, onion, breadcrumbs, and egg." },
            { step: 4, instruction: "Form into patties and cook in pan." }
        ]
    },
    {
        AuthorName: "JustinBBD",
        RecipeName: "Grilled Cheese Sandwich",
        Ingredients: [
            { name: "Bread", quantity: 2, measurement: "whole" },
            { name: "Cheese", quantity: 50, measurement: "g" },
            { name: "Butter", quantity: 20, measurement: "g" }
        ],
        ServingSize: 1,
        PrepTimeMin: 5,
        PrepTimeMax: 10,
        Categories: ["Lunch", "Snack"],
        Allergens: ["Gluten", "Dairy"],
        DietaryRequirements: [],
        RequiredCookware: ["Pan"],
        MealType: "Lunch",
        Steps: [
            { step: 1, instruction: "Butter the bread slices." },
            { step: 2, instruction: "Place cheese between bread slices." },
            { step: 3, instruction: "Grill sandwich in pan until golden brown." }
        ]
    },
    {
        AuthorName: "Amaxdevq",
        RecipeName: "Fruit Salad",
        Ingredients: [
            { name: "Apple", quantity: 1, measurement: "whole" },
            { name: "Banana", quantity: 1, measurement: "whole" },
            { name: "Grapes", quantity: 100, measurement: "g" },
            { name: "Orange Juice", quantity: 50, measurement: "ml" }
        ],
        ServingSize: 2,
        PrepTimeMin: 10,
        PrepTimeMax: 15,
        Categories: ["Snack", "Dessert"],
        Allergens: [],
        DietaryRequirements: ["Vegetarian", "Vegan"],
        RequiredCookware: ["Bowl"],
        MealType: "Snack",
        Steps: [
            { step: 1, instruction: "Chop all fruits." },
            { step: 2, instruction: "Mix fruits in a bowl." },
            { step: 3, instruction: "Pour orange juice over the fruits." }
        ]
    },
    {
        AuthorName: "KatlegoKungoane",
        RecipeName: "Scrambled Eggs",
        Ingredients: [
            { name: "Eggs", quantity: 3, measurement: "whole" },
            { name: "Milk", quantity: 50, measurement: "ml" },
            { name: "Butter", quantity: 20, measurement: "g" },
            { name: "Salt", quantity: 1, measurement: "pinch" }
        ],
        ServingSize: 1,
        PrepTimeMin: 5,
        PrepTimeMax: 10,
        Categories: ["Breakfast"],
        Allergens: ["Eggs", "Dairy"],
        DietaryRequirements: [],
        RequiredCookware: ["Pan", "Bowl"],
        MealType: "Breakfast",
        Steps: [
            { step: 1, instruction: "Beat eggs with milk and salt." },
            { step: 2, instruction: "Melt butter in a pan." },
            { step: 3, instruction: "Pour egg mixture into pan and scramble until cooked." }
        ]
    },
    {
        AuthorName: "tristanphips",
        RecipeName: "Chicken Salad",
        Ingredients: [
            { name: "Chicken Breast", quantity: 1, measurement: "whole" },
            { name: "Lettuce", quantity: 1, measurement: "whole" },
            { name: "Tomatoes", quantity: 2, measurement: "whole" },
            { name: "Olive Oil", quantity: 2, measurement: "tbsp" }
        ],
        ServingSize: 2,
        PrepTimeMin: 10,
        PrepTimeMax: 15,
        Categories: ["Lunch", "Dinner"],
        Allergens: [],
        DietaryRequirements: [],
        RequiredCookware: ["Bowl"],
        MealType: "Lunch",
        Steps: [
            { step: 1, instruction: "Grill chicken breast and slice." },
            { step: 2, instruction: "Chop lettuce and tomatoes." },
            { step: 3, instruction: "Mix all ingredients in a bowl and drizzle with olive oil." }
        ]
    },
    {
        AuthorName: "JustinBBD",
        RecipeName: "Pancakes",
        Ingredients: [
            { name: "Flour", quantity: 200, measurement: "g" },
            { name: "Milk", quantity: 200, measurement: "ml" },
            { name: "Egg", quantity: 1, measurement: "whole" },
            { name: "Butter", quantity: 20, measurement: "g" }
        ],
        ServingSize: 4,
        PrepTimeMin: 10,
        PrepTimeMax: 15,
        Categories: ["Breakfast"],
        Allergens: ["Gluten", "Dairy", "Eggs"],
        DietaryRequirements: [],
        RequiredCookware: ["Pan", "Bowl"],
        MealType: "Breakfast",
        Steps: [
            { step: 1, instruction: "Mix flour, milk, and egg in a bowl." },
            { step: 2, instruction: "Melt butter in a pan." },
            { step: 3, instruction: "Pour batter into pan and cook pancakes." }
        ]
    },
    {
        AuthorName: "Amaxdevq",
        RecipeName: "Guacamole",
        Ingredients: [
            { name: "Avocado", quantity: 2, measurement: "whole" },
            { name: "Lime Juice", quantity: 1, measurement: "tbsp" },
            { name: "Salt", quantity: 1, measurement: "pinch" },
            { name: "Onion", quantity: 1, measurement: "whole" }
        ],
        ServingSize: 2,
        PrepTimeMin: 10,
        PrepTimeMax: 15,
        Categories: ["Snack"],
        Allergens: [],
        DietaryRequirements: ["Vegetarian", "Vegan"],
        RequiredCookware: ["Bowl"],
        MealType: "Snack",
        Steps: [
            { step: 1, instruction: "Mash avocados in a bowl." },
            { step: 2, instruction: "Mix in lime juice, salt, and chopped onion." }
        ]
    },
    {
        AuthorName: "KatlegoKungoane",
        RecipeName: "Spaghetti Carbonara",
        Ingredients: [
            { name: "Spaghetti", quantity: 200, measurement: "g" },
            { name: "Bacon", quantity: 100, measurement: "g" },
            { name: "Eggs", quantity: 2, measurement: "whole" },
            { name: "Parmesan Cheese", quantity: 50, measurement: "g" }
        ],
        ServingSize: 2,
        PrepTimeMin: 15,
        PrepTimeMax: 20,
        Categories: ["Dinner"],
        Allergens: ["Eggs", "Dairy"],
        DietaryRequirements: [],
        RequiredCookware: ["Pot", "Pan"],
        MealType: "Dinner",
        Steps: [
            { step: 1, instruction: "Cook spaghetti as per package instructions." },
            { step: 2, instruction: "Cook bacon in a pan." },
            { step: 3, instruction: "Mix eggs and Parmesan cheese in a bowl." },
            { step: 4, instruction: "Combine spaghetti, bacon, and egg mixture." }
        ]
    },
    {
        AuthorName: "tristanphips",
        RecipeName: "Caesar Salad",
        Ingredients: [
            { name: "Romaine Lettuce", quantity: 1, measurement: "whole" },
            { name: "Croutons", quantity: 100, measurement: "g" },
            { name: "Parmesan Cheese", quantity: 50, measurement: "g" },
            { name: "Caesar Dressing", quantity: 2, measurement: "tbsp" }
        ],
        ServingSize: 2,
        PrepTimeMin: 10,
        PrepTimeMax: 15,
        Categories: ["Lunch", "Dinner"],
        Allergens: ["Dairy"],
        DietaryRequirements: [],
        RequiredCookware: ["Bowl"],
        MealType: "Lunch",
        Steps: [
            { step: 1, instruction: "Chop romaine lettuce." },
            { step: 2, instruction: "Mix lettuce, croutons, and Parmesan cheese in a bowl." },
            { step: 3, instruction: "Drizzle with Caesar dressing." }
        ]
    },
    {
        AuthorName: "JustinBBD",
        RecipeName: "French Toast",
        Ingredients: [
            { name: "Bread", quantity: 2, measurement: "whole" },
            { name: "Eggs", quantity: 2, measurement: "whole" },
            { name: "Milk", quantity: 50, measurement: "ml" },
            { name: "Butter", quantity: 20, measurement: "g" }
        ],
        ServingSize: 1,
        PrepTimeMin: 5,
        PrepTimeMax: 10,
        Categories: ["Breakfast"],
        Allergens: ["Gluten", "Dairy", "Eggs"],
        DietaryRequirements: [],
        RequiredCookware: ["Pan", "Bowl"],
        MealType: "Breakfast",
        Steps: [
            { step: 1, instruction: "Beat eggs and milk in a bowl." },
            { step: 2, instruction: "Dip bread slices in egg mixture." },
            { step: 3, instruction: "Cook bread in buttered pan until golden brown." }
        ]
    },
    {
        AuthorName: "Amaxdevq",
        RecipeName: "Lemonade",
        Ingredients: [
            { name: "Lemon Juice", quantity: 100, measurement: "ml" },
            { name: "Sugar", quantity: 50, measurement: "g" },
            { name: "Water", quantity: 500, measurement: "ml" },
            { name: "Ice", quantity: 1, measurement: "handful" }
        ],
        ServingSize: 2,
        PrepTimeMin: 5,
        PrepTimeMax: 10,
        Categories: ["Beverage"],
        Allergens: [],
        DietaryRequirements: ["Vegetarian", "Vegan"],
        RequiredCookware: ["Pitcher"],
        MealType: "Beverage",
        Steps: [
            { step: 1, instruction: "Mix lemon juice and sugar in a pitcher." },
            { step: 2, instruction: "Add water and stir until sugar dissolves." },
            { step: 3, instruction: "Serve over ice." }
        ]
    },
    {
        AuthorName: "KatlegoKungoane",
        RecipeName: "Chili Con Carne",
        Ingredients: [
            { name: "Ground Beef", quantity: 200, measurement: "g" },
            { name: "Kidney Beans", quantity: 100, measurement: "g" },
            { name: "Tomato Sauce", quantity: 200, measurement: "ml" },
            { name: "Onion", quantity: 1, measurement: "whole" }
        ],
        ServingSize: 4,
        PrepTimeMin: 15,
        PrepTimeMax: 20,
        Categories: ["Dinner"],
        Allergens: [],
        DietaryRequirements: [],
        RequiredCookware: ["Pot", "Pan"],
        MealType: "Dinner",
        Steps: [
            { step: 1, instruction: "Sauté onions in a pan." },
            { step: 2, instruction: "Add ground beef and cook until browned." },
            { step: 3, instruction: "Add kidney beans and tomato sauce, simmer." }
        ]
    },
    {
        AuthorName: "tristanphips",
        RecipeName: "Beef Stroganoff",
        Ingredients: [
            { name: "Beef Strips", quantity: 200, measurement: "g" },
            { name: "Mushrooms", quantity: 100, measurement: "g" },
            { name: "Sour Cream", quantity: 100, measurement: "ml" },
            { name: "Onion", quantity: 1, measurement: "whole" }
        ],
        ServingSize: 2,
        PrepTimeMin: 15,
        PrepTimeMax: 20,
        Categories: ["Dinner"],
        Allergens: ["Dairy"],
        DietaryRequirements: [],
        RequiredCookware: ["Pan"],
        MealType: "Dinner",
        Steps: [
            { step: 1, instruction: "Sauté onions and mushrooms in a pan." },
            { step: 2, instruction: "Add beef strips and cook until browned." },
            { step: 3, instruction: "Stir in sour cream and simmer for a few minutes." }
        ]
    },
    {
        AuthorName: "JustinBBD",
        RecipeName: "Fruit Smoothie",
        Ingredients: [
            { name: "Banana", quantity: 1, measurement: "whole" },
            { name: "Strawberries", quantity: 100, measurement: "g" },
            { name: "Yogurt", quantity: 200, measurement: "ml" },
            { name: "Honey", quantity: 1, measurement: "tbsp" }
        ],
        ServingSize: 2,
        PrepTimeMin: 5,
        PrepTimeMax: 10,
        Categories: ["Beverage", "Snack"],
        Allergens: ["Dairy"],
        DietaryRequirements: [],
        RequiredCookware: ["Blender"],
        MealType: "Beverage",
        Steps: [
            { step: 1, instruction: "Combine all ingredients in a blender." },
            { step: 2, instruction: "Blend until smooth." },
            { step: 3, instruction: "Serve chilled." }
        ]
    },
    {
        AuthorName: "Amaxdevq",
        RecipeName: "Minestrone Soup",
        Ingredients: [
            { name: "Mixed Vegetables", quantity: 300, measurement: "g" },
            { name: "Tomato Paste", quantity: 100, measurement: "g" },
            { name: "Vegetable Broth", quantity: 500, measurement: "ml" },
            { name: "Pasta", quantity: 100, measurement: "g" }
        ],
        ServingSize: 4,
        PrepTimeMin: 20,
        PrepTimeMax: 30,
        Categories: ["Lunch", "Dinner"],
        Allergens: ["Gluten"],
        DietaryRequirements: ["Vegetarian"],
        RequiredCookware: ["Pot"],
        MealType: "Lunch",
        Steps: [
            { step: 1, instruction: "Chop mixed vegetables." },
            { step: 2, instruction: "Sauté vegetables in a pot." },
            { step: 3, instruction: "Add vegetable broth, tomato paste, and pasta." },
            { step: 4, instruction: "Simmer until pasta is cooked." }
        ]
    },
    {
        AuthorName: "KatlegoKungoane",
        RecipeName: "BBQ Chicken Wings",
        Ingredients: [
            { name: "Chicken Wings", quantity: 500, measurement: "g" },
            { name: "BBQ Sauce", quantity: 100, measurement: "ml" },
            { name: "Honey", quantity: 1, measurement: "tbsp" },
            { name: "Garlic", quantity: 2, measurement: "whole" }
        ],
        ServingSize: 4,
        PrepTimeMin: 20,
        PrepTimeMax: 25,
        Categories: ["Dinner"],
        Allergens: [],
        DietaryRequirements: [],
        RequiredCookware: ["Oven", "Bowl"],
        MealType: "Dinner",
        Steps: [
            { step: 1, instruction: "Preheat oven to 200°C (400°F)." },
            { step: 2, instruction: "Mix BBQ sauce, honey, and minced garlic." },
            { step: 3, instruction: "Coat chicken wings with the mixture." },
            { step: 4, instruction: "Bake chicken wings in the oven until cooked through." }
        ]
    },
    {
        AuthorName: "tristanphips",
        RecipeName: "Chocolate Chip Cookies",
        Ingredients: [
            { name: "Flour", quantity: 250, measurement: "g" },
            { name: "Sugar", quantity: 100, measurement: "g" },
            { name: "Butter", quantity: 100, measurement: "g" },
            { name: "Chocolate Chips", quantity: 100, measurement: "g" }
        ],
        ServingSize: 12,
        PrepTimeMin: 15,
        PrepTimeMax: 20,
        Categories: ["Dessert", "Snack"],
        Allergens: ["Gluten", "Dairy"],
        DietaryRequirements: [],
        RequiredCookware: ["Oven", "Bowl"],
        MealType: "Dessert",
        Steps: [
            { step: 1, instruction: "Preheat oven to 180°C (350°F)." },
            { step: 2, instruction: "Mix flour, sugar, and butter in a bowl." },
            { step: 3, instruction: "Fold in chocolate chips." },
            { step: 4, instruction: "Drop spoonfuls of dough onto a baking sheet and bake." }
        ]
    },
    {
        AuthorName: "JustinBBD",
        RecipeName: "Greek Salad",
        Ingredients: [
            { name: "Cucumber", quantity: 1, measurement: "whole" },
            { name: "Tomatoes", quantity: 2, measurement: "whole" },
            { name: "Feta Cheese", quantity: 100, measurement: "g" },
            { name: "Olive Oil", quantity: 2, measurement: "tbsp" }
        ],
        ServingSize: 2,
        PrepTimeMin: 10,
        PrepTimeMax: 15,
        Categories: ["Lunch", "Dinner"],
        Allergens: ["Dairy"],
        DietaryRequirements: ["Vegetarian"],
        RequiredCookware: ["Bowl"],
        MealType: "Lunch",
        Steps: [
            { step: 1, instruction: "Chop cucumber and tomatoes." },
            { step: 2, instruction: "Mix vegetables in a bowl." },
            { step: 3, instruction: "Add feta cheese and drizzle with olive oil." }
        ]
    },
    {
        AuthorName: "KatlegoKungoane",
        RecipeName: "Avocado Toast",
        Ingredients: [
            { name: "Bread", quantity: 2, measurement: "whole" },
            { name: "Avocado", quantity: 1, measurement: "whole" },
            { name: "Olive Oil", quantity: 1, measurement: "tbsp" },
            { name: "Salt", quantity: 1, measurement: "pinch" },
            { name: "Pepper", quantity: 1, measurement: "pinch" }
        ],
        ServingSize: 1,
        PrepTimeMin: 5,
        PrepTimeMax: 10,
        Categories: ["Breakfast", "Snack"],
        Allergens: ["Gluten"],
        DietaryRequirements: ["Vegetarian"],
        RequiredCookware: ["Toaster"],
        MealType: "Breakfast",
        Steps: [
            { step: 1, instruction: "Toast the bread." },
            { step: 2, instruction: "Mash the avocado and spread on toast." },
            { step: 3, instruction: "Drizzle with olive oil and season with salt and pepper." }
        ]
    },
    {
        AuthorName: "tristanphips",
        RecipeName: "Veggie Stir-Fry",
        Ingredients: [
            { name: "Bell Pepper", quantity: 1, measurement: "whole" },
            { name: "Broccoli", quantity: 100, measurement: "g" },
            { name: "Carrot", quantity: 1, measurement: "whole" },
            { name: "Soy Sauce", quantity: 2, measurement: "tbsp" },
            { name: "Olive Oil", quantity: 1, measurement: "tbsp" }
        ],
        ServingSize: 2,
        PrepTimeMin: 10,
        PrepTimeMax: 20,
        Categories: ["Lunch", "Dinner"],
        Allergens: ["Soy"],
        DietaryRequirements: ["Vegan"],
        RequiredCookware: ["Wok"],
        MealType: "Dinner",
        Steps: [
            { step: 1, instruction: "Chop all vegetables." },
            { step: 2, instruction: "Heat oil in a wok." },
            { step: 3, instruction: "Stir-fry vegetables until tender." },
            { step: 4, instruction: "Add soy sauce and mix well." }
        ]
    },
     {
        AuthorName: "Thato-Tladi",
        RecipeName: "Caprese Salad",
        Ingredients: [
            { name: "Tomatoes", quantity: 3, measurement: "whole" },
            { name: "Mozzarella", quantity: 200, measurement: "g" },
            { name: "Basil", quantity: 1, measurement: "handful" },
            { name: "Olive Oil", quantity: 2, measurement: "tbsp" },
            { name: "Balsamic Vinegar", quantity: 1, measurement: "tbsp" }
        ],
        ServingSize: 2,
        PrepTimeMin: 10,
        PrepTimeMax: 15,
        Categories: ["Salad", "Lunch"],
        Allergens: ["Dairy"],
        DietaryRequirements: ["Vegetarian"],
        RequiredCookware: ["Bowl"],
        MealType: "Lunch",
        Steps: [
            { step: 1, instruction: "Slice tomatoes and mozzarella." },
            { step: 2, instruction: "Arrange tomatoes, mozzarella, and basil on a plate." },
            { step: 3, instruction: "Drizzle with olive oil and balsamic vinegar." }
        ]
    },
    {
        AuthorName: "KatlegoKungoane",
        RecipeName: "Chocolate Mousse",
        Ingredients: [
            { name: "Dark Chocolate", quantity: 200, measurement: "g" },
            { name: "Eggs", quantity: 3, measurement: "whole" },
            { name: "Sugar", quantity: 50, measurement: "g" },
            { name: "Cream", quantity: 200, measurement: "ml" }
        ],
        ServingSize: 4,
        PrepTimeMin: 20,
        PrepTimeMax: 40,
        Categories: ["Dessert"],
        Allergens: ["Dairy", "Eggs"],
        DietaryRequirements: [],
        RequiredCookware: ["Bowl"],
        MealType: "Dessert",
        Steps: [
            { step: 1, instruction: "Melt dark chocolate." },
            { step: 2, instruction: "Whisk egg yolks with sugar." },
            { step: 3, instruction: "Fold melted chocolate into egg mixture." },
            { step: 4, instruction: "Whip cream and fold into chocolate mixture." }
        ]
    },
    {
        AuthorName: "tristanphips",
        RecipeName: "Mushroom Risotto",
        Ingredients: [
            { name: "Arborio Rice", quantity: 200, measurement: "g" },
            { name: "Mushrooms", quantity: 150, measurement: "g" },
            { name: "Onion", quantity: 1, measurement: "whole" },
            { name: "Vegetable Broth", quantity: 500, measurement: "ml" },
            { name: "Parmesan Cheese", quantity: 50, measurement: "g" }
        ],
        ServingSize: 2,
        PrepTimeMin: 25,
        PrepTimeMax: 40,
        Categories: ["Dinner"],
        Allergens: ["Dairy"],
        DietaryRequirements: ["Vegetarian"],
        RequiredCookware: ["Pot", "Pan"],
        MealType: "Dinner",
        Steps: [
            { step: 1, instruction: "Sauté onions and mushrooms." },
            { step: 2, instruction: "Add rice and cook until translucent." },
            { step: 3, instruction: "Gradually add broth, stirring continuously." },
            { step: 4, instruction: "Mix in Parmesan cheese before serving." }
        ]
    },
    {
        AuthorName: "Amaxdevq",
        RecipeName: "Greek Yogurt Parfait",
        Ingredients: [
            { name: "Greek Yogurt", quantity: 200, measurement: "ml" },
            { name: "Granola", quantity: 50, measurement: "g" },
            { name: "Honey", quantity: 2, measurement: "tbsp" },
            { name: "Berries", quantity: 100, measurement: "g" }
        ],
        ServingSize: 1,
        PrepTimeMin: 5,
        PrepTimeMax: 10,
        Categories: ["Breakfast", "Snack"],
        Allergens: ["Dairy"],
        DietaryRequirements: ["Vegetarian"],
        RequiredCookware: ["Bowl"],
        MealType: "Breakfast",
        Steps: [
            { step: 1, instruction: "Layer yogurt, granola, and berries in a bowl." },
            { step: 2, instruction: "Drizzle with honey." }
        ]
    },
    {
        AuthorName: "Thato-Tladi",
        RecipeName: "Apple Pie",
        Ingredients: [
            { name: "Apples", quantity: 4, measurement: "whole" },
            { name: "Flour", quantity: 300, measurement: "g" },
            { name: "Sugar", quantity: 200, measurement: "g" },
            { name: "Butter", quantity: 150, measurement: "g" },
            { name: "Cinnamon", quantity: 1, measurement: "tsp" }
        ],
        ServingSize: 8,
        PrepTimeMin: 30,
        PrepTimeMax: 60,
        Categories: ["Dessert"],
        Allergens: ["Gluten", "Dairy"],
        DietaryRequirements: [],
        RequiredCookware: ["Oven", "Bowl"],
        MealType: "Dessert",
        Steps: [
            { step: 1, instruction: "Preheat oven to 180°C (350°F)." },
            { step: 2, instruction: "Peel and slice apples." },
            { step: 3, instruction: "Mix apples with sugar and cinnamon." },
            { step: 4, instruction: "Prepare dough with flour and butter, and fill with apple mixture." },
            { step: 5, instruction: "Bake for 40 minutes." }
        ]
    },
    {
        AuthorName: "KatlegoKungoane",
        RecipeName: "Lentil Soup",
        Ingredients: [
            { name: "Lentils", quantity: 200, measurement: "g" },
            { name: "Carrot", quantity: 1, measurement: "whole" },
            { name: "Celery", quantity: 2, measurement: "whole" },
            { name: "Onion", quantity: 1, measurement: "whole" },
            { name: "Vegetable Broth", quantity: 1, measurement: "cup" }
        ],
        ServingSize: 4,
        PrepTimeMin: 15,
        PrepTimeMax: 30,
        Categories: ["Lunch", "Dinner"],
        Allergens: [],
        DietaryRequirements: ["Vegan"],
        RequiredCookware: ["Pot"],
        MealType: "Dinner",
        Steps: [
            { step: 1, instruction: "Chop all vegetables." },
            { step: 2, instruction: "Sauté onions, carrots, and celery." },
            { step: 3, instruction: "Add lentils and broth, and cook until lentils are tender." }
        ]
    },
    {
        AuthorName: "tristanphips",
        RecipeName: "Chicken Curry",
        Ingredients: [
            { name: "Chicken Breast", quantity: 2, measurement: "whole" },
            { name: "Coconut Milk", quantity: 400, measurement: "ml" },
            { name: "Curry Powder", quantity: 2, measurement: "tbsp" },
            { name: "Onion", quantity: 1, measurement: "whole" },
            { name: "Garlic", quantity: 2, measurement: "tbsp" }
        ],
        ServingSize: 4,
        PrepTimeMin: 20,
        PrepTimeMax: 40,
        Categories: ["Dinner"],
        Allergens: [],
        DietaryRequirements: ["Halal"],
        RequiredCookware: ["Pan"],
        MealType: "Dinner",
        Steps: [
            { step: 1, instruction: "Chop chicken and vegetables." },
            { step: 2, instruction: "Sauté onions and garlic." },
            { step: 3, instruction: "Add chicken and cook until browned." },
            { step: 4, instruction: "Stir in curry powder and coconut milk, and simmer until cooked through." }
        ]
    },
    {
        AuthorName: "JustinBBD",
        RecipeName: "Spaghetti Carbonara",
        Ingredients: [
            { name: "Spaghetti", quantity: 200, measurement: "g" },
            { name: "Pancetta", quantity: 100, measurement: "g" },
            { name: "Parmesan Cheese", quantity: 50, measurement: "g" },
            { name: "Eggs", quantity: 2, measurement: "whole" },
            { name: "Black Pepper", quantity: 1, measurement: "tsp" }
        ],
        ServingSize: 2,
        PrepTimeMin: 15,
        PrepTimeMax: 25,
        Categories: ["Lunch", "Dinner"],
        Allergens: ["Gluten", "Dairy", "Eggs"],
        DietaryRequirements: [],
        RequiredCookware: ["Pot", "Pan"],
        MealType: "Dinner",
        Steps: [
            { step: 1, instruction: "Cook spaghetti according to package instructions." },
            { step: 2, instruction: "Sauté pancetta until crispy." },
            { step: 3, instruction: "Whisk eggs and Parmesan together." },
            { step: 4, instruction: "Combine cooked spaghetti with pancetta and egg mixture, and season with black pepper." }
        ]
    },
    {
        AuthorName: "Amaxdevq",
        RecipeName: "Tuna Salad",
        Ingredients: [
            { name: "Tuna", quantity: 1, measurement: "whole" },
            { name: "Mayonnaise", quantity: 3, measurement: "tbsp" },
            { name: "Celery", quantity: 1, measurement: "whole" },
            { name: "Onion", quantity: 1, measurement: "whole" },
            { name: "Lemon Juice", quantity: 1, measurement: "tbsp" }
        ],
        ServingSize: 2,
        PrepTimeMin: 10,
        PrepTimeMax: 15,
        Categories: ["Lunch"],
        Allergens: ["Fish", "Eggs"],
        DietaryRequirements: [],
        RequiredCookware: ["Bowl"],
        MealType: "Lunch",
        Steps: [
            { step: 1, instruction: "Chop celery and onion." },
            { step: 2, instruction: "Mix tuna, mayonnaise, celery, onion, and lemon juice in a bowl." }
        ]
    },
    {
        AuthorName: "Thato-Tladi",
        RecipeName: "Veggie Omelette",
        Ingredients: [
            { name: "Eggs", quantity: 3, measurement: "whole" },
            { name: "Bell Pepper", quantity: 1, measurement: "whole" },
            { name: "Onion", quantity: 1, measurement: "whole" },
            { name: "Cheddar Cheese", quantity: 50, measurement: "g" },
            { name: "Milk", quantity: 50, measurement: "ml" }
        ],
        ServingSize: 1,
        PrepTimeMin: 10,
        PrepTimeMax: 20,
        Categories: ["Breakfast", "Brunch"],
        Allergens: ["Dairy", "Eggs"],
        DietaryRequirements: ["Vegetarian"],
        RequiredCookware: ["Pan"],
        MealType: "Breakfast",
        Steps: [
            { step: 1, instruction: "Chop bell pepper and onion." },
            { step: 2, instruction: "Beat eggs with milk." },
            { step: 3, instruction: "Cook vegetables in a pan until tender." },
            { step: 4, instruction: "Add egg mixture and cook until set, then sprinkle with cheese." }
        ]
    },
    {
        AuthorName: "KatlegoKungoane",
        RecipeName: "Grilled Cheese Sandwich",
        Ingredients: [
            { name: "Bread", quantity: 2, measurement: "whole" },
            { name: "Cheddar Cheese", quantity: 100, measurement: "g" },
            { name: "Butter", quantity: 20, measurement: "g" }
        ],
        ServingSize: 1,
        PrepTimeMin: 5,
        PrepTimeMax: 10,
        Categories: ["Lunch", "Snack"],
        Allergens: ["Gluten", "Dairy"],
        DietaryRequirements: ["Vegetarian"],
        RequiredCookware: ["Pan"],
        MealType: "Lunch",
        Steps: [
            { step: 1, instruction: "Butter the bread slices." },
            { step: 2, instruction: "Place cheese between the bread slices." },
            { step: 3, instruction: "Grill in a pan until golden brown and cheese is melted." }
        ]
    },
    {
        AuthorName: "tristanphips",
        RecipeName: "Chicken Tacos",
        Ingredients: [
            { name: "Chicken Breast", quantity: 2, measurement: "whole" },
            { name: "Taco Shells", quantity: 4, measurement: "whole" },
            { name: "Lettuce", quantity: 1, measurement: "handful" },
            { name: "Cheddar Cheese", quantity: 50, measurement: "g" },
            { name: "Salsa", quantity: 2, measurement: "tbsp" }
        ],
        ServingSize: 2,
        PrepTimeMin: 15,
        PrepTimeMax: 25,
        Categories: ["Lunch", "Dinner"],
        Allergens: ["Dairy"],
        DietaryRequirements: [],
        RequiredCookware: ["Pan"],
        MealType: "Dinner",
        Steps: [
            { step: 1, instruction: "Cook chicken and shred it." },
            { step: 2, instruction: "Fill taco shells with chicken, lettuce, cheese, and salsa." }
        ]
    },
    {
        AuthorName: "JustinBBD",
        RecipeName: "Banana Smoothie",
        Ingredients: [
            { name: "Bananas", quantity: 2, measurement: "whole" },
            { name: "Milk", quantity: 200, measurement: "ml" },
            { name: "Honey", quantity: 1, measurement: "tbsp" },
            { name: "Greek Yogurt", quantity: 100, measurement: "ml" }
        ],
        ServingSize: 2,
        PrepTimeMin: 5,
        PrepTimeMax: 10,
        Categories: ["Breakfast", "Snack"],
        Allergens: ["Dairy"],
        DietaryRequirements: [],
        RequiredCookware: ["Blender"],
        MealType: "Breakfast",
        Steps: [
            { step: 1, instruction: "Combine all ingredients in a blender and blend until smooth." }
        ]
    },
    {
        AuthorName: "tristanphips",
        RecipeName: "Pancakes",
        Ingredients: [
            { name: "All-Purpose Flour", quantity: 1, measurement: "cup" },
            { name: "Sugar", quantity: 2, measurement: "tbsp" },
            { name: "Baking Powder", quantity: 1, measurement: "tbsp" },
            { name: "Salt", quantity: 1/2, measurement: "tsp" },
            { name: "Milk", quantity: 1, measurement: "cup" },
            { name: "Egg", quantity: 1, measurement: "whole" },
            { name: "Melted Butter", quantity: 2, measurement: "tbsp" },
            { name: "Vanilla Extract", quantity: 1, measurement: "tsp" }
        ],
        ServingSize: 4,
        PrepTimeMin: 10,
        PrepTimeMax: 15,
        Categories: ["Breakfast", "Brunch"],
        Allergens: ["Gluten", "Dairy", "Eggs"],
        DietaryRequirements: [],
        RequiredCookware: ["Frying Pan", "Mixing Bowl"],
        MealType: "Breakfast",
        Steps: [
            { step: 1, instruction: "In a mixing bowl, whisk together flour, sugar, baking powder, and salt." },
            { step: 2, instruction: "In another bowl, combine milk, egg, melted butter, and vanilla extract." },
            { step: 3, instruction: "Pour the wet ingredients into the dry ingredients and stir until just combined." },
            { step: 4, instruction: "Heat a frying pan over medium heat and lightly grease it with butter." },
            { step: 5, instruction: "Pour 1/4 cup of batter onto the pan for each pancake and cook until bubbles form on the surface, then flip and cook until golden brown." },
            { step: 6, instruction: "Serve with your favorite toppings." }
        ]
    }
]);


// This is just for local development
db.createUser({
    user: "root",
    pwd: "password",
    roles: [{ role: "readWrite", db: "foodiedb" }],
    passwordDigestor: "server"
});

print('Dummy data inserted into database.');
