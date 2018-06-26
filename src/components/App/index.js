import React from 'react';

import Messages from '~/components/Messages';
import Settings from '~/components/Settings';
import Form from '~/components/Form';
import './app.styl';

const App = () => (
  <div className="app">
    <h1>Chatroom</h1>
    <Messages />
    <Settings />
    <Form />
  </div>
);

export default App;
