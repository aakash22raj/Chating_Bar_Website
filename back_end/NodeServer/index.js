// this index.js file is for node Server
// this help in handling socket.io connections
var express = require('express')
var cors = require('cors')
var app = express()
const httpServer = require("http").createServer(); 
const io = require('socket.io')(httpServer, {
    cors: {
      origin: '*',
    }
  });
const PORT = 3000;
httpServer.listen(PORT,()=>{
    console.log(`server starting at ${PORT}`);
    io.on("connection",function(socket){
        console.log(socket.id)
    })
});

  
 


const users = {};

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        console.log("New user", name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        console.log(message)
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] })
    });

    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });

})