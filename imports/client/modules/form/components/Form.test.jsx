const {describe, it} = global
import {expect} from 'chai'
import {shallow} from 'enzyme'
import React from 'react'
import Form from './Form.jsx'

describe('form.components.Form', () => {
  it('should work', () => {
    const el = shallow(<Form />)
    expect(el.find('form')).to.have.length(1);
  })
  
  it('should render children', () => {
    const el = shallow(<Form>
      <div>hi</div>
    </Form>)
    expect(el.find('div')).to.have.length(1)
  })
})