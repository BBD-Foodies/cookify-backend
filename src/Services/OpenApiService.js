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

    if (imageUrl.mustCache) {
        imageCache[formattedRecipeName] = imageUrl;
    }

    return imageUrl.image_url;
}

const apiCallDalle2 = async (recipeName) => {
    let image_url = 'https://media.gettyimages.com/id/1141797008/vector/table-knife-and-fork-vector.jpg?s=612x612&w=0&k=20&c=ZMscIoKfUiQevWFrxxwnhwZ-MvElVU8XFvmzSfZzolk=';
    let mustCache = false;
    try {
        const response = await openai.images.generate({
            model: "dall-e-2",
            prompt: `${recipeName}, presentable for a recipe blog, hyper-realistic.`,
            n: 1,
            size: "256x256",
        });
        image_url = response.data[0].url;
        mustCache = true;
    } catch (error) {
        console.error('Could not get AI image.');
        image_url = 'https://media.gettyimages.com/id/1141797008/vector/table-knife-and-fork-vector.jpg?s=612x612&w=0&k=20&c=ZMscIoKfUiQevWFrxxwnhwZ-MvElVU8XFvmzSfZzolk=';
        mustCache = false;
    }
    return { image_url, mustCache };
}

const getRecipeGenIcon = async (recipeName) => {
    const imageUrl = await getImageUrl(recipeName);
    return imageUrl;
}

module.exports = { getRecipeGenIcon };