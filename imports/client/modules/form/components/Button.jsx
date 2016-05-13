import React from 'react'
import FormElement from './FormElement.jsx'

const Button = ({label = 'Button', onClick = () => null,
    buttonclass = 'btn btn-default', title='Save', type='button', ...props}) => {
  return (
    <FormElement label={label} {...props}>
      <button type={type} className={buttonclass} id={props.id} onClick={() => onClick(props.id)}>
        {title}
      </button>
    </FormElement>
  )
}

export default Button
