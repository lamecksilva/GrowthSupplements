import 'react-native';
import React from 'react';
import { HomePage } from '..';

import { render } from '@testing-library/react-native';

describe('Home Page', () => {
  const { queryByText } = render(<HomePage />);

  it('Render text correctly', () => {
    expect(queryByText('Home Page')).toBeDefined();
  });
});
