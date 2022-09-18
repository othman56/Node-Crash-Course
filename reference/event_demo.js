// bring in our events module
const EventEmitter = require('events')

// create a class event emiter
class MyEmitter extends EventEmitter {}

// initialize a new object from the clas we created
const myEmitter = new MyEmitter()

// create an event listener
myEmitter.on('event',() => console.log('event fired'));

// initialize the event using the emit keyword
myEmitter.emit('event');
