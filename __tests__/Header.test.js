import React from 'react';
import {render} from '@testing-library/react-native';
import Header from '../src/components/Header';

describe('<Header/>', () => {
  it('should render a title', () => {
    const {getByText} = render(<Header title={'Notes'} />);
    expect(getByText('Notes')).toBeTruthy();
  });
});
