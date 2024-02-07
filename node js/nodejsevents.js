const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('waterfull', () => {
  console.log('please turn off the motor');

  setTimeout(()=>{
    console.log('please turn off the the motor its a gentle reminder')
  },3000);
});

console.log("the script is running")

console.log("the script is still running")
myEmitter.emit('waterfull');