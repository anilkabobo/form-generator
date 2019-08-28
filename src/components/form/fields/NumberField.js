import React from 'react';
import PropTypes from 'prop-types';

const NumberField = (props) => {
  const {item: {min = 0, max=100, step=1, label}, value} = props;
  return (
    <label>
      <input 
        type="number" 
        className="number-input" 
        min={min} 
        max={max} 
        step={step} 
        name={label}
        value={value || ''} 
        onChange={(event) => props.onChange(event.target.value)}
      />
    </label>
  );
};

NumberField.propTypes = {
  item: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default NumberField;
