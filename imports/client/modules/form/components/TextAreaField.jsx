import React from 'react'
import FormElement from './FormElement.jsx'
const TextAreaField = ({label = 'TextArea Field', onChange = () => null,
    placeholder = '', value = '', rows = null, fieldclass = '',
    ...props}) => {
  const c = fieldclass ? ` ${fieldclass}` : ''
  const myclass = () => `form-control${c}`
  return (
    <FormElement label={label} {...props}>
      <textarea rows={rows ? rows : null } className={myclass()} id={props.id} placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)} value={value}/>
    </FormElement>
  )
}

export default TextAreaField