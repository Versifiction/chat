import React from 'react';
import PropTypes from 'prop-types';

import './messages.styl';

const Messages = () => (
  <div className="app-messages">
    <div className="app-message app-message--own">
      <div className="app-message-user">jd</div>
      <div className="app-message-content">Salut, ça va ?</div>
    </div>
    <div className="app-message">
      <div className="app-message-user">Yo</div>
      <div className="app-message-content">Oui et toi ?</div>
    </div>
  </div>
);
Messages.propTypes = {};

export default Messages;
