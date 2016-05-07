const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Navbar from './Navbar.jsx';
import React from 'react';

describe('core.components.Layout', () => {
  it('should contain navigation', () => {
    const el = shallow(<Navbar />);
    expect(el.find('#mynavbar').length).to.equal(1);
  });

  it('should render childrens', () => {
    const el = shallow(
      <Navbar>
        <div>test</div>
      </Navbar>
    );

    expect(el.contains(<div>test</div>)).to.equal(true);
  });
});
