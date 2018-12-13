
const fs = require('fs')
const express = require('express')
const kraken = require('kraken-js')


module.exports = function() {
    const app = express()
    const returnObj = {}

    app.use(kraken({
        onconfig: function(config, next) {
            next(null, config)
        }
    }))
    app.on('start', function() {
        console.log("made it")
        httpServer = app.listen(8080, 'localhost')
    })

    returnObj.expressApp = app
    return returnObj
}