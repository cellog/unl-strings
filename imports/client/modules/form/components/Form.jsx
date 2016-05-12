import React, {Component, PropTypes} from 'react'
import TextField from './TextField.jsx'
import TextAreaField from './TextAreaField.jsx'
import Chooser from './Chooser.jsx'

class Form extends Component {
  mapDataToValue(meta, data) {
    return data[meta.field]
  }
  mapDataToField(meta) {
    switch (meta.type) {
      case 'text' :
        return TextField
      case 'textarea' :
        return TextAreaField
      case 'chooser' :
        return Chooser
    }
  }
  mapSubTypeToField(meta) {
    switch (meta.type) {
      case 'chooser' :
        return meta.subtype
    }
    return null
  }
  mapDataToProps(meta, value) {
    const {items, mapitem, field, ...props} = meta
    let mitems = []
    if (items) {
      mitems = items()
      if (mapitem) {
        mitems = mitems.map(mapitem.bind(undefined, value))
      }
    }
    return {
      ...props,
      id: meta.field,
      key: meta.field,
      type: this.mapSubTypeToField(meta),
      items: mitems,
      value,
      onChange: value => this.props.onChange(meta.field, value),
    }
  }
  renderChildren(fields, data) {
    return fields.map((field) => {
      const reactField = this.mapDataToField(field)
      const factory = React.createFactory(reactField)
      const value = this.mapDataToValue(field, data)
      return factory(this.mapDataToProps(field, value))
    })
  }
  render()
  {
    return (
      <form>
        {this.renderChildren(this.props.fields, this.props.data)}
      </form>
    )
  }
}

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['text', 'textarea', 'chooser']).isRequired,
    subtype: PropTypes.oneOf(['checkbox', 'radio', 'select']),
    mapitem: PropTypes.func,
    items: PropTypes.func,
    field: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string
  })),
  data: PropTypes.object,
  onChange: PropTypes.func.isRequired
}

Form.defaultProps = {
  fields: [],
  data: {},
  onChange: () => null
}

export default Form