const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import MainLayout from './Layout.jsx';
import Navbar from '../../navigation/components/Navbar.jsx';

describe('core.components.Layout', () => {
  it('should contain navigation', () => {
    const el = shallow(<MainLayout />);
    expect(el.contains(<Navbar />)).to.be.equal(true);
  });

  it('should render childrens', () => {
    const Comp = () => (<p>Hello</p>);
    const el = shallow(
      <MainLayout content={() => (<Comp />)}/>
    );

    expect(el.contains(<Comp />)).to.be.equal(true);
  });
});
