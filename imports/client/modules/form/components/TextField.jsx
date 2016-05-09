import React from 'react'
const TextField = ({label = 'Text Field', onChange = () => null,
    type = "text", id, placeholder = '', value = '', help = ''}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input type={type} className="form-control" id={id} placeholder={placeholder} onChange={(e) => onChange(e)} value={value} />
    {help ? <p className="help-block">{help}</p> : ''}
  </div>
)

export default TextField