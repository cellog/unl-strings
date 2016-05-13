const {describe, it} = global
import {expect} from 'chai'
import {shallow, mount} from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import Button from './Button.jsx'

describe('form.components.Button', () => {
  it('should work', () => {
    const el = mount(<Button id="hi"/>)
    expect(el.find('label')).to.have.length(1)
    expect(el.find('label').props().htmlFor).to.equal('hi')

    expect(el.find('button')).to.have.length(1)
    expect(el.find('button').props().className).to.equal('btn btn-default')
    expect(el.find('button').props().id).to.equal('hi', 'id')
    expect(el.find('button').props().children).to.equal('Save')
  })

  it('should have id set', () => {
    const el = mount(<Button id="myid" />)
    expect(el.find('label').props().htmlFor).to.equal('myid')
    expect(el.find('button').props().id).to.equal('myid')
  })
  
  it('should call onClick', () => {
    const spy = sinon.spy()
    const el = mount(<Button id="myid" onClick={spy} />)

    el.find('button').simulate('click')
    
    expect(spy.calledOnce).to.be.true
  })
  
  it('should display help', () => {
    const el = mount(<Button id="hi" help="Here is the help you need"/>)

    expect(el.find('p').nodes).to.have.length(1)
    expect(el.find('p').props().className).to.equal('help-block')
    expect(el.find('p').props().children).to.equal('Here is the help you need')
  })

  it('should have label set', () => {
    const el = mount(<Button id="hi"/>)

    expect(el.find('label').props().children).to.equal('Button')
  })
})