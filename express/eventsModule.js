const events = require('events');


const event = new EventEmitter();
const event1 = new EventEmitter();

event.on('helloworld',()=>{
    console.log('Hello World !!');
});
event.emit('helloworld');



event1.on('checkpage',(cs,msg) => {
    console.log("Hello World");
});
event1.emit('checkpage', 200 ,"ok" );