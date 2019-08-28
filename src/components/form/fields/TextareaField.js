import React from 'react';
import PropTypes from 'prop-types';

const TextareaField = (props) => {
  const { item: {rows = 4, placeholder, label }, value } = props;

  return (
    <label>
      <textarea 
        className="textarea-input" 
        rows={rows} 
        placeholder={placeholder} 
        name={label}
        value={value || ''} 
        onChange={(event) => props.onChange(event.target.value)}
      />
    </label>
  );
};

TextareaField.propTypes = {
  item: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default TextareaField;
