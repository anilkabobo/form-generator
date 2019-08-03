import React from 'react'

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
  )
}

export default TextField;
