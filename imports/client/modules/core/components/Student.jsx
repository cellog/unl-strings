import React, {PropTypes} from 'react'

const Student = ({param = 'default'}) => {
  return (
    <div>
      hi student
    </div>
  )
}


Student.propTypes = {
  param: PropTypes.string.isRequired
}

export default Student
