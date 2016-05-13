import React from 'react'
import FormElement from './FormElement.jsx'

const TextField = ({label = 'Text Field', onChange = () => null,
    type = "text", placeholder = '', value = '',
    fieldclass = '', ...props}) => {
  const c = fieldclass ? ` ${fieldclass}` : ''
  const myclass = () => `form-control${c}`
  return (
    <FormElement label={label} {...props}>
      <input type={type} className={myclass()} id={props.id} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}
             value={value}/>
    </FormElement>
  )
}

export default TextField