import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './settings.styl';

const Settings = ({
  active: open,
  toggle,
}) => {
  const currentClassName = classNames(
    'app-settings',
    {
      'app-settings--open': open,
    },
  );
  return (
    <div className={currentClassName}>
      <div
        className="app-settings-toggle"
        onClick={toggle}
      />
      <div className="app-settings-form">
        <input
          type="text"
          className="app-settings-input"
          placeholder="Votre pseudo"
        />
        <button className="app-settings-button">OK</button>
      </div>
    </div>
  );
};

Settings.propTypes = {
  active: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Settings;
