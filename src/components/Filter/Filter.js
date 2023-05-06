import React from 'react';
import './Filter.css';

const Filter = ({ label, value, onChange }) => {
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <div className="filter-container">
      <label className="filter-label">{label}</label>
      <input
        className="filter-input"
        type="text"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Filter;
