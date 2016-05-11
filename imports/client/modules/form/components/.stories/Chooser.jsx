import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Chooser from '../Chooser.jsx';

storiesOf('form.Chooser', module)
  .add('default', () => {
    return (
      <Chooser items={[
        {value: 5, text: "hi"},
        {value: 6, text: "there"}
      ]} onChange={action('checked')} />
    )
  })

  .add('checkbox', () => {
    return (
      <Chooser type="checkbox" id="hi" items={[
        {value: 5, text: "hi"},
        {value: 6, text: "there"}
      ]} onChange={action('checked')} />
    )
  })

  .add('checkbox inline', () => {
    return (
      <Chooser type="checkbox" id="hi" display="inline" items={[
        {value: 5, text: "hi"},
        {value: 6, text: "there"}
      ]} onChange={action('checked')} />
    )
  })
  
  .add('radio', () => {
    return (
      <Chooser type="radio" id="hi" items={[
        {value: 5, text: "hi"},
        {value: 6, text: "there"}
      ]} onChange={action('checked')} />
    )
  })

  .add('radio inline', () => {
    return (
      <Chooser type="radio" id="hi" display="inline" items={[
        {value: 5, text: "hi"},
        {value: 6, text: "there"}
      ]} onChange={action('checked')} />
    )
  })

  .add('select', () => {
    return (
      <Chooser type="select" id="hi"  items={[
        {value: 5, text: "hi"},
        {value: 6, text: "there"}
      ]} onChange={action('selected')} />
    )
  })

  .add('select multiple', () => {
    return (
      <Chooser type="select" multiple id="hi" items={[
        {value: 5, text: "hi"},
        {value: 6, text: "there"}
      ]} onChange={action('selected')} />
    )
  })
