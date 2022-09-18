// we bring in the logger class we exported
const Logger = require('./logger')

// create a new logger object called myLogger
const myLogger = new Logger();

// init event on the new class object
myLogger.on('message', (data) => console.log('called event', data))

// call the log method and pass in the message
myLogger.log('hello world')