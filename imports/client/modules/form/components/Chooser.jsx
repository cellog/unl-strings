import React, { PropTypes, Component } from 'react'
import Checkbox from './Chooser.Checkbox.jsx'
import Select from './Chooser.SelectBox.jsx'

export default class Chooser extends Component {
  render() {
    switch (this.props.type) {
      case 'checkbox' :
      case 'radio' :
        return (
          <Chooser.Checkbox {...this.props} />
        )
      case 'select' :
        return (
          <Chooser.Select {...this.props} />
        )
    }
  }
}

Chooser.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

Chooser.Checkbox = Checkbox
Chooser.Select = Select
