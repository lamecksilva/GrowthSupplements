import 'react-native';
import React from 'react';
import { HomePage } from '../Home';

import { render } from '@testing-library/react-native';

describe('Home Page', () => {
  const { getByText } = render(<HomePage />);

  it('Render text correctly', () => {
    expect(getByText('Home Page')).toBeDefined();
  });
});
