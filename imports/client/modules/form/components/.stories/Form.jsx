import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Form from '../Form.jsx';

storiesOf('form.Form', module)

  .add('complex', () => {
    const data = [
      {job: "Fill sewer", id: 1},
      {job: "Make bread", id: 2},
      {job: "Dream", id: 3},
      {job: "Mock Trump", id: 4},
    ]
    return (
      <Form
        onChange={action("change")}
        fields={[
      {
        type: 'text',
        placeholder: 'Name',
        field: 'name',
        label: 'Full Name'
      },
      {
        type: 'chooser',
        subtype: 'checkbox',
        mapitem: (value, item) => {
          const checked = value.id === item.id
          return {
            text: item.job,
            id: item.id,
            checked: checked
          }
        },
        items: () => data,
        field: 'jobid',
        label: 'Job'
      },
      {
        type: 'textarea',
        field: 'desc',
        placeholder: 'Describe the kind of job this person will do',
        label: 'Description'
      },
      {
        type: 'button',
        onClick: action('clicked'),
        title: 'Buttony McButtonFace',
        field: 'button',
        label: ''
      }
    ]} data={{
      name: 'Gregory',
      jobid: {job: "Fill sewer", id: 1},
      desc: 'Hi there, he just kills it is all'
    }} />
    )
  })

  .add('horizontal', () => {
    const data = [
      {job: "Fill sewer", id: 1},
      {job: "Make bread", id: 2},
      {job: "Dream", id: 3},
      {job: "Mock Trump", id: 4},
    ]
    return (
      <Form
        type="horizontal"
        onChange={action("change")}
        fields={[
      {
        type: 'text',
        placeholder: 'Name',
        field: 'name',
        label: 'Full Name'
      },
      {
        type: 'chooser',
        subtype: 'checkbox',
        mapitem: (value, item) => {
          const checked = value.id === item.id
          return {
            text: item.job,
            id: item.id,
            checked: checked
          }
        },
        items: () => data,
        field: 'jobid',
        label: 'Job'
      },
      {
        type: 'textarea',
        field: 'desc',
        placeholder: 'Describe the kind of job this person will do',
        label: 'Description'
      },
      {
        type: 'button',
        onClick: action('clicked'),
        title: 'Buttony McButtonFace',
        field: 'button',
        label: ''
      }
    ]} data={{
      name: 'Gregory',
      jobid: {job: "Fill sewer", id: 1},
      desc: 'Hi there, he just kills it is all'
    }} />
    )
  })
