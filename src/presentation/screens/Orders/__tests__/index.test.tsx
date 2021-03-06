import 'react-native';
import React from 'react';
import { OrdersScreen } from '../';

import { render } from '@testing-library/react-native';

describe('Orders Screen', () => {
  it('should render correctly', async () => {
    const { findByText } = render(<OrdersScreen />);

    const screen = await findByText(/Orders Screen/);

    expect(screen).toBeTruthy();
  });
});
