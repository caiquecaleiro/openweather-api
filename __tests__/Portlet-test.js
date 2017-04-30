import React from 'react';
import { shallow } from 'enzyme';

import Portlet from '../src/components/Portlet';

describe('Portlet component', () => {
  it('should render the span with the title description', () => {
    const props = {
      title: 'Description'
    };
    const wrapper = shallow(<Portlet {...props} />);
    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.find('span').text()).toEqual('Description');
  });

  it('should not render a span with the title description', () => {
    expect(shallow(<Portlet />).find('span').exists()).toBe(false);
  });
});