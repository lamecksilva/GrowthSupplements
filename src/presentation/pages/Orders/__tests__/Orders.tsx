import 'react-native';
import React from 'react';
import { OrderPage } from '../Orders';

import { render } from '@testing-library/react-native';

describe('Home Page', () => {
  const { queryByText } = render(<OrderPage />);

  it('Render text correctly', () => {
    expect(queryByText('Order Page')).toBeDefined();
  });
});
