const getDavinciResponse = require('./davinci')()
const getDalleResponse = require('./dalle')()
const getJsResponse = require('./jshelper')()

module.exports = {
    getDavinciResponse,
    getDalleResponse,
    getJsResponse
}