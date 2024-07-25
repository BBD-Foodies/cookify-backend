const YT_API_KEY = process.env.YT_API_KEY;

const getRecipeSuggestedVideoLink = async (keyword) => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    try {
        const request = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&key=${YT_API_KEY}&q=${keyword}`;
        const response = await fetch(request, requestOptions);
        const data = (await response.json());

        const item = data.items[0];
        const videoId = item.id.videoId;
        const videoTitle = item.snippet.title || 'no data';
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}` || 'no data';

        return {
            videoTitle,
            videoUrl
        };
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getRecipeSuggestedVideoLink };