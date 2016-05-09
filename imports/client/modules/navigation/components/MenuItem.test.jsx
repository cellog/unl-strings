const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import MenuItem from './MenuItem.jsx';
import React from 'react';
import sinon from 'sinon';

describe('core.components.MenuItem', () => {
  it('should have <a> tag', () => {
    const el = shallow(<MenuItem />);

    expect(el.find('a')).to.have.length(1)
  });

  it('should have default text and link', () => {
    const el = shallow(<MenuItem />);

    expect(el.find('a').node.props.href).to.equal('http://example.com')
    expect(el.find('a').node.props.children[0]).to.equal('Text')
  });

  it('should set active if specified', () => {
    const el = shallow(<MenuItem active />);
    expect(el.find('a').node.props.children[1].type).to.equal('span')
    expect(el.find('a').node.props.children[1].props.className).to.equal('sr-only')
    expect(el.find('a').node.props.children[1].props.children).to.equal('(current)')
  })

  it('no link: should trigger onClick', () => {
    const onButtonClick = sinon.spy()
    const el = shallow(<MenuItem link={null} onClick={onButtonClick} />)
    el.find('li').simulate('click')
    expect(onButtonClick.calledOnce).to.be.equal(true)
  })

  it('no link: should set active if specified', () => {
    const el = shallow(<MenuItem link={null} active />);
    expect(el.find('a').node.props.children[1].type).to.equal('span')
    expect(el.find('a').node.props.children[1].props.className).to.equal('sr-only')
    expect(el.find('a').node.props.children[1].props.children).to.equal('(current)')
  })

  it('no link: clicking on the link should prevent default', () => {
    const onButtonClick = sinon.spy()
    const el = shallow(<MenuItem link={null} active />);
    const a = {
      preventDefault: () => {
        onButtonClick()
      }
    }

    el.find('a').simulate('click', a)
    expect(onButtonClick.calledOnce).to.be.equal(true)
  })
});
