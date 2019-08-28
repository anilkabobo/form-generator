import React from 'react';
import PropTypes from 'prop-types';

const DateField = (props) => {
  return (
    <label>
      <input 
        type="date" 
        className="date-input" 
        name={props.label}
        value={props.value || ''} 
        onChange={(event) => props.onChange(event.target.value)}
      />
    </label>
  );
};

DateField.propTypes ={
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default DateField;
