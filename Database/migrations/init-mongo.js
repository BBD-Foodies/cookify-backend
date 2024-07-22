db = db.getSiblingDB('foodiedb');

db.recipes.drop();
db.recipes.insertMany([
    {
        RecipeName: "Chocolate Chip Cookies",
        Ingredients: [
            { name: "Chocolate Chips", quantity: 200, measurement: "g" },
            { name: "Flour", quantity: 300, measurement: "g" },
            { name: "Butter", quantity: 100, measurement: "g" },
            { name: "Sugar", quantity: 150, measurement: "g" }
        ],
        ServingSize: 4,
        PrepTimeMin: 10,
        PrepTimeMax: 20,
        Categories: ["Dessert", "Snack"],
        Allergens: [],
        DietaryRequirements: [],
        RequiredCookware: ["Bowl", "Oven"],
        MealType: "Dessert",
        Steps: [
            { step: 1, instruction: "Mix all dry ingredients except sugar." },
            { step: 2, instruction: "Cream butter and sugar together." },
            { step: 3, instruction: "Combine all ingredients and form dough." },
            { step: 4, instruction: "Place dough on baking sheet and bake." }
        ]
    },
    {
        AuthorName: "Thato-Tladi",
        RecipeName: "Caesar Salad",
        Ingredients: [
            { name: "Romaine Lettuce", quantity: 1, measurement: "bunch" },
            { name: "Parmesan Cheese", quantity: 50, measurement: "g" },
            { name: "Croutons", quantity: 30, measurement: "g" },
            { name: "Caesar Dressing", quantity: 20, measurement: "ml" }
        ],
        ServingSize: 2,
        PrepTimeMin: 15,
        PrepTimeMax: 15,
        Categories: ["Salad", "Lunch"],
        Allergens: ["Dairy"],
        DietaryRequirements: ["Vegetarian"],
        RequiredCookware: ["Bowl", "Salad Tossers"],
        MealType: "Lunch",
        Steps: [
            { step: 1, instruction: "Wash and tear the lettuce into pieces." },
            { step: 2, instruction: "Add croutons and Parmesan cheese." },
            { step: 3, instruction: "Drizzle Caesar dressing and toss the salad." }
        ]
    }
]);


// Create or update the user with readWrite access to the 'foodiedb'
db.createUser({
    user: "root",
    pwd: "password",  // Choose a secure password
    roles: [{ role: "readWrite", db: "foodiedb" }],
    passwordDigestor: "server"
});

print('Dummy data inserted into database.');
