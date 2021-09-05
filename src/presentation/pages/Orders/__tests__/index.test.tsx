import 'react-native';
import React from 'react';
import { OrdersPage } from '../';

import { render } from '@testing-library/react-native';

describe('Orders Page', () => {
  it('should render correctly', async () => {
    const { findByText } = render(<OrdersPage />);

    const screen = await findByText(/Orders Page/);

    expect(screen).toBeTruthy();
  });
});
