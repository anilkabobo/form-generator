import React from 'react'

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
  )
}

export default DateField;
