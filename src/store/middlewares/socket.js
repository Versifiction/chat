import io from 'socket.io-client';

let socket = null;
const socketMW = store => next => (action) => {
  switch (action.type) {
    case 'SOCKET_CONNECT': {
      socket = io('http://localhost:3000'); // on se connecte au serveur Socket.IO
      console.log('WebSocket', socket);
      console.log('---');
      break;
    }
    default: next(action);
  }
};

export default socketMW;
