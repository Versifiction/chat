import io from 'socket.io-client';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from '~/components/App';
import store from '~/store';

document.addEventListener('DOMContentLoaded', () => {
  const rootComponent = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  const targetNode = document.getElementById('root');
  render(rootComponent, targetNode);
  store.dispatch({
    type: 'SOCKET_CONNECT',
  });
});

// const socket = io(); // on se connecte au serveur Socket.IO

// console.log('WebSocket', socket);
// console.log('---');

// // Fonction qui pourrait être branchée sur un onSubmit
// const sendMessage = (message) => {
//   socket.emit('chat message', message);
// };

// const displayMessage = (message) => {
//   // On pourrait refresh  du JSX (un composant React)
//   console.log(message);
// };

// socket.on('chat message', displayMessage);

// sendMessage('salut !');
// sendMessage('ça va ?');
// sendMessage('Yep, et toi ?');
// sendMessage('Bien.');
