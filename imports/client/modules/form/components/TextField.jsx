import React from 'react'
const TextField = ({label = 'Text Field', onChange = () => null,
    type = "text", id, placeholder = '', value = '', help = '',
    labelclass = '', fieldclass = ''}) => {
  const c = fieldclass ? ` ${fieldclass}` : ''
  const myclass = () => `form-control${c}`
  return (
    <div>
      <label htmlFor={id} className={labelclass}>{label}</label>
      <input type={type} className={myclass()} id={id} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}
             value={value}/>
      {help ? <p className="help-block">{help}</p> : ''}
    </div>
  )
}

export default TextField