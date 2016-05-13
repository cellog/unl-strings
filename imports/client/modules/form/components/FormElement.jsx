import React, {PropTypes} from 'react'

const FormElement = ({formtype = 'default', labelclass = '', label = 'Label', containerClass = '',
                    help = '', children, ...props}) => {
  let labelclasses = '', containerclasses = ''
  if (formtype == 'horizontal') {
    labelclasses = labelclass ? `col-sm-2 ${labelclass}` : 'col-sm-2'
    containerclasses = containerClass ? `col-sm-10 ${containerClass}` : 'col-sm-10'
  }
  return (
    <div>
      <label htmlFor={props.id} className={labelclasses}>{label}</label>
      <div className={containerclasses}>
        {children}
        {help ? <p className="help-block">{help}</p> : ''}
      </div>
    </div>
  )
}


FormElement.propTypes = {
  formtype: PropTypes.oneOf(['default', 'horizontal', 'inline']).isRequired,
  labelclass: PropTypes.string,
  label: PropTypes.string,
  containerClass: PropTypes.string,
  help: PropTypes.string,
  children: PropTypes.element
}

export default FormElement
