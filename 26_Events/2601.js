//## 2601 - write a program for listen an event using event module

const EventEmitter = require('events');

// Create an event emitter instance
const eventEmitter = new EventEmitter();

// Define the event handler function
const eventHandler = () => {
  console.log('Custom event occurred!');
};

// Listen for the custom event
eventEmitter.on('customEvent', eventHandler);

// Emit the custom event
eventEmitter.emit('customEvent');
