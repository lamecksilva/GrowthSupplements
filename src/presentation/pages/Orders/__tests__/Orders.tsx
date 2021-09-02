import 'react-native';
import React from 'react';
import { OrderPage } from '../Orders';

import { render } from '@testing-library/react-native';

describe('Home Page', () => {
  const { getByText } = render(<OrderPage />);

  it('Render text correctly', () => {
    expect(getByText('Order Page')).toBeDefined();
  });
});
