import React from 'react';
import { shallow } from 'enzyme';
import { CartFormComponent } from './CartForm';

describe('Component CartForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartFormComponent />);
    expect(component).toBeTruthy();
  });
});