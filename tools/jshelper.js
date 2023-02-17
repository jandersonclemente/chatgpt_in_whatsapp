const settings = require('../settings')

const getJsResponse = async (clientText, openai) => {
    if (typeof clientText !== 'string' || typeof openai !== 'object') return

    const options = {
        model: "code-davinci-002",
        prompt: clientText, // client question
        temperature: settings.jshelper_variation, // variation number
        max_tokens: settings.jshelper_words, // amount of words / up to 4000
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["You:"],
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
    return getJsResponse
}