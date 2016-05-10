import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Chooser from '../Chooser.jsx';

storiesOf('form.Chooser', module)
  .add('checkbox', () => {
    return (
      <Chooser type="checkbox" items={[
        {value: 5, text: "hi"},
        {value: 6, text: "there"}
      ]} onChange={action('checked')} />
    )
  })

  .add('checkbox inline', () => {
    return (
      <Chooser type="checkbox" display="inline" items={[
        {value: 5, text: "hi"},
        {value: 6, text: "there"}
      ]} onChange={action('checked')} />
    )
  })
  
  .add('radio', () => {
    return (
      <Chooser type="radio" items={[
        {value: 5, text: "hi"},
        {value: 6, text: "there"}
      ]} onChange={action('checked')} />
    )
  })

  .add('radio inline', () => {
    return (
      <Chooser type="radio" display="inline" items={[
        {value: 5, text: "hi"},
        {value: 6, text: "there"}
      ]} onChange={action('checked')} />
    )
  })
