import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Form from '../Form.jsx';

storiesOf('form.Form', module)
  .add('default view', () => {
    return (
      <Form />
    )
  })

  .add('children', () => {
    return (
      <Form>
        <div>hi</div>
      </Form>
    )
  })
