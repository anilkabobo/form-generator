import React from 'react'

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
  )
}

export default TextareaField;
