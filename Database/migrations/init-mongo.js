db = db.getSiblingDB('foodiedb');

db.recipes.drop();
db.recipes.insertMany([
    {
        title: "Chocolate Chip Cookies",
        ingredients: [
            { number: 2, size: 100, unit: "grams", extra: "chopped" },
            { number: 1, size: 200, unit: "grams", extra: "none" }
        ],
        mealType: "Dessert",
        mealTimeOfDay: "Snack",
        preparationTime: "00:10:00",
        cookingTime: "00:20:00",
        servings: 4,
        nutritionInformation: "High calories",
        instructions: "Mix all ingredients and bake.",
        materialsNeeded: "Bowl, oven",
        dietaryType: "None",
        tags: ["sweet", "baking"],
        story: "A classic treat for any occasion.",
        FAQ: [
            { question: "Can I use less sugar?", answer: "Yes, but adjust baking time accordingly." }
        ]
    },
    {
        title: "Caesar Salad",
        ingredients: [
            { number: 1, size: 1, unit: "bunch", extra: "washed and torn" },
            { number: 2, size: 50, unit: "grams", extra: "grated" }
        ],
        mealType: "Salad",
        mealTimeOfDay: "Lunch",
        preparationTime: "00:15:00",
        cookingTime: "00:00:00",
        servings: 2,
        nutritionInformation: "Low calories",
        instructions: "Toss all ingredients in a large bowl.",
        materialsNeeded: "Bowl, salad tossers",
        dietaryType: "Vegetarian",
        tags: ["healthy", "quick"],
        story: "Perfect for a quick, healthy lunch.",
        FAQ: [
            { question: "Can I add chicken?", answer: "Yes, add grilled chicken for extra protein." }
        ]
    }
]);

print('Dummy data inserted into database.');
