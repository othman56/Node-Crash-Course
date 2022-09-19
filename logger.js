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

const myLogger = new Logger();
// module.exports = Logger;
myLogger.on('message', (data) => console.log('called event', data))

// call the log method and pass in the message
myLogger.log('hello world')
myLogger.log('hi')
myLogger.log('hello')