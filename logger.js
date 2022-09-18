// bring in our events mopdule
const EventEmitter = require('events')
const uuid = require('uuid')

// create logger class
class Logger extends EventEmitter{
    log(msg) {
        // when we call the log method we want to all this event
        this.emit('message', {id: uuid.v4(), msg})
    }
}

module.exports = Logger;