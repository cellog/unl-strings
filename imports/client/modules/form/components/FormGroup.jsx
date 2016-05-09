import React from 'react'

const FormGroup = ({children = null}) => {
  return (
    <div className="form-group">
      {children}
    </div>
  )
}

export default FormGroup