const {describe, it} = global
import {expect} from 'chai'
import {shallow} from 'enzyme'
import React from 'react'
import TextAreaField from './TextAreaField.jsx'

describe('form.components.TextAreaField', () => {
  it('should work', () => {
    const el = shallow(<TextAreaField id="hi"/>)
    expect(el.find('label')).to.have.length(1)
    expect(el.find('label').node.props.htmlFor).to.equal('hi')

    expect(el.find('textarea')).to.have.length(1)
    expect(el.find('textarea').node.props.className).to.equal('form-control', 'class')
    expect(el.find('textarea').node.props.id).to.equal('hi', 'id')
    expect(el.find('textarea').node.props.placeholder).to.equal('', 'placeholder')
  })

  it('should have id set', () => {
    const el = shallow(<TextAreaField id="myid" />)
    expect(el.find('label').node.props.htmlFor).to.equal('myid')
    expect(el.find('textarea').node.props.id).to.equal('myid')
  })
  
  it('should update value with onChange', () => {
    let value = ''
    const callback = (e) => { value = e }
    const el = shallow(<TextAreaField id="myid" onChange={(e) => callback(e)} />)

    el.find('textarea').simulate('change', {
      target: {
        value: 'a'
      }
    })
    
    expect(value).to.equal('a')
  })
  
  it('should display help', () => {
    const el = shallow(<TextAreaField id="hi" help="Here is the help you need"/>)

    expect(el.find('p').nodes).to.have.length(1)
    expect(el.find('p').node.props.className).to.equal('help-block')
    expect(el.find('p').node.props.children).to.equal('Here is the help you need')
  })

  it('should set rows', () => {
    const el = shallow(<TextAreaField rows="4" />)
    expect(el.find('textarea').node.props.rows).to.equal('4')
  })

  it('should have placeholder set', () => {
    const el = shallow(<TextAreaField id="hi"/>)

    expect(el.find('textarea').node.props.placeholder).to.equal('')
  })

  it('should have new placeholder set', () => {
    const el = shallow(<TextAreaField id="hi" placeholder="placeholder"/>)

    expect(el.find('textarea').node.props.placeholder).to.equal('placeholder')
  })

  it('should have label set', () => {
    const el = shallow(<TextAreaField id="hi" placeholder="placeholder"/>)

    expect(el.find('label').node.props.children).to.equal('TextArea Field')
  })

  it('should have new label set', () => {
    const el = shallow(<TextAreaField id="hi" label="placeholder"/>)

    expect(el.find('label').node.props.children).to.equal('placeholder')
  })
})
