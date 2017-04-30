import React from 'react';
import { shallow, mount } from 'enzyme';

import Forecast from '../src/components/Forecast';

describe('Forecast component', () => {
  const props = {
    date: 1493899200,
    minTemp: 15.3,
    maxTemp: 20.91,
    icon: '10d'
  };

  it('should allows us to set props', () => {
    const wrapper = mount(<Forecast {...props} />);
    expect(wrapper.props().date).toEqual(1493899200);
    wrapper.setProps({ date: 1493899100 });
    expect(wrapper.props().date).toEqual(1493899100);
  });

  it('should render a Portlet component', () => {
    expect(shallow(<Forecast {...props} />).find('Portlet').exists()).toBe(true);
  });

  it('should render the icon image', () => {
    const src = 'http://openweathermap.org/img/w/10d.png';
    const imgSrc = mount(<Forecast {...props} />).find('.image-center').find('img').prop('src');
    expect(imgSrc).toEqual(src);
  });
});