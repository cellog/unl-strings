import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import TextField from '../TextField.jsx';

storiesOf('form.TextField', module)
  .add('default view', () => {
    return (
      <TextField id="hi" />
    )
  })

  .add('placeholder', () => {
    return (
      <TextField id="hi" placeholder="This is a Placeholder" />
    )
  })

  .add('label', () => {
    return (
      <TextField id="hi" placeholder="This is a Placeholder" label="This is my label" />
    )
  })

  .add('help', () => {
    return (
      <TextField id="hi" placeholder="This is a Placeholder" label="This is my label" help="This is the help you seek" />
    )
  })

  .add('type password', () => {
    return (
      <TextField id="hi" type="password" placeholder="*****" label="Password" />
    )
  })

  .add('onChange', () => {
    let value = ''
    return (
      <TextField id="hi" placeholder="This is a Placeholder" label="This is my label" value={value} onChange={(e) => {
        value = e.target.value
        action(`text: ${value}`)()
      }} />
    )
  })
