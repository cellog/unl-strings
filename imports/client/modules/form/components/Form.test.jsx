const {describe, it} = global
import {expect} from 'chai'
import {shallow} from 'enzyme'
import React from 'react'
import Form from './Form.jsx'

describe('form.components.Form', () => {
  it('should work', () => {
    const el = shallow(<Form />)
    expect(el.find('form')).to.have.length(1);
  })
  
  it('should render children', () => {
    const data = [
      {job: "Fill sewer", id: 1},
      {job: "Make bread", id: 2},
      {job: "Dream", id: 3},
      {job: "Mock Trump", id: 4},
    ]
    const el = shallow(<Form fields={[
      {
        type: 'text',
        placeholder: 'Name',
        field: 'name',
        label: 'Full Name'
      },
      {
        type: 'chooser',
        subtype: 'radio',
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
      }
    ]} data={{
      name: 'Gregory',
      jobid: {job: "Fill sewer", id: 1},
      desc: 'Hi there, he just kills it is all'
    }} />)
    
    expect(el.node.props.children).to.have.length(3)
  })
})