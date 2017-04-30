import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchForm from '../src/components/SearchForm';

describe('SearchForm component', () => {
  const props = {
    onSubmit: () => {},
    onChange: () => {},
    term: 'Wellington'
  };

  it('should allows us to set props', () => {
    const wrapper = mount(<SearchForm {...props} />);
    expect(wrapper.props().term).toEqual('Wellington');
    wrapper.setProps({ term: 'Christchurch' });
    expect(wrapper.props().term).toEqual('Christchurch');
  });

  it('should have a button and an input field', () => {
    const wrapper = shallow(<SearchForm  {...props} />);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
  });
});