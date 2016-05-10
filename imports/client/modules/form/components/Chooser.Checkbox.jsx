import React, { PropTypes } from 'react'

export const Input = ({ className = '', item = {
  value: 1,
  type: 'checkbox',
  checked: false,
  text: 'Need to define item'
}, type = 'checkbox', onChange = () => null}) => (
  <label className={className}>
    <input key={item.value} type={type} value={item.value}
           checked={item.checked} onChange={() => onChange(item)} />
    {item.text}
  </label>
)

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  item: PropTypes.shape({
      value: PropTypes.any.isRequired,
      checked: PropTypes.bool,
      text: PropTypes.string.isRequired
    }),
  onChange: PropTypes.func.isRequired
}

const Checkbox = ({items = [], display = 'normal', type="checkbox", onChange = () => null }) => {
  function inline(items) {
    return (
      <div>
        {items.map((item) => (
          <Input item={item} className={`${type}-inline`} type={type} onChange={onChange} />
        ))}
      </div>
    )
  }
  if (display === 'inline') return inline(items)
  return (
    <div>
      {items.map((item) => (
        <div className={type}>
          <Input item={item} type={type} onChange={onChange} />
        </div>
      ))}
    </div>
  )
}

export default Checkbox

Checkbox.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radio']),
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any.isRequired,
    checked: PropTypes.bool,
    text: PropTypes.string.isRequired
  }).isRequired),
  display: PropTypes.oneOf(['normal', 'inline']),
  onChange: PropTypes.func.isRequired
}
