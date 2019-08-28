import React from 'react';
import PropTypes from 'prop-types';

const TextField = (props) => {
  const { item, value, onChange } = props;
  return (
    <label>
      <input 
        type="text" 
        className="text-input" 
        placeholder={item.placeholder} 
        name={item.label}
        value={value || ''} 
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
};

TextField.propTypes = {
  item: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default TextField;
