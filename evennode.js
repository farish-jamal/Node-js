const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
  console.log('aTurn off the motor!');
  setTimeout(() => {
      console.log('aTurn off the motor! Hello');
  }, 3000);
});

console.log("Holaaa");
myEmitter.emit('waterFull');