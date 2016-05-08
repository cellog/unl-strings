const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Navbar from './Navbar.jsx';
import React from 'react';

describe('core.components.Navbar', () => {
  it('should contain navigation', () => {
    const el = shallow(<Navbar />);
    expect(el.find('#mynavbar').length).to.equal(1);
  });

  it('should render children', () => {
    const el = shallow(
      <Navbar>
        <div>test</div>
      </Navbar>
    );

    expect(el.contains(<div>test</div>)).to.equal(true);
  });

  it('should set id properly', () => {
    const el = shallow(
      <Navbar id="foo" />
    );

    expect(el.find('#foo').length).to.equal(1)
    expect(el.findWhere((node) => node.node.props && node.node.props.type === 'button').node.props['data-target']).to.equal('#foo')
  })
});
