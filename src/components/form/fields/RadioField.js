import React from 'react';
import PropTypes from 'prop-types';

const RadioField = (props) => {
  const { item, value, onChange } = props;

  if (!item.options) {
    return (<p className="error">Input requires options</p>);
  }

  return (
    <div>
      {
        item.options.map(option => (
          <label className="radio-input" key={option.value}>
            <input 
              type="radio" 
              name={item.label} 
              value={option.value}
              checked={option.value === value}
              onChange={(event) => onChange(event.target.value)}
            />
            <p>{option.name}</p>
          </label>
        ))
      }
    </div>
  );
};

RadioField.propTypes = {
  item: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default RadioField;
