const {describe, it} = global
import {expect} from 'chai'
import {shallow} from 'enzyme'
import React from 'react'
import sinon from 'sinon'
import Checkbox, { Input } from './Chooser.Checkbox.jsx'

describe('form.components.Chooser.Input', () => {
  it('should work', () => {
    const el = shallow(<Input />)
    expect(el.find('input')).to.have.length(1);
  })

  it('should render a checkbox by default', () => {
    const el = shallow(<Input />)
    expect(el.find('input').node.props.type).to.equal('checkbox')
    expect(el.find('input').node.props.value).to.equal(1)
    expect(el.find('label').node.props.className).to.equal('')
    expect(el.find('input').node.props.checked).to.be.false
    expect(el.find('label').node.props.children[1]).to.equal('Need to define item')
  })

  it('should render checkbox details', () => {
    const el = shallow(<Input className="monk" type="radio" item={{
      value: 'hi',
      text: 'boo',
      checked: true
    }} />
    )
    expect(el.find('input').node.props.type).to.equal('radio')
    expect(el.find('input').node.props.value).to.equal('hi')
    expect(el.find('label').node.props.className).to.equal('monk')
    expect(el.find('input').node.props.checked).to.be.true
    expect(el.find('label').node.props.children[1]).to.equal('boo')
  })

  it('should call the callback', () => {
    const callit = sinon.spy()
    const input = <Input onChange={callit} item={
    {
      value: 'hi',
      text: 'oops',
      checked: false
    }
    }/>
    const el = shallow(input)

    el.find('input').simulate('change')

    expect(callit.calledWith(input.props.item)).is.true
  })
})

describe('form.components.Chooser.Checkbox', () => {
  it('should work', () => {
    const el = shallow(<Checkbox />)
    expect(el.find('input')).to.have.length(1);
  })
})