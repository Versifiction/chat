import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './settings.styl';

const Settings = ({
  active: open,
  username,
  toggle,
  trackUsername,
}) => {
  const currentClassName = classNames(
    'app-settings',
    {
      'app-settings--open': open,
    },
  );
  return (
    <div className={currentClassName}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className="app-settings-toggle"
        onClick={toggle}
      />
      <div className="app-settings-form">
        <input
          type="text"
          className="app-settings-input"
          placeholder="Votre pseudo"
          value={username}
          onChange={trackUsername}
        />
        <button className="app-settings-button">OK</button>
      </div>
    </div>
  );
};

Settings.propTypes = {
  active: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  trackUsername: PropTypes.func.isRequired,
};

export default Settings;
