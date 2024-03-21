const express = require('express');
const http = require('http');
const hostname='0.0.0.0'
const port= process.env.PORT || 3000;


const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const rooms = {};

app.use(express.static('public'));








io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('createRoom',(roomData)=>{
      const {roomName} = roomData;

      if (rooms[roomName]) {
        socket.emit('roomExists');
        return;
      }

      rooms[roomName] = {userLimit:2,users: [{ id: socket.id }]};
      socket.join(roomName);



    } )

    socket.on('joinRoom', (roomData)=>{
      console.log('join cliked');
      const {roomName} = roomData;
      const room = rooms[roomName];
      if(room && room.users.length < room.userLimit){
        console.log('joined');
        room.users.push({ id: socket.id });
        socket.join(roomName);
        io.to(roomName).emit('userJoined', { userId: socket.id });
      }

      else if(room && room.users.length>=room.userLimit){
        console.log('full');
        socket.emit('roomFull');
        } 
        
      else {
        console.log('invalid');
        socket.emit('invalidRoom');
      }


      
    })



    socket.on('sendMessage', (msgdata)=>{
      let {roomName, ind ,player, pp1, pp2} = msgdata;
      const room = rooms[roomName];

      if (room && room.users.some(user => user.id === socket.id)) {

        io.to(roomName).emit('receiveMessage', { ind, player, pp1, pp2 });
      }


    })


  


    });




server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});