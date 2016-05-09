const {describe, it} = global
import {expect} from 'chai'
import {shallow} from 'enzyme'
import NavBarGroup from './NavBarGroup.jsx'
import React from 'react'

describe('core.components.NavBarGroup', () => {
  it('default should be ul', () => {
    const el = shallow(<NavBarGroup />)
    expect(el.find('ul').length).to.equal(1)
    expect(el.find('ul').node.props.className).to.equal('nav navbar-nav')
  })

  it('should accept different tag', () => {
    const el = shallow(<NavBarGroup tag="dt" />)
    expect(el.find('dt').length).to.equal(1)
  })

  it('should accept extra parameters', () => {
    const el = shallow(<NavBarGroup aria-whatever="hi" />)
    expect(el.find('ul').node.props['aria-whatever']).to.equal('hi')
  })

  it('should accept extra class', () => {
    const el = shallow(<NavBarGroup extraclass="hi" />)
    expect(el.find('ul').node.props.className).to.equal('nav navbar-nav hi')
  })

  it('should accept position left', () => {
    const el = shallow(<NavBarGroup position="left" />)
    expect(el.find('ul').node.props.className).to.equal('nav navbar-nav navbar-left')
  })

  it('should accept position right', () => {
    const el = shallow(<NavBarGroup position="right" />)
    expect(el.find('ul').node.props.className).to.equal('nav navbar-nav navbar-right')
  })

  it('should accept position right plus extra class', () => {
    const el = shallow(<NavBarGroup position="right" extraclass="hi"/>)
    expect(el.find('ul').node.props.className).to.equal('nav navbar-nav navbar-right hi')
  })
})
