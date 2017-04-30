import React from 'react';
import { shallow, mount } from 'enzyme';

import { SearchBar } from '../src/containers/SearchBar';
import { fetchForecast } from '../src/actions/index';

describe('SearchBar container', () => {
  const props = {
    fetchForecast 
  };

  it('should have a SearchForm', () => {
    const wrapper = shallow(<SearchBar {...props} />);
    expect(wrapper.find('SearchForm').length).toEqual(1);
  });

  it('should have an Alert component whenever there is an error', () => {
    const wrapper = mount(<SearchBar {...props} />);

    wrapper.setProps({ error: '' });
    expect(wrapper.find('Alert').length).toEqual(0);

    wrapper.setProps({ error: 'City not found' });
    expect(wrapper.find('Alert').length).toEqual(1);
    expect(wrapper.props().error).toEqual('City not found');
  });
});

