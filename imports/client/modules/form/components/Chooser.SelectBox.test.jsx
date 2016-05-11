const {describe, it} = global
import {expect} from 'chai'
import {shallow, mount} from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import SelectBox from './Chooser.SelectBox.jsx'

describe('module.components.SelectBox', () => {
  it('should work', () => {
    const el = shallow(<SelectBox />)
    expect(el.find('select')).to.have.length(1);
    expect(el.find('select').node.props.className).to.equal('form-control')
  })
  
  it('should render options', () => {
    const el = shallow(<SelectBox items={[
      {value: 'hi', text: 'Hello'},
      {value: 35, text: 'Brah'}
    ]} />)

    expect(el.find('option').nodes).to.have.length(2)
    expect(el.find('option').nodes[0].props.value).to.equal('hi')
    expect(el.find('option').nodes[0].props.children).to.equal('Hello')
    expect(el.find('option').nodes[1].props.value).to.equal(35)
    expect(el.find('option').nodes[1].props.children).to.equal('Brah')
  })

  
  it('should render multiple', () => {
    const el = shallow(<SelectBox />)
    
    expect(el.node.props.multiple).to.be.false
    
    const el2 = shallow(<SelectBox multiple />)
    
    expect(el2.node.props.multiple).to.be.true
  })
  
  it('should call onChange', () => {
    const spy = sinon.spy()
    const el = mount(<SelectBox items={[
      {value: 'hi', text: 'Hello'},
      {value: 35, text: 'Brah'}
    ]} onChange={spy} />)
    
    el.find('[value="hi"]').simulate('change')

    expect(spy.calledOnce).to.be.true
  })
})