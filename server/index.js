const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

const PORT = 4000;
let users = [];

io.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on('newUser', (data) => {
    users.push(data);
    socket.broadcast.emit('newUserResponse', users);
    socket.emit('newUserResponse', users);
  });

  socket.on('message', (data) => {
    socket.broadcast.emit('messageResponse', data);
    socket.emit('messageResponse', data);

    console.log(`⚡: ${data.socketID} user just sent a message!`);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');

    users = users.filter((user) => user.socketID !== socket.id);
    socket.broadcast.emit('newUserResponse', users);
    socket.emit('newUserResponse', users);

    socket.disconnect();
  });
});

server.listen(PORT, () => console.log('App was start at port : ' + PORT));
