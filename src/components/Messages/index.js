import React from 'react';
import PropTypes from 'prop-types';

import Message from '~/components/Message';
import './messages.styl';

const Messages = () => (
  <div className="app-messages">
    <Message username="jd" content="Salut, ça va ?" own />
    <Message username="Yo" content="Oui et toi ?" />
  </div>
);
Messages.propTypes = {};

export default Messages;
