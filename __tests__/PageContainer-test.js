import React from 'react';
import { shallow } from 'enzyme';

import PageContainer from '../src/components/PageContainer';

describe('PageContainer component', () => {
  it('should be selectable by class "page-container"', () => {
    expect(shallow(<PageContainer>Test</PageContainer>).is('.page-container')).toBe(true);
  });
});