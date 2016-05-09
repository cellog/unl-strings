const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import DropdownMenu from './DropdownMenu.jsx';
import React from 'react';
import sinon from 'sinon';

describe('core.components.DropdownMenu', () => {
  it('should not have open/expanded when closed', () => {
    const el = shallow(<DropdownMenu />);

    expect(el.find('a')).to.have.length(1)
    expect(el.find('li').node.props.className).to.equal('dropdown')
    expect(el.find('a').node.props['aria-expanded']).to.equal('false')
  })

  it('should have open/expanded when open', () => {
    const el = shallow(<DropdownMenu open />);

    expect(el.find('a')).to.have.length(1)
    expect(el.find('li').node.props.className).to.equal('dropdown open')
    expect(el.find('a').node.props['aria-expanded']).to.equal('true')
  })
  
  it('should render items', () => {
    const el = shallow(<DropdownMenu items={[
      {
        active: true,
        link: '/test',
        text: 'Awesome',
        type: 'MENUITEM'
      },
      {
        active: false,
        link: '/test2',
        text: 'Awesome 2',
        type: 'MENUITEM'
      },
      {
        type: 'SEPARATOR'
      }
    ]} />)
    
    const ul = el.find('ul').node
    expect(ul.props.children).has.length(3)
    expect(ul.props.children[0].props.active).equal(true)
    expect(ul.props.children[0].props.link).equal('/test')
    expect(ul.props.children[0].props.text).equal('Awesome')

    expect(ul.props.children[1].props.active).equal(false)
    expect(ul.props.children[1].props.link).equal('/test2')
    expect(ul.props.children[1].props.text).equal('Awesome 2')

    expect(ul.props.children[2].type).equal('li')
    expect(ul.props.children[2].props.role).equal('separator')
    expect(ul.props.children[2].props.className).equal('divider')
  })
})
