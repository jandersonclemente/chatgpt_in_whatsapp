const settings = require('../settings')

const getDalleResponse = async (clientText, openai) => {
    const options = {
        prompt: clientText,
        n: 1,
        size: settings.image_size
    }

    try {
        const response = await openai.createImage(options)
        return response.data.data[0].url
    } catch (e) {
        console.error(e)
        return `OpenAI Response Error: ${e?.response?.data?.error?.message}`
    }
}

module.exports = () => {
    return getDalleResponse
}