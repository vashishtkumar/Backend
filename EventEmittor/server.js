const EventEmittor=require("events");


const eventEmittor=new EventEmittor();

eventEmittor.on('greet',(name)=>{
    console.log(`Hello ${name}`);
})

eventEmittor.emit('greet',"vashisht");