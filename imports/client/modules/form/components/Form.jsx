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
  horizontalFormProps(props) {
    return {
      labelclass: props.labelclass ? `col-sm-2 control-label ${props.labelclass}` : 'col-sm-2 control-label',
      containerClass: 'col-sm-10'
    }
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
    const horizprops = this.props.type === 'horizontal' ? {...props, ...this.horizontalFormProps(props)} : props
    return {
      ...horizprops,
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
  onChange: PropTypes.func.isRequired,
  formtype: PropTypes.oneOf(['default', 'horizontal', 'inline'])
}

Form.defaultProps = {
  fields: [],
  data: {},
  onChange: () => null,
  formtype: 'default'
}

export default Form