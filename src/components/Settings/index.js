import React from 'react';
import PropTypes from 'prop-types';

import './settings.styl';

const Settings = () => (
  <div className="app-settings">
    <div className="app-settings-toggle" />
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
Settings.propTypes = {};

export default Settings;
