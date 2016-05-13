const {describe, it} = global
import {expect} from 'chai'
import {shallow, mount} from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import Form from './Form.jsx'
import Chooser from './Chooser.jsx'
import TextField from './TextField.jsx'
import TextAreaField from './TextAreaField.jsx'

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

    expect(el.find(Chooser).nodes).to.have.length(1)
    expect(el.find(TextField).nodes).to.have.length(1)
    expect(el.find(TextAreaField).nodes).to.have.length(1)
  })


  it('should handle events', () => {
    const data = [
      {job: "Fill sewer", id: 1},
      {job: "Make bread", id: 2},
      {job: "Dream", id: 3},
      {job: "Mock Trump", id: 4},
    ], change = sinon.spy()
    const el = mount(<Form fields={[
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
    }} onChange={change} />)

    el.find('[id="name"]').simulate('change', {target: {value: 'Gregorya'}})

    expect(change.calledOnce).to.be.true
    expect(change.getCall(0).args).to.eql(['name', 'Gregorya'])
  })

  it('should render horizontal class', () => {
    const el = mount(<Form type="horizontal" fields={[
      {
        type: 'text',
        placeholder: 'Name',
        field: 'name',
        label: 'Full Name',
        labelclass: 'hi'
      }
    ]} />)

    expect(el.find('div.col-sm-10').nodes).length(1)
    expect(el.find('label.hi.col-sm-2').nodes).length(1)
  })
})