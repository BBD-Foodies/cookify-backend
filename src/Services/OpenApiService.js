const { OpenAI } = require("openai");

const openai = new OpenAI();

async function completion() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-4o-mini",
    });

    console.log(completion.choices[0]);
}

const getRecipeGenIcon = async (recipeName) => {
    const response = await openai.images.generate({
        model: "dall-e-2",
        prompt: `${recipeName}, presentable for a recipe blog, hyper-realistic.`,
        n: 1,
        size: "256x256",
    });
    let image_url = response.data[0].url || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCYkTtbFS6mH-PZ5e8f5vV7dD1sEOUZeMmQ&s';
    return image_url;
}

module.exports = { getRecipeGenIcon };