import React from 'react'
const TextAreaField = ({label = 'TextArea Field', onChange = () => null,
    id, placeholder = '', value = '', help = '', rows = null, fieldclass = '', labelclass = ''}) => {
  const c = fieldclass ? ` ${fieldclass}` : ''
  const myclass = () => `form-control${c}`
  return (
    <div>
      <label htmlFor={id} className={labelclass}>{label}</label>
      <textarea rows={rows ? rows : null } className={myclass()} id={id} placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)} value={value}/>
      {help ? <p className="help-block">{help}</p> : ''}
    </div>
  )
}

export default TextAreaField