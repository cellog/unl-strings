const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import MainLayout from './Layout.jsx';
import Navbar from '../../navigation/components/Navbar.jsx';
import MenuItem from '../../navigation/components/MenuItem.jsx';
import NavBarGroup from '../../navigation/components/NavBarGroup.jsx'

describe('core.components.Layout', () => {
  it('should contain navigation', () => {
    const el = shallow(<MainLayout />);
    expect(el.find(Navbar)).to.have.length(1);
  });

  it('should render children', () => {
    const Comp = () => (<p>Hello</p>);
    const el = shallow(
      <MainLayout content={() => (<Comp />)}/>
    );

    expect(el.contains(<Comp />)).to.be.equal(true);
  });

  it('should render navigation', () => {
    const group = () => (
      <NavBarGroup position="right">
        <MenuItem />
      </NavBarGroup>
    )
    const el = shallow(
      <MainLayout navcontent={group} />
    )

    expect(el.contains(MenuItem)).to.be.equal(true)
  })
});
