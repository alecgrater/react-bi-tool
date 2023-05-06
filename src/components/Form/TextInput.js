import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ label, value, onChange }) => {
  return (
    <div className="text-input">
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        id={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
