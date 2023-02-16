const checkPhoneNumber = (messageObject) => {
    const destinationNumber = process.env.BOT_NUMBER ? messageObject.to : messageObject.from
    return destinationNumber
}

module.exports = {
    checkPhoneNumber
}