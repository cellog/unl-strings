import React from 'react'
const TextAreaField = ({label = 'TextArea Field', onChange = () => null,
    id, placeholder = '', value = '', help = '', rows = null}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <textarea rows={rows ? rows : null } className="form-control" id={id} placeholder={placeholder} onChange={(e) => onChange(e)} value={value} />
    {help ? <p className="help-block">{help}</p> : ''}
  </div>
)

export default TextAreaField