import React from 'react'

const CheckboxField = (props) => {
  const { item , value = {}, onChange} = props;

  const onChangeHandler = (checked, itemValue) => {
    debugger
    const oldValue = value[itemValue];
    value[itemValue] = checked;
    
    if (oldValue !== value[itemValue]) {
      onChange(value)
    }
  }

  if (!item.options) {
    return (<p className="error">Input requires options</p>);
  }

  return (
    <div>
      {
        item.options.map(option => (
          <label className="check-input" key={option.value}>
            <input 
              type="checkbox" 
              name={item.label} 
              value={option.value} 
              checked={value[option.value]}
              onChange={(event) => onChangeHandler(event.target.checked, option.value)}
            />
            <p>{option.name}</p>
          </label>
        ))
      }
    </div>
  )
}

export default CheckboxField;
