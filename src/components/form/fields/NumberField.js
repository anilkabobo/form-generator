import React from 'react'

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
  )
}

export default NumberField;
