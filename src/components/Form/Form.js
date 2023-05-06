import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({ onSubmit, children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

export default Form;
