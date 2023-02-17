require('dotenv').config()

const settings = require('./settings')

const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
    organization: process.env.OPENAI_ORG_ID,
    apiKey: process.env.OPENAI_TOKEN
})
const openai = new OpenAIApi(configuration)

const { create } = require('venom-bot')
const { checkPhoneNumber } = require('./helper')

const {
    getDavinciResponse,
    getDalleResponse,
    getJsResponse
} = require('./tools')

const commands = async (client, message) => {
    if (!message.text.indexOf(" ")) return

    const iaCommands = {
        davinci3: settings.davinci_trigger,
        dalle: settings.dalle_trigger,
        jshelper: settings.jshelper_trigger
    }

    const {text}    = message
    const question  = text.substring(text.indexOf(" "))
    const firstWord = text.substring(0, text.indexOf(" "))
    const destinationNumber = checkPhoneNumber(message)

    switch (firstWord) {
        case iaCommands.davinci3:
            getDavinciResponse(question, openai)
            .then( response => {
                client.sendText(destinationNumber, response)
            })

            break
        
        case iaCommands.dalle:
            const imgDescription = question

            getDalleResponse(imgDescription, openai)
            .then(imgUrl => {
                client.sendImage(
                    destinationNumber,
                    imgUrl,
                    imgDescription,
                    settings.dalle_text
                )
            })

            break

        case iaCommands.jshelper:
            getJsResponse(question, openai)
            .then(response => {
                client.sendText(destinationNumber, response)
            })

            break
    }
}

create({
    session: 'chat-gpt',
    multidevice: true
})
.then((client) => start(client))
.catch((erro) => {
    console.error(erro)
})

async function start(client) {
    client.onAnyMessage(message => {
        commands(client, message)
    })
}