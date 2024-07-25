const { OpenAI } = require("openai");

const openai = new OpenAI();

const imageCache = {};

async function completion() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-4o-mini",
    });

    console.log(completion.choices[0]);
}

async function getImageUrl(recipeName) {
    const formattedRecipeName = recipeName.replace(/\s+/g, '').toLowerCase();
    if (imageCache[formattedRecipeName]) {
        return imageCache[formattedRecipeName];
    }

    const imageUrl = await apiCallDalle2(formattedRecipeName);

    imageCache[formattedRecipeName] = imageUrl;

    return imageUrl;
}

const apiCallDalle2 = async (recipeName) => {
    let image_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCYkTtbFS6mH-PZ5e8f5vV7dD1sEOUZeMmQ&s';
    try {
        const response = await openai.images.generate({
            model: "dall-e-2",
            prompt: `${recipeName}, presentable for a recipe blog, hyper-realistic.`,
            n: 1,
            size: "256x256",
        });
        image_url = response.data[0].url;
    } catch (error) {
        console.error('Could not get AI image.');
    }
    return image_url;
}

const getRecipeGenIcon = async (recipeName) => {
    const imageUrl = await getImageUrl(recipeName);
    return imageUrl;
}

module.exports = { getRecipeGenIcon };