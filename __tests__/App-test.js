import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../src/components/App';

describe('App component', () => {
  it('should be selectable by class "container"', () => {
    expect(shallow(<App />).is('.container')).toBe(true);
  }); 

  it('should render the child component', () => {
    const child = shallow(<h1>Hello</h1>);
    const wrapper = shallow(
      <App>
        <child />
      </App>
    );
    expect(wrapper.children().length).toEqual(1);
  }); 
});