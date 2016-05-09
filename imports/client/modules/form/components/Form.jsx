import React from 'react'

const Form = ({children = null}) => {
  return (
    <form>
      {children}
    </form>
  )
}

export default Form