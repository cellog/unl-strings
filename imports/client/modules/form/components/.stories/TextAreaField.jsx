import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import TextAreaField from '../TextAreaField.jsx';

storiesOf('form.TextAreaField', module)
  .add('default view', () => {
    return (
      <TextAreaField id="hi" />
    )
  })

  .add('placeholder', () => {
    return (
      <TextAreaField id="hi" placeholder="This is a Placeholder" />
    )
  })

  .add('label', () => {
    return (
      <TextAreaField id="hi" placeholder="This is a Placeholder" label="This is my label" />
    )
  })

  .add('help', () => {
    return (
      <TextAreaField id="hi" placeholder="This is a Placeholder" label="This is my label" help="This is the help you seek" />
    )
  })
  
  .add('more rows', () => {
    return (
      <TextAreaField rows="6" />
    )
  })

  .add('onChange', () => {
    let value = ''
    return (
      <TextAreaField id="hi" placeholder="This is a Placeholder" label="This is my label" value={value} onChange={(e) => {
        value = e.target.value
        action(`text: ${value}`)()
      }} />
    )
  })
