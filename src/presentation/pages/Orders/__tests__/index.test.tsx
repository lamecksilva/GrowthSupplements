import 'react-native';
import React from 'react';
import { OrdersPage } from '..';

import { render } from '@testing-library/react-native';

describe('Orders Page', () => {
  const { queryByText } = render(<OrdersPage />);

  it('Render text correctly', () => {
    expect(queryByText('Orders Page')).toBeDefined();
  });
});
