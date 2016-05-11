const {describe, it} = global
import {expect} from 'chai'
import {shallow, mount} from 'enzyme'
import React from 'react'
import sinon from 'sinon'
import Checkbox, { Input } from './Chooser.Checkbox.jsx'
import ReactTestUtils from 'react-addons-test-utils'

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
    expect(el.find('div')).to.have.length(1);
  })

  it('should render items', () => {
    const el = shallow(<Checkbox items={
      [
        {value: 3, text: 'hi', checked: false},
        {value: 4, text: 'bye', checked: true}
      ]
    } />)

    expect(el.find('div').nodes).to.have.length(3)
    expect(el.find('div').nodes[1].props.className).to.equal('checkbox')
    expect(el.find('div').nodes[2].props.className).to.equal('checkbox')
    expect(el.find(Input).nodes).to.have.length(2)
    expect(el.find(Input).nodes[0].props.className).to.be.undefined
    expect(el.find(Input).nodes[0].props.type).to.be.equal('checkbox')
  })

  it('should render radio', () => {
    const el = shallow(<Checkbox type="radio" items={
      [
        {value: 3, text: 'hi', checked: false},
        {value: 4, text: 'bye', checked: true}
      ]
    } />)

    expect(el.find('div').nodes).to.have.length(3)
    expect(el.find('div').nodes[1].props.className).to.equal('radio')
    expect(el.find('div').nodes[2].props.className).to.equal('radio')
    expect(el.find(Input).nodes).to.have.length(2)
    expect(el.find(Input).nodes[0].props.type).to.be.equal('radio')
  })

  it('should render inline', () => {
    const el = shallow(<Checkbox display="inline" items={
      [
        {value: 3, text: 'hi', checked: false},
        {value: 4, text: 'bye', checked: true}
      ]
    } />)

    expect(el.find('div').nodes).to.have.length(1)
    expect(el.find(Input).nodes).to.have.length(2)
    expect(el.find(Input).nodes[0].props.className).to.equal('checkbox-inline')
    expect(el.find(Input).nodes[1].props.className).to.equal('checkbox-inline')
    expect(el.find(Input).nodes[0].props.type).to.be.equal('checkbox')
  })

  it('should call onChange when clicking', () => {
    const spy1 = sinon.spy()
    const a = [
      {value: 3, text: 'hi', checked: false},
      {value: 4, text: 'bye', checked: true}
    ]

    const el = mount(<Checkbox onChange={spy1} items={a} />)

    el.find('[value=3]').simulate('change')

    expect(spy1.calledOnce).to.be.true
    expect(spy1.calledWith(a[0])).to.be.true
  })

  it('should call onChange when clicking other thing', () => {
    const spy1 = sinon.spy()
    const a = [
      {value: 3, text: 'hi', checked: false},
      {value: 4, text: 'bye', checked: true}
    ]

    const el = mount(<Checkbox onChange={spy1} items={a} />)

    el.find('[value=4]').simulate('change')

    expect(spy1.calledOnce).to.be.true
    expect(spy1.calledWith(a[1])).to.be.true
  })})