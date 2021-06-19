var events =require('events');
var eventEmitter =new events.EventEmitter();
// create an event Handler:
var MyEventHanler =function() {
    console.log('I hear a Scream !');

}
//Assign the eventHandler to an Event
eventEmitter.on('scream',MyEventHanler);
//Fire the 'scream' Event:
eventEmitter.emit('scream');
