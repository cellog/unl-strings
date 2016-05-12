import React from 'react'
import TextField from './TextField.jsx'
import TextAreaField from './TextAreaField.jsx'
import Chooser from './Chooser.jsx'

const Form = ({fields = [], data = {}, onChange = () => null}) => {
  const mapDataToValue = (meta, data) => {
    return data[meta.field]
  }
  const mapDataToField = (meta) => {
    switch (meta.type) {
      case 'text' :
        return TextField
      case 'textarea' :
        return TextAreaField
      case 'chooser' :
        return Chooser
    }
  }
  const mapSubTypeToField = (meta) => {
    switch (meta.type) {
      case 'chooser' :
        return meta.subtype
    }
    return null
  }
  const mapDataToProps = (meta, value) => {
    let items = []
    if (meta.items) {
      items = meta.items()
      if (meta.mapitem) {
        items = items.map(meta.mapitem.bind(undefined, value))
      }
    }
    return {
      label: meta.label,
      type: mapSubTypeToField(meta),
      placeholder: meta.placeholder ? meta.placeholder : '',
      items: items,
      value: value,
      onChange: (value) => onChange(meta.field, value)
    }
  }
  const renderChildren = (fields, data) => {
    return fields.map((field) => {
      const reactField = mapDataToField(field)
      const factory = React.createFactory(reactField)
      const value = data[field.field]
      return factory(mapDataToProps(field, value))
    })
  }
  return (
    <form>
      {renderChildren(fields, data)}
    </form>
  )
}

export default Form