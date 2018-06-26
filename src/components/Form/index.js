import React from 'react';
import PropTypes from 'prop-types';

import './form.styl';

const Form = () => (
  <form className="app-form">
    <input
      type="text"
      className="app-form-input"
      placeholder="Votre message"
    />
  </form>
);
Form.propTypes = {};

export default Form;
