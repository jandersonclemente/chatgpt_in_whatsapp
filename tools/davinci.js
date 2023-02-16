const settings = require('../settings')

const getDavinciResponse = async (clientText, openai) => {
    if (typeof clientText !== 'string' || typeof openai !== 'object') return

    const options = {
        model: "text-davinci-003",
        prompt: clientText, // client question
        temperature: settings.davinci_variation, // variation number
        max_tokens: settings.davinci_words // amount of words / up to 4000
    }

    try {
        const response = await openai.createCompletion(options)
        let botResponse = ""

        response.data.choices.forEach(({text}) => {
            botResponse += text
        })

        return `${settings.davinci_header_text} \n\n ${botResponse.trim()}`
    } catch (e){
        console.error(e)
        return `OpenAI Response Error: ${e}`
    }
}

module.exports = openai => {
    return getDavinciResponse
}