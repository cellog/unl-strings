import React, { PropTypes } from 'react'
import FormElement from './FormElement.jsx'
import Checkbox from './Chooser.Checkbox.jsx'
import Select from './Chooser.SelectBox.jsx'

const Chooser = (props) => {
  const renderElement = (props) => {
    switch (props.type) {
      case 'checkbox' :
      case 'radio' :
        return (
          <Chooser.Checkbox {...props} />
        )
      case 'select' :
        return (
          <Chooser.Select {...props} />
        )
    }
  }

  const { type, id, labelclass, label, containerClass} = props
  return (
    <FormElement {...props}>
      {renderElement(props)}
    </FormElement>
  )
}

Chooser.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  labelclass: PropTypes.string,
  containerClass: PropTypes.string
}

Chooser.defaultProps = {
  type: 'select',
  id: 'chooser',
  labelclass: '',
  label: 'Chooser',
  containerClass: ''
}

Chooser.Checkbox = Checkbox
Chooser.Select = Select

export default Chooser
