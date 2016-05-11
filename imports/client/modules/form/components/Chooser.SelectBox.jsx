import React, { PropTypes } from 'react'

const SelectBox = ({value = null, id, items = [], onChange = () => null, multiple = false,
                    fieldclass = '', labelclass = ''}) => {
  const option = ({ value = null, text = 'text' }) => (
    <option value={value}>{text}</option>
  )
  return (
    <select className="form-control" id={id} value={value} multiple={multiple} onChange={(e) => onChange(e.target.value)}>
      {items.map(option)}
    </select>
  )
}


SelectBox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.any,
  multiple: PropTypes.bool
}

export default SelectBox
