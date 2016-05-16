import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Calendar from '../Calendar.jsx';

storiesOf('calendar.Calendar', module)
  .add('default view', () => {
    return (
      <Calendar />
    )
  })
